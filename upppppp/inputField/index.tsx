import React from 'react';
import { IconContext } from 'react-icons';
import styles from './inputFiled.module.scss';

interface props {
  placeholder: string;
  icon?: any;
  type: 'text' | 'email' | 'tel' | 'password' | 'number';
  value: string | number | undefined;
  onChange: any;
  name: string;
}

const InputField = ({
  icon,
  onChange,
  placeholder,
  type,
  value,
  name,
}: props) => {
  return (
    <div className={styles.container}>
      {icon && <div className={styles.iconContainer}>
        <IconContext.Provider
          value={{
            className: `${styles.icon}`,
          }}
        >
          {icon()}
        </IconContext.Provider>
      </div>}
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default InputField;
