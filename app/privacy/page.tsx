import AadsAdaptive from "@/components/ad/aads-adaptive";
import AdsterraNativeBar from "@/components/ad/adsterra-native-bar";
import HilltopadsMobileBanner300 from "@/components/ad/hilltop-mobile-banner-300";

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
      {/* Header */}
      <header className="space-y-3 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Your privacy matters. This page explains what data we collect, why we
          collect it, and how we protect it — in clear and honest terms.
        </p>
        <p className="text-xs text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </header>

      {/* Sections */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. Introduction</h2>
        <p className="text-muted-foreground leading-relaxed">
          Check-eo is a passion project built with care and intention. This app
          exists to help users manage and understand engine maintenance more
          easily. We respect your privacy deeply and believe in collecting only
          what is strictly necessary to operate the service.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2. Information We Collect</h2>
        <p className="text-muted-foreground leading-relaxed">
          We collect only the minimum data required to provide the service:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>
            <strong>Account information</strong> (such as name, email, and
            avatar) when you sign in using authentication providers.
          </li>
          <li>
            <strong>User-generated content</strong> such as posts, replies, or
            images you voluntarily submit.
          </li>
          <li>
            <strong>Anonymous technical data</strong> such as browser type,
            device type, and basic usage metrics for performance and security.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">3. What We Do NOT Collect</h2>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>No location tracking</li>
          <li>No selling of personal data</li>
          <li>No hidden profiling or fingerprinting</li>
          <li>No access to your private device files</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">4. How Your Data Is Used</h2>
        <p className="text-muted-foreground leading-relaxed">
          Your data is used only to:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>Operate and improve the app</li>
          <li>Display your posts and contributions</li>
          <li>Maintain security and prevent abuse</li>
          <li>Provide customer support when requested</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          We do not use your data for advertising profiling or resale.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">5. Cookies & Local Storage</h2>
        <p className="text-muted-foreground leading-relaxed">
          Check-eo uses cookies and browser storage only for essential
          functionality such as authentication, session handling, language
          preferences, and UI behavior. We do not use tracking cookies for
          behavioral advertising.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">6. Third-Party Services</h2>
        <p className="text-muted-foreground leading-relaxed">
          Some services are required to operate the app. These include:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>
            <strong>Authentication providers</strong> (for login and identity)
          </li>
          <li>
            <strong>Cloud storage services</strong> (for image uploads)
          </li>
          <li>
            <strong>Hosting & analytics providers</strong> (for performance and
            reliability)
          </li>
          <li>
            <strong>Advertising providers</strong> on the optional support page
            to help cover infrastructure costs
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          These providers only receive the data strictly necessary to perform
          their services and are required to comply with applicable privacy
          laws.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">7. Advertising Transparency</h2>
        <p className="text-muted-foreground leading-relaxed">
          This app is built by heart and currently has no commercial business
          model. To help cover infrastructure and operational costs, we include
          an optional advertising page. Ads are never injected into core
          workflows or required for using the app.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          We do not sell personal data, and ads are displayed through
          third-party providers who may use their own cookies or tracking
          technologies. You can avoid ads entirely by not visiting the support
          page.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">8. Data Retention</h2>
        <p className="text-muted-foreground leading-relaxed">
          We retain your data only for as long as necessary to provide the
          service or comply with legal obligations. You may request deletion of
          your account or content at any time.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">9. Security</h2>
        <p className="text-muted-foreground leading-relaxed">
          We use industry-standard security practices including encryption,
          access controls, and secure infrastructure providers. However, no
          system can be guaranteed 100% secure, and you use the service at your
          own risk.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">10. Your Rights</h2>
        <p className="text-muted-foreground leading-relaxed">
          Depending on your jurisdiction, you may have the right to:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          <li>Access your personal data</li>
          <li>Request correction or deletion</li>
          <li>Withdraw consent where applicable</li>
          <li>Object to certain processing activities</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          You can exercise these rights by contacting us directly.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">11. Children’s Privacy</h2>
        <p className="text-muted-foreground leading-relaxed">
          Check-eo is not intended for children under the age of 13. We do not
          knowingly collect personal data from children. If we become aware of
          such data, it will be deleted promptly.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">12. Changes to This Policy</h2>
        <p className="text-muted-foreground leading-relaxed">
          We may update this Privacy Policy from time to time. Any changes will
          be reflected on this page with an updated revision date. Continued use
          of the service constitutes acceptance of the updated policy.
        </p>
      </section>

      <section className="space-y-4 border-t pt-8">
        <h2 className="text-xl font-semibold">13. Contact</h2>
        <p className="text-muted-foreground leading-relaxed">
          If you have questions, concerns, or data requests, you can contact us
          at:
        </p>
        <p className="font-medium text-foreground">
          📧 tojorandria474@gmail.com
        </p>
      </section>
      <AdsterraNativeBar />
      <AadsAdaptive />
      <HilltopadsMobileBanner300 />
    </main>
  );
}
