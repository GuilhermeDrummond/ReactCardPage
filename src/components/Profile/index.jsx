import { useState } from "react"
import LinkButton from "../LinkingButton/link"
import Title from "../Title/tiltle"
import ProfileSection from "./ProfileSection/section"
import styles from "./styles.module.css"

export default function Profile(props) {
    const [followButton, setFollowText] = useState("Seguir")

    function handleClick(ev) {
        alert("Seguiu!")
        setFollowText("✔");
    }

    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={props.avatar} alt={props.name} />
            <Title>
                <span>{props.name}</span>
                <button className={styles.button}
                    onClick={handleClick}
                >
                    {followButton}
                </button>
            </Title>
            <ProfileSection>{props.bio}</ProfileSection>
            <ProfileSection>{props.phone}</ProfileSection>
            <ProfileSection>{props.email}</ProfileSection>
            <ProfileSection> 
                <div className={styles.buttons}>
                   <LinkButton href={props.github}>Github</LinkButton>
                    
                   <LinkButton href={props.linkedin}>Linkedin</LinkButton>

                   <LinkButton href={props.twitter}>Twitter</LinkButton>
                </div>
            </ProfileSection>
        </div>
    )
}