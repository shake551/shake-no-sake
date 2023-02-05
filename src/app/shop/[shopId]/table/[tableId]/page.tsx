import RootLayout from "../../../../layout";
import CocktailList from "../../../../components/cocktail/cocktailList";

import styles from './page.module.css';


async function getShopDetail(id: string) {
    const res = await fetch(`http://host.docker.internal/shop/${id}`, {method: 'GET'})
    return res.json();
}

async function getShopCocktailsList(shopId: string) {
    const res = await fetch(`http://host.docker.internal/shop/${shopId}/cocktail`, {method: 'GET'});
    return res.json();
}

export default async function Page({params}: { params: { shopId: string, tableId: number } }) {
    const shopDetail = await getShopDetail(params.shopId);
    const cocktailsList = await getShopCocktailsList(params.shopId)
    return (
        <RootLayout
            page={ {name: 'shop', shopId: parseInt(params.shopId), tableId: params.tableId} }
            children={
                <div>
                    <header className={styles.shop_header}>
                        <h1>{shopDetail.name}</h1>
                    </header>
                    <CocktailList  cocktailList={cocktailsList} category={'shop'} shopID={parseInt(params.shopId)} tableId={params.tableId}/>
                </div>
            }
        />
    )
}
