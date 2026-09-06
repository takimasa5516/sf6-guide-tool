import { Character } from '../../types';

export const juri: Character = {
  id: 'juri',
  name: 'ジュリ',
  englishName: 'Juri Han',
  epithet: '紫煙の快楽主義者',
  archetype: 'インファイター・スピード',
  difficulty: '★★☆☆☆',
  themeColor: 'from-fuchsia-700 via-purple-800 to-pink-900',
  accentColor: '#d946ef',
  avatarIcon: 'JURI',
  stats: {
    power: 4,
    range: 4,
    mobility: 5,
    defense: 3,
    antiAir: 4,
    easeOfUse: 4,
  },
  summary: 'ドライブラッシュの突進速度が全キャラ最速クラス。「風破刃」でストックを溜めることで必殺技が大幅に強化され、相手を翻弄するスピードアタッカー。SA2「風水エンジン」発動時のラッシュは圧巻。',
  strengths: [
    '生ドライブラッシュの速度が最速で、画面端から端まで一瞬で触りに行ける',
    '「風破刃」ストック時のコンボ火力と固め連携のループ性',
    '中足のリーチが長く、キャンセルラッシュからのリターンが絶大',
    '無敵対空技「天穿輪」を所持',
  ],
  weaknesses: [
    '風破ストックがない状態だと火力がやや落ちる',
    '相手に付き合って遠距離戦を続けるとジリ貧になる',
  ],
  modernEvaluation: {
    rating: 'A',
    comment: '超高速生ラッシュとワンボタン対空天穿輪、ワンボタンSA3が強烈。風破ストックの管理もアシストコンボに組み込まれているため扱いやすい。',
    pros: ['超高速生ラッシュ立ち中P', 'ワンボタン対空天穿輪'],
    cons: ['風水エンジン（SA2）の変幻自在ルートで手動入力が必要'],
    lostImportantMoves: ['立ち弱K', 'しゃがみ強P（アシスト併用）'],
  },
  keyMoves: [
    {
      name: 'しゃがみ中K（中足）',
      commandC: '2 + 中K',
      commandM: '2 + 中',
      usage: '最速ラッシュと相まって中距離で最も危険な下段技。',
      frame: { startup: '8F', onBlock: '-6F', onHit: '+1F' },
    },
    {
      name: '風破刃（弱・中・強）',
      commandC: '214 + K',
      commandM: '4 + SP または 214+K',
      usage: '風破ストックを溜める技。中・強版はコンボの締めに最適。',
      frame: { startup: '14F〜', onBlock: '-6F〜', onHit: 'ダウン/ストック増加' },
    },
    {
      name: '強 天穿輪',
      commandC: '623 + 強P',
      commandM: '6 + SP',
      usage: '完全無敵の対空昇龍技。',
      frame: { startup: '6F', onBlock: '-24F', onHit: 'ダウン' },
    },
  ],
  gameplan: {
    farRange: '弱風破刃を空振りしてストックを溜めつつ、超高速生ドライブラッシュで奇襲。',
    midRange: 'しゃがみ中Kキャンセルラッシュを狙い、相手の跳びは天穿輪で落とす。',
    closeRange: '風破ストックを使った必殺技連携で固め、相手の投げ抜けを誘ってシミー立ち強P。',
    breakStalemate: [
      {
        title: '超速生ドライブラッシュ 中中P',
        description: '全キャラ最速の生ラッシュで一気に間合いを詰め、ガードさせて有利から攻め立てる。',
      },
    ],
    burnoutOffense: ['風破ストックを使った連続必殺技による削り。'],
    burnoutDefense: ['天穿輪またはSA1・SA3の無敵で切り返す。'],
  },
  combos: [
    {
      id: 'juri_c1',
      category: '中攻撃・差し返し確認',
      name: '中足ラッシュ風破ストックコンボ',
      classicRecipe: '2中K > ラッシュ > 2中P > 5強P > 214中K(ストック)',
      modernRecipe: '2中 > ラッシュ > 2中 > アシスト強 > 4+SP',
      damageApprox: '約2,650',
      driveCost: 3,
      superArtCost: 0,
      difficulty: 2,
      purpose: '中足からダメージと風破ストックを両立する基本。',
    },
  ],
  trainingDrills: [
    {
      id: 'juri_drill_1',
      title: '生ドライブラッシュ中Pからのヒット確認',
      category: 'コンボ確認',
      importance: '必修',
      description: '生ラッシュ中Pが当たったらコンボ、ガードなら投げに移行する練習。',
      practiceGoal: '生ラッシュから確実に有利展開を作る。',
      dummySettings: { guardSetting: 'ランダムガード' },
    },
  ],
  matchups: [
    {
      opponentId: 'ryu',
      opponentName: 'リュウ',
      advantageLevel: '微有利',
      coreStrategy: 'リュウの波動拳を前ジャンプや歳破衝で牽制し、生ラッシュの速度で触りに行く。',
      keyThreats: ['強昇龍拳対空', '電刃練気波動拳'],
      punishList: [
        {
          opponentMove: '強 昇龍拳（ガード後）',
          frameAdvantage: '-23F',
          recommendedPunish: '5強Pパニカンフルコンボ',
        },
      ],
      practicalTips: ['リュウが波動拳を構えた瞬間に生ラッシュで突っ込むとパニカンを取りやすい。'],
    },
  ],
};
