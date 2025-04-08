import Head from "next/head";

export default function PedagogiaTrabalhoOmnilateral() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <Head>
        <title>Pedagogia do Trabalho e Educação Omnilateral</title>
      </Head>

      <h1 className="text-3xl font-bold mb-4">Pedagogia do Trabalho e Educação Omnilateral</h1>

      <p className="mb-4">
        A pedagogia do trabalho e a concepção de educação omnilateral são fundamentais para pensar
        uma educação emancipadora, crítica e integral. Autores como Dermeval Saviani, Gaudêncio Frigotto
        e Pedro Demo refletem sobre o papel formativo do trabalho na constituição do ser humano e na
        estruturação da escola como espaço de transformação social.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Trabalho como princípio educativo</h2>
      <p className="mb-4">
        Dermeval Saviani defende o trabalho como princípio educativo, pois é por meio do trabalho que o
        ser humano transforma a natureza e a si mesmo. A escola deve promover uma educação que não
        apenas prepare para o trabalho, mas que o compreenda como dimensão formadora.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Educação omnilateral</h2>
      <p className="mb-4">
        Inspirada em Marx, a educação omnilateral propõe o desenvolvimento de todas as dimensões
        humanas: intelectual, física, técnica, emocional e ética. Frigotto argumenta que a escola deve
        superar a lógica fragmentada e instrumental da formação voltada apenas ao mercado.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Crítica à educação tecnicista</h2>
      <p className="mb-4">
        Pedro Demo destaca a importância de formar sujeitos autônomos e críticos, não apenas tecnicamente
        competentes. A formação deve articular teoria e prática, ciência e trabalho, respeitando o contexto
        social dos estudantes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Articulação com a EPT</h2>
      <p className="mb-4">
        A Educação Profissional e Tecnológica (EPT), quando pautada na pedagogia do trabalho e na
        omnilateralidade, pode promover uma formação integral, crítica e ética. Isso implica integrar o
        conhecimento técnico à formação humanista, valorizando o protagonismo dos estudantes.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Referências</h2>
      <ul className="list-disc list-inside mb-4">
        <li>SAVIANI, Dermeval. Trabalho e Educação: fundamentos ontológicos e históricos.</li>
        <li>FRIGOTTO, Gaudêncio. A produtividade da escola improdutiva.</li>
        <li>DEMO, Pedro. Educação e qualidade.</li>
      </ul>
    </div>
  );
}
