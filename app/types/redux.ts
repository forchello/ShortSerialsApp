export type EpisodeType = {
  id: string;
  name: string;
  uri: string;
};

export type RemoteConfigType = {
  home_sections_order: string[];
  home_banners: string[];
  home_sections_data: SerialType[];
};

export type ContinueWatchType = {
  serialId: string;
  episodeId: string;
  time: number;
} | null;

export enum SerialCategory {
  tranding = 'tranding',
  romance = 'romance',
}

export interface SerialType {
  id: string;
  title: string;
  description: string;
  category: string;
  upcoming?: number; // unix time
  episodes: EpisodeType[];
}

export interface AppStateProps {
  remoteConfig: RemoteConfigType;
  continueWatch: ContinueWatchType;
}

export interface AsyncActionError {
  errorMessage: string;
}
