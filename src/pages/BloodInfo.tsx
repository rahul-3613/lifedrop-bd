import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Clock, Heart, ShieldCheck, AlertCircle, Users, Droplet, CheckCircle, XCircle } from "lucide-react";

const faqs = [
  {
    icon: Clock,
    question: "কতদিন পর পর রক্ত দেওয়া যায়?",
    answer: "পুরুষরা প্রতি ১২০ দিন (৪ মাস) এবং মহিলারা প্রতি ১৮০ দিন (৬ মাস) পর পর রক্ত দিতে পারেন। প্লাটিলেট দান প্রতি ২ সপ্তাহে এবং প্লাজমা দান প্রতি মাসে করা যায়।",
  },
  {
    icon: Heart,
    question: "রক্তদানের উপকারিতা কী কী?",
    answer: "রক্তদানে নতুন রক্তকণিকা তৈরি হয়, যা শরীরকে সতেজ রাখে। হৃদরোগ ও স্ট্রোকের ঝুঁকি কমে। অতিরিক্ত আয়রন নিয়ন্ত্রিত থাকে। বিনামূল্যে স্বাস্থ্য পরীক্ষা হয়। মানসিক প্রশান্তি আসে।",
  },
  {
    icon: ShieldCheck,
    question: "রক্ত দিলে শরীরে কোনো ক্ষতি হয়?",
    answer: "না, সুস্থ মানুষের রক্তদানে কোনো ক্ষতি হয় না। শরীর ২৪-৪৮ ঘণ্টায় রক্তের পরিমাণ পুনরায় তৈরি করে ফেলে। লোহিত রক্তকণিকা ৪-৬ সপ্তাহে পুরোপুরি পূরণ হয়।",
  },
  {
    icon: Droplet,
    question: "এক ব্যাগ রক্ত কত জীবন বাঁচায়?",
    answer: "এক ব্যাগ রক্ত থেকে লোহিত রক্তকণিকা, প্লাটিলেট ও প্লাজমা আলাদা করা হয়, যা ৩টি পর্যন্ত জীবন বাঁচাতে পারে। থ্যালাসেমিয়া, ক্যান্সার, দুর্ঘটনায় আহত রোগীদের এই রক্ত কাজে লাগে।",
  },
  {
    icon: AlertCircle,
    question: "রক্তদানের আগে কী প্রস্তুতি নিতে হবে?",
    answer: "রক্তদানের আগে ভালো করে খাওয়া-দাওয়া করুন, প্রচুর পানি পান করুন। পর্যাপ্ত ঘুম নিন। রক্তদানের ২৪ ঘণ্টা আগে মদ্যপান বা ধূমপান করবেন না।",
  },
  {
    icon: Users,
    question: "রক্তদানের পর কী সতর্কতা অবলম্বন করতে হবে?",
    answer: "১৫-২০ মিনিট বিশ্রাম নিন, পানি ও জুস পান করুন। ভারী কাজ বা ব্যায়াম এড়িয়ে চলুন। পরের ২৪ ঘণ্টা ধূমপান ও মদ্যপান করবেন না।",
  },
];

const canDonate = [
  "১৮-৬৫ বছর বয়সী",
  "ওজন ৪৫ কেজির বেশি",
  "হিমোগ্লোবিন স্বাভাবিক",
  "রক্তচাপ স্বাভাবিক",
  "সুস্থ ও রোগমুক্ত",
  "গত ৪ মাসে রক্ত দেননি (পুরুষ)",
];

const cannotDonate = [
  "গর্ভবতী বা স্তন্যদানকারী মা",
  "HIV, হেপাটাইটিস বা ম্যালেরিয়া আক্রান্ত",
  "গত ৬ মাসে অস্ত্রোপচার হয়েছে",
  "মাদকাসক্ত",
  "কিছু দীর্ঘমেয়াদি রোগ আছে",
  "গত ৭ দিনে অ্যান্টিবায়োটিক খেয়েছেন",
];

const bloodCompatibility = [
  { group: "O-", canGiveTo: "সবাই", canReceiveFrom: "O-" },
  { group: "O+", canGiveTo: "O+, A+, B+, AB+", canReceiveFrom: "O+, O-" },
  { group: "A-", canGiveTo: "A-, A+, AB-, AB+", canReceiveFrom: "A-, O-" },
  { group: "A+", canGiveTo: "A+, AB+", canReceiveFrom: "A+, A-, O+, O-" },
  { group: "B-", canGiveTo: "B-, B+, AB-, AB+", canReceiveFrom: "B-, O-" },
  { group: "B+", canGiveTo: "B+, AB+", canReceiveFrom: "B+, B-, O+, O-" },
  { group: "AB-", canGiveTo: "AB-, AB+", canReceiveFrom: "AB-, A-, B-, O-" },
  { group: "AB+", canGiveTo: "AB+", canReceiveFrom: "সবাই" },
];

export default function BloodInfo() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">রক্তদান তথ্য</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              রক্তদান সম্পর্কে সঠিক তথ্য জানুন এবং একজন সচেতন রক্তদাতা হোন।
            </p>
          </div>

          {/* FAQs */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">সচরাচর জিজ্ঞাসা</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <faq.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Eligibility */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">কারা রক্ত দিতে পারেন?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-success/5 border border-success/20">
                <h3 className="text-xl font-semibold text-success mb-6 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6" />
                  রক্ত দিতে পারেন
                </h3>
                <ul className="space-y-4">
                  {canDonate.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-success" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 rounded-2xl bg-destructive/5 border border-destructive/20">
                <h3 className="text-xl font-semibold text-destructive mb-6 flex items-center gap-3">
                  <XCircle className="w-6 h-6" />
                  রক্ত দিতে পারবেন না
                </h3>
                <ul className="space-y-4">
                  {cannotDonate.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-destructive" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Blood Compatibility */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">রক্তের গ্রুপ সামঞ্জস্যতা</h2>
            <div className="overflow-x-auto">
              <table className="w-full max-w-4xl mx-auto">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-4 px-6 text-left font-semibold">রক্তের গ্রুপ</th>
                    <th className="py-4 px-6 text-left font-semibold">যাদের দিতে পারে</th>
                    <th className="py-4 px-6 text-left font-semibold">যাদের থেকে নিতে পারে</th>
                  </tr>
                </thead>
                <tbody>
                  {bloodCompatibility.map((row, index) => (
                    <tr key={index} className="border-b border-border hover:bg-card transition-colors">
                      <td className="py-4 px-6">
                        <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary font-bold">
                          {row.group}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-muted-foreground">{row.canGiveTo}</td>
                      <td className="py-4 px-6 text-muted-foreground">{row.canReceiveFrom}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
