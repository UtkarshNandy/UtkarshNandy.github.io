
import styles from "./intro.module.css";
import React, { useRef, useEffect } from 'react';


const Intro = () => {
    const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.style.transition = 'opacity 2s';
      elementRef.current.style.opacity = 1;
    }
  }, []);
    
    return (
        <header className={`${styles.intro}`}>
                <div ref={elementRef} style={{opacity: 0}}>
                    <div className={`${styles.person}`}>
                    🧑🏼‍💻
                    </div>
                <div className={`${styles.title}`}>
                Hey, I'm Utkarsh
                </div>
                <div className={`${styles.subtitle}`}>
                 and I'm studying Computer Science @ UC Davis!🐄.</div>
                <a href="https://www.linkedin.com/in/utkarsh-nandy-6286381b4/">
                <img src="./icons8-linkedin.svg" alt="linkedin" className={`${styles.linkedin}`}></img>
                </a>
                <a href="https://github.com/UtkarshNandy">
                <img src="./icons8-github.svg" alt="github" className={`${styles.github}`}></img>
                </a>
                <a href="mailto:utkarsh.nandy@gmail.com"> 
                <img src="./icons8-mail-50.png" alt="mail" className={`${styles.mail}`}></img>
                </a>
                <a href="./Utkarsh_Nandy_CS_Resume.pdf"> 
                <img src="./icons8-resume-50.png" alt="resume" className={`${styles.resume}`}></img>
                </a>
                </div>
        </header>
    );
};

export default Intro;