import "./toast.scss";
import Button from "../../Button/Button";
import { useCallback, useEffect, useState } from "react";

export interface ToastParams {
  text: string;
  button?: {
    text: string;
    onClick: () => void;
  };
}

export function showToast(
  text: ToastParams["text"],
  button?: ToastParams["button"]
) {
  const toastEvent = new CustomEvent("toast", {
    detail: { text, button },
  });
  document.dispatchEvent(toastEvent);
}

let timeout: NodeJS.Timeout;

export default function Toast() {
  const [text, setText] = useState<ToastParams["text"]>();
  const [button, setButton] = useState<ToastParams["button"]>();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onSubmit = useCallback(() => {
    clearTimeout(timeout);
    setIsOpen(false);
    button?.onClick();
  }, [button]);

  const onShowToast = useCallback(() => {
    document.addEventListener("toast", (e: any) => {
      const { text, button } = e.detail;
      setIsOpen(true);
      setText(text);
      setButton(button);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsOpen(false);
      }, 4000);
    });
  }, []);

  useEffect(() => {
    onShowToast();
  }, [onShowToast]);
  return (
    <>
      {isOpen && (
        <dialog id='toast' className='bg-secondary' open>
          <p>{text}</p>
          {button && (
            <Button variant='border' color='surface' onClick={onSubmit}>
              {button.text}
            </Button>
          )}
        </dialog>
      )}
    </>
  );
}
