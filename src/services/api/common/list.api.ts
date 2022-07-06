import { ResponseModel } from "models/common/table.models";
import { api } from "plugins/axios";

export async function getListApi<Item>(
  url: string
): Promise<ResponseModel<Item>> {
  return await api.get(`${url}`);
}
