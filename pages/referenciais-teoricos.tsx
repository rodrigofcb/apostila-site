import Head from "next/head";

export default function ReferenciaisTeoricos() {
  return (
    <>
      <Head>
        <title>Referenciais Teóricos da EPT</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-12 text-lg leading-relaxed">
        <h1 className="text-3xl font-bold mb-6">Referenciais Teóricos da Educação Profissional e Tecnológica (EPT)</h1>

        <p className="mb-4">
          A Educação Profissional e Tecnológica (EPT) tem como base um conjunto de referenciais teóricos que sustentam sua proposta político-pedagógica. Esses referenciais articulam trabalho, educação, ciência e cultura a partir de uma perspectiva crítica e emancipadora. São ideias que orientam a superação de modelos tecnicistas e fragmentados de formação profissional.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Marxismo e materialismo histórico-dialético</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Aproximação entre teoria e prática.</li>
          <li>Trabalho como princípio educativo e fundamento ontológico do ser social.</li>
          <li>Formação omnilateral: desenvolvimento de todas as dimensões humanas.</li>
          <li>Relação entre educação, produção, emancipação e transformação social.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Autores e pensadores fundamentais</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Karl Marx:</strong> Fundamentos do trabalho como prática social transformadora.</li>
          <li><strong>Antonio Gramsci:</strong> Intelectual orgânico, educação politécnica, unidade entre trabalho e cultura.</li>
          <li><strong>Paulo Freire:</strong> Educação dialógica, libertadora e baseada na problematização da realidade.</li>
          <li><strong>Dermeval Saviani:</strong> Pedagogia histórico-crítica e defesa do conhecimento sistematizado como direito de todos.</li>
          <li><strong>Gaudêncio Frigotto:</strong> Crítica ao produtivismo e à mercantilização da educação profissional.</li>
          <li><strong>Luiz Antônio Cunha:</strong> Estudos sobre a história e a política da educação profissional no Brasil.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Conceitos-chave</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Politecnia:</strong> Formação que abrange múltiplas áreas do saber e do fazer, desenvolvendo a capacidade de compreender os fundamentos científicos e técnicos dos processos produtivos.</li>
          <li><strong>Omnilateralidade:</strong> Desenvolvimento integral do ser humano em todas as suas dimensões (cognitiva, ética, estética, física, emocional).</li>
          <li><strong>Trabalho como princípio educativo:</strong> Integração entre a prática social do trabalho e a construção do conhecimento.</li>
          <li><strong>Currículo integrado:</strong> Superação da fragmentação entre áreas do conhecimento e entre formação geral e técnica.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Relação com políticas públicas</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Referenciais teóricos fundamentam documentos como a Resolução CNE/CEB nº 6/2012.</li>
          <li>Inspiram as práticas nos Institutos Federais e nas redes estaduais de EPT.</li>
          <li>Contribuem para resistir às tendências tecnicistas, dualistas e pragmáticas da formação profissional.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Materiais gratuitos online</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="https://www.scielo.br/j/edes/" className="text-blue-600 underline" target="_blank">Revista Educação e Sociedade – artigos sobre EPT</a></li>
          <li><a href="https://www.youtube.com/watch?v=Kq8aPppL9Dg" className="text-blue-600 underline" target="_blank">Vídeo: Fundamentos teóricos da EPT</a></li>
          <li><a href="https://repositorio.ifba.edu.br/" className="text-blue-600 underline" target="_blank">Repositório IFBA – produções acadêmicas da EPT</a></li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Temas frequentes em prova</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Conceitos de politecnia, omnilateralidade, currículo integrado e trabalho como princípio educativo.</li>
          <li>Principais autores e suas contribuições para a EPT.</li>
          <li>Diferenças entre pedagogia crítica e abordagens tecnicistas.</li>
          <li>Relação entre teoria, prática e emancipação na formação profissional.</li>
        </ul>
      </main>
    </>
  );
}
