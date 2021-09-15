import React from 'react'
import {View, Text, StyleSheet} from  'react-native'
import { useDados } from '../../hooks/UseDados';

export default function Resumo() {
    const { produtos } = useDados()
    return (
        <View style={styles.container}>
        {produtos?.map( (prod:string, index: string) => <Text key={index} style={{color: 'black', fontSize: 20, padding: 10}}>{prod}</Text>)}
          
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
  });
  
