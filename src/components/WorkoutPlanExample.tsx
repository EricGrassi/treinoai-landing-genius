
import { Dumbbell } from "lucide-react";

const workoutDays = [
  {
    day: "Segunda-feira",
    focus: "Peito e Tríceps",
    exercises: [
      { name: "Supino Reto", sets: 4, reps: "8-10", rest: "90 seg" },
      { name: "Crossover com Cabos", sets: 3, reps: "10-12", rest: "60 seg" },
      { name: "Supino Inclinado com Halteres", sets: 3, reps: "10-12", rest: "60 seg" },
      { name: "Tríceps Corda", sets: 4, reps: "12-15", rest: "45 seg" },
      { name: "Tríceps Francês", sets: 3, reps: "10-12", rest: "60 seg" }
    ]
  },
  {
    day: "Terça-feira",
    focus: "Costas e Bíceps",
    exercises: [
      { name: "Puxada Frontal", sets: 4, reps: "8-10", rest: "90 seg" },
      { name: "Remada Curvada", sets: 3, reps: "10-12", rest: "60 seg" },
      { name: "Pulldown com Corda", sets: 3, reps: "12-15", rest: "45 seg" },
      { name: "Rosca Direta com Barra", sets: 3, reps: "10-12", rest: "60 seg" },
      { name: "Rosca Martelo", sets: 3, reps: "10-12", rest: "60 seg" }
    ]
  },
  {
    day: "Quarta-feira",
    focus: "Descanso Ativo",
    exercises: [
      { name: "Caminhada leve", sets: 1, reps: "30 min", rest: "-" },
      { name: "Alongamento completo", sets: 1, reps: "15 min", rest: "-" }
    ]
  },
  {
    day: "Quinta-feira",
    focus: "Pernas e Ombros",
    exercises: [
      { name: "Agachamento", sets: 4, reps: "8-10", rest: "120 seg" },
      { name: "Leg Press", sets: 3, reps: "10-12", rest: "90 seg" },
      { name: "Cadeira Extensora", sets: 3, reps: "12-15", rest: "60 seg" },
      { name: "Desenvolvimento com Halteres", sets: 4, reps: "10-12", rest: "60 seg" },
      { name: "Elevação Lateral", sets: 3, reps: "12-15", rest: "45 seg" }
    ]
  },
  {
    day: "Sexta-feira",
    focus: "Circuito HIIT",
    exercises: [
      { name: "Burpees", sets: 5, reps: "45 seg", rest: "15 seg" },
      { name: "Mountain Climbers", sets: 5, reps: "45 seg", rest: "15 seg" },
      { name: "Jumping Jacks", sets: 5, reps: "45 seg", rest: "15 seg" },
      { name: "Prancha", sets: 5, reps: "45 seg", rest: "15 seg" },
      { name: "Recuperação", sets: 1, reps: "3 min", rest: "-" }
    ]
  }
];

const WorkoutPlanExample = () => {
  return (
    <section id="workout-example" className="py-20 bg-treino-dark px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-white/10 text-treino-accent px-3 py-1 rounded-full text-sm mb-4 inline-block">
            Exemplo de Plano
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Veja um Plano de Treino Personalizado
          </h2>
          <p className="text-treino-light max-w-2xl mx-auto">
            Este é um exemplo de plano de treino de 5 dias focado em hipertrofia e condicionamento físico que o TreinoAI poderia criar para você.
          </p>
        </div>
        
        <div className="overflow-x-auto glass-effect rounded-2xl p-6 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {workoutDays.map((day, dayIndex) => (
              <div 
                key={dayIndex}
                className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{day.day}</h3>
                  <Dumbbell className="h-5 w-5 text-treino-accent" />
                </div>
                <div className="bg-white/10 text-xs text-treino-accent px-2 py-1 rounded-md inline-block mb-4">
                  {day.focus}
                </div>
                <div className="space-y-3">
                  {day.exercises.map((exercise, exIndex) => (
                    <div key={exIndex} className="border-b border-white/5 pb-2 last:border-0">
                      <div className="font-medium text-white mb-1">{exercise.name}</div>
                      <div className="flex text-xs text-treino-light space-x-3">
                        <span>{exercise.sets} séries</span>
                        <span>{exercise.reps}</span>
                        <span>{exercise.rest}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-treino-light text-sm italic">
              Este plano é apenas um exemplo. O TreinoAI desenvolverá um plano totalmente personalizado com base nos seus objetivos, nível de condicionamento, equipamento disponível e restrições de tempo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutPlanExample;
