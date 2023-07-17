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
      <h2 className={styles.author}>{ author ? `Autor: ${author}` : 'Autor: Não informado'}</h2>
      <p className={styles.description}>{description || 'Descrição não informada'}</p>
      {
        url ? <a href={url} target="_blank" rel="noreferrer">Leia a matéria completa.</a> : <p>URL da notícia não informada.</p>
      }
      <p className={styles.date}>{publishedAt ? `${convertDateFormat(publishedAt)}` : 'Data de publicação não informada'}</p>
    </div>
  )
}