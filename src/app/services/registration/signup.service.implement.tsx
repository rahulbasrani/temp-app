import { ServiceResponse } from "../api";
import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig,
  AxiosError,
} from "axios";
import { SignupService } from "./signup.service";
import { RegistrationForm } from "@models";
import Config from "@config";

export default class SignupServiceImplement implements SignupService {
  static readonly RESOURCE = "/signup";
  async signup(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    organizationName: string
  ): Promise<ServiceResponse<RegistrationForm>> {
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      organizationName: organizationName,
    };
    try {
      const res = await axios.post(`${Config.baseUrl}/accounts`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 400) {
        throw new Error("400");
      }
      if (res.status === 404) {
        throw new Error("404");
      }
      return new ServiceResponse<RegistrationForm>(data);
    } catch (error) {
      return new ServiceResponse<RegistrationForm>(undefined, error);
    }
  }
}
