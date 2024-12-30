import { LogType } from '../../types/LogType';
import ClickableLog from './ClickableLog';

type LogsProps = {
  logs: Array<LogType>;
};
export default function Logs({ logs }: LogsProps) {
  if (!logs.length) {
    return <></>;
  }
  return (
    <div>
      <ul className={'list-none'}>
        {logs.map((log) => {
          return (
            <li key={`${log.category}-${log.title}`} className={'my-2'}>
              <ClickableLog {...log} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
