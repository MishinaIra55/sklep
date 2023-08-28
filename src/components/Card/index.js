import styles from './Card.module.scss';

function Index  (props) {
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
                <button className={styles.button} onClick={props.onClickPlus}>
                    <img src='/images/plus1.svg'  alt='plus1' width='11' height='11'/>
                </button>
            </div>
        </div>
    )
}

export default Index;