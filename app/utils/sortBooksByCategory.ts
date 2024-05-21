import {SerialType} from '@/types/redux';

const sortBooksByCategory = (
  data: SerialType[],
  bannerIds: string[],
  category: string,
) => {
  return data.filter(
    item => item.category === category && !bannerIds.includes(item.id),
  );
};

export default sortBooksByCategory;
