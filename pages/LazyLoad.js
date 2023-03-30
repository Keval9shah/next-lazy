// import { useIsCypress } from 'context-providers/is-cypress-state-provider';
import React from 'react';
import ReactLazyLoad from 'react-lazyload';

export const LazyLoad = ({
  children,
  height = 200,
  placeholder,
  offset = 100,
  ...props
}) => {
//   const { isCypress } = useIsCypress();

//   if (isCypress) {
//     return <div>{children}</div>;
//   }
  return (
    <ReactLazyLoad height={height} placeholder={placeholder} offset={offset} {...props}>
      {children}
    </ReactLazyLoad>
  );
};
