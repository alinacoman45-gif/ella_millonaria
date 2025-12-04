import { Check, Sparkles } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

const benefits = [
  "Convierte tus ideas en videos de alta calidad",
  "Elimina la necesidad de grabarte",
  "No necesitas conocimientos técnicos",
  "Utilizas herramientas que puedes probar gratis",
  "Resultados profesionales en minutos",
];

const Benefits = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-200/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="section-container relative">
        <div
          className={cn(
            "text-center mb-16 opacity-0",
            isVisible && "animate-fade-in-up"
          )}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-100 border border-purple-200 mb-4">
            <Sparkles className="w-3 h-3 text-purple-600" />
            <span className="text-xs text-gray-600 uppercase tracking-wider">
              Ventajas
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            ¿Por qué este método{" "}
            <span className="gradient-text">funciona</span>?
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={cn(
                  "card-glass p-6 flex items-center gap-4 hover:border-purple-300 transition-all duration-500 group cursor-default opacity-0",
                  "hover:translate-x-2 hover:shadow-lg",
                  isVisible && "animate-fade-in-left"
                )}
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center group-hover:bg-purple-200 group-hover:scale-110 transition-all duration-300">
                  <Check className="w-6 h-6 text-purple-600 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-lg font-medium group-hover:text-foreground transition-colors">
                  {benefit}
                </p>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
