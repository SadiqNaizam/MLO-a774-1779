import React from 'react';
import NavigationMenu from '@/components/layout/NavigationMenu';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const TermsOfServicePage = () => {
  console.log('TermsOfServicePage loaded');
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <NavigationMenu logoText="SaaSFlow" ctaButtonText="Back to Home" onCtaClick={() => window.location.href = '/'} />
      <main className="flex-grow py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-3xl font-bold text-gray-900">Terms of Service</CardTitle>
              <p className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
            </CardHeader>
            <Separator />
            <ScrollArea className="h-[calc(100vh-300px)]"> {/* Adjust height as needed */}
              <CardContent className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none py-6 px-6 text-gray-700">
                <p>
                  Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the SaaSFlow website and the SaaSFlow software-as-a-service product (the "Service") operated by SaaSFlow ("us", "we", or "our").
                  Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
                  By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">1. Accounts</h2>
                <p>
                  When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                  You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
                  You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">2. Intellectual Property</h2>
                <p>
                  The Service and its original content, features, and functionality are and will remain the exclusive property of SaaSFlow and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of SaaSFlow.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">3. Termination</h2>
                <p>
                  We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                  All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
                  Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">4. Limitation Of Liability</h2>
                <p>
                  In no event shall SaaSFlow, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
                </p>
                
                <h2 className="text-xl font-semibold mt-6 mb-2">5. Governing Law</h2>
                <p>
                  These Terms shall be governed and construed in accordance with the laws of [Your State/Country, e.g., California, United States], without regard to its conflict of law provisions.
                  Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">6. Changes</h2>
                <p>
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                  By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                </p>

                <h2 className="text-xl font-semibold mt-6 mb-2">7. Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us:</p>
                <ul>
                  <li>By email: legal@saasflow.com</li>
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

export default TermsOfServicePage;