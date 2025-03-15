import dynamic from 'next/dynamic';

const Mapa = dynamic(() => import('../components/MapaComponent-zonas'), { ssr: false });

export default Mapa;
