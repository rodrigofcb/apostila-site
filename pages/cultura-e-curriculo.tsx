import Head from "next/head";

export default function CulturaCurriculo() {
  return (
    <>
      <Head>
        <title>Cultura, Currículo e Práticas Educativas</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-12 text-lg leading-relaxed">
        <h1 className="text-3xl font-bold mb-6">Cultura, Currículo e Práticas Educativas</h1>

        <p className="mb-4">
          A relação entre cultura, currículo e práticas educativas é central para a construção de uma escola democrática, inclusiva e socialmente referenciada. O currículo não é neutro: ele carrega valores, visões de mundo e escolhas culturais. Por isso, refletir criticamente sobre o currículo é essencial para garantir o direito à educação com equidade.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Currículo como construção cultural</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>O currículo é resultado de disputas e negociações sociais, históricas e políticas.</li>
          <li>Define quais saberes são valorizados, ensinados e avaliados na escola.</li>
          <li>Historicamente, privilegiou a cultura eurocêntrica, branca e masculina, silenciando vozes populares, indígenas, negras, femininas e periféricas.</li>
          <li>Uma proposta de currículo democrático deve dialogar com a diversidade de culturas e sujeitos presentes na escola.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Educação e identidade</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>A escola deve reconhecer e valorizar as identidades culturais dos estudantes.</li>
          <li>O currículo pode reforçar estigmas ou promover reconhecimento e pertencimento.</li>
          <li>Práticas educativas sensíveis à diversidade fortalecem a autoestima e o engajamento dos alunos.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Práticas pedagógicas críticas</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Desenvolver projetos interdisciplinares que articulem cultura, arte, território e história local.</li>
          <li>Trabalhar com metodologias ativas que valorizem o protagonismo dos estudantes.</li>
          <li>Problematizar temas como racismo, desigualdade, gênero e direitos humanos.</li>
          <li>Utilizar materiais e referências diversas (literatura negra, indígena, de mulheres, LGBTQIA+, etc.).</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Base Nacional Comum Curricular (BNCC)</h2>
        <p className="mb-4">
          A BNCC reconhece a importância da diversidade e dos direitos humanos como princípios transversais. No entanto, sua implementação deve ser acompanhada de uma crítica às formas normativas e tecnicistas de organização curricular.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Educação antirracista e decolonial</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>É papel da escola combater o racismo e valorizar as culturas afro-brasileiras e indígenas, como previsto nas Leis nº 10.639/2003 e nº 11.645/2008.</li>
          <li>Currículos decoloniais questionam os saberes impostos pela colonização e abrem espaço para epistemologias do Sul Global.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Materiais gratuitos online</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="https://www.youtube.com/watch?v=q9uH-EQTO2Y" className="text-blue-600 underline" target="_blank">Vídeo: O currículo é neutro?</a></li>
          <li><a href="https://www.revistacurriculosemfronteiras.org" className="text-blue-600 underline" target="_blank">Revista Currículo sem Fronteiras</a></li>
          <li><a href="https://educacaopublica.cecierj.edu.br/artigos/17/6/identidade-e-cultura-na-escola" className="text-blue-600 underline" target="_blank">Artigo: Identidade e Cultura na Escola</a></li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">O que pode cair na prova</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Concepção de currículo como construção social e cultural.</li>
          <li>Importância de práticas pedagógicas inclusivas e críticas.</li>
          <li>Relação entre currículo, identidade e diversidade.</li>
          <li>Leis que tratam da educação para as relações étnico-raciais (10.639/2003 e 11.645/2008).</li>
        </ul>
      </main>
    </>
  );
}
