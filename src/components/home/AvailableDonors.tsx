import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Shield, Star, CheckCircle, ArrowRight } from "lucide-react";

const donors = [
  {
    id: 1,
    name: "মো. রাশিদুল ইসলাম",
    bloodGroup: "A+",
    location: "মিরপুর, ঢাকা",
    lastDonation: "৪ মাস আগে",
    totalDonations: 12,
    badge: "trusted",
    available: true,
  },
  {
    id: 2,
    name: "ফাতেমা আক্তার",
    bloodGroup: "O-",
    location: "বনানী, ঢাকা",
    lastDonation: "৬ মাস আগে",
    totalDonations: 8,
    badge: "verified",
    available: true,
  },
  {
    id: 3,
    name: "আব্দুল করিম",
    bloodGroup: "B+",
    location: "উত্তরা, ঢাকা",
    lastDonation: "৫ মাস আগে",
    totalDonations: 5,
    badge: "new",
    available: true,
  },
  {
    id: 4,
    name: "সাবরিনা হক",
    bloodGroup: "AB+",
    location: "গুলশান, ঢাকা",
    lastDonation: "৪ মাস আগে",
    totalDonations: 15,
    badge: "trusted",
    available: true,
  },
];

const getBadgeInfo = (badge: string) => {
  switch (badge) {
    case "trusted":
      return { label: "বিশ্বস্ত", color: "bg-success text-success-foreground", icon: Star };
    case "verified":
      return { label: "যাচাইকৃত", color: "bg-warning text-warning-foreground", icon: CheckCircle };
    case "new":
      return { label: "নতুন", color: "bg-primary text-primary-foreground", icon: Shield };
    default:
      return { label: "সাধারণ", color: "bg-muted text-muted-foreground", icon: Shield };
  }
};

export function AvailableDonors() {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              এই মুহূর্তে পাওয়া যাবে
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">সক্রিয় রক্তদাতা</h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/find-blood" className="flex items-center gap-2">
              সব রক্তদাতা দেখুন <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Donor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {donors.map((donor, index) => {
            const badgeInfo = getBadgeInfo(donor.badge);
            const BadgeIcon = badgeInfo.icon;

            return (
              <div
                key={donor.id}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Header with Blood Group & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{donor.bloodGroup}</span>
                  </div>
                  <span className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${badgeInfo.color}`}>
                    <BadgeIcon className="w-3 h-3" />
                    {badgeInfo.label}
                  </span>
                </div>

                {/* Donor Info */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {donor.name}
                  </h3>
                  
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

                {/* Action Button */}
                <Button variant="outline" size="sm" className="w-full mt-6">
                  <Phone className="w-4 h-4 mr-2" />
                  কল অনুরোধ পাঠান
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
