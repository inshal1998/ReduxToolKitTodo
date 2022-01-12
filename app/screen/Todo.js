import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { COLORS, SIZES } from '../utils/constant'

const Todo = () => {
    const [myTodo, setmyTodo] = useState('')
    return (
        <View style={styles.container}>
              <Text style={styles.authStyle}>Add New Task </Text>
            <TextInput
                placeholder='Add Todo'
                placeholderTextColor={COLORS.gray1}
                style={styles.txtInput}
            />
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.authtxt}>Add Todo</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Todo

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.white,
        alignItems:'center'
    },
    authStyle:{
        fontSize:SIZES.h1,
        color:COLORS.gray1,
        padding:SIZES.padding
    },
    txtInput:{
        borderWidth:1,
        borderColor:COLORS.gray1,
        color:COLORS.gray,
        height:SIZES.height/15,
        width:SIZES.width/1.1,
        margin:10,
        textAlign:'center',
        borderRadius:7,  
    },
    btn:{
        backgroundColor:COLORS.blue,
        height:SIZES.height/15,
        marginVertical:7,
        width:SIZES.width/1.1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7,
    },
    authtxt:{
        fontSize:SIZES.h3,
        color:COLORS.black
    },
})
