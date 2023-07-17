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
  const [visibleNews, setVisibleNews] = useState<News[]>([]);
  const [showMore, setShowMore] = useState(false);

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
        const data = await fetchNews('web development');
        setNews(data);
      } else {
        const data = await fetchNews(search);
        setNews(data);
      }
      setLoading(false);
    }
    getNews();
  }, [search]);

  // useEffect(() => {
  //   if (news.length > 0) {
  //     setVisibleNews(news.slice(0, 5));
  //   }
  // }, [news]);

  // function handleShowMore() {
  //   setVisibleNews(news.slice(0, visibleNews.length + 5));
  // }

  if (loading) {
    return (
      <h1>Carregando...</h1>
    );
  }

  return (
    <div className={styles.page}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">
          Pesquisar notícias
        </label>
        <input id="search" ref={searchRef} />
        <button type="submit">
          <BsSearch />
          {` Pesquisar`}
        </button>
      </form>
      <main>
        {news && news.map((article, index) => (
          <NewsCard 
            key={index} 
            url={article.url}
            title={article.title}
            author={article.author}
            description={article.description}
            publishedAt={article.publishedAt}
          />
        ))}
      </main>
        {/* {!showMore && visibleNews.length < news.length && (
          <button onClick={handleShowMore}>Mostrar mais</button>
        )} */}
    </div>
  );
}
