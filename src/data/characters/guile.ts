import { Character } from '../../types';

export const guile: Character = {
  id: 'guile',
  name: 'ガイル',
  englishName: 'Guile',
  epithet: '不落の移動要塞',
  archetype: 'リーチ・中距離制圧',
  difficulty: '★★☆☆☆',
  themeColor: 'from-emerald-600 via-green-700 to-amber-700',
  accentColor: '#15803d',
  avatarIcon: 'GUILE',
  stats: {
    power: 4,
    range: 5,
    mobility: 2,
    defense: 5,
    antiAir: 5,
    easeOfUse: 4,
  },
  summary: 'ソニックブームによる鉄壁の弾幕と、サマーソルトキックによる完全無敵対空を誇る元祖待ちキャラ。相手に攻めを強要させ、焦って飛んできたところを撃墜する迎撃の王様。',
  strengths: [
    '「ソニックブーム」の硬直が極めて短く、連射性能と回転率が全キャラ中最高峰',
    '「サマーソルトキック」の対空迎撃率が100%に近い',
    'しゃがみ中Pや立ち強Pなどの通常技判定が強く、地上戦が要塞のように堅牢',
  ],
  weaknesses: [
    'タメ技キャラのため、前に攻める際にはタメ解除の隙ができる',
    '自分から相手のガードを崩す手段が少なく、リードを取られた時の捲りが難しい',
  ],
  modernEvaluation: {
    rating: 'A',
    comment: 'ワンボタン対空サマーソルトキック（下＋SP）がタメなしで出るため、前歩きしながらのサマーソルトが可能という驚異の防御力を誇る。ただし弱中強のソニックの弾速撃ち分けに手動入力が必要。',
    pros: ['前歩きしながらワンボタンサマーソルト対空', 'ワンボタンSA3'],
    cons: ['ソニックブームの細かい緩急つけが制限される'],
    lostImportantMoves: ['立ち弱K', 'しゃがみ中K（アシスト併用）'],
  },
  keyMoves: [
    {
      name: 'ソニックブーム',
      commandC: '4タメ6 + P',
      commandM: '4 + SP または 4タメ6+P',
      usage: '隙の少ない飛び道具。弱で遅く撃ち、追いかけて前進する。',
      frame: { startup: '10F〜', onBlock: '-3F〜+2F', onHit: '+2F〜' },
    },
    {
      name: 'サマーソルトキック',
      commandC: '2タメ8 + K',
      commandM: '2 + SP（モダンはタメ不要）',
      usage: '完全無敵の対空必殺技。ガイルの絶対的生命線。',
      frame: { startup: '5F', onBlock: '-28F', onHit: 'ダウン' },
    },
  ],
  gameplan: {
    farRange: '弱ソニックブームを撃ち、相手がパリィやジャンプを試みるのをじっくり待つ。',
    midRange: 'ソニックブレイドや立ち強P、しゃがみ中Pで相手の前進を拒絶。飛んだらサマーソルト。',
    closeRange: '相手が固まったら前歩き投げ。無理に攻めず、間合いを開けて再度ソニック展開へ。',
    breakStalemate: [
      {
        title: '弱ソニックブーム盾の前進',
        description: '最も遅い弱ソニックを撃ち、その後ろを歩いて追尾しながら密着二択を仕掛ける。',
      },
    ],
    burnoutOffense: ['画面端でのソニックブーム連射と強インパクト連携。'],
    burnoutDefense: ['ワンボタンサマーソルトやSA3（クロスファイアサマーソルト）で切り返す。'],
  },
  combos: [
    {
      id: 'guile_c1',
      category: '基礎（小技始動・暴れ・確反）',
      name: '小技確認サマーソルト',
      classicRecipe: '2弱P > 2弱P > 2タメ8中K',
      modernRecipe: '2弱 > 2弱 > 2+SP',
      damageApprox: '約1,420',
      driveCost: 0,
      superArtCost: 0,
      difficulty: 1,
      purpose: '暴れからのノーゲージ基本対空・確反。',
    },
  ],
  trainingDrills: [
    {
      id: 'guile_drill_1',
      title: 'ソニックブーム撃ち分けと引きつけサマーソルト',
      category: '対空',
      importance: '必修',
      description: 'ダミーにジャンプ攻撃をランダムでさせ、ソニックを撃ちつつ確実にサマーソルトで落とす。',
      practiceGoal: 'ソニックを撃った直後の硬直解けに対空サマーを100%成功させる。',
      dummySettings: { guardSetting: 'すべてガード' },
    },
  ],
  matchups: [
    {
      opponentId: 'ryu',
      opponentName: 'リュウ',
      advantageLevel: '微有利',
      coreStrategy: '波動拳に対してソニックブームの回転率で撃ち勝つ。リュウが電刃練気を溜める隙にソニックで削る。',
      keyThreats: ['電刃練気波動拳', '中足ラッシュ'],
      punishList: [
        {
          opponentMove: '強 昇龍拳（ガード後）',
          frameAdvantage: '-23F',
          recommendedPunish: '前ステ > 立ち強Pパニカンフルコンボ',
        },
      ],
      practicalTips: ['リュウが前ジャンプしてきたら引きつけて確実にサマーソルトで落とす。'],
    },
  ],
};
