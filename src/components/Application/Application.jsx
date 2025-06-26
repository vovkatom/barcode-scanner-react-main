import { useState } from 'react';
import Section from '../Section/Section';
import BarcodeScanner from 'components/BarcodeScanner/BarcodeScanner';
import Settings from 'components/Settings/Settings';
import CreateBarcode from 'components/CreateBarcode/CreateBarcode';
import scss from './Application.module.scss';

const Application = ({
  isStartScann,
  setIsScannStart,
  deviceId,
  mode,
  onSetScannDevice,
  videoDevicesList,
  deviceName,
  cameraAccessError,
}) => {
  const [barcode, setBarcode] = useState('');
  return (
    <Section className={scss.appSection} containerClassName={scss.appContainer}>
      {mode === 'codescanner' && (
        <BarcodeScanner
          onSetBarcode={setBarcode}
          deviceId={deviceId}
          isStartScann={isStartScann}
          setIsScannStart={setIsScannStart}
          cameraAccessError={cameraAccessError}
          barcode={barcode}
        />
      )}

      {mode === 'settings' && (
        <Settings
          onSetScannDevice={onSetScannDevice}
          deviceName={deviceName}
          videoDevicesList={videoDevicesList}
        />
      )}

      {mode === 'createcode' && <CreateBarcode />}
    </Section>
  );
};

export default Application;
