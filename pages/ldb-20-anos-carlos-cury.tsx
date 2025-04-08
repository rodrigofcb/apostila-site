import Head from "next/head";

export default function Ldb20AnosCarlosCury() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <Head>
        <title>20 Anos da LDB – Análise de Carlos Roberto Jamil Cury</title>
      </Head>

      <h1 className="text-3xl font-bold mb-4">20 Anos da LDB – Análise de Carlos Roberto Jamil Cury</h1>

      <p className="mb-4">
        Em seu artigo "Vinte Anos da LDB: permanências, avanços e desafios", Carlos Roberto Jamil Cury
        analisa criticamente os efeitos e limites da Lei de Diretrizes e Bases da Educação Nacional (Lei 9.394/96)
        ao longo de duas décadas de vigência.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Permanências</h2>
      <p className="mb-4">
        Cury aponta que, apesar das mudanças ocorridas nas políticas públicas educacionais, muitos dos
        princípios da LDB permanecem relevantes e ainda não foram plenamente concretizados, como:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Gestão democrática da educação;</li>
        <li>Valorização dos profissionais da educação;</li>
        <li>Garantia de padrões mínimos de qualidade;</li>
        <li>Educação como direito de todos e dever do Estado e da família.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Avanços</h2>
      <p className="mb-4">
        Entre os avanços, destaca-se a ampliação do conceito de Educação Básica, incluindo a educação infantil,
        a expansão da obrigatoriedade escolar e a institucionalização de instrumentos de avaliação e controle
        social como o IDEB e o Plano Nacional de Educação (PNE).
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Desafios</h2>
      <p className="mb-4">
        Cury também destaca os principais desafios que persistem após 20 anos da LDB:
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Desigualdade de acesso e permanência na escola;</li>
        <li>Financiamento insuficiente e má distribuição de recursos;</li>
        <li>Fragmentação das políticas educacionais entre os entes federados;</li>
        <li>Implementação frágil de princípios como gestão democrática e formação docente continuada.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Considerações Finais</h2>
      <p className="mb-4">
        O autor conclui que a LDB representou um marco importante, mas sua efetivação ainda depende de
        vontade política, investimentos consistentes e participação social. A leitura crítica da LDB é essencial para
        garantir que ela não se torne letra morta.
      </p>
    </div>
  );
}
