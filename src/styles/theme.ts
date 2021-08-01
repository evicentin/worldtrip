import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    orange: { "500": "#FFBA08" },
    white: "#F5F8FA",
    gray: {
      "100": "#DADADA",
      "400": "#999999",
      "600": "#47585B",
      "900": "#1D1D1D",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
        color: "gray.400",
      },
    },
  },
});
