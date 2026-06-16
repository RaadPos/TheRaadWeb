"use client";

import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SetupSteps from "@/components/SetupSteps";
import Callout from "@/components/Callout";
import SupportCta from "@/components/SupportCta";
import { useI18n } from "@/components/I18nProvider";

type Step = { title: string; desc: string };

const STEPS: Record<string, Step[]> = {
  en: [
    { title: "Power on & load paper", desc: "Switch on the printer and load a roll of thermal paper — Raad supports both 58mm and 80mm widths." },
    { title: "Enable Bluetooth on your phone", desc: "Turn on Bluetooth and keep the printer within a couple of metres while you pair." },
    { title: "Pair the printer", desc: "Open your phone's Bluetooth settings and pair with the printer. If it asks for a PIN, it's usually 0000 or 1234." },
    { title: "Connect it in Raad", desc: "In Raad, go to Settings → Printer → Add printer, then choose your device from the list of paired devices." },
    { title: "Print a test receipt", desc: "Tap Print test. Once it prints cleanly, every sale can print a receipt automatically — or on demand." },
  ],
  so: [
    { title: "Shid & geli warqad", desc: "Shid daabacaha oo geli giraan warqad kulul ah — Raad wuxuu taageeraa labadaba 58mm iyo 80mm." },
    { title: "Shid Bluetooth taleefankaaga", desc: "Shid Bluetooth oo daabacaha ku hay laba mitir gudahood inta aad isku xidhayso." },
    { title: "Isku xidh daabacaha", desc: "Fur dejimaha Bluetooth ee taleefankaaga oo la xidh daabacaha. Haddii PIN la weydiiyo, badanaa waa 0000 ama 1234." },
    { title: "Ku xidh Raad gudihiis", desc: "Raad dhexdiisa, aad Dejimaha → Daabace → Ku dar daabace, kadibna ka dooro aaladdaada liiska aaladaha la xidhay." },
    { title: "Daabac rasiid tijaabo ah", desc: "Taabo Daabac tijaabo. Marka uu si nadiif ah u daabaco, iib kastaa wuxuu si toos ah u daabici karaa rasiid — ama markaad rabto." },
  ],
};

const TIPS: Record<string, [string, string, string][]> = {
  en: [
    ["bx-search-alt", "Printer not showing?", "Re-pair it from your phone's Bluetooth settings, then reopen Add printer in Raad."],
    ["bx-text", "Text looks garbled?", "Make sure the paper width in Settings (58 or 80mm) matches your printer."],
    ["bx-battery", "Stops mid-shift?", "Keep the printer charged and within Bluetooth range of the phone."],
  ],
  so: [
    ["bx-search-alt", "Daabacuhu ma muuqdo?", "Dib uga xidh dejimaha Bluetooth ee taleefankaaga, kadibna dib u fur Ku dar daabace Raad."],
    ["bx-text", "Qoraalku wuu qasan yahay?", "Hubi in ballaca warqadda ee Dejimaha (58 ama 80mm) uu u dhigmo daabacahaaga."],
    ["bx-battery", "Wuu joojiyaa shifka dhexdiisa?", "Daabacaha ku hay korontada iyo gudaha xayiraadda Bluetooth ee taleefanka."],
  ],
};

const ZADIG: Record<string, Step[]> = {
  en: [
    { title: "Get Zadig", desc: "Go to zadig.akeo.ie and download it. It's a single .exe — no install needed. Just run it, and allow it through any admin prompt." },
    { title: "Plug in the printer", desc: "Connect your thermal printer by USB and power it on before the next steps." },
    { title: "Show all devices", desc: "In Zadig, open the Options menu → click List All Devices (it should get a checkmark). This is essential — without it your printer won't appear in the list." },
    { title: "Pick your printer from the dropdown", desc: "The dropdown now lists everything. Find your thermal printer — it may show as “Thermal Printer”, a generic “USB Printing Support”, or a model code. Read the warning below before you select it." },
    { title: "Set the target driver to WinUSB", desc: "On the right there's a box showing the target driver with a green arrow. Make sure it reads WinUSB — if there's an up/down arrow, set it to WinUSB." },
    { title: "Replace the driver", desc: "Click Replace Driver (it may say Install Driver if there's none yet) and confirm any prompt. It takes 10–30 seconds — wait for the success message." },
    { title: "Re-test in Raad", desc: "Unplug and replug the printer, reload pos.raadapp.com, open the Printer tab, click USB and pick the printer. It should now open without the access-denied error — then click Test print." },
  ],
  so: [
    { title: "Hel Zadig", desc: "Aad zadig.akeo.ie oo soo deji. Waa hal .exe — rakibaad uma baahna. Kaliya socodsii, oo u ogolow wax kasta oo admin ah." },
    { title: "Ku xidh daabacaha", desc: "Ku xidh daabacahaaga kulul USB oo shid ka hor tallaabooyinka xiga." },
    { title: "Muuji dhammaan aaladaha", desc: "Zadig dhexdiisa, fur menu-ga Options → guji List All Devices (waa inuu calaamad helo). Tani waa lama huraan — la'aanteed daabacahaagu ma muuqan doono." },
    { title: "Ka dooro daabacaha liiska hoos-u-dhaca", desc: "Liisku hadda wuxuu liisgeliyaa wax kasta. Hel daabacahaaga kulul — waxa laga yaabaa inuu u muuqdo “Thermal Printer”, “USB Printing Support”, ama kood moodel. Akhri digniinta hoose ka hor inta aanad dooran." },
    { title: "U deji darawalka bartilmaameedka WinUSB", desc: "Dhinaca midig waxaa jira sanduuq muujinaya darawalka bartilmaameedka oo leh fallaadh cagaaran. Hubi inuu akhrinayo WinUSB — haddii ay jirto fallaadh kor/hoos, u deji WinUSB." },
    { title: "Beddel darawalka", desc: "Guji Replace Driver (waxa laga yaabaa inuu dhaho Install Driver haddii mid jiri waayo) oo xaqiiji wax kasta. Wuxuu qaataa 10–30 ilbiriqsi — sug fariinta guusha." },
    { title: "Dib ugu tijaabi Raad", desc: "Ka bixi oo dib ku xidh daabacaha, dib u cusbooneysii pos.raadapp.com, fur tab-ka Printer, guji USB oo dooro daabacaha. Hadda waa inuu furmaa khalad-diidmo la'aan — kadibna guji Test print." },
  ],
};

type Note = { variant: "warn" | "tip" | "info"; icon?: string; title: string; body: string };
const CALLOUTS: Record<string, Note[]> = {
  en: [
    { variant: "warn", title: "Select the printer — and nothing else", body: "This is the one step to be careful on. Replacing the driver on the wrong device — a mouse, keyboard, Wi-Fi adapter, or USB hub — will break it. Not sure which entry is the printer? Unplug it, note what disappears from the list, plug it back in, and select the entry that reappears." },
    { variant: "tip", title: "Dropdown empty? Turn on “List All Devices”", body: "If the dropdown is empty, you haven't enabled it yet. Open Options → List All Devices (it should get a checkmark), then reopen the dropdown. Still empty? Unplug the printer, watch the list, plug it back in, and select the entry that appears." },
    { variant: "warn", icon: "bx-error-circle", title: "Saw “Driver Installation: SUCCESS” with an empty dropdown?", body: "Zadig may have applied WinUSB to whatever was selected. First, check your mouse, keyboard, and other USB devices still work normally. If something broke, reverse it: open Device Manager → find the device → Uninstall device → then unplug and replug it to restore the original driver." },
    { variant: "info", icon: "bx-info-circle", title: "Good to know", body: "Once WinUSB is installed, Windows' normal printing for this printer is replaced — it becomes browser-only. For a dedicated POS receipt printer that's exactly what you want. But if you also print to this printer from Word or other apps, don't do this — or reverse it later via Device Manager → uninstall device → replug to restore the default driver." },
  ],
  so: [
    { variant: "warn", title: "Dooro daabacaha — wax kalena ha dooran", body: "Tani waa tallaabada keliya ee in laga taxaddaro. Beddelka darawalka aalad qaldan — jiir, kiiboor, qalab WiFi, ama hub USB — wuu jebin doonaa. Ma hubtid kaas oo ah daabacaha? Ka bixi, ogow waxa liiska ka baxa, dib ku xidh, oo dooro shayga dib u soo muuqda." },
    { variant: "tip", title: "Liisku waa madhan yahay? Shid “List All Devices”", body: "Haddii liisku madhan yahay, weli ma shidin. Fur Options → List All Devices (waa inuu calaamad helo), kadibna dib u fur liiska. Weli madhan? Ka bixi daabacaha, eeg liiska, dib ku xidh, oo dooro shayga soo muuqda." },
    { variant: "warn", icon: "bx-error-circle", title: "Ma aragtay “Driver Installation: SUCCESS” liis madhan?", body: "Zadig wuxuu laga yaabaa inuu WinUSB ku rakibay wax kasta oo la doortay. Marka hore, hubi in jiirkaaga, kiiboorkaaga, iyo aaladaha kale ee USB ay weli si caadi ah u shaqeynayaan. Haddii wax jabay, dib u celi: fur Device Manager → hel aaladda → Uninstall device → kadibna ka bixi oo dib ku xidh si aad u soo celiso darawalka asalka ah." },
    { variant: "info", icon: "bx-info-circle", title: "Wax wanaagsan in la ogaado", body: "Marka WinUSB la rakibo, daabacaadda caadiga ah ee Windows ee daabacahan waa la beddelaa — wuxuu noqdaa browser-keliya. Daabace rasiid POS oo gaar ah taasi waa waxaad doonayso. Laakiin haddii aad sidoo kale uga daabacto daabacahan Word ama abyo kale, ha samayn — ama dib u celi Device Manager → uninstall device → dib u xidh si aad u soo celiso darawalka caadiga ah." },
  ],
};

export default function ThermalGuideBody() {
  const { locale, ts } = useI18n();
  const steps = STEPS[locale] ?? STEPS.en;
  const tips = TIPS[locale] ?? TIPS.en;
  const zadig = ZADIG[locale] ?? ZADIG.en;
  const callouts = CALLOUTS[locale] ?? CALLOUTS.en;

  return (
    <>
      <PageHeader
        eyebrow={ts("Hardware · Thermal printer")}
        title={
          <>
            {ts("Set up your ")}
            <em>{ts("thermal printer.")}</em>
          </>
        }
        desc={ts("Connect a Bluetooth receipt printer to Raad in about a minute — here's exactly how.")}
      />

      <section className="px-[48px] max-md:px-[20px]">
        <div className="reveal mx-auto max-w-[820px] overflow-hidden rounded-lg border border-line bg-surface">
          <div className="relative aspect-[16/9] bg-bg-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/reciept.png" alt={ts("Thermal printer")} className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="px-[48px] py-[70px] max-md:px-[20px] max-md:py-[50px]">
        <div className="mx-auto mb-[40px] max-w-[720px]">
          <div className="eyebrow reveal">{ts("How to connect")}</div>
          <h2 className="reveal font-display text-[clamp(26px,3.4vw,34px)] font-medium tracking-[-0.02em]">
            {ts("Pair it in five steps")}
          </h2>
        </div>
        <SetupSteps steps={steps} />
      </section>

      {/* Web POS / Zadig */}
      <section className="border-y border-line-soft bg-bg-2 px-[48px] py-[80px] max-md:px-[20px] max-md:py-[56px]">
        <div className="mx-auto max-w-[720px]">
          <div className="eyebrow reveal">{ts("On a computer · Web POS")}</div>
          <h2 className="reveal mb-[14px] font-display text-[clamp(26px,3.4vw,34px)] font-medium tracking-[-0.02em]">
            {ts("Using a USB printer on the Web POS")}
          </h2>
          <p className="reveal mb-[26px] text-[15px] text-ink-dim text-pretty">
            {ts("On a computer you run Raad from your browser at ")}
            <span className="rounded-[6px] border border-line bg-bg px-[6px] py-[2px] font-mono text-[13px] text-accent">
              pos.raadapp.com/settings
            </span>
            {ts(". To print to a USB thermal printer, the browser needs the WinUSB driver — you install it once with a free tool called Zadig.")}
          </p>

          <div className="mb-[28px]">
            <Callout variant="info" title={ts("Before you start")}>
              {ts("You'll need a Windows PC, your thermal printer connected by USB, and about five minutes. You only do this once per printer.")}
            </Callout>
          </div>

          <SetupSteps steps={zadig} />

          <div className="mt-[30px] flex flex-col gap-[14px]">
            {callouts.map((c, i) => (
              <Callout key={i} variant={c.variant} icon={c.icon} title={c.title}>
                {c.body}
              </Callout>
            ))}
          </div>
        </div>
      </section>

      {/* troubleshooting */}
      <section className="px-[48px] pb-[110px] max-md:px-[20px] max-md:pb-[80px]">
        <div className="mx-auto mb-[28px] max-w-content">
          <div className="eyebrow reveal">{ts("Troubleshooting")}</div>
        </div>
        <div className="reveal-stagger mx-auto grid max-w-content grid-cols-3 gap-[16px] max-[1100px]:grid-cols-1">
          {tips.map(([icon, t, d]) => (
            <div key={t} className="rounded-lg border border-line bg-surface p-[24px]">
              <div className="mb-[14px] grid h-[42px] w-[42px] place-items-center rounded-[12px] bg-accent-soft text-[20px] leading-none text-accent">
                <i className={`bx ${icon}`} />
              </div>
              <h4 className="mb-[6px] font-display text-[16px] font-semibold">{t}</h4>
              <p className="text-[13.5px] text-ink-dim text-pretty">{d}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-[34px] max-w-content">
          <Link href="/hardware" className="inline-flex items-center gap-[7px] text-[14px] text-ink-dim transition-colors hover:text-accent">
            <i className="bx bx-left-arrow-alt text-[18px]" /> {ts("Back to hardware")}
          </Link>
        </div>
      </section>

      <SupportCta />
    </>
  );
}
