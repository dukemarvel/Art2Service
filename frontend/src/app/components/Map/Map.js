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
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const center = {
    lat: 6.53575,
    lng: 3.376194
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ width: '100%', position: 'relative' }}
      >
        {/* Container for text and search input */}
        <div style={{ padding: '10px', background: '#fff', zIndex: 10 }}>
          <h2 style={{ margin: '0 0 10px', color: '#000', textAlign: 'center' }}>
            We deliver anywhere you are
          </h2>
          <input
            type="text"
            placeholder="Search for address..."
            style={{
              width: '100%',
              padding: '8px',
              boxSizing: 'border-box',
              marginBottom: '10px'
            }}
          />
        </div>

        {/* The map itself */}
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        />
      </motion.div>
    </LoadScript>
  );
}

export default Map;
