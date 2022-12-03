import {CocktailFooter, ShopFooter} from "./components/footer";

import './globals.css'

export default function RootLayout({children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app"/>
            <link rel="icon" href="/favicon.ico"/>
        </head>
        <body>{children}</body>
        <CocktailFooter/>
        </html>
    )
}

export function ShopRootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="ja">
        <head>
            <title>shake no sake</title>
            <meta name="description" content="shake no sake"/>
        </head>
        <body>{children}</body>
        <ShopFooter/>
        </html>
    )
}
