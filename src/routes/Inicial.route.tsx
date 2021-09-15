import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DadosContextProvider } from '../context/DadosContextProvider';
import Produtos from '../screens/Produtos';
import Resumo from '../screens/Resumo';

type RootStackParamList = {
    Produtos: undefined;
    Resumo: undefined;
  };

export default function App() {
    const Stack = createStackNavigator<RootStackParamList>();
    return (
        <DadosContextProvider> 
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerBackTitleVisible: false }} initialRouteName="Produtos" >
                    <Stack.Screen name="Produtos" component={Produtos} />
                    <Stack.Screen name="Resumo" component={Resumo} />
                </Stack.Navigator>
            </NavigationContainer>
        </DadosContextProvider>
    );
}

