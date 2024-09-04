import styles from "./TextInput.module.css";

type Props = {
  name: string;
  value: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
};

const TextInput = (props: Props) => {
  return (
    <input className={styles.input} type="text" {...props} />
  );
};

export default TextInput;
