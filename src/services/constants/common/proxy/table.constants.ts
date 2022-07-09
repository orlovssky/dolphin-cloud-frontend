import { TableItemModel } from "models/common/proxy.models";
import { RowModel } from "models/common/table.models";
import { proxyEndpoints } from "plugins/axios/endpoints";

export const rows: RowModel<TableItemModel>[] = [
  {
    indexKey: "name",
    itemKey: "name",
    title: "common.name",
  },
  {
    indexKey: "type",
    itemKey: "type",
    title: "proxy.type",
  },
  {
    indexKey: "host",
    itemKey: "host",
    title: "proxy.host",
  },
  {
    indexKey: "port",
    itemKey: "port",
    title: "proxy.port",
  },
  {
    indexKey: "login",
    itemKey: "login",
    title: "proxy.login",
  },
  {
    indexKey: "password",
    itemKey: "password",
    title: "proxy.password",
  },
  {
    indexKey: "status",
    itemKey: "status",
    title: "common.status",
  },
];

export const url = `${proxyEndpoints.proxies}?`;
