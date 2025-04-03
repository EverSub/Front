import React from "react";

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-dark overflow-hidden">
      {children}
    </div>
  )
};

export default BaseLayout;