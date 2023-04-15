import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { TextScreen } from "../screens/TextScreen";
import { ROUTES } from "./routes";
import { ImageScreen } from "../screens/ImageScreen";
import { VoiceScreen } from "../screens/VoiceScreen";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

const Tab = createBottomTabNavigator();

const CustomTabBarIcon = ({ focused, iconName, label }) => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      gap: 5,
      backgroundColor: focused ? "black" : "transparent",
      padding: 10,
      borderRadius: 30,
      height: 40,
    }}
  >
    <Ionicons name={iconName} size={20} color={focused ? "white" : "#72777A"} />
    {focused && <Text style={{ color: "white" }}>{label}</Text>}
  </View>
);

const RootNavigation = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon
              focused={focused}
              iconName="home"
              label="INICIO"
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.TEXT}
        component={TextScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon
              focused={focused}
              iconName="chatbubbles-sharp"
              label="TEXTO"
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.IMAGE}
        component={ImageScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon
              focused={focused}
              iconName="image"
              label="IMAGEN"
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.VOICE}
        component={VoiceScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabBarIcon focused={focused} iconName="mic" label="VOZ" />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export { RootNavigation };
