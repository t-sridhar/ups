import { useSizeUnits } from "modules/inventory/settings/hooks/sizeUnits";
import { useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import styles from "./productQuantityType.module.scss";

interface props {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const ProductQuantityType = ({ onChange, value, className }: props) => {
  const [toggle, setToggle] = useState(false);
  const { data } = useSizeUnits();

  if (!data) return <h1>loading...</h1>;
  //  TODO : add proper loading state
  return (
    <div className={`${styles.container} ${className}`}>
      <h4 className={styles.heading}>Quantity Type</h4>
      <div className={styles.selectionContainer}>
        <div
          className={`${styles.button} ${value !== "" && styles.active}`}
          onClick={(e) => {
            e.stopPropagation();
            setToggle(!toggle);
          }}
        >
          <p className={styles.title}>{value !== "" ? value : data[0] ? data[0].type : "Units"}</p>
          {!toggle ? <FiChevronDown className={styles.icon} /> : <FiChevronUp className={styles.icon} />}
        </div>
        <div className={`${styles.optionsContainer} ${toggle && styles.toggled}`}>
          {data.map((item) => (
            <p
              className={`${styles.option} ${value === item.type && styles.selected}`}
              onClick={(e) => {
                e.stopPropagation();
                onChange(item.type);
                setToggle(false);
              }}
              key={item._id}
            >
              {item.type}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductQuantityType;
