import styles from "/src/components/Profile/ProfileSection/section.module.css"

export default function ProfileSection(props) {
    return (
        <div className={styles.wrapper}>
            {props.children}
        </div>
    )
}