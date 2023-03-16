import { Overlay } from "./styles";
import { ModalProps } from "./types";

export function Modal({ children, isOpen, onClose }: ModalProps) {
  return (
    <Overlay
      className="overlay"
      isOpen={isOpen}
      onClick={(event) => {
        // Verifica se o elemento clicado é igual ao overlay
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="modal_content">{children}</div>
    </Overlay>
  );
}
