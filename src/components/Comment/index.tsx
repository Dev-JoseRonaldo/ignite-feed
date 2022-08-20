import { useState } from 'react';
import Modal from 'react-modal'

import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from '../Avatar';

import styles from './styles.module.css';

import avatarImg from "../../assets/avatar.png"

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
  onOpenDeleteCommentModal: () => void;
}

export function Comment({ content, onDeleteComment, onOpenDeleteCommentModal }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={avatarImg} alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>José Ronaldo</strong>
              <time title="16 de agosto ás 08:13h"  dateTime="2022-08-16 08:13:30">cerca de 1h atrás</time>
            </div>

            <button title='Deletar Comentário'>
              <Trash //onClick={handleDeleteComment}
                onClick={onOpenDeleteCommentModal}
              />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>

    </div>
  )
}