// Somali translations for the feature catalog, keyed by slug. Structure
// mirrors lib/features.ts; the localizer merges these over the English base.

export type FeatureSO = {
  tag?: string;
  title?: string;
  short?: string;
  lead?: string;
  points?: { title: string; desc: string }[];
  note?: string;
  relatedLabel?: string;
};

export const FEATURES_SO: Record<string, FeatureSO> = {
  "barcode-products": {
    tag: "Liiska alaabta",
    title: "Ku dar alaab barcode & raadi",
    short: "Sawir barcode si aad u darto ama u hesho alaab degdeg ah, ama magaca ku raadi.",
    lead: "Dhis oo fiiri liiska alaabtaada xawaaraha sawirka. Ku dar alaab barcode-keeda, kadibna degdeg u hel shay kasta.",
    points: [
      { title: "Sawir si aad u darto", desc: "Sawir barcode 1D ama 2D si aad u abuurto alaab cusub ama u soo bandhigto mid jirta, qorid la'aan." },
      { title: "Raadin degdeg ah", desc: "Ku raadi magaca alaabta ama koodhka. Natiijooyinku degdeg bay yihiin, xataa kumannaan shay." },
      { title: "Iskudiyaarinta lacag-bixinta", desc: "Sawirku si toos ah ayuu u diyaariyaa oo gaariga ku daraa shayga saxda ah, lacag-bixintana ilbiriqsiyo ka dhigaa." },
      { title: "Kamarad ama akhriste", desc: "Isticmaal kamaradka taleefankaaga, ama ku xidh akhriste USB / Bluetooth si xawaare leh." },
    ],
    relatedLabel: "Eeg dejinta akhriste barcode",
  },
  "bulk-products": {
    tag: "Liiska alaabta",
    title: "Ku dar alaab badan oo wadar ah",
    short: "Si dhakhso ah u dhis liiskaaga, ku dar alaab badan hal mar halkii mid mid.",
    lead: "Buuxinta dukaan oo dhan maaha inay maalin qaadato. Ku dar alaab kooxo ah, halkaas oo cabbirro caqli leh ay hagaajiyaan.",
    points: [
      { title: "Ku dar alaab badan", desc: "Saf alaab badan hal socod gudihiis oo wada keydi." },
      { title: "Soo-dejin wadar ah", desc: "Soo dejiso liis weyn hal mar, ku habboon dukaamada leh kumannaan SKU." },
      { title: "Nidaamka 7-heer", desc: "Mid kasta sii cabbirkiisa saxda ah: Xabbad / Sanduuq / Bac, KG / Garaam / Litir, ama Mitir." },
      { title: "Shaandhaynta caqliga leh", desc: "Raad wuxuu tusaa kaliya cabbirrada ku habboon ganacsigaaga, foomkuna wuu nadiif ahaadaa." },
    ],
  },
  "sell-on-debt": {
    tag: "Lacag-bixin",
    title: "Iibi deyn ahaan (dayn)",
    short: "Iib u xidh deyn ahaan oo macmiil ku xidh, buugga deynta warqadda, beddel.",
    lead: "Iibi deyn adigoo aan waxba lumin. Iib kasta oo dayn ah waxa lagu diiwaangeliyaa macmiil, diyaar u ah soo-celin.",
    points: [
      { title: "Iib deyn ah", desc: "Dhammaystir lacag-bixin deyn ah marka macmiilku goor dambe bixinayo." },
      { title: "Macmiil ku xidhan", desc: "Iib kasta oo deyn ah waxa lagu xidhaa macmiil oo leh taariikh socota oo buuxda." },
      { title: "Bixin qayb ah", desc: "Diiwaangeli bixin qayb ah, Raadna wuxuu si toos ah u xisaabiyaa hadhaaga." },
      { title: "Xasuusin WhatsApp", desc: "Hal taabo ku dir xasuusin edeb leh si aad dhaqso ugu soo celiso lacagta." },
    ],
  },
  "debt-management": {
    tag: "Lacag-bixin",
    title: "Maamulka deynta (dayn)",
    short: "Buug dhammaystiran oo muujinaya cidda waxa ku leh, iyo qalabka lagu soo ururiyo.",
    lead: "Qoraallada kala firidhsan u beddel hal buug oo cad. Arag hadhaag kasta oo la soco wakhtiga saxda ah.",
    points: [
      { title: "Buugga dayn furan", desc: "Arag hadhaaga macmiil kasta oo hal muuqaal kala soocan." },
      { title: "Taariikh buuxda", desc: "Taariikh macmiil-kasta ah oo iib deyn iyo bixin kasta ah." },
      { title: "Xasuusin hal-taabo", desc: "Ku xasuusi macaamiisha WhatsApp ama SMS hal taabo." },
      { title: "Si dhakhso ah u soo celi", desc: "Ogow cidda aad la xidhiidho si lacagtu u socoto." },
    ],
  },
  "staff-roles": {
    tag: "Kooxda",
    title: "Doorarka shaqaalaha & dhaqdhaqaaqa",
    short: "Oggolaansho adag iyo diiwaan dhaqdhaqaaq oo buuxa ayaa lacagta iyo alaabta xakameeya.",
    lead: "Khasaaraha iyo lacag-maaraynta xun waxay ka bilaabmaan gelitaan furan. Raad wuxuu ku xidhaa doorar cad iyo diiwaanno.",
    points: [
      { title: "Maamule iyo cashiir", desc: "Cashiirku iibka qabtaa; maamuluhu ogolaadaa tirtirid, soo-celin, oo arkaa faa'iidada." },
      { title: "Oggolaansho", desc: "Ficillada xasaasiga ah sida tirtirid iyo soo-celin waxay u baahan yihiin oggolaansho maamule." },
      { title: "Diiwaanka dhaqdhaqaaqa", desc: "Ficil kasta waxa lagu diiwaangeliyaa shaqaalaha sameeyay." },
      { title: "Shaqaale badan", desc: "Ku dar kooxdaada oo qof kasta sii gelitaanka uu u baahan yahay." },
    ],
    note: "Maamulka shaqaaluhu waa qayb ka mid ah heerka Raad Pro, waxaa ku jira tijaabada 14-maalmood ee bilaashka ah.",
  },
  "inventory-tracking": {
    tag: "Bakhaar",
    title: "La socodka bakhaarka",
    short: "Alaab is-tirisa oo waqtigaas ah, oo leh digniino ka hor inta aanad dhammaan.",
    lead: "Bakhaarku wuu sax ahaanayaa keligiis, iib kasta, shaqaale, iyo aalad walba.",
    points: [
      { title: "Heerar alaab oo waqtigaas ah", desc: "Iib kastaa wuxuu cusbooneysiiyaa alaabtaada waqtigaas, tirin gacmeed la'aan." },
      { title: "Digniin alaab-yari", desc: "Hel digniin ka hor inta aanu shaygu dhammaan, si aad u dalbato wakhtiga." },
      { title: "Cabbir buuxa & qayb", desc: "La soco Xabbado, ama qaybo KG, Litir, iyo Mitir oo sax ah." },
      { title: "Iib xad-dhaaf la'aan", desc: "Tiradu way is-waafaqaan si aanad u iibin wax aanad haynin." },
    ],
  },
  "reports-analytics": {
    tag: "Aragtiyo",
    title: "Warbixino & dashboard doorar",
    short: "Falanqayn toos ah, iyo shaashad gaar ah oo loo sameeyay door kasta.",
    lead: "Fahan ganacsigaaga hal eegmo, iyadoo dashboard loo sameeyay cidda eegaysa.",
    points: [
      { title: "Falanqayn toos ah", desc: "La soco faa'iidada saafiga ah, alaabta ugu iibka badan, iyo dhammaadka bakhaarka degdeg." },
      { title: "Maamulka dalabka", desc: "Taariikh dijital ah oo dhammaystiran, soo-celin hal-taabo iyo dib-u-daabacaad." },
      { title: "Warbixino la dejin karo", desc: "Soo-koobid maalin, toddobaad, iyo bil, oo loo dejin karo PDF iyo Excel." },
      { title: "Shaashadda Admin", desc: "Aragti milkiile-heer ah, dhammaan warbixinno, dejimo, iyo xukun buuxa." },
      { title: "Shaashadda Maamulaha", desc: "Oggolaansho, shaqaale, kharash, iyo faa'iido hal meel." },
      { title: "Shaashadda Cashiirka", desc: "Aragti lacag-bixin oo dhaqso ah oo aan waxba ka hor istaagayn." },
    ],
  },
  "receipt-printing": {
    tag: "Qalab",
    title: "Taageerada daabacaha rasiidka",
    short: "Daabac rasiidho degdeg ah Bluetooth ama USB adigoo isticmaalaya ESC/POS.",
    lead: "Macaamiisha sii rasiid isla marka iibku xidhmo, ama mid dijital ah u dir.",
    points: [
      { title: "Daabacaad ESC/POS", desc: "Wuxuu la shaqeeyaa daabacayaasha caadiga ah 58mm Bluetooth & USB (tusaale Niyama BT-58)." },
      { title: "Isla iibka", desc: "Rasiidhku si toos ah ayuu u daabacmaa marka aad iibka xidho." },
      { title: "Rasiidh dijital ah", desc: "Ka tag warqadda, u dir rasiidka WhatsApp ama SMS." },
      { title: "Web POS desktop", desc: "Ka daabac daabace USB kombuyuutar adigoo isticmaalaya darawalka WinUSB." },
    ],
    relatedLabel: "Eeg dejinta daabacaha kulul",
  },
  suppliers: {
    tag: "Shabakad",
    title: "Shabakadda alaab-qeybiyaha",
    short: "Ka codso alaab ganacsiyo kale oo Raad ku jira, silsiladda sahayda, isku xidhan.",
    lead: "Dib u buuxso adigoon abka ka bixin. Ka dalbo alaab-qeybiyayaal sidoo kale Raad ku jira oo arag inay bakhaarkaaga u qulqusho.",
    points: [
      { title: "Codso alaab", desc: "Si toos ah uga dalbo alaab alaab-qeybiyayaal Raad ku shaqeeya." },
      { title: "Ganacsi-ilaa-ganacsi", desc: "Ku xidhmo jumlad-iibiyayaal iyo qeybiyayaal shabakadda Raad ku jira." },
      { title: "La soco codsiyada", desc: "La soco alaabta la codsaday iyo gaadhista soo socota hal meel." },
      { title: "Si toos ah u cusbooneysii", desc: "Alaabta la helay waxay si toos ah u gashaa tirinta bakhaarkaaga." },
    ],
  },
  expenses: {
    tag: "Lacag",
    title: "Maamulka kharashka",
    short: "La soco lacag kasta oo baxda, si toos ah ugu xidhan sanduuqaaga lacagta.",
    lead: "Kharashku Raad gudihiis maaha kaliya liis, waa qayb ka mid ah xisaabta sanduuqaaga, si aan waxba u luminin.",
    points: [
      { title: "Xisaab sanduuq isku xidhan", desc: "Lacag Bilow + Iib Cash − Kharash = Lacagta Sanduuqa La Filayo." },
      { title: "Kharash qaybeysan", desc: "Qaybo qasab ah, Gaadiid, Adeegyo, Gunno Shaqaale, iyo wax kale." },
      { title: "Warbixin luminta faa'iidada", desc: "Warbixinno dhammaadka bisha ah oo muujinaya halka lacagtu ka simbiriirixanayso." },
      { title: "Isku-celinta shifka", desc: "Isbarbardhig lacagta la filayo iyo midka dhabta ah dhammaadka shif kasta." },
    ],
  },
  "discounts-tax": {
    tag: "Lacag-bixin",
    title: "Dalacsiin & canshuur",
    short: "Ku dar dalacsiin iyo canshuur si sax ah lacag-bixin kasta, mar kasta.",
    lead: "Bixi dalacsiin ama ku dar canshuur adigoon wadarta ka shakiyin, Raad ayaa xisaabta qabta.",
    points: [
      { title: "Maamulka dalacsiinta", desc: "Dalacsiin boqolkiiba ama qadar go'an, hal shay ama gaariga oo dhan." },
      { title: "Maaraynta canshuurta", desc: "Ku dabaqo sharciyada canshuurtaada si iib kastaa u sax ahaado." },
      { title: "Heer-shay ama gaari", desc: "Dabacsan, dalacsii hal sadar, ama dalabka oo dhan hal mar." },
      { title: "Wadar had iyo jeer sax ah", desc: "Wadarku wuxuu cusbooneysiiyaa si uu u muujiyo dalacsiin iyo canshuur kasta oo la dabaqay." },
    ],
  },
  "desktop-web-pos": {
    tag: "Madal",
    title: "Desktop & Web POS",
    short: "Taageero kombuyuutar buuxda, ka maamul miiska weyn dashboard web ah.",
    lead: "Shaqaalaha sagxadda Android, miiska weyn kombuyuutar, hal ganacsi, si fiican u wada socda.",
    points: [
      { title: "Dashboard web", desc: "Hawlaha miiska adigoo browser-ka ku jira pos.raadapp.com." },
      { title: "Madal-kala-duwan", desc: "Android shaqaalaha sagxadda, web miiska, isla xogta toos ah." },
      { title: "Qalab USB", desc: "Ku xidh daabacayaal iyo akhristayaal USB Web POS-ka hal-mar darawal ah." },
      { title: "Isku-xidhid waqtigaas", desc: "Iib, bakhaar, iyo shaqaale way isku xidhan yihiin aalad kasta, isla markiiba." },
    ],
    relatedLabel: "Eeg dejinta daabacaha desktop",
  },
};
