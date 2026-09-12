import React, { useState, useEffect } from 'react';
import { Character, PunishPoint } from '../types';
import { getMatchupAdvice } from '../utils/matchupHelper';
import { 
  Zap, 
  X, 
  ShieldAlert, 
  Target, 
  AlertTriangle, 
  Flame, 
  Maximize2, 
  Minimize2,
  StickyNote
} from 'lucide-react';

interface MatchReadyModalProps {
  isOpen: boolean;
  onClose: () => void;
  playerCharacter: Character;
  allCharacters: Character[];
  initialOpponentId?: string;
}

export const MatchReadyModal: React.FC<MatchReadyModalProps> = ({
  isOpen,
  onClose,
  playerCharacter,
  allCharacters,
  initialOpponentId = 'terry',
}) => {
  const [selectedOpponentId, setSelectedOpponentId] = useState<string>(initialOpponentId);
  const [isLargeText, setIsLargeText] = useState<boolean>(false);
  const [personalNotes, setPersonalNotes] = useState<string>('');

  // 相手キャラの取得（自分自身は除外）
  const opponentCharacters = allCharacters.filter(c => c.id !== playerCharacter.id);
  const currentOpponent = allCharacters.find(c => c.id === selectedOpponentId) || opponentCharacters[0];

  // 対戦相手に対する課題ノートの読み込み
  useEffect(() => {
    try {
      const savedNotes = localStorage.getItem(`sf6_notes_${playerCharacter.id}`);
      if (savedNotes) {
        setPersonalNotes(savedNotes);
      } else {
        setPersonalNotes('');
      }
    } catch {
      setPersonalNotes('');
    }
  }, [playerCharacter.id, selectedOpponentId]);

  if (!isOpen) return null;

  // 対策データの取得
  const advice = getMatchupAdvice(playerCharacter, currentOpponent);

  // 相性バッジのカラー
  const getAdvantageBadge = (level: string) => {
    switch (level) {
      case '有利':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40';
      case '微有利':
        return 'bg-teal-500/20 text-teal-300 border-teal-500/40';
      case '五分':
        return 'bg-slate-700/40 text-slate-300 border-slate-600/40';
      case '微不利':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/40';
      case '不利':
        return 'bg-red-500/20 text-red-400 border-red-500/40';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-4xl bg-[#0c101a] border border-orange-500/40 rounded-2xl shadow-2xl flex flex-col max-h-[96vh] overflow-hidden">
        {/* モーダルヘッダー */}
        <div className="p-3.5 sm:p-4 bg-gradient-to-r from-orange-600/20 via-amber-600/10 to-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-slate-950 font-black shadow-md shadow-orange-500/30">
              <Zap className="w-5 h-5 fill-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black text-white flex items-center gap-1.5">
                  <span>対戦直前クイック・チートシート</span>
                  <span className="text-[10px] px-2 py-0.2 rounded-full bg-orange-500 text-slate-950 font-black">
                    Match Ready
                  </span>
                </h2>
              </div>
              <p className="text-[11px] text-slate-400">
                マッチング中〜VSロード中の30秒で頭に叩き込む！自キャラ: <span className="text-orange-400 font-bold">{playerCharacter.name}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsLargeText(!isLargeText)}
              className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white flex items-center gap-1"
              title="文字サイズ切り替え"
            >
              {isLargeText ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isLargeText ? '標準文字' : 'デカ文字'}</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 相手キャラ選択セレクター（全31キャラの高速セレクター） */}
        <div className="bg-slate-950/90 px-3 py-2 border-b border-slate-800/80">
          <div className="text-[10px] text-slate-400 font-bold mb-1.5 flex items-center justify-between">
            <span>相手キャラクターを選択（VS画面でタップ）:</span>
            <span className="text-orange-400 font-mono">VS {currentOpponent.name}</span>
          </div>
          <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
            {opponentCharacters.map((char) => {
              const isSelected = char.id === selectedOpponentId;
              return (
                <button
                  key={char.id}
                  onClick={() => setSelectedOpponentId(char.id)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1 shrink-0 ${
                    isSelected
                      ? 'bg-orange-500 text-slate-950 font-black shadow-md shadow-orange-500/30 scale-105'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <span className="text-[11px] font-bold">{char.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* チートシート本体（スクロールエリア） */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {/* 対戦サマリーバー */}
          <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">相性目安:</span>
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${getAdvantageBadge(advice.advantageLevel)}`}>
                {advice.advantageLevel}
              </span>
              <span className="text-xs text-slate-400">相手タイプ:</span>
              <span className="text-xs font-semibold text-slate-200">
                {currentOpponent.archetype}
              </span>
            </div>
            <div className="text-xs text-amber-400 font-medium">
              ⚡ 対戦中も画面の横に置いてチラ見推奨
            </div>
          </div>

          {/* 4大チートシートカード */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {/* カード1: 絶対警戒技 TOP 3 */}
            <div className="rounded-xl bg-[#131929] border border-red-500/30 p-3.5 sm:p-4 space-y-2">
              <div className="flex items-center gap-2 text-red-400 font-bold border-b border-red-500/20 pb-2">
                <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
                <h3 className={`font-black ${isLargeText ? 'text-base sm:text-lg' : 'text-sm'}`}>
                  ① 【絶対警戒技 TOP 3】
                </h3>
              </div>
              <ul className="space-y-2 pt-1">
                {advice.keyThreats.map((threat: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 text-xs font-black flex items-center justify-center shrink-0 mt-0.5 border border-red-500/30">
                      {idx + 1}
                    </span>
                    <span className={`text-slate-200 font-bold leading-snug ${isLargeText ? 'text-sm sm:text-base' : 'text-xs'}`}>
                      {threat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* カード2: これだけは確定反撃（確反ボタン） */}
            <div className="rounded-xl bg-[#131929] border border-amber-500/30 p-3.5 sm:p-4 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold border-b border-amber-500/20 pb-2">
                <Target className="w-4 h-4 text-amber-400 shrink-0" />
                <h3 className={`font-black ${isLargeText ? 'text-base sm:text-lg' : 'text-sm'}`}>
                  ② 【これだけは絶対反撃（確反）】
                </h3>
              </div>
              <div className="space-y-2 pt-1">
                {advice.punishList.slice(0, 3).map((punish: PunishPoint, idx: number) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white">{punish.opponentMove}</span>
                      <span className="text-red-400 font-mono font-bold bg-red-500/10 px-1.5 py-0.2 rounded border border-red-500/20">
                        {punish.frameAdvantage}
                      </span>
                    </div>
                    <div className={`text-emerald-400 font-bold ${isLargeText ? 'text-xs sm:text-sm' : 'text-[11px]'}`}>
                      👉 {punish.recommendedPunish}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* カード3: 起き攻め・リバーサル・暴れ注意点 */}
            <div className="rounded-xl bg-[#131929] border border-blue-500/30 p-3.5 sm:p-4 space-y-2">
              <div className="flex items-center gap-2 text-blue-400 font-bold border-b border-blue-500/20 pb-2">
                <AlertTriangle className="w-4 h-4 text-blue-400 shrink-0" />
                <h3 className={`font-black ${isLargeText ? 'text-base sm:text-lg' : 'text-sm'}`}>
                  ③ 【起き攻め＆防御の注意点】
                </h3>
              </div>
              <div className="space-y-2 pt-1 text-slate-300 text-xs leading-relaxed">
                <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                  <div className="font-bold text-blue-300 mb-1">🛡️ 相手の無敵技・暴れ傾向:</div>
                  <p className={`${isLargeText ? 'text-xs sm:text-sm' : 'text-[11px]'} text-slate-300 font-medium`}>
                    {advice.practicalTips[0] || '起き上がりのOD無敵技やSAに注意し、安全飛び（詐欺飛び）やシミーを意識する。'}
                  </p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                  <div className="font-bold text-teal-300 mb-1">⚡ 密着時の攻防:</div>
                  <p className={`${isLargeText ? 'text-xs sm:text-sm' : 'text-[11px]'} text-slate-300 font-medium`}>
                    {advice.practicalTips[1] || '相手のコマ投げや通常投げを警戒し、遅らせグラップと垂直ジャンプを使い分ける。'}
                  </p>
                </div>
              </div>
            </div>

            {/* カード4: このマッチアップの鉄則（1行要約） */}
            <div className="rounded-xl bg-[#131929] border border-orange-500/30 p-3.5 sm:p-4 space-y-2">
              <div className="flex items-center gap-2 text-orange-400 font-bold border-b border-orange-500/20 pb-2">
                <Flame className="w-4 h-4 text-orange-400 shrink-0" />
                <h3 className={`font-black ${isLargeText ? 'text-base sm:text-lg' : 'text-sm'}`}>
                  ④ 【立ち回りの鉄則】
                </h3>
              </div>
              <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
                <p className={`font-bold text-orange-200 leading-relaxed ${isLargeText ? 'text-sm sm:text-base' : 'text-xs'}`}>
                  {advice.coreStrategy}
                </p>
              </div>
              <div className="text-[11px] text-slate-400 pt-1">
                💡 <strong>ポイント:</strong> {advice.practicalTips[2] || '無理に飛び込まず、地上戦で相手のミスを誘ってパニカンを取る。'}
              </div>
            </div>
          </div>

          {/* 自分の課題ノートメモがあれば表示 */}
          {personalNotes && (
            <div className="p-3.5 rounded-xl bg-slate-950 border border-purple-500/30 space-y-1.5">
              <div className="flex items-center gap-1.5 text-purple-400 text-xs font-bold">
                <StickyNote className="w-3.5 h-3.5" />
                <span>あなたの登録メモ（課題ノート）:</span>
              </div>
              <p className="text-xs text-slate-300 whitespace-pre-wrap font-mono bg-purple-950/20 p-2 rounded border border-purple-500/20">
                {personalNotes}
              </p>
            </div>
          )}
        </div>

        {/* フッター */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs">
          <span className="text-slate-500 text-[11px]">
            ※左右のキャラを切り替えて次の対戦相手も即座にチェック可能
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-slate-950 font-black text-xs transition"
          >
            対戦へ戻る
          </button>
        </div>
      </div>
    </div>
  );
};
