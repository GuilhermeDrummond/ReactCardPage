import styles from "../Title/title.module.css"

export default function Title(props) {
    return (
        <h3 className={styles.wrapper}>
            
            {props.children}</h3>
        
    )

}