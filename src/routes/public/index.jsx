import { Footer, Header } from "components";
import React from "react";

export const PublicRoute = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
