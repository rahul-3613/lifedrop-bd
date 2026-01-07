import { Droplet, Clock, Heart } from "lucide-react";

export function AwarenessSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Main Message */}
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 animate-pulse-glow">
              <Clock className="w-10 h-10 text-primary" />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              প্রতি মিনিটে কেউ না কেউ
              <br />
              <span className="text-gradient">রক্তের জন্য অপেক্ষা করছে।</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              রক্তের কোনো বিকল্প নেই। মানুষই মানুষের একমাত্র ভরসা। আপনার এক ফোঁটা রক্ত হতে পারে কারো জীবনের শেষ আশা।
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <Droplet className="w-10 h-10 text-primary mb-4 mx-auto" />
              <p className="text-4xl font-bold text-primary mb-2">১ ফোঁটা</p>
              <p className="text-muted-foreground">রক্ত ৩টি জীবন বাঁচাতে পারে</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <Clock className="w-10 h-10 text-primary mb-4 mx-auto" />
              <p className="text-4xl font-bold text-primary mb-2">২ সেকেন্ড</p>
              <p className="text-muted-foreground">পর পর কেউ রক্তের প্রয়োজন হয়</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
              <Heart className="w-10 h-10 text-primary mb-4 mx-auto" />
              <p className="text-4xl font-bold text-primary mb-2">১২০ দিন</p>
              <p className="text-muted-foreground">পর আবার রক্তদান করা যায়</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
