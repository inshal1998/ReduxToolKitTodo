import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector , useDispatch } from "react-redux";
import {updateId , updateName , updateAge}  from "../redux/actions/useActions";
const Profile = () => {
    const {name , age ,id} = useSelector((state)=>{
        return state;
    });

    const dispatch = useDispatch()
    
    const changeAge = (age) =>{
        dispatch(updateAge(age))
    }   
    const changeName = (name) =>{
        dispatch(updateName(name))
    }

    const changeId  = (id) =>{
        dispatch(updateId(id))
    }

    return (

        <View>
            <Text>ID : {id}</Text>
            <Text>Name :{name}</Text>
            <Text>Age : {age}</Text>
            <TouchableOpacity onPress={()=>{
                    changeAge(40)
            }}>
                <Text>Update Age</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                    changeName("Inshal")
            }}>
                <Text>Update Name</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                    changeId(10)
            }}>
                <Text>Update ID</Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})
