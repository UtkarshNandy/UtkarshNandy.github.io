import styles from "./intro.module.css";


const Intro = () => {
    return (
        <header className={`${styles.intro}`}>
            <div className={`${styles.title}`}>
            🧑🏼‍💻
            </div>
            <div className={`${styles.title}`}>
                Hey, I'm Utkarsh
            </div>
            <div className={`${styles.subtitle}`}>and I'm studying Computer Science at UC Davis!🐄.</div>
        </header>
    );
};
export default Intro;