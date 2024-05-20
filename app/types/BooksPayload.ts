export enum BookCategory {
  tranding = 'tranding',
  romance = 'romance',
}

export interface BookType {
  id: number;
  title: string;
  image: string;
  category: BookCategory;
  upcoming?: number; // unix time
}
