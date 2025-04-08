import Head from "next/head";

export default function ProjetoPoliticoPedagogico() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <Head>
        <title>Projeto Político-Pedagógico (PPP)</title>
      </Head>

      <h1 className="text-3xl font-bold mb-4">Projeto Político-Pedagógico (PPP)</h1>

      <p className="mb-4">
        O Projeto Político-Pedagógico (PPP) é um documento que orienta todas as ações
        pedagógicas e administrativas da escola. Previsto no Art. 12, I da LDB, deve
        ser elaborado com a participação da comunidade escolar e expressar a identidade
        da instituição de ensino.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Conceito</h2>
      <p className="mb-4">
        O PPP é um instrumento que expressa a proposta educativa da escola. Reúne as
        intenções e ações planejadas para garantir o processo de ensino-aprendizagem
        com qualidade, em consonância com as necessidades da comunidade e as diretrizes
        legais.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Componentes</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Diagnóstico da realidade escolar e comunitária</li>
        <li>Objetivos educacionais e metas</li>
        <li>Princípios pedagógicos</li>
        <li>Currículo e metodologias</li>
        <li>Critérios de avaliação</li>
        <li>Plano de ação</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Importância</h2>
      <p className="mb-4">
        O PPP promove a gestão democrática, fortalece a identidade da escola, orienta o
        trabalho pedagógico, favorece a integração da equipe escolar e contribui para a
        melhoria da qualidade da educação.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Participação Coletiva</h2>
      <p className="mb-4">
        A construção do PPP deve envolver diretores, professores, funcionários,
        estudantes e famílias, garantindo a escuta ativa e o compromisso com a realidade
        social da escola.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Referência Legal</h2>
      <p className="mb-4">
        LDB – Lei nº 9.394/1996 – Art. 12, I: "Os estabelecimentos de ensino, respeitadas
        as normas comuns e as do seu sistema de ensino, terão a incumbência de elaborar
        e executar sua proposta pedagógica."
      </p>
    </div>
  );
}
