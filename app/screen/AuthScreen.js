import React ,{useState}from 'react'
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native'
import { sin } from 'react-native/Libraries/Animated/Easing';
import { COLORS , SIZES } from "../utils/constant";
const AuthScreen = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [auth, setauth] = useState('Sign In')
    return (
        <View style={styles.container}>
            <Text style={styles.authStyle}> Please {auth}</Text>
            <TextInput
                keyboardType='email-address'
                placeholder='Enter Email'
                placeholderTextColor={COLORS.gray1}
                style={styles.txtInput}
                onChangeText={(text)=>{setemail(text)}}
                value={email}
            />
            <TextInput
                secureTextEntry={true}
                placeholder='Enter Password'
                placeholderTextColor={COLORS.gray1}
                style={styles.txtInput}
                onChangeText={(password)=>{setpassword(password)}}
                value={password}
            />
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.authtxt}>{auth}</Text>
            </TouchableOpacity>
            {
                auth === "Sign In" ? 
                <TouchableOpacity style={styles.toggleTxt} onPress={()=>{setauth('Sign Up')}}>
                    <Text style={styles.tgltxt}> Dont Have An Account Sign Up</Text>
                </TouchableOpacity> :
                <TouchableOpacity style={styles.toggleTxt}  onPress={()=>{setauth('Sign In')}}>
                    <Text style={styles.tgltxt}>Already Have An Account Sign In</Text>
                </TouchableOpacity> 
        
            }
        
        </View>
    )
}

export default AuthScreen

const styles = StyleSheet.create({
    container:{
        height:SIZES.height,
        justifyContent:'center',
        alignItems:'center',
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
    authStyle:{
        fontSize:SIZES.h1,
        color:COLORS.gray1,
        paddingBottom:SIZES.padding
    },
    toggleTxt:{
        paddingTop:10,
    },
    tgltxt:{
        fontSize:SIZES.h3
    }
})
