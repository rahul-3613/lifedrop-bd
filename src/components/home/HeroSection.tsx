import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AlertCircle, Heart } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-2xl animate-float" />
      
      <div className="container mx-auto relative z-10 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-medium">বাংলাদেশের বিশ্বস্ত রক্তদান প্ল্যাটফর্ম</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up delay-100">
            রক্ত তৈরি করা যায় না —
            <br />
            <span className="text-gradient">কিন্তু জীবন বাঁচানো যায়।</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            আপনার আজকের এক ফোঁটা রক্ত, কারো পুরো জীবন বদলে দিতে পারে।
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 animate-fade-in-up delay-300">
            <Button variant="emergency" size="xl" asChild>
              <Link to="/emergency-request" className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6" />
                জরুরি রক্ত দরকার
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/become-donor" className="flex items-center gap-3">
                <Heart className="w-6 h-6" />
                আজই রক্তদাতা হোন
              </Link>
            </Button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-16 animate-fade-in-up delay-400">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">৫০,০০০+</p>
              <p className="text-sm text-muted-foreground mt-2">রক্তদাতা</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">৬৪</p>
              <p className="text-sm text-muted-foreground mt-2">জেলায় সক্রিয়</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">১০,০০০+</p>
              <p className="text-sm text-muted-foreground mt-2">জীবন বাঁচানো</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
}
