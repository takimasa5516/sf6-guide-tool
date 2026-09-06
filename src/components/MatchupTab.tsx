import React, { useState, useMemo } from 'react';
import { Character } from '../types';
import { allCharacters } from '../data/characters';
import { ShieldAlert, Crosshair, Sparkles, Swords, Search } from 'lucide-react';
import { formatCommandToArrows } from '../utils/commandFormatter';
import { getMatchupAdviceForPair } from '../utils/matchupHelper';

interface MatchupTabProps {
  character: Character;
}

export const MatchupTab: React.FC<MatchupTabProps> = ({ character }) => {
  // 自分以外の全30キャラクターを対戦相手候補として取得
  const opponentCandidates = useMemo(() => {
    return allCharacters.filter((c) => c.id !== character.id);
  }, [character.id]);

  const [selectedOpponentId, setSelectedOpponentId] = useState<string>(() => {
    return opponentCandidates[0]?.id || '';
  });

  const [opponentSearch, setOpponentSearch] = useState<string>('');

  // 検索フィルター適用
  const filteredOpponents = useMemo(() => {
    if (!opponentSearch.trim()) return opponentCandidates;
    const q = opponentSearch.toLowerCase();
    return opponentCandidates.filter(
      (c) => c.name.toLowerCase().includes(q) || c.englishName.toLowerCase().includes(q)
    );
  }, [opponentCandidates, opponentSearch]);

  const selectedOpponent = useMemo(() => {
    return (
      opponentCandidates.find((c) => c.id === selectedOpponentId) || opponentCandidates[0]
    );
  }, [opponentCandidates, selectedOpponentId]);

  // マッチアップ対策データを動的取得
  const currentMatchup = useMemo(() => {
    if (!selectedOpponent) return null;
    return getMatchupAdviceForPair(character, selectedOpponent);
  }, [character, selectedOpponent]);

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

  if (!currentMatchup || !selectedOpponent) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* 相手キャラクター選択エリア（全30キャラクター完全網羅） */}
      <div className="rounded-2xl bg-[#121724] border border-slate-800 p-4 sm:p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3.5">
          <div className="text-xs text-slate-400 font-bold flex items-center gap-1.5">
            <Swords className="w-4 h-4 text-orange-400" />
            <span>対策したい対戦相手を選択（全30キャラ対応）:</span>
          </div>

          {/* 相手検索ミニバー */}
          <div className="relative w-full sm:w-60">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={opponentSearch}
              onChange={(e) => setOpponentSearch(e.target.value)}
              placeholder="相手キャラ名で検索..."
              className="w-full pl-8 pr-3 py-1 text-xs bg-slate-900 border border-slate-800 rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-orange-500"
            />
          </div>
        </div>

        {/* キャラクターボタン一覧 */}
        <div className="flex flex-wrap gap-2 max-h-48 sm:max-h-56 overflow-y-auto no-scrollbar p-1">
          {filteredOpponents.map((opp) => {
            const isSelected = opp.id === selectedOpponent.id;
            return (
              <button
                key={opp.id}
                onClick={() => setSelectedOpponentId(opp.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all shrink-0 select-none ${
                  isSelected
                    ? 'bg-orange-500 text-white border-orange-400 shadow-md shadow-orange-500/20 scale-[1.02]'
                    : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                {/* ミニアイコン */}
                <div
                  className={`w-5 h-5 rounded-md bg-gradient-to-br ${opp.themeColor} flex items-center justify-center font-black text-white text-[9px] tracking-tighter`}
                >
                  {opp.avatarIcon.substring(0, 2)}
                </div>
                <span>vs {opp.name}</span>
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
              相手（{currentMatchup.opponentName}）の警戒すべき主力技・戦術
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
