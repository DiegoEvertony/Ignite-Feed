import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

//quando o parametro não for "props" busque igual quando chama a variavel no caso "{}" <- chaves. Exemplo abaixo:
export function Avatar({hasBorder = true, ...props}: AvatarProps) {
    return (
        <div>
            <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} {...props}/>
        </div>
    )
}