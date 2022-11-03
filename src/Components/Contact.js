import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div id="contact" className="container py-4">
      <h1>KONTAKT</h1>
      <div className="py-2">
        <div className="pb-2">
          <a href="mailto:info@akrotechpolska.com" className="fa-icons">
            <FontAwesomeIcon size="lg" icon={faEnvelope} />
          </a>{' '}
          <div className="contact-txt"> E-mail: </div>
          <div className="contact-data"> info@akrotechpolska.com</div>
        </div>

        <div className="py-2">
          <a href="tel:+48502451762" className="fa-icons">
            <FontAwesomeIcon size="lg" icon={faPhone} />
          </a>{' '}
          <div className="contact-txt">Sebastian: </div>
          <div className="contact-data"> + 48 502 451 762</div>
        </div>
        <div className="py-2">
          {' '}
          <a href="tel:+48692335645" className="fa-icons">
            <FontAwesomeIcon size="lg" icon={faPhone} />
          </a>{' '}
          <div className="contact-txt"> Krzysztof: </div>
          <div className="contact-data"> + 48 692 335 645</div>
        </div>
        <div className="py-2">
          {' '}
          <a href="tel:+48796266475" className="fa-icons">
            <FontAwesomeIcon size="lg" icon={faPhone} />
          </a>{' '}
          <div className="contact-txt"> Aleksander: </div>
          <div className="contact-data">+ 48 796 266 475</div>
        </div>
      </div>
      <div className="py-2">
        {' '}
        <FontAwesomeIcon size="lg" icon={faLocationDot} /> Adres: ul. Techników
        8a, 55-230 Jelcz-Laskowice
      </div>
      <iframe
        title="googleMap"
        id="googleMapId"
        width={'100%'}
        style={{ minHeight: '300px' }}
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCJMzPr06tNkQ6l8-Gwv9VxQ3uk_hqAZcY&amp;zoom=13&amp;q=jelcz%20laskowice%2C%20technik%C3%B3w%208a&amp;maptype=roadmap"
      />
    </div>
  );
};

export default Contact;
