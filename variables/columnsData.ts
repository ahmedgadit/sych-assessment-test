import { ReactNode } from "react";
import { Column } from "react-table";

export type ColumnData = Column[];

export type TableData = Column<{}>;

export type TableProps = {
  columnsData: ColumnData;
  tableData: TableData[];
  isSelectable?: boolean;
  showPageSize?: boolean;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
  onAdd?: () => void;
  actionSlot?: (id: number) => ReactNode;
};
