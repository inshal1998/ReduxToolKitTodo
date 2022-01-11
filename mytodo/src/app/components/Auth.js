import React, { useState } from 'react'
import { signUpUser,signInUser } from "../../reudux/reducers/authReducer";
import { useSelector , useDispatch } from "react-redux";
function Auth() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [auth, setauth] = useState('Sign In')
    const {laoding , error} = useSelector(state =>state.user)

    console.log(laoding,error);

    const dispatch = useDispatch()
    const Authenticate = ()=>{
        if(auth === 'Sign In'){
            dispatch(signInUser({email , password}))
        }else{
            dispatch(signUpUser({email , password}))
        }
    }

    return (
        <div>
            {
                laoding &&
                    <div className="progress">
                        <div className="indeterminate"></div>
                    </div>
            }
            <h1>Please {auth} !</h1>
            {
                error &&
                    <h5>Hii {error}</h5>
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
