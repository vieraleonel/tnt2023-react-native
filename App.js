import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChatScreen } from "./ChatScreen";
import { ROUTES } from "./routes";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name={ROUTES.HOME} component={HomeScreen} />
        <Tab.Screen name={ROUTES.CHAT} component={ChatScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
