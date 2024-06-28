import React, { useState, useEffect } from 'react';
import CustomLoader2 from './Loaders/loader2/CustomLoader2';
const DelayedComponent = ({ children, delay }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => {
      clearTimeout(timer);
      setShow(false);
    };
  }, [delay]);

  return show ? children : NULL;
};

export default DelayedComponent;
