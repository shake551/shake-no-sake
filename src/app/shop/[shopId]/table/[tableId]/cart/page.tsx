'use client';
import RootLayout from "../../../../../layout";
import {useEffect, useState} from "react";
import CocktailCartList from "../../../../../components/cocktail/cocktailCartList";
import OrderButton from "../../../../../components/shop/order_button";

async function getCocktailList(cocktailIDs: number[]) {
    if (cocktailIDs.length === 0) return[];
    
    let param = '?';
    for (let i = 0; i < cocktailIDs.length; i++) {
        param += 'ids[' + i + ']=' + cocktailIDs[i] + '&';
    }
    const res = await fetch(`http://localhost/cocktails/list${param}`, {method: 'GET'})
    return res.json();
}

export default function Page({params}: { params: { shopId: number, tableId: number } }) {
    const [cocktailList, setCocktailList] = useState([]);
    
    const cocktail = async () => {
        const exists = localStorage.getItem('cart');
        let cocktailIDs = [];
        if (exists) {
            const data = JSON.parse(exists)
            for (let i = 0; i < data.length; i++) {
                cocktailIDs.push(data[i]['id']);
            }
        }
        const res = await getCocktailList(cocktailIDs);
        setCocktailList(res);
    }
    
    useEffect(() => {
        cocktail();
    }, []);
    
    const cocktailCartList = cocktailList.length === 0 ?
        <></>
        : <CocktailCartList cocktailList={cocktailList} category={'shop'} shopID={params.shopId}/>
    
    
    return (
        <RootLayout
            page={{name: 'shop', id: params.shopId}}
            children={
            <>
                {cocktailCartList}
                <OrderButton shopId={String(params.shopId)} tableId={String(params.tableId)} />
            </>
            }
        />
    )
}
