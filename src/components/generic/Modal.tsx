import Tabs from './Tabs';

type ModalProps = {
  title: string;
  original: string;
  show: boolean;
  close: () => void;
};
export default function Modal({ original, show, close, title }: ModalProps) {
  // const { data: enhanced, isLoading } = useQuery({
  //   enabled: show,
  //   queryKey: [...QUERY_KEYS.openai.description, original],
  //   queryFn: () => QUERY_FUNCTIONS.openai.description(original),
  //   retry: false,
  //   staleTime: 60_000,
  // });
  const enhanced = 'coming soon :D';
  if (!show) {
    return <></>;
  }
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div
        className="fixed inset-0 w-full h-full bg-black opacity-40"
        onClick={close}
      />
      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
          <div className="mt-3 sm:flex">
            <div className="grid grid-cols-12 gap-4">
              <a
                onClick={close}
                className="no-underline text-gray-600 hover:text-gray-800 transition-colors hover:no-underline hover:cursor-pointer"
              >
                Close
              </a>
              <div className={'col-start-4 col-span-6 '}>
                <h4 className="text-lg font-medium text-gray-800">{title}</h4>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 my-4">
            <div className={'my-2'}>
              <Tabs original={original} enhanced={enhanced} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
