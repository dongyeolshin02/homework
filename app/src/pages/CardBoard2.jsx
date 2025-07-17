import React, { useReducer } from 'react';
import '../assets/css/cards.css'
import Card from '../components/Card';

function CardBoard2(props) {

    const actionReducer = (state, action) =>{
         switch(action.type) {
            case 'create' :
                return  Array.from({length :5}, ()=> Math.floor( Math.random() * 20)  + 1);
            case 'delete':
                return [];
         }
    }

    const [cardList, dispatch] = useReducer(actionReducer, []);


    const updateCard = (action) =>{
        dispatch({type: action});
    }

    return (
       <div>
            <main className='container'>
                <section className='contents'>
                    {
                         cardList?.map((cardNum, index)=>(
                            <Card key={index}>
                                <p style={{color :'white'}}>
                                    {cardNum}
                                </p>
                            </Card>
                         ))
                    }
                </section>
                <section className='btn-box'>
                    <button type='button' className='btn' onClick={()=> updateCard('create')}>생성</button>
                    <button type='button' className='btn' onClick={()=> updateCard('delete')}>삭제</button>
                </section>
            </main>
        </div>
    );
}

export default CardBoard2;