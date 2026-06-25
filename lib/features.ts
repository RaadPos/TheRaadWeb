// ─────────────────────────────────────────────────────────────────────────
// Feature catalog, drives both the /features index grid and each
// /features/[slug] deep-dive page. Add or edit a feature here and both
// the card and its detail page update automatically.
// ─────────────────────────────────────────────────────────────────────────

export type FeaturePoint = { icon: string; title: string; desc: string };

export type Feature = {
  slug: string;
  icon: string;
  tag: string; // short category chip on the card
  title: string; // card + page title
  short: string; // card description
  lead: string; // page sub-heading
  points: FeaturePoint[];
  note?: string; // optional "good to know" callout on the detail page
  related?: { label: string; href: string };
};

export const FEATURES: Feature[] = [
  {
    slug: "barcode-products",
    icon: "bx-barcode-reader",
    tag: "Catalog",
    title: "Add products by barcode & search",
    short:
      "Scan a barcode to add or find a product instantly, or search by name in seconds.",
    lead: "Build and browse your catalog at the speed of a scan. Add products by their barcode, then find any item instantly.",
    points: [
      { icon: "bx-barcode-reader", title: "Scan to add", desc: "Scan a 1D or 2D barcode to create a new product or pull up an existing one, no typing." },
      { icon: "bx-search", title: "Instant search", desc: "Search by product name or code. Results are instant, even across thousands of items." },
      { icon: "bx-crosshair", title: "Auto-focus checkout", desc: "A scan auto-focuses and adds the exact item to the cart, bringing checkout down to seconds." },
      { icon: "bx-mobile-alt", title: "Camera or reader", desc: "Use your phone camera as a scanner, or pair a USB / Bluetooth reader for speed." },
    ],
    related: { label: "See barcode reader setup", href: "/hardware/barcode-scanner" },
  },
  {
    slug: "bulk-products",
    icon: "bx-list-plus",
    tag: "Catalog",
    title: "Bulk & multiple product adding",
    short:
      "Build your catalog fast, add many products at once instead of one at a time.",
    lead: "Stocking a full shop shouldn't take all day. Add products in batches and let smart units keep it tidy.",
    points: [
      { icon: "bx-collection", title: "Add multiple products", desc: "Queue several products in one flow and save them together." },
      { icon: "bx-upload", title: "Bulk import", desc: "Bring in a large catalog at once, ideal for shops with thousands of SKUs." },
      { icon: "bx-ruler", title: "7-tier unit system", desc: "Assign the right unit per product: Piece / Box / Bag, KG / Gram / Litre, or Meter." },
      { icon: "bx-filter-alt", title: "Smart unit filtering", desc: "Raad shows only the units that fit your business type, so the form stays clean." },
    ],
  },
  {
    slug: "sell-on-debt",
    icon: "bx-wallet",
    tag: "Credit",
    title: "Sell on credit (dayn)",
    short:
      "Close a sale as credit and link it to a customer, the paper debt book, replaced.",
    lead: "Sell on credit without losing track. Every dayn sale is recorded against a customer, ready to collect.",
    points: [
      { icon: "bx-receipt", title: "Sale on debt", desc: "Complete a checkout as credit when a customer pays later." },
      { icon: "bx-user", title: "Linked to a customer", desc: "Each credit sale is tied to a customer with a full running history." },
      { icon: "bx-coin-stack", title: "Partial payments", desc: "Record part-payments and Raad tracks the remaining balance automatically." },
      { icon: "bxl-whatsapp", title: "WhatsApp reminders", desc: "Send a polite reminder in one tap to recover money faster." },
    ],
  },
  {
    slug: "debt-management",
    icon: "bx-book-content",
    tag: "Credit",
    title: "Debt (dayn) management",
    short:
      "A complete ledger of who owes what, and the tools to collect it.",
    lead: "Turn scattered notes into one clear ledger. See every balance and follow up at the right time.",
    points: [
      { icon: "bx-list-ul", title: "Open dayn ledger", desc: "See every customer's outstanding balance in a single, sorted view." },
      { icon: "bx-history", title: "Full history", desc: "Per-customer history of every credit sale and every repayment." },
      { icon: "bxl-whatsapp", title: "One-tap reminders", desc: "Nudge customers over WhatsApp or SMS with a single tap." },
      { icon: "bx-trending-up", title: "Recover faster", desc: "Know exactly who to follow up with so cash keeps moving." },
    ],
  },
  {
    slug: "staff-roles",
    icon: "bx-group",
    tag: "Team",
    title: "Staff roles & activity",
    short:
      "Strict permissions and full activity logs keep cash and stock under control.",
    lead: "Shrinkage and cash mishandling start with loose access. Raad locks it down with clear roles and logs.",
    points: [
      { icon: "bx-id-card", title: "Manager vs cashier", desc: "Cashiers handle sales; managers approve deletions, refunds, and see profit margins." },
      { icon: "bx-shield-quarter", title: "Approvals", desc: "Sensitive actions like cart deletions and refunds require manager authority." },
      { icon: "bx-list-check", title: "Activity logs", desc: "Every action is logged against the staff member who made it." },
      { icon: "bx-user-plus", title: "Multiple staff", desc: "Add your whole team and give each person exactly the access they need." },
    ],
    note: "Staff management is part of the Raad Pro tier, included in the 14-day free trial.",
  },
  {
    slug: "inventory-tracking",
    icon: "bx-package",
    tag: "Stock",
    title: "Inventory tracking",
    short:
      "Real-time stock that counts itself, with alerts before you run out.",
    lead: "Stock stays accurate on its own, across every sale, staff member, and device.",
    points: [
      { icon: "bx-revision", title: "Live stock levels", desc: "Every sale updates your stock in real time, no manual counting." },
      { icon: "bx-bell", title: "Low-stock alerts", desc: "Get warned before an item runs out, so you reorder in time." },
      { icon: "bx-ruler", title: "Whole & fractional units", desc: "Track Pieces, or fractional KG, Litre, and Meter with precision." },
      { icon: "bx-block", title: "No overselling", desc: "Counts stay consistent so you never sell what you don't have." },
    ],
  },
  {
    slug: "reports-analytics",
    icon: "bx-bar-chart-alt-2",
    tag: "Insights",
    title: "Reports & role dashboards",
    short:
      "Live analytics, and a different screen tailored to every role.",
    lead: "Understand your business at a glance, with a dashboard built for whoever is looking at it.",
    points: [
      { icon: "bx-line-chart", title: "Live analytics", desc: "Track real net profit, best-selling items, and stock depletion instantly." },
      { icon: "bx-history", title: "Order management", desc: "A complete digital history of every transaction, one-tap refunds and reprints." },
      { icon: "bx-file", title: "Exportable reports", desc: "Daily, weekly, and monthly summaries, exportable to PDF and Excel." },
      { icon: "bx-crown", title: "Admin screen", desc: "Owner-level view, all reports, settings, and full control." },
      { icon: "bx-shield", title: "Manager screen", desc: "Approvals, staff, expenses, and profit margins in one place." },
      { icon: "bx-cart", title: "Cashier screen", desc: "A fast, focused checkout view with nothing in the way." },
    ],
  },
  {
    slug: "receipt-printing",
    icon: "bx-printer",
    tag: "Hardware",
    title: "Receipt printer support",
    short:
      "Print receipts instantly over Bluetooth or USB using ESC/POS.",
    lead: "Hand customers a receipt the moment a sale closes, or send a digital one instead.",
    points: [
      { icon: "bx-printer", title: "ESC/POS printing", desc: "Works with standard 58mm Bluetooth & USB thermal printers (e.g. Niyama BT-58)." },
      { icon: "bx-receipt", title: "Instant on sale", desc: "Receipts print automatically the moment you close a sale." },
      { icon: "bxl-whatsapp", title: "Digital receipts", desc: "Skip paper, send the receipt over WhatsApp or SMS." },
      { icon: "bx-desktop", title: "Desktop Web POS", desc: "Print from a USB printer on a computer via the WinUSB driver." },
    ],
    related: { label: "See thermal printer setup", href: "/hardware/thermal-printer" },
  },
  {
    slug: "suppliers",
    icon: "bx-store",
    tag: "Network",
    title: "Supplier network",
    short:
      "Request stock from other businesses on Raad, your supply chain, connected.",
    lead: "Restock without leaving the app. Order from suppliers who are also on Raad and watch it flow into your inventory.",
    points: [
      { icon: "bx-cart-add", title: "Request stock", desc: "Order inventory directly from suppliers that run on Raad." },
      { icon: "bx-buildings", title: "Business to business", desc: "Connect with wholesalers and distributors in the Raad network." },
      { icon: "bx-package", title: "Track requests", desc: "Follow requested stock and incoming deliveries in one place." },
      { icon: "bx-revision", title: "Auto-update inventory", desc: "Received stock flows straight into your live inventory counts." },
    ],
  },
  {
    slug: "expenses",
    icon: "bx-money",
    tag: "Cash",
    title: "Expense management",
    short:
      "Track every shilling out, tied directly to your cash drawer.",
    lead: "Expenses aren't just a list in Raad, they're part of your drawer math, so nothing leaks unnoticed.",
    points: [
      { icon: "bx-calculator", title: "Integrated drawer math", desc: "Starting Cash + Cash Sales − Logged Expenses = Expected Drawer Cash." },
      { icon: "bx-category", title: "Categorized expenses", desc: "Mandatory categories, Transport, Utilities, Staff Allowance, and more." },
      { icon: "bx-trending-down", title: "Profit-leakage reports", desc: "End-of-month reports show exactly where money is slipping away." },
      { icon: "bx-check-double", title: "Shift reconciliation", desc: "Compare expected vs actual cash at the close of every shift." },
    ],
  },
  {
    slug: "discounts-tax",
    icon: "bx-purchase-tag",
    tag: "Checkout",
    title: "Discounts & tax",
    short:
      "Apply discounts and taxes correctly at checkout, every single time.",
    lead: "Give a discount or add tax without second-guessing the total, Raad does the math.",
    points: [
      { icon: "bx-purchase-tag", title: "Discount management", desc: "Percentage or fixed discounts, on a single item or the whole cart." },
      { icon: "bx-receipt", title: "Tax handling", desc: "Apply your tax rules cleanly so every sale is compliant." },
      { icon: "bx-cart", title: "Item or cart level", desc: "Flexible, discount one line, or the entire order at once." },
      { icon: "bx-calculator", title: "Always-accurate totals", desc: "Totals update live to reflect every discount and tax applied." },
    ],
  },
  {
    slug: "desktop-web-pos",
    icon: "bx-desktop",
    tag: "Platform",
    title: "Desktop & Web POS",
    short:
      "Run Raad on a computer with a full web dashboard for the main counter.",
    lead: "Floor staff on Android, the main counter on a computer, one business, perfectly in sync.",
    points: [
      { icon: "bx-desktop", title: "Web dashboard", desc: "Robust counter operations in the browser at pos.raadapp.com." },
      { icon: "bx-devices", title: "Cross-platform", desc: "Android for floor staff, web for the counter, the same live data." },
      { icon: "bx-printer", title: "USB hardware", desc: "Connect USB printers and scanners to the Web POS with a one-time driver step." },
      { icon: "bx-sync", title: "Real-time sync", desc: "Sales, stock, and staff stay in sync across every device, instantly." },
    ],
    related: { label: "See desktop printer setup", href: "/hardware/thermal-printer" },
  },
];

export function getFeature(slug: string) {
  return FEATURES.find((f) => f.slug === slug);
}

// ── Somali localization ────────────────────────────────────────────────────
import { FEATURES_SO } from "./features.so";

/** Merge Somali text over the English base when locale is "so". */
export function localizeFeature(f: Feature, locale: string): Feature {
  if (locale !== "so") return f;
  const o = FEATURES_SO[f.slug];
  if (!o) return f;
  return {
    ...f,
    tag: o.tag ?? f.tag,
    title: o.title ?? f.title,
    short: o.short ?? f.short,
    lead: o.lead ?? f.lead,
    points: f.points.map((p, i) =>
      o.points?.[i] ? { icon: p.icon, title: o.points[i].title, desc: o.points[i].desc } : p
    ),
    note: o.note ?? f.note,
    related: f.related
      ? { href: f.related.href, label: o.relatedLabel ?? f.related.label }
      : undefined,
  };
}

export function getFeaturesLocalized(locale: string): Feature[] {
  return FEATURES.map((f) => localizeFeature(f, locale));
}

export function getFeatureLocalized(slug: string, locale: string): Feature | undefined {
  const f = getFeature(slug);
  return f ? localizeFeature(f, locale) : undefined;
}
