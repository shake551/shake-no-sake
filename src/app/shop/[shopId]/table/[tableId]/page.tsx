import RootLayout from "../../../../layout";


async function getShopDetail(id: string) {
    const res = await fetch(`http://host.docker.internal/shop/${id}`, {method: 'GET'})
    return res.json();
}

export default async function Page({params}: { params: { shopId: string, tableId: number } }) {
    const shopDetail = await getShopDetail(params.shopId);
    return (
        <RootLayout
            page={ {name: 'shop', shopId: parseInt(params.shopId), tableId: params.tableId} }
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
