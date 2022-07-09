import LinearProgress from "@mui/material/LinearProgress";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import { TablePropsModel } from "models/common/table.models";
import { useAppDispatch } from "plugins/store/hooks";
import { setItems } from "plugins/store/modules/common/table.modules";
import { useEffect } from "react";

import { useTableControls } from "./Control";
import CommonTablePagination from "./Pagination";

export default function CommonTable<Item>({
  url,
  heightOffset = 48 + 52 + 52,
  rows,
}: TablePropsModel<Item>): JSX.Element {
  const dispatch = useAppDispatch();
  const { t, items, loading, height, rowsPerPage, page, total, loadItems } =
    useTableControls<Item>(url, heightOffset);

  useEffect(() => {
    loadItems();

    return () => {
      dispatch(setItems([]));
    };
  }, []);

  return (
    <>
      <TableContainer component={Paper} sx={{ height }}>
        {/*LOADER*/}
        {loading && <LinearProgress />}
        {/*LOADER END*/}

        <Table stickyHeader size="small">
          {/*TABLE HEAD*/}
          <TableHead>
            <TableRow>
              {rows.map(({ title, indexKey }) => (
                <TableCell key={indexKey}>{t(`${title}`)}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          {/*TABLE HEAD END*/}

          {/*TABLE BODY*/}
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                {rows.map(({ itemKey, indexKey }) => (
                  <TableCell key={`${item.id}-${indexKey}`}>
                    {item[itemKey]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
          {/*TABLE BODY END*/}
        </Table>
      </TableContainer>

      {/*PAGINATION*/}
      <CommonTablePagination
        rowsPerPage={rowsPerPage}
        page={page}
        total={total}
        loadItems={loadItems}
      />
      {/*PAGINATION END*/}
    </>
  );
}
