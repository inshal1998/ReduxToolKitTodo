import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useSelector , useDispatch } from "react-redux";
import {changeStatus , changeAge , fetchName} from "../redux/actions/UserActions";
const Profile = () => {

   const {name,age,status}= useSelector((state)=> state)

   const dispatch = useDispatch()

   const updateName = ()=>{
       dispatch(fetchName())
    }  
    const updateAge = (age)=>{
        dispatch(changeAge(age))
    }
    const updateStatus = (status)=>{
        dispatch(changeStatus(status))
    }


    return (
        <View style={{
            padding:10,   
            justifyContent:'space-evenly'         
        }}>
            <Text>{name}</Text>
            <Text>{age}</Text>
            <Text>{status}</Text>
            <Button title='Update Name' onPress={()=>{updateName()}}/>
            <Button title='Update Age' onPress={()=>{updateAge(32)}}/>
            <Button title='Update Status' onPress={()=>{updateStatus('Gamer')}}/>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})
