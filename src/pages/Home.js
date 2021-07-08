import React, {useState} from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MyButton } from 'C:/Users/Cliente/Documentos/DDM/calculadora/src/components/MyButton';

let estados = {
    valorTela: '',
    resultado: 0,
}

export function Home() {

    const [valTela, setValTela] = useState(estados.valorTela);
    const [valResult, setValResult] = useState(estados.resultado);

    const addDig=(n)=>{
        estados.valorTela = estados.valorTela + n;
        setValTela(estados.valorTela);
        setValResult(estados.resultado);
    }

    const limpar=()=>{
        estados = {
            valorTela: '',
            resultado: 0,
        }
        setValTela(0);
        setValResult(0);
    }

    const operacao=(n)=>{
        if(n=='AP'){
            estados.valorTela=valTela.substring(0, (valTela.length-1));
            setValTela(estados.valorTela);
            return
        }
        try{
            estados.resultado=eval(estados.valorTela);
            setValResult(estados.resultado);
        }catch{
            estados.resultado='0';
            estados.valorTela='';
            setValResult(estados.resultado);
            setValTela(estados.valorTela)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.display}>
                <TextInput
                    style={styles.textOpe}
                    value={String(valTela)}
                    onChangeText={(texto) => {setValTela(texto)}}
                    showSoftInputOnFocus={false}
                ></TextInput>

                <TextInput
                    style={styles.textRes}
                    value={String(valResult)}
                    showSoftInputOnFocus={false}
                ></TextInput>
            </View>

            <View style={styles.containerBtns}>
                <View>
                    <MyButton nome="7" clicar={()=> {addDig('7')}}></MyButton>
                    <MyButton nome="4" clicar={()=> {addDig('4')}}></MyButton>
                    <MyButton nome="1" clicar={()=> {addDig('1')}}></MyButton>
                    <MyButton nome="0" clicar={()=> {addDig('0')}}></MyButton>
                </View>
                <View>
                    <MyButton nome="8" clicar={()=> {addDig('8')}}></MyButton>
                    <MyButton nome="5" clicar={()=> {addDig('5')}}></MyButton>
                    <MyButton nome="2" clicar={()=> {addDig('2')}}></MyButton>
                    <MyButton nome="00" clicar={()=> {addDig('00')}}></MyButton>
                </View>
                <View>
                    <MyButton nome="9" clicar={()=> {addDig('9')}}></MyButton>
                    <MyButton nome="6" clicar={()=> {addDig('6')}}></MyButton>
                    <MyButton nome="3" clicar={()=> {addDig('3')}}></MyButton>
                    <MyButton nome="." clicar={()=> {addDig('.')}}></MyButton>
                </View>
                <View>
                    <MyButton nome="%" clicar={()=> {addDig('%')}}></MyButton>
                    <MyButton nome="x" clicar={()=> {addDig('x')}}></MyButton>
                    <MyButton nome="+" clicar={()=> {addDig('+')}}></MyButton>
                </View>
                <View>
                    <MyButton nome="CE/C" clicar={()=> {limpar()}}></MyButton> 
                    <MyButton nome="<" clicar={()=> {operacao('AP')}}></MyButton>
                    <MyButton nome="/" clicar={()=> {addDig('/')}}></MyButton>
                    <MyButton nome="-" clicar={()=> {addDig('-')}}></MyButton>
                    <MyButton nome="=" clicar={()=> {operacao('IG')}}></MyButton>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 40,
        backgroundColor: '#FFF',
    },

    display: {
        backgroundColor: '#888',
        padding: 10,

    },
    textOpe: {
        fontSize: 25,
        color: '#FFF',
        textAlign: 'right'
    },
    textRes: {
        fontSize: 50,
        color: '#FFF',
        textAlign: 'right',
    },

    containerBtns: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
});