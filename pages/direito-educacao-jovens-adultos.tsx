import Head from "next/head";

export default function DireitoEducacaoJovensAdultos() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <Head>
        <title>Direito à Educação de Jovens e Adultos</title>
      </Head>

      <h1 className="text-3xl font-bold mb-4">Direito à Educação de Jovens e Adultos</h1>

      <p className="mb-4">
        A Educação de Jovens e Adultos (EJA) é uma modalidade da Educação Básica prevista na
        Constituição Federal e regulamentada pela LDB (Lei nº 9.394/96, Art. 37). Ela garante o
        direito de acesso à educação àqueles que não tiveram oportunidade de concluir seus estudos
        na idade apropriada.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Fundamentos do direito à EJA</h2>
      <p className="mb-4">
        Segundo Sônia Fátima Leite, o direito à EJA está ligado à concepção de educação como um
        direito humano fundamental e à ideia de reparação histórica das desigualdades sociais
        e educacionais. A oferta da EJA deve considerar as especificidades dos sujeitos jovens,
        adultos e idosos, promovendo a inclusão social, o desenvolvimento da cidadania e a
        valorização da trajetória de vida de cada estudante.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Características da EJA</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Currículo flexível e contextualizado;</li>
        <li>Metodologias adequadas à experiência de vida dos alunos;</li>
        <li>Valorização da diversidade cultural e social;</li>
        <li>Articulação com políticas públicas de saúde, trabalho e assistência social.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Desafios enfrentados</h2>
      <p className="mb-4">
        Apesar de garantido por lei, o direito à EJA enfrenta desafios como a evasão escolar,
        a oferta insuficiente, a falta de formação docente específica e a necessidade de políticas
        públicas mais efetivas e integradas.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Referências legais</h2>
      <p className="mb-4">
        - Constituição Federal de 1988 – Art. 208, inciso I e §1º<br/>
        - LDB – Lei nº 9.394/96 – Art. 37 e 38<br/>
        - Plano Nacional de Educação – PNE (meta 9)
      </p>
    </div>
  );
}
