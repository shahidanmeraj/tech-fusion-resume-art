import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6" dir="rtl">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            بیایید شروع کنیم
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            آماده‌ایم تا ایده‌های شما را به واقعیت تبدیل کنیم
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glow-effect bg-card/80 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-primary" />
                فرم تماس
              </CardTitle>
              <CardDescription>
                پروژه خود را با ما در میان بگذارید
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">نام</label>
                  <Input placeholder="نام شما" className="bg-background/50" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">شماره تماس</label>
                  <Input placeholder="09123456789" className="bg-background/50" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">ایمیل</label>
                <Input type="email" placeholder="example@email.com" className="bg-background/50" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">موضوع پروژه</label>
                <Input placeholder="عنوان پروژه یا خدمت مورد نیاز" className="bg-background/50" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">توضیحات</label>
                <Textarea 
                  placeholder="لطفاً در مورد پروژه خود توضیح دهید..."
                  className="min-h-32 bg-background/50"
                />
              </div>

              <Button className="w-full hero-gradient text-primary-foreground hover:scale-[1.02] transition-smooth glow-effect">
                <Send className="w-4 h-4 ml-2" />
                ارسال درخواست
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="glow-effect bg-card/80 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">راه‌های ارتباطی</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-background/30 transition-smooth hover:bg-background/50">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">تماس مستقیم</p>
                    <p className="text-muted-foreground">09123456789</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-background/30 transition-smooth hover:bg-background/50">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-medium">ایمیل</p>
                    <p className="text-muted-foreground">contact@example.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-background/30 transition-smooth hover:bg-background/50">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">تلگرام</p>
                    <p className="text-muted-foreground">@username</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Process Info */}
            <Card className="tech-gradient border-border/30">
              <CardHeader>
                <CardTitle className="text-xl text-gradient">فرآیند همکاری</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">1</div>
                  <div>
                    <h4 className="font-semibold">تحلیل نیاز</h4>
                    <p className="text-sm text-muted-foreground">بررسی دقیق پروژه و ارائه راهکار</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">2</div>
                  <div>
                    <h4 className="font-semibold">طراحی و برنامه‌ریزی</h4>
                    <p className="text-sm text-muted-foreground">ایجاد roadmap و timeline پروژه</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">3</div>
                  <div>
                    <h4 className="font-semibold">پیاده‌سازی</h4>
                    <p className="text-sm text-muted-foreground">توسعه و تست با آپدیت مستمر</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">4</div>
                  <div>
                    <h4 className="font-semibold">تحویل و پشتیبانی</h4>
                    <p className="text-sm text-muted-foreground">تحویل نهایی و پشتیبانی مستمر</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;