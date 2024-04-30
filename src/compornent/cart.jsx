import React, { useEffect } from 'react';
import { items } from './Items';
// import { Counter } from './Counter';
// import { Btn } from './Btn';





export const Cart = () => {
        // Cookieからカート情報を取得する
        const getCartItemFromCookie = () => {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.indexOf("cartItem=") == 0) {
                    return JSON.parse(cookie.substring("cartItem=".length, cookie.length));
                }
            }
            return null;
        }

        // カート情報を取得してコンソールに出力
        const savedCartItem = getCartItemFromCookie();
        console.log(savedCartItem);
        
        

    // 合計金額
    let flg = false;
    let total = 0

    const AllPrice = () => {
    if(!flg){
            const prices = document.querySelectorAll('.cart-total');
            console.log('prices', prices);
            const totalPrice = document.querySelector('.cart-money');
            prices.forEach((price) => {
                console.log('price', price);
                total += parseFloat(price.textContent.replace(/\D/g, ''));
            });
            console.log('total', total);
            console.log("合計金額:", total.toFixed(2)); // コンソールに合計金額を出力
            totalPrice.textContent = total;
            flg = true;
        };
    }

    useEffect (() => {
        AllPrice()
    },[]);

return (
<>
    <section className="cart">
        <div className="cart-inner">
            <h2 className="cart-title">Cart</h2>
            
            <div className="cart-container">
                <div className="cart-list">
                    <ul className="cart-category">
                        <li className="cart-type">商品</li>
                        <li className="cart-type">数量</li>
                        <li className="cart-type">合計</li>
                    </ul>
                    {items.map((item) => (
                    <div className="cart-item">
                        <div className="cart-flavor">
                            <p className="cart-img"><img src={item.src} alt="item.alt" /></p>
                            <div className="cart-goods">
                                <p className="cart-maker">{item.maker}</p>
                                <p className="cart-name">{item.name}</p>
                                <p className="cart-price">{item.price}<span>税込</span></p>
                            </div>
                        </div>
                        {/* <Counter /> */}
                        <p className="cart-total">{item.price}<span>税込</span></p>
                    </div>
                    ))}
                </div>
                <div className="cart-side">
                    <div className="cart-plus">
                        <p className="cart-sum">合計</p>
                        <p className="cart-money">{total}<span>税込</span></p>
                    </div>
                    {/* <Btn /> */}
                    {/* <Btn backgroundColor="#fff"/> */}
                </div>
            </div>
        </div>
    </section>
</>
);
};




export default Cart;