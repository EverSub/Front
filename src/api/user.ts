import { AxiosResponse, AxiosError } from "axios";
import { publicApi } from "./axios";

import { Member, ApiResponseDefault } from "../types";

export const signUp = async (
  params: Member,
  Response: (Response: AxiosResponse<ApiResponseDefault<null>>) => void,
  Error: (Error: AxiosError<ApiResponseDefault<null>>) => void
) => {
  await publicApi.post(``, params).then(Response).catch(Error);
};