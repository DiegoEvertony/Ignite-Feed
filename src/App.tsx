import {Header} from "./components/Header.tsx";
import {Sidebar} from "./components/Sidebar.tsx";
import { Post } from "./components/Post.tsx";

// css exclusivo do arquivo App.jsx
import styles from "./App.module.css"
// css global
import "./global.css";

interface Author {
  avatarUrl: string;
  name: string;
  role: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

interface Post {
  id: number;
  author: Author;
  content: Content[]; // <-- esta assim porque content e um ARRAY
  publishedAt: Date;
}


// author { avatar_url: "", name: "", role: "" }
// publishedAt: new Date
// content: string

const post: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diegoevertony.png",
      name: "Diego Evertony",
      role: "Developer Front End"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "diegoevertony/doctorcare" },
    ],
    publishedAt: new Date("2024-09-14 16:30:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Subi um novo projeto no meu portifa! Foi feito no Ignite da Rocketseat e o nome é FinançasApp. 💼🔥" },
      { type: "link", content: "maykbrito/FinançasApp" },
    ],
    publishedAt: new Date("2024-09-20 10:30:00"),
  },

  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de adicionar um novo projeto no meu portfólio! Desenvolvi durante o NLW e o nome é Move.it! 🏃‍♂️💡" },
      { type: "link", content: "diego3g/Move.it" },
    ],
    publishedAt: new Date("2024-08-17 20:00:00"),
  },
]

export function App() {
  return (
    <div>    

      <Header/>

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          {post.map(post =>{
            return(
              <Post
                key = {post.id}
                author = {post.author}
                content = {post.content}
                publishedAt = {post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}

