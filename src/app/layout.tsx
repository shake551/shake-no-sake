import './globals.css'
import {ShopFooter} from "./components/shop/shop_footer";
import {CocktailFooter} from "./components/cocktail/cocktail_footer";

export default function RootLayout({ children, page }: { children: React.ReactNode, page: {name: string, id: number | null} }) {
    let footer = <></>;
    if (page?.name == 'cocktail') {
        footer = <CocktailFooter />;
    } else if (page?.name == 'shop' && page.id != null) {
        footer = <ShopFooter id={page.id} />
    }
    
    return (
        <html lang="ja">
        <head>
            <title>shake no sake</title>
            <meta name="description" content="shake no sake"/>
            <link rel="icon" href="/favicon.ico"/>
        </head>
        <body>{children}</body>
        { footer }
        </html>
    )
}
