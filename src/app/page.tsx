'use client';

import React, { useEffect, useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import styles from './page.module.css';
import { fetchNews } from '@/utils/fetchNews';
import NewsCard from '@/components/news-card';
import { News } from '@/types';

export default function Home() {
  const searchRef = useRef<HTMLInputElement>(null);
  const [search, setSearch] = useState('');
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (searchRef.current) {
      const value = searchRef.current.value;
      setSearch(value);
    }
  }

  useEffect(() => {
    async function getNews() {
      setLoading(true);
      if (!search) {
        const news = await fetchNews('brasil');
        setNews(news);

      } else {
        const news = await fetchNews(search);
        setNews(news);
      }
      setLoading(false)
    }
    getNews();
  }, [search]);

  if (loading) {
    return (
      <h1>Carregando...</h1>
    )
  }

  return (
    <div className={styles.page}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">
          Pesquisar notícias
        </label>
        <input id="search" ref={searchRef} />
        <button type="submit"><BsSearch />{` Pesquisar`}</button>
      </form>
      <main>
        {news.map((article, index) => (
          <NewsCard 
            key={index} 
            title={article.title}
            author={article.author}
            description={article.description}
          />
        ))}
      </main>
    </div>
  );
}