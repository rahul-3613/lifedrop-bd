import { Shield, Clock, Users, MapPin, Lock, Heart } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "জরুরি-ভিত্তিক ডিজাইন",
    description: "প্রতিটি সেকেন্ড গুরুত্বপূর্ণ। আমাদের সিস্টেম জরুরি মুহূর্তে দ্রুততম সংযোগ নিশ্চিত করে।",
  },
  {
    icon: Shield,
    title: "যাচাইকৃত রক্তদাতা",
    description: "প্রতিটি রক্তদাতা যাচাইকৃত। বিশ্বস্ত ব্যাজ সিস্টেমে আপনি জানবেন কাকে বিশ্বাস করতে পারেন।",
  },
  {
    icon: Lock,
    title: "নিরাপদ যোগাযোগ",
    description: "আপনার ব্যক্তিগত তথ্য সুরক্ষিত। গোপনীয়তা রক্ষা করে যোগাযোগের ব্যবস্থা।",
  },
  {
    icon: MapPin,
    title: "সারাদেশে সেবা",
    description: "৬৪ জেলায় সক্রিয়। আপনার এলাকায় রক্তদাতা খুঁজে পান সহজেই।",
  },
  {
    icon: Users,
    title: "বৃহৎ রক্তদাতা নেটওয়ার্ক",
    description: "৫০,০০০+ নিবন্ধিত রক্তদাতা। প্রতিদিন নতুন মানুষ যোগ দিচ্ছেন।",
  },
  {
    icon: Heart,
    title: "মানবিক সেবা",
    description: "কোনো বিজ্ঞাপন নেই, কোনো বাণিজ্যিক উদ্দেশ্য নেই। শুধুই মানুষের জন্য।",
  },
];

export function WhyLifeDrop() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            কেন LifeDrop
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            আমরা কেন <span className="text-gradient">আলাদা</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            জরুরি মুহূর্তে বিশ্বাসযোগ্য সেবা নিশ্চিত করতে আমরা প্রতিশ্রুতিবদ্ধ।
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-glow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
