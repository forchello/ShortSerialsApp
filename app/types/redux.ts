interface HomeSectionOrderType {
  order: string[];
}

export type EpisodeType = {
  id: string;
  name: string;
  uri: string;
};

export interface HomeBannerType {
  id: string;
  title: string;
  description: string;
  tag: string;
  episodes: EpisodeType[];
}

export type RemoteConfigType = {
  home_sections_order: HomeSectionOrderType;
  home_banners: HomeBannerType[];
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
  category: string;
  upcoming?: number; // unix time
}

export interface AppStateProps {
  remoteConfig: RemoteConfigType;
  continueWatch: ContinueWatchType;
}

export interface AsyncActionError {
  errorMessage: string;
}
