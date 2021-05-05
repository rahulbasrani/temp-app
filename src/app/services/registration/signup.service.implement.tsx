import { ServiceResponse } from "../api";
import { SignupService } from "./signup.service";
import { RegistrationForm } from "@models";
import Config from "@config";
import axios from "axios";
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
      const res = await axios.post(`${baseUrl}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 400) {
        throw new Error();
      }
      if (res.status === 404) {
        throw new Error();
      }
      return new ServiceResponse<RegistrationForm>(data);
    } catch (error) {
      return new ServiceResponse<RegistrationForm>(undefined, error);
    }
  }
}
