import styles from "./ErrorMessage.module.css";

type Props = {
  text: string;
};

export default function ErrorMessage({ text }: Props) {
  return <div className={styles.error__message}>{text}</div>;
}
