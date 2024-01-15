import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { motion } from 'framer-motion';

function Map() {
  const [containerStyle, setContainerStyle] = useState({
    width: '100%',
    height: '400px'
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(max-width: 600px)').matches) {
        
        setContainerStyle({ width: '100%', height: '300px' });
      } else {
      
        setContainerStyle({ width: '100%', height: '400px' });
      }
    };

    
    handleResize();

    
    window.addEventListener('resize', handleResize);

  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const center = {
    lat: -3.745,
    lng: -38.523
  };

  return (
    <LoadScript
      googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          {/* You can add markers or other components here */}
        </GoogleMap>
      </motion.div>
    </LoadScript>
  );
}

export default Map;
