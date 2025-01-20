import { Stack } from "expo-router";
import { useState } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  FlatList,
  View,
  TextInput,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const dummytask = [
  {
    title: "Some task 1",
    isFinished: true,
  },
  {
    title: "Some task 1",
    isFinished: false,
  },
  {
    title: "Some task 1",
    isFinished: false,
  },
  {
    title: "Some task 1",
    isFinished: false,
  },
  {
    title: "Some task 1",
    isFinished: false,
  },
];

export default function HomeScreen() {
  const [tasks, setTasks] = useState(dummytask);
  const [newTask, setNewTask] = useState('');

  const onItemPressed = (index: number) => {
    setTasks((currentTasks) => {
      const updatedTasks = [...currentTasks];
      updatedTasks[index].isFinished = !updatedTasks[index].isFinished;
      return updatedTasks;
    });
  };
  return (
    <View style={styles.page}>
      <FlatList
        data={tasks}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => onItemPressed(index)}
            style={styles.taskContainer}
          >
            <MaterialIcons
              name={item.isFinished ? "check-box" : "check-box-outline-blank"}
              size={24}
              color="dimgray"
            />
            {/* <MaterialIcons name="check-box" size={24} color="black" /> */}
            <Text
              style={[
                styles.taskTitle,
                {
                  textDecorationLine: item.isFinished ? "line-through" : "none",
                },
              ]}
            >
              {item.title}
            </Text>
          </Pressable>
        )}
        ListFooterComponent={() => (
          <View style={styles.taskContainer}>
            <MaterialIcons
              name="check-box-outline-blank"
              size={24}
              color="gray"
            />
            <TextInput
              autoFocus
              value={newTask}
              onChangeText={setNewTask}
              style={styles.input}
              placeholder="Add Todo..."
              onEndEditing={() => {
                setTasks((currentTasks) => [
                  ...currentTasks,
                  {title: newTask, isFinished: false}
                ]);
              }}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 20,
    backgroundColor: "white",
    flex: 1,
  },
  taskContainer: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    // borderWidth: 1,
    // borderColor: 'gray',
  },
  taskTitle: {
    fontFamily: "Inter",
    fontWeight: "600",
    color: "dimgray",
  },
  input: {
    fontFamily: "Inter",
    fontWeight: "600",
    color: "dimgray",
    flex: 1,
  },
});
