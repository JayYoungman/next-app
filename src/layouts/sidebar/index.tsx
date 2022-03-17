import React, { PropsWithChildren, ReactNode } from "react";
import styles from "./results.module.scss";

interface SidebarLayoutProps {
  sidebar: ReactNode;
}

export const SidebarLayout = ({
  children,
  sidebar,
}: PropsWithChildren<SidebarLayoutProps>) => (
  <section className={styles.container}>
    <aside>{sidebar}</aside>
    <section>{children}</section>
  </section>
);
