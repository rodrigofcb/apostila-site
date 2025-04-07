import Head from "next/head";

export default function Ldb() {
  return (
    <>
      <Head>
        <title>Lei de Diretrizes e Bases da Educação Nacional (LDB)</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-12 text-lg leading-relaxed">
        <h1 className="text-3xl font-bold mb-6">Lei de Diretrizes e Bases da Educação Nacional (LDB)</h1>

        <p className="mb-4">
          A Lei nº 9.394, de 20 de dezembro de 1996, conhecida como LDBEN, organiza a educação nacional no Brasil. Estabelece princípios, objetivos e a estrutura dos níveis e modalidades de ensino. A educação, segundo a LDB, é dever do Estado e da família, e deve promover o pleno desenvolvimento do educando, seu preparo para o exercício da cidadania e sua qualificação para o trabalho.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Pontos principais da LDB</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Princípios da educação:</strong> Igualdade de acesso, liberdade de aprender e ensinar, pluralismo de ideias, gestão democrática e valorização do magistério.</li>
          <li><strong>Organização federativa:</strong> União, Estados, DF e Municípios possuem competências distintas e complementares na oferta educacional.</li>
          <li><strong>Educação Básica:</strong> Obrigatória e gratuita dos 4 aos 17 anos. Inclui educação infantil, ensino fundamental e médio.</li>
          <li><strong>Educação de Jovens e Adultos (EJA):</strong> Destinada a quem não teve acesso na idade própria. Mínimo de 15 anos para o fundamental e 18 para o médio.</li>
          <li><strong>Educação Profissional e Tecnológica (EPT):</strong> Integra a formação ao trabalho, ciência e tecnologia. Pode ser integrada, concomitante ou subsequente ao ensino médio.</li>
          <li><strong>Avaliação:</strong> Deve ser contínua e cumulativa, priorizando aspectos qualitativos.</li>
          <li><strong>Projeto Político-Pedagógico (PPP):</strong> Cada escola deve elaborar com a participação da comunidade.</li>
          <li><strong>Gestão democrática:</strong> Participação de conselhos escolares e da comunidade.</li>
          <li><strong>Valorização dos profissionais:</strong> Exige formação superior para docentes, planos de carreira e piso salarial nacional.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Materiais gratuitos online</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="http://www.planalto.gov.br/ccivil_03/leis/l9394.htm" className="text-blue-600 underline" target="_blank">Texto integral da LDB – Planalto</a></li>
          <li><a href="https://www.youtube.com/watch?v=VuH8PbSIs2A" className="text-blue-600 underline" target="_blank">Vídeo-aula: LDB comentada artigo por artigo</a></li>
          <li><a href="https://www.jusbrasil.com.br/legislacao/1879078200" className="text-blue-600 underline" target="_blank">Resumo LDB no Jusbrasil</a></li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">O que costuma cair em prova</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Nome da lei (LDBEN), número (9.394/1996), apelido (Lei Darcy Ribeiro), lei anterior (LDB de 1971).</li>
          <li>Etapas da Educação Básica: Educação Infantil, Ensino Fundamental e Médio.</li>
          <li>Princípios fundamentais como vinculação da educação ao mundo do trabalho e à prática social.</li>
          <li>Responsabilidades da União, Estados e Municípios sobre os diferentes níveis e modalidades de ensino.</li>
          <li>Formas de oferta da educação profissional e sua articulação com o ensino médio.</li>
          <li>Avaliação contínua, projeto político-pedagógico, gestão democrática e valorização docente.</li>
        </ul>
      </main>
    </>
  );
}
