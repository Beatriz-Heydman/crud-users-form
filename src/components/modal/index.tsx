//styles
import { Overlay } from "./styles";

//types
import { ModalProps } from "./types";

export function Modal({ children, isOpen, onClose }: ModalProps) {
  return (
    <Overlay
      className="overlay"
      isOpen={isOpen}
      onClick={(event) => {
        const overlayElement = event.currentTarget;

        if (event.target === overlayElement) {
          onClose();
        }
      }}
    >
      <div className="modal_content">{children}</div>
    </Overlay>
  );
}
