import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export function MyButton(props) {

    const styleBtn = [styles.btn]

    if(props.nome == "+") {
        styleBtn.push(styles.btnMais)
    }
    if(props.nome == "CE/C") {
        styleBtn.push(styles.btnInic)
    }

    return (
        <View>
            <TouchableOpacity style={styleBtn} onPress={props.clicar}>
                <Text style={styles.textBtn}>{props.nome}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: 73,
        height: 65,
        borderRadius: 10,
        margin: 2,
        backgroundColor: '#53545b',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtn: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFF',
    },
    btnMais: {
        height: 134,
    },
    btnInic: {
        backgroundColor: '#ff7900',
    }
});