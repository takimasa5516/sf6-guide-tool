import { Character } from '../../types';

export const blanka: Character = {
  id: 'blanka',
  name: 'ブランカ',
  englishName: 'Blanka',
  epithet: '密林の電撃戦士',
  archetype: '突進・攪乱',
  difficulty: '★★☆☆☆',
  themeColor: 'from-green-600 via-lime-600 to-amber-700',
  accentColor: '#65a30d',
  avatarIcon: 'BLANKA',
  stats: {
    power: 4,
    range: 4,
    mobility: 5,
    defense: 3,
    antiAir: 4,
    easeOfUse: 4,
  },
  summary: 'ローリングアタックによる高速突進、エレクトリックサンダー（電撃）、そして「ブランカちゃん人形」を使った画面制圧が売りの野生児。SA2発動時の無限ローリングコンボは相手を絶望させる。',
  strengths: [
    '「ローリングアタック」の突進速度と先端当てによる安全性',
    '「ブランカちゃん人形」を設置して電撃を流すガード不能級の起き攻め',
    '「バーチカルローリング」による無敵対空・切り返し',
  ],
  weaknesses: ['タメ技コマンドの維持が必要', 'ローリングアタックをジャストパリィされると確反を受ける'],
  modernEvaluation: {
    rating: 'A',
    comment: 'ワンボタンローリングアタックやワンボタン対空バーチカル、ワンボタンSA3が強力。突進と電撃で相手を翻弄できる。',
    pros: ['ワンボタン突進ローリング', 'ワンボタン対空バーチカル'],
    cons: ['ブランカちゃん人形の細かい起爆セットプレイに手動入力が必要'],
    lostImportantMoves: ['立ち弱K', 'しゃがみ強P（アシスト併用）'],
  },
  keyMoves: [
    {
      name: 'ローリングアタック',
      commandC: '4タメ6 + P',
      commandM: '4 + SP または 4タメ6+P',
      usage: '体を丸めて突進する。強版は高速、OD版はさらに高速。先端当てが基本。',
      frame: { startup: '11F〜', onBlock: '-4F〜-12F', onHit: 'ダウン' },
    },
    {
      name: 'バーチカルローリング',
      commandC: '2タメ8 + K',
      commandM: '2 + SP',
      usage: '上空へ飛び上がる対空技。OD版は完全無敵。',
      frame: { startup: '6F', onBlock: '-28F', onHit: 'ダウン' },
    },
  ],
  gameplan: {
    farRange: 'ローリングアタック先端当てで相手の技振りを抑制。',
    midRange: 'サプライズフォワード（すり抜け前ダッシュ）やアマゾンリバーラン（スライディング）で下段奇襲。',
    closeRange: 'エレクトリックサンダーで固め、ブランカちゃん人形を設置してハメ攻め。',
    breakStalemate: [
      {
        title: 'アマゾンリバーラン（スライディング）奇襲',
        description: '超長射程の下段スライディングで相手の足元をすくい、ダウンを奪う。',
      },
    ],
    burnoutOffense: ['画面端でのローリングアタック連射と人形電撃連携。'],
    burnoutDefense: ['ODバーチカルローリングやSA3で切り返す。'],
  },
  combos: [
    {
      id: 'blanka_c1',
      category: '基礎（小技始動・暴れ・確反）',
      name: '小技確認ローリングアタック',
      classicRecipe: '2弱P > 2弱P > 4タメ6弱P',
      modernRecipe: '2弱 > 2弱 > 4+SP',
      damageApprox: '約1,400',
      driveCost: 0,
      superArtCost: 0,
      difficulty: 1,
      purpose: '暴れからの基本。',
    },
  ],
  trainingDrills: [
    {
      id: 'blanka_drill_1',
      title: 'ローリングアタックの先端当て間合い確認',
      category: 'キャラ固有対策',
      importance: '必修',
      description: 'ガード復帰時に小技暴れを設定したダミーに対し、強ローリングを先端当てして反撃をもらわない練習。',
      practiceGoal: '先端当てで反撃を受けない距離感を掴む。',
      dummySettings: { guardSetting: 'すべてガード' },
    },
  ],
  matchups: [
    {
      opponentId: 'ryu',
      opponentName: 'リュウ',
      advantageLevel: '五分',
      coreStrategy: 'リュウの波動拳にODローリングアタックを合わせ、弾を消しながら突撃する。',
      keyThreats: ['強昇龍拳対空', '電刃練気波動拳'],
      punishList: [
        {
          opponentMove: '強 昇龍拳（ガード後）',
          frameAdvantage: '-23F',
          recommendedPunish: '立ち強Pパニカンフルコンボ',
        },
      ],
      practicalTips: ['不用意なローリングはリュウの昇龍拳で撃墜されるため、先端当てを徹底する。'],
    },
  ],
};
