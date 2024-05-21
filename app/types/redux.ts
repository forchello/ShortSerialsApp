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
};

export type ContinueWatchType = {
  serialId: string;
  episodeId: string;
  time: number;
} | null;

export interface AppStateProps {
  remoteConfig: RemoteConfigType;
  continueWatch: ContinueWatchType;
}

export interface AsyncActionError {
  errorMessage: string;
}
