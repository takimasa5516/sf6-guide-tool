import { Character } from '../../types';

export const lily: Character = {
  id: 'lily',
  name: 'リリー',
  englishName: 'Lily',
  epithet: '風を継ぐ精霊の娘',
  archetype: 'コマンド投げ・重量級',
  difficulty: '★★☆☆☆',
  themeColor: 'from-sky-600 via-amber-600 to-emerald-700',
  accentColor: '#0284c7',
  avatarIcon: 'LILY',
  stats: {
    power: 4,
    range: 4,
    mobility: 3,
    defense: 3,
    antiAir: 4,
    easeOfUse: 5,
  },
  summary: '「コンドルウィンド」で風を溜め、「コンドルスパイア」でガードさせて有利を取って突進し、強力なコマンド投げ「メキシカンタイフーン」で相手を叩きつける風の娘。シンプルで破壊的な勝ちパターンを持つ。',
  strengths: [
    '風ストック時の「コンドルスパイア」がガードさせて+1F〜+2F有利で突っ込める',
    'コマンド投げ「メキシカンタイフーン」の吸い込み範囲と超火力',
    '棍棒を使った立ち強Pやしゃがみ強Pのリーチが非常に長い',
  ],
  weaknesses: ['風ストックがない状態だと突進技がガードで不利になる', 'OD無敵技を持たず、切り返しはSA頼み'],
  modernEvaluation: {
    rating: 'S',
    comment: 'ワンボタンコマンド投げ（メキシカンタイフーン）とワンボタン突進（コンドルスパイア）、ワンボタン対空トマホークバスターが極めて強力。モダン適性は全キャラ中最高峰の一角。',
    pros: ['ワンボタンコマ投げタイフーン', 'ワンボタン対空トマホーク'],
    cons: ['立ち中Kなどの牽制技が一部制限される'],
    lostImportantMoves: ['立ち中K', 'しゃがみ中K（アシスト併用）'],
  },
  keyMoves: [
    {
      name: 'コンドルウィンド（風溜め）',
      commandC: '214 + P',
      commandM: '4 + SP または 214+P',
      usage: '風ストックを溜める技。風を纏うことでスパイアがガード有利技に化ける。',
      frame: { startup: '風溜め動作', onBlock: '隙あり', onHit: '風ストック獲得' },
    },
    {
      name: 'コンドルスパイア（突進）',
      commandC: '236 + K',
      commandM: 'SP または 236+K',
      usage: '前方に突進する。風ストック時はガードさせて+1F有利。リリーの攻めの起点。',
      frame: { startup: '13F〜', onBlock: '風時+1F〜+2F', onHit: 'ダウン' },
    },
    {
      name: 'メキシカンタイフーン（コマ投げ）',
      commandC: 'レバー1回転 + P',
      commandM: 'SP または 1回転+P',
      usage: '相手を掴んで飛び上がり叩きつけるコマンド投げ。スパイア後の本命。',
      frame: { startup: '5F', onBlock: 'ガード不能', onHit: '大ダメージ' },
    },
  ],
  gameplan: {
    farRange: 'ODコンドルウィンドや弱コンドルウィンドで安全に風ストックを溜める。',
    midRange: '風を纏ったコンドルスパイアで突進し、ガードさせて密着有利を作る。',
    closeRange: 'スパイア後の有利から、打撃（しゃがみ弱Pや立ち中P）とメキシカンタイフーンの二択。',
    breakStalemate: [
      {
        title: '風コンドルスパイアによる突撃',
        description: 'ガードさせて有利な風スパイアで強引に突っ込み、即座にコマンド投げで吸い込む。',
      },
    ],
    burnoutOffense: ['風スパイア連発によるガード削りとコマ投げ二択。'],
    burnoutDefense: ['SA1またはSA3の完全無敵で切り返す。'],
  },
  combos: [
    {
      id: 'lily_c1',
      category: '基礎（小技始動・暴れ・確反）',
      name: '小技確認トマホークバスター',
      classicRecipe: '2弱P > 2弱P > 623強P',
      modernRecipe: '2弱 > 2弱 > 6+SP',
      damageApprox: '約1,450',
      driveCost: 0,
      superArtCost: 0,
      difficulty: 1,
      purpose: '暴れからのノーゲージ基本。',
    },
  ],
  trainingDrills: [
    {
      id: 'lily_drill_1',
      title: '風コンドルスパイアガード後のタイフーン二択',
      category: 'シミー/遅らせグラップ狩り',
      importance: '必修',
      description: '風スパイアを当てた後の+1Fから、相手の暴れを潰す打撃かメキシカンタイフーンを散らす練習。',
      practiceGoal: '相手の固まりを見てからメキシカンタイフーンで吸う。',
      dummySettings: { guardSetting: 'すべてガード' },
    },
  ],
  matchups: [
    {
      opponentId: 'ryu',
      opponentName: 'リュウ',
      advantageLevel: '五分',
      coreStrategy: 'リュウの波動拳の外で風を溜め、風スパイアで波動拳をすり抜けながら突撃する。',
      keyThreats: ['強昇龍拳（対空）', '電刃練気波動拳'],
      punishList: [
        {
          opponentMove: '強 昇龍拳（ガード後）',
          frameAdvantage: '-23F',
          recommendedPunish: 'メキシカンタイフーン または 立ち強Pパニカンフルコンボ',
        },
      ],
      practicalTips: ['昇龍拳ガード後にメキシカンタイフーンを直接入力すると超ダメージが入る。'],
    },
  ],
};
