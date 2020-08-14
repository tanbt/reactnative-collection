import { Route } from "@react-navigation/native";

export type DataScreenRoute<T extends string> = Route<T> & {
  params: { hello: string };
};

export type DataScreenParamList = {
  Data: { hello: string };
};
