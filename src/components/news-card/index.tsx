import styles from './card.module.css';

type NewsCardProps = {
  title: string;
  author: string;
  description: string;
}

export default function NewsCard({title, author, description}: NewsCardProps) {
  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <p>{description}</p>
    </div>
  )
}