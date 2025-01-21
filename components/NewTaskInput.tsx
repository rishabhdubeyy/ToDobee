import { View, Text, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Task } from "@/app";
import Entypo from '@expo/vector-icons/Entypo';

type NewTaskInputProps = {
    onAdd:(newTask: Task) => void;
}

export default function NewTaskInput({ onAdd }: NewTaskInputProps) {
  const [newTask, setNewTask] = useState("");
  return (
    <View style={styles.taskContainer}>
      <Entypo name="plus" size={24} color="black" />
      <TextInput
        value={newTask}
        onChangeText={setNewTask}
        style={styles.input}
        placeholder="Add Todo..."
        onEndEditing={() => {
          if (newTask.trim() === "") return;
          onAdd({ title: newTask, isFinished: false });
          setNewTask("");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 30,
  },
  input: {
    fontFamily: "Inter",
    fontWeight: "600",
    color: "dimgray",
    flex: 1,

    
  },
});
