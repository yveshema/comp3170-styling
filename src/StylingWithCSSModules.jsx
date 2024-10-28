import styles, {btn, primary, secondary, outline, imageWrapper } from './Example.module.css';
import cx from 'classnames';

export default function Example() {
    return (
        <>
            <div className={styles.buttons}>
                <button className={styles.btn}>Normal</button>
                <button className={`${styles.btn} ${styles.primary}`}>Primary</button>
                <button className={`${styles.btn} ${styles.secondary}`}>Secondary</button>
                <button className={`${styles.btn} ${styles.outline}`}>Outline</button>
                <button className={cx(styles.btn, styles.outline, styles.primary)}>Outline primary</button>
                <button className={cx(styles.btn, styles.outline, styles.secondary)}>Outline secondary</button>
                <button className={cx(btn, outline, primary)}>Another outline primary button</button>
                <button>Unstyled</button>
             </div>
        </>
    );
}