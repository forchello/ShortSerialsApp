import {BookType, BookCategory} from '@/types/BooksPayload';

const sortBooksByCategory = (data: BookType[], category: BookCategory) => {
  return data.filter(item => item.category === category);
};

export default sortBooksByCategory;
