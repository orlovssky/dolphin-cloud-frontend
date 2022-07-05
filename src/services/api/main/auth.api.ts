import {
  SignInRequestModel,
  SignInResponseModel,
} from "models/main/auth.models";
import endpoints from "plugins/axios/endpoints";
import { api } from "plugins/axios";

export async function signInApi(
  user: SignInRequestModel
): Promise<SignInResponseModel> {
  return await api.post(endpoints.signIn, user);
}
