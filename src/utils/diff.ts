import { isEqual } from "lodash-es";

export function diffData<T>(
  source: T[],
  changed: T[]
): {
  add: T[];
  remove: T[];
  unChange: T[];
} {
  const add = changed.filter((it) => {
    return source.every((item) => !isEqual(item, it));
  });
  const remove = source.filter((it) => {
    return changed.every((item) => !isEqual(item, it));
  });
  const unChange = changed.filter((it) =>
    source.some((item) => isEqual(item, it))
  );
  return {
    remove,
    add,
    unChange,
  };
}
