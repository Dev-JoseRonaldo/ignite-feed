import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR';

import { Avatar } from "../Avatar";
import { Comment } from "../Comment";

import styles from "./styles.module.css";

export const Post = ({author, publishedAt, content}) => {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH'h':mm'm'", {
    locale:ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
    locale:ptBR,
    addSuffix:true,
  })

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

      <form  className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
            name='comment'
            placeholder="Deixe um comentário"
        />

        <footer>
            <button type="submit">
                Publicar
            </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
