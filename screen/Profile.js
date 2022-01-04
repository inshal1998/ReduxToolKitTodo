import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSelector , useDispatch } from "react-redux";
// import {updateId , updateAge , fetchName}  from "../redux/actions/useActions";
import {  updateAge , updateName , updateId } from "../redux/reducer/useReducer";
const Profile = () => {
    const {name , age ,id} = useSelector((state)=> state);

    const dispatch = useDispatch()
    
    const changeAge = (age) =>{
        console.log("Age Called");
        dispatch(updateAge(age))
    }  

    const changeName =(name) =>{
        console.log("Name Called");
        dispatch(updateName(name))
    }

    const changeId  = (id) =>{
        console.log("Id Called");
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
                changeName("Ansari")
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
