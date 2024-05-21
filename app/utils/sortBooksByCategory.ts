import {BookType} from '@/types/BooksPayload';

const sortBooksByCategory = (data: BookType[], category: string) => {
  return data.filter(item => item.category === category);
};

export default sortBooksByCategory;
