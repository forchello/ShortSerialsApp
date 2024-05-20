import {BookType, BookCategory} from '@/types/BooksPayload';

export const BOOKS_MOCKED_DATA: BookType[] = [
  {
    id: 1,
    title: 'Wolfstate chronicles: Alaska, Texas',
    image: require('@/assets/img/book_1.png'),
    category: BookCategory.tranding,
  },
  {
    id: 2,
    title: 'Beautiful Revenge',
    upcoming: 1719889200000,
    image: require('@/assets/img/book_2.png'),
    category: BookCategory.tranding,
  },
  {
    id: 3,
    title: 'Sin De Rella',
    upcoming: 1719889200000,
    image: require('@/assets/img/book_3.png'),
    category: BookCategory.tranding,
  },
  {
    id: 4,
    title: "Alpha's Detective",
    image: require('@/assets/img/book_4.png'),
    category: BookCategory.romance,
  },
  {
    id: 5,
    title: 'Trained for Seduction',
    upcoming: 1719889200000,
    image: require('@/assets/img/book_5.png'),
    category: BookCategory.romance,
  },
  {
    id: 6,
    title: 'Crescent',
    upcoming: 1719889200000,
    image: require('@/assets/img/book_6.png'),
    category: BookCategory.romance,
  },
];
