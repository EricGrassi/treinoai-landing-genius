
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, Dumbbell, Heart, Target, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

// Tipos para os dados do formulário
type FitnessGoal = "muscle" | "weight_loss" | "endurance" | "strength" | "overall";
type ExperienceLevel = "beginner" | "intermediate" | "advanced";
type WorkoutsPerWeek = 2 | 3 | 4 | 5 | 6;
type WorkoutDuration = 30 | 45 | 60 | 90;
type Equipment = "none" | "minimal" | "full_gym";

// Estrutura dos dados do usuário
interface UserPreferences {
  goal: FitnessGoal;
  experience: ExperienceLevel;
  workoutsPerWeek: WorkoutsPerWeek;
  workoutDuration: WorkoutDuration;
  equipment: Equipment;
  focusAreas: string[];
  limitations: string;
}

const defaultPreferences: UserPreferences = {
  goal: "overall",
  experience: "beginner",
  workoutsPerWeek: 3,
  workoutDuration: 45,
  equipment: "minimal",
  focusAreas: [],
  limitations: "",
};

// Componente para o formulário em etapas
const Signup = () => {
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState<UserPreferences>(defaultPreferences);
  const navigate = useNavigate();
  const totalSteps = 5;

  // Função para atualizar as preferências
  const updatePreference = <K extends keyof UserPreferences>(
    key: K,
    value: UserPreferences[K]
  ) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Opções de áreas de foco
  const focusAreaOptions = [
    { id: "chest", label: "Peito" },
    { id: "back", label: "Costas" },
    { id: "legs", label: "Pernas" },
    { id: "arms", label: "Braços" },
    { id: "core", label: "Abdômen" },
    { id: "cardio", label: "Cardio" },
    { id: "flexibility", label: "Flexibilidade" },
    { id: "posture", label: "Postura" },
  ];

  // Função para toggle de áreas de foco
  const toggleFocusArea = (areaId: string) => {
    setPreferences((prev) => {
      const updatedAreas = prev.focusAreas.includes(areaId)
        ? prev.focusAreas.filter((id) => id !== areaId)
        : [...prev.focusAreas, areaId];
      
      return {
        ...prev,
        focusAreas: updatedAreas,
      };
    });
  };

  // Função para avançar para a próxima etapa
  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Enviar dados e redirecionar (simulado por enquanto)
      console.log("Dados enviados:", preferences);
      navigate("/success");
    }
  };

  // Função para voltar para a etapa anterior
  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  // Função para submeter o formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Preferências enviadas:", preferences);
    navigate("/success");
  };

  // Renderização condicional baseada na etapa atual
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Qual é o seu objetivo principal?</h2>
            <p className="text-treino-light">Isso nos ajudará a focar seu plano de treino.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div
                className={`bg-white/5 border ${
                  preferences.goal === "muscle" ? "border-white" : "border-white/10"
                } rounded-xl p-5 cursor-pointer hover:bg-white/10 transition-all`}
                onClick={() => updatePreference("goal", "muscle")}
              >
                <div className="flex justify-between items-start">
                  <Dumbbell className="h-8 w-8 text-treino-accent" />
                  {preferences.goal === "muscle" && (
                    <CheckCircle className="h-5 w-5 text-treino-accent" />
                  )}
                </div>
                <h3 className="text-white font-semibold text-lg mt-4">Ganhar Massa Muscular</h3>
                <p className="text-treino-light text-sm mt-2">
                  Treinos focados em hipertrofia para desenvolver músculos e força.
                </p>
              </div>
              
              <div
                className={`bg-white/5 border ${
                  preferences.goal === "weight_loss" ? "border-white" : "border-white/10"
                } rounded-xl p-5 cursor-pointer hover:bg-white/10 transition-all`}
                onClick={() => updatePreference("goal", "weight_loss")}
              >
                <div className="flex justify-between items-start">
                  <Target className="h-8 w-8 text-treino-accent" />
                  {preferences.goal === "weight_loss" && (
                    <CheckCircle className="h-5 w-5 text-treino-accent" />
                  )}
                </div>
                <h3 className="text-white font-semibold text-lg mt-4">Perder Peso</h3>
                <p className="text-treino-light text-sm mt-2">
                  Combinação de treinos para maximizar o gasto calórico e tonificar.
                </p>
              </div>
              
              <div
                className={`bg-white/5 border ${
                  preferences.goal === "endurance" ? "border-white" : "border-white/10"
                } rounded-xl p-5 cursor-pointer hover:bg-white/10 transition-all`}
                onClick={() => updatePreference("goal", "endurance")}
              >
                <div className="flex justify-between items-start">
                  <Heart className="h-8 w-8 text-treino-accent" />
                  {preferences.goal === "endurance" && (
                    <CheckCircle className="h-5 w-5 text-treino-accent" />
                  )}
                </div>
                <h3 className="text-white font-semibold text-lg mt-4">Melhorar Resistência</h3>
                <p className="text-treino-light text-sm mt-2">
                  Treinos para aumentar sua capacidade cardiovascular e stamina.
                </p>
              </div>
              
              <div
                className={`bg-white/5 border ${
                  preferences.goal === "strength" ? "border-white" : "border-white/10"
                } rounded-xl p-5 cursor-pointer hover:bg-white/10 transition-all`}
                onClick={() => updatePreference("goal", "strength")}
              >
                <div className="flex justify-between items-start">
                  <Dumbbell className="h-8 w-8 text-treino-accent" />
                  {preferences.goal === "strength" && (
                    <CheckCircle className="h-5 w-5 text-treino-accent" />
                  )}
                </div>
                <h3 className="text-white font-semibold text-lg mt-4">Aumentar Força</h3>
                <p className="text-treino-light text-sm mt-2">
                  Foco em levantamentos pesados e progressão de carga para força máxima.
                </p>
              </div>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Qual é o seu nível de experiência?</h2>
            <p className="text-treino-light">
              Isso nos ajudará a ajustar a dificuldade dos exercícios e a progressão.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div
                className={`bg-white/5 border text-center ${
                  preferences.experience === "beginner" ? "border-white" : "border-white/10"
                } rounded-xl p-6 cursor-pointer hover:bg-white/10 transition-all`}
                onClick={() => updatePreference("experience", "beginner")}
              >
                <div className="flex justify-center mb-2">
                  {preferences.experience === "beginner" && (
                    <CheckCircle className="h-5 w-5 text-treino-accent absolute right-4 top-4" />
                  )}
                </div>
                <h3 className="text-white font-semibold text-lg">Iniciante</h3>
                <p className="text-treino-light text-sm mt-2">
                  Novo em treinos ou retornando após longo período
                </p>
              </div>
              
              <div
                className={`bg-white/5 border text-center ${
                  preferences.experience === "intermediate" ? "border-white" : "border-white/10"
                } rounded-xl p-6 cursor-pointer hover:bg-white/10 transition-all`}
                onClick={() => updatePreference("experience", "intermediate")}
              >
                <div className="flex justify-center mb-2">
                  {preferences.experience === "intermediate" && (
                    <CheckCircle className="h-5 w-5 text-treino-accent absolute right-4 top-4" />
                  )}
                </div>
                <h3 className="text-white font-semibold text-lg">Intermediário</h3>
                <p className="text-treino-light text-sm mt-2">
                  Treina regularmente há alguns meses/anos
                </p>
              </div>
              
              <div
                className={`bg-white/5 border text-center ${
                  preferences.experience === "advanced" ? "border-white" : "border-white/10"
                } rounded-xl p-6 cursor-pointer hover:bg-white/10 transition-all`}
                onClick={() => updatePreference("experience", "advanced")}
              >
                <div className="flex justify-center mb-2">
                  {preferences.experience === "advanced" && (
                    <CheckCircle className="h-5 w-5 text-treino-accent absolute right-4 top-4" />
                  )}
                </div>
                <h3 className="text-white font-semibold text-lg">Avançado</h3>
                <p className="text-treino-light text-sm mt-2">
                  Experiência significativa com treinos diversos
                </p>
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Quanto tempo você pode dedicar aos treinos?
            </h2>
            <p className="text-treino-light">
              Defina sua disponibilidade semanal e duração preferida dos treinos
            </p>
            
            <div className="space-y-8 mt-6">
              <div>
                <label className="block text-white font-medium mb-2">
                  Treinos por semana
                </label>
                <div className="flex justify-between items-center">
                  <span className="text-treino-light">2</span>
                  <div className="flex-1 mx-4">
                    <input
                      type="range"
                      min="2"
                      max="6"
                      step="1"
                      value={preferences.workoutsPerWeek}
                      onChange={(e) => updatePreference("workoutsPerWeek", Number(e.target.value) as WorkoutsPerWeek)}
                      className="w-full accent-treino-accent"
                    />
                    <div className="flex justify-between text-xs text-treino-light mt-1">
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                      <span>5</span>
                      <span>6</span>
                    </div>
                  </div>
                  <span className="text-treino-light">6</span>
                </div>
                <div className="text-center mt-2">
                  <span className="text-white font-medium">
                    {preferences.workoutsPerWeek} treinos por semana
                  </span>
                </div>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">
                  Duração do treino
                </label>
                <div className="grid grid-cols-4 gap-3">
                  {[30, 45, 60, 90].map((duration) => (
                    <div
                      key={duration}
                      className={`text-center py-3 px-2 rounded-lg cursor-pointer ${
                        preferences.workoutDuration === duration
                          ? "bg-white text-treino-dark font-medium"
                          : "bg-white/5 text-white border border-white/10"
                      }`}
                      onClick={() => updatePreference("workoutDuration", duration as WorkoutDuration)}
                    >
                      {duration} min
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Que equipamentos você tem disponível?
            </h2>
            <p className="text-treino-light">
              Personalizaremos os exercícios com base nos equipamentos que você tem acesso
            </p>
            
            <div className="space-y-4 mt-6">
              <div
                className={`bg-white/5 border ${
                  preferences.equipment === "none" ? "border-white" : "border-white/10"
                } rounded-xl p-5 cursor-pointer hover:bg-white/10 transition-all`}
                onClick={() => updatePreference("equipment", "none")}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-white font-semibold">Sem Equipamento</h3>
                    <p className="text-treino-light text-sm mt-1">
                      Apenas exercícios com o peso corporal
                    </p>
                  </div>
                  {preferences.equipment === "none" && (
                    <CheckCircle className="h-5 w-5 text-treino-accent" />
                  )}
                </div>
              </div>
              
              <div
                className={`bg-white/5 border ${
                  preferences.equipment === "minimal" ? "border-white" : "border-white/10"
                } rounded-xl p-5 cursor-pointer hover:bg-white/10 transition-all`}
                onClick={() => updatePreference("equipment", "minimal")}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-white font-semibold">Equipamento Mínimo</h3>
                    <p className="text-treino-light text-sm mt-1">
                      Halteres, bandas elásticas, etc.
                    </p>
                  </div>
                  {preferences.equipment === "minimal" && (
                    <CheckCircle className="h-5 w-5 text-treino-accent" />
                  )}
                </div>
              </div>
              
              <div
                className={`bg-white/5 border ${
                  preferences.equipment === "full_gym" ? "border-white" : "border-white/10"
                } rounded-xl p-5 cursor-pointer hover:bg-white/10 transition-all`}
                onClick={() => updatePreference("equipment", "full_gym")}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-white font-semibold">Academia Completa</h3>
                    <p className="text-treino-light text-sm mt-1">
                      Acesso a uma academia com equipamentos completos
                    </p>
                  </div>
                  {preferences.equipment === "full_gym" && (
                    <CheckCircle className="h-5 w-5 text-treino-accent" />
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">
              Áreas de foco e limitações
            </h2>
            <p className="text-treino-light">
              Conte-nos sobre áreas específicas que você quer focar e quaisquer limitações
            </p>
            
            <div className="space-y-6 mt-6">
              <div>
                <label className="block text-white font-medium mb-3">
                  Áreas que deseja focar (selecione quantas quiser)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {focusAreaOptions.map((area) => (
                    <div
                      key={area.id}
                      className={`text-center py-3 px-2 rounded-lg cursor-pointer ${
                        preferences.focusAreas.includes(area.id)
                          ? "bg-white text-treino-dark font-medium"
                          : "bg-white/5 text-white border border-white/10"
                      }`}
                      onClick={() => toggleFocusArea(area.id)}
                    >
                      {area.label}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">
                  Lesões ou limitações (opcional)
                </label>
                <textarea
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-treino-light/70 focus:outline-none focus:border-white/30 transition-colors"
                  rows={3}
                  placeholder="Ex: Lesão no joelho, problema nas costas, etc."
                  value={preferences.limitations}
                  onChange={(e) => updatePreference("limitations", e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-treino-dark to-black pb-20">
      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <Link to="/" className="font-mono text-xl font-semibold text-white">
            Treino<span className="text-treino-accent">AI</span>
          </Link>
          <div className="text-treino-light text-sm flex items-center">
            <span className="hidden sm:inline mr-2">Seu plano personalizado</span>
            <span className="font-medium text-white">
              Etapa {step} de {totalSteps}
            </span>
          </div>
        </div>
      </header>
      
      {/* Progress bar */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-1">
        <div className="h-1 bg-white/10 w-full rounded-full overflow-hidden">
          <div 
            className="h-full bg-treino-accent transition-all duration-300"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>
      
      {/* Form content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <form onSubmit={handleSubmit}>
          <div className="glass-effect rounded-2xl p-6 sm:p-8 border border-white/10">
            {renderStep()}
            
            {/* Navigation buttons */}
            <div className="flex justify-between mt-12">
              {step > 1 ? (
                <Button
                  type="button"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                  onClick={prevStep}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar
                </Button>
              ) : (
                <Link to="/">
                  <Button
                    type="button"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Página Inicial
                  </Button>
                </Link>
              )}
              
              <Button
                type={step === totalSteps ? "submit" : "button"}
                className="bg-white text-treino-dark hover:bg-treino-accent group transition-all duration-300"
                onClick={step === totalSteps ? undefined : nextStep}
              >
                {step === totalSteps ? "Finalizar" : "Continuar"}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </form>
      </div>
      
      {/* Security note */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 text-center">
        <p className="text-treino-light text-xs">
          Suas informações são protegidas e usadas apenas para criar seu plano de treino personalizado.
          <br />Não compartilhamos seus dados com terceiros.
        </p>
      </div>
    </div>
  );
};

export default Signup;
