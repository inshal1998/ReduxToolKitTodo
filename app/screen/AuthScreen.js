import React ,{useState}from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'

const AuthScreen = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [auth, setauth] = useState('Sign In')
    return (
        <View style={styles.container}>
            <TextInput
                keyboardType="email"
                placeholder="Hello"
                sty
/>
        </View>
    )
}

export default AuthScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#efefef"
    }
})
