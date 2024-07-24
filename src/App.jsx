import { Header } from "./components/Header"
import { Post } from "./components/Post"
import styles from "./App.module.css"
import "./global.css"
import { Sidebar } from "./components/Sidebar"

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Fellype Brito" content="Texto texto" />
          <Post author="Fellypinho" content="Texto Texto Texto Texto" />
        </main>
      </div>
    </div>
  )
}
