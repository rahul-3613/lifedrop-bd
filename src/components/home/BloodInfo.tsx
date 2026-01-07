import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Heart, ShieldCheck, AlertCircle, ArrowRight } from "lucide-react";

const infoCards = [
  {
    icon: Clock,
    question: "কতদিন পর রক্ত দেওয়া যায়?",
    answer: "সুস্থ মানুষ প্রতি ১২০ দিন (৪ মাস) পর পর রক্ত দিতে পারেন। প্লাটিলেট দান করা যায় প্রতি ২ সপ্তাহে।",
  },
  {
    icon: Heart,
    question: "রক্তদানের উপকারিতা কী?",
    answer: "রক্তদানে শরীরে নতুন রক্তকণিকা তৈরি হয়, হৃদরোগের ঝুঁকি কমে, এবং মানসিক প্রশান্তি আসে।",
  },
  {
    icon: ShieldCheck,
    question: "রক্ত দিলে কি ক্ষতি হয়?",
    answer: "না, সুস্থ মানুষের রক্তদানে কোনো ক্ষতি হয় না। শরীর ২৪-৪৮ ঘণ্টায় রক্তের পরিমাণ পুনরায় তৈরি করে।",
  },
  {
    icon: AlertCircle,
    question: "কারা রক্ত দিতে পারেন?",
    answer: "১৮-৬৫ বছর বয়সী, ৪৫ কেজির বেশি ওজনের সুস্থ ব্যক্তি রক্ত দিতে পারেন। কিছু রোগ থাকলে দেওয়া যায় না।",
  },
];

export function BloodInfo() {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              📚 রক্তদান তথ্য
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">রক্তদান সম্পর্কে জানুন</h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/blood-info" className="flex items-center gap-2">
              বিস্তারিত পড়ুন <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <card.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {card.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {card.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
