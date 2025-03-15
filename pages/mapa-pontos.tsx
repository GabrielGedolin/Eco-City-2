import dynamic from 'next/dynamic';

const Mapa = dynamic(() => import('../components/MapaComponents-pontos'), { ssr: false });

export default Mapa;
