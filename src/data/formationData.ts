interface formationInterface {
  institution: string;
  type: string;
  course: string;
  status: string;
  time?: string;
}

export const formationData: formationInterface[] = [
  {
    institution: 'Uninassau',
    type: 'Tecnólogo',
    course: 'Análise e Desenvolvimento de Sistemas',
    status: 'Concluído',
    time: '2024.1 - 2025.2',
  },
  {
    institution: 'Faculdade Focus',
    type: 'Pós-Graduação - EAD',
    course: 'Egenharia de Software',
    status: 'Cursando',
    time: '2026.1 - 2026.2',
  },
];
