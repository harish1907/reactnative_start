import React, { useEffect } from "react";
import { SafeAreaView, Image } from "react-native";

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("UserScreens");
    }, 500)
  }, [])
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
      }}
    >
      <Image
        source={{uri: "https://imgs.search.brave.com/sIr648a3W-hkl6eDXnbyN-g3Kk1-Uc5w9kXeAlZYC80/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hYnN0cmFjdC1t/aW5pbWFsLXJlbmV3/YWJsZS1sb2dvXzE0/NTktMzQxNDEuanBn/P3NpemU9NjI2JmV4/dD1qcGc"}}
        style={{
          height: 250,
          width: 250,
          resizeMode: "contain",
        }}
      />
    </SafeAreaView>
  );
};

export default SplashScreen;
