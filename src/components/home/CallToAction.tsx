import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-emergency opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            আজ আপনি এগিয়ে না এলে,
            <br />
            <span className="text-gradient">কাল হয়তো কাউকে আর বাঁচানো যাবে না।</span>
          </h2>

          {/* Subtext */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            আপনার একটি সিদ্ধান্ত পুরো একটি পরিবারের জীবন বদলে দিতে পারে। আজই যুক্ত হোন আমাদের সাথে।
          </p>

          {/* CTA Button */}
          <div className="pt-6">
            <Button variant="cta" size="xl" asChild>
              <Link to="/become-donor" className="flex items-center gap-3">
                <Heart className="w-7 h-7" />
                এখনই রক্তদাতা হোন
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 pt-10 text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success" />
              <span>১০০% বিনামূল্যে</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success" />
              <span>গোপনীয়তা সুরক্ষিত</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success" />
              <span>২ মিনিটে রেজিস্ট্রেশন</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
