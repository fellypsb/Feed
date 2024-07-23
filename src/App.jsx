import { Header } from "./components/Header"
import { Post } from "./Post"
import "./global.css"
export function App() {
  return (
    <div>
      <Header />
      <Post author="Fellype Brito" content="TEXTO" />
      <Post author="Fellypinho" content="TEXTO TEXTO" />
    </div>
  )
}
