import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Link } from 'react-router-dom';

// Custom Components
import NavigationMenu from '@/components/layout/NavigationMenu';
import HeroSection from '@/components/HeroSection';
import FeatureHighlightCard from '@/components/FeatureHighlightCard';
import TestimonialCard from '@/components/TestimonialCard';
import PricingTierCard from '@/components/PricingTierCard';
import Footer from '@/components/layout/Footer';

// Shadcn UI Components
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useToast } from "@/components/ui/use-toast"; // For form submission confirmation

// Lucide Icons for Features
import { Zap, BarChart3, Users, ShieldCheck, LifeBuoy, MessageSquare } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const LandingPage = () => {
  console.log('LandingPage loaded');
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
  });

  const onSubmitContactForm = (data: ContactFormValues) => {
    console.log('Contact form submitted:', data);
    toast({
      title: "Request Submitted!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    form.reset();
  };

  const handleHeroCta = () => {
    console.log('Hero CTA clicked');
    // Example: scroll to pricing or contact form
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handlePricingCta = (tierName: string) => {
    console.log(`Pricing CTA for ${tierName} clicked`);
    // Example: navigate to a signup page or open a modal
    toast({
        title: `Selected ${tierName}`,
        description: "Redirecting to signup..."
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <NavigationMenu logoText="SaaSFlow" ctaButtonText="Request Demo" onCtaClick={handleHeroCta}/>

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          title="Streamline Your Workflow with SaaSFlow"
          subtitle="The ultimate solution for managing your projects, collaborating with your team, and boosting productivity. Discover a new era of efficiency."
          ctaText="Request a Demo"
          onCtaClick={handleHeroCta}
          imageUrl="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
        />

        {/* Features Section */}
        <section id="features" className="py-16 lg:py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Powerful Features, Effortless Control</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Explore the tools that will transform the way you work.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureHighlightCard
                icon={Zap}
                title="Blazing Fast Performance"
                description="Experience unparalleled speed and responsiveness that keeps your team moving."
              />
              <FeatureHighlightCard
                icon={Users}
                title="Seamless Collaboration"
                description="Work together in real-time with shared workspaces and intuitive communication tools."
              />
              <FeatureHighlightCard
                icon={BarChart3}
                title="Insightful Analytics"
                description="Gain valuable insights with comprehensive dashboards and reporting features."
              />
              <FeatureHighlightCard
                icon={ShieldCheck}
                title="Enterprise-Grade Security"
                description="Your data is protected with top-tier security measures and compliance standards."
              />
               <FeatureHighlightCard
                icon={LifeBuoy}
                title="Dedicated Support"
                description="Our expert team is always ready to assist you with any questions or issues."
              />
               <FeatureHighlightCard
                icon={MessageSquare}
                title="Integrated Communication"
                description="Keep all your project-related discussions in one place, enhancing clarity."
              />
            </div>
          </div>
        </section>
        <Separator />

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Loved by Teams Worldwide</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Hear what our satisfied customers have to say about SaaSFlow.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="SaaSFlow has revolutionized our project management. We're more organized and efficient than ever before!"
                authorName="Alice Johnson"
                authorTitle="CEO, Innovatech"
                avatarSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                rating={5}
                companyLogoSrc="https://placehold.co/100x40/E2E8F0/A0AEC0?text=Innovatech"
              />
              <TestimonialCard
                quote="The intuitive interface and powerful features make SaaSFlow a must-have for any growing business."
                authorName="Robert Miller"
                authorTitle="Marketing Director, NextGen Solutions"
                avatarSrc="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                rating={5}
                companyLogoSrc="https://placehold.co/100x40/E2E8F0/A0AEC0?text=NextGen"
              />
              <TestimonialCard
                quote="Switching to SaaSFlow was the best decision for our team. Collaboration is seamless, and results speak for themselves."
                authorName="Maria Garcia"
                authorTitle="Operations Manager, TechPro Services"
                avatarSrc="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                rating={4}
                 companyLogoSrc="https://placehold.co/100x40/E2E8F0/A0AEC0?text=TechPro"
              />
            </div>
          </div>
        </section>
        <Separator />

        {/* Pricing Section */}
        <section id="pricing" className="py-16 lg:py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Simple, Transparent Pricing</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the plan that's right for your team. No hidden fees, ever.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              <PricingTierCard
                tierName="Starter"
                price="$29"
                pricePeriod="/month"
                description="Perfect for small teams and startups getting off the ground."
                features={["Up to 5 users", "Basic project management", "10GB storage", "Email support"]}
                ctaText="Get Started"
                onCtaClick={() => handlePricingCta("Starter")}
              />
              <PricingTierCard
                tierName="Pro"
                price="$79"
                pricePeriod="/month"
                description="Ideal for growing businesses needing advanced features and more capacity."
                features={["Up to 20 users", "Advanced project management", "Workflow automation", "50GB storage", "Priority email support", "API Access"]}
                ctaText="Choose Pro"
                onCtaClick={() => handlePricingCta("Pro")}
                isFeatured={true}
              />
              <PricingTierCard
                tierName="Enterprise"
                price="Contact Us"
                description="Custom solutions for large organizations with specific requirements."
                features={["Unlimited users", "Custom workflows", "Dedicated account manager", "Premium support & SLA", "SSO Integration"]}
                ctaText="Talk to Sales"
                onCtaClick={() => handlePricingCta("Enterprise")}
              />
            </div>
          </div>
        </section>
        <Separator />

        {/* FAQ Section */}
        <section id="faq" className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about SaaSFlow.
              </p>
            </div>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is there a free trial available?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer a 14-day free trial for our Pro plan. No credit card required to get started.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I change my plan later?</AccordionTrigger>
                <AccordionContent>
                  Absolutely! You can upgrade, downgrade, or cancel your plan at any time from your account settings.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What kind of support do you offer?</AccordionTrigger>
                <AccordionContent>
                  We offer email support for all plans. Pro and Enterprise plans include priority support, and Enterprise plans have a dedicated account manager.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How secure is my data?</AccordionTrigger>
                <AccordionContent>
                  We take data security very seriously. All data is encrypted in transit and at rest. We use industry-standard security practices to protect your information.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
        <Separator />

        {/* Contact Form Section */}
        <section id="contact-form" className="py-16 lg:py-24 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Get in Touch</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Have questions or want a personalized demo? Reach out to us!
              </p>
            </div>
            <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmitContactForm)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@company.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Company Inc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="How can we help you?" className="min-h-[100px]" {...field} />
                        </FormControl>
                        <FormDescription>
                          Tell us about your project or ask any questions you have.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </section>
      </main>

      <Footer 
        companyName="SaaSFlow Solutions"
        legalLinks={[
            { href: "/privacy-policy", label: "Privacy Policy" },
            { href: "/terms-of-service", label: "Terms of Service" },
        ]}
      />
    </div>
  );
};

export default LandingPage;