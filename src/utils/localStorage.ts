import { AdminProfile, User } from "@/graphql/__generatedTypes__";
import { convertNonEmptyValue } from "./common";

type LocalStorageKeys = "user" | "token" | "adminProfile";
type LocalStorageValues = User | AdminProfile | string;

export const localStorageSet = (
  key: LocalStorageKeys,
  value: LocalStorageValues,
) => {
  window.localStorage.setItem(key, JSON.stringify(convertNonEmptyValue(value)));
};

export const localStorageGet = async (key: LocalStorageKeys) => {
  try {
    const value: string | null | number = window.localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    } else {
      console.warn(`no value exist for the key ${key}`);
      return "";
    }
  } catch (error) {
    console.error("error reading localStorage");
    return "";
  }
};

export const localStorageRemove = (key: LocalStorageKeys) => {
  window.localStorage.removeItem(key);
};

interface IMultiset {
  key: LocalStorageKeys;
  value: LocalStorageValues;
}
export const localStorageMultiSet = (values: IMultiset[]) => {
  values.forEach((value) => {
    localStorageSet(value.key, value.value);
  });
};
