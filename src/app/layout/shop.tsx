import {ShopFooter} from "../components/footer";

import '../globals.css'

export default function RootLayout({children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
        <head>
            <title>shake no sake</title>
            <meta name="description" content="shake no sake"/>
            <link rel="icon" href="/favicon.ico"/>
        </head>
        <body>{children}</body>
        <ShopFooter/>
        </html>
    )
}
