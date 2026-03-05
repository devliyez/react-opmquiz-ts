export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const questions: Question[] = [
  {
    id:1,
    question: "¿Cuando fue la primera publicacion del webcomic de One Punch Man?",
    options: ["2009", "2011", "2013", "2015"],
    correctAnswer: 0,
  },
  {
    id:2,
    question: "¿Como se llama el fundador de la Asociacion de Heroes?",
    options: ["Tongara", "Narinki", "Sitch", "Agoni"],
    correctAnswer: 3,
  },
  {
    id:3,
    question: "¿Cuando fue la primera publicacion del manga de One Punch Man?",
    options: ["2011", "2012", "2013", "2015"],
    correctAnswer: 1,
  },
  {
    id:4,
    question: "¿Cuantos años tiene Genos?",
    options: ["18", "19", "20", "21","22"],
    correctAnswer: 1,
  },
  {
    id:5,
    question: "¿Quien es el heroe mas popular en el mundo de OPM?",
    options: ["Sweet Mask", "King", "Tatsumaki", "Agoni"],
    correctAnswer: 0,
  },
  {
    id:6,
    question: "¿Cual es el nombre real de Mumen Rider?",
    options: ["Rogen", "Charanko", "Satoru", "No se ha mencionado"],
    correctAnswer: 2,
  },
  {
    id: 7,
    question: "¿Por qué Homeless Emperor perdió su trabajo?",
    options: ["Acoso sexual", "Recortes de personal", "Falta de compromiso", "No se ha mencionado"],
    correctAnswer: 0,
  },
  {
    id: 8,
    question: "¿Cuanto tiempo entreno Saitama hasta remover su limitador?",
    options: ["300 dias", "2 años", "3 años", "1.5 años"],
    correctAnswer: 3,
  },
  {
    id: 9,
    question: "¿Como se llama el comandante de la mision de rescate de Waganma?",
    options: ["Narinki", "Tongara", "Sekingar", "Child Emperor"],
    correctAnswer: 2,
  },
  {
    id: 10,
    question: "Segun los rumores, ¿Cual es el heroe mas debil fisicamente entre los clase S?",
    options: ["PuriPuri Prisioner", "ZombieMan", "TankTop Master", "Child Emperor"],
    correctAnswer: 1,
  },
];