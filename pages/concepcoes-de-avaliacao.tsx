import Head from "next/head";

export default function ConcepcoesDeAvaliacao() {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <Head>
        <title>Concepções de Avaliação</title>
      </Head>

      <h1 className="text-3xl font-bold mb-4">Concepções de Avaliação</h1>

      <p className="mb-4">
        A avaliação é parte fundamental do processo de ensino-aprendizagem. Ela vai além da atribuição
        de notas: serve como instrumento de diagnóstico, acompanhamento e transformação das práticas
        pedagógicas. Existem diferentes concepções e finalidades da avaliação, que devem ser escolhidas
        conforme os objetivos educacionais.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Avaliação Diagnóstica</h2>
      <p className="mb-4">
        Aplicada no início de um período letivo ou unidade, busca identificar os conhecimentos prévios dos
        alunos, suas dificuldades e potencialidades. Ajuda o professor a planejar estratégias adequadas
        às necessidades da turma.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Avaliação Formativa</h2>
      <p className="mb-4">
        Ocorre ao longo do processo de aprendizagem. Tem caráter contínuo e retroalimentador, permitindo
        intervenções pedagógicas para promover avanços. Envolve observações, registros, autoavaliação
        e devolutivas construtivas.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Avaliação Somativa</h2>
      <p className="mb-4">
        Realizada ao final de um ciclo (bimestre, semestre, ano), tem como objetivo verificar o que foi
        aprendido e atribuir uma nota ou conceito. Embora seja útil para certificações, não deve ser o único
        critério para decisões pedagógicas.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Avaliação Normativa</h2>
      <p className="mb-4">
        Compara o desempenho do aluno a padrões pré-estabelecidos ou à média do grupo. Pode ser útil
        em avaliações externas, mas, isoladamente, pode gerar competitividade e exclusão.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Princípios da avaliação emancipadora</h2>
      <p className="mb-4">
        Avaliar deve ser um ato pedagógico que respeita o tempo de aprendizagem dos alunos, valoriza
        os avanços e considera aspectos qualitativos. A avaliação precisa estar integrada ao currículo e à
        prática docente, promovendo a autonomia e o pensamento crítico.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Referência</h2>
      <p className="mb-4">
        Baseada em autores como Cipriano Luckesi e Jussara Hoffmann, que defendem uma avaliação
        comprometida com o desenvolvimento integral do estudante.
      </p>
    </div>
  );
}
