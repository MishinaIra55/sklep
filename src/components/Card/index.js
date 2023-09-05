import styles from './Card.module.scss';
import {useState} from "react";

function Card  ({ image, title, price, onPlus, onFavorite }) {
    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const onClickPlus = () => {
        onPlus({image, title, price});
        setIsAdded(!isAdded);
    }

    const onClickFavorite = () => {
        onFavorite({image, title, price});
        setIsFavorite(!isFavorite);
    };

    return (
        <div className={styles.card}>
            <div className={styles.favorite}
                 onClick={onClickFavorite}>
                <img src={isFavorite ? '/images/liked.svg' : '/images/unliked.png'}  width='30'  height='30' alt='unliked'/>
            </div>
            <img src={image} width={133}  height={112} alt='sneakers'/>
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
        </div>
    )
}

export default Card;