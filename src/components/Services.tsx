import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Zap, Globe, Smartphone, Search, Cog } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "ساخت انواع ربات",
      description: "طراحی و توسعه ربات‌های هوشمند برای تلگرام، واتس‌اپ و پلتفرم‌های مختلف",
      features: ["ربات تلگرام", "ربات واتس‌اپ", "Chat Bot هوشمند", "ربات فروش"]
    },
    {
      icon: Zap,
      title: "تولید اتوماسیون",
      description: "خودکارسازی فرآیندهای کسب و کار برای افزایش بهره‌وری و کاهش هزینه‌ها",
      features: ["اتوماسیون فروش", "مدیریت انبار", "گزارش‌گیری خودکار", "پردازش داده"]
    },
    {
      icon: Globe,
      title: "طراحی و ساخت سایت",
      description: "توسعه وب‌سایت‌های مدرن، سریع و واکنش‌گرا با جدیدترین تکنولوژی‌ها",
      features: ["وب‌سایت واکنش‌گرا", "فروشگاه آنلاین", "سیستم مدیریت", "پنل ادمین"]
    },
    {
      icon: Search,
      title: "سئو و بهینه‌سازی",
      description: "بهینه‌سازی موتورهای جستجو برای افزایش رتبه و ترافیک وب‌سایت",
      features: ["SEO فنی", "تولید محتوا", "link building", "تحلیل رقبا"]
    },
    {
      icon: Smartphone,
      title: "طراحی اپ اختصاصی",
      description: "توسعه اپلیکیشن‌های موبایل و وب منطبق با نیازهای هر کسب و کار",
      features: ["اپ موبایل", "PWA", "اپ تحت وب", "UI/UX Design"]
    },
    {
      icon: Cog,
      title: "مشاوره تکنولوژی",
      description: "راهکارهای هوشمند برای دیجیتالی کردن کسب و کارهای سنتی",
      features: ["تحلیل نیاز", "راهکار هوشمند", "پیاده‌سازی", "پشتیبانی مستمر"]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            خدمات تخصصی
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ارائه راهکارهای نوآورانه برای تبدیل ایده‌ها به واقعیت
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:scale-105 transition-smooth glow-effect border-border/50 bg-card/80 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tech Integration Message */}
        <div className="mt-16 text-center">
          <div className="tech-gradient rounded-2xl p-8 border border-border/30">
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              تلفیق تکنولوژی با کسب و کار
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              هدف ما کمک به کسب و کارهای سنتی برای ورود به دنیای دیجیتال و استفاده از قدرت 
              هوش مصنوعی و اتوماسیون برای رشد و توسعه بیشتر است.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;