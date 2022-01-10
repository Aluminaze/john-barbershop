import { createTheme } from "@mui/material/styles";

import {
  play_regular_styles,
  play_bold_styles,
  PLAY_REGULAR,
  PLAY_BOLD,
} from "./theme-variables";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile_360: true;
    tablet_768: true;
    desktopS_960: true;
    desktopS_1280: true;
    desktopM_1440: true;
    desktopL_1680: true;
    desktopXL_1920: true;
  }
  interface Theme {
    customColor: {
      red: string;
      green_pine: string;
      accent: {
        positive: {
          lightMode: string;
          darkMode: string;
        };
        warning: {
          lightMode: string;
          darkMode: string;
        };
        negative: {
          lightMode: string;
          darkMode: string;
        };
        active: {
          lightMode: string;
          darkMode: string;
        };
      };
      background: {
        primary: {
          lightMode: string;
          darkMode: string;
        };
        primaryElevated: {
          lightMode: string;
          darkMode: string;
        };
        modal: {
          lightMode: string;
          darkMode: string;
        };
        stroke: {
          lightMode: string;
          darkMode: string;
        };
        secondary: {
          lightMode: string;
          darkMode: string;
        };
        secondaryElevated: {
          lightMode: string;
          darkMode: string;
        };
        inverted: {
          lightMode: string;
          darkMode: string;
        };
        overlay: {
          lightMode: string;
          darkMode: string;
        };
        hover: {
          lightMode: string;
          darkMode: string;
        };
        navbarIOS: {
          lightMode: string;
          darkMode: string;
        };
      };
      text: {
        headline: {
          lightMode: string;
          darkMode: string;
        };
        primary: {
          lightMode: string;
          darkMode: string;
        };
        secondary: {
          lightMode: string;
          darkMode: string;
        };
        tertiary: {
          lightMode: string;
          darkMode: string;
        };
        inverted: {
          lightMode: string;
          darkMode: string;
        };
        positive: {
          lightMode: string;
          darkMode: string;
        };
        negative: {
          lightMode: string;
          darkMode: string;
        };
        primaryLink: {
          lightMode: string;
          darkMode: string;
        };
        secondaryLink: {
          lightMode: string;
          darkMode: string;
        };
      };
      controls: {
        primaryActive: {
          lightMode: string;
          darkMode: string;
        };
        secondaryActive: {
          lightMode: string;
          darkMode: string;
        };
        tertiaryActive: {
          lightMode: string;
          darkMode: string;
        };
        inactive: {
          lightMode: string;
          darkMode: string;
        };
        alternative: {
          lightMode: string;
          darkMode: string;
        };
        activeTabbar: {
          lightMode: string;
          darkMode: string;
        };
        inactiveTabbar: {
          lightMode: string;
          darkMode: string;
        };
      };
      icons: {
        primary: {
          lightMode: string;
          darkMode: string;
        };
        secondary: {
          lightMode: string;
          darkMode: string;
        };
        tertiary: {
          lightMode: string;
          darkMode: string;
        };
      };
    };
  }
  interface ThemeOptions {
    customColor: {
      red?: string;
      green_pine?: string;
      accent: {
        positive: {
          lightMode?: string;
          darkMode?: string;
        };
        warning: {
          lightMode?: string;
          darkMode?: string;
        };
        negative: {
          lightMode?: string;
          darkMode?: string;
        };
        active: {
          lightMode?: string;
          darkMode?: string;
        };
      };
      background: {
        primary: {
          lightMode?: string;
          darkMode?: string;
        };
        primaryElevated: {
          lightMode?: string;
          darkMode?: string;
        };
        modal: {
          lightMode?: string;
          darkMode?: string;
        };
        stroke: {
          lightMode?: string;
          darkMode?: string;
        };
        secondary: {
          lightMode?: string;
          darkMode?: string;
        };
        secondaryElevated: {
          lightMode?: string;
          darkMode?: string;
        };
        inverted: {
          lightMode?: string;
          darkMode?: string;
        };
        overlay: {
          lightMode?: string;
          darkMode?: string;
        };
        hover: {
          lightMode?: string;
          darkMode?: string;
        };
        navbarIOS: {
          lightMode?: string;
          darkMode?: string;
        };
      };
      text: {
        headline: {
          lightMode?: string;
          darkMode?: string;
        };
        primary: {
          lightMode?: string;
          darkMode?: string;
        };
        secondary: {
          lightMode?: string;
          darkMode?: string;
        };
        tertiary: {
          lightMode?: string;
          darkMode?: string;
        };
        inverted: {
          lightMode?: string;
          darkMode?: string;
        };
        positive: {
          lightMode?: string;
          darkMode?: string;
        };
        negative: {
          lightMode?: string;
          darkMode?: string;
        };
        primaryLink: {
          lightMode?: string;
          darkMode?: string;
        };
        secondaryLink: {
          lightMode?: string;
          darkMode?: string;
        };
      };
      controls: {
        primaryActive: {
          lightMode?: string;
          darkMode?: string;
        };
        secondaryActive: {
          lightMode?: string;
          darkMode?: string;
        };
        tertiaryActive: {
          lightMode?: string;
          darkMode?: string;
        };
        inactive: {
          lightMode?: string;
          darkMode?: string;
        };
        alternative: {
          lightMode?: string;
          darkMode?: string;
        };
        activeTabbar: {
          lightMode?: string;
          darkMode?: string;
        };
        inactiveTabbar: {
          lightMode?: string;
          darkMode?: string;
        };
      };
      icons: {
        primary: {
          lightMode?: string;
          darkMode?: string;
        };
        secondary: {
          lightMode?: string;
          darkMode?: string;
        };
        tertiary: {
          lightMode?: string;
          darkMode?: string;
        };
      };
    };
  }

  interface TypographyVariants {
    play_regular: React.CSSProperties;
    play_bold: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    play_regular?: React.CSSProperties;
    play_bold?: React.CSSProperties;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body1: false;
    body2: false;
    button: false;
    caption: false;
    subtitle1: false;
    subtitle2: false;
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    play_regular: true;
    play_bold: true;
  }
}

const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTooltip: {
      styleOverrides: {
        arrow: {
          color: "#1D2023",
        },
        tooltip: {
          ...play_regular_styles,
          color: "#FFFFFF",
          backgroundColor: "#1D2023",
          padding: "10px 12px",
          borderRadius: "8px",
        },
      },
    },
  },
  typography: {
    fontFamily: [PLAY_REGULAR, "sans serif", "Segoe UI"].join(","),
    play_regular: {
      fontFamily: PLAY_REGULAR,
      fontWeight: 400,
      ...play_regular_styles,
    },
    play_bold: {
      fontFamily: PLAY_BOLD,
      fontWeight: 700,
      ...play_bold_styles,
    },
  },
  breakpoints: {
    values: {
      mobile_360: 360,
      tablet_768: 768,
      desktopS_960: 960,
      desktopS_1280: 1280,
      desktopM_1440: 1440,
      desktopL_1680: 1680,
      desktopXL_1920: 1920,
    },
  },
  customColor: {
    red: "#E30611",
    green_pine: "#0A775F",
    accent: {
      positive: {
        lightMode: "#26CD58",
        darkMode: "#74DF8B",
      },
      warning: {
        lightMode: "#FAC031",
        darkMode: "#FAD67D",
      },
      negative: {
        lightMode: "#F95721",
        darkMode: "#FA8A64",
      },
      active: {
        lightMode: "#007CFF",
        darkMode: "#007CFF",
      },
    },
    background: {
      primary: {
        lightMode: "#FFFFFF",
        darkMode: "#000000",
      },
      primaryElevated: {
        lightMode: "#FFFFFF",
        darkMode: "#000000",
      },
      modal: {
        lightMode: "#FFFFFF",
        darkMode: "#2C3135",
      },
      stroke: {
        lightMode: "#BCC3D07F",
        darkMode: "#7F8C9959",
      },
      secondary: {
        lightMode: "#F2F3F7",
        darkMode: "#1D2023",
      },
      secondaryElevated: {
        lightMode: "#FFFFFF",
        darkMode: "#2C3135",
      },
      inverted: {
        lightMode: "#1D2023",
        darkMode: "#FFFFFF",
      },
      overlay: {
        lightMode: "#1D202366",
        darkMode: "#1D202399",
      },
      hover: {
        lightMode: "#BCC3D03F",
        darkMode: "#F2F3F733",
      },
      navbarIOS: {
        lightMode: "#FFFFFFE5",
        darkMode: "#000000E5",
      },
    },
    text: {
      headline: {
        lightMode: "#000000",
        darkMode: "#FFFFFF",
      },
      primary: {
        lightMode: "#1D2023",
        darkMode: "#FAFAFA",
      },
      secondary: {
        lightMode: "#626C77",
        darkMode: "#969FA8",
      },
      tertiary: {
        lightMode: "#969FA8",
        darkMode: "#626C77",
      },
      inverted: {
        lightMode: "#FFFFFF",
        darkMode: "#000000",
      },
      positive: {
        lightMode: "#12B23F",
        darkMode: "#74DF8B",
      },
      negative: {
        lightMode: "#EB4A13",
        darkMode: "#FFA080",
      },
      primaryLink: {
        lightMode: "#007CFF",
        darkMode: "#FFA080",
      },
      secondaryLink: {
        lightMode: "#969FA8",
        darkMode: "#626C77",
      },
    },
    controls: {
      primaryActive: {
        lightMode: "#E30611",
        darkMode: "#E30611",
      },
      secondaryActive: {
        lightMode: "#1D2023",
        darkMode: "#FFFFFF",
      },
      tertiaryActive: {
        lightMode: "#F2F3F7",
        darkMode: "#7F8C99",
      },
      inactive: {
        lightMode: "#BCC3D07F",
        darkMode: "#7F8C9959",
      },
      alternative: {
        lightMode: "#FFFFFF",
        darkMode: "#7F8C9959",
      },
      activeTabbar: {
        lightMode: "#E30611",
        darkMode: "#FFFFFF",
      },
      inactiveTabbar: {
        lightMode: "#AEB5BD",
        darkMode: "#58616B",
      },
    },
    icons: {
      primary: {
        lightMode: "#000000",
        darkMode: "#FFFFFF",
      },
      secondary: {
        lightMode: "#969FA8",
        darkMode: "#969FA8",
      },
      tertiary: {
        lightMode: "#BBC1C7",
        darkMode: "#626C77",
      },
    },
  },
  palette: {
    grey: {
      "100": "#f2f3f7",
      "200": "#e2e5eb",
      "300": "#bbc1c7",
      "400": "#969fa8",
      "500": "#626c77",
      "600": "#434a51",
      "700": "#2c3135",
      "800": "#1d2023",
      "900": "#000000",
    },
  },
});
export default theme;
