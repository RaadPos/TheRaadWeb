import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Effects from "@/components/Effects";

// Shared chrome for the standalone routed pages (features, pricing, docs,
// hardware, support): the floating nav, the footer, and the scroll effects.
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Nav />
      {children}
      <Footer />
      <Effects />
    </main>
  );
}
