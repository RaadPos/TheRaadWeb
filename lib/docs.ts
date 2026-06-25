// ─────────────────────────────────────────────────────────────────────────
// Documentation catalog. Each doc is a standalone, SEO-friendly article with
// its own /docs/[slug] page. The index groups docs by category. Content is
// structured (sections → blocks) so pages render with real headings, lists,
// and steps, good for readers and search engines alike.
// ─────────────────────────────────────────────────────────────────────────

export type DocBlock =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "steps"; items: { title: string; desc: string }[] }
  | { type: "note"; variant?: "info" | "tip" | "warn"; title?: string; text: string };

export type DocSection = { heading: string; blocks: DocBlock[] };

export type Doc = {
  slug: string;
  category: string;
  icon: string;
  title: string; // H1 + SEO <title>
  description: string; // meta description + card text
  keywords: string[];
  readMinutes: number;
  sections: DocSection[];
  related?: string[]; // related doc slugs
};

// Display order of categories on the index page.
export const DOC_CATEGORIES = [
  "Getting started",
  "Products & inventory",
  "Selling & checkout",
  "Credit (Dayn)",
  "Team & cash control",
  "Insights & growth",
  "Platform & hardware",
];

export const DOCS: Doc[] = [
  // ── Getting started ──────────────────────────────────────────────
  {
    slug: "getting-started",
    category: "Getting started",
    icon: "bx-rocket",
    title: "Getting started with Raad POS",
    description:
      "Install Raad, create your account, and make your first sale in under five minutes, no training required.",
    keywords: ["raad pos setup", "point of sale getting started", "install raad", "first sale"],
    readMinutes: 3,
    sections: [
      {
        heading: "Install the app",
        blocks: [
          { type: "p", text: "Raad runs on the Android phone or tablet you already own, and on any computer through the web dashboard. Most shop owners start on mobile and add the desktop Web POS for the main counter later." },
          {
            type: "steps",
            items: [
              { title: "Download Raad", desc: "Get Raad from the Play Store, it's a small download and installs in seconds." },
              { title: "Open and sign up", desc: "Create your account with your email and a password." },
              { title: "Set up your shop", desc: "Add your business name and pick your business type so Raad tailors the app to how you sell." },
            ],
          },
        ],
      },
      {
        heading: "Make your first sale",
        blocks: [
          { type: "p", text: "Add a product or two, open the sale screen, tap the items into the cart, take payment, and close the sale. That's the whole loop, from install to first receipt in about five minutes." },
          { type: "note", variant: "tip", title: "Tip", text: "You don't need a barcode scanner to start. Add products manually now, and scan codes later when you're ready." },
        ],
      },
    ],
    related: ["set-up-business", "add-products", "checkout"],
  },
  {
    slug: "set-up-business",
    category: "Getting started",
    icon: "bx-store",
    title: "Set up your business profile",
    description:
      "Configure your shop name, business type, currency, and receipt details so Raad fits the way you actually sell.",
    keywords: ["business profile", "shop setup", "pos configuration", "receipt header"],
    readMinutes: 2,
    sections: [
      {
        heading: "Business type & smart defaults",
        blocks: [
          { type: "p", text: "Your business type does more than label your shop, it tunes the whole app. Raad uses it to filter the unit types you'll see and to choose sensible checkout defaults, so a boutique never wades through 'Litre' and a butchery sees 'KG' and 'Gram' first." },
        ],
      },
      {
        heading: "Receipt & shop details",
        blocks: [
          { type: "p", text: "Set the name, contact details, and footer note that appear on printed and digital receipts. These details are reused everywhere, receipts, reports, and customer messages." },
          { type: "list", items: ["Shop name and contact number", "Receipt header and thank-you footer", "Currency and tax defaults"] },
        ],
      },
    ],
    related: ["getting-started", "units", "receipts"],
  },

  // ── Products & inventory ─────────────────────────────────────────
  {
    slug: "add-products",
    category: "Products & inventory",
    icon: "bx-barcode-reader",
    title: "Add products and scan barcodes",
    description:
      "Add products by scanning their barcode or typing them in, and find any item instantly with search.",
    keywords: ["add product", "barcode scanning pos", "product search", "1d 2d barcode"],
    readMinutes: 3,
    sections: [
      {
        heading: "Add a product",
        blocks: [
          { type: "p", text: "Every product has a name, price, and unit. You can add one by scanning its barcode, Raad reads 1D and 2D codes, or by typing the details in for items without a barcode, like fresh produce or handmade goods." },
          {
            type: "steps",
            items: [
              { title: "Scan or tap New product", desc: "Scan a barcode to pre-fill the code, or start a blank product." },
              { title: "Enter the details", desc: "Add a name, selling price, cost (for profit reports), and the unit." },
              { title: "Save", desc: "The product is now ready to sell and tracked in inventory." },
            ],
          },
        ],
      },
      {
        heading: "Find products fast",
        blocks: [
          { type: "p", text: "At checkout, search by name or code and results appear instantly, even across thousands of items. When a hardware scanner fires, the event bypasses the interface entirely to find and queue the exact product variant, checkout in seconds." },
          { type: "note", variant: "tip", title: "Camera or reader", text: "Use your phone camera as a scanner, or pair a USB / Bluetooth reader for high-volume counters." },
        ],
      },
    ],
    related: ["bulk-import", "units", "inventory"],
  },
  {
    slug: "bulk-import",
    category: "Products & inventory",
    icon: "bx-list-plus",
    title: "Add products in bulk",
    description:
      "Build a full catalog fast by adding multiple products at once or importing a large list of SKUs.",
    keywords: ["bulk add products", "import catalog", "multiple products", "pos catalog setup"],
    readMinutes: 2,
    sections: [
      {
        heading: "Add several at once",
        blocks: [
          { type: "p", text: "Instead of saving products one by one, queue several in a single flow and save them together. It's the fastest way to enter a shelf or a delivery without breaking your rhythm." },
        ],
      },
      {
        heading: "Bulk import a catalog",
        blocks: [
          { type: "p", text: "For shops with hundreds or thousands of SKUs, import the whole catalog at once rather than typing each item. This is ideal when you're migrating from another system or opening a new branch." },
          { type: "note", variant: "info", title: "Keep units in mind", text: "Set the correct unit per product as you import, Raad only offers the units that fit your business type." },
        ],
      },
    ],
    related: ["add-products", "units"],
  },
  {
    slug: "units",
    category: "Products & inventory",
    icon: "bx-ruler",
    title: "Units and fractional quantities",
    description:
      "Raad's 7-tier unit system sells whole items, weights, liquids, and lengths, with the right keypad for each.",
    keywords: ["unit of measure pos", "sell by weight", "fractional quantity", "kg gram litre meter"],
    readMinutes: 3,
    sections: [
      {
        heading: "The 7-tier unit system",
        blocks: [
          { type: "p", text: "Unlike systems that only count 'items', Raad supports discrete and fractional units that match how shops really sell, so you can ring up 3 pieces, 1.45 KG, or 2.5 meters with equal ease." },
          {
            type: "list",
            items: [
              "Discrete (count): Piece, Box, Bag, whole-number counters with fast tap increments.",
              "Weight & liquid: KG, Gram, Litre, a decimal keypad slides up for fractional amounts.",
              "Length: Meter, precise decimal input for wire, fabric, and more.",
            ],
          },
        ],
      },
      {
        heading: "Smart domain filtering",
        blocks: [
          { type: "p", text: "To keep the interface clean, Raad shows only the unit types that fit your business category. A boutique owner never sees 'Litre', and a butchery only sees 'KG' and 'Gram', fewer choices, fewer mistakes." },
        ],
      },
    ],
    related: ["add-products", "checkout", "inventory"],
  },
  {
    slug: "inventory",
    category: "Products & inventory",
    icon: "bx-package",
    title: "Track inventory and low-stock alerts",
    description:
      "Stock counts itself in real time across every sale and device, with alerts before you run out.",
    keywords: ["inventory tracking", "stock management pos", "low stock alert", "real-time stock"],
    readMinutes: 2,
    sections: [
      {
        heading: "Stock that counts itself",
        blocks: [
          { type: "p", text: "Every sale updates your stock instantly, no manual counting. Because counts stay consistent across staff and devices, several cashiers can sell at once without overselling." },
        ],
      },
      {
        heading: "Stay ahead of stock-outs",
        blocks: [
          { type: "p", text: "Set a low-stock threshold per product and Raad warns you before items run out, so you reorder in time. Stock-depletion alerts also surface in your reports." },
          { type: "note", variant: "tip", title: "Pair with suppliers", text: "When stock runs low, request more directly from suppliers on Raad, received stock flows back into your counts automatically." },
        ],
      },
    ],
    related: ["units", "suppliers", "reports"],
  },

  // ── Selling & checkout ───────────────────────────────────────────
  {
    slug: "checkout",
    category: "Selling & checkout",
    icon: "bx-cart",
    title: "Make a sale at checkout",
    description:
      "A fast checkout built for busy counters, category pills, adaptive keypads, and instant scanner search.",
    keywords: ["pos checkout", "fast sale", "cashier screen", "retail checkout ux"],
    readMinutes: 3,
    sections: [
      {
        heading: "Built for speed",
        blocks: [
          { type: "p", text: "The home screen is designed for high-stress retail. Smart, YouTube-style category pills (like 'Loose Veggies') bind to the correct backend unit logic, so cashiers tap categories instead of wrestling with raw unit filters." },
        ],
      },
      {
        heading: "Adaptive input",
        blocks: [
          { type: "p", text: "The input adapts to the item. Tap a 'Piece' product and a simple integer counter appears; tap a 'KG' product and a large numeric keypad slides up for fast decimal entry. Hardware scans bypass the UI to queue the exact variant." },
          {
            type: "steps",
            items: [
              { title: "Add items", desc: "Scan, search, or tap category pills to build the cart." },
              { title: "Take payment", desc: "Choose cash or credit (dayn), apply any discount or tax." },
              { title: "Close the sale", desc: "Print or send the receipt, stock and reports update instantly." },
            ],
          },
        ],
      },
    ],
    related: ["discounts-tax", "receipts", "sell-on-credit"],
  },
  {
    slug: "discounts-tax",
    category: "Selling & checkout",
    icon: "bx-purchase-tag",
    title: "Apply discounts and tax",
    description:
      "Add percentage or fixed discounts and apply tax cleanly, at the line level or across the whole cart.",
    keywords: ["pos discount", "tax pos", "cart discount", "percentage discount"],
    readMinutes: 2,
    sections: [
      {
        heading: "Discounts",
        blocks: [
          { type: "p", text: "Apply a percentage or a fixed-amount discount to a single line item or to the entire order. Totals recalculate live, so the number on screen is always the number the customer pays." },
        ],
      },
      {
        heading: "Tax",
        blocks: [
          { type: "p", text: "Set your tax rules once and Raad applies them cleanly to sales, so receipts and reports stay accurate and compliant." },
        ],
      },
    ],
    related: ["checkout", "receipts", "reports"],
  },
  {
    slug: "receipts",
    category: "Selling & checkout",
    icon: "bx-printer",
    title: "Print and send receipts",
    description:
      "Print receipts over Bluetooth or USB with ESC/POS, or send a digital receipt by WhatsApp or SMS.",
    keywords: ["thermal printer pos", "esc pos receipt", "whatsapp receipt", "58mm printer"],
    readMinutes: 3,
    sections: [
      {
        heading: "Print on every sale",
        blocks: [
          { type: "p", text: "Raad prints over the ESC/POS command language and works with standard 58mm Bluetooth and USB thermal printers (such as the Niyama BT-58). Receipts print the moment a sale closes, or on demand from order history." },
        ],
      },
      {
        heading: "Go paperless",
        blocks: [
          { type: "p", text: "Prefer no paper? Send a digital receipt over WhatsApp or SMS instead. It's faster, cheaper, and gives customers a copy they won't lose." },
          { type: "note", variant: "info", title: "Setting up on a computer", text: "On the Web POS, a USB printer needs a one-time WinUSB driver step. The thermal printer guide walks through it." },
        ],
      },
    ],
    related: ["checkout", "web-pos", "refunds"],
  },
  {
    slug: "refunds",
    category: "Selling & checkout",
    icon: "bx-undo",
    title: "Refunds and order history",
    description:
      "Every transaction is saved. Reprint receipts and process one-tap refunds with manager approval.",
    keywords: ["pos refund", "order history", "reprint receipt", "transaction history"],
    readMinutes: 2,
    sections: [
      {
        heading: "A complete record",
        blocks: [
          { type: "p", text: "Raad keeps a complete digital history of every transaction, so you never lose a receipt. Open any past sale to view its details or reprint it." },
        ],
      },
      {
        heading: "Refunds, controlled",
        blocks: [
          { type: "p", text: "Process a refund in one tap. Because refunds are sensitive, they require manager authority, protecting you from accidental or unauthorized reversals." },
          { type: "note", variant: "tip", title: "Who can refund", text: "Cashiers can request a refund; a manager approves it. See staff roles for how permissions work." },
        ],
      },
    ],
    related: ["staff-roles", "reports", "receipts"],
  },

  // ── Credit (Dayn) ────────────────────────────────────────────────
  {
    slug: "sell-on-credit",
    category: "Credit (Dayn)",
    icon: "bx-wallet",
    title: "Sell on credit (Dayn)",
    description:
      "Close a sale as credit, link it to a customer, and keep a clean record of every balance owed.",
    keywords: ["sell on credit", "dayn", "customer credit pos", "credit sale"],
    readMinutes: 2,
    sections: [
      {
        heading: "Credit at checkout",
        blocks: [
          { type: "p", text: "When a customer pays later, complete the checkout as a credit (dayn) sale instead of cash. There's no separate workflow, it's a payment choice at the end of any sale." },
        ],
      },
      {
        heading: "Linked to the customer",
        blocks: [
          { type: "p", text: "Every credit sale is tied to a customer with a full running history, so you always know who owes what and since when. Record part-payments and Raad tracks the remaining balance for you." },
        ],
      },
    ],
    related: ["dayn-management", "checkout"],
  },
  {
    slug: "dayn-management",
    category: "Credit (Dayn)",
    icon: "bx-book-content",
    title: "Manage debts with the Dayn ledger",
    description:
      "See every outstanding balance in one ledger, record repayments, and send reminders to collect faster.",
    keywords: ["debt management", "dayn ledger", "whatsapp reminder", "collect debt pos"],
    readMinutes: 2,
    sections: [
      {
        heading: "One clear ledger",
        blocks: [
          { type: "p", text: "The Dayn ledger replaces the paper debt book. See every customer's outstanding balance in a single sorted view, with the full history of credit sales and repayments per customer." },
        ],
      },
      {
        heading: "Collect faster",
        blocks: [
          { type: "p", text: "Send a polite reminder over WhatsApp or SMS in one tap. Knowing exactly who to follow up with, and when, keeps cash moving instead of sitting on a shelf." },
        ],
      },
    ],
    related: ["sell-on-credit", "reports"],
  },

  // ── Team & cash control ──────────────────────────────────────────
  {
    slug: "staff-roles",
    category: "Team & cash control",
    icon: "bx-group",
    title: "Staff roles and permissions",
    description:
      "Give every team member the right access with manager and cashier roles, approvals, and activity logs.",
    keywords: ["staff roles pos", "cashier permissions", "manager approval", "activity log"],
    readMinutes: 3,
    sections: [
      {
        heading: "Manager vs cashier",
        blocks: [
          { type: "p", text: "Shrinkage and cash mishandling start with loose access. Raad uses dual-list roles: cashiers are restricted to basic sales processing, while managers have overriding authority to approve cart deletions, process refunds, and view sensitive profit margins." },
        ],
      },
      {
        heading: "Approvals and logs",
        blocks: [
          { type: "p", text: "Sensitive actions require manager approval, and every action is logged against the staff member who made it, full operational transparency, so nothing happens without a trail." },
          { type: "note", variant: "info", title: "Pro feature", text: "Staff management is part of the Raad Pro tier, included in the 14-day free trial." },
        ],
      },
    ],
    related: ["expenses", "refunds", "reports"],
  },
  {
    slug: "expenses",
    category: "Team & cash control",
    icon: "bx-money-withdraw",
    title: "Track expenses and reconcile the drawer",
    description:
      "Log expenses tied to your cash-drawer math, with mandatory categories and profit-leakage reports.",
    keywords: ["expense tracking pos", "cash drawer reconciliation", "petty cash", "profit leakage"],
    readMinutes: 3,
    sections: [
      {
        heading: "Expenses are part of the math",
        blocks: [
          { type: "p", text: "In Raad, expenses aren't just a text list, they're wired into your shift math, so your drawer always reconciles:" },
          { type: "list", items: ["Starting Cash + Cash Sales − Logged Expenses = Expected Drawer Cash"] },
        ],
      },
      {
        heading: "Categories & reporting",
        blocks: [
          { type: "p", text: "Mandatory categories, Transport, Utilities, Staff Allowance, and more, make end-of-month profit-leakage reports possible, showing exactly where money slips away. At close, compare expected vs. actual cash to reconcile each shift." },
        ],
      },
    ],
    related: ["staff-roles", "reports"],
  },

  // ── Insights & growth ────────────────────────────────────────────
  {
    slug: "reports",
    category: "Insights & growth",
    icon: "bx-bar-chart-alt-2",
    title: "Reports and analytics",
    description:
      "Track real net profit, best-sellers, and stock alerts live, with a dashboard tailored to each role.",
    keywords: ["pos reports", "sales analytics", "net profit report", "best selling items"],
    readMinutes: 3,
    sections: [
      {
        heading: "Live analytics",
        blocks: [
          { type: "p", text: "Step away from the counter and still understand your business. Track real net profit, best-selling items, and stock-depletion alerts instantly from the mobile or web app, with daily, weekly, and monthly summaries you can export to PDF and Excel." },
        ],
      },
      {
        heading: "A screen for every role",
        blocks: [
          { type: "p", text: "Different roles see different dashboards, each built for the job:" },
          {
            type: "list",
            items: [
              "Admin, owner-level access to every report, setting, and control.",
              "Manager, approvals, staff, expenses, and profit margins.",
              "Cashier, a fast, focused checkout view with nothing in the way.",
            ],
          },
        ],
      },
    ],
    related: ["expenses", "staff-roles", "inventory"],
  },

  // ── Platform & hardware ──────────────────────────────────────────
  {
    slug: "suppliers",
    category: "Platform & hardware",
    icon: "bx-store",
    title: "Order stock from suppliers",
    description:
      "Request stock from other businesses on Raad and have received deliveries flow into your inventory.",
    keywords: ["supplier network", "request stock", "b2b ordering", "wholesale pos"],
    readMinutes: 2,
    sections: [
      {
        heading: "Your supply chain, connected",
        blocks: [
          { type: "p", text: "Restock without leaving the app. Request inventory directly from suppliers, wholesalers and distributors, who also run on Raad, and track requested stock and incoming deliveries in one place." },
        ],
      },
      {
        heading: "Straight into inventory",
        blocks: [
          { type: "p", text: "When stock arrives and is received, it flows straight into your live inventory counts, so your shelves and your numbers always match." },
        ],
      },
    ],
    related: ["inventory", "web-pos"],
  },
  {
    slug: "web-pos",
    category: "Platform & hardware",
    icon: "bx-desktop",
    title: "Use Raad on a computer (Web POS)",
    description:
      "Run the main counter from a web dashboard at pos.raadapp.com, in real-time sync with the mobile app.",
    keywords: ["web pos", "desktop point of sale", "browser pos", "cross-platform pos"],
    readMinutes: 3,
    sections: [
      {
        heading: "Desktop dashboard",
        blocks: [
          { type: "p", text: "Raad operates on mobile devices for floor staff and on a robust web dashboard for main-counter operations. Open pos.raadapp.com in a browser to run the counter on a full-size screen, with the same live data as the app." },
        ],
      },
      {
        heading: "Hardware on the Web POS",
        blocks: [
          { type: "p", text: "Connect USB printers and scanners to the Web POS. A USB thermal printer needs a one-time WinUSB driver step in the browser; barcode readers in keyboard (HID) mode work right away." },
          { type: "note", variant: "tip", title: "Setup guides", text: "Follow the thermal printer and barcode reader guides on the Hardware page for exact, step-by-step instructions." },
        ],
      },
    ],
    related: ["receipts", "suppliers", "reports"],
  },
];

export function getDoc(slug: string): Doc | undefined {
  return DOCS.find((d) => d.slug === slug);
}

export function docsByCategory(category: string): Doc[] {
  return DOCS.filter((d) => d.category === category);
}

// Stable id for in-page section anchors.
export function headingId(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// ── Somali localization ────────────────────────────────────────────────────
import { DOCS_SO } from "./docs.so";

/** Swap in Somali title/description/sections when locale is "so". Category
 *  stays in English (it's the grouping key; display name is translated in UI). */
export function localizeDoc(d: Doc, locale: string): Doc {
  if (locale !== "so") return d;
  const o = DOCS_SO[d.slug];
  if (!o) return d;
  return { ...d, title: o.title, description: o.description, sections: o.sections };
}

export function getDocLocalized(slug: string, locale: string): Doc | undefined {
  const d = getDoc(slug);
  return d ? localizeDoc(d, locale) : undefined;
}

export function getDocsLocalized(locale: string): Doc[] {
  return DOCS.map((d) => localizeDoc(d, locale));
}

export function docsByCategoryLocalized(category: string, locale: string): Doc[] {
  return getDocsLocalized(locale).filter((d) => d.category === category);
}
