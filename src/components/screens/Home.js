import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {UserContext} from '../../App'
import {Link} from 'react-router-dom'

Home.propTypes = {
    
};

function Home(props) {
    const [data,setData] = useState([])
    const {state,dispatch} = useContext(UserContext)

    useEffect(()=>{
        fetch('http://localhost:5000/allpost',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            setData(result.posts)
        })
     },[])

    return (
        <div className="home">

            {
                data.map(item => {
                    return (
                        <div className="card home-card">
                            <h5>{item.postedBy.name}</h5>

                            <div className="card-image">
                                <img alt="noimg" src={item.photo} />
                            </div>

                            <div className="card-content">
                                <i className="material-icons">favorite</i>
                                <h6>{item.title}</h6>
                                <p>{item.body}</p>
                                <input type="text" placeholder="add commennt" />
                            </div>
                        </div>

                    )
                })
            }
       </div>
    );
}

export default Home;