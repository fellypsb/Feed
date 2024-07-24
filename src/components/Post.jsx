import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/fellypsb.png"
          />
          <div className={styles.authorInfo}>
            <strong>Fellype Brito</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="23 de julho às 17:00h" dateTime="2024-07-23 16:58:11">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no Discover, evento da Rocketseat. O nome do projeto é DevLinks 🚀
        </p>
        <p>
          👉{" "}
          <a href="https://github.com/fellypsb" target="_blank">
            github.com/fellypsb
          </a>{" "}
        </p>
        <p>
          <a href="https://fellypsb.github.io/links" target="_blank">
            #novoprojeto
          </a>{" "}
          <a href="#" target="_blank">
            #nlw
          </a>{" "}
          <a href="https://rocketseat.com.br" target="_blank">
            #rocketseat{" "}
          </a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
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
