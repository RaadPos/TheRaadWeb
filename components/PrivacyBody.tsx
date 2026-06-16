"use client";

import PageHeader from "@/components/PageHeader";
import LegalContent, { LegalSection } from "@/components/LegalContent";
import { useI18n } from "@/components/I18nProvider";

const SECTIONS: Record<string, LegalSection[]> = {
  en: [
    {
      heading: "Introduction",
      body: [
        "This Privacy Policy explains how Raad (“Raad”, “we”, “us”) collects, uses, and protects information when you use the Raad POS mobile app, the web dashboard at pos.raadapp.com, and related services (together, the “Service”).",
        "By using the Service, you agree to the collection and use of information in line with this policy.",
      ],
    },
    {
      heading: "Information we collect",
      body: ["We collect the information needed to provide and improve the Service:"],
      list: [
        "Account information: your name, email address, phone number, and business details.",
        "Business data: products, prices, inventory, sales, customers, credit (dayn) records, expenses, and staff you add.",
        "Device & usage data: device model, operating system, app version, and basic usage analytics to keep the Service reliable.",
        "Support communications: messages you send us through WhatsApp, email, or the contact form.",
      ],
    },
    {
      heading: "How we use your information",
      body: ["We use the information we collect to:"],
      list: [
        "Provide, operate, and maintain the Service, including syncing your data across devices.",
        "Process subscriptions, free trials, and payments for Raad Pro.",
        "Send important notices, such as account, security, or billing updates.",
        "Improve features, troubleshoot issues, and provide customer support.",
      ],
    },
    {
      heading: "Data storage and security",
      body: [
        "Your business data is encrypted in transit and at rest, and is automatically backed up to the cloud so it can be restored on a new device.",
        "We apply administrative, technical, and physical safeguards to protect your information. No method of transmission or storage is completely secure, but we work to protect your data using industry-standard practices.",
      ],
    },
    {
      heading: "Sharing and disclosure",
      body: ["We do not sell your personal information. We only share data in limited circumstances:"],
      list: [
        "Service providers who help us run the Service (for example, cloud hosting and payment processing), bound by confidentiality obligations.",
        "Legal reasons, where required to comply with applicable law or a valid legal request.",
        "Business transfers, such as a merger or acquisition, with notice to you where required.",
      ],
    },
    {
      heading: "Your rights and choices",
      body: [
        "You can access and update most of your information directly in the app. You may request a copy of your data, correction of inaccurate data, or deletion of your account by contacting us. Some information may be retained where required for legal or operational reasons.",
      ],
    },
    {
      heading: "Data retention",
      body: [
        "We keep your information for as long as your account is active or as needed to provide the Service. If you close your account, we delete or anonymize your data within a reasonable period, except where retention is required by law.",
      ],
    },
    {
      heading: "Children's privacy",
      body: [
        "The Service is intended for business use and is not directed to children under the age required by your local law. We do not knowingly collect personal information from children.",
      ],
    },
    {
      heading: "Changes to this policy",
      body: [
        "We may update this Privacy Policy from time to time. We will post the updated version here and update the “Last updated” date above. Significant changes may be communicated through the app.",
      ],
    },
    {
      heading: "Contact us",
      body: [
        "If you have any questions about this Privacy Policy or your data, contact us at info@raadapp.com or through the support page.",
      ],
    },
  ],
  so: [
    {
      heading: "Hordhac",
      body: [
        "Siyaasaddan Asturnaanta waxay sharraxaysaa sida Raad (“Raad”, “annaga”) u ururiyo, u isticmaalo, oo u ilaaliyo macluumaadka markaad isticmaasho abka mobile ee Raad POS, dashboard-ka web ee pos.raadapp.com, iyo adeegyada la xidhiidha (oo wadar loogu yeero “Adeegga”).",
        "Markaad isticmaasho Adeegga, waxaad oggolaanaysaa ururinta iyo isticmaalka macluumaadka si waafaqsan siyaasaddan.",
      ],
    },
    {
      heading: "Macluumaadka aan ururinno",
      body: ["Waxaan ururinnaa macluumaadka loo baahan yahay si aan u bixinno oo u hagaajinno Adeegga:"],
      list: [
        "Macluumaadka akoonka: magacaaga, ciwaanka iimaylka, lambarka taleefanka, iyo faahfaahinta ganacsiga.",
        "Xogta ganacsiga: alaabta, qiimaha, bakhaarka, iibka, macaamiisha, diiwaannada deynta (dayn), kharashyada, iyo shaqaalaha aad ku darto.",
        "Xogta aaladda & isticmaalka: nooca aaladda, nidaamka hawlgalka, nooca abka, iyo falanqayn isticmaal aasaasi ah si Adeeggu u sii shaqeeyo.",
        "Wada-xidhiidhka taageerada: fariimaha aad noogu soo dirto WhatsApp, iimayl, ama foomka xidhiidhka.",
      ],
    },
    {
      heading: "Sida aan u isticmaalno macluumaadkaaga",
      body: ["Waxaan u isticmaalnaa macluumaadka aan ururinno si aan:"],
      list: [
        "U bixinno, u shaqaynno, oo u sii wadno Adeegga, oo ay ku jirto isku-xidhka xogtaada aaladaha dhexdooda.",
        "U habaynno rukunnada, tijaabooyinka bilaashka ah, iyo lacag-bixinta Raad Pro.",
        "Kuugu soo dirno ogeysiisyo muhiim ah, sida cusboonaysiinta akoonka, amniga, ama lacag-bixinta.",
        "U hagaajinno astaamaha, u xallinno dhibaatooyinka, oo aan u bixinno taageero macmiil.",
      ],
    },
    {
      heading: "Kaydinta & amniga xogta",
      body: [
        "Xogta ganacsigaaga waa la siriyaa marka la gudbinayo iyo marka la kaydinayo, waxaana si toos ah loogu kaydiyaa daruurta si dib loogu soo celiyo aalad cusub.",
        "Waxaan adeegsannaa ilaalin maamul, farsamo, iyo mid jireed si aan u ilaalinno macluumaadkaaga. Ma jiro hab gudbin ama kaydin oo gabi ahaanba sugan, laakiin waxaan ku ilaalinnaa xogtaada habab heer-warshadeed ah.",
      ],
    },
    {
      heading: "Wadaagga & shaacinta",
      body: ["Macluumaadkaaga gaarka ah ma iibinno. Xogta waxaan kaliya wadaagnaa xaalado xaddidan:"],
      list: [
        "Bixiyayaasha adeegga ee naga caawiya socodsiinta Adeegga (tusaale, martigelinta daruurta iyo habaynta lacag-bixinta), oo ku xidhan waajibaadka qarsoodiga.",
        "Sababo sharci ah, marka loo baahan yahay in la hoggaansamo sharciga khuseeya ama codsi sharci ah oo sax ah.",
        "Wareejinta ganacsiga, sida isku-darka ama iibsiga, oo lagu ogeysiiyo adiga marka loo baahdo.",
      ],
    },
    {
      heading: "Xuquuqdaada & doorashooyinkaaga",
      body: [
        "Waad geli kartaa oo cusboonaysiin kartaa macluumaadkaaga inta badan si toos ah abka dhexdiisa. Waxaad codsan kartaa nuqul xogtaada ah, sixitaanka xog qaldan, ama tirtirka akoonkaaga adigoo nala soo xidhiidhaya. Macluumaad qaarkood waa la hayn karaa marka loo baahdo sababo sharci ama hawleed.",
      ],
    },
    {
      heading: "Hayrintaanka xogta",
      body: [
        "Macluumaadkaaga waxaan haynaa inta akoonkaagu firfircoon yahay ama inta loo baahan yahay bixinta Adeegga. Haddii aad xidho akoonkaaga, xogtaada waxaan tirtiraynaa ama magac-aan-leh ka dhiganaynaa muddo macquul ah gudaheed, marka laga reebo halka sharcigu hayrinta uu rabo.",
      ],
    },
    {
      heading: "Asturnaanta carruurta",
      body: [
        "Adeegga waxaa loogu talagalay isticmaal ganacsi, looguma talagalin carruurta ka yar da'da sharcigaaga maxalliga ahi rabo. Si aan ogaal ahayn uma ururinno macluumaad gaar ah oo carruureed.",
      ],
    },
    {
      heading: "Isbeddellada siyaasaddan",
      body: [
        "Mararka qaarkood waxaan cusboonaysiin karnaa Siyaasaddan Asturnaanta. Nuqulka la cusboonaysiiyay halkan ayaan ku soo dhejin doonnaa oo waxaan cusboonaysiin doonnaa taariikhda “La cusboonaysiiyay” ee kor ku qoran. Isbeddellada waaweyn waxaa lagu gudbin karaa abka dhexdiisa.",
      ],
    },
    {
      heading: "Nala soo xidhiidh",
      body: [
        "Haddii aad qabto su'aal ku saabsan Siyaasaddan Asturnaanta ama xogtaada, nagala soo xidhiidh info@raadapp.com ama bogga taageerada.",
      ],
    },
  ],
};

export default function PrivacyBody() {
  const { locale, ts } = useI18n();
  const sections = SECTIONS[locale] ?? SECTIONS.en;

  return (
    <>
      <PageHeader
        eyebrow={ts("Legal")}
        title={
          <>
            {ts("Privacy ")}
            <em>{ts("Policy.")}</em>
          </>
        }
        desc={ts("Your data is yours. Here's exactly what we collect, why, and how we keep it safe.")}
      />
      <LegalContent
        updated={ts("June 14, 2026")}
        updatedLabel={ts("Last updated:")}
        sections={sections}
      />
    </>
  );
}
