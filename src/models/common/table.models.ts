import { Key } from "react";

export interface TableStateModel {
  items: any[];
  loading: boolean;
}

export interface PropsModel<Item> {
  url: string;
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
  };
}
