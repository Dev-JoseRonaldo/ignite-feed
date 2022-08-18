import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR';

import { Avatar } from "../Avatar";
import { Comment } from "../Comment";

import styles from "./styles.module.css";

export const Post = ({author, publishedAt, content}) => {
  const [comments, setComments] = useState([
    "Post muito bacana, hein?!"
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH'h':mm'm'", {
    locale:ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
    locale:ptBR,
    addSuffix:true,
  })

  function handleCreateNewComment(e){
    e.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(e) {
    setNewCommentText(e.target.value)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} alt="" />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dataTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if(line.type === 'paragraph'){
            return <p>{line.content}</p>
          } else if (line.type === 'link') {
            return <p><a href="#">{line.content}</a></p>
          }         
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
            name='comment'
            placeholder="Deixe um comentário"
            value={newCommentText}
            onChange={handleNewCommentChange}
        />

        <footer>
            <button type="submit">
                Publicar
            </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment content={comment}/>
        })}
      </div>
    </article>
  )
}
