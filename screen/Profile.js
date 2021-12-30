import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector , useDispatch } from "react-redux";

const Profile = () => {
    const {name , age ,id} = useSelector((state)=>{
        return state;
    });
    const dispatch = useDispatch()
    const updateAge = (age) =>{
        dispatch({
            type:"UPDATE_AGE",
            payload:age
        })
    }   
    const updateName = (name) =>{
        dispatch({
            type:"UPDATE_NAME",
            payload:name
        })
    }

    return (

        <View>
            <Text>{id}</Text>
            <Text>{name}</Text>
            <Text>{age}</Text>
            <TouchableOpacity onPress={()=>{
                    updateAge(40)
            }}>
                <Text>Update Age</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                    updateName("Inshal")
            }}>
                <Text>Update Name</Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})
