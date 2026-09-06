import { Character } from '../../types';

export const chunli: Character = {
  id: 'chunli',
  name: '春麗',
  englishName: 'Chun-Li',
  epithet: '神脚美技',
  archetype: 'インファイター・スピード',
  difficulty: '★★★★☆',
  themeColor: 'from-blue-600 via-cyan-600 to-indigo-900',
  accentColor: '#06b6d4',
  avatarIcon: 'CHUN',
  stats: {
    power: 4,
    range: 4,
    mobility: 5,
    defense: 4,
    antiAir: 4,
    easeOfUse: 3,
  },
  summary: '最速クラスの歩き速度と、「行雲流水（構え）」からの多彩な派生技、百裂脚、気功拳を持つ華麗なテクニカルファイター。中足のリーチが長く、使いこなせば全キャラ最高峰の制圧力を持つ。',
  strengths: [
    '通常技の判定と歩き速度が全キャラトップクラス',
    '「行雲流水（構え）」を絡めたコンボの火力とルート選択肢が無限大',
    '気功拳を盾にした前進攻めが強力',
    '空中百裂脚や空中投げによる空中戦の強さ',
  ],
  weaknesses: [
    '「行雲流水（構え）」の操作難易度が高く、習得にやり込みが必要',
    '無敵対空の天昇脚が下下コマンド（クラシック）のため慣れが必要',
  ],
  modernEvaluation: {
    rating: 'S',
    comment: 'モダン操作の恩恵が極めて大きいキャラクター。下下コマンドの対空天昇脚が【下＋SP】のワンボタンで即座に出るため、対空の難易度が激変する。構えを経由しなくても実戦級コンボが簡単に出せる。',
    pros: ['ワンボタン対空天昇脚', 'ワンボタンSA2（気功掌）・SA3（鳳扇華）の確反力'],
    cons: ['構えからの派生技の一部が失われる'],
    lostImportantMoves: ['立ち弱K', 'しゃがみ強P（アシスト併用）'],
  },
  keyMoves: [
    {
      name: 'しゃがみ中K（中足）',
      commandC: '2 + 中K',
      commandM: '2 + 中',
      usage: '春麗の生命線。リーチが極めて長く、キャンセルラッシュが強力。',
      frame: { startup: '8F', onBlock: '-6F', onHit: '+1F' },
    },
    {
      name: '気功拳',
      commandC: '4タメ6 + P',
      commandM: '4 + SP または 4タメ6+P',
      usage: '弾速の遅い飛び道具。弱気功拳を撃ち、追いかけて触りに行く。',
      frame: { startup: '14F〜', onBlock: '-3F〜+2F', onHit: '+2F〜' },
    },
    {
      name: '天昇脚',
      commandC: '22 + K',
      commandM: '2 + SP（モダンワンボタン）',
      usage: '対空必殺技。強版は完全対空、OD版は完全無敵。',
      frame: { startup: '7F', onBlock: '-26F', onHit: 'ダウン' },
    },
  ],
  gameplan: {
    farRange: '弱気功拳を撃ち、弾の後ろを前歩きで追いかけて相手を画面端へ追いつめる。',
    midRange: '超リーチのしゃがみ中Kを置き、キャンセルラッシュを仕込む。相手の跳びは天昇脚で落とす。',
    closeRange: '立ち弱Pやしゃがみ弱Pの刻みから、投げとシミー立ち強Pの二択。',
    breakStalemate: [
      {
        title: '気功拳追いかけラッシュ',
        description: '弱気功拳を撃った直後に生ラッシュで追い越し、相手のガードを崩す。',
      },
    ],
    burnoutOffense: ['画面端でのOD百裂脚削り連携。'],
    burnoutDefense: ['ワンボタン天昇脚やSA3鳳扇華で切り返す。'],
  },
  combos: [
    {
      id: 'chunli_c1',
      category: '中攻撃・差し返し確認',
      name: '中足キャンセルラッシュ基本',
      classicRecipe: '2中K > ラッシュ > 2中P > 5強P > 22強K',
      modernRecipe: '2中 > ラッシュ > 2中 > アシスト強 > 2+SP',
      damageApprox: '約2,750',
      driveCost: 3,
      superArtCost: 0,
      difficulty: 2,
      purpose: '中距離からの主力ダメージ源。',
    },
  ],
  trainingDrills: [
    {
      id: 'chunli_drill_1',
      title: '天昇脚の対空反応練習',
      category: '対空',
      importance: '必修',
      description: 'ダミーの飛びに対して天昇脚を最速で出す練習。',
      practiceGoal: '飛びを見てから確実に天昇脚を合わせる。',
      dummySettings: { guardSetting: 'すべてガード' },
    },
  ],
  matchups: [
    {
      opponentId: 'ryu',
      opponentName: 'リュウ',
      advantageLevel: '微有利',
      coreStrategy: '中足のリーチ差で地上戦を制する。リュウの波動拳に弱気功拳を合わせ、追いかけて接近する。',
      keyThreats: ['電刃練気波動拳', '強昇龍拳'],
      punishList: [
        {
          opponentMove: '強 昇龍拳（ガード後）',
          frameAdvantage: '-23F',
          recommendedPunish: '5強Pパニカンフルコンボ',
        },
      ],
      practicalTips: ['リュウの中足の届かない間合いから春麗の中足が届くため、外から差し返す。'],
    },
  ],
};
