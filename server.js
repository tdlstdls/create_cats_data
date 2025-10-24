// Node.jsとExpressを使ったプロキシサーバーのサンプル

const express = require('express');
const fetch = require('node-fetch'); // 外部URLにリクエストを送るためのライブラリ
const cors = require('cors'); // クライアントからのアクセスを許可するためのライブラリ
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const app = express();
const port = 3000;

// gt_list.jsを読み込んでマップを作成
const gtListPath = path.join(__dirname, 'gt_list.js');
const gtListContent = fs.readFileSync(gtListPath, 'utf8');
const gt_map = new Map();
// gt_list.jsの中身を解析してマップに格納
const gt_list_string = gtListContent.substring(gtListContent.indexOf('[') + 1, gtListContent.lastIndexOf(']'));
const gt_list_array = gt_list_string.split('\r\n').filter(line => line.trim()).map(line => line.trim().replace(/'/g, '').replace(/,$/, ''));
gt_list_array.forEach(item => {
    const parts = item.split(',');
    if (parts.length >= 2) {
        const id = parseInt(parts[0], 10);
        const name = parts.slice(1).join(',');
        gt_map.set(id, name);
    }
});

// 外部データのURL
const externalUrl = 'https://gitlab.com/godfat/battle-cats-rolls/-/raw/master/build/bc-jp.yaml';

// クライアント（自作HTML）からのアクセスを許可
app.use(cors());

// 静的ファイル（index.htmlなど）を配信する設定
// これにより、http://localhost:3000/ でindex.htmlにアクセスできる
app.use(express.static(__dirname));

// cats.jsを生成するAPIエンドポイント
app.get('/api/create-cats-js', async (req, res) => {
    try {
        const response = await fetch(externalUrl);
        if (!response.ok) throw new Error(`外部リソースの取得に失敗: ${response.status}`);
        const yamlText = await response.text();
        const data = yaml.load(yamlText);

        const catsArray = Object.entries(data.cats).map(([id, catData]) => ({
            id: parseInt(id, 10),
            name: catData.name[0],
            rarity: catData.rarity
        }));

        const jsContent = `const cats = ${JSON.stringify(catsArray, null, 2)};`;
                const jsPath = path.join(__dirname, 'data', 'cats.js');
        fs.writeFileSync(jsPath, jsContent, 'utf8');

        res.status(200).send('cats.js が正常に作成されました。');
    } catch (e) {
        console.error('cats.js の作成中にエラーが発生しました:', e);
        res.status(500).send('cats.js の作成に失敗しました。');
    }
});

// gacha.jsを生成するAPIエンドポイント
app.get('/api/create-gacha-js', async (req, res) => {
    try {
        const response = await fetch(externalUrl);
        if (!response.ok) throw new Error(`外部リソースの取得に失敗: ${response.status}`);
        const yamlText = await response.text();
        const data = yaml.load(yamlText);

        const latestGachas = {};
        Object.entries(data.gacha).forEach(([id, gachaData]) => {
            const currentId = parseInt(id, 10);
            const seriesId = gachaData.series_id;

            const currentGacha = {
                id: currentId,
                name: gt_map.get(seriesId) || gachaData.name,
                cats: gachaData.cats
            };

            if (!latestGachas[seriesId] || currentId > latestGachas[seriesId].id) {
                latestGachas[seriesId] = currentGacha;
            }
        });

        const gachaArray = Object.values(latestGachas);

        let jsContent = JSON.stringify(gachaArray, null, 2);
        // cats配列のインデントを削除
        jsContent = jsContent.replace(/(\n\s+\[\n)([\s\S]*?)(\n\s+\])/g, (match, start, content, end) => {
            const oneLineContent = content.replace(/\s+/g, ' ').trim();
            return `[${oneLineContent}]`;
        });

        const jsPath = path.join(__dirname, 'data', 'gacha.js');
        fs.writeFileSync(jsPath, `const gacha = ${jsContent};`, 'utf8');

        res.status(200).send('gacha.js が正常に作成されました (重複は除外されました)。');
    } catch (e) {
        console.error('gacha.js の作成中にエラーが発生しました:', e);
        res.status(500).send('gacha.js の作成に失敗しました。');
    }
});

// events.jsを生成するAPIエンドポイント
app.get('/api/create-events-js', async (req, res) => {
    try {
        const response = await fetch(externalUrl);
        if (!response.ok) throw new Error(`外部リソースの取得に失敗: ${response.status}`);
        const yamlText = await response.text();
        const data = yaml.load(yamlText);

        const oldestEvents = {};
        Object.entries(data.events).forEach(([dateStr, eventData]) => {
            const eventId = eventData.id;

            if (!oldestEvents[eventId] || dateStr < oldestEvents[eventId].key) {
                oldestEvents[eventId] = {
                    key: dateStr,
                    id: eventData.id,
                    name: gt_map.get(eventId) || eventData.name,
                    rare: eventData.rare,
                    supa: eventData.supa,
                    uber: eventData.uber,
                    legend: eventData.legend,
                    guaranteed: eventData.guaranteed
                };
            }
        });

        const eventsArray = Object.values(oldestEvents);

        const jsContent = `const events = ${JSON.stringify(eventsArray, null, 2)};`;
                const jsPath = path.join(__dirname, 'data', 'events.js');
        fs.writeFileSync(jsPath, jsContent, 'utf8');

        res.status(200).send('events.js が正常に作成されました (重複は除外されました)。');
    } catch (e) {
        console.error('events.js の作成中にエラーが発生しました:', e);
        res.status(500).send('events.js の作成に失敗しました。');
    }
});

app.listen(port, () => {
    console.log(`プロキシサーバーが http://localhost:${port} で起動しました`);
});