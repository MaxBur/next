import Link from 'next/link';
import styles from '../styles/ALink.module.css';

export default function ALink ({ href, text }) {
    return (
        <Link href={href} legacyBehavior>
            <a className={styles.link}>
                {text}
            </a>
        </Link>
    )
}