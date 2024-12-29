import Tag from './Tag';
import { categoryMapper } from '../constants/categoryMapper';

type LogProp = {
  title: string;
  description: string;
  category: string;
};
export default function Log({ title, description, category }: LogProp) {
  return (
    <div className={'text-left'}>
      <div className="flex justify-between items-center">
        <p className={'font-semibold'}>{title}</p>
        <Tag text={category} color={categoryMapper[category]} />
      </div>
      <p className={'font-normal mb-1'}>{description}</p>
      <hr />
    </div>
  );
}
