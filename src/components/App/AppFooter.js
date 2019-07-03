import React from 'react';

const AppFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer>
        <p className="AppFooter">Jarod Burchill - {currentYear}</p>
      </footer>
    </>
  );
}

export default AppFooter;