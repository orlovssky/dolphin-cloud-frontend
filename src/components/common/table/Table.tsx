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

export default function CommonTable<Row>({
  url,
  rows,
}: PropsModel<Row>): JSX.Element {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const { innerHeight } = useAppSelector((state) => state.appData);
  const { items, loading } = useAppSelector((state) => state.table);
  const height = innerHeight - 48 - 52;

  useEffect(() => {
    dispatch(setLoading(true));

    getListApi(url)
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
      {loading && <LinearProgress />}

      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            {rows.map(({ value, title }) => (
              <TableCell key={value}>{t(`${title}`)}</TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {items.map((item) => (
            <TableRow key={item.id}>
              {rows.map(({ value }) => (
                <TableCell key={`${item.id}-${value}`}>{item[value]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
