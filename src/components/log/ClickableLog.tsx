import { ComponentProps, useState } from 'react';
import Log from './Log';
import Modal from '../generic/Modal';

export default function ClickableLog(props: ComponentProps<typeof Log>) {
  const [show, setShow] = useState(false);
  return (
    <>
      <Modal
        show={show}
        close={() => setShow(false)}
        title={props.title}
        original={props.description}
      />
      <div onClick={() => setShow(true)} className={'cursor-pointer'}>
        <Log {...props} />
      </div>
    </>
  );
}
