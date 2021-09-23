import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { useDados } from '../../hooks/UseDados';

export default function Resumo() {
  const { produtos, removeItemFromProdutos } = useDados()


  return (
    <ScrollView >

      {produtos?.map((prod: string, index: string) =>
        <View key={index} style={{width: '90%', flexDirection: 'row', justifyContent: 'space-between', top: 40}}>
          <Text  style={{ color: 'black', fontSize: 20, padding: 10 }}>{prod}</Text>
          <TouchableOpacity  style={{justifyContent: 'center', backgroundColor: 'gray', height: 35, borderRadius: 5}} onPress={() => removeItemFromProdutos(prod)}>
            <Text style={{padding: 10}}>Remover</Text>
          </TouchableOpacity>
        </View>


      )}
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

