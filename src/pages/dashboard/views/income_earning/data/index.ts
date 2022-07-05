import colors from "@src/constant/color_variables";
import GreatSelect from "@src/utils/great_select";
import { SalesStatus } from "../types";

export const salesStatusSelect = new GreatSelect([
  {
    status: SalesStatus.Pending,
    tagBg: colors["secondary-05"],
  },
  {
    status: SalesStatus.Paid,
    tagBg: colors["secondary-04"],
  },
]);
