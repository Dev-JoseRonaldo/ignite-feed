import { ThumbsUp, Trash } from 'phosphor-react';

import styles from './styles.module.css';

import avatarImg from "../../assets/avatar.png"
import { Avatar } from '../Avatar';

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={avatarImg} alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>José Ronaldo</strong>
              <time title="16 de agosto ás 08:13h" dataTime="2022-08-16 08:13:30">cerca de 1h atrás</time>
            </div>

            <button title='Deletar Comentário'>
              <Trash />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>

    </div>
  )
}