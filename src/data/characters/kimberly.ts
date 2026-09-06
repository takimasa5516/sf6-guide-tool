import { Character } from '../../types';

export const kimberly: Character = {
  id: 'kimberly',
  name: 'キンバリー',
  englishName: 'Kimberly',
  epithet: '武神流忍術の伝承者',
  archetype: '突進・攪乱',
  difficulty: '★★★☆☆',
  themeColor: 'from-pink-600 via-purple-600 to-indigo-700',
  accentColor: '#ec4899',
  avatarIcon: 'KIM',
  stats: {
    power: 3,
    range: 3,
    mobility: 5,
    defense: 2,
    antiAir: 4,
    easeOfUse: 4,
  },
  summary: '疾駆け、スプレー缶設置、煙玉ワープ、そしてカセットテープを聴いてスピードUPする現代の忍者。画面端での起き攻めループと表裏見えないセットプレイで相手を完封する。',
  strengths: [
    '「疾駆け」からの多彩な急停止・スライディング・中段派生',
    '「細工手裏剣（スプレー缶）」を使った画面端の不可避セットプレイ',
    'SA3「武神顕現楽之巻」発動後の常時移動速度・攻撃力UP',
  ],
  weaknesses: ['OD無敵技を持たず、守勢に回った時の切り返しがSA頼み', '単発火力がやや低め'],
  modernEvaluation: {
    rating: 'A',
    comment: 'ワンボタン疾駆け派生やワンボタンSA3が便利。スプレー缶を使った起き攻めもアシストボタンで手軽に出せる。',
    pros: ['ワンボタン疾駆け', 'ワンボタンSA3'],
    cons: ['スプレー缶の細かい設置バリエーションに手動入力が必要'],
    lostImportantMoves: ['立ち中K', 'しゃがみ中K（アシスト併用）'],
  },
  keyMoves: [
    {
      name: '疾駆け',
      commandC: '236 + K',
      commandM: 'SP または 236+K',
      usage: '前方に猛ダッシュ。急停止、スライディング（下段）、胴払い（中段）へ派生。',
      frame: { startup: 'ダッシュ動作', onBlock: '派生依存', onHit: 'ダウン' },
    },
    {
      name: '武神旋風脚',
      commandC: '214 + K',
      commandM: '4 + SP',
      usage: '回転蹴り対空・コンボ技。空中でも発動可能。',
      frame: { startup: '8F〜', onBlock: '-12F〜', onHit: 'ダウン' },
    },
  ],
  gameplan: {
    farRange: '煙玉ワープ（隠形律）や生ラッシュで一気に接近。',
    midRange: 'しゃがみ中Kキャンセルラッシュや疾駆けで相手のガードを揺さぶる。',
    closeRange: 'スプレー缶を設置し、爆発のタイミングに合わせて打撃と投げのハメ攻め。',
    breakStalemate: [
      {
        title: '疾駆け 急停止投げ',
        description: '猛ダッシュから急停止して意表を突き、通常投げを通す。',
      },
    ],
    burnoutOffense: ['スプレー缶爆発を盾にしたガード不能級の連携。'],
    burnoutDefense: ['SA1またはSA3の完全無敵で切り返す。'],
  },
  combos: [
    {
      id: 'kimberly_c1',
      category: '基礎（小技始動・暴れ・確反）',
      name: '小技確認武神旋風脚',
      classicRecipe: '2弱P > 2弱P > 214弱K',
      modernRecipe: '2弱 > 2弱 > 4+SP',
      damageApprox: '約1,350',
      driveCost: 0,
      superArtCost: 0,
      difficulty: 1,
      purpose: '暴れからの基本。',
    },
  ],
  trainingDrills: [
    {
      id: 'kimberly_drill_1',
      title: 'スプレー缶設置後の起き攻めセットプレイ',
      category: 'セットプレイ',
      importance: '必修',
      description: 'スプレー缶を投げてから前ダッシュ中段・下段の択を練習。',
      practiceGoal: '相手の起き上がり無敵技を警戒しつつ爆発と重ねる。',
      dummySettings: { guardSetting: 'すべてガード' },
    },
  ],
  matchups: [
    {
      opponentId: 'ryu',
      opponentName: 'リュウ',
      advantageLevel: '五分',
      coreStrategy: 'リュウの波動拳を疾駆けスライディングで潜り抜け、画面端に追い詰める。',
      keyThreats: ['強昇龍拳対空', '電刃練気波動拳'],
      punishList: [
        {
          opponentMove: '強 昇龍拳（ガード後）',
          frameAdvantage: '-23F',
          recommendedPunish: '立ち強Pパニカンフルコンボ',
        },
      ],
      practicalTips: ['リュウの昇龍拳を警戒して、端のセットプレイでは詐欺飛びを意識する。'],
    },
  ],
};
