import Head from "next/head";

export default function Proeja() {
  return (
    <>
      <Head>
        <title>Educação de Jovens e Adultos – PROEJA</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-12 text-lg leading-relaxed">
        <h1 className="text-3xl font-bold mb-6">Educação de Jovens e Adultos – PROEJA</h1>

        <p className="mb-4">
          O Programa Nacional de Integração da Educação Profissional com a Educação Básica na Modalidade de Educação de Jovens e Adultos (PROEJA) foi instituído pelo Decreto nº 5.840/2006, com o objetivo de oferecer uma formação integrada a jovens e adultos que não concluíram o ensino fundamental ou médio na idade apropriada.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Objetivos do PROEJA</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Promover a elevação da escolaridade de jovens e adultos trabalhadores.</li>
          <li>Articular a formação básica com a qualificação profissional.</li>
          <li>Combater as desigualdades sociais por meio da inclusão educacional e do direito à educação ao longo da vida.</li>
          <li>Valorizar os saberes e experiências de vida dos estudantes.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Características principais</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Oferta integrada da EJA com cursos técnicos ou de qualificação profissional.</li>
          <li>Público-alvo: trabalhadores com 18 anos ou mais, com defasagem educacional e interesse em formação profissional.</li>
          <li>Currículo contextualizado, interdisciplinar e voltado à realidade social dos estudantes.</li>
          <li>Flexibilidade de horários e metodologias para atender a estudantes trabalhadores.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Fundamentos pedagógicos</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Educação como direito social e instrumento de cidadania.</li>
          <li>Reconhecimento da pluralidade dos sujeitos da EJA: culturas, identidades, trajetórias de vida.</li>
          <li>Princípios de educação omnilateral e emancipadora.</li>
          <li>Superação da lógica meramente compensatória ou utilitarista da EJA.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Desafios enfrentados</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Evasão escolar causada por condições socioeconômicas, carga de trabalho e responsabilidades familiares.</li>
          <li>Falta de professores com formação específica para EJA.</li>
          <li>Preconceitos sobre a EJA como “educação de segunda linha”.</li>
          <li>Dificuldades de gestão e financiamento em algumas redes.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Referências legais</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Decreto nº 5.840/2006 – Institui o PROEJA.</li>
          <li>Lei de Diretrizes e Bases da Educação Nacional (LDB) – artigos sobre EJA.</li>
          <li>Diretrizes Curriculares Nacionais para a EJA – Resolução CNE/CEB nº 1/2000.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Materiais gratuitos online</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="http://portal.mec.gov.br/setec/arquivos/pdf3/proeja_marcoconceitual.pdf" className="text-blue-600 underline" target="_blank">Marco Conceitual do PROEJA (PDF)</a></li>
          <li><a href="https://www.youtube.com/watch?v=QMmMNGL3AKg" className="text-blue-600 underline" target="_blank">Vídeo: O que é o PROEJA?</a></li>
          <li><a href="https://repositorio.ifba.edu.br/handle/123456789/872" className="text-blue-600 underline" target="_blank">Trabalhos acadêmicos sobre PROEJA – IFBA</a></li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Questões comuns em prova</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Finalidade e público-alvo do PROEJA.</li>
          <li>Diferenças entre EJA tradicional e EJA integrada à formação profissional.</li>
          <li>Importância da valorização da experiência dos alunos da EJA.</li>
          <li>Desafios e fundamentos pedagógicos da modalidade.</li>
        </ul>
      </main>
    </>
  );
}
