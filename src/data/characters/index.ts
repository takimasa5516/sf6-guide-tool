import { Character } from '../../types';
import { ryu } from './ryu';
import { terry } from './terry';
import { luke } from './luke';
import { akuma } from './akuma';
import { ken } from './ken';
import { bison } from './bison';
import { ed } from './ed';
import { guile } from './guile';
import { chunli } from './chunli';
import { cammy } from './cammy';
import { juri } from './juri';
import { deejay } from './deejay';
import { jp } from './jp';
import { zangief } from './zangief';
import { marisa } from './marisa';
import { rashid } from './rashid';
import { aki } from './aki';
import { jamie } from './jamie';
import { kimberly } from './kimberly';
import { manon } from './manon';
import { blanka } from './blanka';
import { honda } from './honda';
import { dhalsim } from './dhalsim';
import { lily } from './lily';

// 優先キャラ（リュウ、テリー）を先頭に配置した全24キャラクター一覧
export const allCharacters: Character[] = [
  ryu,
  terry,
  luke,
  akuma,
  ken,
  bison,
  ed,
  guile,
  chunli,
  cammy,
  juri,
  deejay,
  jp,
  zangief,
  marisa,
  rashid,
  aki,
  jamie,
  kimberly,
  manon,
  blanka,
  honda,
  dhalsim,
  lily,
];

export const getCharacterById = (id: string): Character | undefined => {
  return allCharacters.find(c => c.id === id);
};
