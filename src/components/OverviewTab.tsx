import React from 'react';
import { Character, ControlType } from '../types';
import { Zap, AlertTriangle, CheckCircle2, Crosshair, Award } from 'lucide-react';
import { formatCommandToArrows } from '../utils/commandFormatter';

interface OverviewTabProps {
  character: Character;
  controlType: ControlType;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({ character, controlType }) => {
  const statLabels: { key: keyof Character['stats']; label: string }[] = [
    { key: 'power', label: '火力・爆発力' },
    { key: 'range', label: '牽制・リーチ' },
    { key: 'mobility', label: '機動力・歩き' },
    { key: 'defense', label: '防御・無敵切り返し' },
    { key: 'antiAir', label: '対空の安定度' },
    { key: 'easeOfUse', label: '操作の扱いやすさ' },
  ];

  return (
    <div className="space-y-6">
      {/* ヒーローカード */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-[#141a29] to-[#0c0f17] border border-slate-800 p-4 sm:p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2 py-0.5 text-xs font-semibold rounded-md bg-orange-500/10 text-orange-400 border border-orange-500/20">
                {character.archetype}
              </span>
              <span className="text-xs text-slate-400">難易度: {character.difficulty}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white flex items-center gap-3">
              <span>{character.name}</span>
              <span className="text-base font-normal text-slate-400 font-['Chakra_Petch']">
                {character.englishName}
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-amber-400/90 font-medium italic mt-0.5">
              ― {character.epithet} ―
            </p>
            <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              {character.summary}
            </p>
          </div>

          {/* モダン適性評価バッジ */}
          <div className="shrink-0 p-3 sm:p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center gap-3 sm:flex-col sm:text-center min-w-[140px]">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-2xl font-black text-white shadow-lg shadow-orange-500/30 font-['Chakra_Petch']">
              {character.modernEvaluation.rating}
            </div>
            <div>
              <div className="text-[11px] text-slate-400 font-semibold">モダン適性</div>
              <div className="text-xs font-bold text-amber-300">
                {character.modernEvaluation.rating === 'S'
                  ? '超推奨 (大会級)'
                  : character.modernEvaluation.rating === 'A'
                  ? '強力・勝ちやすい'
                  : 'クラシック推奨'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ステータス & 強み・弱みグリッド */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* パラメータゲージ */}
        <div className="rounded-2xl bg-[#121724] border border-slate-800 p-4 sm:p-5">
          <h3 className="text-sm font-bold text-slate-200 mb-4 flex items-center gap-2">
            <Crosshair className="w-4 h-4 text-orange-400" />
            キャラクター性能パラメータ
          </h3>
          <div className="space-y-3">
            {statLabels.map(({ key, label }) => {
              const value = character.stats[key];
              return (
                <div key={key}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">{label}</span>
                    <span className="font-bold text-orange-400 font-['Chakra_Petch']">{value} / 5</span>
                  </div>
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full transition-all duration-500"
                      style={{ width: `${(value / 5) * 100}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 強みと弱み */}
        <div className="rounded-2xl bg-[#121724] border border-slate-800 p-4 sm:p-5 flex flex-col justify-between space-y-4">
          <div>
            <h3 className="text-sm font-bold text-emerald-400 mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              主な強み・武器
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {character.strengths.map((str, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-400 shrink-0 font-bold">✔</span>
                  <span>{str}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-3 border-t border-slate-800">
            <h3 className="text-sm font-bold text-red-400 mb-2 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" />
              弱点・注意すべき点
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {character.weaknesses.map((weak, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-red-400 shrink-0 font-bold">▲</span>
                  <span>{weak}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* モダン操作の評価詳細 */}
      <div className="rounded-2xl bg-[#121724] border border-slate-800 p-4 sm:p-5">
        <h3 className="text-sm font-bold text-amber-400 mb-2 flex items-center gap-2">
          <Award className="w-4 h-4" />
          モダン操作の所見・メリット & デメリット
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
          {character.modernEvaluation.comment}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-[11px] font-bold text-emerald-400 block mb-1.5">モダンの恩恵</span>
            <ul className="space-y-1 text-xs text-slate-300">
              {character.modernEvaluation.pros.map((p, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-emerald-400 text-[10px]">●</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-[11px] font-bold text-red-400 block mb-1.5">クラシックとの差異・制約</span>
            <ul className="space-y-1 text-xs text-slate-300">
              {character.modernEvaluation.cons.map((c, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-red-400 text-[10px]">●</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-[11px] font-bold text-amber-400 block mb-1.5">失われる主要通常技</span>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {character.modernEvaluation.lostImportantMoves.map((m, i) => (
                <span key={i} className="px-2 py-0.5 text-xs rounded bg-red-950/60 text-red-300 border border-red-800/40">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 主力技 & フレームデータ表 */}
      <div className="rounded-2xl bg-[#121724] border border-slate-800 p-4 sm:p-5">
        <h3 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-2">
          <Zap className="w-4 h-4 text-orange-400" />
          最重要・主軸技ピックアップ（矢印表記＆実戦フレーム）
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase tracking-wider text-[11px]">
                <th className="py-2.5 px-3">技名</th>
                <th className="py-2.5 px-3">コマンド ({controlType === 'classic' ? 'クラシック' : 'モダン'})</th>
                <th className="py-2.5 px-2 text-center">発生</th>
                <th className="py-2.5 px-2 text-center">ガード硬直</th>
                <th className="py-2.5 px-2 text-center">ヒット時</th>
                <th className="py-2.5 px-3">用途・実戦ポイント</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {character.keyMoves.map((move, i) => {
                const rawCmd = controlType === 'classic' ? move.commandC : (move.commandM || move.commandC);
                const arrowCmd = formatCommandToArrows(rawCmd);
                return (
                  <tr key={i} className="hover:bg-slate-800/30 transition">
                    <td className="py-2.5 px-3 font-bold text-white whitespace-nowrap">
                      {move.name}
                    </td>
                    <td className="py-2.5 px-3 font-bold text-amber-300 whitespace-nowrap">
                      {arrowCmd}
                    </td>
                    <td className="py-2.5 px-2 text-center font-mono text-slate-200">
                      {move.frame?.startup || '-'}
                    </td>
                    <td className="py-2.5 px-2 text-center font-mono">
                      <span
                        className={`px-1.5 py-0.5 rounded text-[11px] font-bold ${
                          move.frame?.onBlock.startsWith('+')
                            ? 'bg-emerald-500/20 text-emerald-300'
                            : move.frame?.onBlock.startsWith('-') && parseInt(move.frame?.onBlock) <= -4
                            ? 'bg-red-500/20 text-red-300'
                            : 'bg-slate-700/40 text-slate-300'
                        }`}
                      >
                        {move.frame?.onBlock || '-'}
                      </span>
                    </td>
                    <td className="py-2.5 px-2 text-center font-mono text-slate-200">
                      {move.frame?.onHit || '-'}
                    </td>
                    <td className="py-2.5 px-3 text-slate-300 leading-snug">
                      {move.usage}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
