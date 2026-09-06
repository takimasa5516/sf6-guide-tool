import { Character } from '../../types';

export const zangief: Character = {
  id: 'zangief',
  name: 'ザンギエフ',
  englishName: 'Zangief',
  epithet: '赤きサイクロン',
  archetype: 'コマンド投げ・重量級',
  difficulty: '★★☆☆☆',
  themeColor: 'from-red-700 via-rose-800 to-amber-900',
  accentColor: '#b91c1c',
  avatarIcon: 'GIEF',
  stats: {
    power: 5,
    range: 4,
    mobility: 1,
    defense: 4,
    antiAir: 4,
    easeOfUse: 4,
  },
  summary: '圧倒的な一撃破壊力を誇る「スクリューパイルドライバー」と、打撃・飛び道具を吸い寄せる「ダブルラリアット」を持つプロレスラー。1回の読み勝ちで試合をひっくり返す破壊神。',
  strengths: [
    'スクリューパイルドライバーの単発ダメージが全キャラ中最高（体力の3割強〜4割）',
    '体力10,500と全キャラ中最高峰のタフネス',
    '立ち大P（アーマー付き）やヘッドバットによる近接ガードブレイク',
    'SA3「ボリショイ・ストームブレイカー」の暗転後回避不能の絶望的火力',
  ],
  weaknesses: [
    '機動力が極めて低く、弾持ちキャラへの接近に忍耐が必要',
    '無敵対空がなく、飛びへの対応に立ち弱P対空やラリアットの使い分けが必要',
  ],
  modernEvaluation: {
    rating: 'S',
    comment: 'モダン操作の代表的脅威。通常なら1回転入力が必要なスクリューが【ニュートラル＋SP】のワンボタンで即座に出る。さらにSA3（2回転）もワンボタンで出せるため、相手はザンギエフの密着で技を振ることすら恐怖になる。',
    pros: ['ワンボタンスクリューパイルドライバー', '暗転即確定のワンボタンSA3'],
    cons: ['立ち中Kや一部牽制技が失われる', 'ワンボタンダメージ補正（80%）'],
    lostImportantMoves: ['立ち中K', 'しゃがみ中K（アシスト併用）'],
  },
  keyMoves: [
    {
      name: 'スクリューパイルドライバー',
      commandC: 'レバー1回転 + P',
      commandM: 'SP または 1回転+P',
      usage: 'ザンギエフの代名詞。弱は吸い込み間合いが広く、強は超火力。',
      frame: { startup: '5F', onBlock: 'ガード不能', onHit: '大ダメージ' },
    },
    {
      name: 'ダブルラリアット',
      commandC: 'PP',
      commandM: '4 + SP または PP',
      usage: '両手を広げて回転する対空・コンボ技。',
      frame: { startup: '12F', onBlock: '-13F', onHit: 'ダウン' },
    },
    {
      name: 'シベリアンエクスプレス',
      commandC: '63214 + K',
      commandM: '6 + SP',
      usage: '突進して掴む移動コマンド投げ。油断して固まっている相手を中距離から吸い込む。',
      frame: { startup: '26F', onBlock: 'ガード不能', onHit: 'ダウン' },
    },
  ],
  gameplan: {
    farRange: 'パリィや前歩きガードで弾をしのぎ、じっくり間合いを詰める。',
    midRange: 'リーチの長い立ち中Pや立ち強Pアーマーを置き、相手がビビった瞬間にダッシュスクリュー。',
    closeRange: '打撃（ヘッドバットやしゃがみ弱P）と、スクリューパイルドライバーの二択。抜けたら即死。',
    breakStalemate: [
      {
        title: '生ドライブラッシュ スクリュー',
        description: 'ラッシュから直接スクリューパイルドライバーを入力して長距離から吸い込む。',
      },
    ],
    burnoutOffense: ['スクリューとヘッドバットの永久二択ループ。'],
    burnoutDefense: ['ワンボタンSA3で相手の甘い連係を吸い尽くす。'],
  },
  combos: [
    {
      id: 'zangief_c1',
      category: '基礎（小技始動・暴れ・確反）',
      name: '小技2発ダブルラリアット',
      classicRecipe: '2弱P > 5弱P > PP(ラリアット)',
      modernRecipe: '2弱 > 弱 > 4+SP',
      damageApprox: '約1,600',
      driveCost: 0,
      superArtCost: 0,
      difficulty: 1,
      purpose: '暴れからのノーゲージ基本。',
    },
  ],
  trainingDrills: [
    {
      id: 'zangief_drill_1',
      title: '密着ヘッドバット後のスクリュー二択',
      category: 'シミー/遅らせグラップ狩り',
      importance: '必修',
      description: 'ヘッドバット（ガード+4F）から、相手の暴れを潰す打撃かスクリューの二択を仕掛ける。',
      practiceGoal: '相手のガードを見てからスクリューで吸う。',
      dummySettings: { guardSetting: 'すべてガード' },
    },
  ],
  matchups: [
    {
      opponentId: 'ryu',
      opponentName: 'リュウ',
      advantageLevel: '五分',
      coreStrategy: 'リュウの波動拳をじっくりパリィしながら前歩きで画面端へ追い詰め、1発のスクリューで逆転する。',
      keyThreats: ['電刃練気波動拳', '強昇龍拳'],
      punishList: [
        {
          opponentMove: '強 昇龍拳（ガード後）',
          frameAdvantage: '-23F',
          recommendedPunish: '強スクリューパイルドライバー または SA3',
        },
      ],
      practicalTips: ['昇龍拳ガード後はコンボよりも強スクリューを叩き込むのが最も手軽で超高火力。'],
    },
  ],
};
