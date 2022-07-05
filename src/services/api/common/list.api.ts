import { ResponseModel } from "models/common/table.models";
import { api } from "plugins/axios";

export async function getListApi(url: string): Promise<ResponseModel> {
  return await api.get(`${url}`);
}
