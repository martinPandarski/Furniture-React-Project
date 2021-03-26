import {useEffect, useState} from 'react';
import * as furnitureService from '../../services/furnitureService'

function Details({
  match
}) {
    let [furniture, setFurniture] = useState({});

    useEffect(() => {
      furnitureService.getOne(match.params.objectId)
          .then(res => setFurniture(res))
    }, [])
  return (
      <div className="details-wrapper">
            <img src="" alt="" fluid/>
      </div>
  );
}

export default Details;
