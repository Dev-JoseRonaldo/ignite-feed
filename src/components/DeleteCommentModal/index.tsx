import Modal from "react-modal"

interface DeleteCommentModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const DeleteCommentModal = ({ isOpen, onRequestClose }: DeleteCommentModalProps) => {

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2>Modalzin</h2>
    </Modal>
  )
}
