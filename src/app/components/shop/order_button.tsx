import styles from './order_button.module.css';

async function order(shopId: string, tableId: string) {
    const exists = localStorage.getItem('cart');
    let cocktailIDs = [];
    if (exists) {
        const data = JSON.parse(exists)
        for (let i = 0; i < data.length; i++) {
            cocktailIDs.push(parseInt(data[i]['id']));
        }
    }
    console.log(tableId)
    const res = await fetch(`http://localhost/shop/${shopId}/table/${tableId}/order`,
        {
            method: 'POST',
            body: JSON.stringify({cocktail_ids: cocktailIDs}),
            headers: {
                'Content-Type': 'application/json'
            },
        });
    
    if (res.ok) {
        localStorage.removeItem('cart');
        window.location.replace(`/shop/${shopId}/table/${tableId}/cocktail`);
    }
}

export default function OrderButton(params: { shopId: string, tableId: string }) {
    return (
        <>
            <button onClick={async () => order(params.shopId, params.tableId)} className={styles.orderButton} >注文する</button>
        </>
    )
}
