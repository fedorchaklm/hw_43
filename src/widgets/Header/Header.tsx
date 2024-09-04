import styles from "./Header.module.css";
import { PropsWithChildren } from "react";

export default function Header({ children }: PropsWithChildren) {
  return <header className={styles.header}>{children}</header>;
}
