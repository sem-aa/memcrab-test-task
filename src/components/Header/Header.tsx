import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Matrix Manipulation Project</h1>
      <p className={styles.description}>
        This project allows you to create, manipulate, and analyze a matrix.
      </p>
    </header>
  );
};

export default Header;
