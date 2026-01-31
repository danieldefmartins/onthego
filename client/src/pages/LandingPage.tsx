import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Check,
  MapPin,
  Users,
  TrendingUp,
  Clock,
  Zap,
  ChevronDown,
  ChevronUp,
  Star,
  Truck,
  Coffee,
  Scissors,
  Wrench,
  Store,
  UtensilsCrossed,
  Bell,
  Calendar,
  BarChart3,
  MessageSquare,
  Crown,
  Sparkles,
} from "lucide-react";

// OnTheGo brand colors
const COLORS = {
  background: '#667eea',
  backgroundAlt: '#764ba2',
  teal: '#48bb78',
  gold: '#f6ad55',
  text: '#FFFFFF',
  textMuted: '#e2e8f0',
  textDim: '#cbd5e0',
  border: '#a78bfa',
};

export default function LandingPage() {
  const [, setLocation] = useLocation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [billingCycle, setBillingCycle] = useState<'yearly' | 'monthly'>('yearly');

  const monthlyPrice = 29.99;
  const yearlyPrice = 99; // $200 off from $299
  const originalYearlyPrice = 299;
  const yearlySavings = originalYearlyPrice - yearlyPrice;

  const features = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Go Live Instantly",
      description: "One tap and you're broadcasting your location to thousands of hungry customers nearby."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Real-Time Map",
      description: "Customers see exactly where you are, right now. No guessing, no missed opportunities."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Schedule Ahead",
      description: "Let customers know where you'll be tomorrow, next week, or next month."
    },
    {
      icon: <UtensilsCrossed className="w-6 h-6" />,
      title: "Digital Menu",
      description: "Showcase your menu with photos and prices. Let customers know what's cooking."
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Customer Notifications",
      description: "Alert your regulars when you go live. Build a loyal following that comes back again and again."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description: "See how many people viewed your profile, got directions, and called you."
    }
  ];

  const businessTypes = [
    { icon: <Truck className="w-8 h-8" />, name: "Food Trucks" },
    { icon: <Coffee className="w-8 h-8" />, name: "Coffee Carts" },
    { icon: <Scissors className="w-8 h-8" />, name: "Mobile Groomers" },
    { icon: <Wrench className="w-8 h-8" />, name: "Mobile Mechanics" },
    { icon: <Store className="w-8 h-8" />, name: "Pop-up Shops" },
    { icon: <UtensilsCrossed className="w-8 h-8" />, name: "Catering" },
  ];

  const testimonials = [
    {
      quote: "Before TavvY, I'd post on Instagram and hope for the best. Now I go live and within 20 minutes there's a line at my truck. Game changer.",
      author: "Maria Rodriguez",
      business: "Taco Loco Food Truck",
      location: "Austin, TX",
      initials: "MR"
    },
    {
      quote: "The scheduling feature is incredible. My regulars know exactly where I'll be all week. I've doubled my repeat customers.",
      author: "James Kim",
      business: "Seoul Good Korean BBQ",
      location: "Los Angeles, CA",
      initials: "JK"
    },
    {
      quote: "$29.99 a month? I was spending that much on Instagram ads every week with worse results. This is a no-brainer.",
      author: "Sarah Johnson",
      business: "Sweet Wheels Ice Cream",
      location: "Miami, FL",
      initials: "SJ"
    }
  ];

  const faqs = [
    {
      question: "What types of businesses can use TavvY On The Go?",
      answer: "Any mobile business! Food trucks, coffee carts, mobile groomers, mobile mechanics, pop-up shops, catering services, and more. If you move around and need customers to find you, TavvY is for you."
    },
    {
      question: "How do customers find me?",
      answer: "When you 'Go Live', your business appears on the TavvY map with your exact location. Customers searching for food trucks or mobile services nearby will see you instantly. You can also share your TavvY profile link on social media."
    },
    {
      question: "Is there a contract or commitment?",
      answer: "Nope! You can cancel anytime. We believe in earning your business every month by delivering value, not locking you into contracts."
    },
    {
      question: "What's included in the pricing?",
      answer: "Everything! Unlimited Go Live broadcasts, real-time map visibility, scheduling, digital menu, customer notifications, analytics dashboard, messaging, and priority support. No hidden fees or per-lead charges."
    },
    {
      question: "Do I need any special equipment?",
      answer: "Just a smartphone! TavvY works on iPhone and Android. Download the app, create your profile, and you're ready to go live."
    },
    {
      question: "Can I try it before I buy?",
      answer: "Yes! Start with a 30-day money-back guarantee. If you don't love it, we'll refund every penny. No questions asked."
    }
  ];

  const handleGetStarted = () => {
    setLocation("/signup");
  };

  return (
    <div className="min-h-screen" style={{ background: `linear-gradient(135deg, ${COLORS.background} 0%, ${COLORS.backgroundAlt} 100%)` }}>
      {/* Founding Member Banner */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-amber-700 p-2 rounded-full">
                <Crown className="w-6 h-6 text-amber-200" />
              </div>
              <div>
                <div className="text-amber-950 font-bold text-lg">FOUNDING MEMBER PRICING</div>
                <div className="text-amber-900 text-sm">Only <span className="font-bold text-amber-950">768</span> of 1,000 spots left</div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-cyan-100 font-bold text-2xl">${yearlyPrice} for your first year</div>
              <div className="text-amber-900 text-sm">Then ${originalYearlyPrice}/year. Cancel anytime.</div>
            </div>
            <Button 
              onClick={handleGetStarted}
              className="bg-amber-900 hover:bg-amber-950 text-amber-100 px-6 py-2 whitespace-nowrap"
            >
              <Crown className="w-4 h-4 mr-2" />
              Founding Member Pricing
            </Button>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
            <p className="text-white text-sm font-medium flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              For Food Trucks, Mobile Services & Pop-ups
            </p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Get Found.<br />
            Get Customers.<br />
            <span style={{ color: COLORS.teal }}>Grow Your Business.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Go live and instantly appear on the map for thousands of hungry customers nearby.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              onClick={handleGetStarted}
              size="lg"
              className="text-lg px-8 py-6"
              style={{ background: COLORS.teal, color: 'white' }}
            >
              Start Free Trial — ${monthlyPrice}/month
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
            >
              See How It Works
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" style={{ color: COLORS.teal }} />
              30-day money-back guarantee
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" style={{ color: COLORS.teal }} />
              No credit card required to start
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" style={{ color: COLORS.teal }} />
              Cancel anytime
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">10K+</div>
            <div className="text-white/70">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">500+</div>
            <div className="text-white/70">Mobile Businesses</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">50K+</div>
            <div className="text-white/70">Leads Generated</div>
          </div>
        </div>
      </div>

      {/* 65M Places Banner */}
      <div className="py-12 px-4" style={{ background: `linear-gradient(90deg, ${COLORS.teal}, #667eea)` }}>
        <div className="container mx-auto max-w-4xl text-center">
          <div className="text-6xl md:text-7xl font-black text-white mb-4" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
            65 Million+
          </div>
          <div className="text-2xl md:text-3xl font-semibold text-white mb-6">
            Places Worldwide Already in Our Database
          </div>
          <div className="text-xl md:text-2xl font-bold uppercase tracking-wider" style={{ color: COLORS.gold }}>
            Don't Get Left Out. Join Now.
          </div>
        </div>
      </div>

      {/* Business Types */}
      <div className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Perfect for all mobile businesses
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {businessTypes.map((type, index) => (
              <div key={index} className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all">
                <div style={{ color: COLORS.teal }}>{type.icon}</div>
                <span className="text-white text-sm font-medium text-center">{type.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold mb-2" style={{ color: COLORS.gold }}>The Problem</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Running a Mobile Business is Hard
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              You're amazing at what you do. But getting customers to find you? That's a whole different challenge.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Invisible to Customers</h3>
                <p className="text-white/70">
                  People don't know where you are. They can't find you even when they're craving exactly what you offer.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Wasted Time on Social</h3>
                <p className="text-white/70">
                  Hours spent posting on Instagram and Facebook, hoping someone sees it. But the algorithm doesn't care about your tacos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-red-500/20 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Expensive Marketing</h3>
                <p className="text-white/70">
                  Google Ads, Yelp, DoorDash fees... they all eat into your profits. You need customers, not more expenses.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="py-20" style={{ background: `linear-gradient(135deg, ${COLORS.background} 0%, ${COLORS.backgroundAlt} 100%)` }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold mb-2" style={{ color: COLORS.teal }}>The Solution</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              One Tap. Instant Visibility.
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              TavvY On The Go puts your business on the map — literally. When you go live, customers find you instantly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: COLORS.teal }}>
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold mb-2" style={{ color: COLORS.background }}>How It Works</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Get Started in 3 Minutes
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              No complicated setup. No technical skills needed. Just sign up and start getting customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-white" style={{ background: COLORS.background }}>
                1
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Create Your Profile</h3>
              <p className="text-slate-600">
                Add your business name, photos, menu, and contact info. Make a great first impression on potential customers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-white" style={{ background: COLORS.background }}>
                2
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Go Live When You're Open</h3>
              <p className="text-slate-600">
                Tap 'Go Live' and your location is instantly broadcast to thousands of users looking for exactly what you offer.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-white" style={{ background: COLORS.background }}>
                3
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Watch Customers Roll In</h3>
              <p className="text-slate-600">
                Customers see you on the map, check your menu, and head your way. Get directions, calls, and orders — all from one platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="py-20" style={{ background: `linear-gradient(135deg, ${COLORS.background} 0%, ${COLORS.backgroundAlt} 100%)` }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold mb-2" style={{ color: COLORS.teal }}>Simple Pricing</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              One Price. Everything Included.
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              No hidden fees. No per-lead charges. No commission on sales. Just one flat fee.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-white/60'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative w-16 h-8 rounded-full transition-colors"
                style={{ background: billingCycle === 'yearly' ? COLORS.teal : 'rgba(255,255,255,0.3)' }}
              >
                <div
                  className="absolute top-1 w-6 h-6 bg-white rounded-full transition-transform"
                  style={{ transform: billingCycle === 'yearly' ? 'translateX(34px)' : 'translateX(4px)' }}
                />
              </button>
              <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-white' : 'text-white/60'}`}>
                Annual
                {billingCycle === 'yearly' && (
                  <span className="ml-2 text-sm px-2 py-1 rounded-full" style={{ background: COLORS.teal }}>
                    Save ${yearlySavings.toFixed(0)}
                  </span>
                )}
              </span>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-white border-4" style={{ borderColor: COLORS.teal }}>
              <CardContent className="p-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900">OnTheGo</h3>
                    <p className="text-slate-600">Everything you need to grow</p>
                  </div>
                  <div className="px-4 py-2 rounded-full text-sm font-bold text-white" style={{ background: COLORS.teal }}>
                    <Sparkles className="w-4 h-4 inline mr-1" />
                    BEST VALUE
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-bold text-slate-900">
                      ${billingCycle === 'monthly' ? monthlyPrice : yearlyPrice}
                    </span>
                    <span className="text-2xl text-slate-600">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  {billingCycle === 'monthly' && (
                    <p className="text-sm text-slate-600 mt-2">
                      Special offer: $10 off per month for your first year (then $39.99/month)
                    </p>
                  )}
                  {billingCycle === 'yearly' && (
                    <p className="text-sm mt-2" style={{ color: COLORS.teal }}>
                      🎉 Special Launch Price: ${yearlySavings} off (normally ${originalYearlyPrice}/year)
                    </p>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "Unlimited Go Live broadcasts",
                    "Real-time map visibility",
                    "Schedule future locations",
                    "Digital menu & specials",
                    "Analytics dashboard",
                    "Customer messaging",
                    "Priority support",
                    "30-day money-back guarantee"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 flex-shrink-0" style={{ color: COLORS.teal }} />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  onClick={handleGetStarted}
                  size="lg"
                  className="w-full text-lg py-6"
                  style={{ background: COLORS.background, color: 'white' }}
                >
                  Start Your Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold mb-2" style={{ color: COLORS.background }}>Success Stories</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Loved by Mobile Businesses
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See what food trucks and mobile vendors are saying about TavvY On The Go.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-50 border-slate-200">
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ background: COLORS.background }}>
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">{testimonial.author}</div>
                      <div className="text-sm text-slate-600">{testimonial.business}</div>
                      <div className="text-sm text-slate-500">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-20" style={{ background: `linear-gradient(135deg, ${COLORS.background} 0%, ${COLORS.backgroundAlt} 100%)` }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold mb-2" style={{ color: COLORS.teal }}>FAQ</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Questions? We've Got Answers.
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                  >
                    <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-white flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-white flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-white/80">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get More Customers?
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Join 500+ mobile businesses already growing with TavvY On The Go.
          </p>
          <Button 
            onClick={handleGetStarted}
            size="lg"
            className="text-lg px-12 py-6"
            style={{ background: COLORS.teal, color: 'white' }}
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <p className="text-white/60 mt-6">
            30-day money-back guarantee. Cancel anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
