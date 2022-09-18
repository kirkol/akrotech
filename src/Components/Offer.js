import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import automatic from '../styles/images/automatic.jpg';
import fixing from '../styles/images/fixing.jpg';
import hydraulic from '../styles/images/hydraulic.jpg';
import hydraulic_pneumatic from '../styles/images/hydraulic_pneumatic.jpg';
import milling from '../styles/images/milling.jpg';
import multimeter from '../styles/images/multimeter.jpg';
import safety from '../styles/images/safety.jpg';
import relocation from '../styles/images/relocation.jpg';
import renovation from '../styles/images/renovation.jpg';
import service from '../styles/images/service.jpg';
const Offer = () => {
  return (
    <div id="offer" className="container pt-4">
      <h1>OFERTA</h1>
      <div className="pb-4">
        <h2>Utrzymanie ruchu</h2>
        <div className="row">
          <div className="col-md-3 pb-2">
            <Card className="offer-card">
              <div
                className="offer-img"
                style={{
                  backgroundImage: `url(${fixing})`,
                  backgroundPosition: `center `,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
              <CardBody>
                <CardTitle tag="h5">NAPRAWY MASZYN</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div className="col-md-3 pb-2">
            <Card className="offer-card">
              <div
                className="offer-img"
                style={{
                  backgroundImage: `url(${service})`,
                  backgroundPosition: `center `,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
              <CardBody>
                <CardTitle tag="h5">PRZEGLĄDY I SERWIS MASZYN</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div className="col-md-3 pb-2">
            <Card className="offer-card">
              <div
                className="offer-img"
                style={{
                  backgroundImage: `url(${milling})`,
                  backgroundPosition: `center `,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
              <CardBody>
                <CardTitle tag="h5">
                  USTAWIANIE, URUCHAMIANIE MASZYN, LINII PRODUKCYJNYCH I
                  MONTAŻOWYCH
                </CardTitle>
              </CardBody>
            </Card>
          </div>
          <div className="col-md-3 pb-2">
            <Card className="offer-card">
              <div
                className="offer-img"
                style={{
                  backgroundImage: `url(${relocation})`,
                  backgroundPosition: `center `,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
              <CardBody>
                <CardTitle tag="h5">RELOKACJE MASZYN</CardTitle>
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 pb-2">
            <Card className="offer-card">
              <div
                className="offer-img"
                style={{
                  backgroundImage: `url(${multimeter})`,
                  backgroundPosition: `center `,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
              <CardBody>
                <CardTitle tag="h5">
                  POMIARY ELEKTRYCZNE MASZYN, STANOWISKOWE
                </CardTitle>
              </CardBody>
            </Card>
          </div>
          <div className="col-md-3 pb-2">
            <Card className="offer-card">
              <div
                className="offer-img"
                style={{
                  backgroundImage: `url(${hydraulic})`,
                  backgroundPosition: `center `,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
              <CardBody>
                <CardTitle tag="h5">HYDRAULIKA SIŁOWA</CardTitle>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
      <div className="pb-4">
        <h2>Doradztwo techniczne</h2>
        <div className="row">
          <div className="col-md-3 pb-2">
            <Card className="offer-card">
              <div
                className="offer-img"
                style={{
                  backgroundImage: `url(${safety})`,
                  backgroundPosition: `center `,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
              <CardBody>
                <CardTitle tag="h5">
                  DORADZTWO W ZAKRESIE BEZPIECZEŃSTWA MASZYN
                </CardTitle>
              </CardBody>
            </Card>
          </div>
          <div className="col-md-3 pb-2">
            <Card className="offer-card">
              <div
                className="offer-img"
                style={{
                  backgroundImage: `url(${renovation})`,
                  backgroundPosition: `center `,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
              <CardBody>
                <CardTitle tag="h5">RENOWACJE, MODERNIZACJA MASZYN</CardTitle>
              </CardBody>
            </Card>
          </div>
          <div className="col-md-3 pb-2">
            <Card className="offer-card">
              <div
                className="offer-img"
                style={{
                  backgroundImage: `url(${hydraulic_pneumatic})`,
                  backgroundPosition: `center `,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
              <CardBody>
                <CardTitle tag="h5">
                  STEROWANIE MASZYN I URZĄDZEŃ: PNEUMATYKA, HYDRAULIKA SIŁOWA
                </CardTitle>
              </CardBody>
            </Card>
          </div>
          <div className="col-md-3 pb-2">
            <Card className="offer-card">
              <div
                className="offer-img"
                style={{
                  backgroundImage: `url(${automatic})`,
                  backgroundPosition: `center `,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              ></div>
              <CardBody>
                <CardTitle tag="h5">AUTOMATYKA PRZEMYSŁOWA</CardTitle>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
