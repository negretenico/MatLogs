import { Color } from '../../types/Color';

type TagProps = {
  text: string;
  color: Color;
};
export default function Tag({ text, color }: TagProps) {
  return (
    <>
      <span
        className={`bg-${color}-100 text-${color}-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-${color}-900 dark:text-${color}-300`}
      >
        {text}
      </span>
    </>
  );
}
