import theme from "../data/theme";
import { MAP_COLOR_VARIANT_TO_TEXT } from "./mapVariants";

export default function convertAsteriskToStrongTag(str: string) {
  const colorClass = MAP_COLOR_VARIANT_TO_TEXT[theme.colors.primary];
  return str.replace(/\*{1,3}(.*?[^\\])\*{1,3}/g, (match, group1) => {
    if (match.startsWith("***") && match.endsWith("***")) {
      return `<strong class="font-extralight text-xl ${colorClass}">${group1}</strong>`;
    } else if (match.startsWith("**") && match.endsWith("**")) {
      return `<strong class="font-semibold text-neutral-100 hover:${colorClass} cursor-pointer">${group1}</strong>`;
    } else if (match.startsWith("*") && match.endsWith("*")) {
      return `<strong class="font-normal ${colorClass}">${group1}</strong>`;
    } else {
      return match;
    }
  });
}
