import styles from './button.module.scss';


export type ButtonProps = {
    label: string;
    onClick: () => void;
    type?: 'primary' | 'secondary';
};
export function Button({ label, onClick, type = 'primary' }: ButtonProps) {
    const buttonClass = type === 'secondary' ? styles['button-secondary'] : styles.button;
    
    return (
        <button className={buttonClass} onClick={onClick}>
            {label}
        </button>
    )
}

export default Button;