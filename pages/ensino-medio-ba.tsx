import Head from "next/head";

export default function EnsinoMedioBa() {
  return (
    <>
      <Head>
        <title>Organização do Ensino Médio na Bahia</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-12 text-lg leading-relaxed">
        <h1 className="text-3xl font-bold mb-6">Organização do Ensino Médio na Bahia</h1>

        <p className="mb-4">
          A organização do Ensino Médio na Bahia segue as diretrizes nacionais, mas também incorpora propostas próprias para garantir a qualidade, equidade e formação integral dos estudantes da rede estadual. As políticas baianas têm buscado ampliar o acesso, combater a evasão, diversificar o currículo e implementar o ensino médio em tempo integral com base na realidade dos territórios.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Diretrizes gerais do Ensino Médio na Bahia</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Currículo estruturado em áreas do conhecimento (Linguagens, Matemática, Ciências da Natureza, Ciências Humanas) e Formação Técnica e Profissional.</li>
          <li>Articulação com a BNCC e os Itinerários Formativos definidos no Novo Ensino Médio.</li>
          <li>Oferta de Ensino Médio em Tempo Integral (EMTI), com carga horária ampliada.</li>
          <li>Valorização da diversidade cultural, étnico-racial, de gênero e territorial nos projetos escolares.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Componentes da organização curricular</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Parte comum:</strong> Baseada na BNCC, com ênfase no desenvolvimento de competências e habilidades.</li>
          <li><strong>Itinerários Formativos:</strong> Trilhas escolhidas pelos estudantes, com ênfases diversas e possibilidade de formação técnica profissional.</li>
          <li><strong>Projeto de Vida:</strong> Componente obrigatório no currículo da rede baiana, estimulando autoconhecimento, protagonismo e planejamento de futuro.</li>
          <li><strong>Educação contextualizada:</strong> Projetos que dialogam com a cultura local, o território e a realidade dos estudantes.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Educação Profissional Integrada na rede estadual</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Oferta de cursos técnicos integrados ao ensino médio em diversas áreas (Administração, Agroecologia, Enfermagem, etc.).</li>
          <li>Presença de Centros Estaduais e Centros Territoriais de Educação Profissional (CEEPs e CETEPs).</li>
          <li>Expansão de vagas e ampliação da carga horária para atender às diretrizes da EPT.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Iniciativas e programas estaduais</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Programa Educar para Transformar:</strong> Estratégia do governo estadual para qualificar a educação pública como motor de desenvolvimento social.</li>
          <li><strong>Programa Mais Estudo:</strong> Bolsa auxílio para monitoria entre estudantes, incentivando o protagonismo e a aprendizagem colaborativa.</li>
          <li><strong>Ações afirmativas:</strong> Fortalecimento da educação para as relações étnico-raciais, educação indígena, quilombola e do campo.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Desafios e perspectivas</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Redução das desigualdades regionais no acesso e permanência no ensino médio.</li>
          <li>Formação e valorização docente para atuar com metodologias inovadoras.</li>
          <li>Integração entre currículo, território e projeto de vida dos estudantes.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Materiais gratuitos online</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="https://institutocervantes.educacao.ba.gov.br/" className="text-blue-600 underline" target="_blank">Instituto Anísio Teixeira – documentos e diretrizes</a></li>
          <li><a href="http://educacaoprofissional.educacao.ba.gov.br" className="text-blue-600 underline" target="_blank">Portal da Educação Profissional da Bahia</a></li>
          <li><a href="https://www.youtube.com/watch?v=C4Hg8G3k8NQ" className="text-blue-600 underline" target="_blank">Vídeo: Novo Ensino Médio na Bahia</a></li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Possíveis temas de prova</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Organização curricular do Ensino Médio na Bahia.</li>
          <li>Itinerários formativos e projeto de vida como eixos estruturantes.</li>
          <li>Políticas públicas estaduais para ensino médio e EPT.</li>
          <li>Desafios regionais e ações afirmativas na rede estadual.</li>
        </ul>
      </main>
    </>
  );
}
