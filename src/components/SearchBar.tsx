import { useRef } from 'react';
import { Search } from 'lucide-react';

type SearchBarProps = {
  onChange: Function;
};
export default function SearchBar({ onChange }: SearchBarProps) {
  const searchInputRef = useRef<string>('');
  const handleChange = (e: any) => {
    searchInputRef.current = e.target.value;
    onChange(searchInputRef.current);
  };
  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500 pointer-events-none" />
          <input
            placeholder="Search..."
            onChange={handleChange}
            className="w-full rounded-md border border-gray-200 pl-8 p-2 text-sm outline-none focus:border-gray-400"
          />
        </div>
      </div>
    </div>
  );
}
