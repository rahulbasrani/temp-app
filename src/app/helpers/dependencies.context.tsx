import * as React from "react";
import i18next from "i18next";

import { SignupServiceImplement, SignupService } from "../services";

import { AppDependenciesProps } from "./dependencies.props";
import i18n from "./i18n";
const signupService: SignupService = new SignupServiceImplement();
const translation: i18next.i18n = i18n;

export const getDependencies = (): AppDependenciesProps => {
  return {
    translation,
    signupService,
  };
};

const DIContext = React.createContext<AppDependenciesProps>(getDependencies());

export default DIContext;
