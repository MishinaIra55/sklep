import styles from './Card.module.scss';
import {useState} from "react";

function Card  ({onClickFavorite, image, title, price, onPlus }) {
    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const onClickPlus = () => {
        onPlus({image, title, price});
        setIsAdded(!isAdded);
    }
    return (
        <div className={styles.card}>
            <div className={styles.favorite}
                 onClick={onClickFavorite}>
                <img src='/images/unliked.png'  width='30'  height='30' alt='unliked'/>
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