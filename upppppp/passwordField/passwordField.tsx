import React from 'react';
import { IconContext } from 'react-icons';
import styles from './passwordField.module.scss';

interface props {
    placeholder: string;
    icon?: any;
    type: 'password' | 'text';
    value: string | number | undefined;
    onChange: any;
    name: string;
}

const PasswordField = ({
    icon,
    onChange,
    placeholder,
    type,
    value,
    name,
}: props) => {

    const intervalRef = React.useRef<any>(null);

    const [fieldType, setFieldType] = React.useState<'password' | 'text'>('password');



    const startCounter = () => {
        if (intervalRef.current) return 0;
        intervalRef.current = setInterval(() => {
            setFieldType((prev) => 'text')
        }, 10);

    }
    const stopCounter = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            setFieldType((prev) => 'password');
        }
    }

    React.useEffect(() => {

        return () => stopCounter()

    }, [])

    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                type={fieldType}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
            />
            {icon && value && <div className={styles.iconContainer} onMouseDown={startCounter} onMouseUp={stopCounter} onMouseLeave={stopCounter} onTouchStart={startCounter} onTouchEnd={stopCounter}>
                <IconContext.Provider
                    value={{
                        className: `${styles.icon}`,
                    }}
                >
                    {icon()}
                </IconContext.Provider>
            </div>}
        </div>
    );
};

export default PasswordField;
