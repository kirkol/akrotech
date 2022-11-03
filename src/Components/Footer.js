import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <div className="footer text-center">
      <div className="row m-0">
        <div className="col-md-4">
          <div className="footer-logo-link">
            <a className="footer-logo-link" href="/">
              AKROTECH
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="py-1">
            {' '}
            <a href="#contact" className="footer-fa-icons">
              <FontAwesomeIcon
                size="lg"
                className="footer-fa-icons"
                icon={faLocationDot}
              />{' '}
            </a>
            <div className="pb-2">Adres:</div>
            <div> ul. Techników 8a </div>
            <div>55-230 Jelcz-Laskowice</div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="py-1">
            <a
              href="mailto:info@akrotechpolska.com"
              className="footer-fa-icons"
            >
              <FontAwesomeIcon size="lg" icon={faEnvelope} />
            </a>{' '}
            <div className="contact-txt"> E-mail: </div>
            <div className="contact-data"> info@akrotechpolska.com</div>
          </div>
          <div className="py-1">
            <a href="tel:+48502451762" className="footer-fa-icons">
              <FontAwesomeIcon size="lg" icon={faPhone} />
            </a>{' '}
            <div className="contact-txt">Sebastian: </div>
            <div className="contact-data"> + 48 502 451 762</div>
          </div>
          <div className="py-1">
            {' '}
            <a href="tel:+48692335645" className="footer-fa-icons">
              <FontAwesomeIcon size="lg" icon={faPhone} />
            </a>{' '}
            <div className="contact-txt"> Krzysztof: </div>
            <div className="contact-data"> + 48 692 335 645</div>
          </div>
          <div className="py-1">
            {' '}
            <a href="tel:+48796266475" className="footer-fa-icons">
              <FontAwesomeIcon size="lg" icon={faPhone} />
            </a>{' '}
            <div className="contact-txt"> Aleksander: </div>
            <div className="contact-data">+ 48 796 266 475</div>
          </div>
        </div>
      </div>
      <div>&copy; Copyright 2022-{new Date().getFullYear()}</div>
    </div>
  );
};

export default Footer;
