"use client"
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

const useOverlay = (onDismiss: () => void) => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
  
    const handleClick: React.MouseEventHandler<HTMLDivElement> = useCallback(
      (event) => {
        if (
          event.target === overlayRef.current ||
          event.target === wrapperRef.current
        ) {
          onDismiss();
        }
      },
      [onDismiss, overlayRef, wrapperRef]
    );
  
    const handleKeyDown = useCallback(
      (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          onDismiss();
        }
      },
      [onDismiss]
    );
  
    useEffect(() => {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);
  
    return { overlayRef, wrapperRef, handleClick };
  };

  
interface ModalProps {
    children: React.ReactNode;
}
const Modal = ({ children }: ModalProps) => {

    const router = useRouter();
    const onDismiss = () => {
        router.back();
    }

    const { overlayRef, handleClick } = useOverlay(onDismiss);
    return (
        <div
        className="fixed top-0 left-0 right-0 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
          <div ref={overlayRef} onClick={handleClick} className="bg-gray-600 opacity-75 fixed bottom-0 top-0 left-0 right-0 z-50 w-ful" />
          <div className="relative w-full h-full z-50 mx-auto max-w-2xl md:h-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <button onClick={onDismiss} type="button" className="absolute right-4 top-4">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd">
                          </path>
                      </svg>  
                  </button>
                  {children}
              </div>
          </div>
        </div>
    )
}

export default Modal;