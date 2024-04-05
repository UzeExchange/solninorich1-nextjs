// Dentro de pages/index.js ou onde você precisa usar o componente Work
import dynamic from 'next/dynamic';

const WorkWithNoSSR = dynamic(() => import('../components/Work'), {
  ssr: false, // Desativa o Server-Side Rendering para este componente
});

function HomePage() {
  return (
    <div>
      <WorkWithNoSSR />
      {/* Outros componentes da página */}
    </div>
  );
}

export default HomePage;