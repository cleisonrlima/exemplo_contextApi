import React, {  createContext, ReactNode , useEffect} from 'react';
import { useState } from 'react';
import { Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


//isso vc ignora.. vc nao vai usar typagem no JS
type DadosProps = {
    children: ReactNode
}

export const DadosContext = createContext({} as any)

export function DadosContextProvider(props: DadosProps) {



    const [produtos, setProdutos] = useState<string[]>([]);

    //funcoies como autenticacao... logout... pode fazer aqui
    async function limparTudo() {
        try {
           setProdutos([])
           await AsyncStorage.removeItem('@tiozim-delivery:produtos')
        } catch (error) {
            Alert.alert('Erro')
        }
    }

    async function removeItemFromProdutos(produto: string){
        let newArray = produtos.filter(e => e != produto);
        await AsyncStorage.setItem('@tiozim-delivery:produtos', JSON.stringify(newArray))
        setProdutos(newArray)
    }


    async function adicionarProdutos(produto: string){

        let array = await AsyncStorage.getItem('@tiozim-delivery:produtos');
        
        if(array){
          const newArray = [...JSON.parse(array!), produto]
          setProdutos(newArray)
          await AsyncStorage.setItem('@tiozim-delivery:produtos', JSON.stringify(newArray))
        }else{
           
            const array = [produto]
            await AsyncStorage.setItem('@tiozim-delivery:produtos', JSON.stringify(array))
            setProdutos(array)
        }

      
        
    }

    useEffect(() => {
      
        async function loadStorage(){
            const data = await AsyncStorage.getItem('@tiozim-delivery:produtos')
            console.log(data)
            if(data){
                setProdutos(JSON.parse(data))
            }
        }

        loadStorage()
        
    }, [])

    return (
        <DadosContext.Provider value={{ produtos, setProdutos, limparTudo, adicionarProdutos, removeItemFromProdutos}}>
            {props.children}
        </DadosContext.Provider>
    )

}