import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, User, Phone, MapPin, Droplet, Calendar, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const districts = ["ঢাকা", "চট্টগ্রাম", "রাজশাহী", "খুলনা", "সিলেট", "বরিশাল", "রংপুর", "ময়মনসিংহ"];

export default function BecomeDonor() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    bloodGroup: "",
    dateOfBirth: "",
    gender: "",
    district: "",
    address: "",
    contactNumber: "",
    email: "",
    lastDonation: "",
    weight: "",
    hasDisease: false,
    agreesToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreesToTerms) {
      toast({
        title: "শর্তাবলী মেনে নিন",
        description: "অনুগ্রহ করে শর্তাবলী মেনে নিন।",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "সফলভাবে নিবন্ধন হয়েছে!",
      description: "আপনি এখন একজন গর্বিত রক্তদাতা। ধন্যবাদ!",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 animate-pulse-glow">
              <Heart className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">রক্তদাতা হোন</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              আপনার একটি সিদ্ধান্ত কারো জীবন বাঁচাতে পারে। আজই নিবন্ধন করুন এবং মানবতার সেবায় যুক্ত হোন।
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-card border border-border text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">জীবন বাঁচান</h3>
              <p className="text-sm text-muted-foreground">আপনার এক ফোঁটা রক্ত ৩টি জীবন বাঁচাতে পারে</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">সুস্থ থাকুন</h3>
              <p className="text-sm text-muted-foreground">নিয়মিত রক্তদান শরীরকে সুস্থ রাখে</p>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <User className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">নায়ক হোন</h3>
              <p className="text-sm text-muted-foreground">কারো জীবনের নায়ক হওয়ার সুযোগ</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <User className="w-5 h-5 text-primary" />
                ব্যক্তিগত তথ্য
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">পুরো নাম *</label>
                  <Input
                    placeholder="আপনার পুরো নাম"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">জন্ম তারিখ *</label>
                  <Input
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">লিঙ্গ *</label>
                  <Select value={formData.gender} onValueChange={(value) => setFormData({ ...formData, gender: value })}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="লিঙ্গ নির্বাচন করুন" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">পুরুষ</SelectItem>
                      <SelectItem value="female">মহিলা</SelectItem>
                      <SelectItem value="other">অন্যান্য</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">ওজন (কেজি) *</label>
                  <Input
                    type="number"
                    placeholder="যেমন: ৫৫"
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <Droplet className="w-5 h-5 text-primary" />
                রক্তদান তথ্য
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">রক্তের গ্রুপ *</label>
                  <Select value={formData.bloodGroup} onValueChange={(value) => setFormData({ ...formData, bloodGroup: value })}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="রক্তের গ্রুপ নির্বাচন করুন" />
                    </SelectTrigger>
                    <SelectContent>
                      {bloodGroups.map((group) => (
                        <SelectItem key={group} value={group}>{group}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">সর্বশেষ রক্তদানের তারিখ</label>
                  <Input
                    type="date"
                    value={formData.lastDonation}
                    onChange={(e) => setFormData({ ...formData, lastDonation: e.target.value })}
                    className="bg-background"
                  />
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                ঠিকানা ও যোগাযোগ
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">জেলা *</label>
                  <Select value={formData.district} onValueChange={(value) => setFormData({ ...formData, district: value })}>
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="জেলা নির্বাচন করুন" />
                    </SelectTrigger>
                    <SelectContent>
                      {districts.map((district) => (
                        <SelectItem key={district} value={district}>{district}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">বিস্তারিত ঠিকানা</label>
                  <Input
                    placeholder="আপনার ঠিকানা"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">মোবাইল নম্বর *</label>
                  <Input
                    type="tel"
                    placeholder="০১XXXXXXXXX"
                    value={formData.contactNumber}
                    onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">ইমেইল</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background"
                  />
                </div>
              </div>
            </div>

            {/* Terms */}
            <div className="p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="terms"
                  checked={formData.agreesToTerms}
                  onCheckedChange={(checked) => setFormData({ ...formData, agreesToTerms: checked as boolean })}
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                  আমি নিশ্চিত করছি যে উপরের সকল তথ্য সঠিক এবং আমি স্বেচ্ছায় রক্তদান করতে সম্মত। আমি LifeDrop-এর নীতিমালা মেনে চলতে রাজি।
                </label>
              </div>
            </div>

            <Button variant="hero" size="xl" className="w-full">
              <Heart className="w-6 h-6 mr-2" />
              রক্তদাতা হিসেবে নিবন্ধন করুন
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
