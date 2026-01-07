import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle, Phone, MapPin, User, Droplet, Building, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const districts = ["ঢাকা", "চট্টগ্রাম", "রাজশাহী", "খুলনা", "সিলেট", "বরিশাল", "রংপুর", "ময়মনসিংহ"];

export default function EmergencyRequest() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    patientName: "",
    bloodGroup: "",
    bagsNeeded: "",
    hospital: "",
    district: "",
    contactNumber: "",
    alternateNumber: "",
    reason: "",
    additionalInfo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "অনুরোধ সফলভাবে পাঠানো হয়েছে!",
      description: "আমরা শীঘ্রই রক্তদাতাদের সাথে যোগাযোগ করব।",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emergency/10 border border-emergency/30 mb-6">
              <AlertCircle className="w-5 h-5 text-emergency animate-pulse" />
              <span className="text-emergency font-medium">জরুরি রক্তের অনুরোধ</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">জরুরি রক্ত দরকার?</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              নিচের ফর্মটি পূরণ করুন। আমরা দ্রুততম সময়ে রক্তদাতাদের সাথে আপনাকে সংযুক্ত করব।
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <User className="w-5 h-5 text-primary" />
                রোগীর তথ্য
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">রোগীর নাম *</label>
                  <Input
                    placeholder="রোগীর পুরো নাম"
                    value={formData.patientName}
                    onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
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
                  <label className="text-sm font-medium">কত ব্যাগ প্রয়োজন *</label>
                  <Input
                    type="number"
                    placeholder="যেমন: ২"
                    value={formData.bagsNeeded}
                    onChange={(e) => setFormData({ ...formData, bagsNeeded: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">রক্তের প্রয়োজনের কারণ</label>
                  <Input
                    placeholder="যেমন: অপারেশন, দুর্ঘটনা"
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="bg-background"
                  />
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <Building className="w-5 h-5 text-primary" />
                হাসপাতালের তথ্য
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">হাসপাতালের নাম *</label>
                  <Input
                    placeholder="হাসপাতালের পুরো নাম"
                    value={formData.hospital}
                    onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
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
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                যোগাযোগের তথ্য
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <label className="text-sm font-medium">বিকল্প নম্বর</label>
                  <Input
                    type="tel"
                    placeholder="০১XXXXXXXXX"
                    value={formData.alternateNumber}
                    onChange={(e) => setFormData({ ...formData, alternateNumber: e.target.value })}
                    className="bg-background"
                  />
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <FileText className="w-5 h-5 text-primary" />
                অতিরিক্ত তথ্য
              </h2>
              <Textarea
                placeholder="কোনো অতিরিক্ত তথ্য থাকলে লিখুন..."
                value={formData.additionalInfo}
                onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                className="bg-background min-h-[120px]"
              />
            </div>

            <Button variant="emergency" size="xl" className="w-full">
              <AlertCircle className="w-6 h-6 mr-2" />
              জরুরি অনুরোধ পাঠান
            </Button>
          </form>

          {/* Info */}
          <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center">
            <p className="text-muted-foreground">
              জরুরি হেল্পলাইন: <span className="text-primary font-semibold">+880 1XXX-XXXXXX</span>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
