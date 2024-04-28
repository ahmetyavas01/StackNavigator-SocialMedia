import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Profile from "./screens/Profile";

const Stack = createNativeStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{
                headerShadowVisible : false
            }} />
            <Stack.Screen name="Profile" component={Profile}  options={{
                headerShadowVisible : false
            }} />
        </Stack.Navigator>
    );
}
