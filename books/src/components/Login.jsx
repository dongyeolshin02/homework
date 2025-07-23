import React, { Fragment, useEffect, useState } from 'react';
import '../assets/css/login.css'
function Login({users, goLogin, selected, setSelected, logined} ) {

    const loginEvent = () =>{
        goLogin();
    }

    return (
        <Fragment>
            <header className='header'>
                <select className='select form-control'  value={selected}
                    onChange={(e)=>setSelected(e.target.value)}>
                    {
                        users.map( (user, i)=>(
                            <option key={user.name} 
                            value={user.name}>{user.name}</option>
                        ))
                    }
                </select>
                <div>
                    <button className='btn btn-success' 
                       onClick={loginEvent}>로그인</button>
                </div>
                <div>
                {logined ? logined.name : '로그인'}
                </div>
            </header>
        </Fragment>
    );
}

export default React.memo(Login);