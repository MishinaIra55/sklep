import styles from './Card.module.scss';
import {useState} from "react";
import ContentLoader from "react-content-loader"

function Card  ({ id, image, title, price, onPlus, onFavorite, liked, added=false,loading = false}) {
    const [isAdded, setIsAdded] = useState(added);
    // const [isFavorite, setIsFavorite] = useState(liked);

    const onClickPlus = () => {
        onPlus({id, image, title, price});
        setIsAdded(!isAdded);
    }

    // const onClickFavorite = () => {
    //     onFavorite({id, image, title, price});
    //     setIsFavorite(!isFavorite);
    // };

    return (
        <div className={styles.card}>
            {loading ? (
                <ContentLoader
                speed={2}
                width={155}
                height={265}
                viewBox="0 0 155 265"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"

            >
                <rect x="1" y="-5" rx="10" ry="10" width="155" height="155" />
                <rect x="0" y="157" rx="5" ry="5" width="155" height="15" />
                <rect x="2" y="186" rx="5" ry="5" width="100" height="15" />
                <rect x="0" y="220" rx="5" ry="5" width="80" height="24" />
                <rect x="110" y="217" rx="10" ry="10" width="32" height="32" />
                </ContentLoader>
            ) : (
                <>
                <div className={styles.favorite}
                    // onClick={onClickFavorite}
                >
                    {/*<img src={isFavorite ? '/images/liked.svg' : '/images/unliked.png'}  width='30'  height='30' alt='unliked'/>*/}
                </div>
                <img src={image} width="100%"  height={130} alt='sneakers'/>
                <h5>{title}</h5>
                <div className={styles.cardBlock}>
                    <div className={styles.cardText}>
                        <span>Ціна:</span>
                        <b>{price}</b>
                    </div>
                    <button className={styles.plus} onClick={onClickPlus}>
                        <img
                            src={isAdded ? '/images/checked.svg' : '/images/plus1.svg'}
                            alt='plus1'
                            width='11'
                            height='11'
                            onClick={onClickPlus}
                        />
                    </button>
                </div>
            </>)}



        </div>
    )
}

export default Card;

