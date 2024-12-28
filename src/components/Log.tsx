type LogProp = {
  title: string;
  description: string;
};
export default function Log({ title, description }: LogProp) {
  return (
    <div className={'text-left'}>
      <p className={'font-semibold'}>{title}</p>
      <p className={'font-normal mb-1'}>{description}</p>
      <hr />
    </div>
  );
}
