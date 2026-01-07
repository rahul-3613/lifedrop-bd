import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Search, Filter, Star, CheckCircle, Shield } from "lucide-react";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const districts = ["ঢাকা", "চট্টগ্রাম", "রাজশাহী", "খুলনা", "সিলেট", "বরিশাল", "রংপুর", "ময়মনসিংহ"];

const allDonors = [
  { id: 1, name: "মো. রাশিদুল ইসলাম", bloodGroup: "A+", location: "মিরপুর, ঢাকা", lastDonation: "৪ মাস আগে", totalDonations: 12, badge: "trusted", available: true },
  { id: 2, name: "ফাতেমা আক্তার", bloodGroup: "O-", location: "বনানী, ঢাকা", lastDonation: "৬ মাস আগে", totalDonations: 8, badge: "verified", available: true },
  { id: 3, name: "আব্দুল করিম", bloodGroup: "B+", location: "উত্তরা, ঢাকা", lastDonation: "৫ মাস আগে", totalDonations: 5, badge: "new", available: true },
  { id: 4, name: "সাবরিনা হক", bloodGroup: "AB+", location: "গুলশান, ঢাকা", lastDonation: "৪ মাস আগে", totalDonations: 15, badge: "trusted", available: true },
  { id: 5, name: "মাহমুদুল হাসান", bloodGroup: "O+", location: "ধানমন্ডি, ঢাকা", lastDonation: "৩ মাস আগে", totalDonations: 20, badge: "trusted", available: true },
  { id: 6, name: "নুসরাত জাহান", bloodGroup: "A-", location: "মোহাম্মদপুর, ঢাকা", lastDonation: "৫ মাস আগে", totalDonations: 6, badge: "verified", available: true },
  { id: 7, name: "তানভীর আহমেদ", bloodGroup: "B-", location: "বাড্ডা, ঢাকা", lastDonation: "৪ মাস আগে", totalDonations: 9, badge: "verified", available: true },
  { id: 8, name: "রাবেয়া খাতুন", bloodGroup: "AB-", location: "তেজগাঁও, ঢাকা", lastDonation: "৬ মাস আগে", totalDonations: 4, badge: "new", available: true },
];

const getBadgeInfo = (badge: string) => {
  switch (badge) {
    case "trusted":
      return { label: "বিশ্বস্ত", color: "bg-success/10 text-success", icon: Star };
    case "verified":
      return { label: "যাচাইকৃত", color: "bg-warning/10 text-warning", icon: CheckCircle };
    case "new":
      return { label: "নতুন", color: "bg-primary/10 text-primary", icon: Shield };
    default:
      return { label: "সাধারণ", color: "bg-muted text-muted-foreground", icon: Shield };
  }
};

export default function FindBlood() {
  const [selectedBloodGroup, setSelectedBloodGroup] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDonors = allDonors.filter((donor) => {
    const matchesBloodGroup = !selectedBloodGroup || donor.bloodGroup === selectedBloodGroup;
    const matchesDistrict = !selectedDistrict || donor.location.includes(selectedDistrict);
    const matchesSearch = !searchQuery || donor.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBloodGroup && matchesDistrict && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">রক্ত খুঁজুন</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              আপনার প্রয়োজনীয় রক্তের গ্রুপ ও এলাকা নির্বাচন করুন। আমরা আপনাকে সঠিক রক্তদাতার সাথে সংযুক্ত করব।
            </p>
          </div>

          {/* Search & Filters */}
          <div className="max-w-4xl mx-auto mb-12 p-6 rounded-2xl bg-card border border-border">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="নাম খুঁজুন..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-background"
                />
              </div>
              
              <Select value={selectedBloodGroup} onValueChange={setSelectedBloodGroup}>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="রক্তের গ্রুপ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">সব গ্রুপ</SelectItem>
                  {bloodGroups.map((group) => (
                    <SelectItem key={group} value={group}>{group}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="জেলা" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">সব জেলা</SelectItem>
                  {districts.map((district) => (
                    <SelectItem key={district} value={district}>{district}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button variant="default" className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                ফিল্টার করুন
              </Button>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDonors.map((donor) => {
              const badgeInfo = getBadgeInfo(donor.badge);
              const BadgeIcon = badgeInfo.icon;

              return (
                <div
                  key={donor.id}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{donor.bloodGroup}</span>
                    </div>
                    <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${badgeInfo.color}`}>
                      <BadgeIcon className="w-3 h-3" />
                      {badgeInfo.label}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-semibold text-lg text-foreground">{donor.name}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{donor.location}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">সর্বশেষ দান:</span>
                      <span className="text-foreground">{donor.lastDonation}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">মোট দান:</span>
                      <span className="text-primary font-medium">{donor.totalDonations} বার</span>
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="w-full mt-6">
                    <Phone className="w-4 h-4 mr-2" />
                    কল অনুরোধ পাঠান
                  </Button>
                </div>
              );
            })}
          </div>

          {filteredDonors.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">কোনো রক্তদাতা পাওয়া যায়নি। অনুগ্রহ করে অন্য ফিল্টার ব্যবহার করুন।</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
