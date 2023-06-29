import React, { ReactNode } from "react";
import { LpHeader } from "./LpHeader";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <LpHeader />
      {children}
      <Footer />
    </div>
  );
};
