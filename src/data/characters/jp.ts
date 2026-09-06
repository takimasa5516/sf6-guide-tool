import { Character } from '../../types';

export const jp: Character = {
  id: 'jp',
  name: 'JP',
  englishName: 'JP',
  epithet: '狡知の策略家',
  archetype: '設置・トリッキー',
  difficulty: '★★★☆☆',
  themeColor: 'from-amber-800 via-stone-800 to-red-950',
  accentColor: '#b45309',
  avatarIcon: 'JP',
  stats: {
    power: 4,
    range: 5,
    mobility: 2,
    defense: 3,
    antiAir: 4,
    easeOfUse: 3,
  },
  summary: 'ステッキとサイコパワーで遠距離から棘や設置爆弾、コマンド投げを自在に操る究極のゾーニングキャラクター。アムネジアによる当身切り返しも強力。',
  strengths: [
    '遠距離からの棘（トリグラフ）と設置技（ヴィハト）による一方的な攻撃',
    '遠距離からのガード不能コマンド投げ「エンブライス」',
    '当身技「アムネジア」による相手の打撃・投げへの切り返し',
  ],
  weaknesses: [
    '足の歩き速度が遅く、近距離に詰められると苦しい',
    'アムネジア弱体化後、無敵技のリスク管理がより重要に',
  ],
  modernEvaluation: {
    rating: 'B',
    comment: '遠距離でのトリグラフの設置位置撃ち分け（手前・中間・奥）がクラシックの方が圧倒的に自由。モダンでもワンボタンアムネジアやSAは強力だが、トリグラフの精度を求めるならクラシック推奨。',
    pros: ['ワンボタンアムネジア', 'ワンボタンSA3'],
    cons: ['トリグラフの位置撃ち分けに手動コマンドが必要'],
    lostImportantMoves: ['立ち弱K', 'しゃがみ中K（アシスト併用）'],
  },
  keyMoves: [
    {
      name: 'トリグラフ（棘）',
      commandC: '22 + P',
      commandM: '22 + P',
      usage: '地面から巨大な棘を出現させる。弱・中・強で出現位置が変化。',
      frame: { startup: '26F〜', onBlock: '-3F〜', onHit: 'ダウン' },
    },
    {
      name: 'アムネジア（当身）',
      commandC: '214 + P',
      commandM: '4 + SP',
      usage: '相手の攻撃を受け止めてサイコ爆弾を付着させる切り返し技。OD版は打撃・投げ両対応。',
      frame: { startup: '1F〜', onBlock: '当身成功時ボム付着', onHit: '追撃可能' },
    },
  ],
  gameplan: {
    farRange: 'ヴィハト設置、トリグラフ、エンブライス（遠距離投げ）を散らして相手を近づかせない。',
    midRange: 'ステッキを使った立ち強Pやしゃがみ中Pで相手の前進を拒絶。',
    closeRange: '相手の攻めをODアムネジアで受け止めるか、SAで切り返す。',
    breakStalemate: [
      {
        title: 'ヴィハト（設置）からのテレポート急襲',
        description: '設置したサイコ弾の位置へワープし、相手の意表を突いて中段や投げを仕掛ける。',
      },
    ],
    burnoutOffense: ['遠距離からのトリグラフ連射による安全な削り。'],
    burnoutDefense: ['ODアムネジアやSA1・SA3で切り返す。'],
  },
  combos: [
    {
      id: 'jp_c1',
      category: '基礎（小技始動・暴れ・確反）',
      name: '小技確認ストリボーグ',
      classicRecipe: '2弱P > 2弱P > 236弱P',
      modernRecipe: '2弱 > 2弱 > SP',
      damageApprox: '約1,400',
      driveCost: 0,
      superArtCost: 0,
      difficulty: 1,
      purpose: '近距離暴れからのノーゲージ基本。',
    },
  ],
  trainingDrills: [
    {
      id: 'jp_drill_1',
      title: 'トリグラフの弱中強 距離別撃ち分け',
      category: 'キャラ固有対策',
      importance: '必修',
      description: 'ダミーの立ち位置に合わせて弱（手前）・中（中間）・強（画面端）のトリグラフを即座に出す練習。',
      practiceGoal: '相手のいる位置に100%の精度で棘を当てる。',
      dummySettings: { guardSetting: 'すべてガード' },
    },
  ],
  matchups: [
    {
      opponentId: 'ryu',
      opponentName: 'リュウ',
      advantageLevel: '有利',
      coreStrategy: 'リュウの波動拳の外からトリグラフとエンブライスで一方的に攻撃する。',
      keyThreats: ['生ドライブラッシュ鎖骨割り', '電刃波動拳'],
      punishList: [
        {
          opponentMove: '強 昇龍拳（ガード後）',
          frameAdvantage: '-23F',
          recommendedPunish: '立ち強Pパニカンフルコンボ',
        },
      ],
      practicalTips: ['リュウが電刃練気を溜めようとしたら即座に強トリグラフで咎める。'],
    },
  ],
};
