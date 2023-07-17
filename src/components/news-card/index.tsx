import styles from './card.module.css';
import { convertDateFormat } from '@/utils/formatDate';

type NewsCardProps = {
  title: string;
  author: string;
  description: string;
  url: string;
  publishedAt: string;
}

export default function NewsCard({title, author, description, url, publishedAt}: NewsCardProps) {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>{title}</h1>
      {
        author ? <h2>{`Autor: ${author}`}</h2> : <h2>Autor: Não informado</h2>
      }
      <p className={styles.date}>{convertDateFormat(publishedAt)}</p>
      <p className={styles.description}>{description}</p>
      <a href={url} target="_blank">Leia a matéria completa.</a>
    </div>
  )
}