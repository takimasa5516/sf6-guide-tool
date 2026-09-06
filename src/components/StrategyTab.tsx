import React from 'react';
import { Character } from '../types';
import { Compass, Key, ShieldAlert, Zap } from 'lucide-react';

interface StrategyTabProps {
  character: Character;
}

export const StrategyTab: React.FC<StrategyTabProps> = ({ character }) => {
  const { gameplan } = character;

  return (
    <div className="space-y-6">
      {/* 距離別ゲームプラン */}
      <div className="rounded-2xl bg-[#121724] border border-slate-800 p-4 sm:p-6">
        <h3 className="text-sm sm:text-base font-bold text-white mb-4 flex items-center gap-2">
          <Compass className="w-5 h-5 text-orange-400" />
          距離別の立ち回り・意識配分
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 遠距離 */}
          <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400">
                遠距離（画面端〜中外）
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {gameplan.farRange}
            </p>
          </div>

          {/* 中距離 */}
          <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-4 border-l-2 border-l-amber-500">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                中距離（差し合い・ラッシュ間合い）
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {gameplan.midRange}
            </p>
          </div>

          {/* 近距離 */}
          <div className="rounded-xl bg-slate-900/80 border border-slate-800 p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-red-400">
                近距離（密着・起き攻め）
              </h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {gameplan.closeRange}
            </p>
          </div>
        </div>
      </div>

      {/* 膠着（お互い手が出ない時）の打開アクション */}
      <div className="rounded-2xl bg-[#121724] border border-slate-800 p-4 sm:p-6">
        <h3 className="text-sm sm:text-base font-bold text-amber-400 mb-2 flex items-center gap-2">
          <Key className="w-5 h-5" />
          膠着状態（お見合い・固い相手）の打開策
        </h3>
        <p className="text-xs text-slate-400 mb-4">
          お互いにガードを固めたり、牽制が噛み合わず手詰まりになった時に通すべきアクションです。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {gameplan.breakStalemate.map((item, i) => (
            <div
              key={i}
              className="rounded-xl bg-slate-900/80 border border-slate-800 p-4 hover:border-amber-500/50 transition"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center justify-center font-mono">
                  {i + 1}
                </span>
                <h4 className="text-xs font-bold text-white">
                  {item.title}
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* バーンアウト（BO）時の攻防 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 相手BO時 */}
        <div className="rounded-2xl bg-[#121724] border border-slate-800 p-4 sm:p-5">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-4 h-4 text-emerald-400" />
            <h4 className="text-xs sm:text-sm font-bold text-emerald-400">
              相手バーンアウト（BO）時の詰め方
            </h4>
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            {gameplan.burnoutOffense.map((str, i) => (
              <li key={i} className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <span className="text-emerald-400 font-bold">⚡</span>
                <span className="leading-relaxed">{str}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 自身BO時 */}
        <div className="rounded-2xl bg-[#121724] border border-slate-800 p-4 sm:p-5">
          <div className="flex items-center gap-2 mb-3">
            <ShieldAlert className="w-4 h-4 text-red-400" />
            <h4 className="text-xs sm:text-sm font-bold text-red-400">
              自身バーンアウト（BO）時の凌ぎ方
            </h4>
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            {gameplan.burnoutDefense.map((str, i) => (
              <li key={i} className="flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                <span className="text-red-400 font-bold">🛡</span>
                <span className="leading-relaxed">{str}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
