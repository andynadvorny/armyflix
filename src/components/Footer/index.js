import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        developed by <strong>Andy</strong> with <span>&hearts;</span> for
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
