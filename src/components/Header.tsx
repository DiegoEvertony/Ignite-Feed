/*
quando for CSS MODULE para chamar o estilo tem que ser:
Exemplo: nomeImport.nomeDaClasse ou style.header
*/
// css exclusivo do arquivo App.jsx
import styles from "./Header.module.css";
import igniteLogo from "../assets/ignite-logo.svg";

// Obs: Todos os components devem começar com a letra Maiuscula.
export function Header(){
    return (
        <div className="">
            <header className={styles.header}>
                <img src={igniteLogo} alt="Logotipo Ignite" />
                <strong>Ignite Feed</strong>
            </header>
        </div>
    )
}