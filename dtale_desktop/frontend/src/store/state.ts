export type Node = {
  sourceId: string;
  path: string;
  dataId: string;
  dtaleUrl?: null | string;
  dtaleChartsUrl?: null | string;
  dtaleDescribeUrl?: null | string;
  dtaleCorrelationsUrl?: null | string;
  visible: boolean;
  lastCachedAt?: number;
  error?: string;
  sortValue?: number;
};

export type Source = {
  id: string;
  name: string;
  packageName: string;
  packagePath: string;
  nodes?: { [k: string]: Node };
  nodesFullyLoaded: boolean;
  error: null | string;
  visible: boolean;
  editable: boolean;
  sortValue?: number;
  listPaths: string;
  getData: string;
  saveData: string;
  loading?: boolean;
};

export type Settings = {
  disableAddDataSources: boolean;
  disableEditDataSources: boolean;
  disableEditLayout: boolean;
};

export interface RootState {
  sources?: Source[];
  selectedSource: null | Source;
  openModal: null | "layoutEditor";
  settings?: Settings;
  error: null | string;
};

export const initialState: RootState = {
  sources: undefined,
  selectedSource: null,
  openModal: null,
  settings: undefined,
  error: null,
};
