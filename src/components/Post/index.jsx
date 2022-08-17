import avatarImg from "../../assets/avatar.png"
import { Comment } from "../Comment";

import styles from "./styles.module.css";

export const Post = () => {

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src={avatarImg} alt="" />
          <div className={styles.authorInfo}>
            <strong>José Ronaldo</strong>
            <span>Frontend Developer</span>
          </div>
        </div>

        <time title="16 de agosto ás 08:13h" dataTime="2022-08-16 08:13:30">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
       <p>Fala galeraa 👋</p>
       <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
       <p>👉 jane.design/doctorcare</p>
       <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
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
