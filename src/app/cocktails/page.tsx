import RootLayout from "../layout";
import CocktailList from "../components/cocktail/cocktailList";

async function getCocktailsList() {
    const res = await fetch('http://host.docker.internal/cocktails', {method: 'GET'});
    return res.json();
}

export default async function Page() {
    const cocktailsList = await getCocktailsList();
    return (
        <RootLayout
            page={ {name: 'cocktail', shopId: null, tableId: null} }
            children={
               <CocktailList cocktailList={cocktailsList} category={'cocktail'}  shopID={null} tableId={null}/>
            }
        />
    );
}
