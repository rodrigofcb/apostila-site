import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Head>
        <title>Apostila – Professor Educação Profissional (BA)</title>
      </Head>

      <h1 className="text-3xl font-bold mb-6">Apostila – Professor da Educação Profissional (BA)</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">📘 Legislação e Diretrizes</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><Link href="/ldb" className="text-blue-600 hover:underline">Lei de Diretrizes e Bases (LDB)</Link></li>
          <li><Link href="/portaria-emti" className="text-blue-600 hover:underline">Portaria EMTI</Link></li>
          <li><Link href="/dcn" className="text-blue-600 hover:underline">Diretrizes Curriculares Nacionais</Link></li>
          <li><Link href="/dcn-ept" className="text-blue-600 hover:underline">DCNs da Educação Profissional Técnica</Link></li>
          <li><Link href="/legislacao-ept" className="text-blue-600 hover:underline">Legislação da EPT</Link></li>
          <li><Link href="/ensino-medio-ba" className="text-blue-600 hover:underline">Educação na Bahia</Link></li>
          <li><Link href="/proeja" className="text-blue-600 hover:underline">Educação de Jovens e Adultos (PROEJA)</Link></li>
          <li><Link href="/direito-educacao-jovens-adultos" className="text-blue-600 hover:underline">Direito à Educação de Jovens e Adultos</Link></li>
          <li><Link href="/ldb-20-anos-carlos-cury" className="text-blue-600 hover:underline">LDB – 20 anos (Carlos Cury)</Link></li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🎓 Concepções e Práticas Educacionais</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><Link href="/conceito-historico-critico" className="text-blue-600 hover:underline">Concepção Histórico-Crítica</Link></li>
          <li><Link href="/cultura-e-curriculo" className="text-blue-600 hover:underline">Cultura e Currículo</Link></li>
          <li><Link href="/formacao-docente" className="text-blue-600 hover:underline">Formação Docente</Link></li>
          <li><Link href="/educacao-inclusiva" className="text-blue-600 hover:underline">Educação Inclusiva</Link></li>
          <li><Link href="/educacao-integral" className="text-blue-600 hover:underline">Educação Integral</Link></li>
          <li><Link href="/afetividade-e-letramento-eja" className="text-blue-600 hover:underline">Afetividade e Letramento na EJA</Link></li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🧠 Fundamentos e Reflexões</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><Link href="/trabalho-e-educacao" className="text-blue-600 hover:underline">Trabalho e Educação</Link></li>
          <li><Link href="/pedagogia-trabalho-omnilateral" className="text-blue-600 hover:underline">Pedagogia do Trabalho e Educação Omnilateral</Link></li>
          <li><Link href="/referenciais-teoricos" className="text-blue-600 hover:underline">Referenciais Teóricos</Link></li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🛠️ Organização Escolar</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><Link href="/ppp" className="text-blue-600 hover:underline">Projeto Político-Pedagógico (PPP)</Link></li>
          <li><Link href="/planejamento-educacional" className="text-blue-600 hover:underline">Planejamento Educacional</Link></li>
          <li><Link href="/concepcoes-de-avaliacao" className="text-blue-600 hover:underline">Concepções de Avaliação</Link></li>
          <li><Link href="/avaliacao" className="text-blue-600 hover:underline">Avaliação da Aprendizagem</Link></li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🔧 Integração Ensino-Trabalho</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><Link href="/ensino-integrado" className="text-blue-600 hover:underline">Ensino Médio Integrado</Link></li>
          <li><Link href="/emti" className="text-blue-600 hover:underline">Ensino Médio em Tempo Integral (EMTI)</Link></li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">🔗 Outros</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><Link href="/links-uteis" className="text-blue-600 hover:underline">Links Úteis</Link></li>
        </ul>
      </section>
    </div>
  );
}
