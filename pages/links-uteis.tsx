import Head from "next/head";

export default function LinksUteis() {
  return (
    <>
      <Head>
        <title>Materiais de Apoio e Links Úteis</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-12 text-lg leading-relaxed">
        <h1 className="text-3xl font-bold mb-6">Materiais de Apoio e Links Úteis</h1>

        <p className="mb-4">
          Abaixo, você encontra uma seleção de materiais complementares, sites oficiais e vídeos explicativos que podem ajudar na preparação para concursos da área de Educação Profissional e no aprofundamento de temas como currículo, avaliação, políticas públicas e práticas pedagógicas críticas.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Leis e diretrizes educacionais</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="http://www.planalto.gov.br/ccivil_03/leis/l9394.htm" target="_blank" className="text-blue-600 underline">Lei de Diretrizes e Bases da Educação Nacional – LDB (Lei nº 9.394/1996)</a></li>
          <li><a href="https://www.gov.br/mec/pt-br/assuntos/legislacao" target="_blank" className="text-blue-600 underline">Legislação Educacional – Portal MEC</a></li>
          <li><a href="https://www.gov.br/mec/pt-br/assuntos/novo-ensino-medio" target="_blank" className="text-blue-600 underline">Novo Ensino Médio – Documentos e orientações</a></li>
          <li><a href="http://portal.mec.gov.br/setec" target="_blank" className="text-blue-600 underline">Secretaria de Educação Profissional e Tecnológica – SETEC/MEC</a></li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Revistas e artigos acadêmicos</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="https://www.scielo.br" target="_blank" className="text-blue-600 underline">SciELO – Biblioteca científica com artigos sobre educação</a></li>
          <li><a href="https://www.revistaeducacao.org.br" target="_blank" className="text-blue-600 underline">Revista Educação</a></li>
          <li><a href="https://educacaopublica.cecierj.edu.br" target="_blank" className="text-blue-600 underline">Revista Educação Pública</a></li>
          <li><a href="https://repositorio.ifba.edu.br" target="_blank" className="text-blue-600 underline">Repositório IFBA – Trabalhos sobre EPT</a></li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Vídeos e canais educativos</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="https://www.youtube.com/@canaldaept" target="_blank" className="text-blue-600 underline">Canal da EPT – YouTube</a></li>
          <li><a href="https://www.youtube.com/@paulofreireoficial" target="_blank" className="text-blue-600 underline">Paulo Freire Oficial – Trechos, aulas e entrevistas</a></li>
          <li><a href="https://www.youtube.com/watch?v=q9uH-EQTO2Y" target="_blank" className="text-blue-600 underline">Currículo e cultura – Conceitos e práticas</a></li>
          <li><a href="https://www.youtube.com/@ensinomedioprofessor" target="_blank" className="text-blue-600 underline">Canal Ensino Médio e EPT para concursos</a></li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Outros recursos</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="https://bncc.educacao.gov.br/" target="_blank" className="text-blue-600 underline">Base Nacional Comum Curricular – BNCC</a></li>
          <li><a href="https://cne.mec.gov.br" target="_blank" className="text-blue-600 underline">Conselho Nacional de Educação – CNE</a></li>
          <li><a href="https://formacao.escoladegoverno.ba.gov.br" target="_blank" className="text-blue-600 underline">Formação Continuada – Governo da Bahia</a></li>
          <li><a href="https://educacaointegral.org.br" target="_blank" className="text-blue-600 underline">Portal Educação Integral</a></li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Dicas para estudar melhor</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Monte um cronograma com base nas 16 páginas temáticas deste site.</li>
          <li>Use resumos, mapas mentais, flashcards e questões comentadas.</li>
          <li>Revise com frequência e, se possível, estude em grupo.</li>
          <li>Priorize a compreensão dos conceitos e não apenas a memorização.</li>
        </ul>

        <p className="mt-8">
          📚 Este espaço está em constante atualização. Sugestões de novos materiais são bem-vindas!
        </p>
      </main>
    </>
  );
}
