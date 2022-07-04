import ProgressLinear from "../../ProgressLinear/ProgressLinear";
import "./modal.scss";
export interface ModalProps {
  open: boolean;
  children: React.ReactElement | React.ReactElement[];
  onClose: () => void;
  id: string;
  loading?: boolean;
}
export default function Modal(props: ModalProps) {
  const { children, open, onClose, id, loading = false } = props;
  if (!open) return <></>;
  return (
    <>
      <dialog id={id} open className='bg-surface modal'>
        <ProgressLinear active={loading} />
        {children}
      </dialog>
      <div className='backdrop' onClick={onClose} />
    </>
  );
}
