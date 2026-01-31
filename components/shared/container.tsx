import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

function Container({ children, className = '' }: ContainerProps) {
  return (
    <div
      className={`lg:max-w-7xl mx-auto px-3 md:px-8 xl:px-0 ${className}`}>
      {/* className={`lg:max-w-7xl xl:max-w-screen-2xl mx-auto px-2 md:px-8 xl:px-0 ${className}`}> */}
      {children}
    </div>
  );
}

export default Container;
