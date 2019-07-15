import React, { useState } from "react";
import {
  Button,
  TextInput,
  StyleSheet,
  View,
  AsyncStorage
} from "react-native";
import { StackGestureContext } from "react-navigation";
import CButton from "../Componetns/CustomComponents/Button.js";
import FloatingLabelInput from "../Componetns/CustomComponents/TextInput.js";

export default function EditTodo() {
  const [text, setText] = useState("");

  function handleTextChange(newText) {
    setText(newText);
  }

  return (
    <View style={styles.container}>
      <FloatingLabelInput
        style={{ margin: 10 }}
        label="목록을 입력하세요"
        value={text}
        onChangeText={handleTextChange}
      />
      <CButton title={"추가하기"} onPress={onPressButton} />
    </View>
  );

  function onPressButton() {
    setText("");
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  btn: {
    color: "#841584",
    backgroundColor: "#333333",
    borderColor: "#333333",
    borderWidth: 1
  }
});
