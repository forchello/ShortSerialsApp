import {AppStateProps} from '@/types/redux';

const initialState: AppStateProps = {
  continueWatch: null,
  remoteConfig: {
    home_sections_order: ['banner', 'continue_watch', 'tranding', 'romance'],
    home_banners: ['lethel_limits_s1', 'lethel_limits_s2'],
    home_sections_data: [
      {
        id: 'lethel_limits_s1',
        title: 'Lethal Limits 1',
        description: "Dustion's Gamble",
        category: 'romance',
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
        description: "Dustion's Gamble",
        category: 'romance',
        episodes: [],
      },
      {
        id: 'serial_1',
        title: 'Wolfstate chronicles: Alaska, Texas',
        description: 'test 1',
        category: 'tranding',
        episodes: [],
      },
      {
        id: 'serial_2',
        title: 'Beautiful Revenge',
        description: 'test 2',
        category: 'tranding',
        upcoming: 1719889200000,
        episodes: [],
      },
      {
        id: 'serial_3',
        title: 'Sin De Rella',
        description: 'test 3',
        category: 'tranding',
        upcoming: 1719889200000,
        episodes: [],
      },
      {
        id: 'serial_4',
        title: "Alpha's Detective",
        description: 'test 4',
        category: 'romance',
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
        id: 'serial_5',
        title: 'Trained for Seduction',
        description: 'test 5',
        category: 'romance',
        upcoming: 1719889200000,
        episodes: [],
      },
      {
        id: 'serial_6',
        title: 'Crescent',
        description: 'test 6',
        category: 'romance',
        upcoming: 1719889200000,
        episodes: [],
      },
    ],
  },
};

export default initialState;
