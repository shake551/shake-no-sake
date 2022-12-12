'use client';
import {useState} from 'react';

import RootLayout from "../../layout/cocktail";
import styles from './post.module.css';
import {PlusCircle} from "react-feather";

export default function Page() {
    let [materialCount, setMaterialCount] = useState<number[]>([]);
    
    const handleAddMaterials = () => {
        setMaterialCount([...materialCount, 0]);
    }
    
    const handleSubmit = async (event: any) => {
        event.preventDefault()
        
        const materialList = []
        
        for (let i = 0; i < materialCount.length; i++) {
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
        
        await fetch('http://localhost/cocktails',
            {
                method: 'POST', body: JSON.stringify(data), headers: {
                    'Content-Type': 'application/json'
                },
            })
        
        window.location.replace('/cocktails');
    }
    
    return (
        <RootLayout children={
            <div className={styles.cocktailsDetailWrapper}>
                <form onSubmit={(event) => handleSubmit(event)}>
                    <div className={styles.formColumnName}>カクテル名</div>
                    <input name='name' type='text' className={styles.formNameInputArea}/>
                    <br/>
                    <div className={styles.formColumnName}>材料リスト</div>
                    {materialCount.map((value, i) => {
                        return (
                            <>
                                <div className={styles.formColumnName}>材料名</div>
                                <input name={'materialName' + i} type='text'
                                       className={styles.formMaterialNameInputArea}/>
                                
                                <div className={styles.formQuantityWrapper}>
                                    <div className={styles.formQuantityArea}>
                                        <div className={styles.formColumnName}>量</div>
                                        <input name={'quantity' + i} type='text'
                                               className={styles.formMaterialNameInputArea}/>
                                    </div>
                                    <div className={styles.formQuantityArea}>
                                        <div className={styles.formColumnName}>単位</div>
                                        <input name={'unit' + i} type='text'
                                               className={styles.formMaterialNameInputArea}/>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                    <br/>
                    <button type='button' onClick={handleAddMaterials} className={styles.addMaterialButton}>
                        <PlusCircle size={100}/>
                    </button>
                    <br/>
                    <button type='submit' className={styles.submitButton}>登録</button>
                </form>
            </div>
        }/>
    )
}
