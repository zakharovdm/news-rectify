import { CategoriesType } from "@/entities/category";

export type SkeletonType = 'item' | 'banner';
export type DirectionType = 'row' | 'column';

export interface IFilters {
  page_number: number;
  page_size: number;
  category: CategoriesType | null;
  keywords: string;
}

export type ParamsType = Partial<IFilters>;
