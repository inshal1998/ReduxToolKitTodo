import React, { useState } from 'react'
import { signUpUser } from "../../reudux/reducers/authReducer";
import { useSelector , useDispatch } from "react-redux";
function Auth() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [auth, setauth] = useState('Sign In')
    const dispatch = useDispatch()
    const {laoding , error} = useSelector(state =>state.user)
    const Authenticate = ()=>{
        if(auth ==='Sign In'){
        }else{
            dispatch(signUpUser({email , password}))
        }
    }
    return (
        <div>
            {
                laoding &&
                <div class="progress">
                    <div class="indeterminate"></div>
                </div>
            }
            <h1>Please {auth}</h1>
            {error &&
                <h5>{error}</h5>
            }
            <input
                type='email'
                value={email}
                onChange={(e)=>{
                    setemail(e.target.value)
                }}
            />
            <input
                type='password'
                value={password}
                onChange={(e)=>{
                    setpassword(e.target.value)
                }}
            />
            <button className='btn' onClick={()=>{Authenticate()}} >{auth}</button>
            {
                auth === 'Sign In'?
                    <h6 onClick={()=>{setauth('Sign Up')}}>Dont Have An Account </h6> :
                    <h6 onClick={()=>{setauth('Sign In')}}>Already Have An Account </h6>
            }
        </div>
    )
}

export default Auth
