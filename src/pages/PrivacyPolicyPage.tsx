import React from 'react';
import NavigationMenu from '@/components/layout/NavigationMenu';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const PrivacyPolicyPage = () => {
  console.log('PrivacyPolicyPage loaded');
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <NavigationMenu logoText="SaaSFlow" ctaButtonText="Back to Home" onCtaClick={() => window.location.href = '/'} />
      <main className="flex-grow py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-3xl font-bold text-gray-900">Privacy Policy</CardTitle>
              <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
            </CardHeader>
            <Separator />
            <ScrollArea className="h-[calc(100vh-300px)]"> {/* Adjust height as needed */}
              <CardContent className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none py-6 px-6 text-gray-700">
                <p>
                  Welcome to SaaSFlow ("us", "we", or "our"). We operate the SaaSFlow website and offer the SaaSFlow software-as-a-service product (collectively, the "Service").
                  This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
                </p>
                
                <h2 className="text-xl font-semibold mt-6 mb-2">1. Information Collection and Use</h2>
                <p>
                  We collect several different types of information for various purposes to provide and improve our Service to you.
                </p>
                <h3 className="text-lg font-semibold mt-4 mb-1">Types of Data Collected</h3>
                <h4>Personal Data</h4>
                <p>
                  While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
                </p>
                <ul>
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Phone number (optional)</li>
                  <li>Company name (optional)</li>
                  <li>Usage Data</li>
                </ul>

                <h4>Usage Data</h4>
                <p>
                  We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">2. Use of Data</h2>
                <p>SaaSFlow uses the collected data for various purposes:</p>
                <ul>
                  <li>To provide and maintain our Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information so that we can improve our Service</li>
                  <li>To monitor the usage of our Service</li>
                  <li>To detect, prevent and address technical issues</li>
                </ul>

                <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Security</h2>
                <p>
                  The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">4. Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                  We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">5. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <ul>
                  <li>By email: privacy@saasflow.com</li>
                  <li>By visiting this page on our website: <a href="/contact" className="text-indigo-600 hover:underline">saasflow.com/contact</a></li>
                </ul>
                {/* Add more placeholder content as needed */}
              </CardContent>
            </ScrollArea>
          </Card>
        </div>
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

export default PrivacyPolicyPage;