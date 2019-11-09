import {createStackNavigator, createAppContainer } from "react-navigation";
import Menu from "./screens/Menu";
import Game from "./screens/Game";

const Root = createStackNavigator({
  Menu: { screen: Menu },
  Game: { screen: Game },
});

const App = createAppContainer(Root);

export default App;
