import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import About from "./src/screens/About";
import Home from "./src/screens/Home"
import Lose from "./src/screens/Lose";
import Question from "./src/screens/Question";
import Win from "./src/screens/Win";
import { store } from "./src/store/store";

export default function App() {
  
const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Question" component={Question} />
        <Stack.Screen name="Win" component={Win} />
        <Stack.Screen name="Lose" component={Lose} />
        <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  
  );
}
