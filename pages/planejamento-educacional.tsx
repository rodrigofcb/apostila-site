import Head from "next/head";

export default function PlanejamentoEducacional() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <Head>
        <title>Planejamento Educacional</title>
      </Head>

      <h1 className="text-3xl font-bold mb-4">Planejamento Educacional</h1>

      <p className="mb-4">
        O planejamento educacional é uma prática essencial à organização do processo
        de ensino-aprendizagem. Envolve a definição de objetivos, conteúdos,
        estratégias e formas de avaliação, sempre em consonância com o Projeto
        Político-Pedagógico (PPP) da escola.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Níveis de Planejamento</h2>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Plano de curso:</strong> organizado por área/disciplina, com objetivos gerais e conteúdos ao longo do ano.</li>
        <li><strong>Plano de ensino:</strong> detalha os conteúdos por bimestre, com objetivos específicos, estratégias e avaliação.</li>
        <li><strong>Plano de aula:</strong> mais pontual, detalha a condução de uma aula específica, com tempo, metodologia e recursos.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Articulação com o PPP</h2>
      <p className="mb-4">
        Todos os planos devem estar alinhados com os princípios e metas do PPP,
        respeitando a identidade da escola, o contexto dos estudantes e as diretrizes
        curriculares vigentes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Importância</h2>
      <p className="mb-4">
        O planejamento educacional contribui para:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Organizar o tempo e os conteúdos;</li>
        <li>Garantir coerência entre objetivos e práticas pedagógicas;</li>
        <li>Favorecer a aprendizagem dos alunos;</li>
        <li>Promover a reflexão docente;</li>
        <li>Evitar improvisações e garantir intencionalidade no ensino.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Referências Legais</h2>
      <p className="mb-4">
        A Base Nacional Comum Curricular (BNCC) e as Diretrizes Curriculares Nacionais
        orientam a elaboração dos planos em todas as etapas da Educação Básica.
      </p>
    </div>
  );
}
