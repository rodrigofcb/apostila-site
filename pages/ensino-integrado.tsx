import Head from "next/head";

export default function EnsinoIntegrado() {
  return (
    <>
      <Head>
        <title>Ensino Médio Integrado, Politecnia e Educação Omnilateral</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-12 text-lg leading-relaxed">
        <h1 className="text-3xl font-bold mb-6">Ensino Médio Integrado, Politecnia e Educação Omnilateral</h1>

        <p className="mb-4">
          O Ensino Médio Integrado (EMI) é uma proposta pedagógica que articula a formação geral e a formação técnica-profissional em um único percurso formativo, voltado para o desenvolvimento humano integral. Essa proposta se inspira nas concepções de educação omnilateral e politecnia, ligadas a uma formação ampla e crítica dos sujeitos.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">O que é o Ensino Médio Integrado</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Currículo integrado: superação da separação entre a formação propedêutica (geral) e a formação profissional.</li>
          <li>Articulação intencional entre saberes científicos, técnicos, culturais e sociais.</li>
          <li>Oferta em tempo integral ou com carga horária estendida, permitindo maior profundidade nas áreas do conhecimento e na formação técnica.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Conceito de Politecnia</h2>
        <p className="mb-4">
          Politecnia, segundo a tradição marxista, é a formação que permite ao estudante compreender os fundamentos científicos dos processos de trabalho e produção em diferentes áreas. Vai além da qualificação técnica imediata para formar sujeitos críticos e reflexivos, capazes de entender e transformar a realidade.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Não se limita ao domínio de uma técnica específica.</li>
          <li>Valoriza o conhecimento dos processos, das relações sociais e das implicações éticas do trabalho.</li>
          <li>Visa formar cidadãos que compreendam a totalidade do mundo produtivo.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Educação Omnilateral</h2>
        <p className="mb-4">
          Conceito que vem de Marx e Engels e que se refere à formação humana plena, em todas as suas dimensões: intelectual, física, emocional, estética, moral, técnica e social. A proposta de uma educação omnilateral busca romper com a formação unilateral, típica da sociedade capitalista.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Desenvolvimento de todas as potencialidades humanas, e não apenas aquelas voltadas para o mercado.</li>
          <li>Integração entre teoria e prática, trabalho e cultura, ciência e arte.</li>
          <li>Educação como meio de emancipação e transformação social.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Exemplos de integração curricular</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Projeto integrador envolvendo física, matemática e automação em um curso técnico.</li>
          <li>Análise crítica de temas sociais (ex: meio ambiente, desigualdade) nas disciplinas técnicas.</li>
          <li>Estudos de caso com foco em ética no trabalho, direitos sociais e legislação profissional.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Possíveis temas de prova</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Diferença entre ensino médio tradicional e ensino médio integrado.</li>
          <li>Conceitos de politecnia e omnilateralidade na formação profissional.</li>
          <li>Importância da integração curricular no desenvolvimento do estudante.</li>
          <li>Aplicação da proposta crítica no currículo da EPT.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Materiais gratuitos online</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="http://portal.mec.gov.br/setec/arquivos/pdf3/diretrizesintegrado.pdf" className="text-blue-600 underline" target="_blank">Diretrizes para o Ensino Médio Integrado – MEC</a></li>
          <li><a href="https://www.youtube.com/watch?v=OaBL2RUz8x4" className="text-blue-600 underline" target="_blank">Vídeo: O que é Ensino Médio Integrado?</a></li>
          <li><a href="https://www.revistas.uneb.br/index.php/rbp/article/view/8283" className="text-blue-600 underline" target="_blank">Artigo acadêmico sobre Politecnia e EMI</a></li>
        </ul>
      </main>
    </>
  );
}
