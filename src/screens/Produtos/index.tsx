import React, { useState, useEffect } from 'react'
import { TouchableOpacity } from 'react-native'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { useDados } from '../../hooks/UseDados'
import { useNavigation } from "@react-navigation/native";

export default function Produtos() {
  const [produto, setProduto] = useState('')
  const { produtos, setProdutos, adicionarProdutos } = useDados()
  const navigation = useNavigation()

  function adicionarProdutoAoContextoDeProdutos(){

      if(produto){
        adicionarProdutos(produto)
        setProduto('')
      }
  }

  useEffect(() => {

  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>Vamos adicionar alguns produtos?</Text>
        <Text>Vode possui {produtos?.length} em seu context</Text>
      </View>
      <View style={styles.product}>
       <TextInput style={styles.input} value={produto}  onChangeText={(text) => setProduto(text)} ></TextInput>
       <TouchableOpacity onPress={adicionarProdutoAoContextoDeProdutos} style={styles.button}>
         <Text style={{fontSize: 20}}>+</Text>
       </TouchableOpacity>
      </View>
      <View style={styles.detail}>
      <TouchableOpacity onPress={() => navigation.navigate('Resumo')}  style={[styles.button, {width: 250}]}>
         <Text style={{fontSize: 12}}>Quero ver meus produtos em outra tela</Text>
       </TouchableOpacity>
      </View>

      <TextInput />
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
  },
  input: {
    height: 40,
    width: 250,
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'pink'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    borderRadius: 10,
    width: 40,
    height: 40,
  },
  product: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  detail: {
    flex: 1,
  }
});
