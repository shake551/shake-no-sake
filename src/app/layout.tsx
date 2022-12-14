import './globals.css'
import {CocktailFooter} from "./components/cocktail_footer";

export default function RootLayout({ children, page }: { children: React.ReactNode, page: {name: string, id: number | null} }) {
    return (
        <html lang="ja">
        <head>
            <title>shake no sake</title>
            <meta name="description" content="shake no sake"/>
            <link rel="icon" href="/favicon.ico"/>
        </head>
        <body>{children}</body>
        { page.name == 'cocktail' ? <CocktailFooter /> : <></>}
        </html>
    )
}
