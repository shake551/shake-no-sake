import RootLayout from "../../../../../layout";
import CocktailList from "../../../../../components/cocktail/cocktailList";

async function getShopCocktailsList(shopId: string) {
    const res = await fetch(`http://host.docker.internal/shop/${shopId}/cocktail`, {method: 'GET'});
    return res.json();
}

export default async function Page({params}: { params: { shopId: string, tableId: number } }) {
    const cocktailsList = await getShopCocktailsList(params.shopId);
    return (
        <RootLayout
            page={ {name: 'shop', shopId: parseInt(params.shopId), tableId: params.tableId} }
            children={
                <CocktailList  cocktailList={cocktailsList} category={'shop'} shopID={parseInt(params.shopId)} tableId={params.tableId}/>
            }
        />
    );
}
