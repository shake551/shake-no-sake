'use client';
import { useState} from 'react';

import RootLayout from "../../layout";

export default function Page() {
    let [materialCount, setMaterialCount] = useState<number[]>([]);

    const handleAddMaterials = () => {
        setMaterialCount([...materialCount, 0]);
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        const materialList = []

        for (let i=0; i<materialCount.length; i++) {
            materialList.push({
                name: event.target[`materialName${i}`].value,
                quantity: {
                    quantity: event.target[`quantity${i}`].value,
                    unit: event.target[`unit${i}`].value
                }
            })
        }

        const data = {
            name: event.target.name.value,
            materials: materialList
        }

        const res = await fetch('http://localhost/cocktails',
            {method: 'POST', body: JSON.stringify(data), headers: {
                    'Content-Type': 'application/json'
                },})
        console.log(res)
    }

    return (
        <RootLayout children={
            <form onSubmit={(event) => handleSubmit(event)}>
                <div>カクテル名</div>
                <input name='name' type='text' />
                <br />
                {　materialCount.map((value, i) => {
                    return (
                        <>
                            <h2>材料名</h2>
                            <input name={'materialName'+i} type='text' />
                            <h2>量</h2>
                            <input name={'quantity'+i} type='text' />
                            <h2>単位</h2>
                            <input name={'unit'+i} type='text' />
                        </>
                    )
                })　}
                <br />
                <button type='button' onClick={handleAddMaterials}>＋</button>
                <br />
                <button type='submit'>登録</button>
            </form>
        } />
    )
}
