import { Link } from 'react-router-dom';
import { isDesktop, isIOS, deviceType  } from 'react-device-detect';
import axios from 'axios';
import '../styles/Home.css';

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Thing",
  description: "This is a formular for collecting data about human interaction with different types of scrolling/zooming",
  image: "https://miro.medium.com/max/1400/1*UAGU532MbhR5cm3symwWqg.png",
};

const Home = () => {
  const submit = async () => {
    const response = await axios(
        'https://formular-api.cyclic.app/device',
        {
            method: 'post',
            data: {deviceType: deviceType},
        },
    );
  }
  submit();
    return (
      <div className=' h-100 flex flex-column justify-around items-center'>
        <script type="application/ld+json">
          {JSON.stringify(articleStructuredData)}
        </script>
        {isIOS && <Link className='buttonLink w-25 pa4' to="/form">Form</Link>}
        {isDesktop && <Link className='buttonLink w-25 pa4' to="/dashboard">Dashboard</Link>}
      </div>
    );
};

export default Home;