import RootLayout from "../layout";
import Image from "next/image";

import styles from './cocktails.module.css';

async function getCocktailsList() {
    const res = await fetch('http://host.docker.internal/cocktails', {method: 'GET'});
    return res.json();
}

export default async function Page() {
    const cocktailsList = await getCocktailsList();
    return (
        <RootLayout children={
            <ul className={styles.cocktailsCardList}>
                {cocktailsList.map(({id, name}: { id: number, name: string }) => (
                    <li className={styles.cocktailsCardWrapper} key={id}>
                        <div className={styles.cocktailsCard}>
                            <Image
                                src="/cocktail_sample.jpg"
                                alt="cocktail sample image"
                                width={200}
                                height={200}
                                className={styles.cocktailsCardImage}
                            />
                            <h1 className={styles.cocktailsCardName}>{name}</h1>
                        </div>
                    </li>
                ))}
            </ul>
        }/>
    );
}