import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-lg">
      <h1 className="text-3xl font-bold mb-6">Apostila - Professor da Educação Profissional (BA)</h1>
      <ul className="space-y-3 list-disc list-inside">
        <li><Link href="/ldb" className="text-blue-600 hover:underline">LDB – Lei de Diretrizes e Bases</Link></li>
        <li><Link href="/dcn-ept" className="text-blue-600 hover:underline">Diretrizes Curriculares da EPT</Link></li>
        <li><Link href="/portaria-emti" className="text-blue-600 hover:underline">Portaria EMTI</Link></li>
        <li><Link href="/conceito-historico-critico" className="text-blue-600 hover:underline">Concepção Histórico-Crítica</Link></li>
        <li><Link href="/ensino-integrado" className="text-blue-600 hover:underline">Ensino Médio Integrado</Link></li>
        <li><Link href="/trabalho-e-educacao" className="text-blue-600 hover:underline">Trabalho e Educação</Link></li>
        <li><Link href="/proeja" className="text-blue-600 hover:underline">Educação de Jovens e Adultos – PROEJA</Link></li>
        <li><Link href="/legislacao-ept" className="text-blue-600 hover:underline">Legislação da EPT</Link></li>
        <li><Link href="/cultura-e-curriculo" className="text-blue-600 hover:underline">Cultura e Currículo</Link></li>
        <li><Link href="/avaliacao" className="text-blue-600 hover:underline">Avaliação Educacional</Link></li>
        <li><Link href="/educacao-integral" className="text-blue-600 hover:underline">Educação Integral</Link></li>
        <li><Link href="/ensino-medio-ba" className="text-blue-600 hover:underline">Ensino Médio na Bahia</Link></li>
        <li><Link href="/formacao-docente" className="text-blue-600 hover:underline">Formação Docente</Link></li>
        <li><Link href="/referenciais-teoricos" className="text-blue-600 hover:underline">Referenciais Teóricos</Link></li>
        <li><Link href="/educacao-inclusiva" className="text-blue-600 hover:underline">Educação Inclusiva</Link></li>
        <li><Link href="/links-uteis" className="text-blue-600 hover:underline">Links Úteis</Link></li>
      </ul>
    </main>
  );
}
