import { Quote } from "lucide-react";

export function HumanStory() {
  return (
    <section className="py-24 bg-card relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-10">
            <Quote className="w-10 h-10 text-primary" />
          </div>

          {/* Quote */}
          <blockquote className="space-y-8">
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-foreground italic">
              "আমি তাকে চিনি না,
              <br />
              কিন্তু তার রক্ত আমার জীবন বাঁচিয়েছে।"
            </p>
            
            <div className="pt-6">
              <p className="text-lg text-primary font-semibold">— একজন রক্তগ্রহীতার মা</p>
              <p className="text-muted-foreground">ঢাকা মেডিকেল কলেজ হাসপাতাল</p>
            </div>
          </blockquote>

          {/* Divider */}
          <div className="my-16 flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-border" />
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <div className="h-px w-20 bg-border" />
          </div>

          {/* Additional Message */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            প্রতিদিন হাজারো মানুষ এমন অপরিচিত রক্তদাতার কারণেই বেঁচে থাকে। আপনিও হতে পারেন কারো জীবনের সেই নায়ক।
          </p>
        </div>
      </div>
    </section>
  );
}
