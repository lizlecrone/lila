import { Player, Tournament, Simul, Clock, Status, Source } from 'game';

export type MaybeVNode = VNode | null | undefined;
export type MaybeVNodes = MaybeVNode[]

export { Key, Piece } from 'chessground/types';
import { VNode } from 'snabbdom/vnode'

// similar, but not identical, to game/GameData
export interface AnalyseData {
  game: Game;
  player: Player;
  opponent: Player;
  spectator: boolean;
  tournament?: Tournament;
  simul?: Simul;
  takebackable: boolean;
  clock?: Clock;
  analysis?: Analysis;
  userAnalysis: boolean;
  forecast?: any;
  treeParts: Tree.Node[];
}

// similar, but not identical, to game/Game
export interface Game {
  id: string;
  status: Status;
  player: Color;
  turns: number;
  startedAtTurn: number;
  source: Source;
  speed: Speed;
  variant: Variant;
  winner?: Color;
  moveCentis?: number[];
  initialFen?: string;
  importedBy?: string;
  division?: Division;
}

export interface Division {
  middle?: number;
  end?: number
}

export interface Analysis {
  white: AnalysisSide;
  black: AnalysisSide;
}

export interface AnalysisSide {
  acpl: number;
  inaccuracy: number;
  mistake: number;
  blunder: number;
}

export interface AnalyseOpts {
  element: HTMLElement;
  sideElement: HTMLElement;
  data: AnalyseData;
  initialPly?: number | string;
  userId: string;
  embed: boolean;
  explorer: boolean;
  socketSend: any;
  i18n: any;
  study?: any;
  tagTypes?: string;
  practice?: any;
}

export interface Study {
  setChapter(id: string): void;
  currentChapter(): StudyChapter;
  data: StudyData;
  socketHandlers: { [key: string]: any };
  vm: any;
}

export interface StudyData {
  id: string;
}

export interface StudyChapter {
  id: string;
}

export interface StudyPractice {
}

export type AutoplayDelay = number | 'realtime' | 'cpl_fast' | 'cpl_slow' |
                            'fast' | 'slow';
