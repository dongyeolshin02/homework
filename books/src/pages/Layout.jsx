import React, { useCallback, useEffect, useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/layout.css'
import Login from '../components/Login';
import {User, Book} from '../store';
import Mybook from '../components/Mybook';
import BookList from '../components/BookList';


const bookReducer = (state, action) =>{
    
}

function Layout(props) {
    const [users, setUsers ] = useState([]);
    const [selected, setSelected] = useState('');
    const [logined, setLogined] = useState(null);

    const [bookList, dispatch] = useReducer(bookReducer,
        [
            new Book(new Date(), '무궁화꽃이 피었습니다', false ),
            new Book(new Date(), '퇴마록', false ),
            new Book(new Date(), '거미', false ),
        ]
    );

    //처음이자 마지막으로 실행
    useEffect(()=>{
        const users = [
            new User('김철수', [], false),
            new User('김영희', [], false),
        ];
        setUsers(users);
        setSelected(users[0].name);
    },[]);

    //사용자가 바뀔때마다  실행 
    useEffect (()=>{
        if(logined) {
            console.log('33');
        }
    }, [logined]);


    const loginUser = useCallback(() =>{
        const user = users.find(user => user.name === selected);
        setLogined(user);
    },[users, selected])



    return (
        <div>
            <main className='container'>
                <section className='contents'>
                <section className='text-center mb-4'>
                    <div>
                        <h2>도서 관리 프로그램</h2>
                    </div>
                </section>  
                <Login users={users}  goLogin ={loginUser} selected={selected}  setSelected={setSelected} logined={logined}/>
                <Mybook />
                <BookList/>
                </section>
            </main>
        </div>
    );
}

export default Layout;