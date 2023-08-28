import styles from './Card.module.scss';
import {useState} from "react";

function Card  (props) {
    const [isAdded, setIsAdded] = useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
    }
    return (
        <div className={styles.card}>
            <div className={styles.favorite}
                 onClick={props.onClickFavorite}>
                <img src='/images/unliked.png'  width='30'  height='30' alt='unliked'/>
            </div>
            <img src={props.image} width={133}  height={112} alt='sneakers'/>
            <h5>{props.title}</h5>
            <div className={styles.cardBlock}>
                <div className={styles.cardText}>
                    <span>Ціна:</span>
                    <b>{props.price}</b>
                </div>
                <button className={styles.plus} onClick={onClickPlus}>
                    <img
                        src={isAdded ? '/images/checked.svg' : '/images/plus1.svg'}
                        alt='plus1'
                        width='11'
                        height='11'
                    />
                </button>
            </div>
        </div>
    )
}

export default Card;