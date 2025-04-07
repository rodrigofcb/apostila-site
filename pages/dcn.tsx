import Head from "next/head";

export default function DcnEpt() {
  return (
    <>
      <Head>
        <title>Diretrizes Curriculares da Educação Profissional Técnica de Nível Médio</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-12 text-lg leading-relaxed">
        <h1 className="text-3xl font-bold mb-6">Diretrizes Curriculares da Educação Profissional Técnica de Nível Médio (DCN EPT)</h1>

        <p className="mb-4">
          As Diretrizes Curriculares Nacionais da Educação Profissional Técnica de Nível Médio orientam a organização dos cursos técnicos em todo o país. Estão definidas principalmente pela Resolução CNE/CEB nº 6/2012 e seu Parecer nº 11/2012. Buscam garantir uma formação que articule teoria e prática, trabalho, ciência, cultura e tecnologia.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Formas de oferta da EPT</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Integrada:</strong> Ensino médio e técnico em um único curso, com currículo unificado, na mesma instituição.</li>
          <li><strong>Concomitante:</strong> Ensino médio e técnico feitos simultaneamente, mas em instituições ou turnos distintos.</li>
          <li><strong>Subsequente:</strong> Curso técnico realizado após a conclusão do ensino médio.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Princípios e organização curricular</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Currículo integrado:</strong> Superação da dicotomia entre formação geral e profissional. Ênfase na formação integral, crítica e articulada ao mundo do trabalho.</li>
          <li><strong>Eixos tecnológicos:</strong> Os cursos são organizados por eixos definidos no Catálogo Nacional de Cursos Técnicos.</li>
          <li><strong>Politecnia e omnilateralidade:</strong> Base para a formação ampla e crítica do estudante, compreendendo os fundamentos dos processos produtivos.</li>
          <li><strong>Contextualização e interdisciplinaridade:</strong> Conteúdos devem dialogar com a realidade social e profissional do estudante.</li>
          <li><strong>Certificação:</strong> O egresso recebe diploma técnico e certificado de conclusão do ensino médio (no caso do curso integrado).</li>
          <li><strong>Estágio:</strong> Pode integrar o currículo, mas não é obrigatório para todos os cursos.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Relação com o Novo Ensino Médio</h2>
        <p className="mb-4">
          A reforma do ensino médio de 2017 (Lei 13.415) criou os itinerários formativos, e os cursos técnicos podem ser uma dessas trilhas. As DCNs continuam sendo referência, especialmente nos cursos integrados e nas redes federais.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Materiais gratuitos online</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="http://portal.mec.gov.br/index.php?option=com_docman&view=download&alias=11812-pceb011-12&category_slug=setembro-2012-pdf&Itemid=30192" className="text-blue-600 underline" target="_blank">Parecer e Resolução CNE/CEB nº 11/2012 e nº 6/2012 – MEC</a></li>
          <li><a href="http://www.planalto.gov.br/ccivil_03/_ato2004-2006/2004/decreto/d5154.htm" className="text-blue-600 underline" target="_blank">Decreto nº 5.154/2004</a></li>
          <li><a href="https://www.itaueducacaoetrabalho.org.br/biblioteca/documentos-oficiais" className="text-blue-600 underline" target="_blank">Portal Itaú Educação e Trabalho – DCNs</a></li>
          <li><a href="https://www.youtube.com/watch?v=8N34CWtLukU" className="text-blue-600 underline" target="_blank">Vídeo explicativo sobre a Resolução 6/2012</a></li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Questões comuns em prova</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Diferenciar as formas de oferta (integrada, concomitante, subsequente).</li>
          <li>Finalidade da EPT: formar profissional-cidadão com formação crítica e ampla.</li>
          <li>Conceitos de politecnia, omnilateralidade, currículo integrado, interdisciplinaridade.</li>
          <li>Carga horária mínima e exigências como estágio supervisionado.</li>
          <li>Relação entre as DCNs de 2012 e o Novo Ensino Médio.</li>
        </ul>
      </main>
    </>
  );
}
