import Head from "next/head";

export default function dcn_ept() {
  return (
    <>
      <Head>
        <title>Diretrizes Curriculares Nacionais para a Educação Profissional Técnica de Nível Médio (DCN EPT)</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-12 text-lg leading-relaxed">
        <h1 className="text-3xl font-bold mb-6">
          Diretrizes Curriculares Nacionais para a Educação Profissional Técnica de Nível Médio (DCN EPT)
        </h1>

        <p className="mb-4">
          As Diretrizes Curriculares Nacionais para a Educação Profissional Técnica de Nível Médio são normas estabelecidas pelo
          Conselho Nacional de Educação que orientam a organização e a oferta dos cursos técnicos em todo o país. A versão vigente,
          estabelecida pela Resolução CNE/CEB nº 6/2012, visa alinhar a formação técnica às exigências contemporâneas da educação
          profissional e às atualizações da LDB.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Formas de oferta</h2>
        <p className="mb-4">
          As diretrizes definem três formas de articulação entre o curso técnico e o ensino médio regular:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Integrada</strong>: curso técnico e ensino médio ocorrem na mesma instituição, com currículo unificado.</li>
          <li><strong>Concomitante</strong>: curso técnico e ensino médio ocorrem simultaneamente, mas em instituições diferentes ou em turnos distintos.</li>
          <li><strong>Subsequente</strong>: curso técnico é realizado após a conclusão do ensino médio.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Currículo integrado</h2>
        <p className="mb-4">
          As DCNs reforçam a ideia de superação da dicotomia entre formação geral e formação técnica. Recomenda-se a integração entre
          teoria e prática, ciência e trabalho, permitindo ao aluno desenvolver competências para o mundo do trabalho e para o exercício da cidadania.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Eixos tecnológicos</h2>
        <p className="mb-4">
          Os cursos devem estar organizados segundo os eixos tecnológicos definidos no Catálogo Nacional de Cursos Técnicos,
          garantindo base científica e humanística coerente com as demandas do setor produtivo e com os direitos de formação integral do estudante.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Carga horária e componentes</h2>
        <p className="mb-4">
          Os cursos técnicos devem respeitar a Base Nacional Comum Curricular (BNCC) no que tange à formação geral, além de prever no mínimo 1.200 horas
          de formação técnica específica. As DCNs também indicam que o estágio supervisionado pode ser incluído no currículo, a depender do perfil
          profissional desejado.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Princípios pedagógicos</h2>
        <p className="mb-4">
          As diretrizes reforçam princípios como interdisciplinaridade, contextualização, flexibilidade, aprendizagem ao longo da vida, trabalho como
          princípio educativo e pesquisa como princípio pedagógico.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Equivalência e certificação</h2>
        <p className="mb-4">
          Ao concluir um curso técnico integrado ao ensino médio, o estudante recebe um diploma de técnico de nível médio, com validade nacional,
          além do certificado de conclusão do ensino médio. Conhecimentos adquiridos por experiência profissional também podem ser reconhecidos,
          conforme prevê a LDB.
        </p>
      </main>
    </>
  );
}
