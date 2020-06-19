import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import {UserContext} from '../../App'

Profile.propTypes = {
    
};

function Profile(props) {
    const [mypics,setPics] = useState([])
    const {state,dispatch} = useContext(UserContext)
    const [image,setImage] = useState("")

    useEffect(()=>{
        fetch('http://localhost:5000/mypost',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setPics(result.mypost)
        })
     },[])






    return (
        <div style = {{maxWidth:"550px", margin:"0px auto"}}>
            <div style= {{
                display: 'flex',
                justifyContent: 'space-around',
                margin: '18px 0px'
            }}>
                <div>
                    <img 
                        style= {{width:"160px", height: "160px", borderRadius:"80px"}} 
                        src="https://images.unsplash.com/photo-1592190356671-304f26555907?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                        alt="noimage"
                    />
                </div>
                <div>
                    <h4>{state? state.name: 'loading'}</h4>
                    <div 
                        style = {{display: 'flex',
                        justifyContent:'space-between', width:'108%'}}>
                            <h6>40 posts</h6>
                            <h6>40 followers</h6>
                            <h6>40 following</h6>
                    </div>
                </div>
            </div>
        
            <div className="gallery">
                {
                   mypics.map(item=>{
                       return(
                        <img key={item._id} className="item" src={item.photo} alt={item.title}/>  
                       )
                   })
               }
            </div>
        </div>
        
    );
}

export default Profile;