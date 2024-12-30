import { useState } from 'react';

type TabsProps = {
  original: string;
  enhanced: string;
};
export default function Tabs({ original, enhanced }: TabsProps) {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center max-w-xl">
        <ul className="flex space-x-2">
          <li>
            <button
              onClick={() => setOpenTab(1)}
              className={`px-4 py-2 rounded shadow cursor-pointer ${
                openTab === 1
                  ? 'bg-gray-600 text-white'
                  : 'bg-white text-gray-600'
              }`}
            >
              Original
            </button>
          </li>
          <li>
            <button
              onClick={() => setOpenTab(2)}
              className={`px-4 py-2 rounded shadow cursor-pointer ${
                openTab === 2
                  ? 'bg-gray-600 text-white'
                  : 'bg-white text-gray-600'
              }`}
            >
              AI Enhanced
            </button>
          </li>
        </ul>
        <div className="p-3 mt-6 bg-white border">
          <div className={openTab === 1 ? 'block' : 'hidden'}>{original}</div>
          <div className={openTab === 2 ? 'block' : 'hidden'}>{enhanced}</div>
        </div>
      </div>
    </div>
  );
}
