import { Character } from '../../types';

export const jamie: Character = {
  id: 'jamie',
  name: 'ジェイミー',
  englishName: 'Jamie',
  epithet: '酔いどれの龍',
  archetype: 'インファイター・スピード',
  difficulty: '★★★☆☆',
  themeColor: 'from-amber-600 via-yellow-700 to-orange-900',
  accentColor: '#f59e0b',
  avatarIcon: 'JAMIE',
  stats: {
    power: 4,
    range: 3,
    mobility: 5,
    defense: 3,
    antiAir: 4,
    easeOfUse: 4,
  },
  summary: '「薬湯」を飲む（酔いレベル0〜4）ことで技が次々と解禁され、火力が跳ね上がる成長型酔拳ファイター。酔いレベル4時の爆発力は全キャラ最強クラス。無敵技「張弓腿」も完備。',
  strengths: [
    '酔いレベルが上がるにつれて新技（無影蹴、酔歩、点穴コマンド投げ）が解放',
    '酔いレベル4到達時の圧倒的コンボ火力とプレッシャー',
    'ターゲットコンボ（TC）からの薬湯飲み連携が豊富',
    '無敵対空「張弓腿」による切り返し',
  ],
  weaknesses: ['酔いレベル0〜1の序盤はダメージ補正があり火力が低い', '薬湯を飲む隙を作れないと苦戦する'],
  modernEvaluation: {
    rating: 'A',
    comment: 'ワンボタン対空張弓腿とワンボタンSA3が強力。アシストコンボで自動的に薬湯を飲んでくれるため、初心者でもスムーズに酔いレベルを上げられる。',
    pros: ['ワンボタン対空張弓腿', 'アシストコンボでのスムーズな薬湯飲み'],
    cons: ['酔いレベル4限定技の一部コマンドが制限される'],
    lostImportantMoves: ['立ち弱K', 'しゃがみ中K（アシスト併用）'],
  },
  keyMoves: [
    {
      name: '魔身（薬湯飲み）',
      commandC: '22 + P',
      commandM: '22 + P',
      usage: '薬湯を飲んで酔いレベルを1上げる。コンボの締めで飲むのが基本。',
      frame: { startup: '飲み硬直', onBlock: '隙あり', onHit: 'レベル上昇' },
    },
    {
      name: '張弓腿',
      commandC: '623 + K',
      commandM: '6 + SP',
      usage: 'サマーソルト対空技。強版は対空、OD版は完全無敵。',
      frame: { startup: '6F', onBlock: '-24F', onHit: 'ダウン' },
    },
    {
      name: '流酔拳',
      commandC: '236 + P（3回連続入力）',
      commandM: 'SP（連続入力）',
      usage: '前進連続パンチ。追加入力で薬湯飲みや叩きつけに派生。',
      frame: { startup: '12F〜', onBlock: '-6F〜', onHit: 'ダウン/薬湯' },
    },
  ],
  gameplan: {
    farRange: '相手が様子見している隙に魔身（薬湯）を飲んでレベルを上げる。',
    midRange: '立ち強Kやしゃがみ中Kを置き、流酔拳から薬湯を飲んでレベルアップ。',
    closeRange: '酔いレベルが上がったら無影蹴（急降下）やコマ投げ（点穴）で崩す。',
    breakStalemate: [
      {
        title: '無影蹴（急降下キック）による対空ずらし',
        description: '前ジャンプから急降下蹴りを放ち、相手の対空のタイミングを狂わせてガードを崩す。',
      },
    ],
    burnoutOffense: ['画面端での絶唱魔身コンボによる削り。'],
    burnoutDefense: ['張弓腿やSA3で切り返す。'],
  },
  combos: [
    {
      id: 'jamie_c1',
      category: '基礎（小技始動・暴れ・確反）',
      name: '小技確認流酔拳（薬湯飲み）',
      classicRecipe: '2弱P > 2弱P > 236弱P > 236弱P > 236弱P(飲み)',
      modernRecipe: '2弱 > 2弱 > SP > SP > SP',
      damageApprox: '約1,400',
      driveCost: 0,
      superArtCost: 0,
      difficulty: 1,
      purpose: '暴れから確実に酔いレベルを1上げる基本。',
    },
  ],
  trainingDrills: [
    {
      id: 'jamie_drill_1',
      title: 'ダウン後の安全な薬湯飲みタイミング',
      category: 'セットプレイ',
      importance: '必修',
      description: '相手を吹き飛ばした後、前ステ起き攻めに行くか薬湯を安全に飲むかの判断練習。',
      practiceGoal: '相手の起き上がり暴れが届かない距離で確実に薬湯を飲む。',
      dummySettings: { guardSetting: 'すべてガード' },
    },
  ],
  matchups: [
    {
      opponentId: 'ryu',
      opponentName: 'リュウ',
      advantageLevel: '五分',
      coreStrategy: 'リュウの波動拳の外で薬湯を飲み、酔いレベル2以上にしてから攻め込む。',
      keyThreats: ['強昇龍拳', '電刃練気波動拳'],
      punishList: [
        {
          opponentMove: '強 昇龍拳（ガード後）',
          frameAdvantage: '-23F',
          recommendedPunish: '立ち強Pパニカンフルコンボ',
        },
      ],
      practicalTips: ['リュウが電刃練気を溜めたら、こちらも安全に薬湯を1杯飲む。'],
    },
  ],
};
