import * as WebBrowser from "expo-web-browser";
import React, { useState, useEffect } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import uuid from "react-native-uuid";
import EditTodo from "./EditTodo.js";
import List from "./list.js";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default function HomeScreen() {
  const [todolist, setTodolist] = useState({
    ["id"]: { title: "null", isDone: false }
  });

  function onPressAdd(str) {
    setTodolist({ ...todolist, ["id2"]: { title: "new", isDone: false } });
    alert(todolist);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>TodoList</Text>
      <EditTodo onPressAdd={onPressAdd} />
      <List />
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch"
  },
  Title: {
    flex: 2,
    marginTop: 100,
    fontSize: 50,
    color: "#4087d6",
    textAlign: "center"
  }
});
