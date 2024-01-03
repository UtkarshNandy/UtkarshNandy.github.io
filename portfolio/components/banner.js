import styles from "./banner.module.css";

const Banner = (props) => {
    return (
        <div className={styles.background}>
        <header className="row mb-4">
            <div className={`col-7 mt-5 ${styles.title}`}>
                {props.headerText}
            </div>
            <div className="col-5" >
                <img src = "./Self_Portrait.jpeg" alt ="portrait" className={styles.portrait}/>
            </div>
        </header>
        </div>
    );
};

export default Banner;