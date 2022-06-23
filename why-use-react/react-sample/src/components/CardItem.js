import styles from "./CardItem.module.css";

function CardItem({ href, image, title, price }) {
  return (
    <a href={href} className={styles.item}>
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.price}>Rp. {price}</div>
    </a>
  );
}

export default CardItem;
