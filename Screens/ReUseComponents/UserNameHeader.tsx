import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {} from "react-native-gesture-handler";
import theme from "../../utils/theme";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useAtom } from "jotai";
import { currentUserData } from "../../JotaiStore";

const { width }: any = Dimensions.get("window");
const UserNameHeader = ({ navigation, title, userScreen }: any) => {
  const [currentUserDetails]: any = useAtom(currentUserData);
  return (
    <>
      <View
        style={{
          paddingTop: useSafeAreaInsets().top,
          backgroundColor: theme.colors.primaryDark,
        }}
      />
      <StatusBar style="light" />
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.black} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.user_name}>{currentUserDetails?.user_name}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.colors.lightGrey,
    padding: 10,
    paddingVertical: 15,
    alignItems: "center",
    flexDirection: "row",
    ...theme.elevationLight,
    justifyContent: "space-between",
  },
  title: {
    ...theme.font.fontMedium,
    color: theme.colors.black,
    fontSize: 16,
    textAlign: "center",
  },
  user_name: {
    ...theme.font.fontMedium,
    color: theme.colors.black,
    fontSize: 14,
    textAlign: "center",
  },
});

export default UserNameHeader;
