import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from './selectors';
import { runGetData } from './example-slice';

const Home = () => {
    const dispatch = useDispatch()
    const data = useSelector(selectItems)

    useEffect(() => {
        dispatch(runGetData())
        console.log(data);
    }, [])

    return (
        <div>
            {
                data != null && data.length > 0
                    ? data.map(item => {
                        return (
                            <div key={item.id}>
                                <p>ID: {item.id}</p>
                                <p>Name: {item.name}</p>
                                <p>Price: {item.price}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                        )
                    })
                    : <p>No hay datos</p>
            }
        </div>
    )
}

export default Home