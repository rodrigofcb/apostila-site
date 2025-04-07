import Head from "next/head";

export default function FormacaoDocente() {
  return (
    <>
      <Head>
        <title>Formação de Professores para a EPT</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-12 text-lg leading-relaxed">
        <h1 className="text-3xl font-bold mb-6">Formação de Professores para a Educação Profissional e Tecnológica (EPT)</h1>

        <p className="mb-4">
          A formação de professores que atuam na Educação Profissional e Tecnológica (EPT) é um tema estratégico para a qualidade do ensino, a integração curricular e o desenvolvimento de uma prática pedagógica crítica, interdisciplinar e emancipadora.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Quem pode atuar como docente na EPT?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Profissionais com licenciatura em áreas específicas do conhecimento (para disciplinas da base comum).</li>
          <li>Profissionais com formação técnica de nível médio ou superior e experiência comprovada, desde que tenham habilitação pedagógica (ex: formação pedagógica para não licenciados).</li>
          <li>Professores formados por cursos de licenciatura em Educação Profissional e Tecnológica (LEPT), ofertados em Institutos Federais e universidades.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Desafios da formação docente na EPT</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Ausência de uma política nacional específica para a formação inicial e continuada de docentes da EPT.</li>
          <li>Fragmentação entre o saber técnico e o saber pedagógico.</li>
          <li>Falta de oportunidades de formação continuada voltadas à prática integrada e interdisciplinar.</li>
          <li>Demandas específicas da EPT exigem domínio de conteúdos, tecnologias, mundo do trabalho e abordagem crítica da realidade.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Formação continuada</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>É fundamental para promover atualização técnica, metodológica e política.</li>
          <li>Deve valorizar o diálogo entre saberes docentes, experiências profissionais e demandas dos territórios.</li>
          <li>Podem ser promovidas por redes públicas, IFs, universidades e programas como o Profuncionário.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Princípios da formação crítica e emancipadora</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Compreensão do trabalho como princípio educativo.</li>
          <li>Superação da visão tecnicista e instrumental da docência.</li>
          <li>Compromisso com a transformação social e a formação omnilateral dos estudantes.</li>
          <li>Articulação entre teoria e prática, cultura e tecnologia, ciência e sociedade.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Referências legais e institucionais</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Lei nº 9.394/1996 (LDB) – estabelece requisitos para o exercício do magistério.</li>
          <li>Resolução CNE/CP nº 2/2015 – Diretrizes para a formação inicial de professores.</li>
          <li>Decreto nº 5.154/2004 – regulamenta a EPT e a atuação docente na área.</li>
          <li>Institutos Federais – principais responsáveis por formação docente para a EPT.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Materiais gratuitos online</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="https://repositorio.ifba.edu.br/" className="text-blue-600 underline" target="_blank">Repositório IFBA – artigos e TCCs sobre formação docente</a></li>
          <li><a href="https://www.youtube.com/watch?v=omSzFBGVVFA" className="text-blue-600 underline" target="_blank">Vídeo: Desafios da docência na EPT</a></li>
          <li><a href="http://portal.mec.gov.br/index.php?option=com_docman&view=download&alias=16922-diretrizes-formacao-docente-2015-pdf&Itemid=30192" className="text-blue-600 underline" target="_blank">Diretrizes da formação docente – MEC</a></li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">O que pode cair na prova</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Quem pode atuar como docente na EPT (formação exigida).</li>
          <li>Desafios da formação docente crítica e integrada.</li>
          <li>Importância da formação continuada e sua articulação com a prática.</li>
          <li>Documentos legais que regem a formação e atuação dos professores da EPT.</li>
        </ul>
      </main>
    </>
  );
}
