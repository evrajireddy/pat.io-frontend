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
          "Привет! 👋 Я Pat.io, ваш личный AI-ассистент, здесь, чтобы помочь вам с вопросами, связанными с номерами социального страхования (SSN), индивидуальными налоговыми идентификационными номерами (ITIN) и местным законом 30 города Нью-Йорка. Чем могу помочь сегодня?",
        error: "Ответ сети был неудовлетворительным",
        sorry: "Извините, произошла ошибка при обработке вашего запроса.",
        SSN: "Как подать заявку на SSN?",
        LL30: "Что такое местный закон 30 города Нью-Йорка?",
        LL30Selected:
          "Местный закон 30 от 2017 года (LL30) в Нью-Йорке требует предоставления языковых услуг в городских агентствах. Позвоните по номеру 212-346-6047 для получения дополнительной информации.",
        ITIN: "Что такое ITIN?",
        ITINSelected:
          "ITIN — это 9-значный номер для подачи налоговых деклараций нерезидентами.",
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
          "Не проблема! Вот список необходимых документов. Как только у вас все будет готово, вы можете продолжить процесс подачи заявки. Я здесь, чтобы помочь!",
        nearestOffice: "Могу ли я узнать ваш почтовый индекс?",
        anymoreHelp:
          "Хорошо. Могу ли я ещё чем-то помочь по вашему заявлению на SSN?",
        more: "Больше",
        yes: "Да",
        no: "Нет",
        complete: "У меня есть все документы",
        incomplete: "У меня не хватает документов",
        type: "Введите сообщение...",
        irsITIN: "IRS и ITIN.",
        nycITIN: "Нью-Йорк и ITIN.",
        TIN: "Различные идентификационные номера налогоплательщиков.",
        learnLL30: "Узнать больше...",
        startOver: "Начать заново",
        whatIsNYCLocalLaw30: "Что такое местный закон 30 города Нью-Йорка?",
        whatIsAnITIN: "Что такое ITIN?",
        howToApplyForSSN: "Как подать заявку на SSN?",
        documentsRequired: "Необходимые документы",
        closestOfficeLocation: "Ближайший офис SSA",
        noValidVisa:
          "Извините, пожалуйста, посетите сайт USCIS по ссылке ниже, чтобы подать заявку на визу.",
        applyForImmigrantVisa: "Подать заявку на иммиграционную визу.",
        applyForNonImmigrantVisa: "Подать заявку на неиммиграционную визу.",
        holdButton: "Нажмите и удерживайте для записи, отпустите для отправки.",
      },
    },
    it: {
      translation: {
        select: "Seleziona una lingua",
        chat: "Chat con Pat.io",
        welcome:
          "Ciao! 👋 Sono Pat.io, il tuo assistente AI personale, qui per aiutarti con tutto ciò che riguarda i numeri di previdenza sociale (SSN), i numeri di identificazione del contribuente individuale (ITIN) e la Legge Locale 30 di New York City. Come posso aiutarti oggi?",
        error: "La risposta della rete non è stata corretta",
        sorry:
          "Spiacenti, si è verificato un errore durante l'elaborazione della tua richiesta.",
        SSN: "Come richiedere il SSN?",
        LL30: "Cos'è la Legge Locale 30 di NYC?",
        LL30Selected:
          "La Legge Locale 30 del 2017 (LL30) a New York City richiede la fornitura di servizi di accesso linguistico nelle agenzie cittadine. Chiama il numero 212-346-6047 per maggiori informazioni.",
        ITIN: "Cos'è un ITIN?",
        ITINSelected:
          "ITIN è un numero di 9 cifre per i non cittadini per presentare le dichiarazioni fiscali.",
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
          "Nessun problema! Ecco un elenco dei documenti necessari. Una volta pronto, puoi continuare il processo di richiesta. Sono qui per aiutarti!",
        nearestOffice: "Posso avere il tuo codice postale per favore",
        anymoreHelp:
          "Va bene. C'è qualcos'altro con cui posso aiutarti riguardo la tua domanda per il SSN?",
        more: "Altro",
        yes: "Sì",
        no: "No",
        complete: "Ho tutti i documenti",
        incomplete: "Mi mancano dei documenti",
        type: "Scrivi il tuo messaggio...",
        irsITIN: "IRS e ITIN.",
        nycITIN: "New York e ITIN.",
        TIN: "Diversi numeri di identificazione del contribuente.",
        learnLL30: "Scopri di più...",
        startOver: "Ricominciamo",
        whatIsNYCLocalLaw30: "Cos'è la Legge Locale 30 di NYC?",
        whatIsAnITIN: "Cos'è un ITIN?",
        howToApplyForSSN: "Come richiedere il SSN?",
        documentsRequired: "Documenti Richiesti",
        closestOfficeLocation: "Posizione dell'Ufficio più Vicino",
        noValidVisa:
          "Spiacenti, visita il sito web USCIS qui sotto per richiedere un visto.",
        applyForImmigrantVisa: "Richiedi un visto per immigrati.",
        applyForNonImmigrantVisa: "Richiedi un visto per non immigrati.",
        holdButton: "Tieni premuto per parlare, rilascia per inviare.",
      },
    },
    pl: {
      translation: {
        select: "Wybierz język",
        chat: "Czat z Pat.io",
        welcome:
          "Cześć! 👋 Jestem Pat.io, twoim osobistym asystentem AI, tutaj, aby pomóc we wszystkim, co związane z numerami ubezpieczenia społecznego (SSN), indywidualnymi numerami identyfikacyjnymi podatnika (ITIN) oraz Lokalnym Prawem 30 miasta Nowy Jork. Jak mogę ci dzisiaj pomóc?",
        error: "Odpowiedź sieci nie była prawidłowa",
        sorry:
          "Przepraszamy, wystąpił błąd podczas przetwarzania Twojego żądania.",
        SSN: "Jak ubiegać się o SSN?",
        LL30: "Czym jest Lokalne Prawo 30 NYC?",
        LL30Selected:
          "Lokalne Prawo 30 z 2017 roku (LL30) w Nowym Jorku wymaga zapewnienia usług dostępu językowego w miejskich agencjach. Zadzwoń pod numer 212-346-6047, aby uzyskać więcej informacji.",
        ITIN: "Czym jest ITIN?",
        ITINSelected:
          "ITIN to 9-cyfrowy numer dla osób niebędących obywatelami do składania deklaracji podatkowych.",
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
          "Nie ma problemu! Oto lista wymaganych dokumentów. Gdy będziesz gotowy, możesz kontynuować proces aplikacji. Jestem tutaj, aby pomóc!",
        nearestOffice: "Czy mogę prosić o twój kod pocztowy?",
        anymoreHelp:
          "W porządku. Czy mogę pomóc w czymś jeszcze w sprawie Twojego wniosku o SSN?",
        more: "Więcej",
        yes: "Tak",
        no: "Nie",
        complete: "Mam wszystkie dokumenty",
        incomplete: "Brakuje mi dokumentów",
        type: "Wpisz swoją wiadomość...",
        irsITIN: "IRS i ITIN.",
        nycITIN: "Nowy Jork i ITIN.",
        TIN: "Różne numery identyfikacji podatkowej.",
        learnLL30: "Dowiedz się więcej...",
        startOver: "Zacznij od nowa",
        whatIsNYCLocalLaw30: "Czym jest Lokalne Prawo 30 NYC?",
        whatIsAnITIN: "Czym jest ITIN?",
        howToApplyForSSN: "Jak ubiegać się o SSN?",
        documentsRequired: "Wymagane dokumenty",
        closestOfficeLocation: "Najbliższa lokalizacja biura",
        noValidVisa:
          "Przepraszamy, odwiedź stronę USCIS poniżej, aby ubiegać się o wizę.",
        applyForImmigrantVisa: "Złóż wniosek o wizę imigracyjną.",
        applyForNonImmigrantVisa: "Złóż wniosek o wizę nieimigracyjną.",
        holdButton: "Naciśnij i przytrzymaj, aby mówić, zwolnij, aby wysłać.",
      },
    },

    el: {
      translation: {
        select: "Επιλέξτε μια γλώσσα",
        chat: "Συνομιλία με το Pat.io",
        welcome:
          "Γεια σας! 👋 Είμαι ο Pat.io, ο προσωπικός σας βοηθός AI, εδώ για να σας βοηθήσω με οτιδήποτε σχετίζεται με Αριθμούς Κοινωνικής Ασφάλισης (SSN), Ατομικούς Αριθμούς Φορολογικού Αναγνωριστικού (ITIN), και τον Τοπικό Νόμο 30 της Νέας Υόρκης. Πώς μπορώ να σας βοηθήσω σήμερα;",
        error: "Η απάντηση του δικτύου δεν ήταν εντάξει",
        sorry:
          "Συγγνώμη, υπήρξε ένα σφάλμα κατά την επεξεργασία του αιτήματός σας.",
        SSN: "Πώς να κάνετε αίτηση για SSN;",
        LL30: "Τι είναι ο Τοπικός Νόμος 30 της Νέας Υόρκης;",
        LL30Selected:
          "Ο Τοπικός Νόμος 30 του 2017 (LL30) στη Νέα Υόρκη απαιτεί την παροχή γλωσσικών υπηρεσιών σε δημοτικές υπηρεσίες. Καλέστε το 212-346-6047 για περισσότερες πληροφορίες.",
        ITIN: "Τι είναι το ITIN;",
        ITINSelected:
          "Το ITIN είναι ένας 9-ψήφιος αριθμός για μη πολίτες για την υποβολή φορολογικών δηλώσεων.",
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
          "Κανένα πρόβλημα! Εδώ είναι μια λίστα με τα απαιτούμενα έγγραφα. Όταν είστε έτοιμοι, μπορείτε να συνεχίσετε τη διαδικασία αίτησης. Είμαι εδώ για να βοηθήσω!",
        nearestOffice: "Μπορώ να έχω τον ταχυδρομικό σας κώδικα παρακαλώ;",
        anymoreHelp:
          "Εντάξει. Υπάρχει κάτι άλλο που μπορώ να σας βοηθήσω σχετικά με την αίτησή σας για SSN;",
        more: "Περισσότερα",
        yes: "Ναι",
        no: "Όχι",
        complete: "Έχω όλα τα έγγραφα",
        incomplete: "Μου λείπουν έγγραφα",
        type: "Γράψτε το μήνυμά σας...",
        irsITIN: "IRS και ITIN.",
        nycITIN: "Νέα Υόρκη και ITIN.",
        TIN: "Διάφοροι Αριθμοί Φορολογικού Αναγνωριστικού.",
        learnLL30: "Μάθετε περισσότερα...",
        startOver: "Ξεκινήστε ξανά",
        whatIsNYCLocalLaw30: "Τι είναι ο Τοπικός Νόμος 30 της Νέας Υόρκης;",
        whatIsAnITIN: "Τι είναι το ITIN;",
        howToApplyForSSN: "Πώς να κάνετε αίτηση για SSN;",
        documentsRequired: "Απαιτούμενα έγγραφα",
        closestOfficeLocation: "Πιο κοντινή τοποθεσία γραφείου",
        noValidVisa:
          "Συγγνώμη, επισκεφτείτε τον ιστότοπο USCIS παρακάτω για να κάνετε αίτηση για βίζα.",
        applyForImmigrantVisa: "Αίτηση για Μεταναστευτική Βίζα.",
        applyForNonImmigrantVisa: "Αίτηση για Μη Μεταναστευτική Βίζα.",
        holdButton: "Κρατήστε πατημένο για ομιλία, αφήστε για αποστολή.",
      },
    },

    yi: {
      translation: {
        select: "אויך אויף א שפּראַך",
        chat: "צאַט מיט פּאַט.אָיי",
        welcome:
          "העלא! 👋 איך בין Pat.io, אייער פּערזענלעכער אַי אַסיסטענט, דאָ צו העלפֿן מיט אַלץ וואָס איז פֿאַרבונדן מיט סאציאל סעקיוריטי נומערן (SSN), אינדיווידואלע שטייער אידענטיפיקאַציע נומערן (ITIN), און ניו יארק סיטי'ס לאָקאַל געזעץ 30. ווי קען איך העלפֿן היינט?",
        error: "נעץ ענטפֿער איז נישט געווען גוט",
        sorry: "אנטשולדיגט, עס איז געווען אַ טעות אין פּראָצעסירן אייער בקשה.",
        SSN: "ווי אַזוי צו אַפּלייען פֿאַר SSN?",
        LL30: "וואָס איז NYC לאָקאַל געזעץ 30?",
        LL30Selected:
          "די לאָקאַל געזעץ 30 פון 2017 (LL30) אין ניו יארק סיטי פארלאנגט צושטעלן פון שפּראַך אַקסעס סערוויסן אין שטאָטישע אגענטורן. רופט 212-346-6047 פאר מער אינפֿאָרמאַציע.",
        ITIN: "וואָס איז ITIN?",
        ITINSelected:
          "ITIN איז א 9-ציפער נומער פאר נישט-בירגער צו איינגעבן שטייערן.",
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
          "קיין פּראָבלעם! דאָ איז אַ רשימה פון די נויטיקע דאָקומענטן. ווען איר זענט גרייט, קענט איר פאָרזעצן דעם אַפּליקאַציע פּראָצעס. איך בין דאָ צו העלפֿן!",
        nearestOffice: "מאַך מיר א טובה און געב מיר אייער זיפּ קאָד?",
        anymoreHelp:
          "אייד עס איז עפעס אנדערש וואָס איך קען אייך העלפֿן מיט וועגן אייער SSN אַפּליקאַציע?",
        more: "מער",
        yes: "יאָ",
        no: "ניין",
        complete: "איך האָב אַלע די דאָקומענטן",
        incomplete: "מיר פעלן דאָקומענטן",
        type: "שרייב אייער מעלדונג...",
        irsITIN: "די IRS און ITIN.",
        nycITIN: "ניו יארק סיטי און ITIN.",
        TIN: "פארשידענע שטייער אידענטיפיקאציע נומערן.",
        learnLL30: "לערנט מער...",
        startOver: "אָנהייב פון ס׳נײַ",
        whatIsNYCLocalLaw30: "וואָס איז NYC לאָקאַל געזעץ 30?",
        whatIsAnITIN: "וואָס איז ITIN?",
        howToApplyForSSN: "ווי אַזוי צו אַפּלייען פֿאַר SSN?",
        documentsRequired: "נויטיקע דאָקומענטן",
        closestOfficeLocation: "נאָענט אָפיס אָרט",
        noValidVisa:
          "אנטשולדיגט, ביטע באַזוכט דעם USCIS וועבזייט אונטן צו אַפּלייען פאר א וויזע.",
        applyForImmigrantVisa: "אפּליקאַציע פאר אַן אימיגראַנט וויזע.",
        applyForNonImmigrantVisa: "אפּליקאַציע פאר א ניט-אימיגראַנט וויזע.",
        holdButton: "האַלט צו רעדן, לאָזן צו שיקן.",
      },
    },

    he: {
      translation: {
        select: "בחר שפה",
        chat: "צ'אט עם Pat.io",
        welcome:
          "שלום! 👋 אני Pat.io, העוזר האישי שלך מבוסס AI, כאן לעזור לך בכל הקשור למספרי ביטוח לאומי (SSN), מספרי זיהוי מס אישיים (ITIN), וחוק מקומי 30 של העיר ניו יורק. איך אפשר לעזור לך היום?",
        error: "תגובת הרשת לא הייתה תקינה",
        sorry: "מצטערים, אירעה שגיאה בעיבוד הבקשה שלך.",
        SSN: "כיצד להגיש בקשה ל-SSN?",
        LL30: "מהו חוק מקומי 30 של ניו יורק?",
        LL30Selected:
          "חוק מקומי 30 משנת 2017 (LL30) בעיר ניו יורק מחייב את העירייה לספק שירותי נגישות לשפה בסוכנויות העירוניות. התקשר ל-212-346-6047 למידע נוסף.",
        ITIN: "מהו ITIN?",
        ITINSelected:
          "ITIN הוא מספר בן 9 ספרות לאזרחים שאינם אמריקאים להגשת מסים.",
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
          "אין בעיה! הנה רשימת המסמכים הנדרשים. כאשר תהיה מוכן, תוכל להמשיך בתהליך הבקשה. אני כאן כדי לעזור!",
        nearestOffice: "אפשר לקבל את המיקוד שלך בבקשה?",
        anymoreHelp:
          "בסדר. האם יש משהו נוסף שאני יכול לעזור לך בו בנוגע לבקשת ה-SSN שלך?",
        more: "עוד",
        yes: "כן",
        no: "לא",
        complete: "יש לי את כל המסמכים",
        incomplete: "חסרים לי מסמכים",
        type: "כתבו את ההודעה שלך...",
        irsITIN: "ה-IRS ו-ITIN.",
        nycITIN: "ניו יורק ו-ITIN.",
        TIN: "סוגים שונים של מספרי זיהוי מס.",
        learnLL30: "למידע נוסף...",
        startOver: "התחל מחדש",
        whatIsNYCLocalLaw30: "מהו חוק מקומי 30 של ניו יורק?",
        whatIsAnITIN: "מהו ITIN?",
        howToApplyForSSN: "כיצד להגיש בקשה ל-SSN?",
        documentsRequired: "מסמכים נדרשים",
        closestOfficeLocation: "מיקום המשרד הקרוב ביותר",
        noValidVisa: "מצטערים, אנא בקר באתר USCIS למטה כדי להגיש בקשה לויזה.",
        applyForImmigrantVisa: "הגש בקשה לויזה להגירה.",
        applyForNonImmigrantVisa: "הגש בקשה לויזה שאינה להגירה.",
        holdButton: "לחץ והחזק כדי לדבר, שחרר כדי לשלוח.",
      },
    },

    ht: {
      translation: {
        select: "Chwazi yon lang",
        chat: "Chat ak Pat.io",
        welcome:
          "Bonjou! 👋 Mwen se Pat.io, asistan pèsonèl AI ou, isit la pou ede ou ak tout sa ki gen rapò ak Nimewo Sekirite Sosyal (SSN), Nimewo Idantifikasyon Pèsonèl pou Taks (ITIN), ak Lwa Lokal 30 nan vil New York. Kijan mwen ka ede w jodi a?",
        error: "Repons rezo a pa t bon",
        sorry: "Padon, te gen yon erè nan trete demann ou an.",
        SSN: "Kijan pou aplike pou SSN?",
        LL30: "Kisa ki Lwa Lokal 30 NYC?",
        LL30Selected:
          "Lwa Lokal 30 an 2017 (LL30) nan vil New York egzije sèvis aksè nan lang nan ajans vil yo. Rele 212-346-6047 pou plis enfòmasyon.",
        ITIN: "Kisa ki ITIN?",
        ITINSelected:
          "ITIN se yon nimewo 9 chif pou moun ki pa sitwayen pou ranpli taks.",
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
          "Pa gen pwoblèm! Men lis dokiman yo mande yo. Lè ou pare, ou ka kontinye pwosesis aplikasyon an. Mwen isit la pou ede w!",
        nearestOffice: "Men enfòmasyon sou biwo SSA ki pi pre: ",
        anymoreHelp:
          "Dakò. Èske gen lòt bagay mwen ka ede w avèk konsènan aplikasyon SSN ou a?",
        more: "Plis",
        yes: "Wi",
        no: "Non",
        complete: "Mwen gen tout dokiman yo",
        incomplete: "Mwen manke dokiman",
        type: "Tape mesaj ou...",
        irsITIN: "IRS ak ITIN.",
        nycITIN: "Vil New York ak ITIN.",
        TIN: "Nimewo Idantifikasyon pou Taks diferan.",
        learnLL30: "Aprann plis...",
        startOver: "Rekòmanse",
        whatIsNYCLocalLaw30: "Kisa ki Lwa Lokal 30 NYC?",
        whatIsAnITIN: "Kisa ki ITIN?",
        howToApplyForSSN: "Kijan pou aplike pou SSN?",
        documentsRequired: "Dokiman yo mande yo",
        closestOfficeLocation: "Kote Biwo ki pi pre",
        noValidVisa:
          "Padon, tanpri vizite sit entènèt USCIS ki anba a pou aplike pou yon viza.",
        applyForImmigrantVisa: "Aplike pou yon Viza Imigran.",
        applyForNonImmigrantVisa: "Aplike pou yon Viza ki pa Imigran.",
        holdButton: "Kenbe pou pale, lage pou voye.",
      },
    },

    fr: {
      translation: {
        select: "Choisissez une langue",
        chat: "Chat avec Pat.io",
        welcome:
          "Bienvenue sur Pat.io ! 👋 Je suis votre assistant personnel AI, ici pour vous aider avec tout ce qui concerne les numéros de sécurité sociale (SSN), les numéros d'identification de contribuable individuel (ITIN), et la Loi Locale 30 de la ville de New York. Comment puis-je vous aider aujourd'hui ?",
        error: "La réponse du réseau n'était pas correcte",
        sorry:
          "Désolé, une erreur s'est produite lors du traitement de votre demande.",
        SSN: "Comment demander un SSN ?",
        LL30: "Qu'est-ce que la Loi Locale 30 de NYC ?",
        LL30Selected:
          "La Loi Locale 30 de 2017 (LL30) à New York exige que les agences de la ville fournissent des services d'accès linguistique. Appelez le 212-346-6047 pour plus d'informations.",
        ITIN: "Qu'est-ce qu'un ITIN ?",
        ITINSelected:
          "ITIN est un numéro de 9 chiffres pour les non-résidents pour déclarer leurs impôts.",
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
          "Pas de problème ! Voici la liste des documents requis. Lorsque vous êtes prêt, vous pouvez poursuivre le processus de demande. Je suis là pour vous aider !",
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
        irsITIN: "IRS et ITIN.",
        nycITIN: "Ville de New York et ITIN.",
        TIN: "Numéros d'identification fiscale différents.",
        learnLL30: "En savoir plus...",
        startOver: "Recommencer",
        whatIsNYCLocalLaw30: "Qu'est-ce que la Loi Locale 30 de NYC ?",
        whatIsAnITIN: "Qu'est-ce qu'un ITIN ?",
        howToApplyForSSN: "Comment demander un SSN ?",
        documentsRequired: "Documents requis",
        closestOfficeLocation: "Emplacement du bureau le plus proche",
        noValidVisa:
          "Désolé, veuillez visiter le site USCIS ci-dessous pour demander un visa.",
        applyForImmigrantVisa: "Demander un visa immigrant.",
        applyForNonImmigrantVisa: "Demander un visa non immigrant.",
        holdButton: "Appuyez pour parler, relâchez pour envoyer.",
      },
    },

    es: {
      translation: {
        select: "Elige un idioma",
        chat: "Chat con Pat.io",
        welcome:
          "¡Hola! 👋 Soy Pat.io, tu asistente personal de inteligencia artificial, aquí para ayudarte con todo lo relacionado con los Números de Seguridad Social (SSN), los Números de Identificación Personal del Contribuyente (ITIN) y la Ley Local 30 de la ciudad de Nueva York. ¿En qué puedo ayudarte hoy?",
        error: "La respuesta de la red no fue correcta",
        sorry: "Lo sentimos, hubo un error al procesar tu solicitud.",
        SSN: "Cómo solicitar el SSN",
        LL30: "¿Qué es la Ley Local 30 de NYC?",
        LL30Selected:
          "La Ley Local 30 de 2017 (LL30) en la ciudad de Nueva York exige la provisión de servicios de acceso al idioma en agencias de la ciudad. Llama al 212-346-6047 para más información.",
        ITIN: "¿Qué es un ITIN?",
        ITINSelected:
          "ITIN es un número de 9 dígitos para no ciudadanos para presentar impuestos.",
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
          "No hay problema. Aquí tienes la lista de documentos requeridos. Cuando estés listo, puedes continuar con el proceso de solicitud. Estoy aquí para ayudarte.",
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
        irsITIN: "IRS e ITIN.",
        nycITIN: "Ciudad de Nueva York e ITIN.",
        TIN: "Números de Identificación de Contribuyente diferentes.",
        learnLL30: "Aprende más...",
        startOver: "Comenzar de nuevo",
        whatIsNYCLocalLaw30: "¿Qué es la Ley Local 30 de NYC?",
        whatIsAnITIN: "¿Qué es un ITIN?",
        howToApplyForSSN: "Cómo solicitar el SSN",
        documentsRequired: "Documentos requeridos",
        closestOfficeLocation: "Ubicación de la oficina más cercana",
        noValidVisa:
          "Lo sentimos, visita el sitio web de USCIS a continuación para solicitar una visa.",
        applyForImmigrantVisa: "Solicitar una visa de inmigrante.",
        applyForNonImmigrantVisa: "Solicitar una visa de no inmigrante.",
        holdButton: "Mantén presionado para hablar, suelta para enviar.",
      },
    },

    pt: {
      translation: {
        select: "Escolha um idioma",
        chat: "Chat com Pat.io",
        welcome:
          "Olá! 👋 Eu sou o Pat.io, seu assistente pessoal de IA, aqui para ajudar com tudo relacionado a Números de Seguro Social (SSN), Números de Identificação de Contribuinte Individual (ITIN) e a Lei Local 30 da cidade de Nova York. Como posso te ajudar hoje?",
        error: "A resposta da rede não foi ok",
        sorry: "Desculpe, ocorreu um erro ao processar sua solicitação.",
        SSN: "Como solicitar o SSN?",
        LL30: "O que é a Lei Local 30 de NYC?",
        LL30Selected:
          "A Lei Local 30 de 2017 (LL30) na cidade de Nova York exige serviços de acesso ao idioma em agências da cidade. Ligue para 212-346-6047 para mais informações.",
        ITIN: "O que é um ITIN?",
        ITINSelected:
          "ITIN é um número de 9 dígitos para não cidadãos para apresentação de impostos.",
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
          "Sem problemas! Aqui está a lista dos documentos necessários. Quando estiver pronto, você pode continuar com o processo de solicitação. Estou aqui para ajudar!",
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
        irsITIN: "IRS e ITIN.",
        nycITIN: "Cidade de Nova York e ITIN.",
        TIN: "Diferentes Números de Identificação de Contribuintes.",
        learnLL30: "Saiba mais...",
        startOver: "Recomeçar",
        whatIsNYCLocalLaw30: "O que é a Lei Local 30 de NYC?",
        whatIsAnITIN: "O que é um ITIN?",
        howToApplyForSSN: "Como solicitar o SSN?",
        documentsRequired: "Documentos necessários",
        closestOfficeLocation: "Localização do escritório mais próximo",
        noValidVisa:
          "Desculpe, por favor, visite o site da USCIS abaixo para solicitar um visto.",
        applyForImmigrantVisa: "Solicitar um visto de imigrante.",
        applyForNonImmigrantVisa: "Solicitar um visto de não imigrante.",
        holdButton: "Pressione para falar, solte para enviar.",
      },
    },

    zh: {
      translation: {
        select: "选择一种语言",
        chat: "与 Pat.io 聊天",
        welcome:
          "你好！👋 我是 Pat.io，您的个人 AI 助手，专门帮助您处理有关社会安全号码 (SSN)、个人纳税识别号 (ITIN) 和纽约市第30号地方法律的所有问题。今天我可以为您提供什么帮助呢？",
        error: "网络响应不正常",
        sorry: "抱歉，处理您的请求时出现错误。",
        SSN: "如何申请社会安全号码 (SSN)",
        LL30: "什么是纽约市第30号地方法律？",
        LL30Selected:
          "纽约市的第30号地方法律 (LL30) 于2017年通过，要求市政府机构提供语言服务。请致电 212-346-6047 获取更多信息。",
        ITIN: "什么是 ITIN？",
        ITINSelected: "ITIN 是一个9位数的编号，适用于非公民用于报税。",
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
          "没问题！以下是所需文件列表。准备好后，您可以继续申请流程。我在这里为您提供帮助！",
        nearestOffice: "以下是最近的社会安全管理局办事处信息：",
        anymoreHelp:
          "好的。关于您的社会安全号码申请，还有什么其他我可以帮助的吗？",
        more: "更多",
        yes: "是",
        no: "否",
        complete: "我有所有文件",
        incomplete: "我缺少文件",
        type: "输入您的消息...",
        irsITIN: "IRS 和 ITIN。",
        nycITIN: "纽约市和 ITIN。",
        TIN: "不同类型的纳税人识别号。",
        learnLL30: "了解更多...",
        startOver: "重新开始",
        whatIsNYCLocalLaw30: "什么是纽约市第30号地方法律？",
        whatIsAnITIN: "什么是 ITIN？",
        howToApplyForSSN: "如何申请社会安全号码 (SSN)",
        documentsRequired: "所需文件",
        closestOfficeLocation: "最近的办事处位置",
        noValidVisa: "抱歉，请访问以下 USCIS 网站以申请签证。",
        applyForImmigrantVisa: "申请移民签证。",
        applyForNonImmigrantVisa: "申请非移民签证。",
        holdButton: "按住说话，松开发送。",
      },
    },

    yue: {
      translation: {
        select: "選擇一種語言",
        chat: "與 Pat.io 聊天",
        welcome:
          "你好！👋 我係 Pat.io，你嘅個人 AI 助手，專門幫你處理有關社會安全號碼 (SSN)、個人納稅識別號碼 (ITIN) 同紐約市第30號本地法律嘅問題。今日有咩可以幫到你呢？",
        error: "網絡響應唔正常",
        sorry: "對唔住，處理你嘅請求時出現錯誤。",
        SSN: "點樣申請社會安全號碼 (SSN)",
        LL30: "咩係紐約市第30號本地法律？",
        LL30Selected:
          "紐約市嘅第30號本地法律 (LL30) 於2017年通過，要求市政府機構提供語言服務。請致電 212-346-6047 了解更多資訊。",
        ITIN: "咩係 ITIN？",
        ITINSelected: "ITIN 係一個9位數嘅號碼，俾非公民用嚟報稅。",
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
          "冇問題！以下係所需文件列表。準備好後，你可以繼續申請流程。我喺度幫你！",
        nearestOffice: "以下係最近嘅社會安全辦公室資料：",
        anymoreHelp:
          "好。關於你嘅社會安全號碼申請，仲有冇其他我可以幫你嘅地方？",
        more: "更多",
        yes: "係",
        no: "唔係",
        complete: "我有齊所有文件",
        incomplete: "我仲差文件",
        type: "輸入您的消息...",
        irsITIN: "IRS 同 ITIN。",
        nycITIN: "紐約市同 ITIN。",
        TIN: "唔同嘅納稅人識別號碼。",
        learnLL30: "了解更多...",
        startOver: "重新開始",
        whatIsNYCLocalLaw30: "咩係紐約市第30號本地法律？",
        whatIsAnITIN: "咩係 ITIN？",
        howToApplyForSSN: "點樣申請社會安全號碼 (SSN)",
        documentsRequired: "所需文件",
        closestOfficeLocation: "最近嘅辦公室位置",
        noValidVisa: "對唔住，請訪問以下 USCIS 網站以申請簽證。",
        applyForImmigrantVisa: "申請移民簽證。",
        applyForNonImmigrantVisa: "申請非移民簽證。",
        holdButton: "按住講嘢，放開發送。",
      },
    },

    hi: {
      translation: {
        select: "एक भाषा चुनें",
        chat: "Pat.io के साथ चैट करें",
        welcome:
          "नमस्ते! 👋 मैं Pat.io हूँ, आपका व्यक्तिगत AI सहायक, जो आपको सामाजिक सुरक्षा संख्या (SSN), व्यक्तिगत कर पहचान संख्या (ITIN), और न्यूयॉर्क शहर के स्थानीय कानून 30 के बारे में किसी भी प्रकार की सहायता के लिए यहाँ हूँ। मैं आज आपकी किस तरह मदद कर सकता हूँ?",
        error: "नेटवर्क प्रतिक्रिया ठीक नहीं थी",
        sorry: "क्षमा करें, आपके अनुरोध को संसाधित करने में एक त्रुटि हुई।",
        SSN: "SSN के लिए आवेदन कैसे करें?",
        LL30: "NYC का स्थानीय कानून 30 क्या है?",
        LL30Selected:
          "न्यूयॉर्क शहर का स्थानीय कानून 30 (LL30) 2017 में पारित हुआ था, जो नगर एजेंसियों में भाषा सेवा प्रदान करता है। अधिक जानकारी के लिए 212-346-6047 पर कॉल करें।",
        ITIN: "ITIN क्या है?",
        ITINSelected:
          "ITIN एक 9 अंकों की संख्या है जो गैर-नागरिकों के लिए कर दाखिल करने के लिए होती है।",
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
          "कोई बात नहीं! यहाँ आवश्यक दस्तावेजों की सूची है। जब आप तैयार हों, तो आवेदन प्रक्रिया जारी रखें। मैं यहाँ आपकी सहायता के लिए हूँ!",
        nearestOffice: "यहाँ निकटतम SSA कार्यालय की जानकारी है: ",
        anymoreHelp:
          "ठीक है। क्या SSN आवेदन के संबंध में मैं आपकी और किसी मदद कर सकता हूँ?",
        more: "और",
        yes: "हाँ",
        no: "नहीं",
        complete: "मेरे पास सभी दस्तावेज़ हैं",
        incomplete: "मेरे पास दस्तावेज़ नहीं हैं",
        type: "अपने संदेश दर्ज करें...",
        irsITIN: "IRS और ITIN।",
        nycITIN: "न्यूयॉर्क शहर और ITIN।",
        TIN: "विभिन्न कर पहचान संख्या।",
        learnLL30: "और अधिक जानें...",
        startOver: "फिर से शुरू करें",
        whatIsNYCLocalLaw30: "NYC का स्थानीय कानून 30 क्या है?",
        whatIsAnITIN: "ITIN क्या है?",
        howToApplyForSSN: "SSN के लिए आवेदन कैसे करें?",
        documentsRequired: "आवश्यक दस्तावेज़",
        closestOfficeLocation: "निकटतम कार्यालय का स्थान",
        noValidVisa:
          "क्षमा करें, कृपया नीचे दिए गए USCIS वेबसाइट पर जाएँ और वीजा के लिए आवेदन करें।",
        applyForImmigrantVisa: "आव्रजन वीजा के लिए आवेदन करें।",
        applyForNonImmigrantVisa: "गैर-आव्रजन वीजा के लिए आवेदन करें।",
        holdButton: "बोलने के लिए दबाएं, भेजने के लिए छोड़ें।",
      },
    },

    bn: {
      translation: {
        select: "একটি ভাষা বাছাই করুন",
        chat: "Pat.io এর সাথে চ্যাট করুন",
        welcome:
          "হ্যালো! 👋 আমি Pat.io, আপনার ব্যক্তিগত AI সহকারী, আমি এখানে এসেছি আপনাকে সামাজিক নিরাপত্তা নম্বর (SSN), ব্যক্তিগত কর শনাক্তকরণ নম্বর (ITIN), এবং নিউইয়র্ক শহরের লোকাল ল 30 সম্পর্কিত যে কোনও প্রশ্নে সহায়তা করতে। আমি আজ আপনাকে কীভাবে সাহায্য করতে পারি?",
        error: "নেটওয়ার্ক প্রতিক্রিয়া ঠিক ছিল না",
        sorry: "দুঃখিত, আপনার অনুরোধ প্রক্রিয়াকরণে একটি ত্রুটি ঘটেছে।",
        SSN: "SSN এর জন্য কীভাবে আবেদন করবেন?",
        LL30: "NYC-এর লোকাল ল 30 কী?",
        LL30Selected:
          "নিউইয়র্ক শহরের লোকাল ল 30 (LL30) 2017 সালে পাস হয়েছে, যা শহরের সংস্থাগুলিতে ভাষা পরিষেবা প্রদান নিশ্চিত করে। আরও তথ্যের জন্য 212-346-6047 এ কল করুন।",
        ITIN: "ITIN কী?",
        ITINSelected:
          "ITIN হলো 9-সংখ্যার একটি নম্বর যা নাগরিক নয় এমন ব্যক্তিদের জন্য কর ফাইলিংয়ের জন্য ব্যবহৃত হয়।",
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
          "সমস্যা নেই! এখানে প্রয়োজনীয় নথির তালিকা রয়েছে। যখন আপনি প্রস্তুত, তখন আবেদন প্রক্রিয়া চালিয়ে যেতে পারেন। আমি এখানে সাহায্যের জন্য আছি!",
        nearestOffice: "এখানে নিকটস্থ SSA অফিসের তথ্য দেওয়া হলো: ",
        anymoreHelp:
          "ঠিক আছে। আপনার SSN আবেদন সম্পর্কে আমি কি আরও কিছু সাহায্য করতে পারি?",
        more: "আরও",
        yes: "হ্যাঁ",
        no: "না",
        complete: "আমার সমস্ত নথি আছে",
        incomplete: "আমার কিছু নথি নেই",
        type: "আপনার বার্তা লিখুন...",
        irsITIN: "IRS এবং ITIN।",
        nycITIN: "নিউইয়র্ক শহর এবং ITIN।",
        TIN: "বিভিন্ন কর শনাক্তকরণ নম্বর।",
        learnLL30: "আরও জানুন...",
        startOver: "আবার শুরু করুন",
        whatIsNYCLocalLaw30: "NYC-এর লোকাল ল 30 কী?",
        whatIsAnITIN: "ITIN কী?",
        howToApplyForSSN: "SSN এর জন্য কীভাবে আবেদন করবেন?",
        documentsRequired: "প্রয়োজনীয় নথি",
        closestOfficeLocation: "নিকটস্থ অফিসের অবস্থান",
        noValidVisa:
          "দুঃখিত, অনুগ্রহ করে নিচের USCIS ওয়েবসাইটে যান এবং ভিসার জন্য আবেদন করুন।",
        applyForImmigrantVisa: "ইমিগ্রান্ট ভিসার জন্য আবেদন করুন।",
        applyForNonImmigrantVisa: "নন-ইমিগ্রান্ট ভিসার জন্য আবেদন করুন।",
        holdButton: "বলতে ধরে রাখুন, পাঠাতে ছেড়ে দিন।",
      },
    },

    te: {
      translation: {
        select: "భాషను ఎంచుకోండి",
        chat: "Pat.io తో చాట్ చేయండి",
        welcome:
          "హలో! 👋 నేను Pat.io, మీ వ్యక్తిగత AI సహాయకుడు, మీకు సామాజిక భద్రతా సంఖ్య (SSN), వ్యక్తిగత పన్ను గుర్తింపు సంఖ్య (ITIN), మరియు న్యూయార్క్ నగరంలోని లోకల్ లా 30 గురించి ఏవైనా ప్రశ్నలపై సహాయం చేయడానికి ఇక్కడ ఉన్నాను. నేను మీకు ఈరోజు ఎలా సహాయపడగలను?",
        error: "నెట్‌వర్క్ ప్రతిస్పందన సరిగా లేదు",
        sorry: "క్షమించండి, మీ అభ్యర్థనను ప్రాసెస్ చేయడంలో లోపం జరిగింది.",
        SSN: "SSN కోసం ఎలా దరఖాస్తు చేసుకోవాలి?",
        LL30: "NYC యొక్క లోకల్ లా 30 ఏమిటి?",
        LL30Selected:
          "న్యూయార్క్ నగరంలోని లోకల్ లా 30 (LL30) 2017లో ఆమోదించబడింది, ఇది నగర సంస్థలకు భాషా సేవలు అందించడానికి సహకరిస్తుంది. మరిన్ని వివరాలకు 212-346-6047 నంబర్‌కు కాల్ చేయండి.",
        ITIN: "ITIN అంటే ఏమిటి?",
        ITINSelected:
          "ITIN అనేది 9 అంకెల సంఖ్య, ఇది పౌరులు కాని వ్యక్తుల కోసం పన్ను దాఖలు చేయడానికి ఉపయోగిస్తారు.",
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
          "పరవాలేదు! ఇది అవసరమైన పత్రాల జాబితా. మీరు సిద్ధంగా ఉన్నప్పుడు, దరఖాస్తు ప్రక్రియను కొనసాగించవచ్చు. మీకు సహాయం చేయడానికి నేను ఇక్కడ ఉన్నాను!",
        nearestOffice: "ఇది సమీపంలోని SSA కార్యాలయ వివరాలు: ",
        anymoreHelp: "అలాగే. మీ SSN దరఖాస్తు గురించి నేను మరింత సహాయం చేయగలనా?",
        more: "మరింత",
        yes: "అవును",
        no: "కాదు",
        complete: "నా వద్ద అన్ని పత్రాలు ఉన్నాయి",
        incomplete: "నా వద్ద పత్రాలు లేవు",
        type: "మీ సందేశాన్ని నమోదు చేయండి...",
        irsITIN: "IRS మరియు ITIN.",
        nycITIN: "న్యూయార్క్ నగరం మరియు ITIN.",
        TIN: "వివిధ పన్ను గుర్తింపు సంఖ్యలు.",
        learnLL30: "మరింత తెలుసుకోండి...",
        startOver: "మళ్లీ ప్రారంభించండి",
        whatIsNYCLocalLaw30: "NYC యొక్క లోకల్ లా 30 ఏమిటి?",
        whatIsAnITIN: "ITIN అంటే ఏమిటి?",
        howToApplyForSSN: "SSN కోసం ఎలా దరఖాస్తు చేసుకోవాలి?",
        documentsRequired: "అవసరమైన పత్రాలు",
        closestOfficeLocation: "సమీపంలోని కార్యాలయ స్థానం",
        noValidVisa:
          "క్షమించండి, దయచేసి దిగువ USCIS వెబ్సైట్‌ను సందర్శించి వీసా కోసం దరఖాస్తు చేయండి.",
        applyForImmigrantVisa: "ఇమ్మిగ్రెంట్ వీసా కోసం దరఖాస్తు చేయండి.",
        applyForNonImmigrantVisa:
          "నాన్-ఇమ్మిగ్రెంట్ వీసా కోసం దరఖాస్తు చేయండి.",
        holdButton: "మాట్లాడడానికి నొక్కండి, పంపడానికి వదలండి.",
      },
    },

    pa: {
      translation: {
        select: "ਇੱਕ ਭਾਸ਼ਾ ਚੁਣੋ",
        chat: "Pat.io ਨਾਲ ਗੱਲਬਾਤ ਕਰੋ",
        welcome:
          "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! 👋 ਮੈਂ Pat.io ਹਾਂ, ਤੁਹਾਡਾ ਨਿੱਜੀ AI ਮਦਦਗਾਰ, ਮੈਂ ਤੁਹਾਡੇ ਸਮਾਜਿਕ ਸੁਰੱਖਿਆ ਨੰਬਰ (SSN), ਨਿੱਜੀ ਟੈਕਸ ਪਛਾਣ ਨੰਬਰ (ITIN), ਅਤੇ ਨਿਊਯਾਰਕ ਸਿਟੀ ਦੇ ਲੋਕਲ ਲਾਅ 30 ਬਾਰੇ ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ ਦੇਣ ਲਈ ਇੱਥੇ ਹਾਂ। ਮੈਂ ਅੱਜ ਤੁਹਾਡੀ ਕਿਸ ਤਰ੍ਹਾਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?",
        error: "ਨੈੱਟਵਰਕ ਪ੍ਰਤਿਕ੍ਰਿਆ ਠੀਕ ਨਹੀਂ ਸੀ",
        sorry: "ਮਾਫ ਕਰਨਾ, ਤੁਹਾਡੀ ਬੇਨਤੀ ਦੀ ਪ੍ਰਕਿਰਿਆ ਵਿੱਚ ਇੱਕ ਤਰੁੱਟੀ ਆਈ ਹੈ।",
        SSN: "SSN ਲਈ ਕਿਵੇਂ ਅਰਜ਼ੀ ਦੇਣੀ ਹੈ?",
        LL30: "NYC ਦਾ ਲੋਕਲ ਲਾਅ 30 ਕੀ ਹੈ?",
        LL30Selected:
          "ਨਿਊਯਾਰਕ ਸਿਟੀ ਦਾ ਲੋਕਲ ਲਾਅ 30 (LL30) 2017 ਵਿੱਚ ਪਾਸ ਹੋਇਆ, ਜੋ ਸਿਟੀ ਏਜੰਸੀਆਂ ਨੂੰ ਭਾਸ਼ਾ ਸੇਵਾਵਾਂ ਪ੍ਰਦਾਨ ਕਰਨ ਲਈ ਸਹਾਇਕ ਹੈ। ਹੋਰ ਜਾਣਕਾਰੀ ਲਈ 212-346-6047 'ਤੇ ਕਾਲ ਕਰੋ।",
        ITIN: "ITIN ਕੀ ਹੈ?",
        ITINSelected:
          "ITIN ਇੱਕ 9 ਅੰਕਾਂ ਦਾ ਨੰਬਰ ਹੈ ਜੋ ਗੈਰ-ਨਾਗਰਿਕਾਂ ਨੂੰ ਟੈਕਸ ਭਰਨ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।",
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
          "ਕੋਈ ਗੱਲ ਨਹੀਂ! ਇਹ ਲੋੜੀਂਦੇ ਦਸਤਾਵੇਜ਼ਾਂ ਦੀ ਸੂਚੀ ਹੈ। ਜਦੋਂ ਤੁਸੀਂ ਤਿਆਰ ਹੋ, ਅਰਜ਼ੀ ਦੀ ਪ੍ਰਕਿਰਿਆ ਜਾਰੀ ਰੱਖ ਸਕਦੇ ਹੋ। ਮੈਂ ਤੁਹਾਡੀ ਮਦਦ ਲਈ ਇੱਥੇ ਹਾਂ!",
        nearestOffice: "ਇੱਥੇ ਨਜ਼ਦੀਕੀ SSA ਦਫ਼ਤਰ ਬਾਰੇ ਜਾਣਕਾਰੀ ਦਿੱਤੀ ਗਈ ਹੈ: ",
        anymoreHelp:
          "ਠੀਕ ਹੈ। ਕੀ ਤੁਹਾਡੇ SSN ਅਰਜ਼ੀ ਬਾਰੇ ਹੋਰ ਕੋਈ ਸਹਾਇਤਾ ਕਰ ਸਕਦਾ ਹਾਂ?",
        more: "ਹੋਰ",
        yes: "ਹਾਂ",
        no: "ਨਹੀਂ",
        complete: "ਮੇਰੇ ਕੋਲ ਸਾਰੇ ਦਸਤਾਵੇਜ਼ ਹਨ",
        incomplete: "ਮੇਰੇ ਕੋਲ ਕੁਝ ਦਸਤਾਵੇਜ਼ ਨਹੀਂ ਹਨ",
        type: "ਆਪਣਾ ਸੁਨੇਹਾ ਟਾਈਪ ਕਰੋ...",
        irsITIN: "IRS ਅਤੇ ITIN ਬਾਰੇ ਹੋਰ ਜਾਣਕਾਰੀ ਲਵੋ।",
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
        noValidVisa:
          "ਮਾਫ ਕਰਨਾ, ਕਿਰਪਾ ਕਰਕੇ ਹੇਠਾਂ ਦਿੱਤੇ USCIS ਵੈਬਸਾਈਟ 'ਤੇ ਜਾਓ ਅਤੇ ਵੀਜ਼ਾ ਲਈ ਅਰਜ਼ੀ ਦਿਓ।",
        applyForImmigrantVisa: "ਇਮਿਗ੍ਰੈਂਟ ਵੀਜ਼ਾ ਲਈ ਅਰਜ਼ੀ ਦਿਓ।",
        applyForNonImmigrantVisa: "ਗੈਰ-ਇਮਿਗ੍ਰੈਂਟ ਵੀਜ਼ਾ ਲਈ ਅਰਜ਼ੀ ਦਿਓ।",
        holdButton: "ਗੱਲ ਕਰਨ ਲਈ ਦਬਾਓ, ਭੇਜਣ ਲਈ ਛੱਡੋ।",
      },
    },

    ta: {
      translation: {
        select: "ஒரு மொழியை தேர்ந்தெடுக்கவும்",
        chat: "Pat.io உடன் அரட்டை அடிக்கவும்",
        welcome:
          "வணக்கம்! 👋 நான் Pat.io, உங்கள் தனிப்பட்ட AI உதவியாளர், சமூக பாதுகாப்பு எண் (SSN), தனிநபர் வரி அடையாள எண் (ITIN), மற்றும் நியூயார்க் நகரின் உள்ளூர் சட்டம் 30 குறித்த உங்கள் கேள்விகளுக்கு உதவ இங்கே இருக்கிறேன். இன்றைய நாள் உங்களுக்கு எப்படி உதவ முடியும்?",
        error: "நெட்வொர்க் பதில் சரியாக இல்லை",
        sorry:
          "மன்னிக்கவும், உங்கள் கோரிக்கையை செயலாக்குவதில் ஒரு பிழை ஏற்பட்டது.",
        SSN: "SSN க்கு எப்படி விண்ணப்பிக்கலாம்?",
        LL30: "நியூயார்க் நகரத்தின் உள்ளூர் சட்டம் 30 என்பது என்ன?",
        LL30Selected:
          "நியூயார்க் நகரத்தின் உள்ளூர் சட்டம் 30 (LL30) 2017 இல் நிறைவேற்றப்பட்டது, இது நகர முகவரிகளுக்கு மொழிபெயர்ப்பு சேவைகளை வழங்குவதில் உதவுகிறது. மேலும் தகவலுக்கு 212-346-6047 ஐ அழைக்கவும்.",
        ITIN: "ITIN என்பது என்ன?",
        ITINSelected:
          "ITIN ஒரு 9 இலக்க எண், இது குடியுரிமையற்றவர்களுக்கு வரி தாக்கல் செய்ய பயன்படுத்தப்படுகிறது.",
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
          "பிரச்சனை இல்லை! இது தேவையான ஆவணங்களின் பட்டியல். நீங்கள் தயாராக இருக்கும்போது, விண்ணப்ப செயல்முறையைத் தொடரலாம். நான் உங்கள் உதவிக்கு இங்கே இருக்கிறேன்!",
        nearestOffice: "இது அருகிலுள்ள SSA அலுவலகத்தின் தகவல்: ",
        anymoreHelp:
          "சரி. உங்கள் SSN விண்ணப்பத்தைப் பற்றிய ஏதேனும் உதவி வேண்டுமா?",
        more: "மேலும்",
        yes: "ஆம்",
        no: "இல்லை",
        complete: "எனக்கு அனைத்து ஆவணங்களும் உள்ளன",
        incomplete: "எனக்கு ஆவணங்கள் இல்லை",
        type: "உங்கள் முகவரியை உள்ளிடவும்...",
        irsITIN: "IRS மற்றும் ITIN.",
        nycITIN: "நியூயார்க் நகரம் மற்றும் ITIN.",
        TIN: "வேறுபட்ட வரி அடையாள எண்கள்.",
        learnLL30: "மேலும் அறிய...",
        startOver: "மீண்டும் தொடங்கவும்",
        whatIsNYCLocalLaw30:
          "நியூயார்க் நகரத்தின் உள்ளூர் சட்டம் 30 என்பது என்ன?",
        whatIsAnITIN: "ITIN எண் என்பது என்ன?",
        howToApplyForSSN: "SSN க்கு எப்படி விண்ணப்பிக்கலாம்?",
        documentsRequired: "தேவையான ஆவணங்கள்",
        closestOfficeLocation: "அருகிலுள்ள அலுவலகத்தின் இருப்பிடம்",
        noValidVisa:
          "மன்னிக்கவும், தயவுசெய்து கீழே உள்ள USCIS வலைதளத்தைப் பார்வையிட்டு விசாவுக்கு விண்ணப்பிக்கவும்.",
        applyForImmigrantVisa: "இமிக்ரேண்ட் விசாவிற்கு விண்ணப்பிக்கவும்.",
        applyForNonImmigrantVisa:
          "நான்-இமிக்ரேண்ட் விசாவிற்கு விண்ணப்பிக்கவும்.",
        holdButton: "பேச அழுத்தவும், அனுப்ப விடுங்கள்.",
      },
    },

    ko: {
      translation: {
        select: "언어 선택",
        chat: "Pat.io와 채팅하기",
        welcome:
          "안녕하세요! 👋 저는 Pat.io입니다. 사회보장번호 (SSN), 개인 납세자 식별 번호 (ITIN), 그리고 뉴욕시 지방법 30과 관련된 모든 질문에 답변해 드릴 개인 AI 비서입니다. 오늘 어떤 도움을 드릴까요?",
        error: "네트워크 응답이 올바르지 않습니다",
        sorry: "죄송합니다, 요청을 처리하는 중 오류가 발생했습니다.",
        SSN: "SSN 신청 방법",
        LL30: "뉴욕시 지방 법률 30이 무엇인가요?",
        LL30Selected:
          "뉴욕시 지방 법률 30 (LL30)은 2017년에 통과된 법으로, 시정부 기관에 언어 서비스 제공을 보장합니다. 추가 정보를 원하시면 212-346-6047로 전화하세요.",
        ITIN: "ITIN이란 무엇인가요?",
        ITINSelected:
          "ITIN은 9자리 번호로, 비시민권자들이 세금 신고를 위해 사용합니다.",
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
          "문제없습니다! 여기 필요한 서류 목록이 있습니다. 준비가 되면 신청 절차를 계속 진행하세요. 도움이 필요하면 말씀해주세요!",
        nearestOffice: "가까운 SSA 사무소에 대한 정보는 다음과 같습니다: ",
        anymoreHelp: "좋습니다. SSN 신청과 관련해 더 도와드릴 사항이 있을까요?",
        more: "더보기",
        yes: "네",
        no: "아니요",
        complete: "필요한 서류를 모두 가지고 있습니다",
        incomplete: "서류가 부족합니다",
        type: "주소를 입력하세요...",
        irsITIN: "IRS와 ITIN.",
        nycITIN: "뉴욕시와 ITIN.",
        TIN: "다양한 납세자 식별 번호.",
        learnLL30: "더 알아보기...",
        startOver: "다시 시작하기",
        whatIsNYCLocalLaw30: "뉴욕시 지방법 30이 무엇인가요?",
        whatIsAnITIN: "ITIN 번호란 무엇인가요?",
        howToApplyForSSN: "SSN 신청 방법",
        documentsRequired: "필요한 서류",
        closestOfficeLocation: "가장 가까운 사무소 위치",
        noValidVisa:
          "죄송합니다, 아래의 USCIS 웹사이트를 방문하여 비자를 신청해 주세요.",
        applyForImmigrantVisa: "이민 비자 신청하기.",
        applyForNonImmigrantVisa: "비이민 비자 신청하기.",
        holdButton: "말씀하려면 누르고, 보내려면 놓으세요.",
      },
    },

    ja: {
      translation: {
        select: "言語を選択してください",
        chat: "Pat.ioとチャットする",
        welcome:
          "こんにちは！ 👋 私はPat.ioです。あなたの個人的なAIアシスタントとして、社会保障番号 (SSN)、個人納税者番号 (ITIN)、そしてニューヨーク市のローカル法30に関する質問にお答えするためにここにいます。今日、どのようにお手伝いしましょうか？",
        error: "ネットワーク応答が正常ではありません",
        sorry: "申し訳ありませんが、リクエストの処理中にエラーが発生しました。",
        SSN: "SSNの申請方法",
        LL30: "ニューヨーク市のローカル法30とは何ですか？",
        LL30Selected:
          "ニューヨーク市のローカル法30 (LL30) は2017年に施行され、市政府機関が言語サービスを提供することを保証します。詳しくは212-346-6047にお電話ください。",
        ITIN: "ITINとは何ですか？",
        ITINSelected:
          "ITINとは、非市民が税申告をするために使用する9桁の番号です。",
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
          "問題ありません！こちらが必要な書類リストです。準備が整ったら、申請手続きを続けてください。サポートが必要であればお知らせください！",
        nearestOffice: "こちらが最寄りのSSAオフィスの情報です: ",
        anymoreHelp:
          "わかりました。SSNの申請について、他にお手伝いできることはありますか？",
        more: "もっと見る",
        yes: "はい",
        no: "いいえ",
        complete: "必要な書類はすべて揃っています",
        incomplete: "書類が不足しています",
        type: "住所を入力してください...",
        irsITIN: "IRSおよびITIN。",
        nycITIN: "ニューヨーク市およびITIN。",
        TIN: "さまざまな納税者識別番号。",
        learnLL30: "さらに詳しく...",
        startOver: "再スタート",
        whatIsNYCLocalLaw30: "ニューヨーク市のローカル法30とは何ですか？",
        whatIsAnITIN: "ITIN番号とは何ですか？",
        howToApplyForSSN: "SSNの申請方法",
        documentsRequired: "必要な書類",
        closestOfficeLocation: "最寄りのオフィスの場所",
        noValidVisa:
          "申し訳ありませんが、以下のUSCISウェブサイトでビザを申請してください。",
        applyForImmigrantVisa: "移民ビザを申請する。",
        applyForNonImmigrantVisa: "非移民ビザを申請する。",
        holdButton: "話すには押し続け、送信には離してください。",
      },
    },

    vi: {
      translation: {
        select: "Chọn một ngôn ngữ",
        chat: "Trò chuyện với Pat.io",
        welcome:
          "Xin chào! 👋 Tôi là Pat.io, trợ lý AI cá nhân của bạn, tôi ở đây để giúp bạn với các câu hỏi liên quan đến Số An Sinh Xã Hội (SSN), Số Nhận Dạng Người Nộp Thuế Cá Nhân (ITIN), và Luật Địa phương 30 của thành phố New York. Hôm nay tôi có thể giúp gì cho bạn?",
        error: "Phản hồi mạng không ổn định",
        sorry: "Xin lỗi, đã xảy ra lỗi trong quá trình xử lý yêu cầu của bạn.",
        SSN: "Cách đăng ký SSN",
        LL30: "Luật Địa phương 30 của NYC là gì?",
        LL30Selected:
          "Luật Địa phương 30 của thành phố New York (LL30) yêu cầu các cơ quan thành phố cung cấp dịch vụ ngôn ngữ. Để biết thêm thông tin, vui lòng gọi 212-346-6047.",
        ITIN: "Số ITIN là gì?",
        ITINSelected:
          "ITIN là một số gồm 9 chữ số, được cấp cho người không phải công dân để khai thuế.",
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
          "Không sao! Đây là danh sách các tài liệu bạn cần. Khi bạn đã chuẩn bị xong, bạn có thể tiếp tục quy trình đăng ký. Tôi luôn ở đây để hỗ trợ bạn!",
        nearestOffice: "Đây là thông tin về văn phòng SSA gần nhất: ",
        anymoreHelp:
          "Được rồi. Có điều gì khác mà tôi có thể giúp bạn về đơn đăng ký SSN không?",
        more: "Thêm nữa",
        yes: "Có",
        no: "Không",
        complete: "Tôi có tất cả các tài liệu",
        incomplete: "Tôi còn thiếu tài liệu",
        type: "Nhập địa chỉ của bạn...",
        irsITIN: "IRS và ITIN.",
        nycITIN: "Thành phố New York và ITIN.",
        TIN: "Các số nhận dạng người nộp thuế khác.",
        learnLL30: "Tìm hiểu thêm...",
        startOver: "Bắt đầu lại",
        whatIsNYCLocalLaw30: "Luật Địa phương 30 của NYC là gì?",
        whatIsAnITIN: "Số ITIN là gì?",
        howToApplyForSSN: "Cách đăng ký SSN",
        documentsRequired: "Tài liệu cần thiết",
        closestOfficeLocation: "Vị trí văn phòng gần nhất",
        noValidVisa:
          "Xin lỗi, vui lòng truy cập trang web USCIS dưới đây để đăng ký thị thực.",
        applyForImmigrantVisa: "Đăng ký thị thực nhập cư.",
        applyForNonImmigrantVisa: "Đăng ký thị thực không nhập cư.",
        holdButton: "Nhấn để nói, thả để gửi.",
      },
    },

    ar: {
      translation: {
        select: "اختر لغة",
        chat: "الدردشة مع Pat.io",
        welcome:
          "مرحباً! 👋 أنا Pat.io، مساعدك الشخصي الذكي، هنا لمساعدتك في جميع الأمور المتعلقة برقم الضمان الاجتماعي (SSN)، ورقم تعريف دافع الضرائب الفردي (ITIN)، وقانون نيويورك المحلي رقم 30. كيف يمكنني مساعدتك اليوم؟",
        error: "استجابة الشبكة لم تكن جيدة",
        sorry: "عذرًا، حدث خطأ أثناء معالجة طلبك.",
        SSN: "كيفية التقديم للحصول على SSN",
        LL30: "ما هو القانون المحلي رقم 30 لمدينة نيويورك؟",
        LL30Selected:
          "قانون نيويورك المحلي رقم 30 (LL30) يتطلب من وكالات المدينة توفير خدمات الوصول اللغوي. لمزيد من المعلومات، اتصل بالرقم 212-346-6047.",
        ITIN: "ما هو رقم ITIN؟",
        ITINSelected:
          "ITIN هو رقم مكون من 9 أرقام يُستخدم للأفراد غير المواطنين لأغراض الضرائب.",
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
          "لا مشكلة! إليك قائمة المستندات المطلوبة. بمجرد أن تكون جاهزاً، يمكنك المتابعة في عملية التقديم. أنا هنا للمساعدة!",
        nearestOffice: "إليك معلومات حول أقرب مكتب SSA: ",
        anymoreHelp:
          "حسنًا. هل هناك أي شيء آخر يمكنني مساعدتك به بخصوص طلب SSN الخاص بك؟",
        more: "المزيد",
        yes: "نعم",
        no: "لا",
        complete: "لدي جميع المستندات",
        incomplete: "أفتقد بعض المستندات",
        type: "أدخل عنوانك...",
        irsITIN: "مصلحة الضرائب وITIN.",
        nycITIN: "مدينة نيويورك وITIN.",
        TIN: "أرقام تعريف دافعي الضرائب المختلفة.",
        learnLL30: "تعرف على المزيد...",
        startOver: "ابدأ من جديد",
        whatIsNYCLocalLaw30: "ما هو القانون المحلي رقم 30 لمدينة نيويورك؟",
        whatIsAnITIN: "ما هو رقم ITIN؟",
        howToApplyForSSN: "كيفية التقديم للحصول على SSN",
        documentsRequired: "المستندات المطلوبة",
        closestOfficeLocation: "موقع المكتب الأقرب",
        noValidVisa: "عذرًا، يرجى زيارة موقع USCIS أدناه للتقديم على التأشيرة.",
        applyForImmigrantVisa: "التقديم للحصول على تأشيرة هجرة.",
        applyForNonImmigrantVisa: "التقديم للحصول على تأشيرة غير مهاجر.",
        holdButton: "اضغط للتحدث، حرر للإرسال.",
      },
    },

    ur: {
      translation: {
        select: "ایک لغہ منتخب کریں۔",
        chat: "Pat.io سے بات کریں۔",
        welcome:
          "خوش آمدید! 👋 میں Pat.io ہوں، آپ کا ذاتی AI معاون، اور میں یہاں آپ کی مدد کے لیے موجود ہوں تاکہ آپ سوشل سیکیورٹی نمبر (SSN)، انفرادی ٹیکس دہندہ شناختی نمبر (ITIN)، اور نیویارک سٹی کے لوکل قانون 30 کے بارے میں پوچھے گئے سوالات کا جواب دے سکیں۔",
        error: "نیٹ ورک کا جواب ٹھیک نہیں تھا۔",
        sorry: "معذرت، آپ کی درخواست پر عمل کرتے وقت کوئی غلطی ہوئی ہے۔",
        SSN: "SSN کے لیے درخواست کیسے دی جائے",
        LL30: "نیویارک سٹی لوکل قانون 30 کیا ہے؟",
        LL30Selected:
          "نیویارک سٹی کا لوکل قانون 30 (LL30) شہر کی ایجنسیوں سے زبان کی سہولیات فراہم کرنے کا تقاضا کرتا ہے۔ مزید معلومات کے لیے، 212-346-6047 پر کال کریں۔",
        ITIN: "ITIN نمبر کیا ہے؟",
        ITINSelected:
          "ITIN ایک 9 عدد کا منفرد نمبر ہے جو غیر شہریوں کو ٹیکس کے مقاصد کے لیے دیا جاتا ہے۔",
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
          "کوئی مسئلہ نہیں! یہ درکار دستاویزات کی فہرست ہے۔ جب آپ تیار ہوں، آپ اپنی درخواست کا عمل جاری رکھ سکتے ہیں۔ میں یہاں مدد کے لیے موجود ہوں!",
        nearestOffice: "یہ قریب ترین SSA دفتر کے بارے میں معلومات ہیں: ",
        anymoreHelp:
          "ٹھیک ہے۔ کیا آپ کے SSN درخواست کے حوالے سے مزید کچھ مدد چاہیے؟",
        more: "مزید",
        yes: "ہاں",
        no: "نہیں",
        complete: "میرے پاس تمام دستاویزات ہیں",
        incomplete: "میرے پاس دستاویزات نہیں ہیں",
        type: "اپنا پیغام لکھیں...",
        irsITIN: "IRS اور ITIN کے بارے میں مزید جانیں۔",
        nycITIN: "ITIN کے بارے میں مزید جانیں۔",
        TIN: "مختلف ٹیکس دہندہ شناختی نمبروں کے بارے میں جانیں۔",
        learnLL30: "نیویارک سٹی کے لوکل قانون 30 کے بارے میں مزید جانیں۔",
        startOver: "دوبارہ شروع کریں",
        whatIsNYCLocalLaw30: "نیویارک سٹی لوکل قانون 30 کیا ہے؟",
        whatIsAnITIN: "ITIN نمبر کیا ہے؟",
        howToApplyForSSN: "SSN کے لیے درخواست کیسے دی جائے",
        documentsRequired: "درکار دستاویزات",
        closestOfficeLocation: "قریب ترین دفتر کا مقام",
        noValidVisa:
          "معذرت، براہ کرم ویزا کے لیے درخواست دینے کے لیے نیچے USCIS ویب سائٹ پر جائیں۔",
        applyForImmigrantVisa: "امیگریشن ویزا کے لیے درخواست دیں۔",
        applyForNonImmigrantVisa: "غیر امیگریشن ویزا کے لیے درخواست دیں۔",
        holdButton: "بات کرنے کے لیے دبائیں، بھیجنے کے لیے چھوڑیں۔",
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
        nearestOffice:
          "Narito ang impormasyon sa pinakamalapit na opisina ng SSA: ",
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
        noValidVisa:
          "Paumanhin, mangyaring mag-apply para sa isang visa sa pamamagitan ng pagbisita sa website ng USCIS sa ibaba.",
        applyForImmigrantVisa: "Mag-apply para sa immigrant visa.",
        applyForNonImmigrantVisa: "Mag-apply para sa non-immigrant visa.",
        holdButton: "Pindutin upang magsalita, bitawan upang ipadala.",
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
