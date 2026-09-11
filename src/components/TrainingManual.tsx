import React, { useState } from 'react';
import { 
  RotateCcw, 
  Layers, 
  HelpCircle, 
  ShieldAlert, 
  Target, 
  Gamepad2
} from 'lucide-react';

export const TrainingManual: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'slots' | 'reversal' | 'shortcuts' | 'research'>('slots');

  const sections = [
    { id: 'slots', label: '① 各スロットへのダミー録画・再生手順', icon: <Layers className="w-4 h-4" /> },
    { id: 'reversal', label: '② リバーサル設定（最速暴れ・無敵技）', icon: <RotateCcw className="w-4 h-4" /> },
    { id: 'research', label: '③ 苦手技の確反リサーチ手順', icon: <Target className="w-4 h-4" /> },
    { id: 'shortcuts', label: '④ 時短ショートカット＆画面設定', icon: <Gamepad2 className="w-4 h-4" /> },
  ] as const;

  return (
    <div className="space-y-6">
      {/* ヒーローヘッダー */}
      <div className="rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-purple-500/10 border border-amber-500/30 p-4 sm:p-6">
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-bold shadow-md">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg sm:text-2xl font-black text-white">
              ゲーム内トレーニングモード設定 完全操作マニュアル
            </h2>
            <p className="text-xs text-slate-400">
              ストリートファイター6のポーズメニューから、各スロットへの録画・再生・リバーサル設定を行う具体的な手順を徹底解説
            </p>
          </div>
        </div>
      </div>

      {/* セクションナビゲーション */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
        {sections.map((sec) => (
          <button
            key={sec.id}
            onClick={() => setActiveSection(sec.id)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeSection === sec.id
                ? 'bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/20 scale-[1.02]'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
            }`}
          >
            {sec.icon}
            <span>{sec.label}</span>
          </button>
        ))}
      </div>

      {/* セクション1: 各スロットへのダミー録画・再生手順 */}
      {activeSection === 'slots' && (
        <div className="space-y-6">
          <div className="rounded-2xl bg-[#121724] border border-slate-800 p-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                基本にして最重要
              </span>
              <h3 className="text-base font-bold text-white">
                各スロット（スロット1〜8）への行動録画とランダム再生の手順
              </h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              「対空練習で飛び込みを落とす」「ドライブインパクトを返す」「中足ラッシュを止める」など、実戦で起きる状況をダミーにランダムで繰り出させるための録画＆再生手順です。
            </p>

            {/* ステップバイステップ解説 */}
            <div className="space-y-3 pt-2">
              {/* Step 1 */}
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  1
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    ポーズメニューを開き、「レコード設定」タブへ移動
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    トレモ中にコントローラーの <span className="text-amber-400 font-bold font-mono">OPTIONSボタン（XboxはMenuボタン、PCはEscキー）</span> を押してポーズメニューを開きます。
                    上部のタブから <span className="text-amber-400 font-bold font-mono">R1ボタン（RBボタン）</span> を押して「<span className="text-white font-semibold">レコード設定</span>」タブに移動します。
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  2
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    「アクションレコード設定」を選び、登録先スロットを選択
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    メニュー内の「<span className="text-white font-semibold">アクションレコード設定</span>」を選択すると、スロット1〜スロット8が一覧表示されます。
                    録画したいスロット（例: <span className="text-amber-300 font-bold">スロット1</span>）を選んで決定ボタンを押します。
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  3
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    「ダミー操作でレコード」を選択して録画を開始
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    操作モード選択が出たら「<span className="text-amber-300 font-bold">ダミー操作でレコード</span>」を選択します。
                    ポーズが解除され、自分がダミーキャラを直接操作できる「<span className="text-emerald-400 font-semibold">レコード待機状態</span>」になります。
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  4
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    相手にさせたい行動を入力し、ポーズボタンで録画終了
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    ボタンを入力するか歩き出すと、画面上に「<span className="text-red-400 font-bold">● REC</span>」と表示され録画が始まります。
                    ダミーにさせたい行動（例: 前ジャンプ強攻撃、ドライブインパクト、前ダッシュ投げなど）を入力します。
                    行動が終わったら、<span className="text-amber-400 font-bold font-mono">もう一度OPTIONSボタン（ポーズボタン）を押す</span> と録画が終了し、スロットに保存されます。
                  </p>
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-amber-300/90 flex items-center gap-2 mt-1">
                    <span>💡 コツ:</span>
                    <span>行動の直前に少しだけ待機時間（0.5秒〜1秒程度）を入れて録画すると、再生時に自然な間合いの読み合いになります。</span>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  5
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    スロット2、スロット3にも別の行動を録画
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    同様の手順で、<span className="text-white font-semibold">スロット2には「地上で前歩き中足」</span>、<span className="text-white font-semibold">スロット3には「ドライブインパクト」</span> などを登録します。
                    複数スロットに異なる選択肢を入れることで、実戦と同じ「見てから判断する練習」が完成します。
                  </p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-amber-500/40 bg-amber-500/5">
                <div className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  6
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-amber-400">
                    【必須】「アクションリプレイ設定」で再生をONにして開始！
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    レコード設定タブの「<span className="text-white font-semibold">アクションリプレイ設定</span>」を開きます。
                    録画した各スロットのチェックボックスを <span className="text-emerald-400 font-bold">ON</span> にします。
                    「<span className="text-white font-semibold">リプレイ再生</span>」をONにするか、ポーズを解除してコントローラーの <span className="text-amber-400 font-bold font-mono">R3ボタン（右スティック押し込み）</span> を押すと、ダミーが登録した行動をランダムに再生し始めます！
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* セクション2: リバーサル設定 */}
      {activeSection === 'reversal' && (
        <div className="space-y-6">
          <div className="rounded-2xl bg-[#121724] border border-slate-800 p-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-orange-500/20 text-orange-400 text-xs font-bold border border-orange-500/30">
                防御・起き攻めマスター
              </span>
              <h3 className="text-base font-bold text-white">
                リバーサル設定（最速暴れ・無敵技・遅らせグラップ）の登録手順
              </h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              「ガードさせた後に相手が最速で4F小技を暴れてくるか」「ダウンを奪った後に相手が無敵技をぶっ放してくるか」をトレモに再現する設定です。どぐら氏も推奨する実戦直結の最重要メニューです。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {/* ガード復帰時リバーサル */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <h4 className="text-xs sm:text-sm font-bold text-amber-300 flex items-center gap-1.5">
                  <RotateCcw className="w-4 h-4 text-orange-400" />
                  ガード復帰時リバーサル
                </h4>
                <p className="text-xs text-slate-400">
                  自キャラの攻撃をダミーがガードした「硬直が解けた瞬間（1F目）」に自動で行動させます。
                </p>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300 space-y-1 font-mono">
                  <div>1. ポーズメニュー →「リバーサル設定」タブ</div>
                  <div>2.「ガード復帰時リバーサル」を選択</div>
                  <div>3.「スロット1」を選択 → プリセット技から「立ち弱P」または「しゃがみ弱P」を選択</div>
                  <div>4.「リバーサルを有効にする」をON</div>
                </div>
                <div className="text-[11px] text-emerald-400">
                  🎯 練習目的: 自分の連携が相手の最速暴れを潰せるか（フレームトラップの確認）
                </div>
              </div>

              {/* 起き上がりリバーサル */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
                <h4 className="text-xs sm:text-sm font-bold text-red-400 flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-red-400" />
                  起き上がり（ダウン復帰時）リバーサル
                </h4>
                <p className="text-xs text-slate-400">
                  ダミーがダウンから起き上がった瞬間に、自動で無敵技やジャンプ、遅らせグラップを出させます。
                </p>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300 space-y-1 font-mono">
                  <div>1. ポーズメニュー →「リバーサル設定」タブ</div>
                  <div>2.「ダウン復帰時リバーサル」を選択</div>
                  <div>3.「OD無敵技（例: OD昇龍拳）」や「通常投げ」を登録</div>
                  <div>4.「リバーサルを有効にする」をON</div>
                </div>
                <div className="text-[11px] text-emerald-400">
                  🎯 練習目的: 安全に重ねられる「詐欺飛び」の確認、およびシミー（遅らせグラップ狩り）の練習
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* セクション3: 苦手技の確反リサーチ手順 */}
      {activeSection === 'research' && (
        <div className="space-y-6">
          <div className="rounded-2xl bg-[#121724] border border-slate-800 p-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                五郎氏直伝
              </span>
              <h3 className="text-base font-bold text-white">
                実戦で負けた「苦手技」をトレモで即座に特定し、確反を見つける反省ルーティン
              </h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              ランクマで「相手のあの技にずっとハメられて負けた」「ガードしたのに反撃が分からなかった」という時、その技の隙を即座に自力で調べて解答を見つける手順です。
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  1
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    ダミーのキャラクターを「対戦相手のキャラ」に変更
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    ポーズメニューの「<span className="text-white font-semibold">基本設定</span>」→「<span className="text-amber-300 font-bold">キャラクター設定</span>」で、2P側（ダミー側）を苦戦した相手キャラクターに変更します。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  2
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    レコード設定でスロット1に「負けた苦手技」を吹き込む
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    「レコード設定」→「ダミー操作でレコード」を選び、相手が連発してきた厄介な技（例: エドモンド本田の頭突きや百貫、ベガのダブルニープレス、ブランカのローリングなど）を入力して保存します。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="w-6 h-6 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  3
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs sm:text-sm font-bold text-white">
                    フレームメーターを見ながら、ガード後に自キャラの技を試す
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    リプレイ再生をONにし、ダミーの技をガードします。
                    画面下の「フレームメーター」を確認し、相手が <span className="text-red-400 font-bold">-4F以上不利（赤マスが4個以上）</span> であれば、自キャラの最速技（立ち弱Pやしゃがみ弱P）で <span className="text-amber-400 font-bold">PUNISH COUNTER</span> が取れます！
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* セクション4: 時短ショートカット＆画面設定 */}
      {activeSection === 'shortcuts' && (
        <div className="space-y-6">
          <div className="rounded-2xl bg-[#121724] border border-slate-800 p-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-xs font-bold border border-purple-500/30">
                あくあ氏直伝時短テク
              </span>
              <h3 className="text-base font-bold text-white">
                プロも全員使っている必須ショートカット操作一覧
              </h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              ポーズメニューをいちいち開かずに、手元のボタン一発で位置リセットや左右反転、レコード再生を行う時短コマンドです。
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 text-[11px]">
                    <th className="py-2.5 px-3">機能・操作</th>
                    <th className="py-2.5 px-3">コントローラー操作（PS5 / Xbox）</th>
                    <th className="py-2.5 px-3">用途・メリット</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-2.5 px-3 font-bold text-white">中央で即座に位置リセット</td>
                    <td className="py-2.5 px-3 font-mono font-bold text-amber-300">タッチパッド（Viewボタン）</td>
                    <td className="py-2.5 px-3 text-slate-400">コンボ失敗時やダウン後に一瞬で初期位置に戻る</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-2.5 px-3 font-bold text-white">画面端で位置リセット</td>
                    <td className="py-2.5 px-3 font-mono font-bold text-amber-300">タッチパッド ＋ ← または →</td>
                    <td className="py-2.5 px-3 text-slate-400">画面端のインパクトコンボやセットプレイ練習</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-2.5 px-3 font-bold text-white">1P側と2P側の左右入れ替え</td>
                    <td className="py-2.5 px-3 font-mono font-bold text-amber-300">タッチパッド ＋ ↓</td>
                    <td className="py-2.5 px-3 text-slate-400">苦手な2P側のコマンド入力やコンボ練習</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-2.5 px-3 font-bold text-white">レコード再生の即時開始/停止</td>
                    <td className="py-2.5 px-3 font-mono font-bold text-amber-300">R3ボタン（右スティック押し込み）</td>
                    <td className="py-2.5 px-3 text-slate-400">ダミーの動きを自分の好きなタイミングで開始・停止</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
