import Head from "next/head";

export default function ConceitoHistoricoCritico() {
  return (
    <>
      <Head>
        <title>Concepção Histórico-Crítica da Educação</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-12 text-lg leading-relaxed">
        <h1 className="text-3xl font-bold mb-6">Concepção Histórico-Crítica da Educação</h1>

        <p className="mb-4">
          Desenvolvida principalmente por Dermeval Saviani a partir dos anos 1970, a concepção histórico-crítica entende a educação como prática social vinculada às condições históricas e às lutas de classe. É uma resposta às pedagogias não-diretivas e espontaneístas, propondo que o ensino de conteúdos sistematizados é essencial para a formação crítica e emancipadora dos alunos, especialmente das classes populares.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Fundamentos teóricos</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Baseada no materialismo histórico-dialético (Marx e Engels).</li>
          <li>A escola é vista como instrumento possível de transformação social, desde que ensine o conhecimento historicamente acumulado de forma crítica.</li>
          <li>Combate tanto a ideia de que a escola apenas reproduz a ideologia dominante, quanto a noção de que ela é neutra ou suficiente por si só.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Crítico-social dos conteúdos</h2>
        <p className="mb-4">
          Nome dado à tendência que valoriza o ensino dos conteúdos clássicos (ciências, matemática, história, etc.) como meio de apropriação do saber por parte dos alunos das camadas populares. O objetivo é permitir uma leitura crítica da realidade e a possibilidade de sua transformação.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Papel do professor e do aluno</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>O professor é mediador do conhecimento e organiza o ensino de forma intencional e estruturada.</li>
          <li>O aluno é sujeito ativo, mas precisa apropriar-se dos conteúdos sistematizados para desenvolver pensamento crítico.</li>
          <li>Relação dialética entre ensino e aprendizagem: nem autoritarismo conteudista, nem espontaneísmo.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Etapas do método pedagógico histórico-crítico</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li><strong>Prática social inicial:</strong> Parte-se da realidade concreta dos alunos.</li>
          <li><strong>Problematização:</strong> Levantamento de questões e limites do conhecimento atual.</li>
          <li><strong>Instrumentalização:</strong> Ensino dos conteúdos formais para compreender a realidade.</li>
          <li><strong>Catarse:</strong> Síntese crítica do conhecimento adquirido.</li>
          <li><strong>Prática social final:</strong> Aplicação transformadora do saber na realidade.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Críticas às dicotomias educacionais</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Combate falsas oposições como teoria x prática, conteúdo x método, saber erudito x saber popular.</li>
          <li>Valoriza o saber popular como ponto de partida, mas propõe a elevação à cultura erudita.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Materiais gratuitos online</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="http://portal.mec.gov.br/seb/arquivos/pdf/Ensinomedio/enemio_escolademocracia.pdf" className="text-blue-600 underline" target="_blank">Livro “Escola e Democracia” – Dermeval Saviani (PDF)</a></li>
          <li><a href="https://www.youtube.com/watch?v=Zk-5oVNcPSw" className="text-blue-600 underline" target="_blank">Vídeo: O que é Pedagogia Histórico-Crítica?</a></li>
          <li><a href="https://www.youtube.com/watch?v=tdvNNn3R-B0" className="text-blue-600 underline" target="_blank">Aula completa sobre a PHC para concursos</a></li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Possíveis questões de prova</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Diferença entre a PHC e outras tendências pedagógicas (ex: Paulo Freire, Escola Nova).</li>
          <li>Importância dos conteúdos escolares e sua articulação com a realidade social.</li>
          <li>Etapas do método histórico-crítico (prática inicial, problematização, etc.).</li>
          <li>Identificação de trechos ou afirmações que expressem a concepção histórico-crítica.</li>
        </ul>
      </main>
    </>
  );
}
