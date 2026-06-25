// Somali translations for the documentation articles, keyed by slug. The
// structure mirrors lib/docs.ts (title, description, sections → blocks); the
// localizer swaps these in when locale is "so".

import type { DocSection } from "./docs";

export type DocSO = {
  title: string;
  description: string;
  sections: DocSection[];
};

export const DOCS_SO: Record<string, DocSO> = {
  "getting-started": {
    title: "Bilowga Raad POS",
    description:
      "Rakib Raad, samee akoonkaaga, oo samee iibkaaga ugu horreeya wax ka yar shan daqiiqo, tababar looma baahna.",
    sections: [
      {
        heading: "Rakib abka",
        blocks: [
          { type: "p", text: "Raad wuxuu ku shaqeeyaa taleefanka ama tablet-ka Android ee aad hore u haysatay, iyo kombuyuutar kasta dashboard-ka web. Milkiilayaasha dukaanka badidood waxay ku bilaabaan mobile, kadibna waxay ku daraan Web POS-ka desktop ee miiska weyn." },
          {
            type: "steps",
            items: [
              { title: "Soo deji Raad", desc: "Ka soo deji Raad Play Store, waa soo-dejin yar oo ilbiriqsiyo ku rakibanta." },
              { title: "Fur oo iskudiiwaangeli", desc: "Samee akoonkaaga iimaylkaaga iyo furaha sirta ah." },
              { title: "Deji dukaankaaga", desc: "Ku dar magaca ganacsigaaga oo dooro nooca ganacsiga si Raad uu abka kuugu hagaajiyo sida aad u iibiso." },
            ],
          },
        ],
      },
      {
        heading: "Samee iibkaaga ugu horreeya",
        blocks: [
          { type: "p", text: "Ku dar alaab ama laba, fur shaashadda iibka, taabo alaabta gaariga, qaado lacagta, oo xidh iibka. Taasi waa wareegga oo dhan, laga bilaabo rakibaad ilaa rasiidka ugu horreeya qiyaastii shan daqiiqo." },
          { type: "note", variant: "tip", title: "Talo", text: "Uma baahnid sawir-akhriste barcode si aad u bilowdo. Ku dar alaab gacanta hadda, oo sawir koodhadhka markaad diyaar tahay." },
        ],
      },
    ],
  },
  "set-up-business": {
    title: "Deji astaanta ganacsigaaga",
    description:
      "Habayso magaca dukaankaaga, nooca ganacsiga, lacagta, iyo faahfaahinta rasiidka si Raad ugu habboonaado sida aad dhab ahaan u iibiso.",
    sections: [
      {
        heading: "Nooca ganacsiga & dejimo caqli leh",
        blocks: [
          { type: "p", text: "Nooca ganacsigaagu waxbadan buu ka sameeyaa calaamadaynta dukaankaaga, wuxuu hagaajiyaa abka oo dhan. Raad wuxuu u isticmaalaa inuu ku shaandheeyo noocyada cabbirka aad aragto oo uu doorto dejimo lacag-bixin oo macquul ah, sidaas darteed boutique waligeed ma arko 'Litir' iyo hilibleeyna wuxuu marka hore arkaa 'KG' iyo 'Garaam'." },
        ],
      },
      {
        heading: "Faahfaahinta rasiidka & dukaanka",
        blocks: [
          { type: "p", text: "Deji magaca, faahfaahinta xidhiidhka, iyo qoraalka hoose ee ka muuqda rasiidhada la daabaco iyo kuwa dijitaalka ah. Faahfaahintaan ayaa meel kasta dib loo isticmaalaa, rasiidho, warbixino, iyo fariimaha macaamiisha." },
          { type: "list", items: ["Magaca dukaanka iyo lambarka xidhiidhka", "Madaxa rasiidka iyo qoraal mahadnaq", "Lacagta iyo dejimaha canshuurta"] },
        ],
      },
    ],
  },
  "add-products": {
    title: "Ku dar alaab oo sawir barcode",
    description:
      "Ku dar alaab adigoo sawiraya barcode-keeda ama gacanta ku qoraya, oo hel shay kasta degdeg adigoo raadinaya.",
    sections: [
      {
        heading: "Ku dar alaab",
        blocks: [
          { type: "p", text: "Alaab kastaa waxay leedahay magac, qiime, iyo cabbir. Mid waad ku dari kartaa sawirka barcode-keeda, Raad wuxuu akhriyaa koodhadhka 1D iyo 2D, ama adigoo qoraya faahfaahinta alaabta aan barcode lahayn, sida khudaarta ama alaabta gacan-sameyska ah." },
          {
            type: "steps",
            items: [
              { title: "Sawir ama taabo Alaab cusub", desc: "Sawir barcode si aad u buuxiso koodhka, ama ka bilow alaab maran." },
              { title: "Geli faahfaahinta", desc: "Ku dar magac, qiime iib, qiime custe (warbixinta faa'iidada), iyo cabbirka." },
              { title: "Keydi", desc: "Alaabtu hadda waa diyaar in la iibiyo waxaana lagu raacaa bakhaarka." },
            ],
          },
        ],
      },
      {
        heading: "Hel alaab degdeg ah",
        blocks: [
          { type: "p", text: "Lacag-bixinta, ku raadi magac ama kood, natiijooyinkuna isla markiiba way muuqdaan, xataa kumannaan shay. Marka sawir-akhriste qalab ahi shaqeeyo, dhacdadu waxay ka gudubtaa shaashadda si toos ah si ay u hesho oo ay u safto nooca alaabta saxda ah, lacag-bixin ilbiriqsiyo ah." },
          { type: "note", variant: "tip", title: "Kamarad ama akhriste", text: "Isticmaal kamaradka taleefankaaga sawir-akhriste ahaan, ama ku xidh akhriste USB / Bluetooth si xawaare leh miisaska mashquulka ah." },
        ],
      },
    ],
  },
  "bulk-import": {
    title: "Ku dar alaab si wadar ah",
    description:
      "Si dhakhso ah u dhis liis dhammaystiran adigoo hal mar ku daraya alaab badan ama soo dejinaya liis weyn oo SKU ah.",
    sections: [
      {
        heading: "Ku dar dhowr hal mar",
        blocks: [
          { type: "p", text: "Halkii aad keydin lahayd alaab mid mid, saf dhowr hal socod oo wada keydi. Waa habka ugu dhakhsaha badan ee aad u geliso shelef ama gaadiid adigoon hawlgalkaaga jebin." },
        ],
      },
      {
        heading: "Soo dejiso liis wadar ah",
        blocks: [
          { type: "p", text: "Dukaamada leh boqolaal ama kumannaan SKU, soo dejiso liiska oo dhan hal mar halkii aad mid kasta ku qori lahayd. Tani waxay ku habboon tahay marka aad ka guurayso nidaam kale ama aad furayso laan cusub." },
          { type: "note", variant: "info", title: "Cabbirrada xusuusnow", text: "Deji cabbirka saxda ah ee alaab kasta markaad soo dejinayso, Raad wuxuu kaliya bixiyaa cabbirrada ku habboon nooca ganacsigaaga." },
        ],
      },
    ],
  },
  units: {
    title: "Cabbirrada & tirooyinka qaybaha ah",
    description:
      "Nidaamka 7-heer ee Raad wuxuu iibiyaa shay buuxa, miisaan, dareere, iyo dherer, mid walbana keypad-kiisa saxda ah.",
    sections: [
      {
        heading: "Nidaamka cabbirka 7-heer",
        blocks: [
          { type: "p", text: "Si ka duwan nidaamyada kaliya tira 'shay', Raad wuxuu taageeraa cabbirro qayb ah iyo kuwo kala go'an oo u dhigma sida dukaamadu dhab ahaan u iibiyaan, sidaas darteed waad iibin kartaa 3 xabbo, 1.45 KG, ama 2.5 mitir si sahlan." },
          {
            type: "list",
            items: [
              "Kala go'an (tirin): Xabbo, Sanduuq, Bac, tirinta tirooyinka buuxa oo leh kor-u-qaadid degdeg ah.",
              "Miisaan & dareere: KG, Garaam, Litir, keypad jajab ah ayaa kor u baxa qaddarrada qaybaha ah.",
              "Dherer: Mitir, gelid jajab oo sax ah oo loogu talagalay fiilo, maro, iyo wax kale.",
            ],
          },
        ],
      },
      {
        heading: "Shaandhaynta caqliga leh",
        blocks: [
          { type: "p", text: "Si shaashadda loo nadiifiyo, Raad wuxuu tusaa kaliya noocyada cabbirka ku habboon qaybta ganacsigaaga. Milkiilaha boutique waligeed ma arko 'Litir', hilibleeyna wuxuu kaliya arkaa 'KG' iyo 'Garaam', doorasho yar, khalad yar." },
        ],
      },
    ],
  },
  inventory: {
    title: "La soco bakhaarka & digniinaha alaab-yari",
    description:
      "Bakhaarku wuu is-tiriyaa waqtigaas iib kasta iyo aalad kasta, oo leh digniino ka hor inta aadan dhammaan.",
    sections: [
      {
        heading: "Alaab is-tirisa",
        blocks: [
          { type: "p", text: "Iib kastaa wuxuu cusbooneysiiyaa alaabtaada waqtigaas, tirin gacmeed la'aan. Sababtoo ah tirintu way is-waafaqsan tahay shaqaalaha iyo aaladaha, dhowr cashiir ayaa isku mar iibin kara iyada oo aan iib xad-dhaaf dhicin." },
        ],
      },
      {
        heading: "Ka hor istaag dhammaadka bakhaarka",
        blocks: [
          { type: "p", text: "U deji xad alaab-yari alaab kasta, Raadna wuxuu kuu digayaa ka hor inta aanu shaygu dhammaan, si aad u dalbato wakhtiga. Digniinaha dhammaadka bakhaarku waxay sidoo kale ka soo baxaan warbixinnadaada." },
          { type: "note", variant: "tip", title: "Ku xidh alaab-qeybiyayaal", text: "Marka alaabtu yaraato, si toos ah uga codso alaab-qeybiyayaal Raad ku jira, alaabta la helay si toos ah ayay ugu noqotaa tiradaada." },
        ],
      },
    ],
  },
  checkout: {
    title: "Samee iib lacag-bixinta",
    description:
      "Lacag-bixin dhakhso ah oo loogu talagalay miisaska mashquulka ah, furayaal qaybeed, keypad la qabsada, iyo raadin sawir degdeg ah.",
    sections: [
      {
        heading: "Loo dhisay xawaare",
        blocks: [
          { type: "p", text: "Shaashadda guriga waxaa loo qaabeeyay tafaariiq culus. Furayaal qaybeed oo caqli leh oo nooca YouTube ah (sida 'Khudaar furan') ayaa ku xidha caqliga cabbirka saxda ah, sidaas darteed cashiirku wuxuu taabtaa qaybaha halkii uu la legdami lahaa shaandhaynta cabbirka ceeriin." },
        ],
      },
      {
        heading: "Gelid la qabsata",
        blocks: [
          { type: "p", text: "Gelintu waxay la qabsataa shayga. Taabo alaab 'Xabbo' ah, tirin tiro buuxa ayaa soo baxda; taabo alaab 'KG' ah, keypad weyn oo jajab ah ayaa kor u baxa si dhakhso ah. Sawirka qalabku wuxuu ka gudbaa shaashadda si uu u safto nooca saxda ah." },
          {
            type: "steps",
            items: [
              { title: "Ku dar alaab", desc: "Sawir, raadi, ama taabo furayaasha qaybeed si aad u dhisto gaariga." },
              { title: "Qaado lacagta", desc: "Dooro cash ama deyn (dayn), ku dar dalacsiin ama canshuur kasta." },
              { title: "Xidh iibka", desc: "Daabac ama dir rasiidka, bakhaarka iyo warbixinnada isla markiiba way cusbooneysiiyaan." },
            ],
          },
        ],
      },
    ],
  },
  "discounts-tax": {
    title: "Ku dar dalacsiin & canshuur",
    description:
      "Ku dar dalacsiin boqolkiiba ama qadar go'an oo si nadiif ah u dabaq canshuurta, heer-sadar ama gaariga oo dhan.",
    sections: [
      {
        heading: "Dalacsiimo",
        blocks: [
          { type: "p", text: "Ku dar dalacsiin boqolkiiba ama qadar go'an hal sadar ama dalabka oo dhan. Wadarku wuu dib u xisaabiyaa toos, sidaas darteed nambarka shaashadda waa nambarka macmiilku bixiyo." },
        ],
      },
      {
        heading: "Canshuur",
        blocks: [
          { type: "p", text: "Hal mar deji sharciyada canshuurtaada, Raadna wuxuu si nadiif ah ugu dabaqaa iibka, si rasiidhada iyo warbixinnadu u sax ahaadaan oo sharci u ahaadaan." },
        ],
      },
    ],
  },
  receipts: {
    title: "Daabac oo dir rasiidho",
    description:
      "Daabac rasiidho Bluetooth ama USB adigoo isticmaalaya ESC/POS, ama dir rasiid dijital ah WhatsApp ama SMS.",
    sections: [
      {
        heading: "Daabac iib kasta",
        blocks: [
          { type: "p", text: "Raad wuxuu ku daabacaa luqadda amarka ESC/POS wuxuuna la shaqeeyaa daabacayaasha caadiga ah 58mm Bluetooth iyo USB (sida Niyama BT-58). Rasiidhku wuxuu daabacmaa isla marka iibku xidhmo, ama markaad rabto taariikhda dalabka." },
        ],
      },
      {
        heading: "Ka tag warqadda",
        blocks: [
          { type: "p", text: "Ma doorbidaa warqad la'aan? Beddelkeeda dir rasiid dijital ah WhatsApp ama SMS. Way ka dhakhso badan tahay, ka jaban tahay, oo macaamiisha siisaa nuqul aysan lumin doonin." },
          { type: "note", variant: "info", title: "Dejinta kombuyuutarka", text: "Web POS-ka, daabace USB wuxuu u baahan yahay tallaabo hal-mar ah oo darawal WinUSB ah. Hagaha daabacaha kulul ayaa kugu hagaya." },
        ],
      },
    ],
  },
  refunds: {
    title: "Soo-celin & taariikhda dalabka",
    description:
      "Macaamil kastaa waa la keydiyaa. Dib u daabac rasiidho oo samee soo-celin hal-taabo ah oggolaansho maamule.",
    sections: [
      {
        heading: "Diiwaan dhammaystiran",
        blocks: [
          { type: "p", text: "Raad wuxuu hayaa taariikh dijital ah oo dhammaystiran oo macaamil kasta ah, sidaas darteed waligaa rasiid ma lumin doontid. Fur iib kasta oo hore si aad u aragto faahfaahintiisa ama aad dib u daabacdo." },
        ],
      },
      {
        heading: "Soo-celin, xakameysan",
        blocks: [
          { type: "p", text: "Samee soo-celin hal taabo. Sababtoo ah soo-celintu waa xasaasi, waxay u baahan tahay oggolaansho maamule, taasoo ka ilaalinaysa soo-celin khalad ah ama aan la oggolayn." },
          { type: "note", variant: "tip", title: "Cidda soo-celin karta", text: "Cashiirku wuxuu codsan karaa soo-celin; maamuluhu wuu oggolaadaa. Eeg doorarka shaqaalaha si aad u ogaato sida oggolaanshuhu u shaqeeyo." },
        ],
      },
    ],
  },
  "sell-on-credit": {
    title: "Iibi deyn ahaan (Dayn)",
    description:
      "Xidh iib deyn ahaan, ku xidh macmiil, oo hay diiwaan nadiif ah oo hadhaag kasta.",
    sections: [
      {
        heading: "Deyn lacag-bixinta",
        blocks: [
          { type: "p", text: "Marka macmiilku goor dambe bixinayo, dhammaystir lacag-bixinta deyn (dayn) ahaan halkii cash. Socod gaar ah ma jiro, waa doorasho lacag-bixin oo dhammaadka iib kasta ah." },
        ],
      },
      {
        heading: "Ku xidhan macmiilka",
        blocks: [
          { type: "p", text: "Iib kasta oo deyn ah waxa lagu xidhaa macmiil oo leh taariikh socota oo buuxda, sidaas darteed had iyo jeer waad ogtahay cidda waxa ku leh iyo ilaa goorma. Diiwaangeli bixin qayb ah, Raadna wuxuu kuu raacaa hadhaaga." },
        ],
      },
    ],
  },
  "dayn-management": {
    title: "Maamul deymaha buugga Dayn",
    description:
      "Arag hadhaag kasta oo buug keliya, diiwaangeli bixino, oo dir xasuusin si dhakhso ah loogu soo ururiyo.",
    sections: [
      {
        heading: "Hal buug oo cad",
        blocks: [
          { type: "p", text: "Buugga Dayn wuxuu beddelaa buugga deynta warqadda. Arag hadhaaga macmiil kasta hal muuqaal kala soocan, oo leh taariikhda buuxda ee iib deyn iyo bixin kasta macmiil-kasta ah." },
        ],
      },
      {
        heading: "Si dhakhso ah u soo ururi",
        blocks: [
          { type: "p", text: "Dir xasuusin edeb leh WhatsApp ama SMS hal taabo. Ogaanshaha cidda aad la xidhiidho, iyo goorta, wuxuu lacagta socodsiiyaa halkii ay shelef ku fadhiisan lahayd." },
        ],
      },
    ],
  },
  "staff-roles": {
    title: "Doorarka shaqaalaha & oggolaanshaha",
    description:
      "Sii shaqaale kasta gelitaanka saxda ah adigoo isticmaalaya doorarka maamule iyo cashiir, oggolaansho, iyo diiwaan dhaqdhaqaaq.",
    sections: [
      {
        heading: "Maamule iyo cashiir",
        blocks: [
          { type: "p", text: "Khasaaraha iyo lacag-maaraynta xun waxay ka bilaabmaan gelitaan furan. Raad wuxuu isticmaalaa doorar kala-soocan: cashiirka waxaa ku xaddidan habaynta iibka aasaasiga ah, halka maamuluhu uu leeyahay awood sare oo uu ku ogolaado tirtirid gaari, soo-celin, iyo arag faa'iidooyin xasaasi ah." },
        ],
      },
      {
        heading: "Oggolaansho iyo diiwaanno",
        blocks: [
          { type: "p", text: "Ficillada xasaasiga ah waxay u baahan yihiin oggolaansho maamule, ficil kastana waxa lagu diiwaangeliyaa shaqaalaha sameeyay, daah-furnaan hawleed buuxda, si aanu waxba u dhicin diiwaan la'aan." },
          { type: "note", variant: "info", title: "Astaan Pro", text: "Maamulka shaqaaluhu waa qayb ka mid ah heerka Raad Pro, waxaana ku jira tijaabada 14-maalmood ee bilaashka ah." },
        ],
      },
    ],
  },
  expenses: {
    title: "La soco kharashka & isku-celi sanduuqa",
    description:
      "Diiwaangeli kharash ku xidhan xisaabta sanduuqa lacagta, oo leh qaybo qasab ah iyo warbixinno luminta faa'iidada.",
    sections: [
      {
        heading: "Kharashku waa qayb ka mid ah xisaabta",
        blocks: [
          { type: "p", text: "Raad gudihiis, kharashku maaha kaliya liis qoraal ah, waa lagu xidhay xisaabta shifkaaga, sidaas darteed sanduuqaagu had iyo jeer wuu is-celiyaa:" },
          { type: "list", items: ["Lacag Bilow + Iib Cash − Kharash La Diiwaangeliyay = Lacagta Sanduuqa La Filayo"] },
        ],
      },
      {
        heading: "Qaybo & warbixin",
        blocks: [
          { type: "p", text: "Qaybo qasab ah, Gaadiid, Adeegyo, Gunno Shaqaale, iyo wax kale, ayaa suurtageliya warbixinno dhammaadka bisha ah oo luminta faa'iidada, kuwaas oo muujinaya halka lacagtu ka simbiriirixanayso. Marka la xidho, isbarbardhig lacagta la filayo iyo midka dhabta ah si aad shif kasta u isku-celiso." },
        ],
      },
    ],
  },
  reports: {
    title: "Warbixino & falanqayn",
    description:
      "La soco faa'iidada saafiga ah, alaabta ugu iibka badan, iyo digniinaha bakhaarka toos, dashboard loo habeeyay door kasta.",
    sections: [
      {
        heading: "Falanqayn toos ah",
        blocks: [
          { type: "p", text: "Ka tag miiska oo weli fahan ganacsigaaga. La soco faa'iidada saafiga ah, alaabta ugu iibka badan, iyo digniinaha dhammaadka bakhaarka isla markiiba mobile ama web, oo leh soo-koobid maalin, toddobaad, iyo bil oo aad u dejin karto PDF iyo Excel." },
        ],
      },
      {
        heading: "Shaashad door kasta",
        blocks: [
          { type: "p", text: "Doorar kala duwan waxay arkaan dashboard kala duwan, mid walba loo dhisay shaqada:" },
          {
            type: "list",
            items: [
              "Admin, gelid milkiile-heer ah oo warbixin kasta, dejin, iyo xukun.",
              "Maamule, oggolaansho, shaqaale, kharash, iyo faa'iido.",
              "Cashiir, aragti lacag-bixin oo dhakhso ah oo aan waxba ka hor istaagayn.",
            ],
          },
        ],
      },
    ],
  },
  suppliers: {
    title: "Ka dalbo alaab alaab-qeybiyayaal",
    description:
      "Ka codso alaab ganacsiyo kale oo Raad ku jira oo ka dhig in gaadhista la helay ay u qulqusho bakhaarkaaga.",
    sections: [
      {
        heading: "Silsiladda sahaydaada, isku xidhan",
        blocks: [
          { type: "p", text: "Dib u buuxso adigoon abka ka bixin. Si toos ah uga codso alaab alaab-qeybiyayaal, jumlad-iibiyayaal iyo qeybiyayaal, sidoo kale Raad ku shaqeeya, oo la soco alaabta la codsaday iyo gaadhista soo socota hal meel." },
        ],
      },
      {
        heading: "Si toos ah bakhaarka",
        blocks: [
          { type: "p", text: "Marka alaabtu timaado oo la helo, waxay si toos ah u gashaa tirinta bakhaarkaaga toos ah, sidaas darteed shelefkaaga iyo nambarradaadu had iyo jeer way is-waafaqaan." },
        ],
      },
    ],
  },
  "web-pos": {
    title: "Isticmaal Raad kombuyuutar (Web POS)",
    description:
      "Ka maamul miiska weyn dashboard web ah oo ku yaal pos.raadapp.com, oo si toos ah ula socda abka mobile.",
    sections: [
      {
        heading: "Dashboard desktop",
        blocks: [
          { type: "p", text: "Raad wuxuu ku shaqeeyaa aaladaha mobile ee shaqaalaha sagxadda iyo dashboard web oo xoogan oo loogu talagalay hawlaha miiska weyn. Fur pos.raadapp.com browser si aad miiska ugu maamusho shaashad weyn, oo leh isla xogta toos ah ee abka." },
        ],
      },
      {
        heading: "Qalabka Web POS-ka",
        blocks: [
          { type: "p", text: "Ku xidh daabacayaal iyo akhristayaal USB Web POS-ka. Daabace USB kulul wuxuu u baahan yahay tallaabo hal-mar ah oo darawal WinUSB ah browser-ka; akhristayaasha barcode ee qaab kiiboor (HID) ah isla markiiba way shaqeeyaan." },
          { type: "note", variant: "tip", title: "Hagayaasha dejinta", text: "Raac hagayaasha daabacaha kulul iyo akhriste barcode ee bogga Qalabka si aad u hesho tilmaamo sax ah oo tallaabo-tallaabo ah." },
        ],
      },
    ],
  },
};
