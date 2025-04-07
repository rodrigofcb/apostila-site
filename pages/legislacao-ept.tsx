import Head from "next/head";

export default function LegislacaoEPT() {
  return (
    <>
      <Head>
        <title>Legislação da Educação Profissional e Tecnológica (EPT)</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-12 text-lg leading-relaxed">
        <h1 className="text-3xl font-bold mb-6">Legislação da Educação Profissional e Tecnológica (EPT)</h1>

        <p className="mb-4">
          A Educação Profissional e Tecnológica (EPT) no Brasil está amparada por um conjunto de leis, decretos e diretrizes que visam assegurar uma formação articulada com a educação básica, o trabalho e a cidadania. Essa base legal estabelece princípios, formas de oferta, responsabilidades das instituições e integração entre ensino médio e educação profissional.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Principais marcos legais da EPT</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>LDB (Lei nº 9.394/1996):</strong> Define a EPT como parte da educação nacional, integrável ao ensino médio, oferecida em diferentes formas (integrada, concomitante, subsequente).</li>
          <li><strong>Decreto nº 5.154/2004:</strong> Regulamenta a articulação entre educação profissional e ensino médio, permitindo sua integração curricular.</li>
          <li><strong>Decreto nº 6.302/2007:</strong> Institui o Programa Nacional de Integração da Educação Profissional com a Educação Básica (PROEJA).</li>
          <li><strong>Resolução CNE/CEB nº 6/2012:</strong> Estabelece as Diretrizes Curriculares Nacionais para a EPT de nível médio.</li>
          <li><strong>Lei nº 13.415/2017:</strong> Altera a LDB e cria os itinerários formativos do Novo Ensino Médio, incluindo a formação técnica e profissional.</li>
          <li><strong>Catálogo Nacional de Cursos Técnicos (CNCT):</strong> Documento que organiza os cursos técnicos por eixos tecnológicos e perfis profissionais.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Responsabilidades federativas</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>União:</strong> Formula políticas e normas gerais, financia e coordena programas nacionais como o Pronatec e o Proeja.</li>
          <li><strong>Estados:</strong> Organizam as redes públicas de EPT, especialmente na forma integrada ao ensino médio.</li>
          <li><strong>Institutos Federais:</strong> Atuam como instituições de excelência na oferta de cursos técnicos e superiores de tecnologia.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Formas de oferta da EPT</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Integrada:</strong> O estudante cursa ensino médio e técnico na mesma matrícula e instituição.</li>
          <li><strong>Concomitante:</strong> Estudante cursa ensino médio e técnico em instituições ou turnos diferentes.</li>
          <li><strong>Subsequente:</strong> Curso técnico realizado após a conclusão do ensino médio.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Materiais gratuitos online</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="http://www.planalto.gov.br/ccivil_03/leis/l9394.htm" className="text-blue-600 underline" target="_blank">Lei de Diretrizes e Bases da Educação Nacional</a></li>
          <li><a href="http://www.planalto.gov.br/ccivil_03/_ato2004-2006/2004/decreto/d5154.htm" className="text-blue-600 underline" target="_blank">Decreto nº 5.154/2004</a></li>
          <li><a href="https://www.in.gov.br/en/web/dou/-/resolucao-n-6-de-20-de-setembro-de-2012-46078809" className="text-blue-600 underline" target="_blank">Resolução CNE/CEB nº 6/2012</a></li>
          <li><a href="http://portal.mec.gov.br/index.php?option=com_docman&view=download&alias=88367-cnct-4-edicao-2021-pdf&category_slug=dezembro-2021-pdf&Itemid=30192" className="text-blue-600 underline" target="_blank">Catálogo Nacional de Cursos Técnicos (2021)</a></li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Possíveis temas de prova</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Diferença entre formas de oferta da EPT (integrada, concomitante e subsequente).</li>
          <li>Principais normas legais que regulamentam a EPT.</li>
          <li>Relação entre EPT e Novo Ensino Médio.</li>
          <li>Finalidades do Decreto nº 5.154/2004.</li>
          <li>Importância do CNCT para a organização dos cursos técnicos.</li>
        </ul>
      </main>
    </>
  );
}
