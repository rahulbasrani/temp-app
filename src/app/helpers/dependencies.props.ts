import i18next from "i18next";
import { RouteComponentProps } from "react-router";
import { SignupService } from "@services";

export interface AppDependenciesProps {
  translation: i18next.i18n;
  signupService: SignupService;
}

export type AppProps = RouteComponentProps;
