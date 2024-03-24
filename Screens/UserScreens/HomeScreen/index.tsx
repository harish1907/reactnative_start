import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  SafeAreaView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllProducts } from "../../../store/ProductSlice";

const HomeScreen = () => {
  const allProducts = useSelector((state: any) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={allProducts?.products}
        keyExtractor={(item: any) => item?._id}
        renderItem={({ item }: any) => {
          return (
            <View>
              <Text>name: {item?.name}</Text>
              <Text>price: {item?.price}</Text>
              <Text>quantity: {item?.quantity}</Text>
              <Text>place: {item?.place}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "green",
    fontSize: 25,
  },
});

export default HomeScreen;
