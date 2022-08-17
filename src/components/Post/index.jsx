import style from "./styles.module.css";

import Avatar from '../../assets/avatar.png'

export const Post = () => {
  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <img className={style.avatar} src={Avatar} alt="" />
          <div className={style.authorInfo}>
            <strong>José Ronaldo</strong>
            <span>Frontend Developer</span>
          </div>
        </div>

        <time title="16 de agosto ás 08:13h" dataTime="2022-08-16 08:13:30">Publicado há 1h</time>
      </header>

      <div className={style.content}>
       <p>Fala galeraa 👋</p>
       <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
       <p>👉 jane.design/doctorcare</p>
       <p>#novoprojeto #nlw #rocketseat</p>
      </div>
    </article>
  )
}
