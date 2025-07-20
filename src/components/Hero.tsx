import { Button } from "@/components/ui/button";
import { ArrowDown, Bot, Zap, Code, Brain } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/70"></div>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Bot className="absolute top-20 left-20 w-8 h-8 text-primary animate-float opacity-30" />
        <Zap className="absolute top-40 right-32 w-6 h-6 text-accent animate-float opacity-40" style={{ animationDelay: '1s' }} />
        <Code className="absolute bottom-40 left-32 w-10 h-10 text-primary animate-float opacity-25" style={{ animationDelay: '2s' }} />
        <Brain className="absolute bottom-20 right-20 w-7 h-7 text-accent animate-float opacity-35" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-gradient animate-pulse-glow">ایده از تو</span>
          <br />
          <span className="text-foreground">اجرا از من</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
          تلفیق کسب و کارهای سنتی با تکنولوژی و هوش مصنوعی
        </p>

        {/* Services Tags */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { icon: Bot, text: "ربات‌سازی" },
            { icon: Zap, text: "اتوماسیون" },
            { icon: Code, text: "طراحی سایت" },
            { icon: Brain, text: "هوش مصنوعی" }
          ].map((service, index) => (
            <div 
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border glow-effect transition-smooth hover:scale-105"
            >
              <service.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{service.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="hero-gradient text-primary-foreground hover:scale-105 transition-smooth glow-effect font-semibold"
          >
            شروع همکاری
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
          >
            مشاهده نمونه کارها
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;