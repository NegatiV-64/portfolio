import React from 'react';
import styles from './About.module.css'

import { SiJavascript, SiCplusplus, SiReact, SiMaterialUi, SiVisualstudiocode, SiXbox } from "react-icons/si";
import LinkWrapper from '../Layout/LinkWrapper';
import Button from '../Layout/Button';

const About = (props) => {

    const linkList = props.linkList.map(item =>
        <Button key={item.path} to={item.path}>{item.link}</Button>
    )

    return (
        <section className={styles.about}>
            <div className={`container ${styles.about__container}`}>
                <h2>About me</h2>
                <p className={styles.about__info}>I'm a Front-End Developer, currently working for <a href="https://web.latmedia.uz/">LatMedia Group</a> in Tashkent, Uzbekistan. Besides my work,
                    I am studying in Webster Univesity for Bachelor's Degree in MIS.
                    I have serious passion for creating reactive, smooth and interactive web apps.</p>
                <p className={styles.about__core}>As developer, I have 4 core principles:
                    Fast, Responsive, Intuitive, Dynamic.
                    I call them FRID, because they sound cooler this way.</p>
                <p className={styles.about__favs}>My favourite</p>
                <ul className={styles.about__favsList}>
                    <li>PL: <SiJavascript style={{ color: "#F0DB4F" }} /> and <SiCplusplus style={{ color: "#5E97D0" }} /></li>
                    <li>JS Framework: <SiReact style={{ color: "#61DBFB" }} /> (!sic)</li>
                    <li>UI Library: <SiMaterialUi style={{ color: "#3f51b5" }} /></li>
                    <li>Code Editor: <SiVisualstudiocode style={{ color: "#0078d7" }} /></li>
                    <li>Console: <SiXbox style={{ color: "#107C10" }} /></li>
                </ul>
                <LinkWrapper className={styles.wrapper}>
                    {linkList}
                </LinkWrapper>
            </div>
        </section>
    );
}

export default About;
