import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-4 text-lg max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Apostila - Professor da Educação Profissional (Bahia)</h1>
      <ul className="space-y-2">
        <li><Link href="/ldb" className="text-blue-600 underline">1. LDBEN (Lei 9.394/96)</Link></li>
        <li><Link href="/dcn" className="text-blue-600 underline">2. Diretrizes Curriculares (DCN EPT)</Link></li>
        <li><Link href="/emti" className="text-blue-600 underline">3. Programa EMTI</Link></li>
      </ul>
    </div>
  );
}
