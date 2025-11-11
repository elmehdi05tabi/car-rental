import  { useEffect } from 'react';
import MapRoute from '../Map/MapRoute';
import './confirmRent.scss';
import { useSelector } from 'react-redux';
import ConfirmForm from './ConfirmForm';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer'
function Rent() {
  const navigate = useNavigate();
  const coords = useSelector(({ coords }) => coords);

  // useEffect(() => {
  //   if (coords.valide === false) {
  //     navigate('/');
  //   }
  // }, [coords, navigate]);

  // Vérifie que toutes les coordonnées existent 
  const hasCoords =
    coords &&
    coords.latStart &&
    coords.lonStart &&
    coords.latEnd &&
    coords.lonEnd;

  return (
    <>
    <div className="container-confirm">
      <ConfirmForm />
      <div className="mapContainer">
      {hasCoords ? (
        <MapRoute
        start={[coords.latStart, coords.lonStart]}
        end={[coords.latEnd, coords.lonEnd]}
        width={'500px'}
        height={'400px'}
        isvalid={true}
        view={8}
        />
      ) : (
        <p>Loading map...</p>
      )}
      </div>
    </div>
      
      </>
  );
}

export default Rent;
