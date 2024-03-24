import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import React from "react";
import { LogBox } from "react-native";
import { PaperProvider, DefaultTheme } from "react-native-paper";
import { en, registerTranslation } from "react-native-paper-dates";
import theme from "./utils/theme";
import { store } from "./store";
import { Provider } from "react-redux";

registerTranslation("en", en);
LogBox.ignoreAllLogs();

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    accent: theme.colors.greyText,
    primaryContainer: theme.colors.primaryExtraLight,
    secondaryContainer: theme.colors.extraHard,
  },
};

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <PaperProvider theme={customTheme}>
          <Navigation />
        </PaperProvider>
      </Provider>
    );
  }
}
