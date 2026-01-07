import { Link } from "react-router-dom";
import { Droplet, Phone, Mail, MapPin, Facebook, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <Droplet className="w-10 h-10 text-primary fill-primary" />
              <div>
                <span className="text-2xl font-bold text-foreground">LifeDrop</span>
                <p className="text-xs text-muted-foreground">এক ফোঁটা রক্ত, একটি জীবন</p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              বাংলাদেশের সবচেয়ে বিশ্বস্ত রক্তদান প্ল্যাটফর্ম। জরুরি মুহূর্তে আমরা আছি আপনার পাশে।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">দ্রুত লিংক</h4>
            <div className="space-y-3">
              <Link to="/find-blood" className="block text-muted-foreground hover:text-primary transition-colors">
                রক্ত খুঁজুন
              </Link>
              <Link to="/become-donor" className="block text-muted-foreground hover:text-primary transition-colors">
                রক্তদাতা হোন
              </Link>
              <Link to="/emergency-request" className="block text-muted-foreground hover:text-primary transition-colors">
                জরুরি অনুরোধ
              </Link>
              <Link to="/blood-info" className="block text-muted-foreground hover:text-primary transition-colors">
                রক্তদান তথ্য
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">যোগাযোগ</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+880 1XXX-XXXXXX</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@lifedrop.bd</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>ঢাকা, বাংলাদেশ</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">সামাজিক মাধ্যম</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              আমাদের সাথে যুক্ত থাকুন এবং জীবন বাঁচাতে সাহায্য করুন।
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © ২০২৪ LifeDrop। সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            তৈরি করা হয়েছে <Heart className="w-4 h-4 text-primary fill-primary" /> দিয়ে বাংলাদেশে
          </p>
        </div>
      </div>
    </footer>
  );
}
