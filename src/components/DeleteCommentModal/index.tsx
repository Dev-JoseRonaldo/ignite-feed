import Modal from "react-modal"

interface DeleteCommentModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onHandleDeleteComment: () => void;
}

export const DeleteCommentModal = ({ isOpen, onRequestClose, onHandleDeleteComment }: DeleteCommentModalProps) => {

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose}
      overlayClassName = "react-modal-overlay"
      className="react-modal-content"
    >
      <h2>Excluir comentário</h2>
      <p>Você tem certeza que gostaria de excluir este comentário?</p>
      <div className="react-modal-btn-box">
        <button onClick={onRequestClose} className="react-modal-btn-cancel">Cancelar</button>
        <button onClick={onHandleDeleteComment} className="react-modal-btn-confirm">Sim, excluir</button>
      </div>
    </Modal>
  )
}
