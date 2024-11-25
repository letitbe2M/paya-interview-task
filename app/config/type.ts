export interface IData {
  id: number;
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

export interface IHeadCell {
  disablePadding: boolean;
  id: keyof IData;
  label: string;
  numeric: boolean;
}

export type Order = "asc" | "desc";


export interface IEnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof IData
  ) => void;
  order: Order;
  orderBy: string;
}