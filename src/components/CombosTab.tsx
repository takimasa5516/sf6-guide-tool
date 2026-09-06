import React, { useState } from 'react';
import { Character, Combo, ControlType } from '../types';
import { Copy, Check, Filter, Gauge } from 'lucide-react';
import { formatCommandToArrows } from '../utils/commandFormatter';

interface CombosTabProps {
  character: Character;
  controlType: ControlType;
  searchQuery: string;
}

export const CombosTab: React.FC<CombosTabProps> = ({ character, controlType, searchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // カテゴリ一覧
  const categories = [
    { id: 'all', label: 'すべて表示' },
    { id: '基礎（小技始動・暴れ・確反）', label: '基礎・小技' },
    { id: '中攻撃・差し返し確認', label: '中攻撃確認' },
    { id: '生ドライブラッシュ始動', label: '生ラッシュ' },
    { id: 'パニカン始動（無敵技ガード後等）', label: 'パニカンお仕置き' },
    { id: '画面端インパクト・スタン最大', label: '画面端・スタン' },
    { id: 'SA3 / CA リーサル', label: 'SA3リーサル' },
  ];

  // フィルタリング
  const filteredCombos = character.combos.filter((combo) => {
    const matchesCategory = selectedCategory === 'all' || combo.category === selectedCategory;
    const matchesSearch =
      !searchQuery ||
      combo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      combo.classicRecipe.toLowerCase().includes(searchQuery.toLowerCase()) ||
      combo.modernRecipe.toLowerCase().includes(searchQuery.toLowerCase()) ||
      combo.purpose.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopyRecipe = (combo: Combo) => {
    const rawRecipe = controlType === 'classic' ? combo.classicRecipe : combo.modernRecipe;
    const recipe = formatCommandToArrows(rawRecipe);
    navigator.clipboard.writeText(recipe);
    setCopiedId(combo.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* カテゴリセレクタ */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
        <Filter className="w-3.5 h-3.5 text-slate-500 shrink-0 ml-1 mr-0.5" />
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCategory === cat.id
                ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* コンボカード一覧 */}
      <div className="grid grid-cols-1 gap-3.5">
        {filteredCombos.length === 0 ? (
          <div className="p-8 text-center text-slate-500 bg-slate-900/40 rounded-2xl border border-slate-800">
            該当するコンボが見つかりませんでした。
          </div>
        ) : (
          filteredCombos.map((combo) => {
            const rawRecipe = controlType === 'classic' ? combo.classicRecipe : combo.modernRecipe;
            const arrowRecipe = formatCommandToArrows(rawRecipe);
            return (
              <div
                key={combo.id}
                className="rounded-2xl bg-[#121724] border border-slate-800 p-4 sm:p-5 hover:border-slate-700 transition shadow-md"
              >
                {/* ヘッダー情報 */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                      {combo.category}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-white">
                      {combo.name}
                    </h4>
                  </div>

                  {/* ステータスバッジ群 */}
                  <div className="flex items-center gap-2 text-xs">
                    {/* ドライブゲージ消費 */}
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 font-bold">
                      <Gauge className="w-3 h-3" />
                      {combo.driveCost === 0 ? 'ゲージ0' : `Dゲージ ${combo.driveCost}`}
                    </span>

                    {/* SA消費 */}
                    {combo.superArtCost > 0 && (
                      <span className="px-2 py-0.5 rounded-md bg-purple-950/60 text-purple-400 border border-purple-800/40 font-bold">
                        SA{combo.superArtCost}
                      </span>
                    )}

                    {/* ダメージ */}
                    <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/20 font-mono font-bold">
                      {combo.damageApprox}
                    </span>
                  </div>
                </div>

                {/* レシピ表示ボックス（矢印変換適用） */}
                <div className="relative rounded-xl bg-slate-950/90 border border-slate-800/80 p-3 sm:p-3.5 mb-3">
                  <div className="text-xs text-slate-400 mb-1 flex items-center justify-between">
                    <span className="font-semibold text-[11px] text-amber-400">
                      {controlType === 'classic' ? 'クラシック入力（矢印表記）' : 'モダン入力（矢印表記）'}
                    </span>
                    <button
                      onClick={() => handleCopyRecipe(combo)}
                      className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition px-2 py-0.5 rounded bg-slate-800/60"
                    >
                      {copiedId === combo.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400 font-bold">コピー完了</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>レシピコピー</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="text-sm sm:text-base font-bold text-amber-300 tracking-wide leading-relaxed select-all">
                    {arrowRecipe}
                  </div>
                </div>

                {/* 解説 & 注意点 */}
                <div className="space-y-1 text-xs text-slate-300">
                  <p className="leading-relaxed">
                    <span className="font-bold text-slate-400">用途・狙い: </span>
                    {combo.purpose}
                  </p>
                  {combo.note && (
                    <p className="text-slate-400 leading-relaxed">
                      <span className="font-bold text-orange-400/90">💡 コツ・備考: </span>
                      {combo.note}
                    </p>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
