import Head from "next/head";

export default function PortariaEmti() {
  return (
    <>
      <Head>
        <title>Portaria MEC nº 2.116/2019 – Programa EMTI</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-12 text-lg leading-relaxed">
        <h1 className="text-3xl font-bold mb-6">Portaria MEC nº 2.116/2019 – Programa EMTI</h1>

        <p className="mb-4">
          A Portaria nº 2.116/2019, do Ministério da Educação, estabelece diretrizes para o Programa de Fomento às Escolas de Ensino Médio em Tempo Integral (EMTI). Alinhada à Lei 13.415/2017, essa portaria orienta a implementação e o financiamento de escolas de tempo integral nas redes estaduais.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Objetivo do Programa</h2>
        <p className="mb-4">
          Apoiar a ampliação da oferta de ensino médio em tempo integral, promovendo a formação integral e integrada do estudante, com base na BNCC e nos itinerários formativos previstos pelo Novo Ensino Médio.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Pontos principais da Portaria</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Duração:</strong> Prevista para 10 anos, com acompanhamento de metas e resultados.</li>
          <li><strong>Critérios de elegibilidade:</strong> Escolas com ao menos 40 matrículas no 1º ano, infraestrutura mínima, prioridade para alunos em vulnerabilidade social.</li>
          <li><strong>Adesão:</strong> Realizada pelas Secretarias Estaduais de Educação, mediante termo de compromisso e plano de implementação.</li>
          <li><strong>Financiamento:</strong> Repasse de recursos federais para alimentação, infraestrutura, formação docente, materiais etc.</li>
          <li><strong>Monitoramento:</strong> As escolas devem fornecer dados sobre matrícula, frequência, evasão e desempenho.</li>
          <li><strong>Integração com o Novo Ensino Médio:</strong> O tempo integral viabiliza os itinerários formativos no contraturno, como projetos de vida, eletivas, formação técnica, etc.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Características das escolas de tempo integral</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Jornada escolar de pelo menos 7 horas diárias ou 35 horas semanais.</li>
          <li>Currículo com disciplinas obrigatórias + projetos interdisciplinares e eletivas.</li>
          <li>Formação voltada ao desenvolvimento cognitivo, social, cultural e emocional.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Materiais gratuitos online</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="https://abmes.org.br/arquivos/legislacoes/Portaria-mec-2116-2019-12-06.pdf" className="text-blue-600 underline" target="_blank">Texto da Portaria 2.116/2019 – ABMES</a></li>
          <li><a href="https://www.gov.br/educacao/pt-br/assuntos/novo-ensino-medio/marco-legal" className="text-blue-600 underline" target="_blank">Portal Gov.br – Marco Legal do Novo Ensino Médio</a></li>
          <li><a href="http://www.educacao.df.gov.br/ensino-medio-em-tempo-integral/" className="text-blue-600 underline" target="_blank">Site SEDF – Informações sobre o EMTI</a></li>
          <li><a href="https://www.youtube.com/results?search_query=portaria+2116+2019+ensino+médio+integral" className="text-blue-600 underline" target="_blank">Vídeos explicativos no YouTube</a></li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">O que pode cair na prova</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Finalidade do Programa EMTI: ampliação do ensino médio integral com apoio técnico e financeiro.</li>
          <li>Vínculo com a Lei 13.415/2017 (Reforma do Ensino Médio).</li>
          <li>Critérios de seleção das escolas participantes.</li>
          <li>Características da escola de tempo integral segundo a legislação.</li>
          <li>Relação entre a carga horária estendida e os itinerários formativos.</li>
        </ul>
      </main>
    </>
  );
}
