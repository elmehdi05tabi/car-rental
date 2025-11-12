
import MapRoute from '../Map/MapRoute';
import './confirmRent.scss';
import { useSelector } from 'react-redux';
import ConfirmForm from './ConfirmForm';
function Rent() {
  const coords = useSelector(({ coords }) => coords);
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
