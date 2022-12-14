import RootLayout from "../../layout";


async function getShopDetail(id: string) {
    const res = await fetch(`http://host.docker.internal/shop/${id}`, {method: 'GET'})
    return res.json();
}

export default async function Page({params}: { params: { shopId: string } }) {
    const shopDetail = await getShopDetail(params.shopId);
    return (
        <RootLayout
            page={ {name: 'shop', id: parseInt(params.shopId)} }
            children={
                <div>
                    <div>
                        <h1>{shopDetail.name}</h1>
                    </div>
                </div>
            }
        />
    )
}
