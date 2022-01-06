import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useSelector , useDispatch } from "react-redux";
const Profile = () => {

   const {name,age,status}= useSelector((state)=>{
       return state
   })

   const dispatch = useDispatch()

   const updateName = (name)=>{
       dispatch({
           type:'CHANGE_NAME',
           payload:name
       })
   }


    return (
        <View>
            <Text>{name}</Text>
            <Text>{age}</Text>
            <Text>{status}</Text>
            <Button title='Update Name' onPress={()=>{updateName("Ansari")}}/>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})
