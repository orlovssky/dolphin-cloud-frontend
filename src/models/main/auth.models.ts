export interface SignInFormModel {
  email: string;
  password: string;
}

export interface SignInRequestModel {
  username: string;
  password: string;
}

export interface SignInResponseModel {
  data: {
    data: {
      access_token: string;
    };
  };
}
