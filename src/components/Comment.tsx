import { ThumbsUp, Trash } from "@phosphor-icons/react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"
import { useState } from "react";

interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment(props: CommentProps){
    const [likeCount, setLikeCount] = useState(0);

    //função não utilizada porque esta sendo testada outra com arrow function no button mas esta serve tambem. Mas essa maneira abaixo sera para casos expecificos
    function handleLikeComment(){
        setLikeCount((state) =>{
            return state + 1;
        });
    }

    function handleDeleteComment(){
        console.log("Deletar!");

        //fazendo a comunicação entre componentes. obs: tem a outra parte no Post.jsx
        props.onDeleteComment(props.content);
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/diegoevertony.png" alt=""/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>
                                Diego Evertony
                            </strong>
                            <time title="11 de Setembro ás 21:44h" dateTime="2024-09-11">
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar Comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>
                        {props.content}
                    </p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
            </footer>
            </div>
        </div>
    )
}