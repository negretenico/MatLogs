import { QUERY_KEYS } from '../query/keys';
import { QUERY_FUNCTIONS } from '../query/functions';
import { useSuspenseQuery } from '@tanstack/react-query';
import { LogType } from '../types/LogType';
import Logs from '../components/Logs';
import SearchBar from '../components/SearchBar';
import { useMemo, useState } from 'react';
import Fuse from 'fuse.js';

export default function Home() {
  const { data } = useSuspenseQuery<Record<string, LogType>>({
    queryKey: QUERY_KEYS.get.all,
    queryFn: () => QUERY_FUNCTIONS.get.all(),
    retry: 2,
  });
  const [searchTerm, setSearchTerm] = useState('');
  const fuse = useMemo(
    () =>
      new Fuse(Object.values(data), {
        keys: ['category', 'title', 'description'],
        threshold: 0.3, // Adjust this value to control fuzziness
      }),
    [data]
  );

  const handleChange = (query: string) => {
    setSearchTerm(query);
  };

  // Return all data if search is empty, otherwise return filtered results
  const filteredData =
    searchTerm.trim() === ''
      ? Object.values(data)
      : fuse.search(searchTerm).map((s) => s.item);
  return (
    <div className={'grid grid-cols-12'}>
      <div className={'col-start-4 col-span-6'}>
        <p
          className={
            'mb-4 font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl'
          }
        >
          All Notes
        </p>
        <SearchBar onChange={handleChange} />
        <Logs logs={filteredData} />
      </div>
    </div>
  );
}
