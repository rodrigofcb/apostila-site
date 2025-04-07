import Head from "next/head";

export default function EducacaoInclusiva() {
  return (
    <>
      <Head>
        <title>Educação Inclusiva e Diversidade</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-12 text-lg leading-relaxed">
        <h1 className="text-3xl font-bold mb-6">Educação Inclusiva e Diversidade</h1>

        <p className="mb-4">
          A Educação Inclusiva é uma concepção pedagógica e política que reconhece a diversidade como valor e garante o direito de todos à educação de qualidade. Ela rompe com modelos segregadores e propõe a construção de uma escola que acolha, respeite e promova a aprendizagem de todos os estudantes, independentemente de suas diferenças físicas, sensoriais, cognitivas, sociais, culturais, raciais ou de gênero.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Princípios da educação inclusiva</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Educação como direito de todos, com igualdade de condições de acesso e permanência.</li>
          <li>Valorização das diferenças como dimensões constitutivas do sujeito.</li>
          <li>Eliminação de barreiras atitudinais, arquitetônicas, comunicacionais e pedagógicas.</li>
          <li>Promoção da equidade e combate a todas as formas de discriminação e exclusão.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Diversidade e práticas pedagógicas</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Adaptação curricular e metodologias diferenciadas.</li>
          <li>Uso de tecnologias assistivas e recursos de acessibilidade.</li>
          <li>Planejamento coletivo e trabalho interdisciplinar com professores de AEE (Atendimento Educacional Especializado).</li>
          <li>Incorporação da perspectiva de gênero, raça, etnia, classe social, sexualidade e território na prática docente.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Referenciais legais</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Constituição Federal (1988):</strong> Educação como direito social e dever do Estado.</li>
          <li><strong>LDB (Lei nº 9.394/1996):</strong> Inclusão como princípio da educação nacional.</li>
          <li><strong>Lei nº 10.639/2003:</strong> Ensino da história e cultura afro-brasileira e africana.</li>
          <li><strong>Lei nº 11.645/2008:</strong> Ensino da história e cultura indígena.</li>
          <li><strong>Lei Brasileira de Inclusão (Lei nº 13.146/2015):</strong> Estatuto da Pessoa com Deficiência.</li>
          <li><strong>Decreto nº 7.611/2011:</strong> Política de educação especial na perspectiva da educação inclusiva.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Papel da escola e do professor</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Desenvolver estratégias que respeitem os ritmos, linguagens e histórias de cada estudante.</li>
          <li>Combater preconceitos e estereótipos no ambiente escolar.</li>
          <li>Garantir participação e aprendizagem efetiva de todos, sem exceção.</li>
          <li>Trabalhar com projetos interdisciplinares que valorizem a pluralidade cultural.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Materiais gratuitos online</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="https://inclusao.mec.gov.br" className="text-blue-600 underline" target="_blank">Portal da Educação Inclusiva – MEC</a></li>
          <li><a href="https://www.youtube.com/watch?v=z6hQqEebx9E" className="text-blue-600 underline" target="_blank">Vídeo: Educação inclusiva na prática</a></li>
          <li><a href="https://www.scielo.br/j/edes/" className="text-blue-600 underline" target="_blank">Revista Educação e Sociedade – artigos sobre diversidade</a></li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Possíveis temas de prova</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Conceito de educação inclusiva e sua diferença em relação à integração.</li>
          <li>Práticas pedagógicas inclusivas e adaptadas à diversidade.</li>
          <li>Legislação relacionada aos direitos das pessoas com deficiência, povos indígenas e população negra.</li>
          <li>Desafios e possibilidades para construir uma escola democrática e plural.</li>
        </ul>
      </main>
    </>
  );
}
