import Head from "next/head";

export default function TrabalhoEducacao() {
  return (
    <>
      <Head>
        <title>Trabalho e Educação: Fundamentos Ontológicos e Históricos</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-12 text-lg leading-relaxed">
        <h1 className="text-3xl font-bold mb-6">Trabalho e Educação: Fundamentos Ontológicos e Históricos</h1>

        <p className="mb-4">
          A relação entre trabalho e educação é central nas discussões sobre a formação humana. O trabalho é considerado, na tradição marxista, como o fundamento ontológico do ser social — ou seja, é por meio dele que o ser humano se constitui enquanto sujeito histórico e transforma a natureza.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Trabalho como princípio educativo</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Conceito formulado por autores como Gramsci, Saviani e Frigotto.</li>
          <li>Propõe o trabalho não como simples preparação para o mercado, mas como atividade formadora, que desenvolve saberes técnicos, culturais, éticos e políticos.</li>
          <li>A escola deve oferecer uma educação que relacione o conhecimento com os processos do trabalho e da produção social.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Fundamentos históricos da relação trabalho e educação</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Antiguidade:</strong> Trabalho manual era desprezado, reservado aos escravizados. A educação visava à formação das elites livres.</li>
          <li><strong>Idade Média:</strong> Surgimento das corporações de ofício, em que educação e trabalho se uniam na prática (mestres e aprendizes).</li>
          <li><strong>Renascimento e Iluminismo:</strong> Valorização do conhecimento científico e técnico. Expansão da ideia de educação para além das elites.</li>
          <li><strong>Revolução Industrial:</strong> Intensificação da separação entre trabalho manual e intelectual. Educação voltada à reprodução da força de trabalho.</li>
          <li><strong>Marxismo:</strong> Propõe superação dessa divisão, com a educação integral, articulando trabalho, ciência e cultura.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Educação e emancipação</h2>
        <p className="mb-4">
          A educação que articula-se ao trabalho em sua dimensão ontológica busca a formação omnilateral do sujeito: capaz de compreender e intervir na realidade. Isso implica superar uma visão utilitarista da educação como mera capacitação para o emprego.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Críticas à visão tecnicista</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>A formação voltada apenas para habilidades práticas tende a formar sujeitos subordinados à lógica do mercado.</li>
          <li>Defende-se uma formação crítica, que permita ao sujeito compreender os mecanismos sociais do mundo do trabalho.</li>
          <li>A educação deve contribuir para a autonomia e a transformação social.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Possíveis temas de prova</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Trabalho como princípio educativo: autores e ideias principais.</li>
          <li>Diferença entre trabalho e emprego; entre educação formadora e treinamento técnico.</li>
          <li>Fundamentos históricos da relação trabalho/educação.</li>
          <li>Divisão entre trabalho manual e intelectual ao longo da história.</li>
          <li>Aplicações na EPT e críticas à formação tecnicista.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Materiais gratuitos online</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="https://www.youtube.com/watch?v=U6yZ6PY3pH0" className="text-blue-600 underline" target="_blank">Vídeo: Trabalho como princípio educativo – Prof. Gaudêncio Frigotto</a></li>
          <li><a href="https://www.scielo.br/j/edes/a/yC4wb5tRVgKvVFzT8gbm8hs/?lang=pt" className="text-blue-600 underline" target="_blank">Artigo: Fundamentos históricos da relação trabalho e educação</a></li>
          <li><a href="http://www.uece.br/filosofia/images/PDFs/marx_trabalhoeformacaohumana.pdf" className="text-blue-600 underline" target="_blank">Texto: Trabalho e Formação Humana em Marx</a></li>
        </ul>
      </main>
    </>
  );
}
