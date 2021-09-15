import React, {  createContext, ReactNode } from 'react';
import { useState } from 'react';
import { Alert } from 'react-native'



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

        } catch (error) {
         
            Alert.alert('Erro', error)
           
        }
    }


    async function adicionarProdutos(produto: string){
        setProdutos(oldArray => [...oldArray, produto])
    }

    return (
        <DadosContext.Provider value={{ produtos, setProdutos, limparTudo, adicionarProdutos}}>
            {props.children}
        </DadosContext.Provider>
    )

}