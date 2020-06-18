import React from 'react';
import PropTypes from 'prop-types';

Profile.propTypes = {
    
};

function Profile(props) {
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
                    <h4>NguyenMINHqUANG</h4>
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
                <img alt="noimg" src="https://images.unsplash.com/photo-1592190356671-304f26555907?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                <img alt="noimg" src="https://images.unsplash.com/photo-1592190356671-304f26555907?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                <img alt="noimg" src="https://images.unsplash.com/photo-1592190356671-304f26555907?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                <img alt="noimg" src="https://images.unsplash.com/photo-1592190356671-304f26555907?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                <img alt="noimg" src="https://images.unsplash.com/photo-1592190356671-304f26555907?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                <img alt="noimg" src="https://images.unsplash.com/photo-1592190356671-304f26555907?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
            </div>
        </div>
        
    );
}

export default Profile;