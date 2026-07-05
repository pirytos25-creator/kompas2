const stations = {
  self: {
    title: "Praca sobą, nie tylko narzędziami",
    tags: ["kompetencje osobiste", "relacja", "osadzenie"],
    lead: "Nagranie zaczyna się od ważnego przesunięcia: facylitacja nie jest wyłącznie zestawem technik. W trudnym momencie grupa widzi, czy osoba prowadząca stoi stabilnie w sobie.",
    tension: "Ryzyko: trzymanie się procedury wtedy, gdy proces potrzebuje człowieka, obecności i odczytania emocji.",
    practice: "Przed spotkaniem nazwij: gdzie są moje granice, co mnie zwykle wyprowadza, czego potrzebuję, żeby dobrze słuchać.",
    question: "Czy w tej sytuacji używam narzędzia, czy zasłaniam się narzędziem?"
  },
  goal: {
    title: "Cel jawny, realny i ukryty",
    tags: ["cel spotkania", "kontrakt", "elastyczność"],
    lead: "W materiale pojawia się rozróżnienie między planem spotkania a tym, co naprawdę dzieje się w grupie. Proces może mieć cel zapisany, cel realny i cel ukryty.",
    tension: "Ryzyko: grupa dyskutuje o jednym, ale napięcie dotyczy czegoś innego. Wtedy nawet dobry harmonogram robi się za ciasny.",
    practice: "Wróć do celu językiem procesu: „Zależy mi, żebyśmy sprawdzili, czy rozmawiamy jeszcze o tym, po co tu jesteśmy”.",
    question: "Jaki cel próbuję teraz ochronić: formalny, realny czy ukryty?"
  },
  state: {
    title: "Metafora państwa",
    tags: ["suwerenność", "granice", "dyplomacja"],
    lead: "Asertywność została pokazana jak państwo: ma suwerenność, granice celne, zasady wymiany i prawo do obrony. To model dużo szerszy niż samo mówienie „nie”.",
    tension: "Ryzyko: izolacja albo walka o pozycję udają asertywność, ale nie respektują suwerenności innych.",
    practice: "Zanim zareagujesz, rozdziel pytania: kim jestem w tej roli, co wpuszczam, na jakich zasadach i kiedy muszę bronić procesu.",
    question: "Czy moja granica jest dyplomacją, czy próbą wygrania?"
  },
  body: {
    title: "Ciało jako wczesny alarm",
    tags: ["dyskomfort", "automat", "granice osobiste"],
    lead: "Transkrypt mocno podkreśla, że ciało bywa szybsze niż świadoma myśl: napięcie, zacisk szczęk, złość albo zmęczenie mogą sygnalizować naruszenie granicy.",
    tension: "Ryzyko: automatycznie się zgadzam, a dopiero później noszę w sobie złość albo rozgrzebuję sytuację przez dwa dni.",
    practice: "Zatrzymaj się na trzech krokach: co czuję, skąd to się bierze, czego potrzebuję, żeby sytuacja się zmieniła.",
    question: "Czy moje ciało już wie coś, czego ja jeszcze nie nazwałem/nazwałam?"
  },
  authority: {
    title: "Autorytet i dominacja w grupie",
    tags: ["autorytet", "równość głosu", "ochrona procesu"],
    lead: "Wątek autorytetu powraca jako szczególnie praktyczny: silna osoba, nawet bez formalnej władzy, może przejąć przestrzeń i utrudnić udział innym.",
    tension: "Ryzyko: osoba prowadząca myli delikatność z wycofaniem, a grupa uczy się, że najbardziej pewny głos dostaje najwięcej miejsca.",
    practice: "Interweniuj przez potrzebę procesu: „Chcę zadbać, żeby pojawiły się też inne perspektywy, więc zatrzymam ten wątek”.",
    question: "Kogo chronię, gdy nie reaguję na dominację?"
  },
  belief: {
    title: "Przekonania, które dają prawo do reakcji",
    tags: ["proasertywność", "samouczenie", "formułki"],
    lead: "Końcówka materiału przenosi uwagę na przekonania. Same formułki nie wystarczą, jeśli w środku nie daję sobie prawa do granicy.",
    tension: "Ryzyko: wypowiadam poprawne zdanie, ale z napięcia wychodzi agresja albo prośba bez siły.",
    practice: "Zbuduj jedno zdanie wspierające rolę, np. „Mam prawo zatrzymać rozmowę, jeśli chronię możliwość udziału całej grupy”.",
    question: "Jakie przekonanie ma mnie wesprzeć, zanim otworzę usta?"
  }
};

const lessons = [
  {
    id: "foundation",
    title: "1. Fundament: praca sobą",
    subtitle: "Dlaczego narzędzia czasem nie wystarczają",
    thesis: "W transkrypcie najmocniej wraca myśl, że facylitacja jest pracą z ludźmi i relacją. Narzędzia są potrzebne, ale nie zastąpią osadzenia osoby prowadzącej.",
    learn: [
      "Kompetencje osobiste poprzedzają komunikacyjne i narzędziowe: najpierw wiem, co się we mnie dzieje, dopiero potem wybieram technikę.",
      "Osoba facylitująca na pewien czas przewodniczy sposobowi rozmowy, nawet jeśli nie przewodniczy merytorycznie.",
      "Uważne słuchanie bez samoświadomości może zamienić się w realizowanie planu mimo sygnałów z grupy."
    ],
    practice: "Przed spotkaniem zapisz trzy zdania: co jest moją rolą, co może mnie uruchomić, po czym poznam, że tracę osadzenie.",
    trap: "Mylenie profesjonalizmu z brakiem emocji. Materiał sugeruje odwrotnie: emocje trzeba czytać, nie udawać, że ich nie ma."
  },
  {
    id: "goals",
    title: "2. Cel: jawny, realny, ukryty",
    subtitle: "Jak nie zgubić procesu pod harmonogramem",
    thesis: "W rozmowie pojawia się napięcie między planem spotkania, kontraktem i tym, co grupa naprawdę wnosi do sali. Czasem proces formalnie dotyczy jednego, ale energia idzie gdzie indziej.",
    learn: [
      "Cel jawny to temat i program, który wszyscy widzą.",
      "Cel realny to to, co grupa faktycznie próbuje rozstrzygnąć w danym momencie.",
      "Cel ukryty bywa niezakomunikowany: interes, obawa, konflikt albo potrzeba, która steruje rozmową z tła."
    ],
    practice: "Kiedy rozmowa się rozjeżdża, zadaj sobie pytanie: czy bronię programu, czy celu procesu?",
    trap: "Trzymanie się zegarka może wyglądać profesjonalnie, ale bywa ucieczką przed realnym napięciem."
  },
  {
    id: "state",
    title: "3. Metafora państwa",
    subtitle: "Suwerenność, granice, dyplomacja, obrona",
    thesis: "Asertywność jest tu pokazana nie jako charakter, ale jako system decyzji. Państwo ma integralność, granice, zasady wymiany i prawo do obrony. Osoba prowadząca też.",
    learn: [
      "Suwerenność: mam prawo do własnych wartości, emocji, potrzeb i decyzji.",
      "Granice celne: świadomie decyduję, co wpuszczam, a czego nie akceptuję.",
      "Zasady wymiany: część reguł można negocjować, jeśli nadal chronią sens spotkania.",
      "Prawo do obrony: gdy granica jest ignorowana, interwencja jest częścią roli."
    ],
    practice: "Dla każdej trudnej sytuacji rozdziel cztery pytania: kim jestem w roli, co wpuszczam, na jakich zasadach, czego bronię.",
    trap: "Izolacjonizm albo agresywne forsowanie siebie mogą udawać asertywność, ale nie są dyplomacją."
  },
  {
    id: "body",
    title: "4. Diagnostyka: ciało i automat",
    subtitle: "Co zauważyć zanim pojawi się złość",
    thesis: "Jednym z praktycznych wątków jest to, że ciało reaguje szybciej niż świadoma myśl. Dyskomfort, napięcie albo zacisk mogą pokazać, że granica została przekroczona.",
    learn: [
      "Nie każda niewygoda wymaga interwencji. Kluczowe jest, czy zgoda jest świadoma, czy automatyczna.",
      "Jeżeli sytuacja wraca w głowie przez długi czas, prawdopodobnie dotknęła ważnej granicy.",
      "Ciało nie daje gotowej odpowiedzi, ale wskazuje miejsce, które trzeba nazwać."
    ],
    practice: "Zatrzymaj łańcuch reakcji: co czuję, co to uruchomiło, czego potrzebuję, co chcę zaproponować.",
    trap: "Zbyt późne rozpoznanie granicy. Wtedy piękna formułka może wyjść jako pretensja albo atak."
  },
  {
    id: "intervention",
    title: "5. Interwencja z uzasadnieniem",
    subtitle: "Dlaczego sama zasada brzmi czasem jak rozkaz",
    thesis: "W materiale powraca różnica między powołaniem się na kontrakt a wyjaśnieniem, po co dana zasada służy procesowi.",
    learn: [
      "„Umawialiśmy się” jest słabsze, jeśli grupa nie czuje sensu tej umowy.",
      "Uzasadnienie zwiększa szansę współpracy, bo ludzie nie czytają w myślach.",
      "Dobra interwencja mówi o potrzebie procesu: skupieniu, kolejności, słyszalności, bezpieczeństwie rozmowy."
    ],
    practice: "Buduj zdanie według schematu: widzę sytuację → zależy mi na potrzebie → proponuję konkretną zmianę.",
    trap: "Mówienie „bo taka jest zasada” może włączyć opór, nawet gdy zasada jest rozsądna."
  },
  {
    id: "beliefs",
    title: "6. Przekonania i trening",
    subtitle: "Dlaczego formułki nie działają bez prawa wewnętrznego",
    thesis: "Końcówka spotkania pokazuje, że rozwijanie asertywności to praca z przekonaniami. Zdanie proasertywne ma wspierać zachowanie, nie tylko ładnie brzmieć.",
    learn: [
      "Przekonania prowadzą do zachowań: dają albo odbierają prawo do reakcji.",
      "Zdania antyasertywne nie są po to, żeby się oskarżać, ale żeby rozpoznać mechanizm.",
      "Zdania proasertywne powinny być zgodne z osobą. Jeśli nie rezonują, nie będą działały w napięciu."
    ],
    practice: "Ułóż jedno zdanie dla swojej roli: „Mam prawo..., gdy chronię...”. Potem przećwicz je na głos w neutralnym stanie.",
    trap: "Ćwiczenie samych formułek. Bez osadzenia mogą wyjść ze złością i naruszyć granice drugiej strony."
  }
];

const scenarios = [
  {
    id: "dominacja",
    label: "Autorytet",
    title: "Jedna osoba przejmuje rozmowę",
    short: "Grupa milknie, a prowadzący czuje, że trudno przerwać.",
    phrase: "„Zatrzymam ten wątek, bo zależy mi, żeby grupa usłyszała też inne głosy. Wrócimy teraz do rundy.”",
    note: "To chroni proces, a nie atakuje osoby."
  },
  {
    id: "podgrupki",
    label: "Kontrakt",
    title: "Rozmowy w podgrupach rozpraszają",
    short: "Zasada była ustalona, ale sama zasada nie wystarcza.",
    phrase: "„Trudno mi prowadzić rozmowę, gdy równolegle pojawia się kilka głosów. Proponuję, żebyśmy wrócili do jednej rozmowy.”",
    note: "Uzasadnienie zwiększa szansę współpracy."
  },
  {
    id: "przerwa",
    label: "Ciało",
    title: "Prowadzący potrzebuje przerwy",
    short: "Pojawia się zmęczenie, ale w głowie działa „to nie o mnie”.",
    phrase: "„Widzę, że potrzebujemy chwili resetu. Zróbmy krótką przerwę i wróćmy z większą uważnością.”",
    note: "Dbanie o zasób prowadzącego też chroni grupę."
  },
  {
    id: "plan",
    label: "Elastyczność",
    title: "Plan przestaje pasować do procesu",
    short: "Aktywne słuchanie bez zmiany działania byłoby pozorem.",
    phrase: "„Słyszę, że grupa potrzebuje zatrzymać się przy tym dłużej. Zmieniam kolejność: najpierw domkniemy ten temat.”",
    note: "To odpowiedzialność za proces ponad założeniami."
  },
  {
    id: "nierownosc",
    label: "Równość",
    title: "Inaczej reaguję na różne osoby",
    short: "W transkrypcie pojawia się refleksja o płci, delikatności i nierównym zwracaniu uwagi.",
    phrase: "„Chcę zadbać o tę samą zasadę dla wszystkich: zatrzymuję wypowiedź po czasie i oddaję głos dalej.”",
    note: "Asertywność obejmuje też granice innych osób."
  },
  {
    id: "automat",
    label: "Automat",
    title: "Zgadzam się, choć coś się zaciska",
    short: "Sygnał pojawia się w ciele wcześniej niż w słowach.",
    phrase: "„Potrzebuję chwili, żeby sprawdzić, czy mogę się na to świadomie zgodzić. Wrócę z odpowiedzią po przerwie.”",
    note: "Czas na rozpoznanie bywa najbardziej asertywną interwencją."
  }
];

const processStages = [
  {
    id: "orient",
    title: "1. Orientacja",
    subtitle: "Czy wiem, w jakiej roli stoję?",
    color: "teal",
    problem: "Proces zaczyna się chwiać, gdy osoba prowadząca widzi tylko narzędzie, a nie własny stan i relację z grupą.",
    observe: ["czy pamiętam cel spotkania", "czy jestem osadzony/osadzona w roli", "czy reaguję na grupę, czy na własne napięcie"],
    method: "Krótki skan roli: po co tu jestem, czego pilnuję, co jest moją odpowiedzialnością.",
    micro: "Nazwij w notatniku jedną rzecz, której bronisz w procesie: głosu, czasu, celu, bezpieczeństwa, jasności.",
    next: "Jeśli rola jest jasna, przejdź do odczytania sygnałów."
  },
  {
    id: "signals",
    title: "2. Sygnały",
    subtitle: "Co mówi ciało, grupa i kontekst?",
    color: "amber",
    problem: "Automatyczna zgoda albo automatyczne milczenie często pojawiają się zanim zdążymy pomyśleć.",
    observe: ["zacisk szczęk, napięcie, złość", "milczenie grupy przy dominującej osobie", "rozmowy poboczne, spadek skupienia", "powracająca myśl po spotkaniu"],
    method: "Zatrzymaj interpretację. Najpierw zbierz dane: co widzę, co czuję, co robi grupa.",
    micro: "Powiedz sobie: „to jest sygnał, nie wyrok”. Dopiero potem decyduj o działaniu.",
    next: "Jeśli sygnał dotyczy granicy, przejdź do diagnozy."
  },
  {
    id: "diagnosis",
    title: "3. Diagnoza granicy",
    subtitle: "Czy to moja wygoda, czy potrzeba procesu?",
    color: "cobalt",
    problem: "Nie każda niewygoda wymaga reakcji. Ale brak reakcji może kosztować grupę głos, uwagę albo zaufanie.",
    observe: ["czy zgoda jest świadoma", "czy ktoś traci dostęp do głosu", "czy zasada ma nadal sens", "czy naruszam własną granicę samodzielnie"],
    method: "Rozdziel trzy warstwy: mój dyskomfort, potrzeba grupy, cel spotkania.",
    micro: "Ułóż jedno zdanie diagnozy: „Widzę..., to wpływa na..., potrzebujemy...”.",
    next: "Jeśli wpływ jest realny, wybierz poziom interwencji."
  },
  {
    id: "intervene",
    title: "4. Interwencja",
    subtitle: "Jak nazwać granicę bez ataku?",
    color: "burgundy",
    problem: "Sama zasada może zabrzmieć jak rozkaz, a spóźniona reakcja może wyjść jak pretensja.",
    observe: ["czy mówię o zachowaniu, nie o osobie", "czy daję uzasadnienie", "czy proponuję konkretną zmianę", "czy chronię proces, nie ego"],
    method: "Formuła: obserwacja → potrzeba → propozycja → powrót do pracy.",
    micro: "„Słyszę kilka równoległych głosów. Trudno wtedy śledzić rozmowę. Wróćmy do jednej kolejki wypowiedzi.”",
    next: "Po interwencji sprawdź, czy proces wrócił do działania."
  },
  {
    id: "integrate",
    title: "5. Integracja",
    subtitle: "Czego uczę się o swoim wzorcu?",
    color: "sage",
    problem: "Bez integracji każda trudna sytuacja zaczyna się od zera: te same automaty wracają w kolejnych grupach.",
    observe: ["które sytuacje uruchamiają mnie najczęściej", "z kim trudniej mi być asertywnym/asertywną", "jakie przekonanie odebrało mi prawo do reakcji"],
    method: "Praca z przekonaniami: antyasertywne zdanie rozpoznaj, proasertywne zdanie zbuduj i przećwicz.",
    micro: "Po spotkaniu zapisz: co zauważyłem/zauważyłam, co zrobiłem/zrobiłam, jakie zdanie wesprze mnie następnym razem.",
    next: "To zamyka pętlę uczenia i zasila kolejną orientację."
  }
];

const concepts = [
  {
    title: "Asertywność",
    charge: "92%",
    short: "Spokojne wyrażanie potrzeb, wartości i granic bez naruszania innych.",
    deep: "W materiale asertywność nie jest stylem bycia ani ostrą odmową. To kompetencja relacyjna: wiem, co jest dla mnie ważne, potrafię to zakomunikować i jednocześnie nie unieważniam drugiej strony.",
    signs: ["nazywam potrzebę zamiast oceniać osobę", "umiem powiedzieć nie albo tak świadomie", "interwencja służy procesowi, nie rozładowaniu złości"],
    trap: "Mylenie asertywności z dominacją albo twardością.",
    phrase: "„Zależy mi na..., dlatego proponuję...”"
  },
  {
    title: "Suwerenność",
    charge: "88%",
    short: "Prawo do własnych emocji, potrzeb, wartości i decyzji.",
    deep: "To pierwszy komponent metafory państwa. Dopóki osoba nie czuje, że ma prawo do własnego terytorium, trudno jej potem komunikować i bronić granic.",
    signs: ["wiem, czego pilnuję w roli", "nie oddaję decyzji dominującej osobie", "zgoda wynika z wyboru, nie z lęku"],
    trap: "Suwerenność bez relacyjności zamienia się w izolację.",
    phrase: "„Mam prawo sprawdzić, czy ta zgoda jest naprawdę moja.”"
  },
  {
    title: "Granice celne",
    charge: "83%",
    short: "Decyzja, co wpuszczam do swojego terytorium, a czego nie akceptuję.",
    deep: "Granice nie muszą być murem. Mogą być przepuszczalne, negocjowane i zależne od kontekstu. Kluczowe jest to, czy wiem, co robię i dlaczego.",
    signs: ["rozróżniam niewygodę od naruszenia", "nie reaguję automatycznie", "umiem zmienić zasady, jeśli proces tego potrzebuje"],
    trap: "Uznanie, że każda zgoda na niewygodę oznacza brak asertywności.",
    phrase: "„Tym razem się zgadzam, ale chcę nazwać warunek.”"
  },
  {
    title: "Zasady wymiany",
    charge: "76%",
    short: "Reguły kontaktu: kontrakt, kolejność głosów, tempo, sposób słuchania.",
    deep: "W spotkaniu zasady działają najlepiej, gdy uczestnicy rozumieją ich funkcję. Nie chodzi o dyscyplinę dla dyscypliny, tylko o warunki wspólnej pracy.",
    signs: ["zasada ma uzasadnienie", "można ją negocjować, jeśli nadal chroni cel", "prowadzący potrafi wrócić do niej bez zawstydzania grupy"],
    trap: "Powoływanie się na kontrakt jak na pałkę.",
    phrase: "„Ta zasada pomaga nam słyszeć się nawzajem.”"
  },
  {
    title: "Prawo do obrony",
    charge: "79%",
    short: "Możliwość interwencji, gdy granica albo proces są ignorowane.",
    deep: "Obrona nie oznacza ataku. W metaforze państwa chodzi o obronę integralności, nie o pokaz siły. W facylitacji oznacza to ochronę warunków rozmowy.",
    signs: ["interweniuję proporcjonalnie", "chronię dostęp do głosu", "mówię o zachowaniu i wpływie na proces"],
    trap: "Czekanie tak długo, aż spokojna interwencja zamieni się w złość.",
    phrase: "„Zatrzymam to, bo zaczyna wpływać na możliwość udziału innych.”"
  },
  {
    title: "Autorytet",
    charge: "71%",
    short: "Osoba lub pozycja, przy której trudniej wyrazić sprzeciw.",
    deep: "Transkrypt pokazuje, że problem z autorytetem może przenieść się z życia osobistego do pracy z grupą. Silna osoba potrafi zająć więcej miejsca, nawet bez formalnej władzy.",
    signs: ["trudniej mi przerwać tę osobę", "racjonalizuję brak reakcji", "inni uczestnicy milkną"],
    trap: "Mylenie szacunku z oddaniem procesu jednej osobie.",
    phrase: "„Chcę zadbać, żeby pojawiły się też inne perspektywy.”"
  },
  {
    title: "Sygnał ciała",
    charge: "86%",
    short: "Napięcie, dyskomfort, zacisk albo zmęczenie jako wczesny alarm.",
    deep: "Ciało bywa szybsze niż świadomość. Nie daje całej odpowiedzi, ale pokazuje, że coś wymaga uwagi: prośba, ton, powtarzalność sytuacji albo przekroczenie granicy.",
    signs: ["zacisk szczęk", "napięcie w karku", "złość po czasie", "myśl wracająca po spotkaniu"],
    trap: "Ignorowanie ciała aż do momentu wybuchu albo wycofania.",
    phrase: "„Potrzebuję chwili, żeby sprawdzić, co się we mnie dzieje.”"
  },
  {
    title: "Przekonanie",
    charge: "81%",
    short: "Myśl, która daje albo odbiera prawo do zachowania.",
    deep: "Praca z przekonaniami jest w materiale kluczowa. Jeżeli w środku mam zdanie „nie wypada”, „nie mogę”, „to nie o mnie”, formułka asertywna może nie zadziałać.",
    signs: ["automatycznie się zgadzam", "boję się zakłopotania", "mam więcej zdań wspierających innych niż siebie"],
    trap: "Powtarzanie proasertywnych zdań, które nie są moje i nie rezonują.",
    phrase: "„Proszenie o pomoc jest umiejętnością, nie słabością.”"
  },
  {
    title: "Elastyczna odpowiedzialność",
    charge: "74%",
    short: "Zmiana planu w odpowiedzi na proces bez porzucenia celu.",
    deep: "To ważny wkład uczestniczek rozmowy: aktywne słuchanie nie wystarcza, jeśli prowadzący nadal cisną swój plan. Odpowiedzialność polega na reakcji.",
    signs: ["widzę, że grupa potrzebuje innego tempa", "zmieniam format, ale nie tracę celu", "odróżniam plan od procesu"],
    trap: "Udawanie elastyczności przy faktycznym trzymaniu programu.",
    phrase: "„Zmieniam kolejność, bo to lepiej odpowiada temu, co dzieje się w grupie.”"
  },
  {
    title: "Uzasadnienie",
    charge: "69%",
    short: "Wyjaśnienie, po co proszę o zmianę zachowania.",
    deep: "W transkrypcie mocno wybrzmiewa: ludzie nie czytają w myślach. Prośba bez powodu może brzmieć jak arbitralna kontrola; prośba z uzasadnieniem zaprasza do współpracy.",
    signs: ["mówię, jaki wpływ ma zachowanie", "odnoszę się do celu ćwiczenia", "używam języka propozycji i potrzeby"],
    trap: "Zakładanie, że sama zasada wystarczy.",
    phrase: "„Będzie mi łatwiej pilnować kolejności, jeśli zgłaszamy się ręką.”"
  }
];

const stationDetail = document.querySelector("#stationDetail");
const stationTabs = document.querySelectorAll(".station-tab");
const lessonTabs = document.querySelector("#lessonTabs");
const lessonPanel = document.querySelector("#lessonPanel");
const boundaryForm = document.querySelector("#boundaryForm");
const diagnosis = document.querySelector("#diagnosis");
const scenarioGrid = document.querySelector("#scenarioGrid");
const phrasePanel = document.querySelector("#phrasePanel");
const processOrbit = document.querySelector("#processOrbit");
const processDetail = document.querySelector("#processDetail");
const conceptGrid = document.querySelector("#conceptGrid");
const progressMeter = document.querySelector("#progressMeter");
const readoutLabel = document.querySelector("#readoutLabel");
const compassControls = document.querySelector("#compassControls");
const compassNodeTitle = document.querySelector("#compassNodeTitle");
const compassNodeText = document.querySelector("#compassNodeText");
const compassSignalFill = document.querySelector("#compassSignalFill");

const compassInsights = {
  "Suwerenność": {
    text: "To punkt prawa do własnego terytorium: wartości, emocji, decyzji i granic roli. Bez niego formułki brzmią poprawnie, ale nie niosą siły.",
    signal: 88
  },
  "Granice": {
    text: "Granice pokazują, co wpuszczasz do procesu, co negocjujesz, a czego nie możesz przyjąć bez utraty celu spotkania.",
    signal: 92
  },
  "Proces": {
    text: "Proces łączy sygnały z decyzją: czy chronisz głos, czas, sens ćwiczenia, bezpieczeństwo rozmowy albo dostęp grupy do pracy.",
    signal: 79
  },
  "Relacja": {
    text: "Relacja przypomina, że interwencja nie ma upokorzyć osoby. Ma nazwać potrzebę i zaprosić grupę z powrotem do współpracy.",
    signal: 73
  },
  "Autorytet": {
    text: "Autorytet wskazuje miejsca, w których łatwo oddać pole silniejszemu głosowi. Tu najbardziej widać, czy facylitator chroni równość udziału.",
    signal: 84
  },
  "Przekonania": {
    text: "Przekonania są zasilaniem wewnętrznym: czy naprawdę dajesz sobie prawo do reakcji, czy tylko znasz poprawną formułkę.",
    signal: 81
  }
};

function renderCompassInspector(label = "Proces", source = "auto") {
  const insight = compassInsights[label] || compassInsights.Proces;
  if (compassNodeTitle) compassNodeTitle.textContent = label;
  if (compassNodeText) compassNodeText.textContent = insight.text;
  if (compassSignalFill) compassSignalFill.style.width = `${insight.signal}%`;
  if (compassControls) {
    compassControls.querySelectorAll("[data-compass-node]").forEach(button => {
      const active = button.dataset.compassNode === label;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }
  document.body.dataset.compassSource = source;
}

function renderStation(key) {
  const item = stations[key];
  stationDetail.innerHTML = `
    <ul class="station-meta">${item.tags.map(tag => `<li>${tag}</li>`).join("")}</ul>
    <h3>${item.title}</h3>
    <p>${item.lead}</p>
    <div class="station-columns">
      <div><h4>Napięcie</h4><p>${item.tension}</p></div>
      <div><h4>Praktyka</h4><p>${item.practice}</p></div>
      <div><h4>Pytanie</h4><p>${item.question}</p></div>
    </div>
  `;
  stationTabs.forEach(tab => tab.classList.toggle("is-active", tab.dataset.station === key));
}

function scoreBoundary() {
  const data = new FormData(boundaryForm);
  const body = Number(data.get("body"));
  const auto = Number(data.get("auto"));
  const group = Number(data.get("group"));
  const authority = Number(data.get("authority"));
  const need = String(data.get("need") || "jasności procesu").trim();
  const change = String(data.get("change") || "wracamy do ustalonej zasady").trim();
  const score = Math.round((body * 0.28) + (auto * 0.24) + (group * 0.28) + (authority * 0.2));

  let badge = "Obserwuj";
  let title = "Najpierw nazwij, co się dzieje";
  let advice = "Sytuacja nie musi wymagać mocnej interwencji. Warto jednak sprawdzić, czy zgoda jest świadoma, czy wynika z automatu.";
  if (score > 72) {
    badge = "Interweniuj";
    title = "Granica wpływa już na proces";
    advice = "To dobry moment na krótką, spokojną interwencję z uzasadnieniem. Chroń proces, nie oceniaj osoby.";
  } else if (score > 48) {
    badge = "Doprecyzuj";
    title = "Potrzebna jest dyplomacja";
    advice = "Nazwij potrzebę i zaproponuj zmianę. Daj grupie powód, nie tylko komendę.";
  }

  const needleAngle = Math.round((score / 100) * 180 - 90);
  diagnosis.innerHTML = `
    <div class="sim-gauge" data-band="${badge}">
      <div class="sim-gauge-face">
        <span class="sim-gauge-needle" style="transform: rotate(${needleAngle}deg)"></span>
        <span class="sim-gauge-hub"></span>
      </div>
      <div class="sim-gauge-scale"><span>Obserwuj</span><span>Doprecyzuj</span><span>Interweniuj</span></div>
    </div>
    <span class="diagnosis-badge">${badge} · ${score}/100</span>
    <h3>${title}</h3>
    <p>${advice}</p>
    <blockquote>„Zależy mi na ${need}, dlatego ${change}. Proszę, żebyśmy przez chwilę pracowali w ten sposób.”</blockquote>
  `;
}

function renderScenarios(activeId = scenarios[0].id) {
  scenarioGrid.innerHTML = scenarios.map(item => `
    <button class="scenario-card ${item.id === activeId ? "is-active" : ""}" type="button" data-scenario="${item.id}">
      <span>${item.label}</span>
      <h3>${item.title}</h3>
      <p>${item.short}</p>
    </button>
  `).join("");
  scenarioGrid.querySelectorAll(".scenario-card").forEach(button => {
    button.addEventListener("click", () => renderScenarios(button.dataset.scenario));
  });
  const item = scenarios.find(scenario => scenario.id === activeId);
  phrasePanel.innerHTML = `
    <p class="eyebrow">${item.label}</p>
    <h3>${item.title}</h3>
    <p>${item.note}</p>
    <blockquote>${item.phrase}</blockquote>
  `;
}

function renderLesson(activeId = lessons[0].id) {
  lessonTabs.innerHTML = lessons.map((lesson, index) => `
    <button class="lesson-tab ${lesson.id === activeId ? "is-active" : ""}" type="button" data-lesson="${lesson.id}">
      <span>${String(index + 1).padStart(2, "0")}</span>
      ${lesson.title.replace(/^\d+\.\s*/, "")}
    </button>
  `).join("");
  lessonTabs.querySelectorAll(".lesson-tab").forEach(button => {
    button.addEventListener("click", () => renderLesson(button.dataset.lesson));
  });
  const lesson = lessons.find(item => item.id === activeId);
  lessonPanel.innerHTML = `
    <p class="eyebrow">${lesson.subtitle}</p>
    <h3>${lesson.title}</h3>
    <p class="lesson-thesis">${lesson.thesis}</p>
    <div class="lesson-body">
      <div>
        <h4>Co z tego wynika</h4>
        <ul>${lesson.learn.map(item => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div>
        <h4>Mikropraktyka</h4>
        <p>${lesson.practice}</p>
        <h4>Pułapka</h4>
        <p>${lesson.trap}</p>
      </div>
    </div>
  `;
}

function renderProcessMap(activeId = processStages[0].id) {
  processOrbit.innerHTML = processStages.map((stage, index) => `
    <button class="process-node ${stage.id === activeId ? "is-active" : ""}" type="button" data-process="${stage.id}" data-color="${stage.color}">
      <span class="process-index">${String(index + 1).padStart(2, "0")}</span>
      <span class="process-copy">
        <strong>${stage.title.replace(/^\d+\.\s*/, "")}</strong>
        <small>${stage.subtitle}</small>
      </span>
    </button>
  `).join("");
  processOrbit.querySelectorAll(".process-node").forEach(button => {
    button.addEventListener("click", () => renderProcessMap(button.dataset.process));
  });
  const stage = processStages.find(item => item.id === activeId);
  const stageIndex = processStages.findIndex(item => item.id === activeId);
  const progress = processStages.length > 1 ? Math.round((stageIndex / (processStages.length - 1)) * 100) : 0;
  processDetail.dataset.color = stage.color;
  processDetail.style.setProperty("--stage-progress", `${progress}%`);
  processDetail.innerHTML = `
    <div class="process-detail-top">
      <div>
        <p class="eyebrow">Aktywny etap procesu</p>
        <h3>${stage.title}</h3>
        <p class="process-subtitle">${stage.subtitle}</p>
      </div>
      <div class="process-readout" aria-label="Postęp procesu">
        <span>${String(stageIndex + 1).padStart(2, "0")}/${String(processStages.length).padStart(2, "0")}</span>
        <i><b></b></i>
      </div>
    </div>
    <div class="process-lens">
      <div>
        <h4>Problem</h4>
        <p>${stage.problem}</p>
      </div>
      <div>
        <h4>Na co patrzeć</h4>
        <ul>${stage.observe.map(item => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div>
        <h4>Metoda</h4>
        <p>${stage.method}</p>
      </div>
      <div>
        <h4>Mikropraktyka</h4>
        <p>${stage.micro}</p>
      </div>
    </div>
    <blockquote>${stage.next}</blockquote>
  `;
}

function renderConceptCards(openIndex = 0) {
  conceptGrid.innerHTML = concepts.map((concept, index) => `
    <article class="concept-card ${index === openIndex ? "is-open" : ""}" data-concept-card="${index}" style="--charge:${concept.charge}; --concept-col:${index % 5}; --concept-row:${Math.floor(index / 5)}">
      <button class="concept-card-head" type="button" data-concept-toggle="${index}" aria-expanded="${index === openIndex}">
        <span class="concept-art" aria-hidden="true"></span>
        <span class="charge-ring">${concept.charge}</span>
        <span>
          <strong>${concept.title}</strong>
          <small>${concept.short}</small>
        </span>
      </button>
      <div class="concept-card-body">
        <p>${concept.deep}</p>
        <div class="concept-inside-grid">
          <div>
            <h4>Sygnały w praktyce</h4>
            <ul>${concept.signs.map(item => `<li>${item}</li>`).join("")}</ul>
          </div>
          <div>
            <h4>Pułapka</h4>
            <p>${concept.trap}</p>
            <h4>Zdanie robocze</h4>
            <blockquote>${concept.phrase}</blockquote>
          </div>
        </div>
      </div>
    </article>
  `).join("");
  conceptGrid.querySelectorAll("[data-concept-toggle]").forEach(button => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.conceptToggle);
      const isOpen = conceptGrid.querySelector(`[data-concept-card="${index}"]`)?.classList.contains("is-open");
      renderConceptCards(isOpen ? -1 : index);
    });
  });
}

const sectionToNode = {
  observatorium: "Proces",
  stacje: "Granice",
  edukacja: "Przekonania",
  symulator: "Autorytet",
  autoskan: "Granice",
  interwencje: "Relacja",
  kreator: "Suwerenność",
  atlas: "Suwerenność"
};
let lastNodeLabel = "___";

function updateProgress() {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const progress = total > 0 ? Math.min(100, Math.round((window.scrollY / total) * 100)) : 0;
  progressMeter.value = progress;
  const needle = document.querySelector("#readoutNeedle");
  if (needle) needle.style.transform = `rotate(${Math.round(progress * 3.6)}deg)`;
  const sections = [...document.querySelectorAll("section[id], .hero")];
  const current = sections.reduce((acc, section) => {
    const top = section.getBoundingClientRect().top;
    return top < 160 ? section : acc;
  }, sections[0]);
  const label = current?.querySelector("h1,h2")?.textContent?.trim() || "Start";
  readoutLabel.textContent = label.length > 28 ? `${label.slice(0, 28)}…` : label;

  const activeId = current?.id || "";
  document.querySelectorAll(".nav-links a").forEach(a => {
    a.classList.toggle("is-current", a.getAttribute("href") === `#${activeId}`);
  });
  const nodeLabel = sectionToNode[activeId] || null;
  if (nodeLabel !== lastNodeLabel && typeof window.__highlightCompassNode === "function") {
    window.__highlightCompassNode(nodeLabel, "scroll");
    lastNodeLabel = nodeLabel;
  }
}

function initThreeScene() {
  const canvas = document.querySelector("#territoryCanvas");
  if (!canvas || !window.THREE) {
    drawCanvasFallback(canvas);
    return;
  }

  let scene;
  let renderer;
  try {
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "default" });
  } catch (error) {
    drawCanvasFallback(canvas);
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 7.2, 10.5);
  camera.lookAt(0, 0, 0);

  const group = new THREE.Group();
  scene.add(group);

  const colors = {
    amber: 0xe7a84b,
    teal: 0x35b7a4,
    cobalt: 0x5f86dc,
    sage: 0x95b878,
    burgundy: 0xd5666b,
    paper: 0xf6eddc
  };

  const base = new THREE.Mesh(
    new THREE.CylinderGeometry(4.4, 4.8, 0.18, 64),
    new THREE.MeshStandardMaterial({ color: 0x0c1b24, roughness: 0.64, metalness: 0.16 })
  );
  base.position.y = -0.08;
  group.add(base);

  [1.35, 2.35, 3.35, 4.25].forEach((radius, i) => {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(radius, 0.015, 8, 96),
      new THREE.MeshBasicMaterial({ color: i % 2 ? colors.teal : colors.amber, transparent: true, opacity: 0.42 - i * 0.055 })
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.08 + i * 0.018;
    group.add(ring);
  });

  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.62, 1),
    new THREE.MeshStandardMaterial({ color: colors.amber, emissive: 0x5e3308, roughness: 0.38, metalness: 0.22 })
  );
  core.position.y = 0.72;
  group.add(core);

  const nodeSpecs = [
    ["Suwerenność", colors.amber, 0, 3.2],
    ["Granice", colors.teal, Math.PI * 0.42, 3.55],
    ["Proces", colors.cobalt, Math.PI * 0.86, 3.0],
    ["Relacja", colors.sage, Math.PI * 1.28, 3.52],
    ["Autorytet", colors.burgundy, Math.PI * 1.68, 3.16],
    ["Przekonania", 0x9b7bd7, Math.PI * 1.98, 2.5]
  ];

  const compassNodes = [];
  nodeSpecs.forEach(([label, color, angle, radius], i) => {
    const node = new THREE.Mesh(
      new THREE.SphereGeometry(0.18 + (i % 2) * 0.04, 18, 18),
      new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.18, roughness: 0.36 })
    );
    node.position.set(Math.cos(angle) * radius, 0.38 + i * 0.035, Math.sin(angle) * radius);
    node.userData = { label, curIntensity: 0.18, curScale: 1, targetIntensity: 0.18, targetScale: 1 };
    group.add(node);
    compassNodes.push(node);

    const lineMaterial = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.38 });
    const points = [new THREE.Vector3(0, 0.22, 0), node.position.clone()];
    group.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), lineMaterial));
  });

  let activeNodeLabel = "Proces";
  window.__highlightCompassNode = (label, source = "auto") => {
    activeNodeLabel = label || "Proces";
    compassNodes.forEach(node => {
      const active = activeNodeLabel && node.userData.label.toLowerCase() === String(activeNodeLabel).toLowerCase();
      node.userData.targetIntensity = active ? 0.95 : 0.18;
      node.userData.targetScale = active ? 1.75 : 1;
    });
    renderCompassInspector(activeNodeLabel, source);
  };

  const light = new THREE.PointLight(0xf5c77a, 2.3, 16);
  light.position.set(0, 3.6, 1.8);
  scene.add(light);
  scene.add(new THREE.AmbientLight(0x88b8ff, 0.68));
  const side = new THREE.DirectionalLight(0x35b7a4, 1.2);
  side.position.set(-4, 5, 6);
  scene.add(side);

  const pointer = { x: 0, y: 0 };
  const raycaster = new THREE.Raycaster();
  const pointerNdc = new THREE.Vector2();
  function setPointer(event) {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    pointerNdc.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointerNdc.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
  }
  canvas.addEventListener("pointermove", event => {
    setPointer(event);
    raycaster.setFromCamera(pointerNdc, camera);
    const hit = raycaster.intersectObjects(compassNodes, false)[0];
    canvas.classList.toggle("is-pointing-node", Boolean(hit));
  });
  canvas.addEventListener("click", event => {
    setPointer(event);
    raycaster.setFromCamera(pointerNdc, camera);
    const hit = raycaster.intersectObjects(compassNodes, false)[0];
    if (hit?.object?.userData?.label) {
      window.__highlightCompassNode(hit.object.userData.label, "canvas");
    }
  });

  let lastWidth = 0;
  let lastHeight = 0;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const width = Math.max(1, Math.round(rect.width));
    const height = Math.max(1, Math.round(rect.height));
    if (width === lastWidth && height === lastHeight) return;
    lastWidth = width;
    lastHeight = height;
    renderer.setSize(width, height, false);
    camera.aspect = rect.width / Math.max(rect.height, 1);
    camera.updateProjectionMatrix();
  }

  function animate(time) {
    resize();
    const t = time * 0.001;
    group.rotation.y = t * 0.13 + pointer.x * 0.15;
    group.rotation.x = -0.18 + pointer.y * 0.06;
    core.rotation.x = t * 0.7;
    core.rotation.y = t * 0.9;
    compassNodes.forEach(node => {
      const u = node.userData;
      u.curIntensity += (u.targetIntensity - u.curIntensity) * 0.08;
      u.curScale += (u.targetScale - u.curScale) * 0.08;
      node.material.emissiveIntensity = u.curIntensity;
      node.scale.setScalar(u.curScale);
    });
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
  window.__highlightCompassNode(activeNodeLabel, "init");
}

function drawCanvasFallback(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  function paint() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * devicePixelRatio;
    canvas.height = rect.height * devicePixelRatio;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    ctx.clearRect(0, 0, rect.width, rect.height);
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    ctx.strokeStyle = "rgba(246,237,220,.22)";
    [70, 130, 190].forEach(radius => {
      ctx.beginPath();
      ctx.ellipse(cx, cy, radius * 1.6, radius * 0.62, 0, 0, Math.PI * 2);
      ctx.stroke();
    });
    ["#e7a84b", "#35b7a4", "#5f86dc", "#95b878", "#d5666b"].forEach((color, i) => {
      const angle = i / 5 * Math.PI * 2;
      const x = cx + Math.cos(angle) * 260;
      const y = cy + Math.sin(angle) * 110;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fill();
    });
  }
  paint();
  window.addEventListener("resize", paint);
}

stationTabs.forEach(tab => tab.addEventListener("click", () => renderStation(tab.dataset.station)));
if (compassControls) {
  compassControls.querySelectorAll("[data-compass-node]").forEach(button => {
    button.addEventListener("click", () => {
      const label = button.dataset.compassNode;
      if (typeof window.__highlightCompassNode === "function") window.__highlightCompassNode(label, "manual");
      else renderCompassInspector(label, "manual");
      lastNodeLabel = label;
    });
  });
}
boundaryForm.addEventListener("input", scoreBoundary);
window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);

renderStation("self");
renderLesson();
scoreBoundary();
renderScenarios();
renderProcessMap();
renderConceptCards();
renderCompassInspector("Proces", "init");
updateProgress();
initThreeScene();

/* ============================================================
   Rozszerzenia: immersja, diegetyka i wygoda (dodane w analizie)
   ============================================================ */
(function enhancements() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --- Pamięć formularzy (localStorage) --- */
  function persist(key, form) {
    if (!form) return;
    try {
      const saved = JSON.parse(localStorage.getItem(key) || "null");
      if (saved) Object.entries(saved).forEach(([k, v]) => {
        const field = form.elements[k];
        if (field) field.value = v;
      });
    } catch (e) {}
    form.addEventListener("input", () => {
      const data = {};
      new FormData(form).forEach((v, k) => { data[k] = v; });
      try { localStorage.setItem(key, JSON.stringify(data)); } catch (e) {}
    });
  }

  /* --- Kreator formułki proasertywnej --- */
  const builderForm = document.querySelector("#builderForm");
  const builderOutput = document.querySelector("#builderOutput");
  function renderBuilder() {
    if (!builderForm || !builderOutput) return;
    const d = new FormData(builderForm);
    const obs = (String(d.get("observation") || "")).trim() || "dzieje się coś, co utrudnia pracę";
    const need = (String(d.get("need") || "")).trim() || "żeby proces był dla wszystkich";
    const prop = (String(d.get("proposal") || "")).trim() || "zróbmy to inaczej";
    const tone = d.get("tone") || "spokojny";
    const opener = tone === "cieply" ? "Słuchajcie, " : tone === "stanowczy" ? "Zatrzymuję to na chwilę. " : "";
    const sentence = `${opener}Widzę, że ${obs}. Zależy mi, ${need}, dlatego proponuję: ${prop}. Wróćmy do pracy.`;
    builderOutput.innerHTML = `
      <p class="eyebrow">Twoja formułka</p>
      <div class="builder-schema"><span>obserwacja</span><span>potrzeba</span><span>propozycja</span><span>powrót</span></div>
      <blockquote id="builderSentence">${sentence}</blockquote>
      <button class="button secondary" type="button" id="builderCopy">Kopiuj formułkę</button>
      <p class="builder-hint">Mów o zachowaniu i jego wpływie na proces, nie o osobie. Uzasadnienie zaprasza do współpracy.</p>
    `;
    const copyBtn = document.querySelector("#builderCopy");
    if (copyBtn) copyBtn.addEventListener("click", () => {
      if (navigator.clipboard) navigator.clipboard.writeText(sentence).catch(() => {});
      copyBtn.textContent = "Skopiowano ✓";
      setTimeout(() => { copyBtn.textContent = "Kopiuj formułkę"; }, 1600);
    });
  }
  if (builderForm) {
    persist("kompas.builder", builderForm);
    builderForm.addEventListener("input", renderBuilder);
    renderBuilder();
  }

  /* --- Autoskan obszarów asertywności (self-check) --- */
  const selfCheckAreas = [
    { id: "prawa", label: "Obrona swoich praw w sytuacjach społecznych", hint: "np. ktoś wpycha się w kolejce" },
    { id: "prosby", label: "Wyrażanie próśb i proszenie o pomoc", hint: "nawet gdy zawodowo pomagam innym" },
    { id: "nie", label: "Mówienie „nie” bez poczucia winy", hint: "„nie wypada” kontra świadoma zgoda" },
    { id: "autorytet", label: "Kontakt z autorytetem lub osobą dominującą", hint: "gdy trudno wyrazić inne zdanie" },
    { id: "zlosc", label: "Wyrażanie złości bez naruszania innych", hint: "bez agresji i bez tłumienia" },
    { id: "bliskosc", label: "Wyrażanie uczuć i bliskości", hint: "pochwała, wdzięczność, sympatia" },
    { id: "rownosc", label: "Równe traktowanie różnych osób", hint: "np. kobiet i mężczyzn w grupie" },
    { id: "cialo", label: "Odczytywanie sygnałów ciała", hint: "napięcie jako wczesny alarm" }
  ];
  const levels = [
    { v: 2, label: "łatwo" },
    { v: 1, label: "różnie" },
    { v: 0, label: "trudno" }
  ];
  const selfCheckGrid = document.querySelector("#selfCheckGrid");
  const selfCheckResult = document.querySelector("#selfCheckResult");
  const selfCheckState = {};

  function renderSelfCheckResult() {
    if (!selfCheckResult) return;
    const answered = Object.keys(selfCheckState).length;
    if (!answered) {
      selfCheckResult.innerHTML = `
        <p class="eyebrow">Odczyt</p>
        <h3>Zaznacz obszary powyżej</h3>
        <p>Nie ma tu „dobrej” liczby. Chodzi o mapę: gdzie asertywność przychodzi łatwo, a gdzie warto ją poćwiczyć.</p>`;
      return;
    }
    const total = Object.values(selfCheckState).reduce((a, b) => a + b, 0);
    const max = answered * 2;
    const pct = Math.round((total / max) * 100);
    const weak = selfCheckAreas.filter(a => selfCheckState[a.id] === 0);
    const wobbly = selfCheckAreas.filter(a => selfCheckState[a.id] === 1);
    let head = "Sporo obszarów jest u Ciebie osadzonych";
    if (pct < 45) head = "Kilka obszarów wyraźnie prosi o trening";
    else if (pct < 70) head = "Obraz mieszany — i to jest normalne";
    const focus = weak[0] || wobbly[0];
    selfCheckResult.innerHTML = `
      <p class="eyebrow">Odczyt · ${answered}/${selfCheckAreas.length} zaznaczonych</p>
      <h3>${head}</h3>
      <div class="selfcheck-bar"><span style="--fill:${pct}%"></span></div>
      <p>${weak.length ? `Najtrudniej: <strong>${weak.map(a => a.label.toLowerCase()).join(", ")}</strong>.` : "Nie zaznaczono obszaru „trudno” — dobrze."}
      ${focus ? ` Wróć do stacji lub lekcji, która dotyka: „${focus.label.toLowerCase()}”.` : ""}</p>
      <p class="selfcheck-note">To nie diagnoza. Asertywność jest kontekstualna — ten sam obszar bywa łatwy z jedną osobą, trudny z inną.</p>`;
  }

  function renderSelfCheck() {
    if (!selfCheckGrid) return;
    selfCheckGrid.innerHTML = selfCheckAreas.map(area => `
      <div class="selfcheck-item" data-area="${area.id}">
        <div class="selfcheck-copy">
          <strong>${area.label}</strong>
          <small>${area.hint}</small>
        </div>
        <div class="selfcheck-levels" role="group" aria-label="${area.label}">
          ${levels.map(l => `<button type="button" class="selfcheck-lvl" data-area="${area.id}" data-value="${l.v}">${l.label}</button>`).join("")}
        </div>
      </div>`).join("");
    selfCheckGrid.querySelectorAll(".selfcheck-lvl").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.area;
        selfCheckState[id] = Number(btn.dataset.value);
        selfCheckGrid.querySelectorAll(`.selfcheck-lvl[data-area="${id}"]`).forEach(b => {
          b.classList.toggle("is-active", b === btn);
        });
        try { localStorage.setItem("kompas.selfcheck", JSON.stringify(selfCheckState)); } catch (e) {}
        renderSelfCheckResult();
      });
    });
    // przywróć zapisany stan
    try {
      const saved = JSON.parse(localStorage.getItem("kompas.selfcheck") || "null");
      if (saved) Object.entries(saved).forEach(([id, v]) => {
        selfCheckState[id] = v;
        const b = selfCheckGrid.querySelector(`.selfcheck-lvl[data-area="${id}"][data-value="${v}"]`);
        if (b) b.classList.add("is-active");
      });
    } catch (e) {}
    renderSelfCheckResult();
  }
  renderSelfCheck();

  /* --- Nawigacja klawiaturą po zakładkach (strzałki) --- */
  function attr(el) {
    return el.getAttribute("data-station") || el.getAttribute("data-lesson") ||
           el.getAttribute("data-process") || el.getAttribute("data-scenario");
  }
  function enableRovingKeys(container, selector, activeSelector) {
    if (!container) return;
    container.addEventListener("keydown", (e) => {
      const nav = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown", "Home", "End"];
      if (!nav.includes(e.key)) return;
      const items = [...container.querySelectorAll(selector)];
      if (!items.length) return;
      let idx = items.indexOf(document.activeElement);
      if (idx === -1) idx = items.findIndex(el => el.matches(activeSelector));
      if (idx === -1) idx = 0;
      e.preventDefault();
      let next = idx;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (idx + 1) % items.length;
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (idx - 1 + items.length) % items.length;
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = items.length - 1;
      const key = attr(items[next]);
      items[next].click();
      const fresh = [...container.querySelectorAll(selector)];
      const match = fresh.find(el => attr(el) === key) || fresh[next] || fresh[0];
      if (match) match.focus();
    });
  }
  enableRovingKeys(document.querySelector(".station-rail"), ".station-tab", ".is-active");
  enableRovingKeys(document.querySelector("#lessonTabs"), ".lesson-tab", ".is-active");
  enableRovingKeys(document.querySelector("#processOrbit"), ".process-node", ".is-active");
  enableRovingKeys(document.querySelector("#scenarioGrid"), ".scenario-card", ".is-active");

  /* --- Aura kursora (reflektor) --- */
  const cursorAura = document.querySelector("#cursorAura");
  if (cursorAura && !reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    let raf = 0, tx = 0, ty = 0, cx = 0, cy = 0;
    window.addEventListener("pointermove", (e) => {
      tx = e.clientX; ty = e.clientY;
      cursorAura.style.opacity = "1";
      if (!raf) {
        const loop = () => {
          cx += (tx - cx) * 0.18; cy += (ty - cy) * 0.18;
          cursorAura.style.transform = `translate(${cx}px, ${cy}px)`;
          if (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) { raf = requestAnimationFrame(loop); }
          else { raf = 0; }
        };
        raf = requestAnimationFrame(loop);
      }
    }, { passive: true });
    window.addEventListener("pointerleave", () => { cursorAura.style.opacity = "0"; });
  }

  /* --- Powrót na górę --- */
  const toTop = document.querySelector("#toTop");
  if (toTop) {
    toTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
    window.addEventListener("scroll", () => {
      toTop.classList.toggle("is-visible", window.scrollY > 640);
    }, { passive: true });
  }

  /* --- Wejście sekcji w kadr (scroll-reveal) --- */
  const revealEls = document.querySelectorAll(".section, .hero-copy, .console");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(el => el.classList.add("is-revealed"));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
    revealEls.forEach(el => { el.classList.add("reveal"); io.observe(el); });
  }

  /* --- Pamięć symulatora i ponowne wyliczenie --- */
  const simForm = document.querySelector("#boundaryForm");
  if (simForm) {
    persist("kompas.sim", simForm);
    simForm.dispatchEvent(new Event("input", { bubbles: true }));
  }
})();
