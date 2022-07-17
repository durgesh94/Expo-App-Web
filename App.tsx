import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/screens/Home";
import { Restaurant } from "./src/screens/Restaurant";
import { Provider } from "react-redux";
import { store } from "./src/data/store";
import { Cart } from "./src/screens/Cart";
import { Preparing } from "./src/screens/Preparing";
import { Delivery } from "./src/screens/Delivery";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Provider store={store}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
            />
            <Stack.Screen
              name="Restaurant"
              component={Restaurant}
            />
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={{
                presentation: "modal",
                headerShown: false
              }}
            />
            <Stack.Screen
              name="Preparing"
              component={Preparing}
              options={{
                // presentation: 'fullScreenModal', //lottie-react-native not support
                headerShown: false
              }}
            />
            <Stack.Screen
              name="Delivery"
              component={Delivery}
              options={{
                headerShown: false
              }}
            />
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}