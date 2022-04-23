import sessionUtil, { SessionKey } from "@src/utils/storage/session";

export default async function fetchWithSession<T>(
  key: SessionKey,
  fetchData: () => Promise<T>
) {
  const data = sessionUtil.getItem(key);
  if (data) {
    return data as T;
  }

  const result = await fetchData();

  sessionUtil.setItem(key, result);

  return result;
}
