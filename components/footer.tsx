import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mt-auto">
    <p className="m-0 w-100 bg-success text-white text-center py-4">
      &copy; {new Date().getFullYear()} Eco City. Todos os direitos reservados.
    </p>
  </footer>
  );
};

export default Footer;