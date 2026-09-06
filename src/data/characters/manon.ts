import { Character } from '../../types';

export const manon: Character = {
  id: 'manon',
  name: 'マノン',
  englishName: 'Manon',
  epithet: '華麗なる柔道バレリーナ',
  archetype: 'コマンド投げ・重量級',
  difficulty: '★★☆☆☆',
  themeColor: 'from-pink-700 via-rose-800 to-slate-900',
  accentColor: '#f43f5e',
  avatarIcon: 'MANON',
  stats: {
    power: 5,
    range: 4,
    mobility: 3,
    defense: 3,
    antiAir: 4,
    easeOfUse: 4,
  },
  summary: '柔道とバレエを融合させた美麗なコマンド投げキャラクター。コマンド投げや打撃投げを決めるたびに「メダルレベル（1〜5）」が上昇し、レベル5到達時のコマ投げは体力の約4割を一撃で奪い去る。',
  strengths: [
    'メダルレベル5のコマ投げ「マネージュ・ドレ」の即死級火力（ラウンドを跨いでメダル維持）',
    '立ち強Pや引き強Pなどのリーチが非常に長く、相手を自分の間合いに引き寄せる',
    '対空必殺技「ロンド・フェッテ」による迎撃',
  ],
  weaknesses: ['OD無敵技を持たず、切り返しはSA頼み', 'ドライブラッシュの速度が遅め'],
  modernEvaluation: {
    rating: 'A',
    comment: 'ワンボタンコマンド投げ（マネージュ・ドレ）とワンボタンSA3が強力。打撃で固めてワンボタンで吸い込むシンプルかつ凶悪な戦法が取れる。',
    pros: ['ワンボタンコマ投げ', 'ワンボタンSA3'],
    cons: ['立ち強Kなどの長距離牽制技が失われる'],
    lostImportantMoves: ['立ち強K', 'しゃがみ中K（アシスト併用）'],
  },
  keyMoves: [
    {
      name: 'マネージュ・ドレ（コマンド投げ）',
      commandC: '63214 + P',
      commandM: 'SP または 63214+P',
      usage: 'マノンの核となるコマンド投げ。決めるたびにメダルレベルが上昇。',
      frame: { startup: '5F', onBlock: 'ガード不能', onHit: '大ダメージ/メダルUP' },
    },
    {
      name: 'ランヴェルセ（打撃投げ）',
      commandC: '236 + P',
      commandM: '6 + SP',
      usage: '相手を掴んで投げる打撃技。コンボに組み込んでメダルレベルを上げる。',
      frame: { startup: '14F〜', onBlock: '-8F〜', onHit: 'ダウン/メダルUP' },
    },
  ],
  gameplan: {
    farRange: 'リーチの長い立ち強Pや足払いで牽制しつつ、じっくり中距離へ。',
    midRange: '引き強P（引き寄せ）やしゃがみ中Pを当て、密着状況を作る。',
    closeRange: '打撃（立ち弱P）とコマンド投げ（マネージュ・ドレ）の極悪二択。',
    breakStalemate: [
      {
        title: '引き強Pによる強制密着',
        description: '長射程の引き強Pを当てて相手を手元に引き寄せ、そこからコマ投げを吸い込む。',
      },
    ],
    burnoutOffense: ['メダル5コマ投げの恐怖で相手を固まらせて圧殺。'],
    burnoutDefense: ['SA1またはSA3の完全無敵で切り返す。'],
  },
  combos: [
    {
      id: 'manon_c1',
      category: '基礎（小技始動・暴れ・確反）',
      name: '小技確認ランヴェルセ（メダル獲得）',
      classicRecipe: '2弱P > 2弱P > 236中P',
      modernRecipe: '2弱 > 2弱 > 6+SP',
      damageApprox: '約1,500',
      driveCost: 0,
      superArtCost: 0,
      difficulty: 1,
      purpose: '暴れから確実にメダルレベルを上げる基本。',
    },
  ],
  trainingDrills: [
    {
      id: 'manon_drill_1',
      title: '引き強Pガード後のコマ投げ二択',
      category: 'シミー/遅らせグラップ狩り',
      importance: '必修',
      description: '引き強Pを当てた後の有利時間から、相手の暴れ潰し打撃かコマ投げかを散らす練習。',
      practiceGoal: '相手のガードの固まりを見てからマネージュ・ドレで吸う。',
      dummySettings: { guardSetting: 'すべてガード' },
    },
  ],
  matchups: [
    {
      opponentId: 'ryu',
      opponentName: 'リュウ',
      advantageLevel: '五分',
      coreStrategy: 'リュウの波動拳をパリィしながら前歩きし、引き強Pの間合いに捉える。',
      keyThreats: ['電刃練気波動拳', '強昇龍拳'],
      punishList: [
        {
          opponentMove: '強 昇龍拳（ガード後）',
          frameAdvantage: '-23F',
          recommendedPunish: 'マネージュ・ドレ（コマンド投げ） または 5強Pパニカンフルコンボ',
        },
      ],
      practicalTips: ['昇龍拳ガード後にコマ投げを直接入力すると超ダメージとメダルレベルが同時に手に入る。'],
    },
  ],
};
