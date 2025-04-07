import Head from "next/head";

export default function Avaliacao() {
  return (
    <>
      <Head>
        <title>Avaliação Educacional no Ensino Médio</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-12 text-lg leading-relaxed">
        <h1 className="text-3xl font-bold mb-6">Avaliação Educacional no Ensino Médio</h1>

        <p className="mb-4">
          A avaliação educacional é parte integrante do processo de ensino-aprendizagem e deve ser orientada pelos princípios da formação integral, da justiça social e do direito à aprendizagem. No Ensino Médio, ela deve superar o viés classificatório e excludente, sendo usada como instrumento de diagnóstico, reflexão e reorientação das práticas pedagógicas.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Avaliação formativa e emancipadora</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Foco na aprendizagem, e não apenas na mensuração de resultados.</li>
          <li>Valoriza o processo de construção do conhecimento ao longo do tempo.</li>
          <li>Utiliza instrumentos diversificados: projetos, autoavaliação, portfólios, debates, produções textuais, etc.</li>
          <li>Promove o protagonismo do estudante e sua participação ativa na avaliação.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Avaliação diagnóstica e contínua</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Permite identificar dificuldades de aprendizagem e orientar intervenções pedagógicas.</li>
          <li>Evita a lógica punitiva e excludente das provas classificatórias.</li>
          <li>Incorpora a escuta ativa dos estudantes e o respeito aos seus ritmos e contextos.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Críticas à avaliação tradicional</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Foco excessivo em provas e notas, desconectado do desenvolvimento real dos estudantes.</li>
          <li>Reprodução de desigualdades educacionais por meio da padronização de critérios.</li>
          <li>Pressão por resultados que desconsideram os processos e as trajetórias dos alunos.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Relação com o Projeto Político-Pedagógico</h2>
        <p className="mb-4">
          A avaliação deve estar coerente com o PPP da escola e com os princípios do currículo adotado. Deve promover a reflexão coletiva sobre os objetivos educacionais e contribuir para a melhoria contínua do trabalho docente e da aprendizagem dos estudantes.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Avaliação e equidade</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Deve considerar as desigualdades sociais, econômicas e culturais entre os estudantes.</li>
          <li>Promover justiça educacional significa adaptar metodologias e expectativas à realidade dos alunos.</li>
          <li>Avaliação inclusiva respeita a diversidade de saberes, experiências e ritmos de aprendizagem.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Avaliação no Novo Ensino Médio</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Os itinerários formativos exigem novos instrumentos de avaliação, voltados à construção de competências e projetos de vida.</li>
          <li>Currículos mais flexíveis demandam avaliações igualmente abertas e contextualizadas.</li>
          <li>Enem e avaliações externas influenciam, mas não devem ser o único parâmetro.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Materiais gratuitos online</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><a href="https://avaliacaoeducacional.com" className="text-blue-600 underline" target="_blank">Blog Avaliação Educacional – textos críticos</a></li>
          <li><a href="https://www.youtube.com/watch?v=WxW-3Y93TrI" className="text-blue-600 underline" target="_blank">Vídeo: Avaliação Formativa na prática</a></li>
          <li><a href="https://educacaointegral.org.br/reportagens/avaliacao-formativa-e-transformadora/" className="text-blue-600 underline" target="_blank">Artigo: Avaliação como processo de transformação</a></li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Questões comuns em prova</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Conceitos de avaliação formativa, diagnóstica e emancipadora.</li>
          <li>Críticas à lógica classificatória e excludente da avaliação tradicional.</li>
          <li>Relação entre avaliação e projeto político-pedagógico.</li>
          <li>Formas de promover equidade e justiça na avaliação escolar.</li>
        </ul>
      </main>
    </>
  );
}
