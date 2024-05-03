import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Btn } from "./Btn";
// import { Counter } from "./Counter";




export const ItemList = ({item}) => {

    const [count, setCount] = useState(0);

    const decrease = () => {
        if (count <= 0) {
            setCount(prevCount => prevCount = 0);
        } else {
            setCount(prevCount => prevCount - 1);
        }
    };

    const increase = () => {
        setCount(prevCount => prevCount + 1);
    };


    const cookieSave = (f) => {
        // 商品個数
        const quantity = count;

        // 商品情報
        const target = f.currentTarget.className;

        // 個数と商品の配列
       const item_qt = [];
       const item_id = [];

        // 配列に値を追加
        item_qt.push(quantity);
        item_id.push(target);


       // cookieを保存
       document.cookie = item_qt;
       document.cookie = item_id;
       console.log('item_qt',item_qt);
       console.log('item_id',item_id);
    };

    return (
        <>
            <li>
            <img src={item.src} alt={item.alt} />
            <p className="itembox-maker">{item.maker}</p>
            <p className="itembox-name">{item.name}</p>
            <p className="itembox-price">{item.price}<span>税込</span></p>
            <div className="itembox-container">
                <div className="itembox-quantity">
                    <button onClick={decrease} className="itembox-decrease">-</button>
                    <p className="itembox-number">{count}</p>
                    <button onClick={increase} className="itembox-increase">+</button>
                </div>
                <p className="btn">
                    <Link to="/cookie-exercises/Cart" onClick={(e) => cookieSave(e)} className={item.id}>カートに追加</Link>
                </p>
            </div>
        </li>
        </>
        
    )
}

