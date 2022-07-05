export interface TableStateModel {
  items: ItemModel[];
  loading: boolean;
}

export interface PropsModel<Row> {
  url: string;
  rows: Row[];
}

export interface RowModel<Item> {
  value: keyof Item;
  title: string;
}

export interface ItemModel {
  id: string;
  name: string;
}

export interface ResponseModel {
  data: {
    data: ItemModel[];
  };
}
