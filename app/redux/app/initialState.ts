import {AppStateProps} from '@/types/redux';

const initialState: AppStateProps = {
  continueWatch: null,
  remoteConfig: {
    home_sections_order: {
      order: ['banner', 'continue_watch', 'tranding', 'romance', 'coming_soon'],
    },
    home_banners: [
      {
        id: 'lethel_limits_s1',
        title: 'Lethal Limits 1',
        description: "Dustin's Gamble",
        tag: 'romance',
        episodes: [
          {
            id: 'lethel_limits_s1_e1',
            name: 'Episode 1',
            uri: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/convertedwife.m3u8',
          },
          {
            id: 'lethel_limits_s1_e2',
            name: 'Episode 2',
            uri: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/2wife2.m3u8',
          },
          {
            id: 'lethel_limits_s1_e3',
            name: 'Episode 3',
            uri: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/3wife3.m3u8',
          },
          {
            id: 'lethel_limits_s1_e4',
            name: 'Episode 4',
            uri: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/4wife4.m3u8',
          },
          {
            id: 'lethel_limits_s1_e5',
            name: 'Episode 5',
            uri: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/5wife5.m3u8',
          },
          {
            id: 'lethel_limits_s1_e6',
            name: 'Episode 6',
            uri: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/6wife6.m3u8',
          },
          {
            id: 'lethel_limits_s1_e7',
            name: 'Episode 7',
            uri: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/7wife7.m3u8',
          },
          {
            id: 'lethel_limits_s1_e8',
            name: 'Episode 8',
            uri: 'https://dj0vkl2i4vsbo.cloudfront.net/convert/wife_caught_husband/converted/8wife8.m3u8',
          },
        ],
      },
      {
        id: 'lethel_limits_s2',
        title: 'Lethal Limits 2',
        description: "Dustin's Gamble",
        tag: 'romance',
        episodes: [],
      },
    ],
    home_sections_data: [
      {
        id: 'serial_1',
        title: 'Wolfstate chronicles: Alaska, Texas',
        category: 'tranding',
      },
      {
        id: 'serial_2',
        title: 'Beautiful Revenge',
        category: 'tranding',
        upcoming: 1719889200000,
      },
      {
        id: 'serial_3',
        title: 'Sin De Rella',
        category: 'tranding',
        upcoming: 1719889200000,
      },
      {
        id: 'serial_4',
        title: "Alpha's Detective",
        category: 'romance',
      },
      {
        id: 'serial_5',
        title: 'Trained for Seduction',
        category: 'romance',
        upcoming: 1719889200000,
      },
      {
        id: 'serial_6',
        title: 'Crescent',
        category: 'romance',
        upcoming: 1719889200000,
      },
    ],
  },
};

export default initialState;
