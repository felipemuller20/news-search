const API_KEY = process.env.NEXT_PUBLIC_API_KEY || '';

export async function fetchNews(param: string) {
  const response = await fetch(`https://newsapi.org/v2/everything?q=${param}&apiKey=${API_KEY}`);
  const data = await response.json();
  return data.articles;
}