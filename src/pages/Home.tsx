import { QUERY_KEYS } from '../query/keys';
import { QUERY_FUNCTIONS } from '../query/functions';
import { useSuspenseQuery } from '@tanstack/react-query';
import { LogType } from '../types/LogType';
import Logs from '../components/Logs';

export default function Home() {
  const { data } = useSuspenseQuery<Record<string, LogType>>({
    queryKey: QUERY_KEYS.get.all,
    queryFn: () => QUERY_FUNCTIONS.get.all(),
    retry: 2,
  });
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
        <Logs logs={Object.values(data)} />
      </div>
    </div>
  );
}
