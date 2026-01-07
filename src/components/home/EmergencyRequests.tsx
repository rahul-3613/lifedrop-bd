import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, AlertCircle, ArrowRight } from "lucide-react";

const emergencyRequests = [
  {
    id: 1,
    bloodGroup: "A+",
    location: "ঢাকা মেডিকেল",
    district: "ঢাকা",
    timeAgo: "৫ মিনিট আগে",
    urgency: "অত্যন্ত জরুরি",
    bags: 2,
  },
  {
    id: 2,
    bloodGroup: "O-",
    location: "চট্টগ্রাম মেডিকেল",
    district: "চট্টগ্রাম",
    timeAgo: "১২ মিনিট আগে",
    urgency: "জরুরি",
    bags: 1,
  },
  {
    id: 3,
    bloodGroup: "B+",
    location: "রাজশাহী মেডিকেল",
    district: "রাজশাহী",
    timeAgo: "২০ মিনিট আগে",
    urgency: "জরুরি",
    bags: 3,
  },
  {
    id: 4,
    bloodGroup: "AB-",
    location: "সিলেট ওসমানী মেডিকেল",
    district: "সিলেট",
    timeAgo: "৩০ মিনিট আগে",
    urgency: "জরুরি",
    bags: 2,
  },
];

export function EmergencyRequests() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emergency/10 text-emergency text-sm font-medium mb-4">
              <AlertCircle className="w-4 h-4 animate-pulse" />
              লাইভ জরুরি অনুরোধ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">এই মুহূর্তে রক্ত দরকার</h2>
          </div>
          <Button variant="outline" asChild>
            <Link to="/find-blood" className="flex items-center gap-2">
              সব দেখুন <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Emergency Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {emergencyRequests.map((request, index) => (
            <div
              key={request.id}
              className="relative p-6 rounded-2xl bg-background border-2 border-primary animate-blink-border hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Blood Group Badge */}
              <div className="absolute -top-4 left-6">
                <div className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-bold text-xl shadow-glow">
                  {request.bloodGroup}
                </div>
              </div>

              <div className="pt-6 space-y-4">
                {/* Urgency Tag */}
                <span className="inline-block px-3 py-1 rounded-full bg-emergency/20 text-emergency text-xs font-medium">
                  🔴 {request.urgency}
                </span>

                {/* Location */}
                <div className="space-y-2">
                  <p className="font-semibold text-foreground">{request.location}</p>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{request.district}</span>
                  </div>
                </div>

                {/* Bags Needed */}
                <p className="text-sm text-muted-foreground">
                  প্রয়োজন: <span className="text-foreground font-medium">{request.bags} ব্যাগ</span>
                </p>

                {/* Time */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{request.timeAgo}</span>
                </div>

                {/* Action Button */}
                <Button variant="emergency" size="sm" className="w-full mt-4">
                  সাহায্য করুন
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
