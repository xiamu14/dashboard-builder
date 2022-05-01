import { colors } from "@src/constant";

export function randomColor(prefix: "secondary-0", range: number) {
  const random = Math.floor(Math.random() * range) + 1;

  const key = `${prefix}${random}` as keyof typeof colors;
  return colors[key];
}
