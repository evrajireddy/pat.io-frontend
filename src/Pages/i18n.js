// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        select: "Select a language",
        chat: "Chat with Pat.io",
        welcome:
          "“Hey! 👋 I’m Pat.io, here to help with SSN, ITIN, and NYC’s Local Law 30. How can I assist you today?”",
        error: "Network response was not ok",
        sorry: "Sorry, there was an error processing your request.",
        SSN: "How to apply for SSN?",
        LL30: "What is NYC Local Law 30?",
        LL30Selected:
          "Local Law 30 of 2017 (LL30) in New York City mandates language access services in NYC agencies. Call 212-346-6047 for more info.",
        ITIN: "What is an ITIN?",
        ITINSelected:
          "ITIN is a 9-digit number for non-citizens to file taxes.",
        other: "Other questions",
        optionSelected: "You selected: ",
        ssnSelected:
          "Of course! I have all the information about getting an SSN, but first, do you have a valid visa?",
        validVisa: `Your answer to having a valid visa is `,
        visaType: "What type of visa do you have? Please choose below options.",
        eligible:
          "Great! you are eligible to apply for SSN, you can choose a suggestion below for more info.",
        send: "Send",
        office: "Closest Office Location",
        documents: "Documents Required",
        allRequired: "Do you have all the required documents?",
        ssaOffice:
          "Great! You're all set to apply for your SSN. Would you like information on the nearest SSA office?",
        missingDocuments:
          "No worries! Here's a list of the documents you’ll need. Once you have everything ready, feel free to continue your application process.  I'm here to help!",
        nearestOffice: "Can I have your zip code please",
        anymoreHelp:
          "Alright. Is there anything else I can help you with regarding your SSN application?",
        more: "More",
        yes: "Yes",
        no: "No",
        complete: "I have all the documents",
        incomplete: "I am missing documents",
        type: "Talk to Pat.io...",
        irsITIN: "IRS and ITIN.",
        nycITIN: "NYC and ITIN.",
        TIN: "Different TINs.",
        learnLL30: "Learn more...",
        startOver: "Reset",
        whatIsNYCLocalLaw30: "What is NYC Local Law 30?",
        whatIsAnITIN: "What is an ITIN?",
        howToApplyForSSN: "How to apply for SSN?",
        documentsRequired: "Documents Required",
        closestOfficeLocation: "Closest Office Location",
        noValidVisa:
          "Sorry, please visit the USCIS website below to apply for a visa.",
        applyForImmigrantVisa: "Apply for a Immigrant Visa.",
        applyForNonImmigrantVisa: "Apply for a Non Immigrant Visa.",
        holdButton: "Hold to speak, release to send.",
      },
    },
    ru: {
      translation: {
        select: "Выберите язык",
        chat: "Чат с Pat.io",
        welcome:
          "Привет! 👋 Я Pat.io, ваш личный AI-ассистент, здесь, чтобы помочь вам с вопросами, связанными с номерами социального страхования (SSN), индивидуальными налоговыми идентификационными номерами (ITIN) и местным законом 30 города Нью-Йорка. Чем могу помочь сегодня? У вас есть вопросы о SSN, ITIN или правах на языковую доступность по закону 30?",
        error: "Ответ сети был неудовлетворительным",
        sorry: "Извините, произошла ошибка при обработке вашего запроса.",
        SSN: "Как подать заявку на SSN?",
        LL30: "Что такое местный закон 30 города Нью-Йорка?",
        LL30Selected:
          "Местный закон 30 от 2017 года (LL30) в Нью-Йорке является одним из самых сильных законов в стране. Он требует, чтобы определённые городские агентства назначали координаторов по доступу к языковым услугам, разрабатывали планы внедрения языковых услуг, предоставляли телефонную интерпретацию на как минимум 100 языках, переводили самые распространённые документы на 10 определённых городом языков и размещали знаки о наличии бесплатных услуг перевода. Вы можете спросить меня подробнее об этом законе и о том, как он влияет на ваши права. Или перейдите по ссылке ниже, чтобы узнать больше на вашем языке.",
        ITIN: "Что такое ITIN?",
        ITINSelected:
          "ITIN — это индивидуальный налоговый идентификационный номер. Это уникальный 9-значный номер, присваиваемый лицам, которые не могут получить номер социального страхования (SSN) из-за их иммиграционного статуса. ITIN используется для подачи налоговых деклараций и позволяет людям подавать налоги и получать возвраты. Вы можете спросить меня подробнее об ITIN и о том, как подать заявку на его получение. Или перейдите по ссылке ниже, чтобы узнать больше на вашем языке.",
        other: "Другие вопросы",
        optionSelected: "Вы выбрали: ",
        ssnSelected:
          "Конечно! У меня есть вся информация о получении SSN, но сначала, у вас есть действующая виза?",
        validVisa: "Ваш ответ на вопрос о наличии действующей визы: ",
        visaType:
          "Какой у вас тип визы? Пожалуйста, выберите один из вариантов ниже.",
        eligible:
          "Отлично! Вы имеете право подать заявку на SSN. Вы можете выбрать один из вариантов ниже для получения дополнительной информации.",
        send: "Отправить",
        office: "Ближайший офис",
        documents: "Необходимые документы",
        allRequired: "У вас есть все необходимые документы?",
        ssaOffice:
          "Отлично! Вы готовы подать заявку на SSN. Хотите получить информацию о ближайшем офисе SSA?",
        missingDocuments:
          "Не проблема. Какие документы у вас отсутствуют? Я могу предоставить информацию о том, как их получить.",
        nearestOffice: "Могу ли я узнать ваш почтовый индекс?",
        anymoreHelp:
          "Хорошо. Могу ли я ещё чем-то помочь по вашему заявлению на SSN?",
        more: "Больше",
        yes: "Да",
        no: "Нет",
        complete: "У меня есть все документы",
        incomplete: "У меня не хватает документов",
        type: "Введите сообщение...",
        irsITIN: "Узнать больше об ITIN на сайте IRS.",
        nycITIN: "Узнать больше о ITIN.",
        TIN: "Узнать больше о разных налоговых идентификационных номерах.",
        learnLL30:
          "Узнать больше о местном законе 30 города Нью-Йорка на вашем языке.",
        startOver: "Начать заново",
        whatIsNYCLocalLaw30: "Что такое местный закон 30 города Нью-Йорка?",
        whatIsAnITIN: "Что такое ITIN?",
        howToApplyForSSN: "Как подать заявку на SSN?",
        documentsRequired: "Необходимые документы",
        closestOfficeLocation: "Ближайший офис SSA",
      },
    },
    it: {
      translation: {
        select: "Seleziona una lingua",
        chat: "Chat con Pat.io",
        welcome:
          "Ciao! 👋 Sono Pat.io, il tuo assistente AI personale, qui per aiutarti con tutto ciò che riguarda i numeri di previdenza sociale (SSN), i numeri di identificazione del contribuente individuale (ITIN) e la Legge Locale 30 di New York City. Come posso aiutarti oggi? Hai domande su SSN, ITIN o sui tuoi diritti di accesso alla lingua secondo la Legge Locale 30?",
        error: "La risposta della rete non è stata corretta",
        sorry:
          "Spiacenti, si è verificato un errore durante l'elaborazione della tua richiesta.",
        SSN: "Come richiedere il SSN?",
        LL30: "Cos'è la Legge Locale 30 di NYC?",
        LL30Selected:
          "La Legge Locale 30 del 2017 (LL30) a New York City è una delle leggi più forti del paese e richiede che le agenzie cittadine nominate designino un coordinatore per l'accesso linguistico, sviluppino piani di implementazione per l'accesso linguistico, forniscano servizi di interpretazione telefonica in almeno 100 lingue, traducano i documenti più distribuiti nelle 10 lingue designate a livello cittadino e pubblichino segnaletica sull'accessibilità dei servizi di interpretazione gratuiti, tra gli altri requisiti. Puoi chiedermi di più su questa legge e il suo impatto sui tuoi diritti. Oppure puoi seguire il link qui sotto per saperne di più sulla legge nella tua lingua.",
        ITIN: "Cos'è un ITIN?",
        ITINSelected:
          "ITIN sta per Individual Taxpayer Identification Number. È un numero unico a 9 cifre assegnato agli individui che non sono idonei a ottenere un numero di previdenza sociale (SSN) a causa del loro status di immigrazione. Gli ITIN vengono utilizzati per la presentazione delle tasse e consentono agli individui di presentare le loro tasse e ricevere rimborsi. Puoi chiedermi di più sugli ITIN e su come richiederne uno. Oppure puoi seguire il link qui sotto per saperne di più sull'ITIN nella tua lingua.",
        other: "Altre domande",
        optionSelected: "Hai selezionato: ",
        ssnSelected:
          "Certo! Ho tutte le informazioni su come ottenere un SSN, ma prima, hai un visto valido?",
        validVisa: "La tua risposta su avere un visto valido è ",
        visaType:
          "Qual è il tuo tipo di visto? Si prega di scegliere tra le seguenti opzioni.",
        eligible:
          "Ottimo! Sei idoneo a richiedere il SSN, puoi scegliere un suggerimento qui sotto per ulteriori informazioni.",
        send: "Invia",
        office: "Posizione dell'Ufficio più Vicino",
        documents: "Documenti Richiesti",
        allRequired: "Hai tutti i documenti richiesti?",
        ssaOffice:
          "Perfetto! Sei pronto per richiedere il tuo SSN. Vuoi informazioni sull'ufficio SSA più vicino?",
        missingDocuments:
          "Nessun problema. Quali documenti ti mancano? Posso fornirti ulteriori informazioni su come ottenerli.",
        nearestOffice: "Posso avere il tuo codice postale per favore",
        anymoreHelp:
          "Va bene. C'è qualcos'altro con cui posso aiutarti riguardo la tua domanda per il SSN?",
        more: "Altro",
        yes: "Sì",
        no: "No",
        complete: "Ho tutti i documenti",
        incomplete: "Mi mancano dei documenti",
        type: "Scrivi il tuo messaggio...",
        irsITIN: "Scopri di più su ITIN dall'IRS.",
        nycITIN: "Scopri di più su ITIN.",
        TIN: "Scopri di più sui diversi numeri di identificazione del contribuente.",
        learnLL30:
          "Scopri di più sulla Legge Locale 30 di New York nella tua lingua.",
        startOver: "Ricominciamo",
        whatIsNYCLocalLaw30: "Cos'è la Legge Locale 30 di NYC?",
        whatIsAnITIN: "Cos'è un ITIN?",
        howToApplyForSSN: "Come richiedere il SSN?",
        documentsRequired: "Documenti Richiesti",
        closestOfficeLocation: "Posizione dell'Ufficio più Vicino",
      },
    },
    pl: {
      translation: {
        select: "Wybierz język",
        chat: "Czat z Pat.io",
        welcome:
          "Cześć! 👋 Jestem Pat.io, twoim osobistym asystentem AI, tutaj, aby pomóc we wszystkim, co związane z numerami ubezpieczenia społecznego (SSN), indywidualnymi numerami identyfikacyjnymi podatnika (ITIN) oraz Lokalnym Prawem 30 miasta Nowy Jork. Jak mogę ci dzisiaj pomóc? Masz pytania dotyczące SSN, ITIN lub swoich praw dostępu językowego zgodnie z Lokalnym Prawem 30?",
        error: "Odpowiedź sieci nie była prawidłowa",
        sorry:
          "Przepraszamy, wystąpił błąd podczas przetwarzania Twojego żądania.",
        SSN: "Jak ubiegać się o SSN?",
        LL30: "Czym jest Lokalne Prawo 30 NYC?",
        LL30Selected:
          "Lokalne Prawo 30 z 2017 roku (LL30) w Nowym Jorku jest jednym z najsilniejszych praw w kraju. Wymaga, aby objęte nim agencje miejskie wyznaczały koordynatora dostępu językowego, opracowywały plany wdrożenia dostępu językowego, zapewniały telefoniczną interpretację w co najmniej 100 językach, tłumaczyły najczęściej rozpowszechniane dokumenty na 10 wyznaczonych języków miejskich i umieszczały oznaczenia o dostępności bezpłatnych usług tłumaczeniowych, między innymi. Możesz zapytać mnie o więcej informacji na temat tego prawa i jego wpływu na twoje prawa. Lub możesz kliknąć link poniżej, aby dowiedzieć się więcej o tym prawie w swoim języku.",
        ITIN: "Czym jest ITIN?",
        ITINSelected:
          "ITIN oznacza Indywidualny Numer Identyfikacyjny Podatnika. Jest to unikalny 9-cyfrowy numer nadawany osobom, które nie kwalifikują się do uzyskania numeru ubezpieczenia społecznego (SSN) z powodu swojego statusu imigracyjnego. ITIN są używane do składania deklaracji podatkowych i umożliwiają osobom fizycznym składanie podatków i otrzymywanie zwrotów. Możesz zapytać mnie o więcej informacji o ITIN i o tym, jak się o niego ubiegać. Lub możesz kliknąć link poniżej, aby dowiedzieć się więcej o ITIN w swoim języku.",
        other: "Inne pytania",
        optionSelected: "Wybrałeś: ",
        ssnSelected:
          "Oczywiście! Mam wszystkie informacje na temat uzyskania SSN, ale najpierw, czy masz ważną wizę?",
        validVisa: "Twoja odpowiedź dotycząca posiadania ważnej wizy to ",
        visaType:
          "Jaki jest Twój rodzaj wizy? Wybierz jedną z poniższych opcji.",
        eligible:
          "Świetnie! Jesteś uprawniony do ubiegania się o SSN, możesz wybrać sugestię poniżej, aby uzyskać więcej informacji.",
        send: "Wyślij",
        office: "Najbliższa lokalizacja biura",
        documents: "Wymagane dokumenty",
        allRequired: "Czy masz wszystkie wymagane dokumenty?",
        ssaOffice:
          "Świetnie! Jesteś gotowy, aby ubiegać się o SSN. Czy chcesz uzyskać informacje o najbliższym biurze SSA?",
        missingDocuments:
          "Nie ma problemu. Jakich dokumentów Ci brakuje? Mogę dostarczyć więcej informacji o tym, jak je uzyskać.",
        nearestOffice: "Czy mogę prosić o twój kod pocztowy?",
        anymoreHelp:
          "W porządku. Czy mogę pomóc w czymś jeszcze w sprawie Twojego wniosku o SSN?",
        more: "Więcej",
        yes: "Tak",
        no: "Nie",
        complete: "Mam wszystkie dokumenty",
        incomplete: "Brakuje mi dokumentów",
        type: "Wpisz swoją wiadomość...",
        irsITIN: "Dowiedz się więcej o ITIN od IRS.",
        nycITIN: "Dowiedz się więcej o ITIN.",
        TIN: "Dowiedz się więcej o różnych numerach identyfikacji podatkowej.",
        learnLL30:
          "Dowiedz się więcej o Lokalnym Prawie 30 Nowego Jorku w swoim języku.",
        startOver: "Zacznij od nowa",
        whatIsNYCLocalLaw30: "Czym jest Lokalne Prawo 30 NYC?",
        whatIsAnITIN: "Czym jest ITIN?",
        howToApplyForSSN: "Jak ubiegać się o SSN?",
        documentsRequired: "Wymagane dokumenty",
        closestOfficeLocation: "Najbliższa lokalizacja biura",
      },
    },
    el: {
      translation: {
        select: "Επιλέξτε μια γλώσσα",
        chat: "Συνομιλία με το Pat.io",
        welcome:
          "Γεια σας! 👋 Είμαι ο Pat.io, ο προσωπικός σας βοηθός AI, εδώ για να σας βοηθήσω με οτιδήποτε σχετίζεται με Αριθμούς Κοινωνικής Ασφάλισης (SSN), Ατομικούς Αριθμούς Φορολογικού Αναγνωριστικού (ITIN), και τον Τοπικό Νόμο 30 της Νέας Υόρκης. Πώς μπορώ να σας βοηθήσω σήμερα; Έχετε ερωτήσεις σχετικά με SSN, ITIN ή τα δικαιώματά σας στην πρόσβαση σε γλώσσα σύμφωνα με τον Τοπικό Νόμο 30;",
        error: "Η απάντηση του δικτύου δεν ήταν εντάξει",
        sorry:
          "Συγγνώμη, υπήρξε ένα σφάλμα κατά την επεξεργασία του αιτήματός σας.",
        SSN: "Πώς να κάνετε αίτηση για SSN;",
        LL30: "Τι είναι ο Τοπικός Νόμος 30 της Νέας Υόρκης;",
        LL30Selected:
          "Ο Τοπικός Νόμος 30 του 2017 (LL30) στη Νέα Υόρκη είναι ένας από τους ισχυρότερους νόμους της χώρας και απαιτεί από τις καλυπτόμενες δημοτικές υπηρεσίες να διορίσουν έναν συντονιστή πρόσβασης στη γλώσσα, να αναπτύξουν σχέδια υλοποίησης πρόσβασης στη γλώσσα, να παρέχουν τηλεφωνική διερμηνεία σε τουλάχιστον 100 γλώσσες, να μεταφράσουν τα πιο συχνά διανεμόμενα έγγραφα στις 10 καθορισμένες δημοτικές γλώσσες, και να αναρτήσουν πινακίδες σχετικά με τη διαθεσιμότητα δωρεάν υπηρεσιών διερμηνείας, μεταξύ άλλων απαιτήσεων. Μπορείτε να με ρωτήσετε περισσότερα σχετικά με αυτόν τον νόμο και τον αντίκτυπό του στα δικαιώματά σας. Ή μπορείτε να ακολουθήσετε τον σύνδεσμο παρακάτω για να μάθετε περισσότερα σχετικά με τον νόμο στη γλώσσα σας.",
        ITIN: "Τι είναι το ITIN;",
        ITINSelected:
          "Το ITIN σημαίνει Ατομικός Αριθμός Φορολογικού Αναγνωριστικού (Individual Taxpayer Identification Number). Είναι ένας μοναδικός αριθμός 9 ψηφίων που εκχωρείται σε άτομα που δεν πληρούν τις προϋποθέσεις για να λάβουν Αριθμό Κοινωνικής Ασφάλισης (SSN) λόγω του μεταναστευτικού τους καθεστώτος. Τα ITIN χρησιμοποιούνται για φορολογικούς σκοπούς και επιτρέπουν στα άτομα να υποβάλλουν φορολογικές δηλώσεις και να λαμβάνουν επιστροφές φόρου. Μπορείτε να με ρωτήσετε περισσότερα για το ITIN και πώς να υποβάλετε αίτηση για ένα. Ή μπορείτε να ακολουθήσετε τον σύνδεσμο παρακάτω για να μάθετε περισσότερα σχετικά με το ITIN στη γλώσσα σας.",
        other: "Άλλες ερωτήσεις",
        optionSelected: "Επιλέξατε: ",
        ssnSelected:
          "Φυσικά! Έχω όλες τις πληροφορίες για την απόκτηση SSN, αλλά πρώτα, έχετε έγκυρη βίζα;",
        validVisa: "Η απάντησή σας για την κατοχή έγκυρης βίζας είναι ",
        visaType:
          "Ποιος είναι ο τύπος της βίζας σας; Επιλέξτε από τις παρακάτω επιλογές.",
        eligible:
          "Τέλεια! Είστε επιλέξιμος να κάνετε αίτηση για SSN, μπορείτε να επιλέξετε μια πρόταση παρακάτω για περισσότερες πληροφορίες.",
        send: "Αποστολή",
        office: "Πιο κοντινή τοποθεσία γραφείου",
        documents: "Απαιτούμενα έγγραφα",
        allRequired: "Έχετε όλα τα απαιτούμενα έγγραφα;",
        ssaOffice:
          "Τέλεια! Είστε έτοιμοι να κάνετε αίτηση για το SSN σας. Θέλετε πληροφορίες για το πιο κοντινό γραφείο SSA;",
        missingDocuments:
          "Κανένα πρόβλημα. Ποια έγγραφα σας λείπουν; Μπορώ να σας δώσω περισσότερες πληροφορίες για το πώς να τα αποκτήσετε.",
        nearestOffice: "Μπορώ να έχω τον ταχυδρομικό σας κώδικα παρακαλώ;",
        anymoreHelp:
          "Εντάξει. Υπάρχει κάτι άλλο που μπορώ να σας βοηθήσω σχετικά με την αίτησή σας για SSN;",
        more: "Περισσότερα",
        yes: "Ναι",
        no: "Όχι",
        complete: "Έχω όλα τα έγγραφα",
        incomplete: "Μου λείπουν έγγραφα",
        type: "Γράψτε το μήνυμά σας...",
        irsITIN: "Μάθετε περισσότερα για το ITIN από το IRS.",
        nycITIN: "Μάθετε περισσότερα για το ITIN.",
        TIN: "Μάθετε περισσότερα για τους διαφορετικούς Αριθμούς Φορολογικού Αναγνωριστικού.",
        learnLL30:
          "Μάθετε περισσότερα για τον Τοπικό Νόμο 30 της Νέας Υόρκης στη γλώσσα σας.",
        startOver: "Ξεκινήστε ξανά",
        whatIsNYCLocalLaw30: "Τι είναι ο Τοπικός Νόμος 30 της Νέας Υόρκης;",
        whatIsAnITIN: "Τι είναι το ITIN;",
        howToApplyForSSN: "Πώς να κάνετε αίτηση για SSN;",
        documentsRequired: "Απαιτούμενα έγγραφα",
        closestOfficeLocation: "Πιο κοντινή τοποθεσία γραφείου",
      },
    },
    yi: {
      translation: {
        select: "אויך אויף א שפּראַך",
        chat: "צאַט מיט פּאַט.אָיי",
        welcome:
          "העלא! 👋 איך בין Pat.io, אייער פּערזענלעכער אַי אַסיסטענט, דאָ צו העלפֿן מיט אַלץ וואָס איז פֿאַרבונדן מיט סאציאל סעקיוריטי נומערן (SSN), אינדיווידואלע שטייער אידענטיפיקאַציע נומערן (ITIN), און ניו יארק סיטי'ס לאָקאַל געזעץ 30. ווי קען איך העלפֿן היינט? האָט איר פֿראגן וועגן SSN, ITIN, אָדער אייערע רעכט צו שפּראַך אַקסעס אונטער לאָקאַל געזעץ 30?",
        error: "נעץ ענטפֿער איז נישט געווען גוט",
        sorry: "אנטשולדיגט, עס איז געווען אַ טעות אין פּראָצעסירן אייער בקשה.",
        SSN: "ווי אַזוי צו אַפּלייען פֿאַר SSN?",
        LL30: "וואָס איז NYC לאָקאַל געזעץ 30?",
        LL30Selected:
          "די לאָקאַל געזעץ 30 פון 2017 (LL30) אין ניו יארק סיטי איז איינער פון די שטאַרקסטע געזעצן אין לאַנד און פארלאנגט אז די אפגעדעקטע שטאָטישע אגענטורן זאלן באשטימען א שפּראַך אַקסעס קאָאָרדינאַטאָר, אַנטוויקלען פּלאַנען פֿאַר דורכפירונג פון שפּראַך אַקסעס, צושטעלן טעלעפֿאָנישער איבערזעצונג אויף כאטש 100 שפּראַכן, איבערזעצן זייערע מערסט אָפט פאַרשפּרייטע דאָקומענטן אויף די 10 באשטימטע שטאָטישע שפּראַכן, און אויסהענגען שילדן וועגן די בנימצא פון פרייע איבערזעצונג סערוויסן, צווישן אנדערע באדערפענישן. איר קענט מיך פרעגן מער וועגן דעם געזעץ און זיין השפּעה אויף אייערע רעכט. אדער איר קענט נאכפאָלגן דעם לינק אונטן צו לערנען מער וועגן דעם געזעץ אין אייער שפּראַך.",
        ITIN: "וואָס איז ITIN?",
        ITINSelected:
          "ITIN שטייט פאר אינדיווידועלער שטייער אידענטיפיקאציע נומער. עס איז א ייחודי 9-ציפער נומער וואס ווערט אויסגעטיילט צו מענטשן וואס זענען נישט בארעכטיגט צו באקומען א סאציאל סעקיוריטי נומער (SSN) צוליב זייער אימיגראציע סטאטוס. ITIN ווערט גענוצט פאר שטייער אייגנונגען און דערלויבט מענטשן צו איינגעבן זייערע שטייערן און באקומען ריפאנדן. איר קענט מיך פרעגן מער וועגן ITIN און ווי צו אַפּלייען פאר איינעם. אדער איר קענט נאכפאָלגן דעם לינק אונטן צו לערנען מער וועגן ITIN אין אייער שפּראַך.",
        other: "אנדערע פֿראגן",
        optionSelected: "איר האָט אויסגעקליבן: ",
        ssnSelected:
          "נאַטירלעך! איך האָב אַלע די אינפֿאָרמאַציע וועגן ווי צו באַקומען אַן SSN, אָבער קודם, צי איר האָט אַ גילטיק וויזע?",
        validVisa: "אייער ענטפער וועגן האָבן אַ גילטיק וויזע איז ",
        visaType:
          "וואָס איז דיין וויזע טיפּ? ביטע קלייַבן פֿון די אָפּציעס אונטן.",
        eligible:
          "פאַראכט! איר זענט בארעכטיגט צו אַפּלייען פֿאַר SSN, איר קענט אויסקלייַבן אַ פֿאָרשלאָג אונטן פֿאַר מער אינפֿאָרמאַציע.",
        send: "שיקן",
        office: "נאָענט אָפיס אָרט",
        documents: "נויטיקע דאָקומענטן",
        allRequired: "צי איר האָט אַלע די נויטיקע דאָקומענטן?",
        ssaOffice:
          "פאַראכט! איר זענט גרייט צו אַפּלייען פֿאַר אייער SSN. צי איר ווילן אינפֿאָרמאַציע וועגן דעם נאָענטסטן SSA אָפיס?",
        missingDocuments:
          "קיין פּראָבלעם. וואָס דאָקומענטן פעלן איר? איך קען צושטעלן מער אינפֿאָרמאַציע וועגן ווי צו באַקומען זיי.",
        nearestOffice: "מאַך מיר א טובה און געב מיר אייער זיפּ קאָד?",
        anymoreHelp:
          "אייד עס איז עפעס אנדערש וואָס איך קען אייך העלפֿן מיט וועגן אייער SSN אַפּליקאַציע?",
        more: "מער",
        yes: "יאָ",
        no: "ניין",
        complete: "איך האָב אַלע די דאָקומענטן",
        incomplete: "מיר פעלן דאָקומענטן",
        type: "שרייב אייער מעלדונג...",
        irsITIN: "לערנט מער וועגן ITIN פון די IRS.",
        nycITIN: "לערנט מער וועגן ITIN.",
        TIN: "לערנט מער וועגן די פארשידענע שטייער אידענטיפיקאציע נומערן.",
        learnLL30:
          "לערנט מער וועגן ניו יארק סיטי'ס לאָקאַל געזעץ 30 אין אייער שפּראַך.",
        startOver: "אָנהייב פון ס׳נײַ",
        whatIsNYCLocalLaw30: "וואָס איז NYC לאָקאַל געזעץ 30?",
        whatIsAnITIN: "וואָס איז ITIN?",
        howToApplyForSSN: "ווי אַזוי צו אַפּלייען פֿאַר SSN?",
        documentsRequired: "נויטיקע דאָקומענטן",
        closestOfficeLocation: "נאָענט אָפיס אָרט",
      },
    },
    he: {
      translation: {
        select: "בחר שפה",
        chat: "צ'אט עם Pat.io",
        welcome:
          "שלום! 👋 אני Pat.io, העוזר האישי שלך מבוסס AI, כאן לעזור לך בכל הקשור למספרי ביטוח לאומי (SSN), מספרי זיהוי מס אישיים (ITIN), וחוק מקומי 30 של העיר ניו יורק. איך אפשר לעזור לך היום? יש לך שאלות לגבי SSN, ITIN או הזכויות שלך לגישה לשפה לפי חוק מקומי 30?",
        error: "תגובת הרשת לא הייתה תקינה",
        sorry: "מצטערים, אירעה שגיאה בעיבוד הבקשה שלך.",
        SSN: "כיצד להגיש בקשה ל-SSN?",
        LL30: "מהו חוק מקומי 30 של ניו יורק?",
        LL30Selected:
          "חוק מקומי 30 משנת 2017 (LL30) בעיר ניו יורק הוא אחד מהחוקים החזקים ביותר במדינה ומחייב כי סוכנויות העירייה המכוסות ימנו רכז נגישות לשפה, יפתחו תוכניות ליישום נגישות לשפה, יספקו שירותי תרגום טלפוניים לפחות ב-100 שפות, יתרגמו את המסמכים הנפוצים ביותר לעשר השפות העירוניות המיועדות, ויתלו שלטים המיידעים על זמינות שירותי תרגום בחינם, בין דרישות נוספות. תוכל לשאול אותי עוד על החוק הזה וההשפעה שלו על הזכויות שלך. או שתוכל ללחוץ על הקישור למטה כדי ללמוד עוד על החוק בשפה שלך.",
        ITIN: "מהו ITIN?",
        ITINSelected:
          "ITIN הוא ראשי תיבות של Individual Taxpayer Identification Number (מספר זיהוי מס אישי). זהו מספר ייחודי בן 9 ספרות שניתן לאנשים שאינם זכאים לקבל מספר ביטוח לאומי (SSN) עקב מעמדם ההגירתי. ITIN משמש להגשת מסים ומאפשר לאנשים להגיש את המסים שלהם ולקבל החזרים. תוכל לשאול אותי עוד על ITIN וכיצד להגיש בקשה. או שתוכל ללחוץ על הקישור למטה כדי ללמוד עוד על ITIN בשפה שלך.",
        other: "שאלות אחרות",
        optionSelected: "בחרת: ",
        ssnSelected:
          "כמובן! יש לי את כל המידע על איך להגיש בקשה ל-SSN, אבל קודם, האם יש לך ויזה בתוקף?",
        validVisa: "התשובה שלך לגבי האם יש לך ויזה בתוקף היא ",
        visaType: "מה סוג הוויזה שלך? אנא בחר אחת מהאפשרויות למטה.",
        eligible:
          "מעולה! אתה זכאי להגיש בקשה ל-SSN, תוכל לבחור הצעה למטה כדי לקבל מידע נוסף.",
        send: "שלח",
        office: "מיקום המשרד הקרוב ביותר",
        documents: "מסמכים נדרשים",
        allRequired: "האם יש לך את כל המסמכים הנדרשים?",
        ssaOffice:
          "מעולה! אתה מוכן להגיש בקשה ל-SSN שלך. האם תרצה לקבל מידע על המשרד הקרוב ביותר של SSA?",
        missingDocuments:
          "אין בעיה. אילו מסמכים חסרים לך? אני יכול לספק מידע נוסף על איך להשיג אותם.",
        nearestOffice: "אפשר לקבל את המיקוד שלך בבקשה?",
        anymoreHelp:
          "בסדר. האם יש משהו נוסף שאני יכול לעזור לך בו בנוגע לבקשת ה-SSN שלך?",
        more: "עוד",
        yes: "כן",
        no: "לא",
        complete: "יש לי את כל המסמכים",
        incomplete: "חסרים לי מסמכים",
        type: "כתבו את ההודעה שלך...",
        irsITIN: "למידע נוסף על ITIN מה-IRS.",
        nycITIN: "למידע נוסף על ITIN.",
        TIN: "למידע נוסף על סוגי מספרי זיהוי המס השונים.",
        learnLL30: "למידע נוסף על חוק מקומי 30 של העיר ניו יורק בשפה שלך.",
        startOver: "התחל מחדש",
        whatIsNYCLocalLaw30: "מהו חוק מקומי 30 של ניו יורק?",
        whatIsAnITIN: "מהו ITIN?",
        howToApplyForSSN: "כיצד להגיש בקשה ל-SSN?",
        documentsRequired: "מסמכים נדרשים",
        closestOfficeLocation: "מיקום המשרד הקרוב ביותר",
      },
    },
    ht: {
      translation: {
        select: "Chwazi yon lang",
        chat: "Chat ak Pat.io",
        welcome:
          "Bonjou! 👋 Mwen se Pat.io, asistan pèsonèl AI ou, isit la pou ede ou ak tout sa ki gen rapò ak Nimewo Sekirite Sosyal (SSN), Nimewo Idantifikasyon Pèsonèl pou Taks (ITIN), ak Lwa Lokal 30 nan vil New York. Kijan mwen ka ede w jodi a? Èske w gen nenpòt kesyon sou SSN, ITIN oswa dwa ou genyen pou aksè nan sèvis lang anba Lwa Lokal 30?",
        error: "Repons rezo a pa t bon",
        sorry: "Padon, te gen yon erè nan trete demann ou an.",
        SSN: "Kijan pou aplike pou SSN?",
        LL30: "Kisa ki Lwa Lokal 30 NYC?",
        LL30Selected:
          "Lwa Lokal 30 an 2017 (LL30) nan vil New York se youn nan pi fò lwa nan peyi a epi li egzije ke ajans vil yo kouvri yo nonmen yon kowòdonatè aksè nan sèvis lang, devlope plan pou aplikasyon sèvis lang, bay entèpretasyon telefòn nan omwen 100 lang, tradui dokiman ki pi distribiye yo nan 10 lang vil la deziyen, epi afiche siy ki enfòme piblik la sou disponiblite sèvis entèpretasyon gratis, pami lòt egzijans yo. Ou ka mande m plis enfòmasyon sou lwa sa a ak enpak li sou dwa w yo. Oswa ou ka swiv lyen ki anba a pou aprann plis sou lwa a nan lang ou.",
        ITIN: "Kisa ki ITIN?",
        ITINSelected:
          "ITIN vle di Nimewo Idantifikasyon Pèsonèl pou Taks. Se yon nimewo inik 9 chif yo bay moun ki pa kalifye pou jwenn yon Nimewo Sekirite Sosyal (SSN) akòz estati imigrasyon yo. ITIN yo itilize pou fè deklarasyon taks epi yo pèmèt moun yo ranpli taks yo epi resevwa ranbousman. Ou ka mande m plis sou ITIN ak kijan pou aplike pou li. Oswa ou ka swiv lyen ki anba a pou aprann plis sou ITIN nan lang ou.",
        other: "Lòt kesyon",
        optionSelected: "Ou te chwazi: ",
        ssnSelected:
          "Natirèlman! Mwen gen tout enfòmasyon sou kijan pou w jwenn yon SSN, men anvan, èske w gen yon viza ki valab?",
        validVisa: "Repons ou sou si ou gen yon viza ki valab se ",
        visaType:
          "Ki kalite viza ou genyen? Tanpri chwazi youn nan opsyon ki anba yo.",
        eligible:
          "Ekselan! Ou kalifye pou aplike pou yon SSN, ou ka chwazi yon sijesyon anba a pou plis enfòmasyon.",
        send: "Voye",
        office: "Kote Biwo ki pi pre",
        documents: "Dokiman yo mande yo",
        allRequired: "Èske w gen tout dokiman yo mande yo?",
        ssaOffice:
          "Ekselan! Ou pare pou aplike pou SSN ou. Èske ou ta renmen enfòmasyon sou biwo SSA ki pi pre?",
        missingDocuments:
          "Pa gen pwoblèm. Ki dokiman ou manke? Mwen ka ba ou plis enfòmasyon sou kijan pou w jwenn yo.",
        nearestOffice: "Men enfòmasyon sou biwo SSA ki pi pre: ",
        anymoreHelp:
          "Dakò. Èske gen lòt bagay mwen ka ede w avèk konsènan aplikasyon SSN ou a?",
        more: "Plis",
        yes: "Wi",
        no: "Non",
        complete: "Mwen gen tout dokiman yo",
        incomplete: "Mwen manke dokiman",
        type: "Tape mesaj ou...",
        irsITIN: "Aprann plis sou ITIN nan men IRS.",
        nycITIN: "Aprann plis sou ITIN.",
        TIN: "Aprann plis sou diferan Nimewo Idantifikasyon pou Taks.",
        learnLL30: "Aprann plis sou Lwa Lokal 30 vil New York nan lang ou.",
        startOver: "Rekòmanse",
        whatIsNYCLocalLaw30: "Kisa ki Lwa Lokal 30 NYC?",
        whatIsAnITIN: "Kisa ki ITIN?",
        howToApplyForSSN: "Kijan pou aplike pou SSN?",
        documentsRequired: "Dokiman yo mande yo",
        closestOfficeLocation: "Kote Biwo ki pi pre",
      },
    },
    fr: {
      translation: {
        select: "Choisissez une langue",
        chat: "Chat avec Pat.io",
        welcome:
          "Bienvenue sur Pat.io ! 👋 Je suis votre assistant personnel AI, ici pour vous aider avec tout ce qui concerne les numéros de sécurité sociale (SSN), les numéros d'identification de contribuable individuel (ITIN), et la Loi Locale 30 de la ville de New York. Comment puis-je vous aider aujourd'hui ? Avez-vous des questions sur le SSN, l'ITIN ou vos droits à l'accès linguistique conformément à la Loi Locale 30 ?",
        error: "La réponse du réseau n'était pas correcte",
        sorry:
          "Désolé, une erreur s'est produite lors du traitement de votre demande.",
        SSN: "Comment demander un SSN ?",
        LL30: "Qu'est-ce que la Loi Locale 30 de NYC ?",
        LL30Selected:
          "La Loi Locale 30 de 2017 (LL30) à New York est l'une des lois les plus fortes du pays. Elle exige que les agences de la ville désignent un coordonnateur pour l'accès linguistique, élaborent des plans de mise en œuvre pour cet accès, fournissent des services d'interprétation téléphonique dans au moins 100 langues, traduisent les documents les plus fréquemment distribués dans les 10 langues désignées de la ville, et affichent des panneaux sur la disponibilité des services d'interprétation gratuits, entre autres exigences. Vous pouvez me poser des questions supplémentaires à ce sujet et découvrir l'impact de cette loi sur vos droits. Vous pouvez également suivre le lien ci-dessous pour en savoir plus sur la loi dans votre langue.",
        ITIN: "Qu'est-ce qu'un ITIN ?",
        ITINSelected:
          "ITIN signifie Individual Taxpayer Identification Number. Il s'agit d'un numéro unique de 9 chiffres attribué aux personnes qui ne sont pas éligibles pour obtenir un numéro de sécurité sociale (SSN) en raison de leur statut d'immigration. Les ITIN sont utilisés pour déclarer les impôts et permettent aux individus de déclarer leurs impôts et de recevoir des remboursements. Vous pouvez me poser d'autres questions sur l'ITIN et comment en faire la demande. Ou vous pouvez suivre le lien ci-dessous pour en savoir plus sur l'ITIN dans votre langue.",
        other: "Autres questions",
        optionSelected: "Vous avez sélectionné : ",
        ssnSelected:
          "Bien sûr ! J'ai toutes les informations sur comment obtenir un SSN, mais d'abord, avez-vous un visa valide ?",
        validVisa:
          "Votre réponse concernant la possession d'un visa valide est ",
        visaType:
          "Quel est votre type de visa ? Veuillez choisir parmi les options ci-dessous.",
        eligible:
          "Super ! Vous êtes éligible pour demander un SSN, vous pouvez choisir une suggestion ci-dessous pour plus d'informations.",
        send: "Envoyer",
        office: "Emplacement du bureau le plus proche",
        documents: "Documents requis",
        allRequired: "Avez-vous tous les documents requis ?",
        ssaOffice:
          "Super ! Vous êtes prêt à demander votre SSN. Souhaitez-vous obtenir des informations sur le bureau SSA le plus proche ?",
        missingDocuments:
          "Pas de problème. Quels documents vous manquent ? Je peux vous fournir plus d'informations sur comment les obtenir.",
        nearestOffice:
          "Voici les informations sur le bureau SSA le plus proche : ",
        anymoreHelp:
          "D'accord. Y a-t-il autre chose que je puisse vous aider à propos de votre demande de SSN ?",
        more: "Plus",
        yes: "Oui",
        no: "Non",
        complete: "J'ai tous les documents",
        incomplete: "Il me manque des documents",
        type: "Tapez votre message...",
        irsITIN: "En savoir plus sur l'ITIN auprès de l'IRS.",
        nycITIN: "En savoir plus sur l'ITIN.",
        TIN: "En savoir plus sur les différents numéros d'identification fiscale.",
        learnLL30:
          "En savoir plus sur la Loi Locale 30 de la ville de New York dans votre langue.",
        startOver: "Recommencer",
        whatIsNYCLocalLaw30: "Qu'est-ce que la Loi Locale 30 de NYC ?",
        whatIsAnITIN: "Qu'est-ce qu'un ITIN ?",
        howToApplyForSSN: "Comment demander un SSN ?",
        documentsRequired: "Documents requis",
        closestOfficeLocation: "Emplacement du bureau le plus proche",
      },
    },
    es: {
      translation: {
        select: "Elige un idioma",
        chat: "Chat con Pat.io",
        welcome:
          "¡Hola! 👋 Soy Pat.io, tu asistente personal de inteligencia artificial, aquí para ayudarte con todo lo relacionado con los Números de Seguridad Social (SSN), los Números de Identificación Personal del Contribuyente (ITIN) y la Ley Local 30 de la ciudad de Nueva York. ¿En qué puedo ayudarte hoy? ¿Tienes preguntas sobre el SSN, ITIN o tus derechos de acceso al idioma bajo la Ley Local 30?",
        error: "La respuesta de la red no fue correcta",
        sorry: "Lo sentimos, hubo un error al procesar tu solicitud.",
        SSN: "Cómo solicitar el SSN",
        LL30: "¿Qué es la Ley Local 30 de NYC?",
        LL30Selected:
          "La Ley Local 30 de 2017 (LL30) en la ciudad de Nueva York es una de las leyes más fuertes del país. Exige que las agencias cubiertas de la ciudad designen un coordinador de acceso a idiomas, desarrollen planes de implementación de acceso lingüístico, proporcionen interpretación telefónica en al menos 100 idiomas, traduzcan sus documentos más comúnmente distribuidos a los 10 idiomas designados por la ciudad, y publiquen letreros sobre la disponibilidad de servicios de interpretación gratuitos, entre otros requisitos. Puedes preguntarme más sobre esta ley y su impacto en tus derechos. O puedes seguir el enlace a continuación para aprender más sobre la ley en tu idioma.",
        ITIN: "¿Qué es un ITIN?",
        ITINSelected:
          "ITIN significa Número de Identificación Personal del Contribuyente (Individual Taxpayer Identification Number). Es un número único de 9 dígitos asignado a personas que no son elegibles para obtener un Número de Seguridad Social (SSN) debido a su estatus migratorio. Los ITIN se utilizan para la presentación de impuestos y permiten a las personas declarar sus impuestos y recibir reembolsos. Puedes preguntarme más sobre el ITIN y cómo solicitar uno. O puedes seguir el enlace a continuación para aprender más sobre el ITIN en tu idioma.",
        other: "Otras preguntas",
        optionSelected: "Has seleccionado: ",
        ssnSelected:
          "¡Por supuesto! Tengo toda la información sobre cómo obtener un SSN, pero primero, ¿tienes una visa válida?",
        validVisa: "Tu respuesta sobre si tienes una visa válida es ",
        visaType:
          "¿Cuál es tu tipo de visa? Por favor, elige una opción a continuación.",
        eligible:
          "¡Genial! Eres elegible para solicitar un SSN, puedes elegir una sugerencia abajo para más información.",
        send: "Enviar",
        office: "Ubicación de la oficina más cercana",
        documents: "Documentos requeridos",
        allRequired: "¿Tienes todos los documentos requeridos?",
        ssaOffice:
          "¡Genial! Estás listo para solicitar tu SSN. ¿Te gustaría obtener información sobre la oficina del SSA más cercana?",
        missingDocuments:
          "No hay problema. ¿Qué documentos te faltan? Puedo proporcionarte más información sobre cómo obtenerlos.",
        nearestOffice:
          "Aquí tienes la información sobre la oficina del SSA más cercana: ",
        anymoreHelp:
          "De acuerdo. ¿Hay algo más en lo que pueda ayudarte con respecto a tu solicitud de SSN?",
        more: "Más",
        yes: "Sí",
        no: "No",
        complete: "Tengo todos los documentos",
        incomplete: "Me faltan documentos",
        type: "Escribe tu mensaje...",
        irsITIN: "Aprende más sobre el ITIN del IRS.",
        nycITIN: "Aprende más sobre el ITIN.",
        TIN: "Aprende más sobre los diferentes Números de Identificación de Contribuyente.",
        learnLL30:
          "Aprende más sobre la Ley Local 30 de la ciudad de Nueva York en tu idioma.",
        startOver: "Comenzar de nuevo",
        whatIsNYCLocalLaw30: "¿Qué es la Ley Local 30 de NYC?",
        whatIsAnITIN: "¿Qué es un ITIN?",
        howToApplyForSSN: "Cómo solicitar el SSN",
        documentsRequired: "Documentos requeridos",
        closestOfficeLocation: "Ubicación de la oficina más cercana",
      },
    },
    pt: {
      translation: {
        select: "Escolha um idioma",
        chat: "Chat com Pat.io",
        welcome:
          "Olá! 👋 Eu sou o Pat.io, seu assistente pessoal de IA, aqui para ajudar com tudo relacionado a Números de Seguro Social (SSN), Números de Identificação de Contribuinte Individual (ITIN) e a Lei Local 30 da cidade de Nova York. Como posso te ajudar hoje? Você tem alguma dúvida sobre SSN, ITIN ou seus direitos de acesso ao idioma de acordo com a Lei Local 30?",
        error: "A resposta da rede não foi ok",
        sorry: "Desculpe, ocorreu um erro ao processar sua solicitação.",
        SSN: "Como solicitar o SSN?",
        LL30: "O que é a Lei Local 30 de NYC?",
        LL30Selected:
          "A Lei Local 30 de 2017 (LL30) na cidade de Nova York é uma das leis mais fortes do país. Ela exige que as agências municipais designadas nomeiem um coordenador de acesso ao idioma, desenvolvam planos de implementação de acesso linguístico, forneçam serviços de interpretação telefônica em pelo menos 100 idiomas, traduzam seus documentos mais distribuídos para os 10 idiomas designados pela cidade e coloquem avisos sobre a disponibilidade de serviços de interpretação gratuitos, entre outras exigências. Você pode me perguntar mais sobre esta lei e seu impacto em seus direitos. Ou você pode seguir o link abaixo para saber mais sobre a lei em seu idioma.",
        ITIN: "O que é um ITIN?",
        ITINSelected:
          "ITIN significa Número de Identificação de Contribuinte Individual (Individual Taxpayer Identification Number). É um número único de 9 dígitos atribuído a pessoas que não são elegíveis para obter um Número de Seguro Social (SSN) devido ao seu status migratório. Os ITINs são usados para fins de declaração de impostos e permitem que as pessoas apresentem seus impostos e recebam reembolsos. Você pode me perguntar mais sobre o ITIN e como solicitá-lo. Ou pode seguir o link abaixo para saber mais sobre o ITIN no seu idioma.",
        other: "Outras perguntas",
        optionSelected: "Você selecionou: ",
        ssnSelected:
          "Claro! Eu tenho todas as informações sobre como obter um SSN, mas primeiro, você tem um visto válido?",
        validVisa: "Sua resposta sobre ter um visto válido é ",
        visaType:
          "Qual é o tipo do seu visto? Por favor, escolha uma das opções abaixo.",
        eligible:
          "Ótimo! Você está qualificado para solicitar um SSN, você pode escolher uma sugestão abaixo para obter mais informações.",
        send: "Enviar",
        office: "Localização do escritório mais próximo",
        documents: "Documentos necessários",
        allRequired: "Você tem todos os documentos necessários?",
        ssaOffice:
          "Ótimo! Você está pronto para solicitar seu SSN. Gostaria de obter informações sobre o escritório SSA mais próximo?",
        missingDocuments:
          "Sem problemas. Quais documentos estão faltando? Posso fornecer mais informações sobre como obtê-los.",
        nearestOffice:
          "Aqui estão as informações sobre o escritório SSA mais próximo: ",
        anymoreHelp:
          "Tudo bem. Posso te ajudar com mais alguma coisa em relação à sua solicitação de SSN?",
        more: "Mais",
        yes: "Sim",
        no: "Não",
        complete: "Tenho todos os documentos",
        incomplete: "Estou faltando documentos",
        type: "Digite sua mensagem...",
        irsITIN: "Saiba mais sobre o ITIN com o IRS.",
        nycITIN: "Saiba mais sobre o ITIN.",
        TIN: "Saiba mais sobre os diferentes Números de Identificação de Contribuintes.",
        learnLL30:
          "Saiba mais sobre a Lei Local 30 da cidade de Nova York no seu idioma.",
        startOver: "Recomeçar",
        whatIsNYCLocalLaw30: "O que é a Lei Local 30 de NYC?",
        whatIsAnITIN: "O que é um ITIN?",
        howToApplyForSSN: "Como solicitar o SSN?",
        documentsRequired: "Documentos necessários",
        closestOfficeLocation: "Localização do escritório mais próximo",
      },
    },
    zh: {
      translation: {
        select: "选择一种语言",
        chat: "与 Pat.io 聊天",
        welcome:
          "你好！👋 我是 Pat.io，您的个人 AI 助手，专门帮助您处理有关社会安全号码 (SSN)、个人纳税识别号 (ITIN) 和纽约市第30号地方法律的所有问题。今天我可以为您提供什么帮助呢？您有关于 SSN、ITIN 或根据第30号地方法律享有的语言访问权的问题吗？",
        error: "网络响应不正常",
        sorry: "抱歉，处理您的请求时出现错误。",
        SSN: "如何申请社会安全号码 (SSN)",
        LL30: "什么是纽约市第30号地方法律？",
        LL30Selected:
          "纽约市的第30号地方法律 (LL30) 于2017年通过，是美国最强有力的法律之一。它要求相关的市政府机构指定一位语言访问协调员，制定语言访问实施计划，提供至少100种语言的电话口译服务，将其最常发布的文件翻译成城市指定的10种语言，并张贴关于提供免费口译服务的标志，等等。您可以问我更多关于这项法律的信息，以及它对您权利的影响。或者，您可以点击下方链接，了解更多关于该法律的内容。",
        ITIN: "什么是 ITIN？",
        ITINSelected:
          "ITIN 是指个人纳税识别号 (Individual Taxpayer Identification Number)。它是一个9位数的唯一号码，分配给那些因移民身份而无法获得社会安全号码 (SSN) 的个人。ITIN 用于报税，并允许个人申报纳税和领取退税。您可以向我询问更多关于 ITIN 及其申请方式的详细信息。或者，您可以点击下方链接，了解更多关于 ITIN 的信息。",
        other: "其他问题",
        optionSelected: "您选择了：",
        ssnSelected:
          "当然！我有关于如何申请社会安全号码的所有信息，但首先，您有有效签证吗？",
        validVisa: "您关于是否持有有效签证的回答是 ",
        visaType: "您的签证类型是什么？请选择以下选项之一。",
        eligible:
          "很好！您有资格申请社会安全号码，您可以选择以下建议以获取更多信息。",
        send: "发送",
        office: "最近的办事处位置",
        documents: "所需文件",
        allRequired: "您是否有所有必需的文件？",
        ssaOffice:
          "很好！您已经准备好申请您的社会安全号码。您是否想了解最近的社会安全管理局办事处的信息？",
        missingDocuments:
          "没问题。您缺少哪些文件？我可以提供更多关于如何获取这些文件的信息。",
        nearestOffice: "以下是最近的社会安全管理局办事处信息：",
        anymoreHelp:
          "好的。关于您的社会安全号码申请，还有什么其他我可以帮助的吗？",
        more: "更多",
        yes: "是",
        no: "否",
        complete: "我有所有文件",
        incomplete: "我缺少文件",
        type: "输入您的消息...",
        irsITIN: "了解更多 IRS 提供的 ITIN 信息。",
        nycITIN: "了解更多关于 ITIN 的信息。",
        TIN: "了解更多不同类型的纳税人识别号。",
        learnLL30: "了解更多关于纽约市第30号地方法律的内容，支持您的语言。",
        startOver: "重新开始",
        whatIsNYCLocalLaw30: "什么是纽约市第30号地方法律？",
        whatIsAnITIN: "什么是 ITIN？",
        howToApplyForSSN: "如何申请社会安全号码 (SSN)",
        documentsRequired: "所需文件",
        closestOfficeLocation: "最近的办事处位置",
      },
    },
    yue: {
      translation: {
        select: "選擇一種語言",
        chat: "與 Pat.io 聊天",
        welcome:
          "你好！👋 我係 Pat.io，你嘅個人 AI 助手，專門幫你處理有關社會安全號碼 (SSN)、個人納稅識別號碼 (ITIN) 同紐約市第30號本地法律嘅問題。今日有咩可以幫到你呢？你有關於 SSN、ITIN 或者根據第30號本地法律享有嘅語言服務權利嘅問題嗎？",
        error: "網絡響應唔正常",
        sorry: "對唔住，處理你嘅請求時出現錯誤。",
        SSN: "點樣申請社會安全號碼 (SSN)",
        LL30: "咩係紐約市第30號本地法律？",
        LL30Selected:
          "紐約市嘅第30號本地法律 (LL30) 係 2017 年通過，係全國最嚴格嘅法律之一。呢條法例要求相關嘅市政府機構指定一個語言協調員，制定語言服務計劃，提供最少 100 種語言嘅電話口譯服務，將佢哋嘅常見文件翻譯成 10 種城市指定語言，並張貼標識，通知市民提供免費嘅口譯服務，等等。你可以問我更多關於呢條法律嘅問題，或者了解呢條法律對你權利嘅影響。你亦可以點擊下方鏈接，了解更多關於呢條法律嘅內容。",
        ITIN: "咩係 ITIN？",
        ITINSelected:
          "ITIN 係指個人納稅識別號碼 (Individual Taxpayer Identification Number)。呢個 9 位數嘅唯一號碼係俾嗰啲因為移民身份而唔可以攞到社會安全號碼 (SSN) 嘅人。ITIN 主要用作報稅用途，讓人可以報稅同攞返稅金。你可以問我更多關於 ITIN 同埋點樣申請嘅資訊。或者你可以點擊下方鏈接，了解更多關於 ITIN 嘅資料。",
        other: "其他問題",
        optionSelected: "你揀咗：",
        ssnSelected:
          "當然啦！我有所有關於點樣申請社會安全號碼嘅資訊，但首先，你有有效簽證嗎？",
        validVisa: "你關於有冇有效簽證嘅回應係 ",
        visaType: "你嘅簽證類型係咩？請揀下面其中一個選項。",
        eligible:
          "好！你有資格申請社會安全號碼，你可以揀下面嘅建議嚟攞更多資訊。",
        send: "發送",
        office: "最近嘅辦公室位置",
        documents: "所需文件",
        allRequired: "你有冇齊所有所需文件？",
        ssaOffice:
          "好！你準備好申請你嘅社會安全號碼啦。你想知道最近嘅社會安全辦公室資料嗎？",
        missingDocuments:
          "冇問題。你仲差咩文件？我可以提供更多關於點樣攞到文件嘅資訊。",
        nearestOffice: "以下係最近嘅社會安全辦公室資料：",
        anymoreHelp:
          "好。關於你嘅社會安全號碼申請，仲有冇其他我可以幫你嘅地方？",
        more: "更多",
        yes: "係",
        no: "唔係",
        complete: "我有齊所有文件",
        incomplete: "我仲差文件",
        type: "輸入您的消息...",
        irsITIN: "了解更多 IRS 提供嘅 ITIN 資訊。",
        nycITIN: "了解更多關於 ITIN 嘅資訊。",
        TIN: "了解更多唔同嘅納稅人識別號碼。",
        learnLL30: "了解更多關於紐約市第30號本地法律嘅內容，支持你嘅語言。",
        startOver: "重新開始",
        whatIsNYCLocalLaw30: "咩係紐約市第30號本地法律？",
        whatIsAnITIN: "咩係 ITIN？",
        howToApplyForSSN: "點樣申請社會安全號碼 (SSN)",
        documentsRequired: "所需文件",
        closestOfficeLocation: "最近嘅辦公室位置",
      },
    },
    hi: {
      translation: {
        select: "एक भाषा चुनें",
        chat: "Pat.io के साथ चैट करें",
        welcome:
          "नमस्ते! 👋 मैं Pat.io हूँ, आपका व्यक्तिगत AI सहायक, जो आपको सामाजिक सुरक्षा संख्या (SSN), व्यक्तिगत कर पहचान संख्या (ITIN), और न्यूयॉर्क शहर के स्थानीय कानून 30 के बारे में किसी भी प्रकार की सहायता के लिए यहाँ हूँ। मैं आज आपकी किस तरह मदद कर सकता हूँ? क्या आपके पास SSN, ITIN, या स्थानीय कानून 30 के तहत भाषा पहुँच के अधिकारों से संबंधित कोई सवाल है?",
        error: "नेटवर्क प्रतिक्रिया ठीक नहीं थी",
        sorry: "क्षमा करें, आपके अनुरोध को संसाधित करने में एक त्रुटि हुई।",
        SSN: "SSN के लिए आवेदन कैसे करें?",
        LL30: "NYC का स्थानीय कानून 30 क्या है?",
        LL30Selected:
          "न्यूयॉर्क शहर का स्थानीय कानून 30 (LL30) 2017 में पारित हुआ था और यह देश के सबसे मजबूत कानूनों में से एक है। यह कानून यह सुनिश्चित करता है कि नगर एजेंसियाँ भाषा समन्वयक नियुक्त करें, भाषा सेवा कार्यान्वयन योजनाएँ बनाएं, 100 से अधिक भाषाओं में फोन पर व्याख्या सेवाएँ प्रदान करें, और अपनी सबसे आम वितरित की गई दस्तावेज़ों का 10 नामांकित शहर की भाषाओं में अनुवाद करें। आप मुझसे इस कानून के बारे में और इसके आपके अधिकारों पर पड़ने वाले प्रभाव के बारे में पूछ सकते हैं। आप नीचे दिए गए लिंक का अनुसरण करके इस कानून के बारे में अपनी भाषा में अधिक जान सकते हैं।",
        ITIN: "ITIN क्या है?",
        ITINSelected:
          "ITIN का मतलब है व्यक्तिगत कर पहचान संख्या (Individual Taxpayer Identification Number)। यह एक 9 अंकों का अनोखा नंबर है जिसे उन व्यक्तियों को जारी किया जाता है जो अपनी आप्रवासन स्थिति के कारण सामाजिक सुरक्षा संख्या (SSN) प्राप्त करने के योग्य नहीं होते हैं। ITIN का उपयोग कर दाखिल करने के उद्देश्यों के लिए किया जाता है और यह व्यक्तियों को कर दाखिल करने और धनवापसी प्राप्त करने की अनुमति देता है। आप मुझसे ITIN और इसके लिए आवेदन करने के बारे में अधिक जानकारी पूछ सकते हैं। या आप नीचे दिए गए लिंक का अनुसरण करके अपनी भाषा में ITIN के बारे में अधिक जान सकते हैं।",
        other: "अन्य प्रश्न",
        optionSelected: "आपने चुना: ",
        ssnSelected:
          "बिलकुल! मेरे पास SSN प्राप्त करने के बारे में सारी जानकारी है, लेकिन पहले, क्या आपके पास वैध वीजा है?",
        validVisa: "वैध वीजा होने पर आपकी प्रतिक्रिया है ",
        visaType:
          "आपका वीजा प्रकार क्या है? कृपया नीचे दिए गए विकल्पों में से चुनें।",
        eligible:
          "बहुत अच्छा! आप SSN के लिए आवेदन करने के योग्य हैं, अधिक जानकारी के लिए नीचे एक सुझाव चुन सकते हैं।",
        send: "भेजें",
        office: "निकटतम कार्यालय का स्थान",
        documents: "आवश्यक दस्तावेज़",
        allRequired: "क्या आपके पास सभी आवश्यक दस्तावेज़ हैं?",
        ssaOffice:
          "बहुत अच्छा! आप अपने SSN के लिए आवेदन करने के लिए तैयार हैं। क्या आप निकटतम SSA कार्यालय की जानकारी प्राप्त करना चाहेंगे?",
        missingDocuments:
          "कोई बात नहीं। कौन से दस्तावेज़ आपके पास नहीं हैं? मैं आपको उन्हें प्राप्त करने के बारे में अधिक जानकारी दे सकता हूँ।",
        nearestOffice: "यहाँ निकटतम SSA कार्यालय की जानकारी है: ",
        anymoreHelp:
          "ठीक है। क्या SSN आवेदन के संबंध में मैं आपकी और किसी मदद कर सकता हूँ?",
        more: "और",
        yes: "हाँ",
        no: "नहीं",
        complete: "मेरे पास सभी दस्तावेज़ हैं",
        incomplete: "मेरे पास दस्तावेज़ नहीं हैं",
        type: "अपने संदेश दर्ज करें...",
        irsITIN: "IRS से ITIN के बारे में अधिक जानें।",
        nycITIN: "ITIN के बारे में अधिक जानें।",
        TIN: "विभिन्न कर पहचान संख्या के बारे में अधिक जानें।",
        learnLL30:
          "अपनी भाषा में न्यूयॉर्क शहर के स्थानीय कानून 30 के बारे में अधिक जानें।",
        startOver: "फिर से शुरू करें",
        whatIsNYCLocalLaw30: "NYC का स्थानीय कानून 30 क्या है?",
        whatIsAnITIN: "ITIN क्या है?",
        howToApplyForSSN: "SSN के लिए आवेदन कैसे करें?",
        documentsRequired: "आवश्यक दस्तावेज़",
        closestOfficeLocation: "निकटतम कार्यालय का स्थान",
      },
    },
    bn: {
      translation: {
        select: "একটি ভাষা বাছাই করুন",
        chat: "Pat.io এর সাথে চ্যাট করুন",
        welcome:
          "হ্যালো! 👋 আমি Pat.io, আপনার ব্যক্তিগত AI সহকারী, আমি এখানে এসেছি আপনাকে সামাজিক নিরাপত্তা নম্বর (SSN), ব্যক্তিগত কর শনাক্তকরণ নম্বর (ITIN), এবং নিউইয়র্ক শহরের লোকাল ল 30 সম্পর্কিত যে কোনও প্রশ্নে সহায়তা করতে। আমি আজ আপনাকে কীভাবে সাহায্য করতে পারি? আপনার কি SSN, ITIN, অথবা লোকাল ল 30-এর অধীনে আপনার ভাষার অধিকার সম্পর্কে কোনও প্রশ্ন আছে?",
        error: "নেটওয়ার্ক প্রতিক্রিয়া ঠিক ছিল না",
        sorry: "দুঃখিত, আপনার অনুরোধ প্রক্রিয়াকরণে একটি ত্রুটি ঘটেছে।",
        SSN: "SSN এর জন্য কীভাবে আবেদন করবেন?",
        LL30: "NYC-এর লোকাল ল 30 কী?",
        LL30Selected:
          "নিউইয়র্ক শহরের লোকাল ল 30 (LL30) 2017 সালে পাস হয়েছে এবং এটি দেশের অন্যতম শক্তিশালী আইন। এটি নিশ্চিত করে যে শহরের আয়ত্তাধীন সংস্থাগুলি ভাষা অ্যাক্সেস সমন্বয়কারী নিয়োগ করবে, ভাষা পরিষেবা বাস্তবায়ন পরিকল্পনা তৈরি করবে, কমপক্ষে 100টি ভাষায় টেলিফোন ব্যাখ্যা পরিষেবা সরবরাহ করবে, এবং তাদের সর্বাধিক প্রচলিত নথিগুলি শহরের 10টি মনোনীত ভাষায় অনুবাদ করবে। আপনি আমাকে এই আইন সম্পর্কে এবং আপনার অধিকারগুলিতে এর প্রভাব সম্পর্কে আরও প্রশ্ন করতে পারেন। অথবা, আপনি নিচের লিঙ্কটি অনুসরণ করে আপনার ভাষায় এই আইন সম্পর্কে আরও জানতে পারেন।",
        ITIN: "ITIN কী?",
        ITINSelected:
          "ITIN মানে হল ব্যক্তিগত কর শনাক্তকরণ নম্বর (Individual Taxpayer Identification Number)। এটি একটি 9-অঙ্কের অনন্য নম্বর যা তাদের দেওয়া হয় যারা তাদের অভিবাসন অবস্থার কারণে একটি সামাজিক নিরাপত্তা নম্বর (SSN) পেতে অযোগ্য। ITIN কর ফাইলিংয়ের উদ্দেশ্যে ব্যবহৃত হয় এবং ব্যক্তিদের তাদের কর ফাইল করতে এবং ফেরত পেতে সক্ষম করে। আপনি আমাকে ITIN এবং কীভাবে আবেদন করবেন সে সম্পর্কে আরও জিজ্ঞাসা করতে পারেন। অথবা আপনি নিচের লিঙ্কটি অনুসরণ করে আপনার ভাষায় ITIN সম্পর্কে আরও জানতে পারেন।",
        other: "অন্যান্য প্রশ্ন",
        optionSelected: "আপনি নির্বাচন করেছেন: ",
        ssnSelected:
          "অবশ্যই! আমার কাছে SSN পাওয়ার সমস্ত তথ্য রয়েছে, কিন্তু প্রথমে, আপনার কি বৈধ ভিসা আছে?",
        validVisa: "বৈধ ভিসা থাকার বিষয়ে আপনার উত্তর হলো ",
        visaType:
          "আপনার ভিসার ধরন কী? অনুগ্রহ করে নিচের বিকল্পগুলির মধ্যে একটি নির্বাচন করুন।",
        eligible:
          "দারুণ! আপনি SSN-এর জন্য আবেদন করতে যোগ্য, আপনি আরও তথ্যের জন্য নিচের একটি পরামর্শ বেছে নিতে পারেন।",
        send: "পাঠান",
        office: "নিকটস্থ অফিসের অবস্থান",
        documents: "প্রয়োজনীয় নথি",
        allRequired: "আপনার কি সমস্ত প্রয়োজনীয় নথি আছে?",
        ssaOffice:
          "দারুণ! আপনি আপনার SSN-এর জন্য আবেদন করতে প্রস্তুত। আপনি কি নিকটস্থ SSA অফিসের তথ্য জানতে চান?",
        missingDocuments:
          "সমস্যা নেই। আপনার কোন নথি গুলির প্রয়োজন? আমি কীভাবে সেগুলি পেতে পারেন তার সম্পর্কে আরও তথ্য সরবরাহ করতে পারি।",
        nearestOffice: "এখানে নিকটস্থ SSA অফিসের তথ্য দেওয়া হলো: ",
        anymoreHelp:
          "ঠিক আছে। আপনার SSN আবেদন সম্পর্কে আমি কি আরও কিছু সাহায্য করতে পারি?",
        more: "আরও",
        yes: "হ্যাঁ",
        no: "না",
        complete: "আমার সমস্ত নথি আছে",
        incomplete: "আমার কিছু নথি নেই",
        type: "আপনার বার্তা লিখুন...",
        irsITIN: "IRS থেকে ITIN সম্পর্কে আরও জানুন।",
        nycITIN: "ITIN সম্পর্কে আরও জানুন।",
        TIN: "বিভিন্ন কর শনাক্তকরণ নম্বর সম্পর্কে আরও জানুন।",
        learnLL30:
          "আপনার ভাষায় নিউইয়র্ক শহরের লোকাল ল 30 সম্পর্কে আরও জানুন।",
        startOver: "আবার শুরু করুন",
        whatIsNYCLocalLaw30: "NYC-এর লোকাল ল 30 কী?",
        whatIsAnITIN: "ITIN নম্বর কী?",
        howToApplyForSSN: "SSN এর জন্য কীভাবে আবেদন করবেন?",
        documentsRequired: "প্রয়োজনীয় নথি",
        closestOfficeLocation: "নিকটস্থ অফিসের অবস্থান",
      },
    },
    te: {
      translation: {
        select: "భాషను ఎంచుకోండి",
        chat: "Pat.io తో చాట్ చేయండి",
        welcome:
          "హలో! 👋 నేను Pat.io, మీ వ్యక్తిగత AI సహాయకుడు, మీకు సామాజిక భద్రతా సంఖ్య (SSN), వ్యక్తిగత పన్ను గుర్తింపు సంఖ్య (ITIN), మరియు న్యూయార్క్ నగరంలోని లోకల్ లా 30 గురించి ఏవైనా ప్రశ్నలపై సహాయం చేయడానికి ఇక్కడ ఉన్నాను. నేను మీకు ఈరోజు ఎలా సహాయపడగలను? SSN, ITIN, లేదా లోకల్ లా 30 కింద మీకు ఉన్న భాషా సేవల హక్కుల గురించి మీకు ఏవైనా ప్రశ్నలు ఉన్నాయా?",
        error: "నెట్‌వర్క్ ప్రతిస్పందన సరిగా లేదు",
        sorry: "క్షమించండి, మీ అభ్యర్థనను ప్రాసెస్ చేయడంలో లోపం జరిగింది.",
        SSN: "SSN కోసం ఎలా దరఖాస్తు చేసుకోవాలి?",
        LL30: "NYC యొక్క లోకల్ లా 30 ఏమిటి?",
        LL30Selected:
          "న్యూయార్క్ నగరంలోని లోకల్ లా 30 (LL30) 2017లో ఆమోదించబడింది మరియు ఇది దేశంలోని అత్యంత బలమైన చట్టాల్లో ఒకటి. ఈ చట్టం నగర సంస్థలు భాషా అక్సెస్ కోఆర్డినేటర్లను నియమించాలని, భాషా సేవల అమలు ప్రణాళికలను రూపొందించాలని, కనీసం 100 భాషల్లో టెలిఫోన్ అనువాద సేవలను అందించాలని, మరియు నగరంలోని 10 నామినేటెడ్ భాషలలో వారి ఎక్కువగా పంపిణీ చేయబడే పత్రాలను అనువదించాలని నిర్ధారిస్తుంది. మీరు ఈ చట్టం గురించి మరింత మరియు ఇది మీ హక్కులపై ఏ విధమైన ప్రభావం చూపుతుందో అడగవచ్చు. లేదా, మీరు కింది లింక్‌ను అనుసరించి ఈ చట్టం గురించి మీ భాషలో మరింత తెలుసుకోండి.",
        ITIN: "ITIN అంటే ఏమిటి?",
        ITINSelected:
          "ITIN అంటే వ్యక్తిగత పన్ను గుర్తింపు సంఖ్య (Individual Taxpayer Identification Number). ఇది ఒక 9 అంకెల ప్రత్యేక సంఖ్య, వలస స్థితి కారణంగా సామాజిక భద్రతా సంఖ్య (SSN) పొందడానికి అర్హులు కాని వ్యక్తులకు కేటాయించబడుతుంది. ITIN పన్ను దాఖలు చేయడానికి ఉపయోగించబడుతుంది మరియు వ్యక్తులు తమ పన్నులను దాఖలు చేయడానికి మరియు రీఫండ్లను పొందడానికి అనుమతిస్తుంది. మీరు ITIN మరియు దానికి ఎలా దరఖాస్తు చేయాలో అడగవచ్చు. లేదా, మీరు కింది లింక్‌ను అనుసరించి ITIN గురించి మీ భాషలో మరింత తెలుసుకోండి.",
        other: "ఇతర ప్రశ్నలు",
        optionSelected: "మీరు ఎంచుకున్నది: ",
        ssnSelected:
          "తప్పకుండా! SSN పొందడంపై నాకు అన్ని వివరాలు తెలుసు, కానీ ముందుగా, మీకు చెల్లుబాటు అయ్యే వీసా ఉందా?",
        validVisa: "మీకు చెల్లుబాటు అయ్యే వీసా ఉందని మీరు ఇచ్చిన సమాధానం ",
        visaType:
          "మీ వీసా రకం ఏమిటి? దయచేసి కింద ఇచ్చిన ఎంపికలలో ఒకదాన్ని ఎంచుకోండి.",
        eligible:
          "అద్భుతం! మీరు SSN కోసం దరఖాస్తు చేయడానికి అర్హులు, మీరు మరింత సమాచారం కోసం కింద ఇచ్చిన సలహాను ఎంచుకోవచ్చు.",
        send: "పంపించండి",
        office: "సమీపంలోని కార్యాలయ స్థానం",
        documents: "అవసరమైన పత్రాలు",
        allRequired: "మీ వద్ద అవసరమైన పత్రాలు అన్నీ ఉన్నాయా?",
        ssaOffice:
          "అద్భుతం! మీరు మీ SSN కోసం దరఖాస్తు చేసుకోవడానికి సిద్ధంగా ఉన్నారు. సమీపంలోని SSA కార్యాలయ వివరాలు తెలుసుకోవాలనుకుంటున్నారా?",
        missingDocuments:
          "పరవాలేదు. మీకు ఎలాంటి పత్రాలు లేవు? వాటిని ఎలా పొందాలో మరింత సమాచారం అందించగలను.",
        nearestOffice: "ఇది సమీపంలోని SSA కార్యాలయ వివరాలు: ",
        anymoreHelp: "అలాగే. మీ SSN దరఖాస్తు గురించి నేను మరింత సహాయం చేయగలనా?",
        more: "మరింత",
        yes: "అవును",
        no: "కాదు",
        complete: "నా వద్ద అన్ని పత్రాలు ఉన్నాయి",
        incomplete: "నా వద్ద పత్రాలు లేవు",
        type: "మీ సందేశాన్ని నమోదు చేయండి...",
        irsITIN: "IRS నుండి ITIN గురించి మరింత తెలుసుకోండి.",
        nycITIN: "ITIN గురించి మరింత తెలుసుకోండి.",
        TIN: "వివిధ పన్ను గుర్తింపు సంఖ్యల గురించి మరింత తెలుసుకోండి.",
        learnLL30:
          "మీ భాషలో న్యూయార్క్ నగరంలోని లోకల్ లా 30 గురించి మరింత తెలుసుకోండి.",
        startOver: "మళ్లీ ప్రారంభించండి",
        whatIsNYCLocalLaw30: "NYC యొక్క లోకల్ లా 30 ఏమిటి?",
        whatIsAnITIN: "ITIN సంఖ్య అంటే ఏమిటి?",
        howToApplyForSSN: "SSN కోసం ఎలా దరఖాస్తు చేసుకోవాలి?",
        documentsRequired: "అవసరమైన పత్రాలు",
        closestOfficeLocation: "సమీపంలోని కార్యాలయ స్థానం",
      },
    },
    pa: {
      translation: {
        select: "ਇੱਕ ਭਾਸ਼ਾ ਚੁਣੋ",
        chat: "Pat.io ਨਾਲ ਗੱਲਬਾਤ ਕਰੋ",
        welcome:
          "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! 👋 ਮੈਂ Pat.io ਹਾਂ, ਤੁਹਾਡਾ ਨਿੱਜੀ AI ਮਦਦਗਾਰ, ਮੈਂ ਤੁਹਾਡੇ ਸਮਾਜਿਕ ਸੁਰੱਖਿਆ ਨੰਬਰ (SSN), ਨਿੱਜੀ ਟੈਕਸ ਪਛਾਣ ਨੰਬਰ (ITIN), ਅਤੇ ਨਿਊਯਾਰਕ ਸਿਟੀ ਦੇ ਲੋਕਲ ਲਾਅ 30 ਬਾਰੇ ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ ਦੇਣ ਲਈ ਇੱਥੇ ਹਾਂ। ਮੈਂ ਅੱਜ ਤੁਹਾਡੀ ਕਿਸ ਤਰ੍ਹਾਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ? ਕੀ ਤੁਹਾਡੇ ਕੋਲ SSN, ITIN ਜਾਂ ਲੋਕਲ ਲਾਅ 30 ਦੇ ਤਹਿਤ ਭਾਸ਼ਾ ਦੀ ਪਹੁੰਚ ਬਾਰੇ ਕੋਈ ਸਵਾਲ ਹਨ?",
        error: "ਨੈੱਟਵਰਕ ਪ੍ਰਤਿਕ੍ਰਿਆ ਠੀਕ ਨਹੀਂ ਸੀ",
        sorry: "ਮਾਫ ਕਰਨਾ, ਤੁਹਾਡੀ ਬੇਨਤੀ ਦੀ ਪ੍ਰਕਿਰਿਆ ਵਿੱਚ ਇੱਕ ਤਰੁੱਟੀ ਆਈ ਹੈ।",
        SSN: "SSN ਲਈ ਕਿਵੇਂ ਅਰਜ਼ੀ ਦੇਣੀ ਹੈ?",
        LL30: "NYC ਦਾ ਲੋਕਲ ਲਾਅ 30 ਕੀ ਹੈ?",
        LL30Selected:
          "ਨਿਊਯਾਰਕ ਸਿਟੀ ਦਾ ਲੋਕਲ ਲਾਅ 30 (LL30) 2017 ਵਿੱਚ ਪਾਸ ਹੋਇਆ ਅਤੇ ਇਹ ਦੇਸ਼ ਦੇ ਸਭ ਤੋਂ ਮਜ਼ਬੂਤ ਕਾਨੂੰਨਾਂ ਵਿੱਚੋਂ ਇੱਕ ਹੈ। ਇਸ ਕਾਨੂੰਨ ਦੇ ਅਧੀਨ, ਸ਼ਹਿਰੀ ਏਜੰਸੀਆਂ ਨੂੰ ਲੋੜੀਂਦੇ ਦਸਤਾਵੇਜ਼ਾਂ ਦਾ ਅਨੁਵਾਦ ਕਰਨ ਲਈ 100 ਤੋਂ ਵੱਧ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਟੈਲੀਫ਼ੋਨਿਕ ਦਭਾਸ਼ੀ ਸਹੂਲਤ ਮੁਹੱਈਆ ਕਰਨੀ ਪੈਂਦੀ ਹੈ। ਤੁਸੀਂ ਇਸ ਕਾਨੂੰਨ ਬਾਰੇ ਹੋਰ ਸਵਾਲ ਪੁੱਛ ਸਕਦੇ ਹੋ ਅਤੇ ਇਹ ਤੁਹਾਡੇ ਹੱਕਾਂ ਨੂੰ ਕਿਵੇਂ ਪ੍ਰਭਾਵਿਤ ਕਰਦਾ ਹੈ। ਤੁਸੀਂ ਹੇਠਾਂ ਦਿੱਤੇ ਲਿੰਕ ਤੋਂ ਆਪਣੀ ਭਾਸ਼ਾ ਵਿੱਚ ਹੋਰ ਜਾਣਕਾਰੀ ਲੈ ਸਕਦੇ ਹੋ।",
        ITIN: "ITIN ਕੀ ਹੈ?",
        ITINSelected:
          "ITIN ਦਾ ਮਤਲਬ ਹੈ ਨਿੱਜੀ ਟੈਕਸ ਪਛਾਣ ਨੰਬਰ (Individual Taxpayer Identification Number)। ਇਹ ਇੱਕ 9 ਅੰਕਾਂ ਦਾ ਨੰਬਰ ਹੈ ਜੋ ਉਹਨਾਂ ਵਿਅਕਤੀਆਂ ਨੂੰ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ ਜੋ ਆਪਣੇ ਇਮਿਗ੍ਰੇਸ਼ਨ ਸਥਿਤੀ ਦੇ ਕਾਰਨ ਸਮਾਜਿਕ ਸੁਰੱਖਿਆ ਨੰਬਰ (SSN) ਪ੍ਰਾਪਤ ਕਰਨ ਦੇ ਯੋਗ ਨਹੀਂ ਹੁੰਦੇ। ITIN ਟੈਕਸ ਭਰਨ ਦੇ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ ਅਤੇ ਵਿਅਕਤੀਆਂ ਨੂੰ ਟੈਕਸ ਫਾਈਲ ਕਰਨ ਅਤੇ ਰਿਫੰਡ ਪ੍ਰਾਪਤ ਕਰਨ ਦੀ ਆਗਿਆ ਦਿੰਦਾ ਹੈ। ਤੁਸੀਂ ITIN ਅਤੇ ਇਸ ਲਈ ਕਿਵੇਂ ਅਰਜ਼ੀ ਦੇਣੀ ਹੈ, ਬਾਰੇ ਹੋਰ ਜਾਣਕਾਰੀ ਮੰਗ ਸਕਦੇ ਹੋ। ਜਾਂ ਤੁਸੀਂ ਹੇਠਾਂ ਦਿੱਤੇ ਲਿੰਕ ਤੋਂ ਆਪਣੀ ਭਾਸ਼ਾ ਵਿੱਚ ITIN ਬਾਰੇ ਹੋਰ ਜਾਣਕਾਰੀ ਲੈ ਸਕਦੇ ਹੋ।",
        other: "ਹੋਰ ਸਵਾਲ",
        optionSelected: "ਤੁਸੀਂ ਚੁਣਿਆ ਹੈ: ",
        ssnSelected:
          "ਬਿਲਕੁਲ! ਮੈਨੂੰ SSN ਪ੍ਰਾਪਤ ਕਰਨ ਬਾਰੇ ਸਾਰਾ ਜਾਣਕਾਰੀ ਹੈ, ਪਰ ਪਹਿਲਾਂ, ਕੀ ਤੁਹਾਡੇ ਕੋਲ ਸਹੀ ਵੀਜ਼ਾ ਹੈ?",
        validVisa: "ਤੁਸੀਂ ਸਹੀ ਵੀਜ਼ਾ ਹੋਣ ਬਾਰੇ ਦਿੱਤਾ ਗਿਆ ਜਵਾਬ ",
        visaType:
          "ਤੁਹਾਡਾ ਵੀਜ਼ਾ ਕਿਸ ਤਰ੍ਹਾਂ ਦਾ ਹੈ? ਕਿਰਪਾ ਕਰਕੇ ਹੇਠਾਂ ਦਿੱਤੀਆਂ ਚੋਣਾਂ ਵਿੱਚੋਂ ਇੱਕ ਚੁਣੋ।",
        eligible:
          "ਸ਼ਾਨਦਾਰ! ਤੁਸੀਂ SSN ਲਈ ਅਰਜ਼ੀ ਦੇਣ ਦੇ ਯੋਗ ਹੋ, ਤੁਸੀਂ ਹੋਰ ਜਾਣਕਾਰੀ ਲਈ ਹੇਠਾਂ ਇੱਕ ਸਿਫਾਰਸ਼ ਚੁਣ ਸਕਦੇ ਹੋ।",
        send: "ਭੇਜੋ",
        office: "ਨਜ਼ਦੀਕੀ ਦਫ਼ਤਰ ਦਾ ਸਥਾਨ",
        documents: "ਲੋੜੀਂਦੇ ਦਸਤਾਵੇਜ਼",
        allRequired: "ਕੀ ਤੁਹਾਡੇ ਕੋਲ ਸਾਰੇ ਲੋੜੀਂਦੇ ਦਸਤਾਵੇਜ਼ ਹਨ?",
        ssaOffice:
          "ਸ਼ਾਨਦਾਰ! ਤੁਸੀਂ ਆਪਣਾ SSN ਲਈ ਅਰਜ਼ੀ ਦੇਣ ਲਈ ਤਿਆਰ ਹੋ। ਕੀ ਤੁਸੀਂ ਨਜ਼ਦੀਕੀ SSA ਦਫ਼ਤਰ ਬਾਰੇ ਜਾਣਕਾਰੀ ਪ੍ਰਾਪਤ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ?",
        missingDocuments:
          "ਕੋਈ ਗੱਲ ਨਹੀਂ। ਤੁਹਾਨੂੰ ਕਿਹੜੇ ਦਸਤਾਵੇਜ਼ਾਂ ਦੀ ਲੋੜ ਹੈ? ਮੈਨੂੰ ਤੁਹਾਨੂੰ ਉਹਨਾਂ ਨੂੰ ਪ੍ਰਾਪਤ ਕਰਨ ਬਾਰੇ ਹੋਰ ਜਾਣਕਾਰੀ ਦੇ ਸਕਦਾ ਹਾਂ।",
        nearestOffice: "ਇੱਥੇ ਨਜ਼ਦੀਕੀ SSA ਦਫ਼ਤਰ ਬਾਰੇ ਜਾਣਕਾਰੀ ਦਿੱਤੀ ਗਈ ਹੈ: ",
        anymoreHelp:
          "ਠੀਕ ਹੈ। ਕੀ ਤੁਹਾਡੇ SSN ਅਰਜ਼ੀ ਬਾਰੇ ਹੋਰ ਕੋਈ ਸਹਾਇਤਾ ਕਰ ਸਕਦਾ ਹਾਂ?",
        more: "ਹੋਰ",
        yes: "ਹਾਂ",
        no: "ਨਹੀਂ",
        complete: "ਮੇਰੇ ਕੋਲ ਸਾਰੇ ਦਸਤਾਵੇਜ਼ ਹਨ",
        incomplete: "ਮੇਰੇ ਕੋਲ ਕੁਝ ਦਸਤਾਵੇਜ਼ ਨਹੀਂ ਹਨ",
        type: "ਆਪਣਾ ਸੁਨੇਹਾ ਟਾਈਪ ਕਰੋ...",
        irsITIN: "IRS ਤੋਂ ITIN ਬਾਰੇ ਹੋਰ ਜਾਣਕਾਰੀ ਲਵੋ।",
        nycITIN: "ITIN ਬਾਰੇ ਹੋਰ ਜਾਣਕਾਰੀ ਲਵੋ।",
        TIN: "ਵੱਖ ਵੱਖ ਟੈਕਸ ਪਛਾਣ ਨੰਬਰਾਂ ਬਾਰੇ ਹੋਰ ਜਾਣਕਾਰੀ ਲਵੋ।",
        learnLL30:
          "ਨਿਊਯਾਰਕ ਸਿਟੀ ਦੇ ਲੋਕਲ ਲਾਅ 30 ਬਾਰੇ ਆਪਣੀ ਭਾਸ਼ਾ ਵਿੱਚ ਹੋਰ ਜਾਣਕਾਰੀ ਲਵੋ।",
        startOver: "ਮੁੜ ਸ਼ੁਰੂ ਕਰੋ",
        whatIsNYCLocalLaw30: "NYC ਦਾ ਲੋਕਲ ਲਾਅ 30 ਕੀ ਹੈ?",
        whatIsAnITIN: "ITIN ਨੰਬਰ ਕੀ ਹੈ?",
        howToApplyForSSN: "SSN ਲਈ ਕਿਵੇਂ ਅਰਜ਼ੀ ਦੇਣੀ ਹੈ?",
        documentsRequired: "ਲੋੜੀਂਦੇ ਦਸਤਾਵੇਜ਼",
        closestOfficeLocation: "ਨਜ਼ਦੀਕੀ ਦਫ਼ਤਰ ਦਾ ਸਥਾਨ",
      },
    },
    ta: {
      translation: {
        select: "ஒரு மொழியை தேர்ந்தெடுக்கவும்",
        chat: "Pat.io உடன் அரட்டை அடிக்கவும்",
        welcome:
          "வணக்கம்! 👋 நான் Pat.io, உங்கள் தனிப்பட்ட AI உதவியாளர், சமூக பாதுகாப்பு எண் (SSN), தனிநபர் வரி அடையாள எண் (ITIN), மற்றும் நியூயார்க் நகரின் உள்ளூர் சட்டம் 30 குறித்த உங்கள் கேள்விகளுக்கு உதவ இங்கே இருக்கிறேன். இன்றைய நாள் உங்களுக்கு எப்படி உதவ முடியும்? SSN, ITIN, அல்லது உள்ளூர் சட்டம் 30 இன் கீழ் உங்கள் மொழிபெயர்ப்பு உரிமைகள் குறித்து ஏதேனும் கேள்விகள் உள்ளதா?",
        error: "நெட்வொர்க் பதில் சரியாக இல்லை",
        sorry:
          "மன்னிக்கவும், உங்கள் கோரிக்கையை செயலாக்குவதில் ஒரு பிழை ஏற்பட்டது.",
        SSN: "SSN க்கு எப்படி விண்ணப்பிக்கலாம்?",
        LL30: "நியூயார்க் நகரத்தின் உள்ளூர் சட்டம் 30 என்பது என்ன?",
        LL30Selected:
          "நியூயார்க் நகரத்தின் உள்ளூர் சட்டம் 30 (LL30) 2017 இல் நிறைவேற்றப்பட்டது, மேலும் இது நாட்டின் மிக வலுவான சட்டங்களில் ஒன்றாகும். இது நகரின் முகவரிகள் மொழிபெயர்ப்பு வசதிகளை வழங்க வேண்டும் என்பதையும், 100 க்கும் மேற்பட்ட மொழிகளில் தொலைபேசி வழியாக மொழிபெயர்ப்பு சேவைகளை வழங்க வேண்டும் என்பதையும் உறுதி செய்கிறது. நீங்கள் இந்தச் சட்டம் பற்றி மேலும் கேள்விகள் கேட்கலாம், அல்லது கீழே உள்ள இணைப்பைப் பின்தொடர்ந்து உங்கள் மொழியில் சட்டம் பற்றி மேலும் அறியலாம்.",
        ITIN: "ITIN என்பது என்ன?",
        ITINSelected:
          "ITIN என்பதன் பொருள் தனிநபர் வரி அடையாள எண் (Individual Taxpayer Identification Number). இது 9 இலக்க தனித்துவமான எண் ஆகும், இது சமூக பாதுகாப்பு எண் (SSN) பெற தகுதியற்றவர்களுக்கு வழங்கப்படுகிறது. ITIN வரி செலுத்துவதற்காகப் பயன்படுத்தப்படுகிறது, மேலும் வரியைச் செலுத்தி, திருப்பி வாங்குதல் போன்றவற்றுக்குப் பயன்படுகிறது. ITIN மற்றும் அதை எப்படி விண்ணப்பிக்க வேண்டும் என்பதற்கான கேள்விகளை நீங்கள் கேட்கலாம், அல்லது கீழே உள்ள இணைப்பைப் பின்தொடர்ந்து உங்கள் மொழியில் ITIN பற்றிய கூடுதல் தகவலைப் பெறலாம்.",
        other: "மற்ற கேள்விகள்",
        optionSelected: "நீங்கள் தேர்வு செய்தது: ",
        ssnSelected:
          "மிகவும் சரி! SSN பெறுவது குறித்து எனக்கு அனைத்து தகவல்களும் உள்ளன, ஆனால் முதலில், உங்கள் அருகில் செல்லுபடியாகும் விசா உள்ளதா?",
        validVisa: "செல்லுபடியாகும் விசா குறித்த உங்கள் பதில் ",
        visaType:
          "உங்கள் விசா வகை என்ன? கீழே உள்ள விருப்பங்களில் ஒன்றைத் தேர்ந்தெடுக்கவும்.",
        eligible:
          "அருமை! நீங்கள் SSN க்கு விண்ணப்பிக்க தகுதி பெற்றுள்ளீர்கள், மேலும் தகவலுக்கான கீழே உள்ள பரிந்துரையொன்றைத் தேர்ந்தெடுக்கலாம்.",
        send: "அனுப்பு",
        office: "அருகிலுள்ள அலுவலகத்தின் இருப்பிடம்",
        documents: "தேவையான ஆவணங்கள்",
        allRequired: "உங்களுக்கு தேவையான அனைத்து ஆவணங்களும் உள்ளதா?",
        ssaOffice:
          "அருமை! உங்கள் SSN க்கு நீங்கள் விண்ணப்பிக்கத் தயாராக இருக்கிறீர்கள். அருகிலுள்ள SSA அலுவலகத்தின் தகவலைப் பெற விரும்புகிறீர்களா?",
        missingDocuments:
          "பிரச்சனை இல்லை. உங்களுக்கு எந்த ஆவணங்கள் கிடைக்கவில்லை? அவற்றைப் பெற எப்படி என்பதைப் பற்றி நான் கூடுதல் தகவலை வழங்க முடியும்.",
        nearestOffice: "இது அருகிலுள்ள SSA அலுவலகத்தின் தகவல்: ",
        anymoreHelp:
          "சரி. உங்கள் SSN விண்ணப்பத்தைப் பற்றிய ஏதேனும் உதவி வேண்டுமா?",
        more: "மேலும்",
        yes: "ஆம்",
        no: "இல்லை",
        complete: "எனக்கு அனைத்து ஆவணங்களும் உள்ளன",
        incomplete: "எனக்கு ஆவணங்கள் இல்லை",
        type: "உங்கள் முகவரியை உள்ளிடவும்...",
        irsITIN: "IRS இல் இருந்து ITIN பற்றிய கூடுதல் தகவலை அறியவும்.",
        nycITIN: "ITIN பற்றிய கூடுதல் தகவலை அறியவும்.",
        TIN: "வேறுபட்ட வரி அடையாள எண்கள் குறித்த கூடுதல் தகவலை அறியவும்.",
        learnLL30:
          "நியூயார்க் நகரத்தின் உள்ளூர் சட்டம் 30 பற்றிய உங்கள் மொழியில் கூடுதல் தகவலை அறியவும்.",
        startOver: "மீண்டும் தொடங்கவும்",
        whatIsNYCLocalLaw30:
          "நியூயார்க் நகரத்தின் உள்ளூர் சட்டம் 30 என்பது என்ன?",
        whatIsAnITIN: "ITIN எண் என்பது என்ன?",
        howToApplyForSSN: "SSN க்கு எப்படி விண்ணப்பிக்கலாம்?",
        documentsRequired: "தேவையான ஆவணங்கள்",
        closestOfficeLocation: "அருகிலுள்ள அலுவலகத்தின் இருப்பிடம்",
      },
    },
    ko: {
      translation: {
        select: "언어 선택",
        chat: "Pat.io와 채팅하기",
        welcome:
          "안녕하세요! 👋 저는 Pat.io입니다. 사회보장번호 (SSN), 개인 납세자 식별 번호 (ITIN), 그리고 뉴욕시 지방법 30과 관련된 모든 질문에 답변해 드릴 개인 AI 비서입니다. 오늘 어떤 도움을 드릴까요? SSN, ITIN 또는 지방법 30에 따른 언어 접근권에 대해 궁금한 점이 있으신가요?",
        error: "네트워크 응답이 올바르지 않습니다",
        sorry: "죄송합니다, 요청을 처리하는 중 오류가 발생했습니다.",
        SSN: "SSN 신청 방법",
        LL30: "뉴욕시 지방 법률 30이 무엇인가요?",
        LL30Selected:
          "뉴욕시 지방 법률 30 (LL30)은 2017년에 통과된 법으로, 미국에서 가장 강력한 법률 중 하나입니다. 이 법에 따라 시정부 기관은 언어 접근 조정관을 임명하고, 최소 100개 이상의 언어로 전화 통역 서비스를 제공해야 하며, 가장 많이 배포되는 문서를 도시에서 지정한 10개의 언어로 번역해야 합니다. 이 법이 여러분의 권리에 미치는 영향에 대해 더 궁금하시면 저에게 질문하실 수 있습니다. 또는 아래 링크를 따라가면 해당 법에 대한 더 많은 정보를 여러분의 언어로 확인하실 수 있습니다.",
        ITIN: "ITIN이란 무엇인가요?",
        ITINSelected:
          "ITIN은 개인 납세자 식별 번호 (Individual Taxpayer Identification Number)를 의미합니다. 이는 이민 신분 때문에 사회보장번호 (SSN)를 받을 수 없는 사람들에게 발급되는 9자리 고유 번호입니다. ITIN은 세금 신고 목적으로 사용되며, 세금 신고 및 환급을 받을 수 있도록 도와줍니다. ITIN에 대해 더 궁금한 점이나 신청 방법에 대해 물어보실 수 있습니다. 또는 아래 링크를 통해 ITIN에 대해 더 많은 정보를 여러분의 언어로 확인하실 수 있습니다.",
        other: "기타 질문",
        optionSelected: "선택하신 항목: ",
        ssnSelected:
          "물론이죠! SSN을 받는 방법에 대한 모든 정보를 가지고 있습니다. 먼저, 유효한 비자가 있으신가요?",
        validVisa: "유효한 비자가 있는지에 대한 답변은 ",
        visaType: "비자 종류는 무엇인가요? 아래 옵션 중에서 선택해주세요.",
        eligible:
          "좋습니다! SSN을 신청할 자격이 있습니다. 추가 정보를 보려면 아래 제안 중 하나를 선택할 수 있습니다.",
        send: "보내기",
        office: "가장 가까운 사무소 위치",
        documents: "필요한 서류",
        allRequired: "필요한 서류를 모두 가지고 계신가요?",
        ssaOffice:
          "좋습니다! 이제 SSN을 신청할 준비가 되셨습니다. 가까운 SSA 사무소에 대한 정보를 원하시나요?",
        missingDocuments:
          "문제없습니다. 어떤 서류가 부족하신가요? 서류를 어떻게 구할 수 있는지 추가 정보를 드릴 수 있습니다.",
        nearestOffice: "가까운 SSA 사무소에 대한 정보는 다음과 같습니다: ",
        anymoreHelp: "좋습니다. SSN 신청과 관련해 더 도와드릴 사항이 있을까요?",
        more: "더보기",
        yes: "네",
        no: "아니요",
        complete: "필요한 서류를 모두 가지고 있습니다",
        incomplete: "서류가 부족합니다",
        type: "주소를 입력하세요...",
        irsITIN: "IRS에서 제공하는 ITIN에 대해 더 알아보세요.",
        nycITIN: "ITIN에 대해 더 알아보세요.",
        TIN: "다양한 납세자 식별 번호에 대해 알아보세요.",
        learnLL30:
          "뉴욕시 지방법 30에 대한 더 많은 정보를 여러분의 언어로 확인하세요.",
        startOver: "다시 시작하기",
        whatIsNYCLocalLaw30: "뉴욕시 지방법 30이 무엇인가요?",
        whatIsAnITIN: "ITIN 번호란 무엇인가요?",
        howToApplyForSSN: "SSN 신청 방법",
        documentsRequired: "필요한 서류",
        closestOfficeLocation: "가장 가까운 사무소 위치",
      },
    },
    ja: {
      translation: {
        select: "言語を選択してください",
        chat: "Pat.ioとチャットする",
        welcome:
          "こんにちは！ 👋 私はPat.ioです。あなたの個人的なAIアシスタントとして、社会保障番号 (SSN)、個人納税者番号 (ITIN)、そしてニューヨーク市のローカル法30に関する質問にお答えするためにここにいます。今日、どのようにお手伝いしましょうか？SSN、ITIN、またはローカル法30に基づく言語アクセスの権利について何か質問がありますか？",
        error: "ネットワーク応答が正常ではありません",
        sorry: "申し訳ありませんが、リクエストの処理中にエラーが発生しました。",
        SSN: "SSNの申請方法",
        LL30: "ニューヨーク市のローカル法30とは何ですか？",
        LL30Selected:
          "ニューヨーク市のローカル法30 (LL30) は2017年に施行され、アメリカで最も強力な法律の1つです。この法律は、市の機関が言語アクセスコーディネーターを任命し、100以上の言語で電話通訳サービスを提供し、市の指定した10の言語に最もよく配布される文書を翻訳することを義務付けています。この法律があなたの権利にどのように影響するかについて、さらに質問することができます。 または、下のリンクをクリックして、あなたの言語で法律についてさらに学ぶことができます。",
        ITIN: "ITINとは何ですか？",
        ITINSelected:
          "ITINとは個人納税者番号 (Individual Taxpayer Identification Number) の略です。これは、移民ステータスにより社会保障番号 (SSN) を取得できない個人に割り当てられる9桁の一意の番号です。ITINは税金申告のために使用され、個人が税金を申告し、払い戻しを受けることができます。ITINについてもっと知りたい場合や、申請方法について質問があれば、ぜひ聞いてください。また、以下のリンクをクリックして、ITINについてさらに学ぶこともできます。",
        other: "その他の質問",
        optionSelected: "あなたが選んだのは: ",
        ssnSelected:
          "もちろんです！ SSNを取得する方法についてすべての情報がありますが、まず、有効なビザをお持ちですか？",
        validVisa: "有効なビザをお持ちかどうかについての答えは ",
        visaType: "ビザの種類は何ですか？ 以下のオプションから選んでください。",
        eligible:
          "素晴らしい！ SSNを申請する資格があります。詳細を確認するには、以下の提案の1つを選択してください。",
        send: "送信",
        office: "最寄りのオフィスの場所",
        documents: "必要な書類",
        allRequired: "必要な書類はすべて揃っていますか？",
        ssaOffice:
          "素晴らしい！ SSNの申請を行う準備が整いました。最寄りのSSAオフィスの情報が必要ですか？",
        missingDocuments:
          "問題ありません。どの書類が不足していますか？ それらを取得する方法についてさらに情報を提供できます。",
        nearestOffice: "こちらが最寄りのSSAオフィスの情報です: ",
        anymoreHelp:
          "わかりました。SSNの申請について、他にお手伝いできることはありますか？",
        more: "もっと見る",
        yes: "はい",
        no: "いいえ",
        complete: "必要な書類はすべて揃っています",
        incomplete: "書類が不足しています",
        type: "住所を入力してください...",
        irsITIN: "IRSで提供されているITINについてもっと学びましょう。",
        nycITIN: "ITINについてもっと学びましょう。",
        TIN: "さまざまな納税者識別番号についてもっと学びましょう。",
        learnLL30:
          "あなたの言語でニューヨーク市のローカル法30についてさらに学びましょう。",
        startOver: "再スタート",
        whatIsNYCLocalLaw30: "ニューヨーク市のローカル法30とは何ですか？",
        whatIsAnITIN: "ITIN番号とは何ですか？",
        howToApplyForSSN: "SSNの申請方法",
        documentsRequired: "必要な書類",
        closestOfficeLocation: "最寄りのオフィスの場所",
      },
    },
    vi: {
      translation: {
        select: "Chọn một ngôn ngữ",
        chat: "Trò chuyện với Pat.io",
        welcome:
          "Xin chào! 👋 Tôi là Pat.io, trợ lý AI cá nhân của bạn, tôi ở đây để giúp bạn với các câu hỏi liên quan đến Số An Sinh Xã Hội (SSN), Số Nhận Dạng Người Nộp Thuế Cá Nhân (ITIN), và Luật Địa phương 30 của thành phố New York. Tôi có thể giúp gì cho bạn hôm nay? Bạn có câu hỏi về SSN, ITIN hoặc quyền truy cập ngôn ngữ theo Luật Địa phương 30 không?",
        error: "Phản hồi mạng không ổn định",
        sorry: "Xin lỗi, đã xảy ra lỗi trong quá trình xử lý yêu cầu của bạn.",
        SSN: "Cách đăng ký SSN",
        LL30: "Luật Địa phương 30 của NYC là gì?",
        LL30Selected:
          "Luật Địa phương 30 của thành phố New York (LL30) được thông qua vào năm 2017 và là một trong những luật mạnh nhất của quốc gia. Luật này yêu cầu các cơ quan của thành phố chỉ định một điều phối viên tiếp cận ngôn ngữ, phát triển kế hoạch thực hiện tiếp cận ngôn ngữ, cung cấp dịch vụ thông dịch qua điện thoại bằng ít nhất 100 ngôn ngữ, dịch các tài liệu phổ biến nhất của họ sang 10 ngôn ngữ được chỉ định của thành phố, và đăng thông báo về việc cung cấp dịch vụ thông dịch miễn phí, cùng với các yêu cầu khác. Bạn có thể hỏi tôi thêm về luật này và tác động của nó đối với quyền của bạn. Hoặc bạn có thể nhấp vào liên kết dưới đây để tìm hiểu thêm về luật bằng ngôn ngữ của bạn.",
        ITIN: "Số ITIN là gì?",
        ITINSelected:
          "ITIN là viết tắt của Số Nhận Dạng Người Nộp Thuế Cá Nhân (Individual Taxpayer Identification Number). Đây là một số 9 chữ số duy nhất được cấp cho những cá nhân không đủ điều kiện để nhận Số An Sinh Xã Hội (SSN) do tình trạng nhập cư của họ. ITIN được sử dụng cho mục đích khai thuế và cho phép các cá nhân khai thuế và nhận tiền hoàn thuế. Bạn có thể hỏi tôi thêm về ITIN và cách đăng ký. Hoặc bạn có thể nhấp vào liên kết dưới đây để tìm hiểu thêm về ITIN bằng ngôn ngữ của bạn.",
        other: "Câu hỏi khác",
        optionSelected: "Bạn đã chọn: ",
        ssnSelected:
          "Tất nhiên rồi! Tôi có tất cả thông tin về cách nhận SSN, nhưng trước tiên, bạn có thị thực hợp lệ không?",
        validVisa: "Câu trả lời của bạn về việc có thị thực hợp lệ là ",
        visaType:
          "Loại thị thực của bạn là gì? Vui lòng chọn một trong các tùy chọn dưới đây.",
        eligible:
          "Tuyệt vời! Bạn đủ điều kiện để đăng ký SSN, bạn có thể chọn một gợi ý dưới đây để biết thêm thông tin.",
        send: "Gửi",
        office: "Vị trí văn phòng gần nhất",
        documents: "Tài liệu cần thiết",
        allRequired: "Bạn có tất cả các tài liệu cần thiết không?",
        ssaOffice:
          "Tuyệt vời! Bạn đã sẵn sàng để đăng ký SSN. Bạn có muốn biết thông tin về văn phòng SSA gần nhất không?",
        missingDocuments:
          "Không sao. Bạn thiếu tài liệu nào? Tôi có thể cung cấp thêm thông tin về cách lấy chúng.",
        nearestOffice: "Đây là thông tin về văn phòng SSA gần nhất: ",
        anymoreHelp:
          "Được rồi. Có điều gì khác mà tôi có thể giúp bạn về đơn đăng ký SSN không?",
        more: "Thêm nữa",
        yes: "Có",
        no: "Không",
        complete: "Tôi có tất cả các tài liệu",
        incomplete: "Tôi còn thiếu tài liệu",
        type: "Nhập địa chỉ của bạn...",
        irsITIN: "Tìm hiểu thêm về ITIN từ IRS.",
        nycITIN: "Tìm hiểu thêm về ITIN.",
        TIN: "Tìm hiểu thêm về các số nhận dạng người nộp thuế khác.",
        learnLL30:
          "Tìm hiểu thêm về Luật Địa phương 30 của thành phố New York bằng ngôn ngữ của bạn.",
        startOver: "Bắt đầu lại",
        whatIsNYCLocalLaw30: "Luật Địa phương 30 của NYC là gì?",
        whatIsAnITIN: "Số ITIN là gì?",
        howToApplyForSSN: "Cách đăng ký SSN",
        documentsRequired: "Tài liệu cần thiết",
        closestOfficeLocation: "Vị trí văn phòng gần nhất",
      },
    },
    ar: {
      translation: {
        select: "اختر لغة",
        chat: "الدردشة مع Pat.io",
        welcome:
          "مرحباً! 👋 أنا Pat.io، مساعدك الشخصي الذكي، هنا لمساعدتك في جميع الأمور المتعلقة برقم الضمان الاجتماعي (SSN)، ورقم تعريف دافع الضرائب الفردي (ITIN)، وقانون نيويورك المحلي رقم 30. كيف يمكنني مساعدتك اليوم؟ هل لديك أي أسئلة حول SSN أو ITIN أو حقوقك في الوصول إلى اللغة بموجب قانون نيويورك المحلي رقم 30؟",
        error: "استجابة الشبكة لم تكن جيدة",
        sorry: "عذرًا، حدث خطأ أثناء معالجة طلبك.",
        SSN: "كيفية التقديم للحصول على SSN",
        LL30: "ما هو القانون المحلي رقم 30 لمدينة نيويورك؟",
        LL30Selected:
          "قانون نيويورك المحلي رقم 30 (LL30) تم تمريره في عام 2017 وهو أحد أقوى القوانين في البلاد. يطالب هذا القانون بأن تعين الوكالات الحكومية المحلية منسقًا للوصول إلى اللغة، وتطوير خطط تنفيذ الوصول إلى اللغة، وتوفير خدمات الترجمة الهاتفية بأكثر من 100 لغة، وترجمة المستندات الأكثر توزيعًا إلى 10 لغات معتمدة في المدينة، ووضع لافتات حول توفر خدمات الترجمة المجانية. يمكنك سؤالي المزيد حول هذا القانون وتأثيره على حقوقك، أو يمكنك متابعة الرابط أدناه لمعرفة المزيد عن القانون بلغتك.",
        ITIN: "ما هو رقم ITIN؟",
        ITINSelected:
          "ITIN هو رقم تعريف دافع الضرائب الفردي (Individual Taxpayer Identification Number). إنه رقم فريد مكون من 9 أرقام يتم تخصيصه للأفراد الذين لا يمكنهم الحصول على رقم الضمان الاجتماعي (SSN) بسبب وضعهم الهجري. يتم استخدام ITIN لأغراض تقديم الضرائب ويسمح للأفراد بتقديم الضرائب والحصول على المبالغ المستردة. يمكنك سؤالي المزيد عن ITIN وكيفية التقديم للحصول عليه. أو يمكنك متابعة الرابط أدناه لمعرفة المزيد عن ITIN بلغتك.",
        other: "أسئلة أخرى",
        optionSelected: "لقد اخترت: ",
        ssnSelected:
          "بالطبع! لدي جميع المعلومات حول كيفية الحصول على SSN، ولكن أولاً، هل لديك تأشيرة صالحة؟",
        validVisa: "إجابتك حول ما إذا كان لديك تأشيرة صالحة هي ",
        visaType: "ما نوع التأشيرة الخاصة بك؟ يرجى اختيار أحد الخيارات أدناه.",
        eligible:
          "رائع! أنت مؤهل للتقديم للحصول على SSN، يمكنك اختيار أحد الاقتراحات أدناه لمزيد من المعلومات.",
        send: "إرسال",
        office: "موقع المكتب الأقرب",
        documents: "المستندات المطلوبة",
        allRequired: "هل لديك جميع المستندات المطلوبة؟",
        ssaOffice:
          "رائع! أنت جاهز للتقديم للحصول على SSN الخاص بك. هل تريد معلومات عن أقرب مكتب SSA؟",
        missingDocuments:
          "لا مشكلة. ما هي المستندات التي تفتقدها؟ يمكنني تقديم مزيد من المعلومات حول كيفية الحصول عليها.",
        nearestOffice: "إليك معلومات حول أقرب مكتب SSA: ",
        anymoreHelp:
          "حسنًا. هل هناك أي شيء آخر يمكنني مساعدتك به بخصوص طلب SSN الخاص بك؟",
        more: "المزيد",
        yes: "نعم",
        no: "لا",
        complete: "لدي جميع المستندات",
        incomplete: "أفتقد بعض المستندات",
        type: "أدخل عنوانك...",
        irsITIN: "تعرف على المزيد حول ITIN من مصلحة الضرائب.",
        nycITIN: "تعرف على المزيد حول ITIN.",
        TIN: "تعرف على المزيد حول أرقام تعريف دافعي الضرائب المختلفة.",
        learnLL30: "تعرف على المزيد حول قانون نيويورك المحلي رقم 30 بلغتك.",
        startOver: "ابدأ من جديد",
        whatIsNYCLocalLaw30: "ما هو القانون المحلي رقم 30 لمدينة نيويورك؟",
        whatIsAnITIN: "ما هو رقم ITIN؟",
        howToApplyForSSN: "كيفية التقديم للحصول على SSN",
        documentsRequired: "المستندات المطلوبة",
        closestOfficeLocation: "موقع المكتب الأقرب",
      },
    },
    ur: {
      translation: {
        select: "ایک لغہ منتخب کریں۔",
        chat: "Pat.io سے بات کریں۔",
        welcome:
          "خوش آمدید! 👋 میں Pat.io ہوں، آپ کا ذاتی AI معاون، اور میں یہاں آپ کی مدد کے لیے موجود ہوں تاکہ آپ سوشل سیکیورٹی نمبر (SSN)، انفرادی ٹیکس دہندہ شناختی نمبر (ITIN)، اور نیویارک سٹی کے لوکل قانون 30 کے بارے میں پوچھے گئے سوالات کا جواب دے سکیں۔ میں آج آپ کی کیسے مدد کر سکتا ہوں؟ کیا آپ کو SSN، ITIN، یا لوکل قانون 30 کے تحت زبان کے حقوق کے بارے میں کوئی سوالات ہیں؟",
        error: "نیٹ ورک کا جواب ٹھیک نہیں تھا۔",
        sorry: "معذرت، آپ کی درخواست پر عمل کرتے وقت کوئی غلطی ہوئی ہے۔",
        SSN: "SSN کے لیے درخواست کیسے دی جائے",
        LL30: "نیویارک سٹی لوکل قانون 30 کیا ہے؟",
        LL30Selected:
          "نیویارک سٹی کا لوکل قانون 30 (LL30) 2017 میں منظور ہوا تھا اور یہ ملک کے سب سے مضبوط قوانین میں سے ایک ہے۔ یہ قانون شہروں کی ایجنسیوں سے مطالبہ کرتا ہے کہ وہ زبان کی رسائی کے کوآرڈینیٹر کو مقرر کریں، زبان کی رسائی کے نفاذ کے منصوبے تیار کریں، کم از کم 100 زبانوں میں فون کے ذریعے ترجمانی کی خدمات فراہم کریں، اور اپنی سب سے زیادہ تقسیم کی جانے والی دستاویزات کو شہر کی نامزد کردہ 10 زبانوں میں ترجمہ کریں۔ آپ مجھ سے اس قانون کے بارے میں مزید سوالات پوچھ سکتے ہیں اور یہ آپ کے حقوق پر کیسے اثر ڈالتا ہے۔ یا آپ نیچے دیے گئے لنک پر کلک کر کے اپنی زبان میں قانون کے بارے میں مزید جان سکتے ہیں۔",
        ITIN: "ITIN نمبر کیا ہے؟",
        ITINSelected:
          "ITIN کا مطلب انفرادی ٹیکس دہندہ شناختی نمبر (Individual Taxpayer Identification Number) ہے۔ یہ 9 عدد کا ایک منفرد نمبر ہوتا ہے جو ان افراد کو دیا جاتا ہے جو اپنی امیگریشن کی حیثیت کی وجہ سے سوشل سیکیورٹی نمبر (SSN) حاصل کرنے کے اہل نہیں ہیں۔ ITIN ٹیکس کی فائلنگ کے مقاصد کے لیے استعمال ہوتا ہے اور افراد کو اپنے ٹیکس فائل کرنے اور رقم کی واپسی حاصل کرنے کی اجازت دیتا ہے۔ آپ ITIN اور اس کے لیے درخواست دینے کے طریقہ کے بارے میں مجھ سے مزید پوچھ سکتے ہیں، یا نیچے دیے گئے لنک پر کلک کر کے اپنی زبان میں ITIN کے بارے میں مزید جان سکتے ہیں۔",
        other: "دیگر سوالات",
        optionSelected: "آپ نے منتخب کیا: ",
        ssnSelected:
          "بالکل! میرے پاس SSN حاصل کرنے کے بارے میں تمام معلومات ہیں، لیکن پہلے، کیا آپ کے پاس جائز ویزا ہے؟",
        validVisa: "آپ کا ویزا کے جائز ہونے کا جواب ہے ",
        visaType:
          "آپ کے پاس کون سا ویزا ہے؟ براہ کرم نیچے کے اختیارات میں سے منتخب کریں۔",
        eligible:
          "زبردست! آپ SSN کے لیے درخواست دینے کے اہل ہیں، مزید معلومات کے لیے نیچے ایک تجویز منتخب کریں۔",
        send: "بھیجیں",
        office: "قریب ترین دفتر کا مقام",
        documents: "درکار دستاویزات",
        allRequired: "کیا آپ کے پاس تمام درکار دستاویزات ہیں؟",
        ssaOffice:
          "زبردست! آپ اپنے SSN کے لیے درخواست دینے کے لیے تیار ہیں۔ کیا آپ قریب ترین SSA دفتر کے بارے میں معلومات چاہتے ہیں؟",
        missingDocuments:
          "کوئی مسئلہ نہیں۔ آپ کون سی دستاویزات کے بغیر ہیں؟ میں ان کے حصول کے بارے میں مزید معلومات فراہم کر سکتا ہوں۔",
        nearestOffice: "یہ قریب ترین SSA دفتر کے بارے میں معلومات ہیں: ",
        anymoreHelp:
          "ٹھیک ہے۔ کیا آپ کے SSN درخواست کے حوالے سے مزید کچھ مدد چاہیے؟",
        more: "مزید",
        yes: "ہاں",
        no: "نہیں",
        complete: "میرے پاس تمام دستاویزات ہیں",
        incomplete: "میرے پاس دستاویزات نہیں ہیں",
        type: "اپنا پیغام لکھیں...",
        irsITIN: "IRS سے ITIN کے بارے میں مزید جانیں۔",
        nycITIN: "ITIN کے بارے میں مزید جانیں۔",
        TIN: "مختلف ٹیکس دہندہ شناختی نمبروں کے بارے میں مزید جانیں۔",
        learnLL30:
          "نیویارک سٹی کے لوکل قانون 30 کے بارے میں اپنی زبان میں مزید جانیں۔",
        startOver: "دوبارہ شروع کریں",
        whatIsNYCLocalLaw30: "نیویارک سٹی لوکل قانون 30 کیا ہے؟",
        whatIsAnITIN: "ITIN نمبر کیا ہے؟",
        howToApplyForSSN: "SSN کے لیے درخواست کیسے دی جائے",
        documentsRequired: "درکار دستاویزات",
        closestOfficeLocation: "قریب ترین دفتر کا مقام",
      },
    },
    tl: {
      translation: {
        select: "Piliin ang wika",
        chat: "Makipag-chat kay Pat.io",
        welcome:
          "Kumusta! 👋 Ako si Pat.io, ang iyong personal na AI assistant, nandito ako upang tumulong sa lahat ng may kinalaman sa mga Social Security Numbers (SSN), Individual Taxpayer Identification Numbers (ITIN), at Lokal na Batas 30 ng Lungsod ng New York. Paano kita matutulungan ngayon? May mga tanong ka ba tungkol sa SSN, ITIN, o ang iyong mga karapatan sa wika ayon sa Lokal na Batas 30?",
        error: "Hindi tama ang network na tugon",
        sorry:
          "Pasensya na, nagkaroon ng error habang pinoproseso ang iyong kahilingan.",
        SSN: "Paano mag-apply para sa SSN?",
        LL30: "Ano ang Lokal na Batas 30 ng NYC?",
        LL30Selected:
          "Ang Lokal na Batas 30 ng 2017 (LL30) sa Lungsod ng New York ay isa sa pinakamalakas na batas sa bansa at nag-uutos na ang mga ahensyang saklaw nito ay magtalaga ng isang language access coordinator, bumuo ng mga plano para sa pagpapatupad ng access sa wika, magbigay ng interpretasyong telepono sa hindi bababa sa 100 wika, isalin ang kanilang mga pinakakaraniwang ipinamamahaging dokumento sa 10 itinalagang wika ng lungsod, at mag-post ng mga palatandaan tungkol sa pagkakaroon ng mga libreng serbisyo sa interpretasyon, kasama ng iba pang mga kinakailangan. Maaari mo akong tanungin nang higit pa tungkol sa batas na ito at ang epekto nito sa iyong mga karapatan. O maaari mong sundan ang link sa ibaba upang malaman ang higit pa tungkol sa batas sa iyong wika.",
        ITIN: "Ano ang ITIN?",
        ITINSelected:
          "Ang ITIN ay nangangahulugang Individual Taxpayer Identification Number. Ito ay isang natatanging 9 na digit na numero na ibinibigay sa mga indibidwal na hindi karapat-dapat makakuha ng Social Security Number (SSN) dahil sa kanilang immigration status. Ginagamit ang mga ITIN para sa layunin ng paghahain ng buwis at pinapayagan ang mga tao na mag-file ng kanilang buwis at tumanggap ng refund. Maaari mo akong tanungin nang higit pa tungkol sa ITIN at kung paano mag-apply para dito. O maaari mong sundan ang link sa ibaba upang malaman ang higit pa tungkol sa ITIN sa iyong wika.",
        other: "Iba pang mga tanong",
        optionSelected: "Pinili mo: ",
        ssnSelected:
          "Siyempre! Mayroon akong lahat ng impormasyon tungkol sa pagkuha ng SSN, ngunit una, mayroon ka bang valid na visa?",
        validVisa: "Ang iyong sagot sa pagkakaroon ng valid na visa ay ",
        visaType:
          "Anong uri ng visa ang mayroon ka? Pumili mula sa mga opsyon sa ibaba.",
        eligible:
          "Mahusay! Karapat-dapat kang mag-apply para sa SSN, maaari kang pumili ng mungkahi sa ibaba para sa karagdagang impormasyon.",
        send: "Ipadala",
        office: "Pinakamalapit na Lokasyon ng Opisina",
        documents: "Mga Kailangang Dokumento",
        allRequired: "Mayroon ka bang lahat ng kailangang dokumento?",
        ssaOffice:
          "Mahusay! Handa ka nang mag-apply para sa iyong SSN. Nais mo bang makakuha ng impormasyon tungkol sa pinakamalapit na opisina ng SSA?",
        missingDocuments:
          "Walang problema. Anong mga dokumento ang kulang mo? Maaari akong magbigay ng higit pang impormasyon kung paano ito makuha.",
        nearestOffice: "Maaari ko bang makuha ang iyong zip code, pakiusap?",
        anymoreHelp:
          "Sige. Mayroon pa bang iba na maitutulong ko tungkol sa iyong aplikasyon ng SSN?",
        more: "Iba pa",
        yes: "Oo",
        no: "Hindi",
        complete: "Mayroon akong lahat ng mga dokumento",
        incomplete: "Kulang ako ng mga dokumento",
        type: "Isulat ang iyong mensahe...",
        irsITIN: "Matuto pa tungkol sa ITIN mula sa IRS.",
        nycITIN: "Matuto pa tungkol sa ITIN.",
        TIN: "Matuto pa tungkol sa iba't ibang Numero ng Pagkilala ng Nagbabayad ng Buwis.",
        learnLL30:
          "Matuto pa tungkol sa Lokal na Batas 30 ng Lungsod ng New York sa iyong wika.",
        startOver: "Magsimula Muli",
        whatIsNYCLocalLaw30: "Ano ang Lokal na Batas 30 ng NYC?",
        whatIsAnITIN: "Ano ang ITIN?",
        howToApplyForSSN: "Paano mag-apply para sa SSN?",
        documentsRequired: "Mga Kailangang Dokumento",
        closestOfficeLocation: "Pinakamalapit na Lokasyon ng Opisina",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
