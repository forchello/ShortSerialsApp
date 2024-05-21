import {SerialType} from '@/types/redux';

const sortBooksByCategory = (data: SerialType[], category: string) => {
  if (!Array.isArray(data)) {
    return [];
  }

  return data.filter(item => item.category === category);
};

export default sortBooksByCategory;
