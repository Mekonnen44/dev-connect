import React, { useEffect } from 'react';

function Toast({ message, closeToast }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      closeToast();
    }, 3000);
    return () => clearTimeout(timer);
  }, [closeToast]);

  return (
    <div className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-md shadow-md">
      {message}
      <button onClick={closeToast} className="ml-2">&times;</button>
    </div>
  );
}

export default Toast;