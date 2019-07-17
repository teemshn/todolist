import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  AsyncStorage,
  View
} from "react-native";
import { StackGestureContext } from "react-navigation";
import CButton from "../Componetns/CustomComponents/Button.js";
import { ListItem, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import TouchableScale from "react-native-touchable-scale"; // https://github.com/kohver/react-native-touchable-scale

export default function ListContainer() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <_ListItem title="todolist1" />
        <_ListItem title="todolist1ewqf" />
        <_ListItem title="wefwefewfwef" />
      </ScrollView>
    </View>
  );
}

function _ListItem(props) {
  return (
    <View style={styles.listItem}>
      <Button
        icon={<Icon name="check" size={15} color="#e3e3e3" />}
        buttonStyle={styles.listButton}
      />
      <ListItem
        {...props}
        style={{ flex: 2, margin: -5 }}
        titleStyle={{ color: "black", fontWeight: "bold" }}
        subtitleStyle={{ color: "black" }}
      />
      <Button
        icon={<Icon name="edit" size={15} color="#4087d6" />}
        buttonStyle={styles.listButton}
      />
      <Button
        icon={<Icon name="remove" size={15} color="#4087d6" />}
        buttonStyle={styles.listButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    borderColor: "#4087d6",
    borderWidth: 0.5,
    margin: 15,
    borderRadius: 20,
    flexDirection: "column",
    padding: 20
  },
  listItem: {
    flex: 1,
    flexDirection: "row"
  },
  listButton: {
    backgroundColor: "white",
    margin: 5
  }
});
