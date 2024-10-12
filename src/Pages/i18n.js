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
          "Hi there! 👋 I'm Pat.io, your personal AI assistant, here to help with everything related to Social Security Numbers (SSN), Individual Taxpayer Identification Numbers (ITIN), and New York City's Local Law 30. How can I assist you today? Do you have any questions about SSNs, ITINs, or your rights to language access under Local Law 30?",
        error: "Network response was not ok",
        sorry: "Sorry, there was an error processing your request.",
        SSN: "How to apply for SSN?",
        LL30: "What is NYC Local Law 30?",
        ITIN: "What is an ITIN?",
        other: "Other questions",
        optionSelected: "You selected: ",
        ssnSelected:
          "Of course! I have all the information about getting an SSN, but first, do you have a valid visa?",
        LL30Selected:
          "Of course! I have all the information about NYC's Local Law 30, do you want to learn more about it?",
        infoLL30: `Your answer to knowing more about NYC's Local Law 30 is `,
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
          "No problem. Which documents are you missing? I can provide more information on how to obtain them.",
        nearestOffice: "Can I have your zip code please",
        anymoreHelp:
          "Alright. Is there anything else I can help you with regarding your SSN application?",
        more: "More",
        yes: "Yes",
        no: "No",
        complete: "I have all the documents",
        incomplete: "I am missing documents",
        type: "Type your message...",
      },
    },
    ru: {
      translation: {
        select: "Выберите язык",
        chat: "Чат с Pat.io",
        welcome:
          "Добро пожаловать в Pat.io\nЕсть вопросы о SSN? Местном законе 30 города Нью-Йорка? Номере ITIN?",
        error: "Ответ сети был неудовлетворительным",
        sorry: "Извините, произошла ошибка при обработке вашего запроса.",
        SSN: "Как подать заявку на SSN",
        LL30: "Что такое местный закон 30 города Нью-Йорка?",
        ITIN: "Что такое номер ITIN?",
        other: "Другие вопросы",
        optionSelected: "Вы выбрали: ",
        ssnSelected:
          "Конечно! У меня есть вся информация о получении SSN, но сначала, у вас есть действующая виза?",
        LL30Selected:
          "Конечно! У меня есть вся информация о местном законе 30 города Нью-Йорка. Хотите узнать больше?",
        infoLL30: `Ваш ответ на вопрос о местном законе 30 города Нью-Йорка: `,
        validVisa: `Ваш ответ на вопрос о наличии действующей визы: `,
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
        nearestOffice: "Вот информация о ближайшем офисе SSA: ",
        anymoreHelp:
          "Хорошо. Могу ли я ещё чем-то помочь по вашему заявлению на SSN?",
        more: "Больше",
        yes: "Да",
        no: "Нет",
        complete: "У меня есть все документы",
        incomplete: "У меня не хватает документов",
        type: "Введите сообщение...",
      },
    },
    it: {
      translation: {
        select: "Seleziona una lingua",
        chat: "Chat con Pat.io",
        welcome:
          "Benvenuto su Pat.io\nHai domande su SSN? La Legge Locale 30 di NYC? Numero ITIN?",
        error: "La risposta della rete non è stata corretta",
        sorry:
          "Spiacenti, si è verificato un errore durante l'elaborazione della tua richiesta.",
        SSN: "Come richiedere il SSN",
        LL30: "Cos'è la Legge Locale 30 di NYC?",
        ITIN: "Cos'è un numero ITIN?",
        other: "Altre domande",
        optionSelected: "Hai selezionato: ",
        ssnSelected:
          "Certo! Ho tutte le informazioni su come ottenere un SSN, ma prima, hai un visto valido?",
        LL30Selected:
          "Certo! Ho tutte le informazioni sulla Legge Locale 30 di NYC, vuoi saperne di più?",
        infoLL30: `La tua risposta su sapere di più sulla Legge Locale 30 di NYC è `,
        validVisa: `La tua risposta su avere un visto valido è `,
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
        nearestOffice: "Ecco le informazioni sull'ufficio SSA più vicino: ",
        anymoreHelp:
          "Va bene. C'è qualcos'altro con cui posso aiutarti riguardo la tua domanda per il SSN?",
        more: "Altro",
        yes: "Sì",
        no: "No",
        complete: "Ho tutti i documenti",
        incomplete: "Mi mancano dei documenti",
        type: "Scrivi il tuo messaggio...",
      },
    },
    pl: {
      translation: {
        select: "Wybierz język",
        chat: "Czat z Pat.io",
        welcome:
          "Witamy w Pat.io\nMasz pytania dotyczące SSN? Lokalnego Prawa 30 NYC? Numeru ITIN?",
        error: "Odpowiedź sieci nie była prawidłowa",
        sorry:
          "Przepraszamy, wystąpił błąd podczas przetwarzania Twojego żądania.",
        SSN: "Jak ubiegać się o SSN",
        LL30: "Czym jest Lokalne Prawo 30 NYC?",
        ITIN: "Czym jest numer ITIN?",
        other: "Inne pytania",
        optionSelected: "Wybrałeś: ",
        ssnSelected:
          "Oczywiście! Mam wszystkie informacje na temat uzyskania SSN, ale najpierw, czy masz ważną wizę?",
        LL30Selected:
          "Oczywiście! Mam wszystkie informacje na temat Lokalnego Prawa 30 NYC, chcesz dowiedzieć się więcej?",
        infoLL30: `Twoja odpowiedź dotycząca chęci dowiedzenia się więcej o Lokalnym Prawie 30 NYC to `,
        validVisa: `Twoja odpowiedź dotycząca posiadania ważnej wizy to `,
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
        nearestOffice: "Oto informacje o najbliższym biurze SSA: ",
        anymoreHelp:
          "W porządku. Czy mogę pomóc w czymś jeszcze w sprawie Twojego wniosku o SSN?",
        more: "Więcej",
        yes: "Tak",
        no: "Nie",
        complete: "Mam wszystkie dokumenty",
        incomplete: "Brakuje mi dokumentów",
        type: "Wpisz swoją wiadomość...",
      },
    },
    el: {
      translation: {
        select: "Επιλέξτε μια γλώσσα",
        chat: "Συνομιλία με το Pat.io",
        welcome:
          "Καλώς ήρθατε στο Pat.io\nΈχετε ερωτήσεις σχετικά με το SSN; Τον Τοπικό Νόμο 30 της Νέας Υόρκης; Τον αριθμό ITIN;",
        error: "Η απάντηση του δικτύου δεν ήταν εντάξει",
        sorry:
          "Συγγνώμη, υπήρξε ένα σφάλμα κατά την επεξεργασία του αιτήματός σας.",
        SSN: "Πώς να κάνετε αίτηση για SSN",
        LL30: "Τι είναι ο Τοπικός Νόμος 30 της Νέας Υόρκης;",
        ITIN: "Τι είναι ο αριθμός ITIN;",
        other: "Άλλες ερωτήσεις",
        optionSelected: "Επιλέξατε: ",
        ssnSelected:
          "Φυσικά! Έχω όλες τις πληροφορίες για την απόκτηση SSN, αλλά πρώτα, έχετε έγκυρη βίζα;",
        LL30Selected:
          "Φυσικά! Έχω όλες τις πληροφορίες σχετικά με τον Τοπικό Νόμο 30 της Νέας Υόρκης, θέλετε να μάθετε περισσότερα;",
        infoLL30: `Η απάντησή σας για την επιθυμία να μάθετε περισσότερα σχετικά με τον Τοπικό Νόμο 30 της Νέας Υόρκης είναι `,
        validVisa: `Η απάντησή σας για την κατοχή έγκυρης βίζας είναι `,
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
        nearestOffice:
          "Εδώ είναι οι πληροφορίες για το πιο κοντινό γραφείο SSA: ",
        anymoreHelp:
          "Εντάξει. Υπάρχει κάτι άλλο που μπορώ να σας βοηθήσω σχετικά με την αίτησή σας για SSN;",
        more: "Περισσότερα",
        yes: "Ναι",
        no: "Όχι",
        complete: "Έχω όλα τα έγγραφα",
        incomplete: "Μου λείπουν έγγραφα",
        type: "Γράψτε το μήνυμά σας...",
      },
    },
    yi: {
      translation: {
        select: "אויך אויף א שפּראַך",
        chat: "צאַט מיט פּאַט.אָיי",
        welcome:
          "ברוכים הבאים צו Pat.io\nהאָט איר קיין פֿראגן וועגן SSN? NYC'ס לאָקאַל געזעץ 30? ITIN נומער?",
        error: "נעץ ענטפֿער איז נישט געווען גוט",
        sorry: "אנטשולדיגט, עס איז געווען אַ טעות אין פּראָצעסירן אייער בקשה.",
        SSN: "ווי אַזוי צו אַפּלייען פֿאַר SSN",
        LL30: "וואָס איז NYC לאָקאַל געזעץ 30?",
        ITIN: "וואָס איז אַן ITIN נומער?",
        other: "אנדערע פֿראגן",
        optionSelected: "איר האָט אויסגעקליבן: ",
        ssnSelected:
          "נאַטירלעך! איך האָב אַלע די אינפֿאָרמאַציע וועגן ווי צו באַקומען אַן SSN, אָבער קודם, צי איר האָט אַ גילטיק וויזע?",
        LL30Selected:
          "נאַטירלעך! איך האָב אַלע די אינפֿאָרמאַציע וועגן NYC'ס לאָקאַל געזעץ 30, צי איר ווילן וויסן מער?",
        infoLL30: `אייער ענטפער וועגן וויסן מער וועגן NYC'ס לאָקאַל געזעץ 30 איז `,
        validVisa: `אייער ענטפער וועגן האָבן אַ גילטיק וויזע איז `,
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
        nearestOffice:
          "דאָ זענען די אינפֿאָרמאַציע וועגן דעם נאָענטסטן SSA אָפיס: ",
        anymoreHelp:
          "אייד עס איז עפעס אנדערש וואָס איך קען אייך העלפֿן מיט וועגן אייער SSN אַפּליקאַציע?",
        more: "מער",
        yes: "יאָ",
        no: "ניין",
        complete: "איך האָב אַלע די דאָקומענטן",
        incomplete: "מיר פעלן דאָקומענטן",
        type: "כתבו את ההודעה שלך...",
      },
    },
    he: {
      translation: {
        select: "בחר שפה",
        chat: "צ'אט עם Pat.io",
        welcome:
          "ברוכים הבאים ל-Pat.io\nיש לך שאלות לגבי SSN? חוק מקומי 30 של ניו יורק? מספר ITIN?",
        error: "תגובת הרשת לא הייתה תקינה",
        sorry: "מצטערים, אירעה שגיאה בעיבוד הבקשה שלך.",
        SSN: "כיצד להגיש בקשה ל-SSN",
        LL30: "מהו חוק מקומי 30 של ניו יורק?",
        ITIN: "מהו מספר ITIN?",
        other: "שאלות אחרות",
        optionSelected: "בחרת: ",
        ssnSelected:
          "כמובן! יש לי את כל המידע על איך להגיש בקשה ל-SSN, אבל קודם, האם יש לך ויזה בתוקף?",
        LL30Selected:
          "כמובן! יש לי את כל המידע על חוק מקומי 30 של ניו יורק, האם תרצה ללמוד עוד?",
        infoLL30: `התשובה שלך לגבי למידה נוספת על חוק מקומי 30 של ניו יורק היא `,
        validVisa: `התשובה שלך לגבי האם יש לך ויזה בתוקף היא `,
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
        nearestOffice: "הנה מידע על המשרד הקרוב ביותר של SSA: ",
        anymoreHelp:
          "בסדר. האם יש משהו נוסף שאני יכול לעזור לך בו בנוגע לבקשת ה-SSN שלך?",
        more: "עוד",
        yes: "כן",
        no: "לא",
        complete: "יש לי את כל המסמכים",
        incomplete: "חסרים לי מסמכים",
        type: "כתבו את ההודעה שלך...",
      },
    },
    ht: {
      translation: {
        select: "Chwazi yon lang",
        chat: "Chat ak Pat.io",
        welcome:
          "Byenveni nan Pat.io\nÈske ou gen kesyon sou SSN? Lwa Lokal 30 NYC? Nimewo ITIN?",
        error: "Repons rezo a pa t bon",
        sorry: "Padon, te gen yon erè nan trete demann ou an.",
        SSN: "Kijan pou aplike pou SSN",
        LL30: "Kisa ki Lwa Lokal 30 NYC?",
        ITIN: "Kisa ki yon nimewo ITIN?",
        other: "Lòt kesyon",
        optionSelected: "Ou te chwazi: ",
        ssnSelected:
          "Natirèlman! Mwen gen tout enfòmasyon sou kijan pou w jwenn yon SSN, men anvan, èske w gen yon viza ki valab?",
        LL30Selected:
          "Natirèlman! Mwen gen tout enfòmasyon sou Lwa Lokal 30 NYC, èske w vle aprann plis?",
        infoLL30: `Repons ou sou konnen plis sou Lwa Lokal 30 NYC se `,
        validVisa: `Repons ou sou si ou gen yon viza ki valab se `,
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
      },
    },
    fr: {
      translation: {
        select: "Choisissez une langue",
        chat: "Chat avec Pat.io",
        welcome:
          "Bienvenue sur Pat.io\nAvez-vous des questions sur le SSN ? La Loi Locale 30 de NYC ? Le numéro ITIN ?",
        error: "La réponse du réseau n'était pas correcte",
        sorry:
          "Désolé, une erreur s'est produite lors du traitement de votre demande.",
        SSN: "Comment demander un SSN",
        LL30: "Qu'est-ce que la Loi Locale 30 de NYC ?",
        ITIN: "Qu'est-ce qu'un numéro ITIN ?",
        other: "Autres questions",
        optionSelected: "Vous avez sélectionné : ",
        ssnSelected:
          "Bien sûr ! J'ai toutes les informations sur comment obtenir un SSN, mais d'abord, avez-vous un visa valide ?",
        LL30Selected:
          "Bien sûr ! J'ai toutes les informations concernant la Loi Locale 30 de NYC, voulez-vous en savoir plus ?",
        infoLL30: `Votre réponse concernant la Loi Locale 30 de NYC est `,
        validVisa: `Votre réponse concernant la possession d'un visa valide est `,
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
      },
    },
    es: {
      translation: {
        select: "Elige un idioma",
        chat: "Chat con Pat.io",
        welcome:
          "Bienvenido a Pat.io\n¿Tienes preguntas sobre el SSN? ¿La Ley Local 30 de NYC? ¿Número ITIN?",
        error: "La respuesta de la red no fue correcta",
        sorry: "Lo sentimos, hubo un error al procesar tu solicitud.",
        SSN: "Cómo solicitar el SSN",
        LL30: "¿Qué es la Ley Local 30 de NYC?",
        ITIN: "¿Qué es un número ITIN?",
        other: "Otras preguntas",
        optionSelected: "Has seleccionado: ",
        ssnSelected:
          "¡Por supuesto! Tengo toda la información sobre cómo obtener un SSN, pero primero, ¿tienes una visa válida?",
        LL30Selected:
          "¡Por supuesto! Tengo toda la información sobre la Ley Local 30 de NYC, ¿quieres saber más?",
        infoLL30: `Tu respuesta sobre saber más acerca de la Ley Local 30 de NYC es `,
        validVisa: `Tu respuesta sobre si tienes una visa válida es `,
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
      },
    },
    pt: {
      translation: {
        select: "Escolha um idioma",
        chat: "Chat com Pat.io",
        welcome:
          "Bem-vindo ao Pat.io\nTem alguma dúvida sobre SSN? Lei Local 30 de NYC? Número ITIN?",
        error: "A resposta da rede não foi ok",
        sorry: "Desculpe, ocorreu um erro ao processar sua solicitação.",
        SSN: "Como solicitar o SSN",
        LL30: "O que é a Lei Local 30 de NYC?",
        ITIN: "O que é um número ITIN?",
        other: "Outras perguntas",
        optionSelected: "Você selecionou: ",
        ssnSelected:
          "Claro! Eu tenho todas as informações sobre como obter um SSN, mas primeiro, você tem um visto válido?",
        LL30Selected:
          "Claro! Eu tenho todas as informações sobre a Lei Local 30 de NYC, quer saber mais?",
        infoLL30: `Sua resposta sobre saber mais sobre a Lei Local 30 de NYC é `,
        validVisa: `Sua resposta sobre ter um visto válido é `,
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
      },
    },
    zh: {
      translation: {
        select: "选择一种语言",
        chat: "与 Pat.io 聊天",
        welcome:
          "欢迎使用 Pat.io\n您有关于社会安全号码（SSN）的问题吗？纽约市第30号地方法律？个人纳税识别号（ITIN）？",
        error: "网络响应不正常",
        sorry: "抱歉，处理您的请求时出现错误。",
        SSN: "如何申请社会安全号码",
        LL30: "什么是纽约市第30号地方法律？",
        ITIN: "什么是个人纳税识别号？",
        other: "其他问题",
        optionSelected: "您选择了：",
        ssnSelected:
          "当然！我有关于如何申请社会安全号码的所有信息，但首先，您有有效签证吗？",
        LL30Selected:
          "当然！我有关于纽约市第30号地方法律的所有信息，您想了解更多吗？",
        infoLL30: `您关于了解更多纽约市第30号地方法律的回答是 `,
        validVisa: `您关于是否持有有效签证的回答是 `,
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
      },
    },
    yue: {
      translation: {
        select: "選擇一種語言",
        chat: "與 Pat.io 聊天",
        welcome:
          "歡迎使用 Pat.io\n你有關於社會安全號碼（SSN）嘅問題嗎？紐約市第30號本地法律？個人納稅識別號碼（ITIN）？",
        error: "網絡響應唔正常",
        sorry: "對唔住，處理你嘅請求時出現錯誤。",
        SSN: "點樣申請社會安全號碼",
        LL30: "咩係紐約市第30號本地法律？",
        ITIN: "咩係個人納稅識別號碼？",
        other: "其他問題",
        optionSelected: "你揀咗：",
        ssnSelected:
          "當然啦！我有關於點樣申請社會安全號碼嘅所有資訊，但首先，你有有效簽證嗎？",
        LL30Selected:
          "當然啦！我有關於紐約市第30號本地法律嘅所有資訊，你想知多啲嗎？",
        infoLL30: `你關於了解多啲紐約市第30號本地法律嘅回應係 `,
        validVisa: `你關於有冇有效簽證嘅回應係 `,
        visaType: "你嘅簽證類型係咩？請揀下面嘅其中一個選項。",
        eligible:
          "好！你有資格申請社會安全號碼，你可以揀下面嘅建議嚟攞更多資訊。",
        send: "發送",
        office: "最近嘅辦公室位置",
        documents: "所需文件",
        allRequired: "你有冇齊所有所需文件？",
        ssaOffice:
          "好！你準備好申請你嘅社會安全號碼啦。你想知最近嘅社會安全辦公室資料嗎？",
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
      },
    },
    hi: {
      translation: {
        select: "एक भाषा चुनें",
        chat: "Pat.io के साथ चैट करें",
        welcome:
          "Pat.io में आपका स्वागत है\nक्या आपके पास SSN के बारे में कोई प्रश्न हैं? NYC का स्थानीय कानून 30? ITIN नंबर?",
        error: "नेटवर्क प्रतिक्रिया ठीक नहीं थी",
        sorry: "क्षमा करें, आपके अनुरोध को संसाधित करने में एक त्रुटि हुई।",
        SSN: "SSN के लिए आवेदन कैसे करें",
        LL30: "NYC का स्थानीय कानून 30 क्या है?",
        ITIN: "ITIN नंबर क्या है?",
        other: "अन्य प्रश्न",
        optionSelected: "आपने चुना: ",
        ssnSelected:
          "बिलकुल! मेरे पास SSN प्राप्त करने के बारे में सारी जानकारी है, लेकिन पहले, क्या आपके पास वैध वीजा है?",
        LL30Selected:
          "बिलकुल! मेरे पास NYC के स्थानीय कानून 30 के बारे में सारी जानकारी है, क्या आप इसके बारे में और जानना चाहते हैं?",
        infoLL30: `NYC के स्थानीय कानून 30 के बारे में जानने की आपकी प्रतिक्रिया है `,
        validVisa: `वैध वीजा होने पर आपकी प्रतिक्रिया है `,
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
      },
    },
    bn: {
      translation: {
        select: "একটি ভাষা বাছাই করুন",
        chat: "Pat.io এর সাথে চ্যাট করুন",
        welcome:
          "Pat.io তে স্বাগতম\nSSN সম্পর্কে আপনার কোন প্রশ্ন আছে? NYC-এর লোকাল ল 30? ITIN নম্বর?",
        error: "নেটওয়ার্ক প্রতিক্রিয়া ঠিক ছিল না",
        sorry: "দুঃখিত, আপনার অনুরোধ প্রক্রিয়াকরণে একটি ত্রুটি ঘটেছে।",
        SSN: "SSN এর জন্য কীভাবে আবেদন করবেন",
        LL30: "NYC-এর লোকাল ল 30 কী?",
        ITIN: "ITIN নম্বর কী?",
        other: "অন্যান্য প্রশ্ন",
        optionSelected: "আপনি নির্বাচন করেছেন: ",
        ssnSelected:
          "অবশ্যই! আমার কাছে SSN পাওয়ার সমস্ত তথ্য রয়েছে, কিন্তু প্রথমে, আপনার কি বৈধ ভিসা আছে?",
        LL30Selected:
          "অবশ্যই! NYC-এর লোকাল ল 30 সম্পর্কে আমার সমস্ত তথ্য আছে, আপনি আরও জানতে চান?",
        infoLL30: `NYC-এর লোকাল ল 30 সম্পর্কে আরও জানার জন্য আপনার উত্তর হলো `,
        validVisa: `বৈধ ভিসা থাকার বিষয়ে আপনার উত্তর হলো `,
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
      },
    },
    te: {
      translation: {
        select: "భాషను ఎంచుకోండి",
        chat: "Pat.io తో చాట్ చేయండి",
        welcome:
          "Pat.io కి స్వాగతం\nSSN గురించి మీకు ఏవైనా ప్రశ్నలు ఉన్నాయా? NYC యొక్క లోకల్ లా 30? ITIN నంబర్?",
        error: "నెట్‌వర్క్ ప్రతిస్పందన సరిగా లేదు",
        sorry: "క్షమించండి, మీ అభ్యర్థనను ప్రాసెస్ చేయడంలో లోపం జరిగింది.",
        SSN: "SSN కోసం ఎలా దరఖాస్తు చేసుకోవాలి",
        LL30: "NYC యొక్క లోకల్ లా 30 ఏమిటి?",
        ITIN: "ITIN సంఖ్య అంటే ఏమిటి?",
        other: "ఇతర ప్రశ్నలు",
        optionSelected: "మీరు ఎంచుకున్నది: ",
        ssnSelected:
          "తప్పకుండా! SSN పొందడంపై నాకు అన్ని వివరాలు తెలుసు, కానీ ముందుగా, మీకు చెల్లుబాటు అయ్యే వీసా ఉందా?",
        LL30Selected:
          "తప్పకుండా! NYC యొక్క లోకల్ లా 30 గురించి నాకు అన్ని వివరాలు ఉన్నాయి, మీరు మరింత తెలుసుకోవాలనుకుంటున్నారా?",
        infoLL30: `NYC యొక్క లోకల్ లా 30 గురించి తెలుసుకోవాలని మీరు ఇచ్చిన సమాధానం `,
        validVisa: `మీకు చెల్లుబాటు అయ్యే వీసా ఉందని మీరు ఇచ్చిన సమాధానం `,
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
      },
    },
    pa: {
      translation: {
        select: "ਇੱਕ ਭਾਸ਼ਾ ਚੁਣੋ",
        chat: "Pat.io ਨਾਲ ਗੱਲਬਾਤ ਕਰੋ",
        welcome:
          "Pat.io ਵਿੱਚ ਜੀ ਆਇਆਂ ਨੂੰ\nਕੀ ਤੁਹਾਡੇ ਕੋਲ SSN ਬਾਰੇ ਕੋਈ ਸਵਾਲ ਹਨ? NYC ਦਾ ਲੋਕਲ ਲਾਅ 30? ITIN ਨੰਬਰ?",
        error: "ਨੈੱਟਵਰਕ ਪ੍ਰਤਿਕ੍ਰਿਆ ਠੀਕ ਨਹੀਂ ਸੀ",
        sorry: "ਮਾਫ ਕਰਨਾ, ਤੁਹਾਡੀ ਬੇਨਤੀ ਦੀ ਪ੍ਰਕਿਰਿਆ ਵਿੱਚ ਇੱਕ ਤਰੁੱਟੀ ਆਈ ਹੈ।",
        SSN: "SSN ਲਈ ਕਿਵੇਂ ਅਰਜ਼ੀ ਦੇਣੀ ਹੈ",
        LL30: "NYC ਦਾ ਲੋਕਲ ਲਾਅ 30 ਕੀ ਹੈ?",
        ITIN: "ITIN ਨੰਬਰ ਕੀ ਹੈ?",
        other: "ਹੋਰ ਸਵਾਲ",
        optionSelected: "ਤੁਸੀਂ ਚੁਣਿਆ ਹੈ: ",
        ssnSelected:
          "ਬਿਲਕੁਲ! ਮੈਨੂੰ SSN ਪ੍ਰਾਪਤ ਕਰਨ ਬਾਰੇ ਸਾਰਾ ਜਾਣਕਾਰੀ ਹੈ, ਪਰ ਪਹਿਲਾਂ, ਕੀ ਤੁਹਾਡੇ ਕੋਲ ਸਹੀ ਵੀਜ਼ਾ ਹੈ?",
        LL30Selected:
          "ਬਿਲਕੁਲ! ਮੈਨੂੰ NYC ਦੇ ਲੋਕਲ ਲਾਅ 30 ਬਾਰੇ ਸਾਰੀ ਜਾਣਕਾਰੀ ਹੈ, ਕੀ ਤੁਸੀਂ ਇਸ ਬਾਰੇ ਹੋਰ ਜਾਣਨਾ ਚਾਹੁੰਦੇ ਹੋ?",
        infoLL30: `ਤੁਸੀਂ NYC ਦੇ ਲੋਕਲ ਲਾਅ 30 ਬਾਰੇ ਹੋਰ ਜਾਣਨ ਲਈ ਦਿੱਤਾ ਗਿਆ ਜਵਾਬ `,
        validVisa: `ਤੁਸੀਂ ਸਹੀ ਵੀਜ਼ਾ ਹੋਣ ਬਾਰੇ ਦਿੱਤਾ ਗਿਆ ਜਵਾਬ `,
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
      },
    },
    ta: {
      translation: {
        select: "ஒரு மொழியை தேர்ந்தெடுக்கவும்",
        chat: "Pat.io உடன் அரட்டை அடிக்கவும்",
        welcome:
          "Pat.io க்கு வரவேற்கிறோம்\nSSN பற்றி உங்களுக்கு ஏதேனும் கேள்விகள் உள்ளதா? NYC இன் உள்ளூர் சட்டம் 30? ITIN எண்?",
        error: "நெட்வொர்க் பதில் சரியாக இல்லை",
        sorry:
          "மன்னிக்கவும், உங்கள் கோரிக்கையை செயலாக்குவதில் ஒரு பிழை ஏற்பட்டது.",
        SSN: "SSN க்கு எப்படி விண்ணப்பிக்கலாம்",
        LL30: "நியூயார்க் நகரத்தின் உள்ளூர் சட்டம் 30 என்பது என்ன?",
        ITIN: "ITIN எண் என்பது என்ன?",
        other: "மற்ற கேள்விகள்",
        optionSelected: "நீங்கள் தேர்வு செய்தது: ",
        ssnSelected:
          "மிகவும் சரி! SSN பெறுவது குறித்து எனக்கு அனைத்து தகவல்களும் உள்ளன, ஆனால் முதலில், உங்கள் அருகில் செல்லுபடியாகும் விசா உள்ளதா?",
        LL30Selected:
          "மிகவும் சரி! நியூயார்க் நகரத்தின் உள்ளூர் சட்டம் 30 குறித்து எனக்கு அனைத்து தகவல்களும் உள்ளன, மேலும் தெரிந்து கொள்ள விரும்புகிறீர்களா?",
        infoLL30: `நியூயார்க் நகரத்தின் உள்ளூர் சட்டம் 30 குறித்து நீங்கள் மேலும் தெரிந்து கொள்ள விரும்பிய பதில் `,
        validVisa: `செல்லுபடியாகும் விசா குறித்த உங்கள் பதில் `,
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
      },
    },
    ko: {
      translation: {
        select: "언어 선택",
        chat: "Pat.io와 채팅하기",
        welcome:
          "Pat.io에 오신 것을 환영합니다\nSSN에 대해 궁금한 점이 있으신가요? 뉴욕시 지방법 30? ITIN 번호?",
        error: "네트워크 응답이 올바르지 않습니다",
        sorry: "죄송합니다, 요청을 처리하는 중 오류가 발생했습니다.",
        SSN: "SSN 신청 방법",
        LL30: "뉴욕시 지방 법률 30이 무엇인가요?",
        ITIN: "ITIN 번호란 무엇인가요?",
        other: "기타 질문",
        optionSelected: "선택하신 항목: ",
        ssnSelected:
          "물론이죠! SSN을 받는 방법에 대한 모든 정보를 가지고 있습니다. 먼저, 유효한 비자가 있으신가요?",
        LL30Selected:
          "물론이죠! 뉴욕시 지방법 30에 대한 모든 정보를 가지고 있습니다. 더 알고 싶으신가요?",
        infoLL30: `뉴욕시 지방법 30에 대해 더 알고 싶으신지에 대한 답변은 `,
        validVisa: `유효한 비자가 있는지에 대한 답변은 `,
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
      },
    },
    ja: {
      translation: {
        select: "言語を選択してください",
        chat: "Pat.ioとチャットする",
        welcome:
          "Pat.ioへようこそ\nSSNについて質問がありますか？ ニューヨーク市地方法30？ ITIN番号？",
        error: "ネットワーク応答が正常ではありません",
        sorry: "申し訳ありませんが、リクエストの処理中にエラーが発生しました。",
        SSN: "SSNの申請方法",
        LL30: "ニューヨーク市のローカル法30とは何ですか？",
        ITIN: "ITIN番号とは何ですか？",
        other: "その他の質問",
        optionSelected: "あなたが選んだのは: ",
        ssnSelected:
          "もちろんです！ SSNを取得する方法についてすべての情報がありますが、まず、有効なビザをお持ちですか？",
        LL30Selected:
          "もちろんです！ ニューヨーク市のローカル法30についてすべての情報がありますが、もっと知りたいですか？",
        infoLL30: `ニューヨーク市のローカル法30についてもっと知りたいというあなたの答えは `,
        validVisa: `有効なビザをお持ちかどうかについての答えは `,
        visaType:
          "あなたのビザの種類は何ですか？ 以下のオプションから選んでください。",
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
      },
    },
    vi: {
      translation: {
        select: "Chọn một ngôn ngữ",
        chat: "Trò chuyện với Pat.io",
        welcome:
          "Chào mừng đến với Pat.io\nBạn có câu hỏi về SSN? Luật Địa phương 30 của NYC? Số ITIN?",
        error: "Phản hồi mạng không ổn định",
        sorry: "Xin lỗi, đã xảy ra lỗi trong quá trình xử lý yêu cầu của bạn.",
        SSN: "Cách đăng ký SSN",
        LL30: "Luật Địa phương 30 của NYC là gì?",
        ITIN: "Số ITIN là gì?",
        other: "Câu hỏi khác",
        optionSelected: "Bạn đã chọn: ",
        ssnSelected:
          "Tất nhiên rồi! Tôi có tất cả thông tin về cách nhận SSN, nhưng trước tiên, bạn có thị thực hợp lệ không?",
        LL30Selected:
          "Tất nhiên rồi! Tôi có tất cả thông tin về Luật Địa phương 30 của NYC, bạn có muốn biết thêm không?",
        infoLL30: `Câu trả lời của bạn về việc muốn biết thêm về Luật Địa phương 30 của NYC là `,
        validVisa: `Câu trả lời của bạn về việc có thị thực hợp lệ là `,
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
      },
    },
    ar: {
      translation: {
        select: "اختر لغة",
        chat: "الدردشة مع Pat.io",
        welcome:
          "مرحباً بكم في Pat.io\nهل لديك أي أسئلة حول رقم الضمان الاجتماعي (SSN)؟ قانون نيويورك المحلي رقم 30؟ رقم ITIN؟",
        error: "استجابة الشبكة لم تكن جيدة",
        sorry: "عذرًا، حدث خطأ أثناء معالجة طلبك.",
        SSN: "كيفية التقديم للحصول على SSN",
        LL30: "ما هو القانون المحلي رقم 30 لمدينة نيويورك؟",
        ITIN: "ما هو رقم ITIN؟",
        other: "أسئلة أخرى",
        optionSelected: "لقد اخترت: ",
        ssnSelected:
          "بالطبع! لدي جميع المعلومات حول كيفية الحصول على SSN، ولكن أولاً، هل لديك تأشيرة صالحة؟",
        LL30Selected:
          "بالطبع! لدي جميع المعلومات حول القانون المحلي رقم 30 لمدينة نيويورك، هل ترغب في معرفة المزيد؟",
        infoLL30: `إجابتك حول معرفة المزيد عن القانون المحلي رقم 30 لمدينة نيويورك هي `,
        validVisa: `إجابتك حول ما إذا كان لديك تأشيرة صالحة هي `,
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
      },
    },
    ur: {
      translation: {
        select: "ایک لغہ منتخب کریں۔",
        chat: "Pat.io سے بات کریں۔",
        welcome:
          "Pat.io میں خوش آمدید\nآپ کو سیکیورٹی نمبر (SSN)، نیویارک سٹی 30 لوکل قانون (LL30)، یا ITIN کے بارے میں کوئی سوال ہے؟",
        error: "نیٹ ورک کا جواب ٹھیک نہیں تھا۔",
        sorry: "معذرت، آپ کی درخواست پر عمل کرتے وقت کوئی غلطی ہوئی ہے۔",
        SSN: "SSN کے لیے درخواست کیسے دی جائے",
        LL30: "نیویارک سٹی لوکل قانون 30 کیا ہے؟",
        ITIN: "ITIN نمبر کیا ہے؟",
        other: "دیگر سوالات",
        optionSelected: "آپ نے منتخب کیا: ",
        ssnSelected:
          "بالکل! میرے پاس SSN حاصل کرنے کے بارے میں تمام معلومات ہیں، لیکن پہلے، کیا آپ کے پاس جائز ویزا ہے؟",
        LL30Selected:
          "بالکل! میرے پاس نیویارک سٹی کے لوکل قانون 30 کے بارے میں تمام معلومات ہیں، کیا آپ اس کے بارے میں مزید جاننا چاہتے ہیں؟",
        infoLL30: `نیویارک سٹی کے لوکل قانون 30 کے بارے میں مزید جاننے کا آپ کا جواب ہے `,
        validVisa: `آپ کا ویزا کے جائز ہونے کا جواب ہے `,
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
        nearestOffice: "براہ کرم اپنا زپ کوڈ دیں",
        anymoreHelp:
          "ٹھیک ہے۔ کیا آپ کے SSN درخواست کے حوالے سے مزید کچھ مدد چاہیے؟",
        more: "مزید",
        yes: "ہاں",
        no: "نہیں",
        complete: "میرے پاس تمام دستاویزات ہیں",
        incomplete: "میرے پاس دستاویزات نہیں ہیں",
        type: "اپنا پیغام لکھیں...",
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
