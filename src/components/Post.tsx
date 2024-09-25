import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css"

// const comments = [
//     1,
//     2,
// ]

// Estado = São vaiaveis que eu quero que o componente monitore

// author { avatar_url: "", name: "", role: "" }
// publishedAt: new Date
// content: string

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: "paragraph" | "link";
    content: string;
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[];
}

//se quiser pode tirar o "props" e colocar parametro individuais como no JS.
export function Post(props: PostProps){
    const [comments, setComments] = useState([
        "Post muito bacana, hein?!"
    ])

    const publishedDateFormatted = format(props.publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    })

    const [newCommentText, setNewCommentText] = useState("")

    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault();

        //Spread Operator(...) <=== nos permite copiar rapidamente todo ou parte de um array
        setComments([...comments, newCommentText]);
        setNewCommentText("");

    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("");
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("Este campo é obrigatorio!");
        console.log(event);
    }

    //fazendo a comunicação entre componentes. obs: tem a outra parte no Comment.jsx
    function deleteComment(commentToDelete: string){
        // Imutabilidade -> as variaveis não sofrem alteração/mutação, nos criamos um novo valor.

        const commentsWithoutDeletedOne = comments.filter(comment =>{
            return comment !== commentToDelete;
        })

        setComments(commentsWithoutDeletedOne);

        console.log(`Deletar comentario ${commentToDelete}`);
    }

    // Novo comentario esta vazio
    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={props.author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>
                            {props.author.name}
                        </strong>
                        <span>
                            {props.author.role}
                        </span>
                    </div>
                </div>

                {/* datetime <== serve mais pra acessibilidade não tem muita importancia */}
                <time title={publishedDateFormatted} dateTime={props.publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {props.content.map(line => {
                    if(line.type === "paragraph"){
                        return(
                            <p key={line.content}>{line.content}</p>
                        )
                    }else if(line.type === "link"){
                        return(
                            <p key={line.content}><a href="#">{line.content}</a></p>
                        ) 
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>
                    Deixe seu feedBack
                </strong>

                <textarea 
                    onChange={handleNewCommentChange} 
                    value={newCommentText}
                    name="comment" 
                    placeholder="Deixe um comentário"
                    onInvalid={handleNewCommentInvalid}
                    required
                    >
                </textarea>

                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment =>{
                    return(
                        <Comment key={comment} content={comment} onDeleteComment={deleteComment}/>
                    )
                })}
            </div>
        </article>
    )
}