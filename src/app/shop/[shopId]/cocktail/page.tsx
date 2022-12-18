import RootLayout from "../../../layout";
import CocktailList from "../../../components/cocktailList";

async function getShopCocktailsList(shopId: string) {
    const res = await fetch(`http://host.docker.internal/shop/${shopId}/cocktail`, {method: 'GET'});
    return res.json();
}

export default async function Page({params}: { params: { shopId: string } }) {
    const cocktailsList = await getShopCocktailsList(params.shopId);
    return (
        <RootLayout
            page={ {name: 'shop', id: parseInt(params.shopId)} }
            children={
                <CocktailList  cocktailList={cocktailsList} category={'shop'}/>
            }
        />
    );
}
