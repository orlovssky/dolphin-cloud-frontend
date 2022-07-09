import {
  SignInRequestModel,
  SignInResponseModel,
} from "models/main/auth.models";
import { authEndpoints } from "plugins/axios/endpoints";
import { api } from "plugins/axios";

export async function signInApi(
  user: SignInRequestModel
): Promise<SignInResponseModel> {
  return await api.post(authEndpoints.signIn, user);
}
