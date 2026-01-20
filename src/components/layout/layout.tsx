import React from 'react'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-bg flex flex-col ">
      {children}
    </div>
  );
};