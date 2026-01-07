import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Users, Shield, Zap, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "মানবতা",
    description: "প্রতিটি মানুষের জীবন মূল্যবান। আমরা মানবতার সেবায় নিবেদিত।",
  },
  {
    icon: Shield,
    title: "বিশ্বাসযোগ্যতা",
    description: "সকল তথ্য যাচাইকৃত ও নির্ভরযোগ্য। আপনার বিশ্বাস আমাদের দায়িত্ব।",
  },
  {
    icon: Zap,
    title: "দ্রুততা",
    description: "জরুরি মুহূর্তে প্রতিটি সেকেন্ড গুরুত্বপূর্ণ। আমরা দ্রুততম সেবা নিশ্চিত করি।",
  },
  {
    icon: Users,
    title: "সম্প্রদায়",
    description: "একসাথে মিলিত হয়ে আমরা আরও শক্তিশালী। একটি বৃহৎ রক্তদাতা পরিবার।",
  },
];

const milestones = [
  { number: "৫০,০০০+", label: "নিবন্ধিত রক্তদাতা" },
  { number: "১০,০০০+", label: "জীবন বাঁচানো হয়েছে" },
  { number: "৬৪", label: "জেলায় সক্রিয়" },
  { number: "২৪/৭", label: "জরুরি সেবা" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              আমাদের সম্পর্কে
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              আমাদের <span className="text-gradient">লক্ষ্য</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              LifeDrop বাংলাদেশের জন্য একটি বিশ্বাসযোগ্য ডিজিটাল ব্লাড নেটওয়ার্ক তৈরি করতে প্রতিশ্রুতিবদ্ধ। 
              জরুরি মুহূর্তে দ্রুত জীবন বাঁচানো এবং রক্তদাতা ও রক্তপ্রার্থীকে নির্ভরযোগ্যভাবে সংযুক্ত করা আমাদের লক্ষ্য।
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="p-10 rounded-2xl bg-card border border-border">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">আমাদের ভিশন</h2>
              <p className="text-muted-foreground leading-relaxed">
                বাংলাদেশে এমন একটি সমাজ গড়ে তোলা যেখানে কোনো মানুষ রক্তের অভাবে মারা যাবে না। 
                প্রতিটি জরুরি মুহূর্তে সঠিক রক্ত পাওয়া হবে সহজ এবং নিশ্চিত।
              </p>
            </div>
            <div className="p-10 rounded-2xl bg-card border border-border">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">আমাদের মিশন</h2>
              <p className="text-muted-foreground leading-relaxed">
                প্রযুক্তির মাধ্যমে রক্তদাতা ও রক্তপ্রার্থীদের মধ্যে সেতুবন্ধন তৈরি করা। 
                মানুষকে নিয়মিত রক্তদানে উৎসাহিত করা এবং রক্তদান সম্পর্কে সচেতনতা বৃদ্ধি করা।
              </p>
            </div>
          </div>

          {/* Milestones */}
          <div className="py-16 px-8 rounded-2xl bg-gradient-card border border-border mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">আমাদের অর্জন</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{milestone.number}</p>
                  <p className="text-muted-foreground">{milestone.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">আমাদের মূল্যবোধ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center p-12 rounded-2xl bg-primary/5 border border-primary/20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">আমাদের সাথে যুক্ত হোন</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              আপনিও হতে পারেন এই মহান কাজের অংশ। আজই রক্তদাতা হিসেবে নিবন্ধন করুন।
            </p>
            <Button variant="hero" asChild>
              <Link to="/become-donor" className="flex items-center gap-2">
                রক্তদাতা হোন <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
