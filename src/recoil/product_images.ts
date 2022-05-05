import { atom } from "recoil";

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: any[], _: any, isReset?: boolean) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

const productImagesState = atom<any[]>({
  key: "productImages",
  default: [],
  effects_UNSTABLE: [localStorageEffect("productImages")],
});

export default productImagesState;
