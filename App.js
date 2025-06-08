import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import options from '../cardapio_japones/utils/screenOptions';
import Inicio from './components/inicio/inicio';
import Categoria from './components/categoria';




const Aba = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Aba.Navigator screenOptions={options}>
        <Aba.Screen name="Início" component={Inicio} />
        <Aba.Screen name="Roll" component={Categoria} initialParams={{categoria: "roll"}} />
        <Aba.Screen name="Sushi" component={Categoria} initialParams={{categoria: "sushi"}} />
        <Aba.Screen name="Yakitori" component={Categoria} initialParams={{categoria: "yakitori"}} />
        <Aba.Screen name="Yakisoba" component={Categoria} initialParams={{categoria: "yakisoba"}} />
        <Aba.Screen name="Sashimi" component={Categoria} initialParams={{categoria: "sashimi"}} />
        <Aba.Screen name="Temaki" component={Categoria} initialParams={{categoria: "temaki"}} />
        <Aba.Screen name="Cogumelos" component={Categoria} initialParams={{categoria: "cogumelos"}} />
        <Aba.Screen name="Gyoza" component={Categoria} initialParams={{categoria: "gyoza"}} />
        <Aba.Screen name="Tempura" component={Categoria} initialParams={{categoria: "tempura"}} />
      </Aba.Navigator>
    </NavigationContainer>   
  );
}

