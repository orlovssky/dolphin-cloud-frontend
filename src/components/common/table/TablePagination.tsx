import TablePagination from "@mui/material/TablePagination";
import { PaginationPropsModel } from "models/common/table.models";
import { MouseEvent, ChangeEvent } from "react";

export default function CommonTablePagination({
  rowsPerPage,
  page,
  total,
  loadItems,
}: PaginationPropsModel): JSX.Element {
  const handleChangePage = (
    _: MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => {
    loadItems({ page });
  };
  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { value } = event.target;
    loadItems({
      page: 0,
      rowsPerPage: parseInt(value, 10),
    });
  };

  return (
    <TablePagination
      component="footer"
      rowsPerPageOptions={[10, 25, 50]}
      count={total}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
