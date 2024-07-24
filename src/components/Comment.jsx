import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/fellypsb.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fellype Brito</strong>
              <time
                title="23 de julho às 17:00h"
                dateTime="2024-07-23 17:00:00"
              >
                Cerca de 2h atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom, Fellype. Parabéns!!</p>
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
