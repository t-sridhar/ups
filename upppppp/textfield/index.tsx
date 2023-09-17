import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiInfo } from "react-icons/fi";
import ReactTooltip from "react-tooltip";
import styles from "./textField.module.scss";

interface props {
  label?: string;
  info?: string;
  value: string;
  placeholder: string;
  type?: "text" | "email" | "number" | "textArea" | "url";
  error?: string;
  maxCount?: number;
  disabled?: boolean;
  onChange: (e: string) => void;
  className?: string;
  clear?: () => void;
  labelPosition?: "top" | "top Small";
  disableMaxWidth?: boolean;
  leading?: string;
}

const TextField = ({
  placeholder,
  value,
  disabled,
  error,
  info,
  label,
  maxCount,
  leading,
  type = "text",
  onChange,
  className,
  clear,
  labelPosition,
  disableMaxWidth,
}: props) => {
  const handleChange = (e: any) => {
    // console.log(e.target.value + "values");
    if (error) {
      onChange(e.target.value);
    }

    if (maxCount && e.target.value.length > maxCount) return;
    onChange(e.target.value);
  };

  return (
    <div
      className={`${styles.container} ${type === "textArea" && styles.textArea} ${labelPosition === "top" && styles.topLabel} ${
        labelPosition === "top Small" && value.length && styles.topSmallLabel
      } ${className}`}
    >
      <ReactTooltip place="top" delayHide={5} disable={!!!info} />
      {labelPosition === "top Small" ? (
        value.length ? (
          <label className={styles.label}>
            {label}
            {info && <FiInfo data-tip={info} className={styles.icon} />}:
          </label>
        ) : null
      ) : (
        label && (
          <label className={styles.label}>
            {label}
            {info && <FiInfo data-tip={info} className={styles.icon} />}:
          </label>
        )
      )}
      <div className={styles.inputContainer} style={disableMaxWidth ? { maxWidth: "100%" } : {}}>
        {type === "textArea" ? (
          <textarea
            className={`${styles.input}  ${error && styles.error}`}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={handleChange}
            maxLength={maxCount}
          />
        ) : (
          <input
            prefix={leading}
            className={`${styles.input}  ${error && styles.error}`}
            type={type}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            onChange={handleChange}
            maxLength={maxCount}
          />
        )}
        {clear && value.length > 0 && <AiOutlineCloseCircle onClick={clear} className={styles.clear} />}

        {maxCount && (
          <p className={styles.count}>
            <span className={styles.span}>{value.length}</span>

            {`/${maxCount} char`}
          </p>
        )}
        {error && <p className={styles.errorText}>{error}</p>}
      </div>
    </div>
  );
};

export default TextField;
