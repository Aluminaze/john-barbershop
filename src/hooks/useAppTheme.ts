import { useTheme } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export const useAppTheme = () => {
  return useTheme<Theme>();
};
