import RootLayout from "../../layout";
import CocktailDetail from "../../components/cocktail/cocktailDetail";


async function getCocktailsDetail(id: string) {
    const res = await fetch(`http://host.docker.internal/cocktails/${id}`, {method: 'GET'})
    return res.json();
}

export default async function Page({params}: { params: { id: string } }) {
    const cocktailsDetail = await getCocktailsDetail(params.id);
    console.log(cocktailsDetail)
    return (
        <RootLayout
            page={ {name: 'cocktail', id: null} }
            children={
                <CocktailDetail  cocktailDetail={cocktailsDetail} isShop={false}/>
            }
        />
    )
}
