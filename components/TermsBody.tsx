"use client";

import PageHeader from "@/components/PageHeader";
import LegalContent, { LegalSection } from "@/components/LegalContent";
import { useI18n } from "@/components/I18nProvider";

const SECTIONS: Record<string, LegalSection[]> = {
  en: [
    {
      heading: "Acceptance of terms",
      body: [
        "These Terms of Service (“Terms”) govern your access to and use of the Raad POS app, the web dashboard at pos.raadapp.com, and related services (the “Service”). By creating an account or using the Service, you agree to these Terms.",
      ],
    },
    {
      heading: "Description of the Service",
      body: [
        "Raad is a point-of-sale and business-management platform that lets you process sales, manage inventory and customers, track credit (dayn) and expenses, manage staff, and view reports. Some features are available only on the Raad Pro tier.",
      ],
    },
    {
      heading: "Accounts and registration",
      body: [
        "You are responsible for the accuracy of the information you provide and for keeping your login credentials secure. You are responsible for all activity that happens under your account, including actions by staff you invite.",
      ],
    },
    {
      heading: "Subscriptions, free trial, and billing",
      body: [
        "Raad offers a free Starter plan and a paid Raad Pro plan, billed monthly or annually. New users may start a 14-day free trial of Pro features; no payment is required to begin the trial.",
      ],
    },
    {
      heading: "Acceptable use",
      body: ["You agree not to:"],
      list: [
        "Use the Service for any unlawful or fraudulent purpose.",
        "Interfere with or disrupt the integrity or performance of the Service.",
        "Attempt to gain unauthorized access to the Service or other users' data.",
        "Reverse engineer or resell the Service except as permitted by law.",
      ],
    },
    {
      heading: "Your content and data",
      body: [
        "You retain ownership of the business data you put into the Service. You grant us the limited rights needed to host, process, back up, and display that data so we can provide the Service to you. You are responsible for the lawfulness of the data you collect and store, including customer information.",
      ],
    },
    {
      heading: "Hardware",
      body: [
        "Raad works with compatible third-party hardware such as thermal printers and barcode scanners. We are not responsible for third-party hardware, and any setup steps we provide (for example, driver installation) are offered as guidance only.",
      ],
    },
    {
      heading: "Intellectual property",
      body: [
        "The Service, including its software, design, and branding, is owned by Raad and protected by intellectual-property laws. These Terms do not grant you any right to our trademarks or branding.",
      ],
    },
    {
      heading: "Disclaimers and limitation of liability",
      body: [
        "The Service is provided “as is” without warranties of any kind. To the maximum extent permitted by law, Raad is not liable for indirect, incidental, or consequential damages, or for loss of profits, data, or goodwill arising from your use of the Service.",
      ],
    },
    {
      heading: "Termination",
      body: [
        "You may stop using the Service and close your account at any time. We may suspend or terminate access if you breach these Terms or use the Service in a way that risks harm to others or to the Service.",
      ],
    },
    {
      heading: "Changes to these Terms",
      body: [
        "We may update these Terms from time to time. We will post the updated version here and update the “Last updated” date. Continued use of the Service after changes take effect means you accept the updated Terms.",
      ],
    },
    {
      heading: "Contact us",
      body: [
        "Questions about these Terms? Contact us at info@raadapp.com or through the support page.",
      ],
    },
  ],
  so: [
    {
      heading: "Aqbalaadda shuruudaha",
      body: [
        "Shuruudahan Adeegga (“Shuruudaha”) waxay maamulaan gelitaankaaga iyo isticmaalkaaga abka Raad POS, dashboard-ka web ee pos.raadapp.com, iyo adeegyada la xidhiidha (“Adeegga”). Markaad samaysato akoon ama aad isticmaasho Adeegga, waxaad oggolaanaysaa Shuruudahan.",
      ],
    },
    {
      heading: "Sharraxaadda Adeegga",
      body: [
        "Raad waa madal point-of-sale iyo maamul-ganacsi oo kuu ogolaanaysa inaad habayso iibka, maamusho bakhaarka iyo macaamiisha, raacdo deynta (dayn) iyo kharashyada, maamusho shaqaalaha, oo aad daawato warbixino. Astaamo qaarkood waxay kaliya ku jiraan heerka Raad Pro.",
      ],
    },
    {
      heading: "Akoonnada & diiwaangelinta",
      body: [
        "Waxaad mas'uul ka tahay saxnaanta macluumaadka aad bixiso iyo ilaalinta xogta gelitaankaaga. Waxaad mas'uul ka tahay dhammaan dhaqdhaqaaqa ka dhaca akoonkaaga, oo ay ku jiraan ficillada shaqaalaha aad casuunto.",
      ],
    },
    {
      heading: "Rukunnada, tijaabada bilaashka, iyo lacag-bixinta",
      body: [
        "Raad wuxuu bixiyaa qorshe Starter oo bilaash ah iyo qorshe Raad Pro oo la bixiyo, oo bishii ama sannadkii la bixiyo. Isticmaalayaasha cusub waxay bilaabi karaan tijaabo 14-maalmood oo bilaash ah oo astaamaha Pro; lacag looma baahna in tijaabada la bilaabo.",
      ],
    },
    {
      heading: "Isticmaalka la oggol yahay",
      body: ["Waxaad oggolaanaysaa inaadan:"],
      list: [
        "U isticmaalin Adeegga ujeeddo sharci-darro ah ama khiyaano ah.",
        "Faragelin ama carqalad gelin daacadnimada ama waxqabadka Adeegga.",
        "Isku dayin inaad si aan la oggolayn u gasho Adeegga ama xogta isticmaalayaasha kale.",
        "Dib-u-injineernimo ama dib-u-iibin Adeegga marka laga reebo inta sharcigu oggol yahay.",
      ],
    },
    {
      heading: "Nuxurkaaga & xogtaada",
      body: [
        "Waxaad sii haysataa lahaanshaha xogta ganacsiga ee aad geliso Adeegga. Waxaad na siisaa xuquuqda xaddidan ee loo baahan yahay si aan u martigelinno, u habaynno, u kaydinno, oo u soo bandhigno xogtaas si aan Adeegga kuugu bixinno. Waxaad mas'uul ka tahay sharcinimada xogta aad ururiso oo kaydiso, oo ay ku jirto macluumaadka macaamiisha.",
      ],
    },
    {
      heading: "Qalabka",
      body: [
        "Raad wuxuu la shaqeeyaa qalab dhinac-saddexaad oo waafaqsan sida daabacayaasha kulul iyo akhristayaasha barcode. Mas'uul kama nihin qalabka dhinac-saddexaad, tallaabooyinka dejinta ee aan bixinno (tusaale, rakibaadda darawalka) waxaa loo bixiyaa tilmaan ahaan oo keliya.",
      ],
    },
    {
      heading: "Hantida maskaxeed",
      body: [
        "Adeegga, oo ay ku jiraan software-kiisa, naqshaddiisa, iyo astaantiisa, waxaa iska leh Raad waxaana ilaaliya sharciyada hantida maskaxeed. Shuruudahani kuma siinayaan xaq aad ku leedahay calaamadahayaga ganacsi ama astaantayada.",
      ],
    },
    {
      heading: "Afeefyada & xaddidaadda mas'uuliyadda",
      body: [
        "Adeegga waxaa la bixiyaa “sida uu yahay” iyada oo aan dammaanad nooc kasta ah lahayn. Ilaa heerka ugu sarreeya ee sharcigu oggol yahay, Raad mas'uul kama aha khasaare dadban, lama filaan ah, ama ka dhasha, ama luminta faa'iido, xog, ama sumcad oo ka timaada isticmaalkaaga Adeegga.",
      ],
    },
    {
      heading: "Joojinta",
      body: [
        "Waad joojin kartaa isticmaalka Adeegga oo xidhi kartaa akoonkaaga wakhti kasta. Waxaan hakin karnaa ama joojin karnaa gelitaanka haddii aad jebiso Shuruudahan ama aad u isticmaasho Adeegga si halis ugu ah dadka kale ama Adeegga.",
      ],
    },
    {
      heading: "Isbeddellada Shuruudahan",
      body: [
        "Mararka qaarkood waxaan cusboonaysiin karnaa Shuruudahan. Nuqulka la cusboonaysiiyay halkan ayaan ku soo dhejin doonnaa oo waxaan cusboonaysiin doonnaa taariikhda “La cusboonaysiiyay”. Sii wadista isticmaalka Adeegga ka dib marka isbeddellada dhaqan-galaan macnaheedu waa inaad aqbasho Shuruudaha la cusboonaysiiyay.",
      ],
    },
    {
      heading: "Nala soo xidhiidh",
      body: [
        "Su'aalo ku saabsan Shuruudahan? Nagala soo xidhiidh info@raadapp.com ama bogga taageerada.",
      ],
    },
  ],
};

export default function TermsBody() {
  const { locale, ts } = useI18n();
  const sections = SECTIONS[locale] ?? SECTIONS.en;

  return (
    <>
      <PageHeader
        eyebrow={ts("Legal")}
        title={
          <>
            {ts("Terms of ")}
            <em>{ts("Service.")}</em>
          </>
        }
        desc={ts("The agreement between you and Raad for using the app, web dashboard, and subscriptions.")}
      />
      <LegalContent
        updated={ts("June 14, 2026")}
        updatedLabel={ts("Last updated:")}
        sections={sections}
      />
    </>
  );
}
