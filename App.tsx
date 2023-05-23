import React, { useEffect, useState } from "react";
import { Provider, useDispatch } from "react-redux";
import { useRoute } from "@react-navigation/native";

import { store } from "./src/redux/store";
import RootNavigation from "./src/components/Root-Navigation/RootNavigation";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  // const route = useRoute();
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
