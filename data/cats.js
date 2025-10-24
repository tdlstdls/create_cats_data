const cats = [
  {
    "id": 1,
    "name": "ネコ",
    "rarity": 0
  },
  {
    "id": 2,
    "name": "タンクネコ",
    "rarity": 0
  },
  {
    "id": 3,
    "name": "バトルネコ",
    "rarity": 0
  },
  {
    "id": 4,
    "name": "キモネコ",
    "rarity": 0
  },
  {
    "id": 5,
    "name": "ウシネコ",
    "rarity": 0
  },
  {
    "id": 6,
    "name": "ネコノトリ",
    "rarity": 0
  },
  {
    "id": 7,
    "name": "ネコフィッシュ",
    "rarity": 0
  },
  {
    "id": 8,
    "name": "ネコトカゲ",
    "rarity": 0
  },
  {
    "id": 9,
    "name": "巨神ネコ",
    "rarity": 0
  },
  {
    "id": 10,
    "name": "ネコ女優",
    "rarity": 1
  },
  {
    "id": 11,
    "name": "カンフーにゃんこ",
    "rarity": 1
  },
  {
    "id": 12,
    "name": "Mr.",
    "rarity": 1
  },
  {
    "id": 13,
    "name": "猫縛り",
    "rarity": 1
  },
  {
    "id": 14,
    "name": "女王猫",
    "rarity": 1
  },
  {
    "id": 15,
    "name": "ネコの箱詰め",
    "rarity": 1
  },
  {
    "id": 16,
    "name": "ネコパンツ",
    "rarity": 1
  },
  {
    "id": 17,
    "name": "もねこ",
    "rarity": 1
  },
  {
    "id": 18,
    "name": "ネコリンリン",
    "rarity": 1
  },
  {
    "id": 19,
    "name": "ネコ忍者",
    "rarity": 1
  },
  {
    "id": 20,
    "name": "ネコゾンビ",
    "rarity": 1
  },
  {
    "id": 21,
    "name": "ネコざむらい",
    "rarity": 1
  },
  {
    "id": 22,
    "name": "スモウネコ",
    "rarity": 1
  },
  {
    "id": 23,
    "name": "ネコフィーバー",
    "rarity": 1
  },
  {
    "id": 24,
    "name": "ネコスカート",
    "rarity": 1
  },
  {
    "id": 25,
    "name": "ネコヴァルキリー",
    "rarity": 1
  },
  {
    "id": 26,
    "name": "ネコムート",
    "rarity": 1
  },
  {
    "id": 27,
    "name": "ケリ姫",
    "rarity": 1
  },
  {
    "id": 28,
    "name": "ネコひめ",
    "rarity": 1
  },
  {
    "id": 29,
    "name": "ネコカプセル",
    "rarity": 1
  },
  {
    "id": 30,
    "name": "マスクオブネコ",
    "rarity": 1
  },
  {
    "id": 31,
    "name": "ネコぼさつ",
    "rarity": 3
  },
  {
    "id": 32,
    "name": "ネコ番長",
    "rarity": 3
  },
  {
    "id": 33,
    "name": "ネコザイル",
    "rarity": 3
  },
  {
    "id": 34,
    "name": "ねこタツ",
    "rarity": 3
  },
  {
    "id": 35,
    "name": "ネコルガ",
    "rarity": 4
  },
  {
    "id": 36,
    "name": "オタネコ",
    "rarity": 3
  },
  {
    "id": 37,
    "name": "ネコスイマー",
    "rarity": 3
  },
  {
    "id": 38,
    "name": "ネコホッピング",
    "rarity": 2
  },
  {
    "id": 39,
    "name": "ネコ車輪",
    "rarity": 2
  },
  {
    "id": 40,
    "name": "ネコリンゴ",
    "rarity": 3
  },
  {
    "id": 41,
    "name": "ネコバスたぶ",
    "rarity": 3
  },
  {
    "id": 42,
    "name": "ネコエステ",
    "rarity": 2
  },
  {
    "id": 43,
    "name": "ネコアイス",
    "rarity": 4
  },
  {
    "id": 44,
    "name": "ネコマシン",
    "rarity": 4
  },
  {
    "id": 45,
    "name": "鬼にゃんま",
    "rarity": 4
  },
  {
    "id": 46,
    "name": "芸者ねこ",
    "rarity": 1
  },
  {
    "id": 47,
    "name": "ねこジュラ",
    "rarity": 2
  },
  {
    "id": 48,
    "name": "ねこファイター",
    "rarity": 2
  },
  {
    "id": 49,
    "name": "ねこ海賊",
    "rarity": 2
  },
  {
    "id": 50,
    "name": "ねこ泥棒",
    "rarity": 2
  },
  {
    "id": 51,
    "name": "ねこ僧侶",
    "rarity": 2
  },
  {
    "id": 52,
    "name": "ねこ占い師",
    "rarity": 2
  },
  {
    "id": 53,
    "name": "ネコシャーマン",
    "rarity": 2
  },
  {
    "id": 54,
    "name": "エヴァンジェリスト",
    "rarity": 4
  },
  {
    "id": 55,
    "name": "10式戦車",
    "rarity": 1
  },
  {
    "id": 56,
    "name": "ネコ魔女",
    "rarity": 2
  },
  {
    "id": 57,
    "name": "ネコアーチャー",
    "rarity": 2
  },
  {
    "id": 58,
    "name": "ネコシュバリエ",
    "rarity": 4
  },
  {
    "id": 59,
    "name": "ネコ魔剣士",
    "rarity": 2
  },
  {
    "id": 60,
    "name": "ねこベビー",
    "rarity": 4
  },
  {
    "id": 61,
    "name": "ネコブ・ロンズ",
    "rarity": 2
  },
  {
    "id": 62,
    "name": "ねこ寿司",
    "rarity": 3
  },
  {
    "id": 63,
    "name": "ネコポン",
    "rarity": 1
  },
  {
    "id": 64,
    "name": "ネコ運動会",
    "rarity": 2
  },
  {
    "id": 65,
    "name": "剣士",
    "rarity": 2
  },
  {
    "id": 66,
    "name": "ウシ姫",
    "rarity": 2
  },
  {
    "id": 67,
    "name": "KHM48",
    "rarity": 4
  },
  {
    "id": 68,
    "name": "チビガウ",
    "rarity": 2
  },
  {
    "id": 69,
    "name": "執行者",
    "rarity": 3
  },
  {
    "id": 70,
    "name": "眠れるケリの美女",
    "rarity": 3
  },
  {
    "id": 71,
    "name": "ネコリーマン",
    "rarity": 2
  },
  {
    "id": 72,
    "name": "真田幸村",
    "rarity": 4
  },
  {
    "id": 73,
    "name": "前田慶次",
    "rarity": 4
  },
  {
    "id": 74,
    "name": "織田信長",
    "rarity": 4
  },
  {
    "id": 75,
    "name": "トナカイフィッシュ",
    "rarity": 2
  },
  {
    "id": 76,
    "name": "風神のウィンディ",
    "rarity": 4
  },
  {
    "id": 77,
    "name": "雷神のサンディア",
    "rarity": 4
  },
  {
    "id": 78,
    "name": "ドロイド",
    "rarity": 2
  },
  {
    "id": 79,
    "name": "ネコと宇宙",
    "rarity": 2
  },
  {
    "id": 80,
    "name": "にゃんこ成人",
    "rarity": 2
  },
  {
    "id": 81,
    "name": "吾輩は鬼である",
    "rarity": 2
  },
  {
    "id": 82,
    "name": "ひなにゃんこ",
    "rarity": 2
  },
  {
    "id": 83,
    "name": "ネコ忍者～青～",
    "rarity": 1
  },
  {
    "id": 84,
    "name": "地龍ソドム",
    "rarity": 4
  },
  {
    "id": 85,
    "name": "聖龍メギドラ",
    "rarity": 4
  },
  {
    "id": 86,
    "name": "竜騎士バルス",
    "rarity": 4
  },
  {
    "id": 87,
    "name": "神龍かむくら",
    "rarity": 4
  },
  {
    "id": 88,
    "name": "竜戦機ライデン",
    "rarity": 4
  },
  {
    "id": 89,
    "name": "ネコなわとび",
    "rarity": 2
  },
  {
    "id": 90,
    "name": "ニムエ",
    "rarity": 4
  },
  {
    "id": 91,
    "name": "猿王",
    "rarity": 4
  },
  {
    "id": 92,
    "name": "狂乱のネコ",
    "rarity": 3
  },
  {
    "id": 93,
    "name": "狂乱のタンクネコ",
    "rarity": 3
  },
  {
    "id": 94,
    "name": "狂乱のバトルネコ",
    "rarity": 3
  },
  {
    "id": 95,
    "name": "狂乱のキモネコ",
    "rarity": 3
  },
  {
    "id": 96,
    "name": "狂乱のウシネコ",
    "rarity": 3
  },
  {
    "id": 97,
    "name": "狂乱のネコノトリ",
    "rarity": 3
  },
  {
    "id": 98,
    "name": "狂乱のネコフィッシュ",
    "rarity": 3
  },
  {
    "id": 99,
    "name": "狂乱のネコトカゲ",
    "rarity": 3
  },
  {
    "id": 100,
    "name": "狂乱の巨神ネコ",
    "rarity": 3
  },
  {
    "id": 101,
    "name": "ネコ乙女",
    "rarity": 2
  },
  {
    "id": 102,
    "name": "弱酸性エル",
    "rarity": 1
  },
  {
    "id": 103,
    "name": "レッドマローン",
    "rarity": 1
  },
  {
    "id": 104,
    "name": "歌謡にゃんこ",
    "rarity": 1
  },
  {
    "id": 105,
    "name": "マジでコイしてる",
    "rarity": 2
  },
  {
    "id": 106,
    "name": "猿帝のクウ",
    "rarity": 4
  },
  {
    "id": 107,
    "name": "召し豚のカイ",
    "rarity": 4
  },
  {
    "id": 108,
    "name": "宝杖のカッパーマイン",
    "rarity": 4
  },
  {
    "id": 109,
    "name": "にゃんこ３兄弟",
    "rarity": 1
  },
  {
    "id": 110,
    "name": "マダム・ザ・花嫁",
    "rarity": 2
  },
  {
    "id": 111,
    "name": "セレス",
    "rarity": 2
  },
  {
    "id": 112,
    "name": "ノノ",
    "rarity": 2
  },
  {
    "id": 113,
    "name": "オルガ",
    "rarity": 2
  },
  {
    "id": 114,
    "name": "ノルン",
    "rarity": 2
  },
  {
    "id": 115,
    "name": "よいち",
    "rarity": 2
  },
  {
    "id": 116,
    "name": "セラム",
    "rarity": 2
  },
  {
    "id": 117,
    "name": "フウ",
    "rarity": 2
  },
  {
    "id": 118,
    "name": "アウラ",
    "rarity": 3
  },
  {
    "id": 119,
    "name": "レイ",
    "rarity": 3
  },
  {
    "id": 120,
    "name": "ワイバーン",
    "rarity": 4
  },
  {
    "id": 121,
    "name": "癒術士",
    "rarity": 1
  },
  {
    "id": 122,
    "name": "メルク",
    "rarity": 1
  },
  {
    "id": 123,
    "name": "女王様の休日",
    "rarity": 2
  },
  {
    "id": 124,
    "name": "マメマメにゃんこ",
    "rarity": 1
  },
  {
    "id": 125,
    "name": "伊達政宗",
    "rarity": 4
  },
  {
    "id": 126,
    "name": "武田信玄",
    "rarity": 4
  },
  {
    "id": 127,
    "name": "カラクリにゃんこ",
    "rarity": 2
  },
  {
    "id": 128,
    "name": "ネコフラワー",
    "rarity": 1
  },
  {
    "id": 129,
    "name": "うらめしにゃん",
    "rarity": 2
  },
  {
    "id": 130,
    "name": "金ネコ",
    "rarity": 3
  },
  {
    "id": 131,
    "name": "ウルフとウルルン",
    "rarity": 1
  },
  {
    "id": 132,
    "name": "ねねこ",
    "rarity": 3
  },
  {
    "id": 133,
    "name": "カンフーにゃんこＧ",
    "rarity": 2
  },
  {
    "id": 134,
    "name": "ヒカキン",
    "rarity": 1
  },
  {
    "id": 135,
    "name": "うらしまタロウ",
    "rarity": 4
  },
  {
    "id": 136,
    "name": "ツルの恩返し",
    "rarity": 4
  },
  {
    "id": 137,
    "name": "ももたろう",
    "rarity": 4
  },
  {
    "id": 138,
    "name": "かさじぞう",
    "rarity": 4
  },
  {
    "id": 139,
    "name": "かぐやひめ",
    "rarity": 4
  },
  {
    "id": 140,
    "name": "ネコンドー",
    "rarity": 1
  },
  {
    "id": 141,
    "name": "ふにゅふにゅネコ",
    "rarity": 1
  },
  {
    "id": 142,
    "name": "神様",
    "rarity": 1
  },
  {
    "id": 143,
    "name": "ネコチュートリアル",
    "rarity": 1
  },
  {
    "id": 144,
    "name": "ねこナース",
    "rarity": 4
  },
  {
    "id": 145,
    "name": "にゃんこ城Mini",
    "rarity": 3
  },
  {
    "id": 146,
    "name": "ねこガンマン",
    "rarity": 2
  },
  {
    "id": 147,
    "name": "たけうまねこ",
    "rarity": 2
  },
  {
    "id": 148,
    "name": "ブリキネコ",
    "rarity": 2
  },
  {
    "id": 149,
    "name": "ねこロッカー",
    "rarity": 2
  },
  {
    "id": 150,
    "name": "ねこ人魚",
    "rarity": 2
  },
  {
    "id": 151,
    "name": "窓辺の乙女ネコ",
    "rarity": 3
  },
  {
    "id": 152,
    "name": "ネコバーベル",
    "rarity": 3
  },
  {
    "id": 153,
    "name": "ネコスケート",
    "rarity": 3
  },
  {
    "id": 154,
    "name": "ネコトースター",
    "rarity": 3
  },
  {
    "id": 155,
    "name": "ねこフープ",
    "rarity": 2
  },
  {
    "id": 156,
    "name": "156-1",
    "rarity": 4
  },
  {
    "id": 157,
    "name": "ドラリー剣士",
    "rarity": 2
  },
  {
    "id": 158,
    "name": "ヌボボ",
    "rarity": 1
  },
  {
    "id": 159,
    "name": "上杉謙信",
    "rarity": 4
  },
  {
    "id": 160,
    "name": "冥界のカリファ",
    "rarity": 4
  },
  {
    "id": 161,
    "name": "ユーリンチー",
    "rarity": 3
  },
  {
    "id": 162,
    "name": "狂乱のケリ姫",
    "rarity": 4
  },
  {
    "id": 163,
    "name": "綾小路 翔",
    "rarity": 1
  },
  {
    "id": 164,
    "name": "早乙女 光",
    "rarity": 1
  },
  {
    "id": 165,
    "name": "西園寺 瞳",
    "rarity": 1
  },
  {
    "id": 166,
    "name": "星グランマニエ",
    "rarity": 1
  },
  {
    "id": 167,
    "name": "白鳥松竹梅",
    "rarity": 1
  },
  {
    "id": 168,
    "name": "ネコヤンキー",
    "rarity": 2
  },
  {
    "id": 169,
    "name": "アシルガ",
    "rarity": 4
  },
  {
    "id": 170,
    "name": "クビルガ",
    "rarity": 4
  },
  {
    "id": 171,
    "name": "テコルガ",
    "rarity": 4
  },
  {
    "id": 172,
    "name": "バララガ",
    "rarity": 4
  },
  {
    "id": 173,
    "name": "コニャンダム",
    "rarity": 1
  },
  {
    "id": 174,
    "name": "厨房マンボウ",
    "rarity": 3
  },
  {
    "id": 175,
    "name": "マンボ王",
    "rarity": 4
  },
  {
    "id": 176,
    "name": "にゃんぼう",
    "rarity": 1
  },
  {
    "id": 177,
    "name": "マシュマロにゃん",
    "rarity": 2
  },
  {
    "id": 178,
    "name": "覇龍ディオラムス",
    "rarity": 4
  },
  {
    "id": 179,
    "name": "極道にゃんこ",
    "rarity": 1
  },
  {
    "id": 180,
    "name": "タクヤとユキ",
    "rarity": 2
  },
  {
    "id": 181,
    "name": "謎の少女ユキ",
    "rarity": 4
  },
  {
    "id": 182,
    "name": "ゆきにゃん",
    "rarity": 1
  },
  {
    "id": 184,
    "name": "にゃんこカートR",
    "rarity": 2
  },
  {
    "id": 185,
    "name": "ミスターニンジャ",
    "rarity": 1
  },
  {
    "id": 186,
    "name": "ハルシュト",
    "rarity": 4
  },
  {
    "id": 187,
    "name": "コーネリア",
    "rarity": 4
  },
  {
    "id": 188,
    "name": "ユーヴェンス",
    "rarity": 4
  },
  {
    "id": 189,
    "name": "ミスティカ",
    "rarity": 4
  },
  {
    "id": 190,
    "name": "アロイス",
    "rarity": 3
  },
  {
    "id": 191,
    "name": "シトルイユ",
    "rarity": 3
  },
  {
    "id": 192,
    "name": "ティティ",
    "rarity": 1
  },
  {
    "id": 193,
    "name": "山岡実乃里",
    "rarity": 1
  },
  {
    "id": 194,
    "name": "中村奏絵",
    "rarity": 1
  },
  {
    "id": 195,
    "name": "アキラ",
    "rarity": 4
  },
  {
    "id": 196,
    "name": "西園寺メカ子",
    "rarity": 4
  },
  {
    "id": 197,
    "name": "キャットマンダディ",
    "rarity": 4
  },
  {
    "id": 198,
    "name": "サイキックネコ",
    "rarity": 2
  },
  {
    "id": 199,
    "name": "ねこ陰陽師",
    "rarity": 2
  },
  {
    "id": 200,
    "name": "ネコサーファー",
    "rarity": 3
  },
  {
    "id": 201,
    "name": "メタルネコ",
    "rarity": 3
  },
  {
    "id": 202,
    "name": "ドラムメニャー",
    "rarity": 2
  },
  {
    "id": 203,
    "name": "ネコ小籠包",
    "rarity": 1
  },
  {
    "id": 204,
    "name": "カチカチヤマンズ",
    "rarity": 4
  },
  {
    "id": 205,
    "name": "アイルー",
    "rarity": 1
  },
  {
    "id": 206,
    "name": "シェリア【キリン】",
    "rarity": 1
  },
  {
    "id": 207,
    "name": "リオレウス",
    "rarity": 1
  },
  {
    "id": 208,
    "name": "リオレイア",
    "rarity": 1
  },
  {
    "id": 209,
    "name": "キリンネコ",
    "rarity": 1
  },
  {
    "id": 210,
    "name": "ちびネコ",
    "rarity": 1
  },
  {
    "id": 211,
    "name": "ちびタンクネコ",
    "rarity": 1
  },
  {
    "id": 212,
    "name": "ちびバトルネコ",
    "rarity": 1
  },
  {
    "id": 213,
    "name": "ホワイトラビット",
    "rarity": 4
  },
  {
    "id": 214,
    "name": "にゃんこバーガー",
    "rarity": 1
  },
  {
    "id": 215,
    "name": "百太郎",
    "rarity": 2
  },
  {
    "id": 216,
    "name": "マルコ",
    "rarity": 2
  },
  {
    "id": 217,
    "name": "ターマ",
    "rarity": 2
  },
  {
    "id": 218,
    "name": "エリ",
    "rarity": 2
  },
  {
    "id": 219,
    "name": "フィオ",
    "rarity": 2
  },
  {
    "id": 220,
    "name": "SV-001",
    "rarity": 3
  },
  {
    "id": 221,
    "name": "アレン・オニール",
    "rarity": 3
  },
  {
    "id": 222,
    "name": "マーズピープル",
    "rarity": 2
  },
  {
    "id": 223,
    "name": "ヒュージハーミット",
    "rarity": 4
  },
  {
    "id": 224,
    "name": "ジュピターキング",
    "rarity": 4
  },
  {
    "id": 225,
    "name": "モーデン元帥",
    "rarity": 4
  },
  {
    "id": 226,
    "name": "ハイ・ドゥ",
    "rarity": 4
  },
  {
    "id": 227,
    "name": "呪術師デスピエロ",
    "rarity": 4
  },
  {
    "id": 228,
    "name": "にゃんぷきん",
    "rarity": 2
  },
  {
    "id": 229,
    "name": "ハロウィンねねこ",
    "rarity": 3
  },
  {
    "id": 230,
    "name": "ウィンディスイート",
    "rarity": 4
  },
  {
    "id": 231,
    "name": "デビルサンディア",
    "rarity": 4
  },
  {
    "id": 232,
    "name": "おでん",
    "rarity": 1
  },
  {
    "id": 233,
    "name": "光の神徒ヴァルキリー",
    "rarity": 2
  },
  {
    "id": 234,
    "name": "神徒ブリュンヒルデ",
    "rarity": 2
  },
  {
    "id": 235,
    "name": "神徒スルズ",
    "rarity": 2
  },
  {
    "id": 236,
    "name": "豊穣の女神フレイヤ",
    "rarity": 3
  },
  {
    "id": 237,
    "name": "軍神オーディン",
    "rarity": 4
  },
  {
    "id": 238,
    "name": "おかめはちもくネコ",
    "rarity": 3
  },
  {
    "id": 239,
    "name": "ボンボンネコ",
    "rarity": 3
  },
  {
    "id": 240,
    "name": "見習いスニャイパー",
    "rarity": 3
  },
  {
    "id": 241,
    "name": "トゲルガ",
    "rarity": 4
  },
  {
    "id": 242,
    "name": "雪だるまのスノーカイ",
    "rarity": 4
  },
  {
    "id": 243,
    "name": "サンタのメリークウ",
    "rarity": 4
  },
  {
    "id": 244,
    "name": "聖夜のシスターカッパー",
    "rarity": 4
  },
  {
    "id": 245,
    "name": "ネコのプレゼント",
    "rarity": 2
  },
  {
    "id": 246,
    "name": "ちびキモネコ",
    "rarity": 1
  },
  {
    "id": 247,
    "name": "ちびウシネコ",
    "rarity": 1
  },
  {
    "id": 248,
    "name": "ちびネコノトリ",
    "rarity": 1
  },
  {
    "id": 249,
    "name": "死にたてにゃんこ",
    "rarity": 1
  },
  {
    "id": 250,
    "name": "剣士",
    "rarity": 2
  },
  {
    "id": 251,
    "name": "騎馬兵",
    "rarity": 2
  },
  {
    "id": 252,
    "name": "アシュラ",
    "rarity": 2
  },
  {
    "id": 253,
    "name": "バトルバルーン",
    "rarity": 2
  },
  {
    "id": 254,
    "name": "ドラゴンライダー",
    "rarity": 2
  },
  {
    "id": 255,
    "name": "プリティキャット",
    "rarity": 2
  },
  {
    "id": 256,
    "name": "サイクロプス",
    "rarity": 2
  },
  {
    "id": 257,
    "name": "ゴーレム",
    "rarity": 1
  },
  {
    "id": 258,
    "name": "天空神ゼウス",
    "rarity": 4
  },
  {
    "id": 259,
    "name": "守護神アヌビス",
    "rarity": 4
  },
  {
    "id": 260,
    "name": "美女神アフロディーテ",
    "rarity": 4
  },
  {
    "id": 261,
    "name": "ネコウェイ",
    "rarity": 3
  },
  {
    "id": 262,
    "name": "天誅ハヤブサ",
    "rarity": 4
  },
  {
    "id": 263,
    "name": "ニャームス",
    "rarity": 1
  },
  {
    "id": 264,
    "name": "ポチ",
    "rarity": 1
  },
  {
    "id": 265,
    "name": "クロミ",
    "rarity": 1
  },
  {
    "id": 266,
    "name": "せつ子",
    "rarity": 1
  },
  {
    "id": 267,
    "name": "ねば～る君",
    "rarity": 1
  },
  {
    "id": 268,
    "name": "ネコタイフーン",
    "rarity": 3
  },
  {
    "id": 269,
    "name": "ネコずきんミーニャ",
    "rarity": 1
  },
  {
    "id": 270,
    "name": "幼獣ガオ",
    "rarity": 4
  },
  {
    "id": 271,
    "name": "狂乱のユキ",
    "rarity": 4
  },
  {
    "id": 272,
    "name": "太陽神アマテラス",
    "rarity": 4
  },
  {
    "id": 273,
    "name": "繁栄神ガネーシャ",
    "rarity": 4
  },
  {
    "id": 274,
    "name": "チアにゃんこ",
    "rarity": 3
  },
  {
    "id": 275,
    "name": "トロピカルカリファ",
    "rarity": 4
  },
  {
    "id": 276,
    "name": "真夏のホワイトラビット",
    "rarity": 4
  },
  {
    "id": 277,
    "name": "夏色ねねこ",
    "rarity": 3
  },
  {
    "id": 278,
    "name": "なめこ",
    "rarity": 2
  },
  {
    "id": 279,
    "name": "なめこタンク",
    "rarity": 1
  },
  {
    "id": 280,
    "name": "白ネコなめこ",
    "rarity": 1
  },
  {
    "id": 281,
    "name": "要塞なめこ",
    "rarity": 1
  },
  {
    "id": 282,
    "name": "ふてニャン",
    "rarity": 2
  },
  {
    "id": 283,
    "name": "ネコ阿波踊り",
    "rarity": 2
  },
  {
    "id": 284,
    "name": "猫飯拳パイパイ",
    "rarity": 4
  },
  {
    "id": 285,
    "name": "ネコ特急",
    "rarity": 3
  },
  {
    "id": 286,
    "name": "286-1",
    "rarity": 1
  },
  {
    "id": 287,
    "name": "閃雷機兵レイ",
    "rarity": 4
  },
  {
    "id": 288,
    "name": "ネコ球児",
    "rarity": 3
  },
  {
    "id": 289,
    "name": "鹿目まどか",
    "rarity": 4
  },
  {
    "id": 290,
    "name": "暁美ほむら",
    "rarity": 4
  },
  {
    "id": 291,
    "name": "美樹さやか",
    "rarity": 4
  },
  {
    "id": 292,
    "name": "巴マミ",
    "rarity": 4
  },
  {
    "id": 293,
    "name": "佐倉杏子",
    "rarity": 4
  },
  {
    "id": 294,
    "name": "キュゥべえ",
    "rarity": 3
  },
  {
    "id": 295,
    "name": "ネコまどか",
    "rarity": 2
  },
  {
    "id": 296,
    "name": "ネコほむら",
    "rarity": 2
  },
  {
    "id": 297,
    "name": "ネコさやか",
    "rarity": 2
  },
  {
    "id": 298,
    "name": "ネコマミ",
    "rarity": 2
  },
  {
    "id": 299,
    "name": "ネコ杏子",
    "rarity": 2
  },
  {
    "id": 300,
    "name": "ちびまどか",
    "rarity": 2
  },
  {
    "id": 301,
    "name": "ちびほむら",
    "rarity": 1
  },
  {
    "id": 302,
    "name": "ネコキュゥべえ",
    "rarity": 2
  },
  {
    "id": 303,
    "name": "ネコアイスゴースト",
    "rarity": 4
  },
  {
    "id": 304,
    "name": "ネコ屋台",
    "rarity": 2
  },
  {
    "id": 305,
    "name": "帝国陸軍カタパルズ",
    "rarity": 4
  },
  {
    "id": 306,
    "name": "古代軍船ガレーズ",
    "rarity": 4
  },
  {
    "id": 307,
    "name": "飛空襲撃ボンバーズ",
    "rarity": 4
  },
  {
    "id": 308,
    "name": "ネコジャンパー",
    "rarity": 3
  },
  {
    "id": 309,
    "name": "ネコバサミ",
    "rarity": 2
  },
  {
    "id": 310,
    "name": "ネコ博士",
    "rarity": 1
  },
  {
    "id": 311,
    "name": "ネコナースキャンドル",
    "rarity": 4
  },
  {
    "id": 312,
    "name": "ちびネコフィッシュ",
    "rarity": 1
  },
  {
    "id": 313,
    "name": "ちびネコトカゲ",
    "rarity": 1
  },
  {
    "id": 314,
    "name": "ちび巨神ネコ",
    "rarity": 1
  },
  {
    "id": 315,
    "name": "大掃除ねねこ",
    "rarity": 3
  },
  {
    "id": 316,
    "name": "ピコ太郎",
    "rarity": 2
  },
  {
    "id": 317,
    "name": "海王神ポセイドン",
    "rarity": 4
  },
  {
    "id": 318,
    "name": "CPAC",
    "rarity": 1
  },
  {
    "id": 319,
    "name": "巫女姫ミタマ",
    "rarity": 4
  },
  {
    "id": 320,
    "name": "殺意のネコ",
    "rarity": 2
  },
  {
    "id": 321,
    "name": "321_1",
    "rarity": 2
  },
  {
    "id": 322,
    "name": "ナゾウサギ",
    "rarity": 1
  },
  {
    "id": 323,
    "name": "さるかに合戦",
    "rarity": 4
  },
  {
    "id": 324,
    "name": "宮木武蔵",
    "rarity": 1
  },
  {
    "id": 325,
    "name": "ネコストーン",
    "rarity": 2
  },
  {
    "id": 326,
    "name": "ネコボクサー",
    "rarity": 2
  },
  {
    "id": 327,
    "name": "メビウス",
    "rarity": 4
  },
  {
    "id": 328,
    "name": "ベリアル",
    "rarity": 3
  },
  {
    "id": 329,
    "name": "ハッピー100",
    "rarity": 1
  },
  {
    "id": 330,
    "name": "ネコエッグ",
    "rarity": 2
  },
  {
    "id": 331,
    "name": "上杉謙信・春",
    "rarity": 4
  },
  {
    "id": 332,
    "name": "道化師エッグダック",
    "rarity": 4
  },
  {
    "id": 333,
    "name": "イースターねねこ",
    "rarity": 3
  },
  {
    "id": 334,
    "name": "黒獣ガオウ",
    "rarity": 4
  },
  {
    "id": 335,
    "name": "狐娘ヒメユリ",
    "rarity": 4
  },
  {
    "id": 336,
    "name": "人魚娘ルリィ",
    "rarity": 4
  },
  {
    "id": 337,
    "name": "ミイラ娘レイカ",
    "rarity": 4
  },
  {
    "id": 338,
    "name": "プリンセスケリ姫号",
    "rarity": 4
  },
  {
    "id": 339,
    "name": "今川義元",
    "rarity": 4
  },
  {
    "id": 340,
    "name": "340_1",
    "rarity": 1
  },
  {
    "id": 341,
    "name": "赤髪のゆきにゃん",
    "rarity": 2
  },
  {
    "id": 342,
    "name": "失われし世界のユキ",
    "rarity": 4
  },
  {
    "id": 343,
    "name": "ネコまねき",
    "rarity": 1
  },
  {
    "id": 344,
    "name": "なめネコ",
    "rarity": 2
  },
  {
    "id": 345,
    "name": "オルトス",
    "rarity": 3
  },
  {
    "id": 346,
    "name": "ミシェリア",
    "rarity": 4
  },
  {
    "id": 347,
    "name": "とどめき",
    "rarity": 4
  },
  {
    "id": 348,
    "name": "ぐでたまにゃんこ",
    "rarity": 1
  },
  {
    "id": 349,
    "name": "ぐでたまプレート",
    "rarity": 2
  },
  {
    "id": 350,
    "name": "ぐでぐでプリン",
    "rarity": 3
  },
  {
    "id": 351,
    "name": "ニセたま軍団",
    "rarity": 4
  },
  {
    "id": 352,
    "name": "双掌星のシシル＆コマリ",
    "rarity": 4
  },
  {
    "id": 353,
    "name": "ネコ仙人",
    "rarity": 1
  },
  {
    "id": 354,
    "name": "チョコレート",
    "rarity": 2
  },
  {
    "id": 355,
    "name": "常夏の果実カイ",
    "rarity": 4
  },
  {
    "id": 356,
    "name": "観測兵器ガリレオ",
    "rarity": 4
  },
  {
    "id": 357,
    "name": "ノラ",
    "rarity": 1
  },
  {
    "id": 358,
    "name": "狼娘ディル",
    "rarity": 4
  },
  {
    "id": 359,
    "name": "ゾンビ娘ヴェルヴェーヌ",
    "rarity": 4
  },
  {
    "id": 360,
    "name": "火の精霊メララ",
    "rarity": 4
  },
  {
    "id": 361,
    "name": "水の精霊ミズリィ",
    "rarity": 4
  },
  {
    "id": 362,
    "name": "風の精霊エアル",
    "rarity": 4
  },
  {
    "id": 363,
    "name": "セイバー",
    "rarity": 4
  },
  {
    "id": 364,
    "name": "遠坂 凛",
    "rarity": 4
  },
  {
    "id": 365,
    "name": "イリヤスフィール",
    "rarity": 4
  },
  {
    "id": 366,
    "name": "アーチャー",
    "rarity": 4
  },
  {
    "id": 367,
    "name": "ランサー",
    "rarity": 4
  },
  {
    "id": 368,
    "name": "ライダー",
    "rarity": 4
  },
  {
    "id": 369,
    "name": "ギルガメッシュ",
    "rarity": 4
  },
  {
    "id": 370,
    "name": "ネコセイバー",
    "rarity": 1
  },
  {
    "id": 371,
    "name": "ネコ桜",
    "rarity": 2
  },
  {
    "id": 372,
    "name": "ネコ凛",
    "rarity": 2
  },
  {
    "id": 373,
    "name": "ネコイリヤ",
    "rarity": 2
  },
  {
    "id": 374,
    "name": "ちび士郎",
    "rarity": 2
  },
  {
    "id": 375,
    "name": "ちび桜",
    "rarity": 1
  },
  {
    "id": 376,
    "name": "記念ネコ",
    "rarity": 1
  },
  {
    "id": 377,
    "name": "ネコ探査機",
    "rarity": 2
  },
  {
    "id": 378,
    "name": "ネコフェンシング",
    "rarity": 3
  },
  {
    "id": 379,
    "name": "黒無垢のミタマ",
    "rarity": 4
  },
  {
    "id": 380,
    "name": "ネコバレー",
    "rarity": 2
  },
  {
    "id": 381,
    "name": "幼傑ダルターニャ",
    "rarity": 4
  },
  {
    "id": 382,
    "name": "ねこ農家",
    "rarity": 1
  },
  {
    "id": 383,
    "name": "ガラスネコ",
    "rarity": 2
  },
  {
    "id": 384,
    "name": "謎仮面のウララー",
    "rarity": 1
  },
  {
    "id": 385,
    "name": "氷上聡里＆ネコ",
    "rarity": 1
  },
  {
    "id": 386,
    "name": "矢部明雄",
    "rarity": 2
  },
  {
    "id": 387,
    "name": "虹谷彩理",
    "rarity": 2
  },
  {
    "id": 388,
    "name": "紺野美崎",
    "rarity": 2
  },
  {
    "id": 389,
    "name": "片桐恋",
    "rarity": 2
  },
  {
    "id": 390,
    "name": "猫塚かりん",
    "rarity": 2
  },
  {
    "id": 391,
    "name": "早川あおい",
    "rarity": 3
  },
  {
    "id": 392,
    "name": "橘みずき",
    "rarity": 3
  },
  {
    "id": 393,
    "name": "六道聖",
    "rarity": 3
  },
  {
    "id": 394,
    "name": "新島早紀",
    "rarity": 4
  },
  {
    "id": 395,
    "name": "星井スバル",
    "rarity": 4
  },
  {
    "id": 396,
    "name": "小山雅",
    "rarity": 4
  },
  {
    "id": 397,
    "name": "古龍ガングリオン",
    "rarity": 4
  },
  {
    "id": 398,
    "name": "風隼さくら",
    "rarity": 4
  },
  {
    "id": 399,
    "name": "ハニトンくん",
    "rarity": 1
  },
  {
    "id": 400,
    "name": "めんトリ",
    "rarity": 2
  },
  {
    "id": 401,
    "name": "イモウト",
    "rarity": 1
  },
  {
    "id": 402,
    "name": "雷の精霊ボルト",
    "rarity": 4
  },
  {
    "id": 403,
    "name": "ちびシンジ",
    "rarity": 2
  },
  {
    "id": 404,
    "name": "ネコゲンドウ＆ネコ冬月",
    "rarity": 1
  },
  {
    "id": 405,
    "name": "ネコキリン初号機",
    "rarity": 2
  },
  {
    "id": 406,
    "name": "ちびカヲル",
    "rarity": 1
  },
  {
    "id": 407,
    "name": "ネコレイ",
    "rarity": 2
  },
  {
    "id": 408,
    "name": "ネコアスカ",
    "rarity": 2
  },
  {
    "id": 409,
    "name": "ネコマリ",
    "rarity": 2
  },
  {
    "id": 410,
    "name": "ちびレイ",
    "rarity": 3
  },
  {
    "id": 411,
    "name": "ちびアスカ",
    "rarity": 3
  },
  {
    "id": 412,
    "name": "ちびマリ",
    "rarity": 3
  },
  {
    "id": 413,
    "name": "エヴァ零号機",
    "rarity": 4
  },
  {
    "id": 414,
    "name": "エヴァ初号機",
    "rarity": 4
  },
  {
    "id": 415,
    "name": "エヴァ２号機",
    "rarity": 4
  },
  {
    "id": 416,
    "name": "ネコシンジ",
    "rarity": 4
  },
  {
    "id": 417,
    "name": "ゼロムーンオペレーターズ",
    "rarity": 4
  },
  {
    "id": 418,
    "name": "温泉天国テルマエ",
    "rarity": 4
  },
  {
    "id": 419,
    "name": "狂乱のもねこ",
    "rarity": 1
  },
  {
    "id": 420,
    "name": "ポコタ",
    "rarity": 2
  },
  {
    "id": 421,
    "name": "オビス",
    "rarity": 2
  },
  {
    "id": 422,
    "name": "ココ",
    "rarity": 2
  },
  {
    "id": 423,
    "name": "太秦萌＆ネコ",
    "rarity": 2
  },
  {
    "id": 424,
    "name": "松賀咲＆ネコ",
    "rarity": 2
  },
  {
    "id": 425,
    "name": "小野ミサ＆ネコ",
    "rarity": 2
  },
  {
    "id": 426,
    "name": "太秦麗＆ネコ",
    "rarity": 1
  },
  {
    "id": 427,
    "name": "ぶんぶんネコライダー",
    "rarity": 1
  },
  {
    "id": 428,
    "name": "ネコクエスト",
    "rarity": 4
  },
  {
    "id": 429,
    "name": "そうまにゃん",
    "rarity": 2
  },
  {
    "id": 430,
    "name": "オタネコギーク",
    "rarity": 3
  },
  {
    "id": 431,
    "name": "ぐでネコマシン",
    "rarity": 4
  },
  {
    "id": 432,
    "name": "亡者探偵ヴィグラー",
    "rarity": 4
  },
  {
    "id": 433,
    "name": "433_1",
    "rarity": 2
  },
  {
    "id": 434,
    "name": "434_1",
    "rarity": 1
  },
  {
    "id": 435,
    "name": "白にゃんこ剣士",
    "rarity": 1
  },
  {
    "id": 436,
    "name": "ちびネコヴァルキリー",
    "rarity": 4
  },
  {
    "id": 437,
    "name": "ノビルガ",
    "rarity": 4
  },
  {
    "id": 438,
    "name": "激・神さま",
    "rarity": 1
  },
  {
    "id": 439,
    "name": "灼熱のビーチクウ",
    "rarity": 4
  },
  {
    "id": 440,
    "name": "時空神クロノス",
    "rarity": 4
  },
  {
    "id": 441,
    "name": "ベベ",
    "rarity": 4
  },
  {
    "id": 442,
    "name": "影傑ダークダルターニャ",
    "rarity": 4
  },
  {
    "id": 443,
    "name": "子連れにゃんこ",
    "rarity": 2
  },
  {
    "id": 444,
    "name": "戦隊ドリラ",
    "rarity": 3
  },
  {
    "id": 445,
    "name": "戦隊ウチコンガ",
    "rarity": 3
  },
  {
    "id": 446,
    "name": "戦隊チョキンドス",
    "rarity": 3
  },
  {
    "id": 447,
    "name": "戦隊ショベリン",
    "rarity": 3
  },
  {
    "id": 448,
    "name": "戦隊チャッソ",
    "rarity": 3
  },
  {
    "id": 449,
    "name": "宮本武蔵",
    "rarity": 5
  },
  {
    "id": 450,
    "name": "聖会長ジャンヌダルク",
    "rarity": 5
  },
  {
    "id": 451,
    "name": "天城龍バベル",
    "rarity": 5
  },
  {
    "id": 452,
    "name": "うしわか丸",
    "rarity": 5
  },
  {
    "id": 453,
    "name": "古代ネコ",
    "rarity": 2
  },
  {
    "id": 454,
    "name": "きたろう",
    "rarity": 1
  },
  {
    "id": 455,
    "name": "目玉おやじ",
    "rarity": 1
  },
  {
    "id": 456,
    "name": "ワンダー・モモコ",
    "rarity": 5
  },
  {
    "id": 457,
    "name": "間桐 桜",
    "rarity": 4
  },
  {
    "id": 458,
    "name": "ネコ士郎",
    "rarity": 1
  },
  {
    "id": 459,
    "name": "アーチャーネコ",
    "rarity": 2
  },
  {
    "id": 460,
    "name": "ネコライダー",
    "rarity": 2
  },
  {
    "id": 461,
    "name": "ネコ言峰＆ネコギルガメッシュ",
    "rarity": 3
  },
  {
    "id": 462,
    "name": "レジェルガ",
    "rarity": 5
  },
  {
    "id": 463,
    "name": "フィリバスターX",
    "rarity": 1
  },
  {
    "id": 464,
    "name": "終末兵器ムー",
    "rarity": 5
  },
  {
    "id": 465,
    "name": "土偶戦士ドグ丸",
    "rarity": 1
  },
  {
    "id": 466,
    "name": "majimeow（仮）",
    "rarity": 2
  },
  {
    "id": 467,
    "name": "ブラックゼウス",
    "rarity": 5
  },
  {
    "id": 468,
    "name": "スーパーゼウス",
    "rarity": 4
  },
  {
    "id": 469,
    "name": "聖フェニックス",
    "rarity": 4
  },
  {
    "id": 470,
    "name": "スーパーデビル",
    "rarity": 4
  },
  {
    "id": 471,
    "name": "サタンマリア",
    "rarity": 4
  },
  {
    "id": 472,
    "name": "ヘラクライスト",
    "rarity": 4
  },
  {
    "id": 473,
    "name": "ネロ魔身",
    "rarity": 3
  },
  {
    "id": 474,
    "name": "ヤマト王子",
    "rarity": 2
  },
  {
    "id": 475,
    "name": "十字架天使",
    "rarity": 1
  },
  {
    "id": 476,
    "name": "ネコ若神子",
    "rarity": 1
  },
  {
    "id": 477,
    "name": "ネコデビル",
    "rarity": 1
  },
  {
    "id": 478,
    "name": "ネコの助",
    "rarity": 1
  },
  {
    "id": 479,
    "name": "幻の精霊ルミナ",
    "rarity": 5
  },
  {
    "id": 480,
    "name": "グミネコ",
    "rarity": 1
  },
  {
    "id": 481,
    "name": "ねこ娘",
    "rarity": 2
  },
  {
    "id": 482,
    "name": "超越科学者ヘヴン博士",
    "rarity": 5
  },
  {
    "id": 483,
    "name": "幸せを願った少年ソウマ",
    "rarity": 4
  },
  {
    "id": 484,
    "name": "カノとソウマ",
    "rarity": 2
  },
  {
    "id": 485,
    "name": "黒ちびネコヴァルキリー",
    "rarity": 4
  },
  {
    "id": 486,
    "name": "カレット",
    "rarity": 4
  },
  {
    "id": 487,
    "name": "ひな",
    "rarity": 3
  },
  {
    "id": 488,
    "name": "エヴァ８号機",
    "rarity": 4
  },
  {
    "id": 489,
    "name": "空中艦艇ネコヴンダー",
    "rarity": 4
  },
  {
    "id": 490,
    "name": "ちびミサト",
    "rarity": 3
  },
  {
    "id": 491,
    "name": "ちびリツコ",
    "rarity": 3
  },
  {
    "id": 492,
    "name": "ちびアヤナミレイ(仮称)",
    "rarity": 3
  },
  {
    "id": 493,
    "name": "493_1",
    "rarity": 2
  },
  {
    "id": 494,
    "name": "創造神ガイア",
    "rarity": 5
  },
  {
    "id": 495,
    "name": "潮風のセーラーカッパー",
    "rarity": 4
  },
  {
    "id": 496,
    "name": "ネコマタドール",
    "rarity": 2
  },
  {
    "id": 497,
    "name": "成田甲斐",
    "rarity": 4
  },
  {
    "id": 498,
    "name": "498_1",
    "rarity": 1
  },
  {
    "id": 499,
    "name": "499_1",
    "rarity": 1
  },
  {
    "id": 500,
    "name": "500_1",
    "rarity": 1
  },
  {
    "id": 501,
    "name": "501_1",
    "rarity": 1
  },
  {
    "id": 502,
    "name": "ネコ兄弟S",
    "rarity": 2
  },
  {
    "id": 503,
    "name": "英雄令嬢メルシュ",
    "rarity": 4
  },
  {
    "id": 504,
    "name": "ネコ２Ｄ",
    "rarity": 2
  },
  {
    "id": 505,
    "name": "おやじネコ(店主)",
    "rarity": 1
  },
  {
    "id": 506,
    "name": "角龍グラディオス",
    "rarity": 4
  },
  {
    "id": 507,
    "name": "アイウォルツ",
    "rarity": 4
  },
  {
    "id": 508,
    "name": "スーパーにゃん",
    "rarity": 2
  },
  {
    "id": 509,
    "name": "ネコリュウ",
    "rarity": 2
  },
  {
    "id": 510,
    "name": "ネコ春麗",
    "rarity": 1
  },
  {
    "id": 511,
    "name": "豪鬼",
    "rarity": 5
  },
  {
    "id": 512,
    "name": "リュウ",
    "rarity": 4
  },
  {
    "id": 513,
    "name": "春麗",
    "rarity": 4
  },
  {
    "id": 514,
    "name": "ガイル",
    "rarity": 4
  },
  {
    "id": 515,
    "name": "ザンギエフ",
    "rarity": 4
  },
  {
    "id": 516,
    "name": "ブランカ",
    "rarity": 4
  },
  {
    "id": 517,
    "name": "ダルシム",
    "rarity": 4
  },
  {
    "id": 518,
    "name": "ケン",
    "rarity": 4
  },
  {
    "id": 519,
    "name": "ゴウキリン",
    "rarity": 2
  },
  {
    "id": 520,
    "name": "ラスヴォース",
    "rarity": 4
  },
  {
    "id": 521,
    "name": "ネコ七福神",
    "rarity": 3
  },
  {
    "id": 522,
    "name": "ネコメデューサ",
    "rarity": 2
  },
  {
    "id": 523,
    "name": "泉のネコ女神",
    "rarity": 3
  },
  {
    "id": 524,
    "name": "ネコ武闘家",
    "rarity": 2
  },
  {
    "id": 525,
    "name": "ソラカラちゃん",
    "rarity": 2
  },
  {
    "id": 526,
    "name": "きんたろう",
    "rarity": 4
  },
  {
    "id": 527,
    "name": "冬天使のシシル＆コマリ",
    "rarity": 4
  },
  {
    "id": 528,
    "name": "ネコスライム",
    "rarity": 2
  },
  {
    "id": 529,
    "name": "ネコサック",
    "rarity": 2
  },
  {
    "id": 530,
    "name": "厄災の子キャスリィ",
    "rarity": 4
  },
  {
    "id": 531,
    "name": "エルメ",
    "rarity": 4
  },
  {
    "id": 532,
    "name": "ネコックマ",
    "rarity": 2
  },
  {
    "id": 533,
    "name": "フェンリルとウルス",
    "rarity": 1
  },
  {
    "id": 534,
    "name": "マッドシューター・サキ",
    "rarity": 4
  },
  {
    "id": 535,
    "name": "冥界神ハデス",
    "rarity": 4
  },
  {
    "id": 536,
    "name": "初音ミク",
    "rarity": 4
  },
  {
    "id": 537,
    "name": "桜ミク",
    "rarity": 4
  },
  {
    "id": 538,
    "name": "鏡音リン＆レン",
    "rarity": 4
  },
  {
    "id": 539,
    "name": "ネコミク",
    "rarity": 2
  },
  {
    "id": 540,
    "name": "ラガーにゃん",
    "rarity": 2
  },
  {
    "id": 541,
    "name": "ネコU.F.O.",
    "rarity": 2
  },
  {
    "id": 542,
    "name": "ネコヤキソバン",
    "rarity": 1
  },
  {
    "id": 543,
    "name": "ネコ少年",
    "rarity": 1
  },
  {
    "id": 544,
    "name": "禍根の魔女キャスリィ",
    "rarity": 4
  },
  {
    "id": 545,
    "name": "京坂七穂",
    "rarity": 5
  },
  {
    "id": 546,
    "name": "ネコファントム",
    "rarity": 2
  },
  {
    "id": 547,
    "name": "オイルガ",
    "rarity": 4
  },
  {
    "id": 548,
    "name": "白夜姫のレイ",
    "rarity": 4
  },
  {
    "id": 549,
    "name": "第４の使徒",
    "rarity": 4
  },
  {
    "id": 550,
    "name": "第６の使徒",
    "rarity": 4
  },
  {
    "id": 551,
    "name": "第１０の使徒",
    "rarity": 4
  },
  {
    "id": 552,
    "name": "第９の使徒",
    "rarity": 4
  },
  {
    "id": 553,
    "name": "ネコカヲル",
    "rarity": 2
  },
  {
    "id": 554,
    "name": "ネコベーカリー",
    "rarity": 2
  },
  {
    "id": 555,
    "name": "達人ウリル",
    "rarity": 1
  },
  {
    "id": 556,
    "name": "シャーマンカーン",
    "rarity": 4
  },
  {
    "id": 557,
    "name": "騎神アリババ",
    "rarity": 3
  },
  {
    "id": 558,
    "name": "天子男ジャック",
    "rarity": 1
  },
  {
    "id": 559,
    "name": "レアガチャネコ",
    "rarity": 1
  },
  {
    "id": 560,
    "name": "地獄警官エマ",
    "rarity": 4
  },
  {
    "id": 561,
    "name": "巡音ルカ",
    "rarity": 4
  },
  {
    "id": 562,
    "name": "MEIKO＆ネコ",
    "rarity": 3
  },
  {
    "id": 563,
    "name": "ネコルカ",
    "rarity": 2
  },
  {
    "id": 564,
    "name": "アクアシューター・サキ",
    "rarity": 4
  },
  {
    "id": 565,
    "name": "ネコルガの夏",
    "rarity": 4
  },
  {
    "id": 566,
    "name": "日焼けネコ",
    "rarity": 3
  },
  {
    "id": 567,
    "name": "救命にゃんこ",
    "rarity": 3
  },
  {
    "id": 568,
    "name": "チビクロプスネコタマゴ",
    "rarity": 1
  },
  {
    "id": 569,
    "name": "イディ:N",
    "rarity": 1
  },
  {
    "id": 570,
    "name": "石の精霊ゴロー",
    "rarity": 4
  },
  {
    "id": 571,
    "name": "竜騎士スカルバルス",
    "rarity": 4
  },
  {
    "id": 572,
    "name": "エドモンド本田",
    "rarity": 4
  },
  {
    "id": 573,
    "name": "バイソン",
    "rarity": 4
  },
  {
    "id": 574,
    "name": "バルログ",
    "rarity": 4
  },
  {
    "id": 575,
    "name": "サガット",
    "rarity": 4
  },
  {
    "id": 576,
    "name": "ベガ",
    "rarity": 4
  },
  {
    "id": 577,
    "name": "ネコモンド本田",
    "rarity": 3
  },
  {
    "id": 578,
    "name": "ネコバイソン",
    "rarity": 2
  },
  {
    "id": 579,
    "name": "ネコバルログ",
    "rarity": 2
  },
  {
    "id": 580,
    "name": "ネコサガット",
    "rarity": 2
  },
  {
    "id": 581,
    "name": "ネコベガ",
    "rarity": 2
  },
  {
    "id": 582,
    "name": "ごろにゃん",
    "rarity": 2
  },
  {
    "id": 583,
    "name": "初音ミク マジカルミライ2020大阪",
    "rarity": 4
  },
  {
    "id": 584,
    "name": "初音ミク マジカルミライ2020東京",
    "rarity": 4
  },
  {
    "id": 585,
    "name": "前田サンタ慶次",
    "rarity": 4
  },
  {
    "id": 586,
    "name": "幼獣ガル",
    "rarity": 4
  },
  {
    "id": 587,
    "name": "ネコ王子",
    "rarity": 5
  },
  {
    "id": 588,
    "name": "恋女神ショコラディーテ",
    "rarity": 4
  },
  {
    "id": 589,
    "name": "初恋令嬢メルシュ",
    "rarity": 4
  },
  {
    "id": 590,
    "name": "バレンタインねねこ",
    "rarity": 3
  },
  {
    "id": 591,
    "name": "雪ミク 2021",
    "rarity": 4
  },
  {
    "id": 592,
    "name": "KAITO＆ネコ",
    "rarity": 3
  },
  {
    "id": 593,
    "name": "ネコリン",
    "rarity": 2
  },
  {
    "id": 594,
    "name": "ネコレン",
    "rarity": 2
  },
  {
    "id": 595,
    "name": "空中商会コロンブス",
    "rarity": 4
  },
  {
    "id": 596,
    "name": "春龍かむくら",
    "rarity": 4
  },
  {
    "id": 597,
    "name": "早乙女乱馬(男)",
    "rarity": 4
  },
  {
    "id": 598,
    "name": "天道あかね",
    "rarity": 4
  },
  {
    "id": 599,
    "name": "響良牙(ブタ)",
    "rarity": 4
  },
  {
    "id": 600,
    "name": "シャンプー(猫)",
    "rarity": 4
  },
  {
    "id": 601,
    "name": "ムース(アヒル)",
    "rarity": 4
  },
  {
    "id": 602,
    "name": "八宝斉",
    "rarity": 3
  },
  {
    "id": 603,
    "name": "久遠寺右京(男装)",
    "rarity": 3
  },
  {
    "id": 604,
    "name": "九能帯刀(道着)",
    "rarity": 3
  },
  {
    "id": 605,
    "name": "ネコ乱馬(男)",
    "rarity": 2
  },
  {
    "id": 606,
    "name": "ネコあかね",
    "rarity": 2
  },
  {
    "id": 607,
    "name": "ネコパンダ",
    "rarity": 1
  },
  {
    "id": 608,
    "name": "冒険家カンナ",
    "rarity": 4
  },
  {
    "id": 609,
    "name": "ネコウエハース",
    "rarity": 1
  },
  {
    "id": 610,
    "name": "黒獣ガルディアン",
    "rarity": 4
  },
  {
    "id": 611,
    "name": "金塊ネコ",
    "rarity": 1
  },
  {
    "id": 612,
    "name": "ネコゴジラ",
    "rarity": 2
  },
  {
    "id": 613,
    "name": "ネコ王女",
    "rarity": 4
  },
  {
    "id": 614,
    "name": "古神面ドロン",
    "rarity": 1
  },
  {
    "id": 615,
    "name": "渚のかぐやひめ",
    "rarity": 4
  },
  {
    "id": 616,
    "name": "カブトネコ",
    "rarity": 1
  },
  {
    "id": 617,
    "name": "クワガタネコ",
    "rarity": 1
  },
  {
    "id": 618,
    "name": "召喚少年サトル",
    "rarity": 4
  },
  {
    "id": 619,
    "name": "天草四郎",
    "rarity": 4
  },
  {
    "id": 620,
    "name": "妖賢女リリン",
    "rarity": 4
  },
  {
    "id": 621,
    "name": "邪龍ヘヴィジャーク",
    "rarity": 4
  },
  {
    "id": 622,
    "name": "悪魔研究家",
    "rarity": 2
  },
  {
    "id": 623,
    "name": "ジャガンドーJr",
    "rarity": 1
  },
  {
    "id": 624,
    "name": "ネコハーメルン",
    "rarity": 2
  },
  {
    "id": 625,
    "name": "熱血硬派くにおくん",
    "rarity": 4
  },
  {
    "id": 626,
    "name": "オコルガ",
    "rarity": 4
  },
  {
    "id": 627,
    "name": "ネコキリンモドキ",
    "rarity": 1
  },
  {
    "id": 628,
    "name": "ネコノトリッキー",
    "rarity": 1
  },
  {
    "id": 629,
    "name": "ネコノドラゴーン",
    "rarity": 1
  },
  {
    "id": 630,
    "name": "洗脳されしネコ",
    "rarity": 3
  },
  {
    "id": 631,
    "name": "ネコ書道",
    "rarity": 2
  },
  {
    "id": 632,
    "name": "闇の精霊ヤミィ",
    "rarity": 4
  },
  {
    "id": 633,
    "name": "超竜戦機デス・トロイ",
    "rarity": 4
  },
  {
    "id": 634,
    "name": "舌切りすずめ",
    "rarity": 4
  },
  {
    "id": 635,
    "name": "白騎士キュクロプス",
    "rarity": 4
  },
  {
    "id": 636,
    "name": "100万ドルのネコ",
    "rarity": 1
  },
  {
    "id": 637,
    "name": "洗脳されしタンクネコ",
    "rarity": 3
  },
  {
    "id": 638,
    "name": "シャオチョン＆ネコ",
    "rarity": 1
  },
  {
    "id": 639,
    "name": "ナナ＆ネコ",
    "rarity": 2
  },
  {
    "id": 640,
    "name": "エミリア＆ネコ",
    "rarity": 2
  },
  {
    "id": 641,
    "name": "ジェアー＆ネコ",
    "rarity": 1
  },
  {
    "id": 642,
    "name": "踊り子イズ",
    "rarity": 4
  },
  {
    "id": 643,
    "name": "堕天神ルシファー",
    "rarity": 4
  },
  {
    "id": 644,
    "name": "ネコ超人",
    "rarity": 0
  },
  {
    "id": 645,
    "name": "白い恋人メカ子",
    "rarity": 4
  },
  {
    "id": 646,
    "name": "洗脳されしバトルネコ",
    "rarity": 3
  },
  {
    "id": 647,
    "name": "爆竹ネコ",
    "rarity": 1
  },
  {
    "id": 648,
    "name": "狩猟娘テルン",
    "rarity": 4
  },
  {
    "id": 649,
    "name": "恋番長・鬼にゃんま",
    "rarity": 4
  },
  {
    "id": 650,
    "name": "服部半蔵",
    "rarity": 4
  },
  {
    "id": 651,
    "name": "幼馴染にゃん子",
    "rarity": 1
  },
  {
    "id": 652,
    "name": "おてんばネコライオン",
    "rarity": 1
  },
  {
    "id": 653,
    "name": "ネコクバンケシ",
    "rarity": 1
  },
  {
    "id": 654,
    "name": "古獣ナーラ",
    "rarity": 1
  },
  {
    "id": 655,
    "name": "洗脳されしキモネコ",
    "rarity": 3
  },
  {
    "id": 656,
    "name": "氷の精霊フリズ",
    "rarity": 4
  },
  {
    "id": 657,
    "name": "古びたタマゴ:N001",
    "rarity": 1
  },
  {
    "id": 658,
    "name": "悲嘆の踊り子イズ",
    "rarity": 4
  },
  {
    "id": 659,
    "name": "古びたタマゴ:N101",
    "rarity": 2
  },
  {
    "id": 660,
    "name": "古びたタマゴ:N102",
    "rarity": 2
  },
  {
    "id": 661,
    "name": "海龍ダライアサン",
    "rarity": 4
  },
  {
    "id": 662,
    "name": "祝福神クロノス",
    "rarity": 4
  },
  {
    "id": 663,
    "name": "洗脳されしウシネコ",
    "rarity": 3
  },
  {
    "id": 664,
    "name": "古びたタマゴ:N103",
    "rarity": 2
  },
  {
    "id": 665,
    "name": "古びたタマゴ:N104",
    "rarity": 2
  },
  {
    "id": 666,
    "name": "古びたタマゴ:N201",
    "rarity": 1
  },
  {
    "id": 667,
    "name": "ナイトビーチリリン",
    "rarity": 4
  },
  {
    "id": 668,
    "name": "洗脳されしネコノトリ",
    "rarity": 3
  },
  {
    "id": 669,
    "name": "ネコ天狗",
    "rarity": 4
  },
  {
    "id": 670,
    "name": "古びたタマゴ:N003",
    "rarity": 1
  },
  {
    "id": 671,
    "name": "古びたタマゴ:N202",
    "rarity": 1
  },
  {
    "id": 672,
    "name": "早乙女らんま(レオタード)",
    "rarity": 4
  },
  {
    "id": 673,
    "name": "早乙女玄馬(パンダ)",
    "rarity": 3
  },
  {
    "id": 674,
    "name": "ネコチーター",
    "rarity": 4
  },
  {
    "id": 675,
    "name": "周遊芸団カルーセルズ",
    "rarity": 4
  },
  {
    "id": 676,
    "name": "古びたタマゴ:N105",
    "rarity": 2
  },
  {
    "id": 677,
    "name": "古びたタマゴ:N106",
    "rarity": 2
  },
  {
    "id": 678,
    "name": "三雲修＆ネコ",
    "rarity": 2
  },
  {
    "id": 679,
    "name": "空閑遊真＆ネコ",
    "rarity": 2
  },
  {
    "id": 680,
    "name": "雨取千佳＆ネコ",
    "rarity": 1
  },
  {
    "id": 681,
    "name": "さくら",
    "rarity": 4
  },
  {
    "id": 682,
    "name": "ルーク",
    "rarity": 4
  },
  {
    "id": 683,
    "name": "女神ベガ",
    "rarity": 4
  },
  {
    "id": 684,
    "name": "伯爵・真田幸村",
    "rarity": 4
  },
  {
    "id": 685,
    "name": "洗脳されしネコフィッシュ",
    "rarity": 3
  },
  {
    "id": 686,
    "name": "古びたタマゴ:N004",
    "rarity": 1
  },
  {
    "id": 687,
    "name": "光の女神シリウス",
    "rarity": 4
  },
  {
    "id": 688,
    "name": "トナカイ娘テルン",
    "rarity": 4
  },
  {
    "id": 689,
    "name": "洗脳されしネコトカゲ",
    "rarity": 3
  },
  {
    "id": 690,
    "name": "石の上にも10年ネコ",
    "rarity": 1
  },
  {
    "id": 691,
    "name": "運命の子フォノ",
    "rarity": 4
  },
  {
    "id": 692,
    "name": "古びたタマゴ:N000",
    "rarity": 1
  },
  {
    "id": 693,
    "name": "いっすん法師",
    "rarity": 4
  },
  {
    "id": 694,
    "name": "白執事探偵ヴィグラー",
    "rarity": 4
  },
  {
    "id": 695,
    "name": "洗脳されし巨神ネコ",
    "rarity": 3
  },
  {
    "id": 696,
    "name": "殺意のタンクネコ",
    "rarity": 2
  },
  {
    "id": 697,
    "name": "ネコ委員長",
    "rarity": 1
  },
  {
    "id": 698,
    "name": "古びたタマゴ:N107",
    "rarity": 2
  },
  {
    "id": 699,
    "name": "サンダージャック",
    "rarity": 4
  },
  {
    "id": 700,
    "name": "決闘少年ラビットサトル",
    "rarity": 4
  },
  {
    "id": 701,
    "name": "古びたタマゴ:N005",
    "rarity": 1
  },
  {
    "id": 702,
    "name": "にゃんこ仮面ライダー",
    "rarity": 2
  },
  {
    "id": 703,
    "name": "ゴジラにゃんこ",
    "rarity": 2
  },
  {
    "id": 704,
    "name": "エヴァンゲリオンにゃんこ",
    "rarity": 2
  },
  {
    "id": 705,
    "name": "ウルトラマンにゃんこ",
    "rarity": 2
  },
  {
    "id": 706,
    "name": "非命の王フォノウ",
    "rarity": 4
  },
  {
    "id": 707,
    "name": "古びたタマゴ:N108",
    "rarity": 3
  },
  {
    "id": 708,
    "name": "古びたタマゴ:N109",
    "rarity": 2
  },
  {
    "id": 709,
    "name": "ネコジェット",
    "rarity": 2
  },
  {
    "id": 710,
    "name": "隻眼の少女アスカ",
    "rarity": 4
  },
  {
    "id": 711,
    "name": "エヴァ第１３号機",
    "rarity": 4
  },
  {
    "id": 712,
    "name": "バララガの誓い",
    "rarity": 4
  },
  {
    "id": 713,
    "name": "カオルガ",
    "rarity": 4
  },
  {
    "id": 714,
    "name": "古びたタマゴ:N203",
    "rarity": 1
  },
  {
    "id": 715,
    "name": "波打ち際の冒険家カンナ",
    "rarity": 4
  },
  {
    "id": 716,
    "name": "建築兵団スフィンクス",
    "rarity": 4
  },
  {
    "id": 717,
    "name": "古びたタマゴ:N111",
    "rarity": 3
  },
  {
    "id": 718,
    "name": "古びたタマゴ:N110",
    "rarity": 2
  },
  {
    "id": 719,
    "name": "ネコもろこし",
    "rarity": 2
  },
  {
    "id": 720,
    "name": "鉄の精霊カッチン",
    "rarity": 4
  },
  {
    "id": 721,
    "name": "古びたタマゴ:N006",
    "rarity": 1
  },
  {
    "id": 722,
    "name": "花園高校番長りき",
    "rarity": 4
  },
  {
    "id": 723,
    "name": "初音ミク 16th",
    "rarity": 4
  },
  {
    "id": 724,
    "name": "光翼神イシス",
    "rarity": 4
  },
  {
    "id": 725,
    "name": "古びたタマゴ:N112",
    "rarity": 2
  },
  {
    "id": 726,
    "name": "忍者娘トモエ",
    "rarity": 4
  },
  {
    "id": 727,
    "name": "ネコメダル王",
    "rarity": 1
  },
  {
    "id": 728,
    "name": "ソル・デ・ロカ",
    "rarity": 4
  },
  {
    "id": 729,
    "name": "論の賢者ソラクティス",
    "rarity": 1
  },
  {
    "id": 730,
    "name": "730_1",
    "rarity": 1
  },
  {
    "id": 731,
    "name": "古びたタマゴ:N204",
    "rarity": 1
  },
  {
    "id": 732,
    "name": "暁のイザナギ",
    "rarity": 5
  },
  {
    "id": 733,
    "name": "733_1",
    "rarity": 5
  },
  {
    "id": 734,
    "name": "鉄籠のペガサ",
    "rarity": 4
  },
  {
    "id": 735,
    "name": "735_1",
    "rarity": 4
  },
  {
    "id": 736,
    "name": "ネコ校長",
    "rarity": 1
  },
  {
    "id": 737,
    "name": "ネコアイスホワイトスター",
    "rarity": 4
  },
  {
    "id": 738,
    "name": "スプリングカリファ",
    "rarity": 4
  },
  {
    "id": 739,
    "name": "宵のイザナミ",
    "rarity": 5
  },
  {
    "id": 740,
    "name": "740_1",
    "rarity": 5
  },
  {
    "id": 741,
    "name": "741-1",
    "rarity": 1
  },
  {
    "id": 742,
    "name": "742-1",
    "rarity": 4
  },
  {
    "id": 743,
    "name": "743-1",
    "rarity": 2
  },
  {
    "id": 744,
    "name": "744-1",
    "rarity": 2
  },
  {
    "id": 745,
    "name": "745-1",
    "rarity": 1
  },
  {
    "id": 746,
    "name": "746-1",
    "rarity": 1
  },
  {
    "id": 747,
    "name": "緋村剣心",
    "rarity": 4
  },
  {
    "id": 748,
    "name": "相楽左之助",
    "rarity": 4
  },
  {
    "id": 749,
    "name": "四乃森蒼紫",
    "rarity": 4
  },
  {
    "id": 750,
    "name": "斎藤一",
    "rarity": 4
  },
  {
    "id": 751,
    "name": "ちび薫",
    "rarity": 3
  },
  {
    "id": 752,
    "name": "ちび弥彦",
    "rarity": 3
  },
  {
    "id": 753,
    "name": "ネコ剣心",
    "rarity": 2
  },
  {
    "id": 754,
    "name": "ネコ薫",
    "rarity": 1
  },
  {
    "id": 755,
    "name": "明智光秀",
    "rarity": 4
  },
  {
    "id": 756,
    "name": "756_1",
    "rarity": 4
  },
  {
    "id": 757,
    "name": "ネコケーキマシン挙式",
    "rarity": 4
  },
  {
    "id": 758,
    "name": "古びたタマゴ:N205",
    "rarity": 1
  },
  {
    "id": 759,
    "name": "謎の傭兵トリクシー",
    "rarity": 4
  },
  {
    "id": 760,
    "name": "サマーフェスサンディア",
    "rarity": 4
  },
  {
    "id": 761,
    "name": "砲龍ガンドロス",
    "rarity": 4
  },
  {
    "id": 762,
    "name": "762_1",
    "rarity": 4
  },
  {
    "id": 763,
    "name": "天空神スーパーゼウス",
    "rarity": 4
  },
  {
    "id": 764,
    "name": "ネコダイナザウルス",
    "rarity": 4
  },
  {
    "id": 765,
    "name": "765_1",
    "rarity": 4
  },
  {
    "id": 766,
    "name": "古びたタマゴ:N206",
    "rarity": 1
  },
  {
    "id": 767,
    "name": "イワシ",
    "rarity": 1
  },
  {
    "id": 768,
    "name": "イカ",
    "rarity": 1
  },
  {
    "id": 769,
    "name": "たいてんき",
    "rarity": 4
  },
  {
    "id": 770,
    "name": "花咲かじいさん",
    "rarity": 4
  },
  {
    "id": 771,
    "name": "771-1",
    "rarity": 4
  },
  {
    "id": 772,
    "name": "生命の賢者Dr.ノーヴァ",
    "rarity": 1
  },
  {
    "id": 773,
    "name": "パンプキンソドム",
    "rarity": 4
  },
  {
    "id": 774,
    "name": "スモウ・ザ・ミイラ",
    "rarity": 3
  },
  {
    "id": 775,
    "name": "特命機動アクセル",
    "rarity": 4
  },
  {
    "id": 776,
    "name": "776-1",
    "rarity": 4
  },
  {
    "id": 777,
    "name": "見習い武者ネコ",
    "rarity": 1
  },
  {
    "id": 778,
    "name": "冬将軍・成田甲斐",
    "rarity": 4
  },
  {
    "id": 779,
    "name": "ネコまどか＆ほむら",
    "rarity": 4
  },
  {
    "id": 780,
    "name": "幼天女ルーナ",
    "rarity": 4
  },
  {
    "id": 781,
    "name": "ネコボウラー",
    "rarity": 2
  },
  {
    "id": 782,
    "name": "マモルガ",
    "rarity": 4
  },
  {
    "id": 783,
    "name": "783-1",
    "rarity": 4
  },
  {
    "id": 784,
    "name": "こねこ",
    "rarity": 4
  },
  {
    "id": 785,
    "name": "チョコサプネコC",
    "rarity": 1
  },
  {
    "id": 786,
    "name": "殺意のキモネコ",
    "rarity": 2
  },
  {
    "id": 787,
    "name": "マジシャンキャットマン",
    "rarity": 4
  },
  {
    "id": 788,
    "name": "冥護の天女ルナーシャ",
    "rarity": 4
  },
  {
    "id": 789,
    "name": "789-1",
    "rarity": 1
  },
  {
    "id": 790,
    "name": "範馬刃牙",
    "rarity": 4
  },
  {
    "id": 791,
    "name": "烈海王",
    "rarity": 4
  },
  {
    "id": 792,
    "name": "花山薫",
    "rarity": 4
  },
  {
    "id": 793,
    "name": "愚地克巳",
    "rarity": 4
  },
  {
    "id": 794,
    "name": "ジャック・ハンマー",
    "rarity": 4
  },
  {
    "id": 795,
    "name": "ネコオーガ",
    "rarity": 3
  },
  {
    "id": 796,
    "name": "ちび刃牙",
    "rarity": 1
  },
  {
    "id": 797,
    "name": "ネコ刃牙",
    "rarity": 1
  },
  {
    "id": 798,
    "name": "ネコ海王",
    "rarity": 1
  },
  {
    "id": 799,
    "name": "ネコ独歩",
    "rarity": 1
  },
  {
    "id": 800,
    "name": "曲射砲台ランチャーズ",
    "rarity": 4
  },
  {
    "id": 801,
    "name": "801-1",
    "rarity": 4
  },
  {
    "id": 802,
    "name": "理の賢者ニュトーン",
    "rarity": 1
  },
  {
    "id": 803,
    "name": "802-1",
    "rarity": 1
  },
  {
    "id": 804,
    "name": "ソニック",
    "rarity": 4
  },
  {
    "id": 805,
    "name": "テイルス",
    "rarity": 4
  },
  {
    "id": 806,
    "name": "ナックルズ",
    "rarity": 4
  },
  {
    "id": 807,
    "name": "シャドウ",
    "rarity": 4
  },
  {
    "id": 808,
    "name": "ネコソニック",
    "rarity": 2
  },
  {
    "id": 809,
    "name": "ネコテイルス",
    "rarity": 1
  },
  {
    "id": 810,
    "name": "ネコシャドウ",
    "rarity": 2
  },
  {
    "id": 811,
    "name": "811_1",
    "rarity": 4
  },
  {
    "id": 812,
    "name": "韋駄天スカンダ",
    "rarity": 4
  },
  {
    "id": 813,
    "name": "812-1",
    "rarity": 4
  },
  {
    "id": 814,
    "name": "タスマニアオオガニ",
    "rarity": 1
  },
  {
    "id": 815,
    "name": "エヴァ量産機",
    "rarity": 4
  },
  {
    "id": 816,
    "name": "月影の少年カヲル",
    "rarity": 5
  },
  {
    "id": 817,
    "name": "817-1",
    "rarity": 5
  },
  {
    "id": 818,
    "name": "樹の精霊コモリ",
    "rarity": 4
  },
  {
    "id": 819,
    "name": "819-1",
    "rarity": 4
  },
  {
    "id": 820,
    "name": "ネコ大工",
    "rarity": 2
  },
  {
    "id": 821,
    "name": "シーサイドペガサ",
    "rarity": 4
  },
  {
    "id": 822,
    "name": "822_1",
    "rarity": 4
  },
  {
    "id": 823,
    "name": "ネココンサルタント",
    "rarity": 1
  },
  {
    "id": 824,
    "name": "ネコ店長＆ネコ店員",
    "rarity": 1
  },
  {
    "id": 825,
    "name": "魔導師シドミ",
    "rarity": 4
  },
  {
    "id": 826,
    "name": "826-1",
    "rarity": 4
  },
  {
    "id": 827,
    "name": "キャミィ",
    "rarity": 4
  },
  {
    "id": 828,
    "name": "ジュリ",
    "rarity": 4
  },
  {
    "id": 829,
    "name": "ネコザンギエフ",
    "rarity": 3
  },
  {
    "id": 830,
    "name": "ネコジェイミー",
    "rarity": 3
  }
]