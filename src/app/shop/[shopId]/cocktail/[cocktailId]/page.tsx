import RootLayout from "../../../../layout";
import CocktailDetail from "../../../../components/cocktail/cocktailDetail";
import AddCartButton from "../../../../components/shop/add_cart_button";


async function getCocktailsDetail(shopId: string, cocktailId: string) {
    const res = await fetch(`http://host.docker.internal/shop/${shopId}/cocktail/${cocktailId}`, {method: 'GET'})
    return res.json();
}

export default async function Page({params}: { params: { shopId: string, cocktailId: string } }) {
    const cocktailsDetail = await getCocktailsDetail(params.shopId, params.cocktailId);
    console.log(cocktailsDetail)
    return (
        <RootLayout
            page={{name: 'shop', id: parseInt(params.shopId)}}
            children={
                <>
                    <CocktailDetail isShop={true} cocktailDetail={cocktailsDetail}/>
                    <AddCartButton cocktailId={params.cocktailId}  shopId={params.shopId}/>
                </>
            }
        />
    )
}
