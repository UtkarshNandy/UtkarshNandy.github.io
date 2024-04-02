import React, { useRef, useEffect } from 'react';
import Image from 'next/image'; // Import Image component
import styles from "./intro.module.css";

const Intro = () => {
    const elementRef = useRef(null);

    useEffect(() => {
        if (elementRef.current) {
            elementRef.current.style.transition = 'opacity 2s';
            elementRef.current.style.opacity = 1;
        }
    }, []);
    
    return (
        <header className={styles.intro}>
            <div ref={elementRef} style={{ opacity: 0 }}>
                <div className={styles.person}>
                    🧑🏼‍💻
                </div>
                <div className={styles.title}>
                    Hey, I&apos;m Utkarsh
                </div>
                <div className={styles.subtitle}>
                    and I&apos;m studying Computer Science @ UC Davis! 🐄
                </div>
                <a href="https://www.linkedin.com/in/utkarsh-nandy-6286381b4/">
                    {/* Replace <img> with <Image> */}
                    <Image src="/icons8-linkedin.svg" alt="linkedin" width={50} height={50} />
                </a>
                <a href="https://github.com/UtkarshNandy">
                    {/* Replace <img> with <Image> */}
                    <Image src="/icons8-github.svg" alt="github" width={50} height={50} />
                </a>
                <a href="mailto:utkarsh.nandy@gmail.com">
                    {/* Replace <img> with <Image> */}
                    <Image src="/icons8-mail-50.png" alt="mail" width={50} height={50} />
                </a>
                <a href="./Utkarsh_Nandy_CS_Resume.pdf">
                    {/* Replace <img> with <Image> */}
                    <Image src="/icons8-resume-50.png" alt="resume" width={50} height={50} />
                </a>
            </div>
        </header>
    );
};

export default Intro;
