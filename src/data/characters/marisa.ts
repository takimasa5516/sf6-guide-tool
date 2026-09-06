import { Character } from '../../types';

export const marisa: Character = {
  id: 'marisa',
  name: 'マリーザ',
  englishName: 'Marisa',
  epithet: '黄金の古代グラディエーター',
  archetype: 'コマンド投げ・重量級',
  difficulty: '★★☆☆☆',
  themeColor: 'from-amber-700 via-yellow-600 to-red-800',
  accentColor: '#d97706',
  avatarIcon: 'MARISA',
  stats: {
    power: 5,
    range: 4,
    mobility: 2,
    defense: 4,
    antiAir: 4,
    easeOfUse: 5,
  },
  summary: 'アーマー判定付きの通常技と、「グラディウス」「ファランクス」による超絶的な打撃破壊力を誇る女闘士。溜め技でガードゲージを削りまくり、相手を圧倒する。',
  strengths: [
    '通常技や必殺技にスーパーアーマーが付いており、相手の牽制を一方的に殴り倒せる',
    '単発コンボ火力が全キャラ中屈指で、ワンチャンスで5割消し飛ぶ',
    'コマンド投げ「エスクード」からのガード崩し',
  ],
  weaknesses: ['下段技（足払い）にアーマーが対応していない', '無敵対空がなく、飛びへの迎撃にコツが必要'],
  modernEvaluation: {
    rating: 'S',
    comment: 'ワンボタン必殺技（グラディウス、ファランクス）とワンボタンSA3が凶悪。モダンでも火力がほとんど落ちず、初心者からマスターまで無類の強さを誇る。',
    pros: ['ワンボタンアーマー打撃', '超火力アシストコンボ'],
    cons: ['一部通常技のタメ撃ち分けが制限される'],
    lostImportantMoves: ['立ち弱K', 'しゃがみ中K（アシスト併用）'],
  },
  keyMoves: [
    {
      name: 'グラディウス',
      commandC: '236 + P（ホールド可）',
      commandM: 'SP（ホールド可）',
      usage: 'アーマー付きのストレート。最大ホールドでガードさせて有利。',
      frame: { startup: '15F〜', onBlock: '-4F〜+2F', onHit: 'ダウン' },
    },
    {
      name: 'ファランクス',
      commandC: '623 + P',
      commandM: '6 + SP',
      usage: '跳躍しながら殴りかかる。相手の下段をすり抜けながら接近する。',
      frame: { startup: '22F〜', onBlock: '+2F〜', onHit: 'ダウン' },
    },
  ],
  gameplan: {
    farRange: 'ファランクスで相手の下段牽制を飛び越えつつ強襲する。',
    midRange: '立ち強P（アーマー）やグラディウスを構え、相手の技を吸い込みながら殴る。',
    closeRange: 'ガード有利からの打撃とコマンド投げ（スクトゥム派生）の二択。',
    breakStalemate: [
      {
        title: 'ファランクス急襲',
        description: 'ガードさせて有利なファランクスで突っ込み、即座に投げか打撃を迫る。',
      },
    ],
    burnoutOffense: ['グラディウス最大溜めによるガードゲージ圧殺。'],
    burnoutDefense: ['スクトゥム（当身構え）やSA3で切り返す。'],
  },
  combos: [
    {
      id: 'marisa_c1',
      category: '基礎（小技始動・暴れ・確反）',
      name: '小技確認ディマカイルス',
      classicRecipe: '2弱P > 2弱P > 214弱P',
      modernRecipe: '2弱 > 2弱 > 4+SP',
      damageApprox: '約1,600',
      driveCost: 0,
      superArtCost: 0,
      difficulty: 1,
      purpose: '暴れからのノーゲージ高火力。',
    },
  ],
  trainingDrills: [
    {
      id: 'marisa_drill_1',
      title: 'グラディウスのホールドと即出しの使い分け',
      category: 'コンボ確認',
      importance: '必修',
      description: 'ダミーの暴れに合わせてアーマーで受けて殴る練習。',
      practiceGoal: '相手の技を見てからアーマーで耐えて殴る。',
      dummySettings: { guardSetting: 'すべてガード' },
    },
  ],
  matchups: [
    {
      opponentId: 'ryu',
      opponentName: 'リュウ',
      advantageLevel: '微有利',
      coreStrategy: 'リュウの波動拳にファランクスを合わせ、中足には立ち強Pのアーマーで打ち勝つ。',
      keyThreats: ['電刃練気波動拳', '強昇龍拳'],
      punishList: [
        {
          opponentMove: '強 昇龍拳（ガード後）',
          frameAdvantage: '-23F',
          recommendedPunish: '立ち強P最大溜めパニカン超絶コンボ',
        },
      ],
      practicalTips: ['昇龍拳ガード後に立ち強Pを最大まで溜めて殴ると即死級のダメージが出る。'],
    },
  ],
};
