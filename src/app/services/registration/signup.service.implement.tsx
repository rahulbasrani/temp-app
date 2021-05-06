import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosRequestConfig,
  AxiosError,
} from "axios";
import { ServiceResponse } from "../api";
import { SignupService } from "./signup.service";
import { RegistrationForm } from "@models";
import Config from "@config";
const baseUrl = Config.baseUrl;

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
      const res = axios.create({
        baseURL: Config.baseUrl,
      });
      const ress = await res.post(baseUrl, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (ress.status === 400) {
        throw new Error("400");
      }
      if (ress.status === 404) {
        throw new Error("404");
      }
      return new ServiceResponse<RegistrationForm>(data);
    } catch (error) {
      return new ServiceResponse<RegistrationForm>(undefined, error);
    }
  }
}
