import { Stack } from "expo-router";
import { Children, useState } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  FlatList,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import NewTaskInput from "@/components/NewTaskInput";
import { SafeAreaView } from "react-native-safe-area-context";

export type Task = {
  title: string;
  isFinished: boolean;
};

const dummytask: Task[] = [
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
  const [tasks, setTasks] = useState<Task[]>(dummytask);

  const onItemPressed = (index: number) => {
    setTasks((currentTasks) => {
      const updatedTasks = [...currentTasks];
      updatedTasks[index].isFinished = !updatedTasks[index].isFinished;
      return updatedTasks;
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={"height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={30}
    >
      <SafeAreaView style={styles.page}>
        <ScrollView>
          <View>
            <FlatList
              data={tasks}
              scrollEnabled={false}
              contentContainerStyle={{ gap: 5, padding: 20, }}
              renderItem={({ item, index }) => (
                <Pressable
                  onPress={() => onItemPressed(index)}
                  style={styles.taskContainer}
                >
                  <MaterialIcons
                    name={
                      item.isFinished ? "check-box" : "check-box-outline-blank"
                    }
                    size={24}
                    color="dimgray"
                  />
                  {/* <MaterialIcons name="check-box" size={24} color="black" /> */}
                  <Text
                    style={[
                      styles.taskTitle,
                      {
                        textDecorationLine: item.isFinished
                          ? "line-through"
                          : "none",
                      },
                    ]}
                  >
                    {item.title}
                  </Text>
                </Pressable>
              )}
              ListFooterComponent={() => (
                <NewTaskInput
                  onAdd={(newTodo: Task) =>
                    setTasks((currentTask) => [...currentTask, newTodo])
                  }
                />
              )}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
  },
  taskContainer: {
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  taskTitle: {
    fontFamily: "Inter",
    fontWeight: "600",
    color: "dimgray",
  },
});
