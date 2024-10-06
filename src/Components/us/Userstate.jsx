import React, { useState } from 'react'

export default function Us() {
    // container1
    const [num, setNum] = useState(() => { return 9 })
    const decrement = () => {
        if (num > 0) {
            setNum(prevNum => prevNum - 1);
        }
    }
    const increment = () => {
        setNum(prevNum => prevNum + 1);

    }
    // container2
    const [num2, setNum2] = useState(() => { return 8 })
    const decrement2 = () => {
        if (num2 > 0) {
            setNum2(prevNum => prevNum - 1);
            setNum2(prevNum => prevNum - 1);
        }
    }
    const increment2 = () => {
        setNum2(prevNum => prevNum + 1);
        setNum2(prevNum => prevNum + 1);
    }
    // container3
    const [num3, setNum3] = useState({ name: 'a', rollno: 1 });
    const [i, setI] = useState(0);

    const names = ['b', 'c', 'd', 'e', 'f'];

    const dec = () => {

        if (i > 0 && num3.rollno > 0) {
            setNum3((preValue) => ({
                ...preValue,
                name: names[i - 1],
                rollno: preValue.rollno - 1,
            }));
            setI(prev => prev - 1);
        }
    };

    const inc = () => {

        if (i < names.length - 1) {
            setNum3((preValue) => ({
                ...preValue,
                name: names[i + 1],
                rollno: preValue.rollno + 1,
            }));
            setI(prev => prev + 1);
        }
    };
    // container
    const [num4, setNum4] = useState(9);
    const [secondNum, setSecondNum] = useState(10);

    const decrement4 = () => {

        if (num4 > 0 && secondNum > 0) {
            setNum4(prevNum => prevNum - 1);
            setSecondNum(prevNum => prevNum - 1);
        }
    };

    const increment4 = () => {


        setNum4(prevNum => prevNum + 1);
        setSecondNum(prevNum => prevNum + 1);

    };

    return (

        <div>
            <div className='flex gap-2'>
                <div onClick={decrement}>-</div>
                <div>{num}</div>
                <div onClick={increment} >+</div>
            </div>

            <div className='flex gap-2'>
                <div onClick={decrement2}>-</div>
                <div>{num2}</div>
                <div onClick={increment2} >+</div>
            </div>

            <div className='flex gap-2'>
                <div onClick={dec}>-</div>
                <div>{num3.name}</div>
                <div>{num3.rollno}</div>
                <div onClick={inc}>+</div>
            </div>

            <div className='flex gap-2'>
                <div onClick={decrement4}>-</div>
                <div>{num4}</div>
                <div>{secondNum}</div>
                <div onClick={increment4}>+</div>
            </div>


        </div>
    )
}
