import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { useGetOrdersByClientIdQuery } from "../services/shopService";
import { useSelector } from "react-redux";
import OrderContainer from "../components/OrderContainer/OrderContainer";
import { useEffect, useState } from "react";
const Orders = () => {
  const { localId } = useSelector((state) => state.authReducer.value);
  const { data, error, refetch } = useGetOrdersByClientIdQuery(localId);
  const [orders, setOrders] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const getOrders = () => {
    const newData = [];
    for (const key in data) {
      newData.push(data[key]);
    }
    setOrders(newData);
    setRefreshing(false);
  };

  if (error) {
    Alert.alert("Ha ocurrido el siguiente error: ", error);
  }

  useEffect(() => {
    getOrders();
  }, [data]);

  const handleRefresh = async () => {
    try {
      await refetch();
      setRefreshing(false);
    } catch (error) {
      Alert.alert("Error al recargar los datos:", error);
    }
  };

  return (
    <View style={styles.container}>
      {orders.length === 0 ? (
        <Text>No has realizado ninguna compra</Text>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={orders.price}
          renderItem={({ item }) => <OrderContainer order={item} />}
          ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
          onRefresh={handleRefresh}
          refreshing={refreshing}
        />
      )}
    </View>
  );
};
export default Orders;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 50,
  },
});
