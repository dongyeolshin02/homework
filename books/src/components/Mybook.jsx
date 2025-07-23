import React from 'react';
import '../assets/css/mybook.css';
function Mybook(props) {
    return (
        <>
       
         <div className='my-list'>
            <hedaer>
                <h3>대여 목록</h3>
            </hedaer>
            <div className='borrow-list'></div>
         </div>   
        </>
    );
}

export default Mybook;