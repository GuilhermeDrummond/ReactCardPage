import styles from "./styles.module.css"

export default function Profile(props) {
    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={props.avatar} alt={props.name} />
            <h3>{props.name}</h3>
            <div className={styles.bio}>{props.bio}</div>
            <div className={styles.phone}>{props.phone}</div>
            <div className={styles.email}>{props.email}</div>
            <div className={styles.buttons}>
                <a className={styles.a} href={props.github}>Github</a>
                
                <a className={styles.a} href={props.linkedin}>Linkedin</a>
              
                <a className={styles.a} href={props.twitter}>Twitter</a>
            </div>
        </div>
    )
}