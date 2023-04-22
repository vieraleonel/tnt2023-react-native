import AsyncStorage from "@react-native-async-storage/async-storage";

const getTextResponsesCount = async () => {
  const count = await AsyncStorage.getItem("text-responses-count");
  return count === null ? 0 : parseInt(count);
};

const incrementTextResponsesCount = async () => {
  const currentCount = await getTextResponsesCount();
  const newValue = (currentCount + 1).toString();
  return AsyncStorage.setItem("text-responses-count", newValue);
};

export { getTextResponsesCount, incrementTextResponsesCount };
