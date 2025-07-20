import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Lightbulb, TrendingUp, Users } from "lucide-react";

const About = () => {
  const skills = [
    "React & TypeScript", "Node.js", "Python", "AI/ML",
    "Bot Development", "Automation", "SEO", "Database Design",
    "Cloud Services", "API Development", "Mobile Apps", "UI/UX"
  ];

  const values = [
    {
      icon: Target,
      title: "دقت و کیفیت",
      description: "تمرکز بر جزئیات و ارائه بالاترین کیفیت در هر پروژه"
    },
    {
      icon: Lightbulb,
      title: "نوآوری",
      description: "استفاده از جدیدترین تکنولوژی‌ها و روش‌های نوآورانه"
    },
    {
      icon: TrendingUp,
      title: "رشد مستمر",
      description: "یادگیری مداوم و بروزرسانی مهارت‌ها"
    },
    {
      icon: Users,
      title: "مشتری‌محوری",
      description: "درک نیازهای مشتری و ارائه راهکارهای مناسب"
    }
  ];

  return (
    <section className="py-20 px-6" dir="rtl">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            درباره من
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            برنامه‌نویس با اشتیاق به تکنولوژی و هوش مصنوعی
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Main About Content */}
          <div className="space-y-6">
            <Card className="glow-effect bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">چرا "ایده از تو، اجرا از من"؟</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  معتقدم که بهترین پروژه‌ها زمانی شکل می‌گیرند که ایده‌های خلاقانه مشتریان 
                  با تخصص فنی و تجربه برنامه‌نویسی ترکیب شود. شما ایده و ویژن دارید، 
                  من ابزارها و دانش فنی برای تحقق آن.
                </p>
                <p>
                  تخصص اصلی من در حوزه اتوماسیون، ربات‌سازی و تلفیق کسب و کارهای سنتی 
                  با تکنولوژی‌های نوین است. هدفم کمک به کسب و کارها برای بهره‌مندی از 
                  قدرت هوش مصنوعی و اتوماسیون است.
                </p>
                <p>
                  در هر پروژه، سعی می‌کنم راهکاری ارائه دهم که نه تنها نیاز فعلی شما را 
                  برطرف کند، بلکه برای آینده نیز قابل توسعه و ارتقا باشد.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card key={index} className="group hover:scale-105 transition-smooth bg-card/60 backdrop-blur-sm border-border/50">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                        <value.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{value.title}</h4>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills & Experience */}
          <div className="space-y-6">
            <Card className="glow-effect bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">مهارت‌های فنی</CardTitle>
                <CardDescription>تکنولوژی‌ها و ابزارهایی که با آن‌ها کار می‌کنم</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="tech-gradient border-border/30">
              <CardHeader>
                <CardTitle className="text-xl text-gradient">آمار فعالیت</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">پروژه موفق</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">3+</div>
                  <div className="text-sm text-muted-foreground">سال تجربه</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">25+</div>
                  <div className="text-sm text-muted-foreground">مشتری راضی</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">تحویل به موقع</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">آماده شروع هستید؟</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  بیایید ایده شما را با هم به واقعیت تبدیل کنیم
                </p>
                <div className="text-2xl">🚀</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;