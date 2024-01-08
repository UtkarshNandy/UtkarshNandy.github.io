import styles from "./content.module.css";

const Content = () => {
    return(
        <div className={`${styles.content}`}>
        <h3 className={`${styles.about}`}>about me:</h3>
        <p>I am currently a junior at UC Davis. My primary
            areas of focus include web and app development in addition to
            developing a software suite for a fully autonomous vehicle.
            I have also started diving deeper into AI and ML.
        </p>
        <p>
            I am an associate lead at <span className={`${styles.google}`}>
            Google Student Developer Club</span> at Davis and 
            also am a part of the Connected autonomous vehicle
            subteam at <span className={`${styles.ecocar}`}>
            ECOcar EV challenge.</span> Additionally, I am also the president
            of new member education at the <span className={`${styles.frat}`}>
            Pi Kappa Alpha</span> fraternity.
        </p>
        <p>
            In my free time, I love weight lifting, watching anime, 
            discovering new food spots, travelling,and learning 
            theoretical math and physics concepts. I am also very outgoing
            and love to meet new people!
        </p>
        </div>
    )
}

export default Content;