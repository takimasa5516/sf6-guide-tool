import { Character } from '../../types';

export const dhalsim: Character = {
  id: 'dhalsim',
  name: 'ダルシム',
  englishName: 'Dhalsim',
  epithet: '導きのヨーガマスター',
  archetype: 'リーチ・中距離制圧',
  difficulty: '★★★★★',
  themeColor: 'from-orange-800 via-amber-700 to-stone-900',
  accentColor: '#ea580c',
  avatarIcon: 'SIM',
  stats: {
    power: 3,
    range: 5,
    mobility: 2,
    defense: 3,
    antiAir: 4,
    easeOfUse: 2,
  },
  summary: '手足を自在に伸ばす超遠距離通常技、山なりに飛ぶ「ヨガファイア」、炎を吐く「ヨガフレイム」、そして空中テレポートを持つトリッキーな達人。相手の届かない距離から一方的に殴り続ける。',
  strengths: [
    '全キャラ中圧倒的No.1の通常技リーチ（画面端まで届くパンチとキック）',
    'ヨガテレポートによる自在な位置取りと奇襲',
    'ヨガフロート（空中浮遊）による滞空時間のコントロール',
  ],
  weaknesses: ['近距離に詰められると防御が非常に脆い', '操作が極めて特殊で習得難易度が最高ランク'],
  modernEvaluation: {
    rating: 'C',
    comment: '手足のリーチ（立ち強P、しゃがみ強P、立ち中P、立ち中K）の細かい使い分けが命のキャラクターであるため、通常技が制限されるモダンは適性が低め。クラシックでの操作が強く推奨される。',
    pros: ['ワンボタンSA3による切り返し'],
    cons: ['重要通常技の射程使い分けが大幅に制限される'],
    lostImportantMoves: ['立ち強P', '立ち中K', 'しゃがみ中K'],
  },
  keyMoves: [
    {
      name: 'ヨガファイア',
      commandC: '236 + P',
      commandM: 'SP または 236+P',
      usage: '山なりに飛ぶ炎の弾。地面でバウンドする。',
      frame: { startup: '16F〜', onBlock: '-4F〜', onHit: 'ダウン' },
    },
    {
      name: 'ヨガテレポート',
      commandC: '623 + PPP または 421 + PPP',
      commandM: '6 + SP または 4 + SP',
      usage: '相手の前方または背後へ瞬時にワープする移動技。空中でも可能。',
      frame: { startup: 'ワープ動作', onBlock: '隙あり', onHit: '移動' },
    },
    {
      name: '長射程パンチ（立ち強P）',
      commandC: '強P',
      commandM: '強',
      usage: '画面端まで届く巨大なストレート。相手の歩きや技の出鼻を挫く。',
      frame: { startup: '12F', onBlock: '-6F', onHit: '+1F' },
    },
  ],
  gameplan: {
    farRange: 'ヨガファイアと立ち強P、立ち中Pで相手を一切近づかせない。',
    midRange: '相手が跳んできたらヨガブラストや対空立ち強Kで撃墜。',
    closeRange: '詰められたらヨガテレポートで即座に脱出して距離を仕切り直す。',
    breakStalemate: [
      {
        title: '空中ヨガテレポートからの裏回り奇襲',
        description: '空中から相手の背後へテレポートし、着地投げや中段攻撃でガードをこじ開ける。',
      },
    ],
    burnoutOffense: ['ヨガフレイムによる画面端の炎削り。'],
    burnoutDefense: ['ヨガテレポートで脱出するか、SA3で切り返す。'],
  },
  combos: [
    {
      id: 'dhalsim_c1',
      category: '基礎（小技始動・暴れ・確反）',
      name: '近距離小技ヨガフレイム',
      classicRecipe: '4弱P > 4弱P > 63214弱P',
      modernRecipe: '2弱 > 2弱 > 4+SP',
      damageApprox: '約1,300',
      driveCost: 0,
      superArtCost: 0,
      difficulty: 1,
      purpose: '密着での暴れからダウンを奪う。',
    },
  ],
  trainingDrills: [
    {
      id: 'dhalsim_drill_1',
      title: '手足のリーチ管理とヨガブラスト対空',
      category: '対空',
      importance: '必修',
      description: 'ダミーの前進とジャンプに対して、立ち強P牽制とヨガブラスト対空を正確に使い分ける。',
      practiceGoal: '相手を一度も近づかせずに完封する。',
      dummySettings: { guardSetting: 'すべてガード' },
    },
  ],
  matchups: [
    {
      opponentId: 'ryu',
      opponentName: 'リュウ',
      advantageLevel: '有利',
      coreStrategy: 'リュウの波動拳の外側から手足を伸ばして攻撃し、電刃練気は立ち強Pで阻止する。',
      keyThreats: ['生ドライブラッシュ鎖骨割り', '電刃練気波動拳'],
      punishList: [
        {
          opponentMove: '強 昇龍拳（ガード後）',
          frameAdvantage: '-23F',
          recommendedPunish: '立ち強Pパニカンフルコンボ',
        },
      ],
      practicalTips: ['リュウが波動拳を撃つ瞬間に立ち強Pを合わせるとクラッシュする。'],
    },
  ],
};
