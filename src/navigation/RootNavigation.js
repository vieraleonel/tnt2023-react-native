import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { ChatScreen } from "../screens/ChatScreen";
import { ROUTES } from "./routes";
import { ImageScreen } from "../screens/ImageScreen";
import { VoiceScreen } from "../screens/VoiceScreen";

const Tab = createBottomTabNavigator();

const RootNavigation = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Tab.Screen name={ROUTES.CHAT} component={ChatScreen} />
      <Tab.Screen name={ROUTES.IMAGE} component={ImageScreen} />
      <Tab.Screen name={ROUTES.VOICE} component={VoiceScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export { RootNavigation };
