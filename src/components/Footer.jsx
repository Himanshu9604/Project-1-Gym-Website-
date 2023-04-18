import React from 'react';
import styles from './Footer.module.css';
import { NavLink } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
function Footer() {
    return (
        <div>
            <h1>This is the Footer</h1>
            <div className={styles.footer}>
                <div>
                    <h3>GYM</h3>
                    <h2>The body achieves what the mind believes.</h2>
                    <div className={styles.icons}>
                        <div className={styles.ic}><FaFacebookF className={styles.icon}  /></div>
                        <div className={styles.ic}><AiFillInstagram className={styles.icon} /></div>
                        <div className={styles.ic}><AiOutlineTwitter className={styles.icon}/></div>
                    </div>
                </div>
                <div>
                    <h2>Healthy living</h2>
                    <ul>
                        <li><NavLink to="#">Eat a healthy diet.</NavLink></li>
                        <li><NavLink to="#">Consume less salt and sugar</NavLink></li>
                        <li><NavLink to="#">Reduce intake of harmful fats</NavLink></li>
                        <li><NavLink to="#"> Avoid harmful use of alcohol</NavLink></li>
                        <li><NavLink to="#">Don’t smoke</NavLink></li>
                        <li><NavLink to="#">Be active</NavLink></li>

                    </ul>
                </div>
                <div>
                    <h2>Services</h2>
                    <ul>
                        <li><NavLink to="#">Home</NavLink></li>
                        <li><NavLink to="#">AboutUS</NavLink></li>
                        <li><NavLink to="#">Classes</NavLink></li>
                        <li><NavLink to="#">Blogs</NavLink></li>

                    </ul>
                </div>
                <div>
                    <h2>Programms</h2>
                    <ul>
                        <li><NavLink to="#">Login</NavLink></li>
                        <li><NavLink to="#">Registration</NavLink></li>

                    </ul>
                </div>
            </div>
            <p className={styles.pcopyright}>@2023 is All rights copy reserved</p>
        </div>
    );
}

export default Footer;