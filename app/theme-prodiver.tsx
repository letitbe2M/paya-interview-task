"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { faIR } from "@mui/material/locale";

const theme = createTheme(
  {
    direction: "rtl",
    palette: {
      primary: { main: "#1976d2" },
    },
    typography: {
      fontFamily: "IRANSans, Arial, sans-serif",
    },
  },
  faIR
);

export function MuiThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div dir="rtl">{children}</div>
    </ThemeProvider>
  );
}
