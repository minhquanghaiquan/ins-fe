import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css'
import {UserContext} from '../../App'
SignIn.propTypes = {
    
};

function SignIn(props) {
    const history = useHistory()
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    const {state,dispatch} = useContext(UserContext)

    const PostData = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "invalid email",classes:"#c62828 red darken-3"})
            return
        }
        fetch("http://localhost:5000/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
                // pic:url
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data);
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
                dispatch({type:"USER",payload:data.user})
                M.toast({html:"signedin success",classes:"#43a047 green darken-1"})
                history.push('/')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    
    return (
        <div className="mycard">
            <h2>Instagram</h2>
            <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e)=>setPasword(e.target.value)}
            />
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
            onClick={()=>PostData()}
            >
                Login
            </button>
            <h5>
                <Link to="/signup">Dont have an account ?</Link>
            </h5>
            <h6>
                <Link to="/reset">Forgot password ?</Link>
            </h6>
    
        </div>
    );
}

export default SignIn;