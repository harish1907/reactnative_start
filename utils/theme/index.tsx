import { Platform } from "react-native";

const theme = {
  colors: {
    primary: "#dd0433",
    primaryLight: "#e95159",
    primaryExtraLight: "#F78CA2",
    primaryDark: "#ca3442",
    secondary: "#22092C",
    secondaryLight: "#22092C",
    extraHard: "#EEEDED",
    blue: "#0766AD",
    danger: "#C70039",
    text: "#10181E",
    greyText: "#4F4B4B",
    white: "#fff",
    lightBackground: "#272F35",
    black: "#000",
    grey: "rgba(12,13,52,0.05)",
    lightGrey: "#F3F3F3",
    violet: "#30336B",
    orange: "#F4C724",
    skyBlue: "#01CBC6",
    pink: "#E74292",
    border: "#D0D4CA",
  },
  font: {
    fontBold: {
      fontFamily: "Poppins-Bold",
      top: Platform.OS == "android" ? 2 : 0,
    },
    fontSemiBold: {
      fontFamily: "Poppins-SemiBold",
      top: Platform.OS == "android" ? 2 : 0,
    },
    fontRegular: {
      fontFamily: "Poppins-Regular",
      top: Platform.OS == "android" ? 2 : 0,
    },
    fontMedium: {
      fontFamily: "Poppins-Medium",
      top: Platform.OS == "android" ? 2 : 0,
    },
    fontLight: {
      fontFamily: "Poppins-Light",
      top: Platform.OS == "android" ? 2 : 0,
    },
    fontCinzelBlack: {
      fontFamily: "Cinzel-Black",
      top: Platform.OS == "android" ? 2 : 0,
    },
    fontPlayFairLight: {
      fontFamily: "PlayfairDisplay-Black",
      top: Platform.OS == "android" ? 2 : 0,
    },
    fontPlayFairRegular: {
      fontFamily: "PlayfairDisplay-Regular",
      top: Platform.OS == "android" ? 2 : 0,
    },
  },

  elevationLight: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,

    elevation: 5,
  },

  elevationHeavy: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 10,
  },
};

export default theme;
