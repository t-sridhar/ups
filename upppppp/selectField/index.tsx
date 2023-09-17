import React, { useState } from "react";
import { FiChevronDown, FiChevronUp, FiInfo } from "react-icons/fi";
import ReactTooltip from "react-tooltip";
import styles from "./selectField.module.scss";

interface props {
  label?: string;
  info?: string;
  value: string;
  placeholder: string;
  options: string[];
  onChange: (e: string) => void;
  labelPosition?: "top";
  className?: string;
  color?: "white";
  disabled?: boolean;
}

const SelectField = ({ onChange, options, placeholder, value, info, label, labelPosition, className, color, disabled }: props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`${styles.container} ${disabled && styles.disable} ${labelPosition === "top" && styles.topLabel} ${className}`}>
      <ReactTooltip place="top" delayHide={5} disable={!!!info} />
      {label && (
        <label className={styles.label}>
          {label}
          {info && <FiInfo data-tip={info} className={styles.icon} />}:
        </label>
      )}
      <div
        onClick={() => {
          setToggle(!toggle);
        }}
        className={styles.field}
      >
        <h5 className={`${styles.value} ${value === "" && styles.placeholder}`}> {value === "" ? placeholder : value}</h5>
        {toggle ? <FiChevronUp className={styles.icon} /> : <FiChevronDown className={styles.icon} />}
        <div className={`${styles.optionsContainer}  ${color === "white" && styles.white} ${toggle && styles.active}`}>
          {options.map((option) => (
            <p onClick={() => onChange(option)} className={`${styles.option} ${option === value && styles.active}`} key={option}>
              {option}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectField;
