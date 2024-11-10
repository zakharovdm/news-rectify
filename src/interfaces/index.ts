export interface INews {
  author: string;
  category: CategoriesType[];
  description: string;
  id: string;
  image: string;
  language: string;
  published: string;
  title: string;
  url: string;
}

export interface NewsApiResponse {
  news: INews[];
  page: number;
  status: string;
}

export type SkeletonType = 'item' | 'banner';
export type DirectionType = 'row' | 'column';

export interface IPaginationProps {
  totalPages: number,
  handleNextPage: () => void,
  handlePrevPage: () => void,
  handlePageClick: (page: number) => void,
  currentPage: number,
}

export interface CategoriesApiResponse {
  categories: CategoriesType[];
  description: string;
  status: string;
}

export interface IFilters {
  page_number: number;
  page_size: number;
  category: CategoriesType | null;
  keywords: string;
}

export type ParamsType = Partial<IFilters>;

export type CategoriesType =
  | 'regional'
  | 'technology'
  | 'lifestyle'
  | 'business'
  | 'general'
  | 'programming'
  | 'science'
  | 'entertainment'
  | 'world'
  | 'sports'
  | 'finance'
  | 'academia'
  | 'politics'
  | 'health'
  | 'opinion'
  | 'food'
  | 'game'
  | 'fashion'
  | 'academic'
  | 'crap'
  | 'travel'
  | 'culture'
  | 'economy'
  | 'environment'
  | 'art'
  | 'music'
  | 'notsure'
  | 'CS'
  | 'education'
  | 'redundant'
  | 'television'
  | 'commodity'
  | 'movie'
  | 'entrepreneur'
  | 'review'
  | 'auto'
  | 'energy'
  | 'celebrity'
  | 'medical'
  | 'gadgets'
  | 'design'
  | 'EE'
  | 'security'
  | 'mobile'
  | 'estate'
  | 'funny';
