import Footer from "@/components/shared/footer";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
