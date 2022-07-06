import LinearProgress from "@mui/material/LinearProgress";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import { PropsModel } from "models/common/table.models";
import { useAppSelector, useAppDispatch } from "plugins/store/hooks";
import {
  setItems,
  setLoading,
} from "plugins/store/modules/common/table.modules";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { getListApi } from "services/api/common/list.api";

export default function CommonTable<Item>({
  url,
  rows,
}: PropsModel<Item>): JSX.Element {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { innerHeight } = useAppSelector((state) => state.appData);
  const { items, loading } = useAppSelector((state) => state.table);
  const height = innerHeight - 48 - 52;

  useEffect(() => {
    dispatch(setLoading(true));

    getListApi<Item>(url)
      .then(({ data }) => {
        if (Array.isArray(data.data)) {
          dispatch(setItems(data.data));
        }
      })
      .finally(() => {
        dispatch(setLoading(false));
      });

    return () => {
      dispatch(setItems([]));
    };
  }, []);

  return (
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
  );
}
