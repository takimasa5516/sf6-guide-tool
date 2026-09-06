import React, { useState } from 'react';
import { Character } from '../types';
import { ShieldAlert, Crosshair, Sparkles, Swords } from 'lucide-react';
import { formatCommandToArrows } from '../utils/commandFormatter';

interface MatchupTabProps {
  character: Character;
}

export const MatchupTab: React.FC<MatchupTabProps> = ({ character }) => {
  const { matchups } = character;
  const [selectedOpponentId, setSelectedOpponentId] = useState<string>(
    matchups.length > 0 ? matchups[0].opponentId : ''
  );

  if (!matchups || matchups.length === 0) {
    return (
      <div className="p-8 text-center text-slate-400 bg-[#121724] rounded-2xl border border-slate-800">
        <Swords className="w-10 h-10 text-slate-600 mx-auto mb-2" />
        <p className="font-bold text-white">キャラ対策データ準備中</p>
        <p className="text-xs text-slate-400 mt-1">
          {character.name}の対戦相手別対策データは今後順次拡充予定です。
        </p>
      </div>
    );
  }

  // 選択中の対戦カード
  const currentMatchup =
    matchups.find((m) => m.opponentId === selectedOpponentId) || matchups[0];

  const getAdvantageBadge = (level: string) => {
    switch (level) {
      case '有利':
      case '微有利':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case '五分':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case '微不利':
      case '不利':
        return 'bg-red-500/20 text-red-300 border-red-500/30';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* 相手キャラクター選択ボタン一覧 */}
      <div className="rounded-2xl bg-[#121724] border border-slate-800 p-4">
        <div className="text-xs text-slate-400 font-bold mb-2.5 flex items-center gap-1.5">
          <Swords className="w-4 h-4 text-orange-400" />
          対策したい相手キャラクターを選択:
        </div>
        <div className="flex flex-wrap gap-2">
          {matchups.map((m) => {
            const isSelected = m.opponentId === currentMatchup.opponentId;
            return (
              <button
                key={m.opponentId}
                onClick={() => setSelectedOpponentId(m.opponentId)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
                  isSelected
                    ? 'bg-orange-500 text-white border-orange-400 shadow-md shadow-orange-500/20 scale-[1.02]'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                <span>vs {m.opponentName}</span>
                <span
                  className={`text-[10px] px-1 rounded font-normal ${
                    isSelected ? 'bg-black/30 text-white' : getAdvantageBadge(m.advantageLevel)
                  }`}
                >
                  {m.advantageLevel}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 選択した相手の詳細対策カード */}
      <div className="space-y-4 sm:space-y-6">
        {/* 基本戦略ヘッダーカード */}
        <div className="rounded-2xl bg-[#141b2b] border border-slate-800 p-4 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <h3 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
              <span className="text-orange-400">{character.name}</span>
              <span className="text-slate-500 text-sm">vs</span>
              <span className="text-amber-300">{currentMatchup.opponentName}</span>
            </h3>
            <span
              className={`text-xs px-2.5 py-1 rounded-lg border font-bold ${getAdvantageBadge(
                currentMatchup.advantageLevel
              )}`}
            >
              相性目安: {currentMatchup.advantageLevel}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/80">
            {currentMatchup.coreStrategy}
          </p>
        </div>

        {/* 警戒すべき技 & 実戦アドバイス */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 要警戒の技・連携 */}
          <div className="rounded-2xl bg-[#121724] border border-slate-800 p-4 sm:p-5">
            <h4 className="text-xs sm:text-sm font-bold text-red-400 mb-3 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4" />
              相手の警戒すべき主力技・戦術
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {currentMatchup.keyThreats.map((threat, i) => (
                <li key={i} className="flex items-start gap-2 bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                  <span className="text-red-400 font-bold shrink-0">⚠️</span>
                  <span className="leading-relaxed">{threat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 実践アドバイス */}
          <div className="rounded-2xl bg-[#121724] border border-slate-800 p-4 sm:p-5">
            <h4 className="text-xs sm:text-sm font-bold text-emerald-400 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              {character.name}側の立ち回り攻略ポイント
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              {currentMatchup.practicalTips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                  <span className="text-emerald-400 font-bold shrink-0">💡</span>
                  <span className="leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 確定反撃（確反）ポイント表 */}
        <div className="rounded-2xl bg-[#121724] border border-slate-800 p-4 sm:p-5">
          <h4 className="text-xs sm:text-sm font-bold text-amber-300 mb-3 flex items-center gap-2">
            <Crosshair className="w-4 h-4 text-orange-400" />
            見逃せない確定反撃（お仕置きポイント）
          </h4>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[11px]">
                  <th className="py-2.5 px-3">相手の技名・状況</th>
                  <th className="py-2.5 px-2 text-center">ガード硬直差</th>
                  <th className="py-2.5 px-3">推奨される反撃コンボ</th>
                  <th className="py-2.5 px-3">注意・コツ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {currentMatchup.punishList.map((punish, i) => (
                  <tr key={i} className="hover:bg-slate-800/30 transition">
                    <td className="py-2.5 px-3 font-bold text-white whitespace-nowrap">
                      {punish.opponentMove}
                    </td>
                    <td className="py-2.5 px-2 text-center font-mono font-bold text-red-400 whitespace-nowrap">
                      {punish.frameAdvantage}
                    </td>
                    <td className="py-2.5 px-3 font-semibold text-amber-300">
                      {formatCommandToArrows(punish.recommendedPunish)}
                    </td>
                    <td className="py-2.5 px-3 text-slate-400 text-[11px]">
                      {punish.note || '確実に反撃を入れましょう'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
