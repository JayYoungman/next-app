import React, { PropsWithChildren, ReactNode } from "react";
import styles from "./results.module.scss";

interface SidebarLayoutProps {
  sidebar: ReactNode;
}

export const SidebarLayout = ({
  children,
  sidebar,
}: PropsWithChildren<SidebarLayoutProps>) => (
  <div className={styles.page}>
    <section className={styles.container}>
      <aside className={styles.sidebar}>{sidebar}</aside>
      <section className={styles.main}>{children}</section>
    </section>
  </div>
);
