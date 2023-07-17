import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

type FormProps = {
  setSearch: (param: string) => void;
}
export default function Form({setSearch}: FormProps) {
  const searchRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (searchRef.current) {
      const value = searchRef.current.value;
      setSearch(value);
    }
  }
  return (
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
  )
}
