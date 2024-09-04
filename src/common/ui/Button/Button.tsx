import styles from "./Button.module.css";

export type Props = {
  type: "button" | "submit" | "reset";
  text: string;
  onClick?: () => void;
};

export default function Button(props: Props) {
  return (
    <button className={styles.button} type={props.type} onClick={props.onClick}>
      {props.text}
    </button>
  );
}
