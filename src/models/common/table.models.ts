import { Key } from "react";

export interface TableStateModel extends PaginationModel {
  items: any[];
  loading: boolean;
  search: string;
}

export interface TablePropsModel<Item> {
  url: string;
  heightOffset?: number;
  rows: RowModel<Item>[];
}

export interface RowModel<Item> {
  indexKey: Key;
  itemKey: keyof Item;
  title: string;
}

export interface ItemModel {
  id: string;
  name: string;
}

export interface ResponseModel<Item> {
  data: {
    data: Item[];
    meta: PaginationResponseModel;
  };
}

export interface LoadItemsModels {
  rowsPerPage?: number;
  page?: number;
}

export interface PaginationModel {
  rowsPerPage: number;
  page: number;
  total: number;
}

export interface PaginationResponseModel {
  per_page: number;
  current_page: number;
  total: number;
}

export interface PaginationPropsModel extends PaginationModel {
  loadItems: (payload?: LoadItemsModels) => void;
}

export type TopbarProps = TopbarSearchProps;

export interface TopbarSearchProps {
  url: string;
}
