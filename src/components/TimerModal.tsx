import React, { useState, useEffect } from 'react';
import { X, Play, Pause, RotateCcw, Bell } from 'lucide-react';

interface TimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TimerModal: React.FC<TimerModalProps> = ({ isOpen, onClose }) => {
  const [secondsLeft, setSecondsLeft] = useState<number>(300); // デフォルト5分
  const [isActive, setIsActive] = useState<boolean>(false);
  const [initialSeconds, setInitialSeconds] = useState<number>(300);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isActive && secondsLeft > 0) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0 && isActive) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, secondsLeft]);

  if (!isOpen) return null;

  const setTimerPreset = (secs: number) => {
    setIsActive(false);
    setInitialSeconds(secs);
    setSecondsLeft(secs);
  };

  const handleReset = () => {
    setIsActive(false);
    setSecondsLeft(initialSeconds);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-sm rounded-2xl bg-[#141a29] border border-slate-700 p-5 sm:p-6 shadow-2xl text-center">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800/60 transition"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center justify-center gap-2 mb-3">
          <Bell className="w-4 h-4 text-amber-400" />
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">
            トレモ集中タイマー
          </h3>
        </div>

        {/* タイム表示 */}
        <div className="my-6">
          <span
            className={`text-5xl sm:text-6xl font-black font-['Chakra_Petch'] tracking-widest ${
              secondsLeft <= 30 && secondsLeft > 0
                ? 'text-red-500 animate-pulse'
                : secondsLeft === 0
                ? 'text-emerald-400'
                : 'text-amber-400'
            }`}
          >
            {formatTime(secondsLeft)}
          </span>
          {secondsLeft === 0 && (
            <div className="text-xs font-bold text-emerald-400 mt-2">
              🎉 タイムアップ！お疲れ様でした！
            </div>
          )}
        </div>

        {/* プリセット選択ボタン */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          {[
            { label: '3分', secs: 180 },
            { label: '5分', secs: 300 },
            { label: '10分', secs: 600 },
            { label: '15分', secs: 900 },
          ].map((preset) => (
            <button
              key={preset.secs}
              onClick={() => setTimerPreset(preset.secs)}
              className={`py-1.5 rounded-lg text-xs font-bold transition border ${
                initialSeconds === preset.secs
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>

        {/* 操作ボタン */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => setIsActive(!isActive)}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm text-white shadow-lg transition ${
              isActive
                ? 'bg-amber-600 hover:bg-amber-700 shadow-amber-600/20'
                : 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/20'
            }`}
          >
            {isActive ? (
              <>
                <Pause className="w-4 h-4" />
                <span>一時停止</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                <span>スタート</span>
              </>
            )}
          </button>
          <button
            onClick={handleReset}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition border border-slate-700"
            title="リセット"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
