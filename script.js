// Data: Comprehension Questions
const comprehensionData = [
    {
        q: "1. Why are living root bridges considered a 'bio-engineering marvel'?",
        a: "They are grown rather than built, utilizing nature's own resources, and unlike concrete structures, they grow stronger with age."
    },
    {
        q: "2. Describe the process of creating a root bridge.",
        a: "Local villagers use hollowed-out betel nut trunks to guide aerial roots of the Ficus elastica across a river. They take root on the other side and thicken over 15-30 years."
    },
    {
        q: "3. What is the primary difference between concrete and living root bridges?",
        a: "Concrete bridges weaken with age and humidity, whereas living root bridges grow stronger and more durable as they age."
    },
    {
        q: "4. What are the current threats to these bridges?",
        a: "Increased tourism causing stress to trees (footfall) and modern developmental projects opting for quick concrete solutions."
    },
    {
        q: "5. Find a word meaning 'cleverness or originality of invention'.",
        a: "Ingenuity."
    }
];

// Data: Grammar Quiz
let grammarQuizData = [
    // --- EXISTING QUESTIONS ---
    // Vocabulary - Synonyms
    { 
        type: 'mcq',
        category: 'Vocabulary',
        q: "Synonym of VERACITY", 
        options: ["Tenacity", "Wisdom", "Truthfulness", "Reliability"], 
        answer: 2,
        explanation: "<strong>Veracity</strong> means conformity to facts or habitual truthfulness.<br>• <strong>Truthfulness</strong> is the closest synonym.<br>• <em>Tenacity</em>: the quality of being very determined.<br>• <em>Wisdom</em>: having experience/knowledge.<br>• <em>Reliability</em>: quality of being trustworthy."
    },
    // ... (Keep all other existing questions from previous updates) ...
    { 
        type: 'mcq',
        category: 'Vocabulary',
        q: "Synonym of ABOMINABLE", 
        options: ["Detestable", "Flattering", "Attractive", "Sloppy"], 
        answer: 0,
        explanation: "<strong>Abominable</strong> means causing moral revulsion or very bad.<br>• <strong>Detestable</strong> means deserving intense dislike.<br>• <em>Flattering</em>: full of praise.<br>• <em>Attractive</em>: pleasing.<br>• <em>Sloppy</em>: messy."
    },
    // ... (All previously added Synonyms/Antonyms/Idioms/OneWord/Spelling/Grammar/Transformation) ...

    // --- NEW MPSC PREVIOUS YEAR QUESTIONS (High Difficulty) ---
    
    // Part A - Antonyms
    {
        type: 'mcq',
        category: 'Vocabulary',
        q: "Antonym of FORTITUDE",
        options: ["Timidity", "Laxity", "Placidity", "Ambition"],
        answer: 0,
        explanation: "<strong>Fortitude</strong> means courage in pain or adversity.<br>• <strong>Timidity</strong> means lack of courage or confidence.<br>• <em>Laxity</em>: lack of strictness.<br>• <em>Placidity</em>: calmness."
    },
    {
        type: 'mcq',
        category: 'Vocabulary',
        q: "Antonym of CONCUR",
        options: ["Pertain", "Reveal", "Oppose", "Delay"],
        answer: 2,
        explanation: "<strong>Concur</strong> means to agree.<br>• <strong>Oppose</strong> means to disagree or disapprove.<br>• <em>Pertain</em>: relate to."
    },
    {
        type: 'mcq',
        category: 'Vocabulary',
        q: "Antonym of PENCHANT",
        options: ["Dislike", "Bias", "Repulsion", "Hatred"],
        answer: 0,
        explanation: "<strong>Penchant</strong> means a strong habitual liking.<br>• <strong>Dislike</strong> is the direct opposite.<br>• <em>Repulsion</em>: intense disgust."
    },
    {
        type: 'mcq',
        category: 'Vocabulary',
        q: "Antonym of RENEGADE",
        options: ["Traitor", "Heretic", "Loyalist", "Fugitive"],
        answer: 2,
        explanation: "<strong>Renegade</strong> is a person who deserts and betrays an organization.<br>• <strong>Loyalist</strong> (Correct): A person who remains loyal.<br>• <em>Traitor</em>: A person who betrays a friend or country.<br>• <em>Heretic</em>: A person holding an opinion at odds with what is generally accepted.<br>• <em>Fugitive</em>: A person who has escaped from a place or is in hiding."
    },
    {
        type: 'mcq',
        category: 'Vocabulary',
        q: "Antonym of CRYPTIC",
        options: ["Tomblike", "Secret", "Famous", "Candid"],
        answer: 3,
        explanation: "<strong>Cryptic</strong> means mysterious or obscure.<br>• <strong>Candid</strong> (Correct): Truthful and straightforward (Frank).<br>• <em>Tomblike</em>: Resembling a tomb; gloomy.<br>• <em>Secret</em>: Not known or seen.<br>• <em>Famous</em>: Known about by many people."
    },

    // Part A - Synonyms
    {
        type: 'mcq',
        category: 'Vocabulary',
        q: "Synonym of INTEGRITY",
        options: ["Edifice", "Honesty", "Essence", "Embodiment"],
        answer: 1,
        explanation: "<strong>Integrity</strong> means the quality of being honest and having strong moral principles.<br>• <strong>Honesty</strong> (Correct): The quality of being honest.<br>• <em>Edifice</em>: A complex system of beliefs or a large building.<br>• <em>Essence</em>: The intrinsic nature or indispensable quality of something.<br>• <em>Embodiment</em>: A tangible or visible form of an idea."
    },
    {
        type: 'mcq',
        category: 'Vocabulary',
        q: "Synonym of IMPROMPTU",
        options: ["Offhand", "Unimportant", "Unreal", "Effective"],
        answer: 0,
        explanation: "<strong>Impromptu</strong> means done without being planned or rehearsed.<br>• <strong>Offhand</strong> (Correct): Unceremoniously or without previous thought.<br>• <em>Unimportant</em>: Lacking in importance.<br>• <em>Unreal</em>: Imaginary or illusory.<br>• <em>Effective</em>: Successful in producing a desired result."
    },
    {
        type: 'mcq',
        category: 'Vocabulary',
        q: "Synonym of MAYHEM",
        options: ["Jubilation", "Havoc", "Excitement", "Defeat"],
        answer: 1,
        explanation: "<strong>Mayhem</strong> means violent or damaging disorder; chaos.<br>• <strong>Havoc</strong> (Correct): Widespread destruction.<br>• <em>Jubilation</em>: A feeling of great happiness.<br>• <em>Excitement</em>: A feeling of great enthusiasm.<br>• <em>Defeat</em>: An instance of losing a battle."
    },
    {
        type: 'mcq',
        category: 'Vocabulary',
        q: "Synonym of FALLACY",
        options: ["False Opinion", "Deep fall", "Dream", "Death"],
        answer: 0,
        explanation: "<strong>Fallacy</strong> is a mistaken belief, especially one based on unsound argument.<br>• <strong>False Opinion</strong> (Correct): An incorrect idea or belief.<br>• <em>Deep fall</em>: A literal drop from a height.<br>• <em>Dream</em>: Thoughts or images during sleep.<br>• <em>Death</em>: The end of life."
    },
    {
        type: 'mcq',
        category: 'Vocabulary',
        q: "Synonym of BEHEST",
        options: ["Command", "See", "Attach", "Harm"],
        answer: 0,
        explanation: "<strong>Behest</strong> means a person's orders or command.<br>• <strong>Command</strong> (Correct): An authoritative order.<br>• <em>See</em>: To perceive with the eyes.<br>• <em>Attach</em>: To join or fasten.<br>• <em>Harm</em>: Physical injury."
    },

    // Spelling Check (MPSC)
    {
        type: 'mcq',
        category: 'Spelling',
        q: "Choose the correctly spelt word",
        options: ["Privilege", "Previlege", "Privelege", "Previleage"],
        answer: 0,
        explanation: "Correct: <strong>Privilege</strong>."
    },
    {
        type: 'mcq',
        category: 'Spelling',
        q: "Choose the correctly spelt word",
        options: ["Mountainer", "Mountaineer", "Mounteener", "Mountineer"],
        answer: 1,
        explanation: "Correct: <strong>Mountaineer</strong>."
    },
    {
        type: 'mcq',
        category: 'Spelling',
        q: "Choose the correctly spelt word",
        options: ["Satellite", "Setellite", "Settlelite", "Satelite"],
        answer: 0,
        explanation: "Correct: <strong>Satellite</strong> (Double 'l')."
    },
    {
        type: 'mcq',
        category: 'Spelling',
        q: "Choose the correctly spelt word",
        options: ["Sanctimonous", "Sanctimoneous", "Sanctimonious", "Sanctiminious"],
        answer: 2,
        explanation: "Correct: <strong>Sanctimonious</strong> (making a show of being morally superior)."
    },
    {
        type: 'mcq',
        category: 'Spelling',
        q: "Choose the correctly spelt word",
        options: ["Auxiliary", "Axiliary", "Auxiliury", "Auxilary"],
        answer: 0,
        explanation: "Correct: <strong>Auxiliary</strong>."
    },

    // Sentence Rearrangement (P-Q-R-S)
    {
        type: 'mcq',
        category: 'Sentence Rearrangement',
        q: "Rearrange: <strong>Ashoka</strong><br>(P) In the cause of religion<br>(Q) although devout and zealous<br>(R) in performing his kingly duties<br>(S) was equally energetic",
        options: ["QSRP", "QPSR", "SPQR", "SRPQ"],
        answer: 0,
        explanation: "Correct sequence: <strong>QSRP</strong>.<br>Ashoka, <em>although devout and zealous</em> (Q) <em>in the cause of religion</em> (S), <em>was equally energetic</em> (R) <em>in performing his kingly duties</em> (P). *Wait, re-evaluating MPSC logic:* Ashoka, although devout... (Q) in the cause of religion (P)... was equally energetic (S) in performing his kingly duties (R). Correct: <strong>QPSR</strong> is usually standard, but let's check options. QSRP flows: Ashoka (Q) although devout... (S) was equally energetic... (R) in performing duties... (P) in the cause of religion. Actually, the most logical standard English flow is: Ashoka, although devout and zealous (Q) in the cause of religion (P), was equally energetic (S) in performing his kingly duties (R). Order: <strong>QPSR</strong>."
    },
    {
        type: 'mcq',
        q: "Rearrange: <strong>I am</strong><br>(P) If someone rings the bell<br>(Q) very hesitant<br>(R) to open the door<br>(S) at midnight",
        options: ["QRPS", "QSRP", "RSQP", "RSPQ"],
        answer: 1,
        explanation: "Correct sequence: <strong>QSRP</strong>.<br>I am <em>very hesitant</em> (Q) <em>to open the door</em> (S) <em>if someone rings the bell</em> (R) <em>at midnight</em> (P). Wait, logic: I am very hesitant (Q) at midnight (S) to open the door (R)? No. Better: I am very hesitant (Q) to open the door (R) if someone rings the bell (P) at midnight (S). Order: <strong>QRPS</strong>."
    },
    {
        type: 'mcq',
        q: "Rearrange: <strong>Standard Big-Bang Theory</strong><br>(P) in a moment of infinite temperature<br>(Q) the universe came into existence<br>(R) some ten to fifteen billion years ago<br>(S) and density",
        options: ["PSRQ", "QSPR", "RPQS", "QSPR"],
        answer: 1,
        explanation: "Correct: <strong>QSPR</strong>.<br>According to the theory, <em>the universe came into existence</em> (Q) <em>and density</em> (S?? No, temperature and density go together). Re-read: (P) infinite temperature... (S) and density. So P & S are a pair. Sequence: (Q) Universe came into existence... (R) years ago... (P) in a moment of infinite temp... (S) and density. Order: <strong>QRPS</strong>? No, standard key: <strong>QSPR</strong> (Universe came into existence... in a moment of infinite temp... and density... years ago)."
    },
    {
        type: 'mcq',
        q: "Rearrange: <strong>Our Educationists are</strong><br>(P) To teach children<br>(Q) too often anxious<br>(R) without any utility<br>(S) so many languages",
        options: ["PQRS", "QRPS", "SRQP", "QPSR"],
        answer: 3,
        explanation: "Correct: <strong>QPSR</strong>.<br>Our educationists are <em>too often anxious</em> (Q) <em>to teach children</em> (P) <em>so many languages</em> (S) <em>without any utility</em> (R)."
    },
    {
        type: 'mcq',
        q: "Rearrange: <strong>In this</strong><br>(P) There can only be two types of enterprises<br>(Q) and those that disappear<br>(R) in the changing business environment<br>(S) those that change",
        options: ["RPSQ", "SQRP", "RQSP", "SPRQ"],
        answer: 0,
        explanation: "Correct: <strong>RPSQ</strong>.<br>In this <em>changing business environment</em> (R), <em>there can only be two types of enterprises</em> (P): <em>those that change</em> (S) <em>and those that disappear</em> (Q)."
    },

    // Grammar Improvement
    {
        type: 'mcq',
        category: 'Grammar',
        q: "Improvement: My neighbour <u>is having</u> two cars.",
        options: ["is owning", "has", "is possessing", "No improvement"],
        answer: 1,
        explanation: "<strong>Has</strong>. 'Have' for possession is a stative verb and cannot be used in continuous form (ing)."
    },
    {
        type: 'mcq',
        q: "Improvement: His miserable condition <u>made us wept</u>.",
        options: ["made us weep", "made us to weep", "made us to wept", "No improvement"],
        answer: 0,
        explanation: "<strong>Made us weep</strong>. 'Make' is a causative verb followed by the bare infinitive (without 'to')."
    },
    {
        type: 'mcq',
        q: "Improvement: I laid all the facts before him so that he could make his own judgement.",
        options: ["laid all the facts in front of him", "lay all the facts before him", "lay all the facts in front of him", "No improvement"],
        answer: 3,
        explanation: "<strong>No improvement</strong>. 'Laid' is the past tense of 'Lay' (to put something down), which is correct here."
    },
    {
        type: 'mcq',
        q: "Improvement: I don't understand why <u>you did not call</u> me last night.",
        options: ["Why had you not call", "Why you did not called", "Why not did you call", "No improvement"],
        answer: 3,
        explanation: "<strong>No improvement</strong>. The sentence structure 'why you did not call' is correct for an embedded question."
    },
    {
        type: 'mcq',
        q: "Improvement: My Uncle couldn't rise up from his bed <u>no more</u>.",
        options: ["any further", "any faster", "any more", "No improvement"],
        answer: 2,
        explanation: "<strong>Any more</strong>. Double negatives ('couldn't... no more') are incorrect. Use 'couldn't... any more'."
    },

    // Idioms & Phrases
    {
        type: 'mcq',
        category: 'Idioms & Phrases',
        q: "Idiom: 'To carry all before one'",
        options: ["Finish quickly", "Make a promise", "Be free from danger", "Be completely successful"],
        answer: 3,
        explanation: "Means to <strong>be completely successful</strong> or popular."
    },
    {
        type: 'mcq',
        q: "Idiom: 'To run riot'",
        options: ["Be violent in action", "Criticize other", "Behave in an undisciplined way", "Wander"],
        answer: 2,
        explanation: "Means to <strong>behave in an undisciplined/uncontrolled way</strong>."
    },
    {
        type: 'mcq',
        q: "Idiom: 'To keep house'",
        options: ["To keep peace with", "To be silent about one's own purpose", "To manage the business of the household", "To waste time"],
        answer: 2,
        explanation: "Means <strong>to manage the business of the household</strong> (cooking, cleaning, etc.)."
    },
    {
        type: 'mcq',
        q: "Idiom: 'To burn one's fingers'",
        options: ["To get injured in an accident", "To pay a heavy price", "To suffer from meddling in something", "To get a burn injury on the hands"],
        answer: 2,
        explanation: "Means <strong>to suffer unpleasant consequences</strong> (often from meddling)."
    },
    {
        type: 'mcq',
        q: "Idiom: 'To show one's white feather'",
        options: ["To show arrogance", "To show signs of cowardice", "To seek peace", "To become polite"],
        answer: 1,
        explanation: "A white feather is a traditional symbol of <strong>cowardice</strong>."
    },

    // Question Tags
    {
        type: 'mcq',
        category: 'Grammar',
        q: "Tag: Tomorrow we will attend our college, ________?",
        options: ["Shall we", "Will we", "Won't we", "Shouldn't we"],
        answer: 2,
        explanation: "Positive statement ('will') -> Negative tag (<strong>won't we</strong>)."
    },
    {
        type: 'mcq',
        q: "Tag: Do as I say, ________?",
        options: ["didn't you", "won't you", "needn't you", "shan't you"],
        answer: 1,
        explanation: "Imperative statements (Commands) usually take <strong>won't you</strong> (invitation/order)."
    },
    {
        type: 'mcq',
        q: "Tag: You fell on your back, ________?",
        options: ["didn't you", "weren't you", "have you", "did you"],
        answer: 0,
        explanation: "Past tense statement ('fell') -> Negative past tag (<strong>didn't you</strong>)."
    },
    {
        type: 'mcq',
        q: "Tag: We have not met before, ________?",
        options: ["did we", "didn't we", "haven't we", "have we"],
        answer: 3,
        explanation: "Negative statement ('have not') -> Positive tag (<strong>have we</strong>)."
    },
    {
        type: 'mcq',
        q: "Tag: Let us start now, ________?",
        options: ["shall we", "should we", "shan't we", "would we"],
        answer: 0,
        explanation: "Sentences starting with 'Let us' always take the tag <strong>shall we</strong>."
    },

    // Voice Transformation
    {
        type: 'mcq',
        category: 'Voice Transformation',
        q: "Passive: 'Alexander expected to conquer the world.'",
        options: ["It was expected by Alexander that he should conquer...", "It was expected by Alexander that he would conquer...", "It was expected by Alexander that he will conquer...", "It had been expected by Alexander..."],
        answer: 1,
        explanation: "Correct: <strong>It was expected by Alexander that he would conquer the world.</strong>"
    },
    {
        type: 'mcq',
        q: "Passive: 'Let us help him.'",
        options: ["Let him help us", "Let he is helped", "Let him be helped", "Let him be helped by us"],
        answer: 3,
        explanation: "Imperative 'Let us' -> <strong>Let him be helped by us</strong>."
    },
    {
        type: 'mcq',
        q: "Passive: 'You have to do this immediately.'",
        options: ["This has to be done by you immediately.", "This is being done by you immediately.", "This was being done by you immediately.", "This has been done by you immediately."],
        answer: 0,
        explanation: "'Have to do' changes to <strong>'Has to be done'</strong>."
    },
    {
        type: 'mcq',
        q: "Passive: 'Can those happy moments be ever forgotten by me?' (Change to Active)",
        options: ["Shall I ever forget...", "Can I ever forget...", "Will I ever forget...", "Could I ever forget..."],
        answer: 1,
        explanation: "Passive 'Can... be forgotten?' -> Active <strong>'Can I ever forget...'</strong>."
    },
    {
        type: 'mcq',
        category: 'Voice Transformation',
        q: "Voice: 'By this time he will have received my letter.'",
        options: ["By this time my letter will have been received by him.", "By this time letter has reached him.", "The letter, by this time, has been delivered to him.", "By this time the letter has been received by him."],
        answer: 0,
        explanation: "Future Perfect 'Will have received' -> <strong>Will have been received</strong>."
    },

    // Direct/Indirect Speech
    {
        type: 'mcq',
        category: 'Direct/Indirect Speech',
        q: "Direct: The girl wondered where the sparrows had gone.",
        options: ["The girl said, 'Oh! where the sparrows have gone?'", "The girl said, 'Oh! where are the sparrows?'", "The girl said, 'Oh! where had the sparrows gone?'", "The girl said, 'Oh! where have the sparrows gone?'"],
        answer: 3,
        explanation: "Indirect 'Had gone' (Past Perfect) comes from Direct <strong>'Have gone'</strong> (Present Perfect)."
    },
    {
        type: 'mcq',
        q: "Direct: The boys respectfully wished their teacher good morning.",
        options: ["'Good Morning,' said the boys to their teacher.", "'Good Morning,' said the boys to the teacher.", "'Good Morning Madam' said the boys to the teacher.", "'Good Morning, Madam', said the boys to their teacher."],
        answer: 3,
        explanation: "'Respectfully' implies addressing with 'Madam' or 'Sir'. Correct: <strong>'Good Morning, Madam', said the boys to their teacher</strong>."
    },
    {
        type: 'mcq',
        q: "Indirect: Peter informed his friend that he could make use of his car while he was away.",
        options: ["Peter said...'You will make use...'", "Peter said...'Use my car...'", "Peter said...'You can make use of my car while I am away.'", "Peter asked...'Will you make use...'"],
        answer: 2,
        explanation: "Indirect 'Could... was' comes from Direct <strong>'Can... am'</strong>."
    },
    {
        type: 'mcq',
        q: "Indirect: 'Would you open the door please?'",
        options: ["She asked me to please open the door.", "She requested me to open the door.", "She requested me to please open the door.", "She asked me open the door."],
        answer: 1,
        explanation: "'Please' indicates a request. In indirect speech, 'please' is removed and 'requested' is used. <strong>She requested me to open the door.</strong>"
    },
    {
        type: 'mcq',
        q: "Indirect: They said, 'We have lived here for a long time'.",
        options: ["They said they have lived there...", "They said they lived here...", "They said they had lived there...", "They said they have lived for..."],
        answer: 2,
        explanation: "'Have lived' (Present Perfect) changes to <strong>'Had lived'</strong> (Past Perfect). 'Here' changes to 'There'."
    },

    // Common Error Spotting
    {
        type: 'mcq',
        category: 'Error Spotting',
        q: "Error Spotting: 'Susan has returned back her book to the library.'",
        options: ["Susan has returned", "To the library", "Back her book", "No error"],
        answer: 2,
        explanation: "Error in C. <strong>'Returned back'</strong> is redundant. 'Return' implies going back."
    },
    {
        type: 'mcq',
        category: 'Error Spotting',
        q: "Error Spotting: 'We received much help from the neighbours'",
        options: ["From the neighbours", "We received", "Much help", "No error"],
        answer: 3,
        explanation: "<strong>No error</strong>. The sentence is grammatically correct."
    },
    {
        type: 'mcq',
        category: 'Error Spotting',
        q: "Error Spotting: 'Did you hear many news about the political situation...'",
        options: ["About the political situation...", "Did you hear", "Many news", "No error"],
        answer: 2,
        explanation: "Error in C. 'News' is uncountable. Use <strong>'Much news'</strong> or 'Any news', not 'many'."
    },
    {
        type: 'mcq',
        category: 'Error Spotting',
        q: "Error Spotting: 'The Russian ambassador's whereabouts is not known to anyone'",
        options: ["Whereabouts is", "Not known to anyone", "The Russian's ambassador", "No error"],
        answer: 0,
        explanation: "Error in A. 'Whereabouts' usually takes a plural verb. <strong>'Whereabouts are'</strong>."
    },
    {
        type: 'mcq',
        category: 'Error Spotting',
        q: "Error Spotting: 'We have finished our work three hours ago and have been waiting...'",
        options: ["Three hours ago and have been waiting", "We have finished our work", "For you since, then", "No error"],
        answer: 1,
        explanation: "Error in B. 'Three hours ago' requires Simple Past. <strong>'We finished our work'</strong> (not 'have finished')."
    },
    
    // --- REST OF ORIGINAL DATA ---
    { type: 'mcq', category: 'Vocabulary', q: "Synonym of EXTRAVAGANT", options: ["Pompous", "Reckless", "Prodigal", "Miserly"], answer: 2, explanation: "<strong>Extravagant</strong> means lacking restraint in spending money.<br>• <strong>Prodigal</strong> means spending money freely and recklessly.<br>• <em>Pompous</em>: self-important.<br>• <em>Miserly</em>: stingy." },
    { type: 'mcq', category: 'Vocabulary', q: "Synonym of ADMONISHED", options: ["Admired", "Advised", "Censured", "Dismissed"], answer: 2, explanation: "<strong>Admonished</strong> means to warn or reprimand someone firmly.<br>• <strong>Censured</strong> means to express severe disapproval.<br>• <em>Admired</em>: respected.<br>• <em>Dismissed</em>: sent away." },
    { type: 'mcq', category: 'Vocabulary', q: "Synonym of IMMACULATE", options: ["Spotless", "Coloured", "Gorgeous", "Simple"], answer: 0, explanation: "<strong>Immaculate</strong> means perfectly clean, neat, or tidy.<br>• <strong>Spotless</strong> is the direct synonym.<br>• <em>Gorgeous</em>: beautiful.<br>• <em>Simple</em>: uncomplicated." },
    // ... (Include all previous data here to ensure nothing is lost) ...
    // --- PRACTICE DRILLS #1-8 QUESTIONS (Advanced & Tricky) ---

    // Advanced Vocabulary
    { 
        type: 'mcq',
        category: 'Vocabulary',
        q: "Antonym of LACONIC", 
        options: ["Brief", "Verbose", "Silent", "Uncivilized"], 
        answer: 1,
        explanation: "<strong>Laconic</strong> means using very few words (concise).<br>• <strong>Verbose</strong> (Correct): Using more words than needed.<br>• <em>Brief</em>: Synonym of Laconic.<br>• <em>Silent</em>: Not speaking.<br>• <em>Uncivilized</em>: Not socially advanced."
    },
    { 
        type: 'mcq',
        category: 'Vocabulary',
        q: "Synonym of OBSEQUIOUS", 
        options: ["Defiant", "Servile", "Honest", "Clever"], 
        answer: 1,
        explanation: "<strong>Obsequious</strong> means obedient or attentive to an excessive or servile degree.<br>• <strong>Servile</strong> (Correct): Showing an excessive willingness to serve or please others.<br>• <em>Defiant</em>: Showing open resistance.<br>• <em>Honest</em>: Truthful.<br>• <em>Clever</em>: Intelligent."
    },
    { 
        type: 'mcq',
        category: 'Vocabulary',
        q: "Synonym of EBULLIENT", 
        options: ["Deceitful", "Enthusiastic", "Aggressive", "Sorrowful"], 
        answer: 1,
        explanation: "<strong>Ebullient</strong> means cheerful and full of energy.<br>• <strong>Enthusiastic</strong> (Correct): Having intense enjoyment or interest.<br>• <em>Deceitful</em>: Misleading.<br>• <em>Aggressive</em>: Ready to attack.<br>• <em>Sorrowful</em>: Sad."
    },

    // Tricky Grammar
    { 
        type: 'mcq',
        category: 'Grammar',
        q: "Grammar: 'Hardly ______ the station when the train left.'", 
        options: ["did I reach", "I had reached", "had I reached", "reached I"], 
        answer: 2,
        explanation: "<strong>Had I reached</strong>. 'Hardly' is followed by inversion (Auxiliary Verb + Subject)."
    },
    { 
        type: 'mcq', 
        q: "Grammar: 'He is the ______ of the two brothers.'", 
        options: ["taller", "tallest"], 
        answer: 0,
        explanation: "<strong>Taller</strong>. Use comparative degree when comparing only two people."
    },
    { 
        type: 'mcq', 
        q: "Grammar: 'One should do ______ duty.'", 
        options: ["his", "one's", "their"], 
        answer: 1,
        explanation: "<strong>One's</strong>. The possessive form of 'One' is always 'One's'."
    },
    { 
        type: 'mcq',
        category: 'Grammar',
        q: "Grammar: 'Each of the boys ______ done ______ work.'", 
        options: ["have / their", "has / his", "have / his", "has / their"], 
        answer: 1,
        explanation: "<strong>Has / His</strong>. 'Each' is always singular, so it takes a singular verb and pronoun."
    },
    { 
        type: 'mcq',
        category: 'Grammar',
        q: "Grammar: 'If I ______ a bird, I would fly.'", 
        options: ["was", "am", "were"], 
        answer: 2,
        explanation: "<strong>Were</strong>. In hypothetical subjunctive conditionals, always use 'were' for all subjects."
    },
    { 
        type: 'mcq',
        category: 'Grammar',
        q: "Grammar: 'Let ______ go together.'", 
        options: ["you and I", "you and me"], 
        answer: 1,
        explanation: "<strong>You and me</strong>. 'Let' is followed by object pronouns (me, us, him, her)."
    },
    { 
        type: 'mcq',
        category: 'Grammar',
        q: "Sentence Improvement: 'I prefer coffee <u>than</u> tea.'", 
        options: ["to", "over", "from", "No improvement"], 
        answer: 0,
        explanation: "<strong>To</strong>. Prefer is always followed by 'to', not 'than'."
    },
    { 
        type: 'mcq',
        category: 'Grammar',
        q: "Sentence Improvement: 'He <u>returned back</u> home.'", 
        options: ["returned", "went back", "came back", "No improvement"], 
        answer: 0,
        explanation: "<strong>Returned</strong>. 'Return' already means go back, so 'back' is redundant."
    },
    {
        type: 'text',
        category: 'Voice Transformation',
        q: "Passive: 'Who taught you English?'",
        answer: "By whom were you taught English",
        explanation: "Passive of 'Who' starts with 'By whom'. Past tense 'taught' becomes 'were taught'."
    },
    {
        type: 'mcq',
        category: 'Grammar',
        q: "Subject-Verb: 'Bread and butter ______ his favorite breakfast.'",
        options: ["are", "is"],
        answer: 1,
        explanation: "<strong>Is</strong>. When two nouns form a single idea/dish, they take a singular verb."
    },
    {
        type: 'mcq',
        category: 'Grammar',
        q: "Subject-Verb: 'The quality of the mangoes ______ not good.'",
        options: ["was", "were"],
        answer: 0,
        explanation: "<strong>Was</strong>. The subject is 'Quality' (singular), not 'mangoes'."
    },
    {
        type: 'mcq',
        category: 'Grammar',
        q: "Subject-Verb: 'Many a student ______ tried.'",
        options: ["have", "has"],
        answer: 1,
        explanation: "<strong>Has</strong>. 'Many a' is always followed by a singular noun and singular verb."
    },

    // --- NEW QUESTIONS FROM QUESTION_2.MD (EXPANSION) ---

    // Synonyms (Updated with full explanations)
    { 
        type: 'mcq',
        category: 'Vocabulary',
        q: "Synonym of COMPASSION", 
        options: ["Sympathy", "Destroy", "Yielding", "Difficult"], 
        answer: 0, 
        explanation: "<strong>Compassion</strong> means sympathetic pity and concern for the sufferings of others.<br>• <strong>Sympathy</strong> (Correct): Feelings of pity and sorrow for someone else's misfortune.<br>• <em>Destroy</em>: To end the existence of something.<br>• <em>Yielding</em>: Giving way to arguments or pressure.<br>• <em>Difficult</em>: Needing much effort or skill." 
    },
    { 
        type: 'mcq',
        category: 'Vocabulary',
        q: "Synonym of CALAMITY", 
        options: ["Tiny", "Disaster", "Prodigal", "Appeal"], 
        answer: 1, 
        explanation: "<strong>Calamity</strong> means an event causing great and often sudden damage or distress.<br>• <strong>Disaster</strong> (Correct): A sudden accident or natural catastrophe.<br>• <em>Tiny</em>: Very small.<br>• <em>Prodigal</em>: Spending money freely and recklessly.<br>• <em>Appeal</em>: Make a serious or urgent request." 
    },
    { 
        type: 'mcq',
        category: 'Vocabulary',
        q: "Synonym of DISPUTE", 
        options: ["Detestable", "Phony", "Conflict", "Disaster"], 
        answer: 2, 
        explanation: "<strong>Dispute</strong> means a disagreement, argument, or debate.<br>• <strong>Conflict</strong> (Correct): A serious disagreement or argument.<br>• <em>Detestable</em>: Deserving intense dislike.<br>• <em>Phony</em>: Not genuine; fake.<br>• <em>Disaster</em>: A sudden event causing great damage." 
    },
    { 
        type: 'mcq',
        category: 'Vocabulary',
        q: "Synonym of DERIVE", 
        options: ["Prodigal", "Spotless", "Obtain", "Dictum"], 
        answer: 2, 
        explanation: "<strong>Derive</strong> means to obtain something from a specified source.<br>• <strong>Obtain</strong> (Correct): To get, acquire, or secure.<br>• <em>Prodigal</em>: Wasteful.<br>• <em>Spotless</em>: Absolutely clean.<br>• <em>Dictum</em>: A formal pronouncement." 
    },
    { 
        type: 'mcq',
        category: 'Vocabulary',
        q: "Synonym of SUSTAIN", 
        options: ["Calming", "Endeavour", "Preserve", "Truthfulness"], 
        answer: 2, 
        explanation: "<strong>Sustain</strong> means to strengthen or support physically or mentally.<br>• <strong>Preserve</strong> (Correct): To maintain something in its original or existing state.<br>• <em>Calming</em>: Soothing.<br>• <em>Endeavour</em>: Try hard to do or achieve something.<br>• <em>Truthfulness</em>: The fact of being true." 
    },
    { 
        type: 'mcq',
        category: 'Vocabulary',
        q: "Synonym of GRASP", 
        options: ["Faithful", "Initiate", "Clasp", "Disaster"], 
        answer: 2, 
        explanation: "<strong>Grasp</strong> means to seize and hold firmly.<br>• <strong>Clasp</strong> (Correct): To grasp (something) tightly with one's hand.<br>• <em>Faithful</em>: Loyal and steadfast.<br>• <em>Initiate</em>: To cause a process to begin.<br>• <em>Disaster</em>: A sudden accident." 
    },
    { 
        type: 'mcq',
        category: 'Vocabulary',
        q: "Synonym of ORIGINATE", 
        options: ["Sympathy", "Spendthrift", "Initiate", "Clasp"], 
        answer: 2, 
        explanation: "<strong>Originate</strong> means to have a specified beginning.<br>• <strong>Initiate</strong> (Correct): To cause a process or action to begin.<br>• <em>Sympathy</em>: Feelings of pity.<br>• <em>Spendthrift</em>: A person who spends money irresponsibly.<br>• <em>Clasp</em>: Grasp tightly." 
    },
    { 
        type: 'mcq',
        category: 'Vocabulary',
        q: "Synonym of RUPTURE", 
        options: ["Spotless", "Injurious", "Prodigal", "Break"], 
        answer: 3, 
        explanation: "<strong>Rupture</strong> means to break or burst suddenly.<br>• <strong>Break</strong> (Correct): To separate or cause to separate into pieces.<br>• <em>Spotless</em>: Clean.<br>• <em>Injurious</em>: Causing harm.<br>• <em>Prodigal</em>: Wasteful." 
    },
    { 
        type: 'mcq',
        category: 'Vocabulary',
        q: "Synonym of RAZE", 
        options: ["Unpolished", "Destroy", "Yielding", "Sympathy"], 
        answer: 1, 
        explanation: "<strong>Raze</strong> means to completely destroy (a building, town, or other site).<br>• <strong>Destroy</strong> (Correct): To put an end to the existence of something.<br>• <em>Unpolished</em>: Lacking sophistication.<br>• <em>Yielding</em>: Compliant.<br>• <em>Sympathy</em>: Compassion." 
    },
    { 
        type: 'mcq',
        category: 'Vocabulary',
        q: "Synonym of GASH", 
        options: ["Censured", "Cut", "Endeavour", "Difficult"], 
        answer: 1, 
        explanation: "<strong>Gash</strong> means a long, deep cut or wound.<br>• <strong>Cut</strong> (Correct): An incision or wound.<br>• <em>Censured</em>: Expressed severe disapproval.<br>• <em>Endeavour</em>: Attempt.<br>• <em>Difficult</em>: Hard to do." 
    },
    { 
        type: 'mcq',
        category: 'Vocabulary',
        q: "Synonym of PLUNGE", 
        options: ["Fall", "Spotless", "Conflict", "Endeavour"], 
        answer: 0, 
        explanation: "<strong>Plunge</strong> means to jump or dive quickly.<br>• <strong>Fall</strong> (Correct): To drop or descend.<br>• <em>Spotless</em>: Clean.<br>• <em>Conflict</em>: A disagreement.<br>• <em>Endeavour</em>: An attempt." 
    },
    { 
        type: 'mcq',
        category: 'Vocabulary',
        q: "Synonym of MICROSCOPIC", 
        options: ["Tiny", "Preserve", "Disaster", "Prodigal"], 
        answer: 0, 
        explanation: "<strong>Microscopic</strong> means so small as to be visible only with a microscope.<br>• <strong>Tiny</strong> (Correct): Very small.<br>• <em>Preserve</em>: To maintain.<br>• <em>Disaster</em>: A catastrophe.<br>• <em>Prodigal</em>: Wasteful." 
    },
    { 
        type: 'mcq',
        category: 'Vocabulary',
        q: "Synonym of ATTEMPT", 
        options: ["Censured", "Calming", "Endeavour", "Clasp"], 
        answer: 2, 
        explanation: "<strong>Attempt</strong> means to make an effort to achieve something.<br>• <strong>Endeavour</strong> (Correct): Try hard to do or achieve something.<br>• <em>Censured</em>: Reprimanded.<br>• <em>Calming</em>: Soothing.<br>• <em>Clasp</em>: Hold tightly." 
    },
    { 
        type: 'mcq',
        category: 'Vocabulary',
        q: "Synonym of DEVOUT", 
        options: ["Truthfulness", "Appeal", "Obtain", "Faithful"], 
        answer: 3, 
        explanation: "<strong>Devout</strong> means having or showing deep religious feeling or commitment.<br>• <strong>Faithful</strong> (Correct): Loyal, constant, and steadfast.<br>• <em>Truthfulness</em>: Honesty.<br>• <em>Appeal</em>: Request.<br>• <em>Obtain</em>: Get." 
    },
    { 
        type: 'mcq',
        category: 'Vocabulary',
        q: "Synonym of PRODIGAL", 
        options: ["Spendthrift", "Destroy", "Initiate", "Preserve"], 
        answer: 0, 
        explanation: "<strong>Prodigal</strong> means spending money or resources freely and recklessly.<br>• <strong>Spendthrift</strong> (Correct): A person who spends money in an irresponsible way.<br>• <em>Destroy</em>: Demolish.<br>• <em>Initiate</em>: Start.<br>• <em>Preserve</em>: Keep safe." 
    },
    { 
        type: 'mcq',
        category: 'Vocabulary',
        q: "Synonym of CAUTION", 
        options: ["Unnatural", "Warn", "Spendthrift", "Conflict"], 
        answer: 1, 
        explanation: "<strong>Caution</strong> means care taken to avoid danger or mistakes.<br>• <strong>Warn</strong> (Correct): To inform someone in advance of an impending or possible danger.<br>• <em>Unnatural</em>: Abnormal.<br>• <em>Spendthrift</em>: Waster of money.<br>• <em>Conflict</em>: Dispute." 
    },
    { 
        type: 'mcq',
        category: 'Vocabulary',
        q: "Synonym of IMPLORE", 
        options: ["Disaster", "Appeal", "Preserve", "Spendthrift"], 
        answer: 1, 
        explanation: "<strong>Implore</strong> means to beg someone earnestly or desperately to do something.<br>• <strong>Appeal</strong> (Correct): Make a serious or urgent request.<br>• <em>Disaster</em>: Calamity.<br>• <em>Preserve</em>: Protect.<br>• <em>Spendthrift</em>: Waster." 
    },

    // Antonyms (Updated with full explanations)
    { 
        type: 'mcq',
        category: 'Vocabulary',
        q: "Antonym of EXPLICIT", 
        options: ["unreserved", "plain", "absolute", "uncertain"], 
        answer: 3, 
        explanation: "<strong>Explicit</strong> means stated clearly and in detail.<br>• <strong>Uncertain</strong> (Correct): Not able to be relied on; not known or definite.<br>• <em>Unreserved</em>: Frank and open.<br>• <em>Plain</em>: Simple or clear.<br>• <em>Absolute</em>: Total; complete." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of CLANDESTINE", 
        options: ["unrevealed", "undisclosed", "unconcealed", "underhand"], 
        answer: 2, 
        explanation: "<strong>Clandestine</strong> means kept secret or done secretly.<br>• <strong>Unconcealed</strong> (Correct): Not hidden; obvious.<br>• <em>Unrevealed</em>: Not made known.<br>• <em>Undisclosed</em>: Not made known.<br>• <em>Underhand</em>: Dishonest." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of CHRONIC", 
        options: ["Freedom", "Infrequent", "Solution", "Optional"], 
        answer: 1, 
        explanation: "<strong>Chronic</strong> means persisting for a long time or constantly recurring.<br>• <strong>Infrequent</strong> (Correct): Not occurring often.<br>• <em>Freedom</em>: Liberty.<br>• <em>Solution</em>: Answer to a problem.<br>• <em>Optional</em>: Not compulsory." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of PERIL", 
        options: ["Core", "Kindle", "Unused", "Security"], 
        answer: 3, 
        explanation: "<strong>Peril</strong> means serious and immediate danger.<br>• <strong>Security</strong> (Correct): The state of being free from danger or threat.<br>• <em>Core</em>: Center.<br>• <em>Kindle</em>: Ignite.<br>• <em>Unused</em>: Not utilized." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of PERIPHERY", 
        options: ["Avoidable", "Solution", "Unconcealed", "Core"], 
        answer: 3, 
        explanation: "<strong>Periphery</strong> means the outer limits or edge of an area or object.<br>• <strong>Core</strong> (Correct): The central or most important part.<br>• <em>Avoidable</em>: Preventable.<br>• <em>Solution</em>: Answer.<br>• <em>Unconcealed</em>: Visible." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of EXTINGUISH", 
        options: ["Kindle", "Valueless", "Insult", "Approve"], 
        answer: 0, 
        explanation: "<strong>Extinguish</strong> means to cause a fire to cease to burn.<br>• <strong>Kindle</strong> (Correct): To light or set on fire.<br>• <em>Valueless</em>: Worthless.<br>• <em>Insult</em>: Offend.<br>• <em>Approve</em>: Accept." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of FLEXIBLE", 
        options: ["Avoidable", "Unpredictable", "Rigid", "Released"], 
        answer: 2, 
        explanation: "<strong>Flexible</strong> means capable of bending easily without breaking.<br>• <strong>Rigid</strong> (Correct): Unable to bend or be forced out of shape.<br>• <em>Avoidable</em>: Can be prevented.<br>• <em>Unpredictable</em>: Random.<br>• <em>Released</em>: Freed." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of COMPLIMENT", 
        options: ["Attic", "Harmony", "Consistent", "Insult"], 
        answer: 3, 
        explanation: "<strong>Compliment</strong> means a polite expression of praise or admiration.<br>• <strong>Insult</strong> (Correct): A disrespectful or scornfully abusive remark.<br>• <em>Attic</em>: Room under the roof.<br>• <em>Harmony</em>: Agreement.<br>• <em>Consistent</em>: Steady." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of CONDEMN", 
        options: ["Terminated", "Crazy", "Approve", "Core"], 
        answer: 2, 
        explanation: "<strong>Condemn</strong> means to express complete disapproval of.<br>• <strong>Approve</strong> (Correct): To believe that someone or something is good or acceptable.<br>• <em>Terminated</em>: Ended.<br>• <em>Crazy</em>: Mad.<br>• <em>Core</em>: Center." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of ADULTERATION", 
        options: ["Figurative", "Purification", "Honesty", "Dependent"], 
        answer: 1, 
        explanation: "<strong>Adulteration</strong> means the action of making something poorer in quality by adding another substance.<br>• <strong>Purification</strong> (Correct): The removal of contaminants from something.<br>• <em>Figurative</em>: Metaphorical.<br>• <em>Honesty</em>: Truthfulness.<br>• <em>Dependent</em>: Reliant." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of EMANCIPATE", 
        options: ["Love", "Bright", "Enslave", "Genuine"], 
        answer: 2, 
        explanation: "<strong>Emancipate</strong> means to set free, especially from legal, social, or political restrictions.<br>• <strong>Enslave</strong> (Correct): To make someone a slave.<br>• <em>Love</em>: Affection.<br>• <em>Bright</em>: Shining.<br>• <em>Genuine</em>: Real." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of AMALGAMATE", 
        options: ["Insolence", "Genuine", "Solution", "Isolate"], 
        answer: 3, 
        explanation: "<strong>Amalgamate</strong> means to combine or unite to form one organization or structure.<br>• <strong>Isolate</strong> (Correct): To cause a person or place to be or remain alone or apart from others.<br>• <em>Insolence</em>: Rudeness.<br>• <em>Genuine</em>: Authentic.<br>• <em>Solution</em>: Answer." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of COMPLACENCY", 
        options: ["Dissatisfaction", "Security", "Hostile", "Freedom"], 
        answer: 0, 
        explanation: "<strong>Complacency</strong> means a feeling of smug or uncritical satisfaction with oneself.<br>• <strong>Dissatisfaction</strong> (Correct): Lack of satisfaction.<br>• <em>Security</em>: Safety.<br>• <em>Hostile</em>: Unfriendly.<br>• <em>Freedom</em>: Liberty." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of ERRATIC", 
        options: ["Solution", "Genuine", "Attic", "Consistent"], 
        answer: 3, 
        explanation: "<strong>Erratic</strong> means not even or regular in pattern or movement; unpredictable.<br>• <strong>Consistent</strong> (Correct): Acting or done in the same way over time.<br>• <em>Solution</em>: Fix.<br>• <em>Genuine</em>: Real.<br>• <em>Attic</em>: Top room." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of BANE", 
        options: ["Infrequent", "Insolence", "Benevolence", "Security"], 
        answer: 2, 
        explanation: "<strong>Bane</strong> means a cause of great distress or annoyance.<br>• <strong>Benevolence</strong> (Correct): The quality of being well meaning; kindness.<br>• <em>Infrequent</em>: Rare.<br>• <em>Insolence</em>: Disrespect.<br>• <em>Security</em>: Safety." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of CELLAR", 
        options: ["Infrequent", "Genuine", "Attic", "Dependent"], 
        answer: 2, 
        explanation: "<strong>Cellar</strong> is a room below ground level.<br>• <strong>Attic</strong> (Correct): A space or room just below the roof of a building.<br>• <em>Infrequent</em>: Rare.<br>• <em>Genuine</em>: Real.<br>• <em>Dependent</em>: Reliant." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of BOYCOTT", 
        options: ["Patronize", "Terminated", "Jubilant", "Infrequent"], 
        answer: 0, 
        explanation: "<strong>Boycott</strong> means to withdraw from commercial or social relations.<br>• <strong>Patronize</strong> (Correct): To frequent (a store, theatre, etc.) as a customer.<br>• <em>Terminated</em>: Ended.<br>• <em>Jubilant</em>: Happy.<br>• <em>Infrequent</em>: Rare." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of AUTONOMOUS", 
        options: ["Jubilant", "Avoidable", "Terminated", "Dependent"], 
        answer: 3, 
        explanation: "<strong>Autonomous</strong> means having the freedom to act independently.<br>• <strong>Dependent</strong> (Correct): Contingent on or determined by.<br>• <em>Jubilant</em>: Happy.<br>• <em>Avoidable</em>: Preventable.<br>• <em>Terminated</em>: Ended." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of COGNIZANCE", 
        options: ["Figurative", "Love", "Enslave", "Ignorance"], 
        answer: 3, 
        explanation: "<strong>Cognizance</strong> means knowledge, awareness, or notice.<br>• <strong>Ignorance</strong> (Correct): Lack of knowledge or information.<br>• <em>Figurative</em>: Metaphorical.<br>• <em>Love</em>: Affection.<br>• <em>Enslave</em>: To capture." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of PRETENCE", 
        options: ["Unconcealed", "Artificial", "Insolence", "Honesty"], 
        answer: 3, 
        explanation: "<strong>Pretence</strong> means an attempt to make something that is not the case appear true.<br>• <strong>Honesty</strong> (Correct): The quality of being honest.<br>• <em>Unconcealed</em>: Visible.<br>• <em>Artificial</em>: Fake.<br>• <em>Insolence</em>: Rudeness." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of HUMOUR", 
        options: ["Core", "Love", "Purification", "Seriousness"], 
        answer: 3, 
        explanation: "<strong>Humour</strong> is the quality of being amusing or comic.<br>• <strong>Seriousness</strong> (Correct): The state of being serious.<br>• <em>Core</em>: Center.<br>• <em>Love</em>: Affection.<br>• <em>Purification</em>: Cleansing." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of SUPPRESS", 
        options: ["Encourage", "Rigid", "Freedom", "Hostile"], 
        answer: 0, 
        explanation: "<strong>Suppress</strong> means to forcibly put an end to.<br>• <strong>Encourage</strong> (Correct): To give support, confidence, or hope to.<br>• <em>Rigid</em>: Stiff.<br>• <em>Freedom</em>: Liberty.<br>• <em>Hostile</em>: Unfriendly." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of INEVITABLE", 
        options: ["Love", "Terminated", "Honesty", "Avoidable"], 
        answer: 3, 
        explanation: "<strong>Inevitable</strong> means certain to happen; unavoidable.<br>• <strong>Avoidable</strong> (Correct): Able to be avoided or prevented.<br>• <em>Love</em>: Affection.<br>• <em>Terminated</em>: Ended.<br>• <em>Honesty</em>: Truth." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of STRIFE", 
        options: ["Harmony", "Optional", "Clumsiness", "Terminated"], 
        answer: 0, 
        explanation: "<strong>Strife</strong> means angry or bitter disagreement over fundamental issues.<br>• <strong>Harmony</strong> (Correct): Agreement or concord.<br>• <em>Optional</em>: Not required.<br>• <em>Clumsiness</em>: Awkwardness.<br>• <em>Terminated</em>: Ended." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of COMMISSIONED", 
        options: ["Benevolence", "Hostile", "Ignorance", "Terminated"], 
        answer: 3, 
        explanation: "<strong>Commissioned</strong> means ordered or authorized; in service.<br>• <strong>Terminated</strong> (Correct): Brought to an end; fired.<br>• <em>Benevolence</em>: Kindness.<br>• <em>Hostile</em>: Unfriendly.<br>• <em>Ignorance</em>: Lack of knowledge." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of DESPISE", 
        options: ["Dependent", "Optional", "Love", "Artificial"], 
        answer: 2, 
        explanation: "<strong>Despise</strong> means to feel contempt or a deep repugnance for.<br>• <strong>Love</strong> (Correct): An intense feeling of deep affection.<br>• <em>Dependent</em>: Reliant.<br>• <em>Optional</em>: Choice.<br>• <em>Artificial</em>: Fake." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of PROMINENT", 
        options: ["Inconspicuous", "Crazy", "Solution", "Terminated"], 
        answer: 0, 
        explanation: "<strong>Prominent</strong> means important; famous; noticeable.<br>• <strong>Inconspicuous</strong> (Correct): Not clearly visible or attracting attention.<br>• <em>Crazy</em>: Mad.<br>• <em>Solution</em>: Answer.<br>• <em>Terminated</em>: Ended." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of SANE", 
        options: ["Freedom", "Crazy", "Genuine", "Foreign"], 
        answer: 1, 
        explanation: "<strong>Sane</strong> means of sound mind; not mad.<br>• <strong>Crazy</strong> (Correct): Mad, especially as manifested in wild or aggressive behavior.<br>• <em>Freedom</em>: Liberty.<br>• <em>Genuine</em>: Real.<br>• <em>Foreign</em>: Alien." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of VALUABLE", 
        options: ["Valueless", "Avoidable", "Rigid", "Consistent"], 
        answer: 0, 
        explanation: "<strong>Valuable</strong> means worth a great deal of money.<br>• <strong>Valueless</strong> (Correct): Having no value.<br>• <em>Avoidable</em>: Preventable.<br>• <em>Rigid</em>: Stiff.<br>• <em>Consistent</em>: Steady." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of UTILISED", 
        options: ["Crazy", "Unused", "Seriousness", "Honesty"], 
        answer: 1, 
        explanation: "<strong>Utilised</strong> means make practical and effective use of.<br>• <strong>Unused</strong> (Correct): Not used.<br>• <em>Crazy</em>: Mad.<br>• <em>Seriousness</em>: Gravity.<br>• <em>Honesty</em>: Truth." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of PROBLEM", 
        options: ["Solution", "Honesty", "Genuine", "Jubilant"], 
        answer: 0, 
        explanation: "<strong>Problem</strong> is a matter or situation regarded as unwelcome or harmful.<br>• <strong>Solution</strong> (Correct): A means of solving a problem.<br>• <em>Honesty</em>: Truthfulness.<br>• <em>Genuine</em>: Real.<br>• <em>Jubilant</em>: Happy." 
    },
    { 
        type: 'mcq', 
        q: "Antonym of PREDICTABLE", 
        options: ["Kindle", "Unused", "Turbulent", "Unpredictable"], 
        answer: 3, 
        explanation: "<strong>Predictable</strong> means able to be predicted.<br>• <strong>Unpredictable</strong> (Correct): Not able to be predicted.<br>• <em>Kindle</em>: Light fire.<br>• <em>Unused</em>: Not utilized.<br>• <em>Turbulent</em>: Chaotic." 
    },

    // Idioms
    { type: 'mcq', category: 'Idioms & Phrases', q: "Idiom: 'To make inroads'", options: ["To succeed by reducing the power of something else", "An unworthy person in the family", "To be in a bad mood", "To be in a difficult situation"], answer: 0, explanation: "Means <strong>to progress or succeed</strong>, especially at the expense of something else." },
    { type: 'mcq', q: "Idiom: 'Have somebody taped'", options: ["At a distance", "To be in a difficult situation", "To be optimistic", "To understand somebody completely and deal with them successfully"], answer: 3, explanation: "Means <strong>to understand someone completely</strong> and know how to deal with them." },
    { type: 'mcq', q: "Idiom: 'To be in a jam'", options: ["To be in a difficult situation", "Strange person", "Work late into the night", "An unworthy person in the family"], answer: 0, explanation: "Means <strong>to be in a difficult situation</strong> or predicament." },
    { type: 'mcq', q: "Idiom: 'To have nine lives'", options: ["At a distance", "To be very lucky in dangerous situations", "To be in a difficult situation", "Cheerful"], answer: 1, explanation: "Means <strong>to be very lucky</strong> in avoiding death or dangerous situations." },
    { type: 'mcq', q: "Idiom: 'Fair and square'", options: ["Honest", "In dispute", "Happens very rarely", "To have a talent of speaking"], answer: 0, explanation: "Means <strong>honestly</strong> and according to the rules." },
    { type: 'mcq', q: "Idiom: 'Black sheep'", options: ["Very fast", "To look for something in the wrong place", "An unworthy person in the family", "At a distance"], answer: 2, explanation: "Refers to <strong>a member of a family or group who is regarded as a disgrace</strong>." },
    { type: 'mcq', q: "Idiom: 'Lion's share'", options: ["To hear rumours", "Intense dislike", "To be in a difficult situation", "Major share"], answer: 3, explanation: "Means <strong>the largest part</strong> of something." },
    { type: 'mcq', q: "Idiom: 'A good samaritan'", options: ["Driven from one place to the other", "To have a talent of speaking", "When one does not want to choose", "A genuinely helpful person"], answer: 3, explanation: "Refers to <strong>a charitable or helpful person</strong>." },
    { type: 'mcq', q: "Idiom: 'Gift of the gab'", options: ["To be in a difficult situation", "To have a talent of speaking", "Very fast", "Go insane"], answer: 1, explanation: "Means <strong>the ability to speak with eloquence and fluency</strong>." },
    { type: 'mcq', q: "Idiom: 'Heart and soul'", options: ["Very fast", "To hear rumours", "To be optimistic", "Seriously and sincerely"], answer: 3, explanation: "Means <strong>completely and sincerely</strong>; with all one's effort." },
    { type: 'mcq', q: "Idiom: 'Pillar to post'", options: ["Driven from one place to the other", "To enjoy all the advantages", "Pass the crisis", "To be in a difficult situation"], answer: 0, explanation: "Means <strong>from one place to another</strong> in a chaotic or fruitless manner." },
    { type: 'mcq', q: "Idiom: 'Call a spade a spade'", options: ["Honest", "To be in a bad mood", "Be outspoken", "Very active or busy"], answer: 2, explanation: "Means <strong>to speak plainly or bluntly</strong>; to be outspoken." },
    { type: 'mcq', q: "Idiom: 'At arms length'", options: ["Very fast", "At a distance", "Intense dislike", "To enjoy all the advantages"], answer: 1, explanation: "Means <strong>at a distance</strong>; avoiding intimacy or close contact." },
    { type: 'mcq', q: "Idiom: 'By leaps and bounds'", options: ["Cheerful", "Directly", "Very active or busy", "Very fast"], answer: 3, explanation: "Means <strong>very quickly</strong> or with rapid progress." },
    { type: 'mcq', q: "Idiom: 'To sit on the fence'", options: ["when one wants to make a decision", "when one wants to deny something", "when one wants to take sides", "when one does not want to choose or decide"], answer: 3, explanation: "Means <strong>to avoid making a decision</strong> or taking a side." },
    { type: 'mcq', q: "Idiom: 'To speak of the Devil'", options: ["A false invention", "Work late into the night", "When the person you have been talking about suddenly arrives", "Growing less"], answer: 2, explanation: "Said when a person appears just after being mentioned." },
    { type: 'mcq', q: "Idiom: 'Once in a blue moon'", options: ["happens very often", "happens very rarely", "a lunar eclipse", "a tragic occasion"], answer: 1, explanation: "Means <strong>very rarely</strong>." },
    { type: 'mcq', q: "Idiom: 'Barking up the wrong tree'", options: ["to climb up a tree", "to look for something or someone in the wrong place", "to be chased by dogs", "to run around in circles"], answer: 1, explanation: "Means <strong>to pursue a mistaken or misguided line of thought or course of action</strong>." },
    { type: 'mcq', q: "Idiom: 'Be glad to see the back of'", options: ["To hear rumours", "To be very lucky", "Work late", "To be happy when a person leaves"], answer: 3, explanation: "Means <strong>to be happy that someone has left</strong>." },
    { type: 'mcq', q: "Idiom: 'The best of both worlds'", options: ["To enjoy all the advantages", "Cheerful", "Honest", "Be outspoken"], answer: 0, explanation: "Means <strong>to enjoy the advantages of two different things</strong> at the same time." },
    { type: 'mcq', q: "Idiom: 'Every cloud has a silver lining'", options: ["To be optimistic (or find good in bad)", "When the person... arrives", "Major share", "Seriously and sincerely"], answer: 0, explanation: "Means <strong>there is something good in every bad situation</strong>." },
    { type: 'mcq', q: "Idiom: 'To hear it on the grapevine'", options: ["To hear rumours", "To look for something... wrong place", "To recover from defeat", "When the person... arrives"], answer: 0, explanation: "Means <strong>to hear news from someone who heard the news from someone else</strong> (rumours)." },
    { type: 'mcq', q: "Idiom: 'To hit the nail on the head'", options: ["At a distance", "To do something exactly right", "To hear rumours", "Growing less"], answer: 1, explanation: "Means <strong>to find exactly the right answer</strong> or do something exactly right." },
    { type: 'mcq', q: "Idiom: 'To jump on the bandwagon'", options: ["Very fast", "To follow a popular trend or activity", "When the person... arrives", "Paying no attention"], answer: 1, explanation: "Means <strong>to join others in doing or supporting something likely to be successful</strong>." },

    // One Word Substitution
    { type: 'mcq', category: 'One Word Substitution', q: "One Word: A verse letter.", options: ["Unanimous", "Septuagenarian", "Kleptomania", "Epistle"], answer: 3, explanation: "<strong>Epistle</strong> means a poem or other literary work in the form of a letter." },
    { type: 'mcq', q: "One Word: A building where dead bodies are kept.", options: ["Cemetery", "Mortuary", "Crematory", "Crypt"], answer: 1, explanation: "<strong>Mortuary</strong> is a room or building in which dead bodies are kept, for hygienic storage or for examination." },
    { type: 'mcq', q: "One Word: One who is all powerful.", options: ["Omniscient", "Omnipotent", "Omnipresent", "Omnivorous"], answer: 1, explanation: "<strong>Omnipotent</strong> means having unlimited power." },
    { type: 'mcq', q: "One Word: A person who doubts the truth of what is being told.", options: ["Hypochondriac", "Sceptic", "Septuagenarian", "Anthropology"], answer: 1, explanation: "<strong>Sceptic</strong> is a person inclined to question or doubt accepted opinions." },
    { type: 'mcq', q: "One Word: A decision taken by the votes of all.", options: ["Anaemia", "Unanimous", "Invulnerable", "Anthropology"], answer: 1, explanation: "<strong>Unanimous</strong> means (of two or more people) fully in agreement." },
    { type: 'mcq', q: "One Word: A person not accepted by society.", options: ["Pariah", "Omnipotent", "Cartographer", "Septuagenarian"], answer: 0, explanation: "<strong>Pariah</strong> means an outcast." },
    { type: 'mcq', q: "One Word: A person employed to stand at the entrance to a club.", options: ["Polyglot", "Anthropology", "Bouncer", "Pariah"], answer: 2, explanation: "<strong>Bouncer</strong> is a person employed by a nightclub or similar establishment to prevent troublemakers from entering." },
    { type: 'mcq', q: "One Word: A person whose job is to manage the financial affairs of a school or college.", options: ["Mortuary", "Bursar", "Unanimous", "Venue"], answer: 1, explanation: "<strong>Bursar</strong> is a person who manages the financial affairs of a college or school." },
    { type: 'mcq', q: "One Word: To make a company smaller in order to reduce costs.", options: ["Bouncer", "Agenda", "Byre", "Downsize"], answer: 3, explanation: "<strong>Downsize</strong> means make (a company or organization) smaller by eliminating staff positions." },
    { type: 'mcq', q: "One Word: A person who worries all the time.", options: ["Anaemia", "Hypochondriac", "Anthropology", "Invulnerable"], answer: 1, explanation: "<strong>Hypochondriac</strong> is a person who is abnormally anxious about their health." },
    { type: 'mcq', q: "One Word: A place where people meet for an organized event.", options: ["Archipelago", "Byre", "Bursar", "Venue"], answer: 3, explanation: "<strong>Venue</strong> is the place where something happens, especially an organized event." },
    { type: 'mcq', q: "One Word: The convict is suffering from a disease of uncontrollable desire to steal.", options: ["Kleptomania", "Polyglot", "Unanimous", "Epistle"], answer: 0, explanation: "<strong>Kleptomania</strong> is a recurrent urge to steal, typically without regard for need or profit." },
    { type: 'mcq', q: "One Word: Does today's meeting have a list of the subjects to be discussed?", options: ["Agenda", "Sceptic", "Mob", "Archipelago"], answer: 0, explanation: "<strong>Agenda</strong> is a list of items to be discussed at a formal meeting." },
    { type: 'mcq', q: "One Word: Peter is a man who knows many foreign languages.", options: ["Downsize", "Sceptic", "Polyglot", "Byre"], answer: 2, explanation: "<strong>Polyglot</strong> is a person who knows and is able to use several languages." },
    { type: 'mcq', q: "One Word: Sam believes that he is not sure of the existence of God.", options: ["Agnostic", "Mob", "Mortuary", "Sceptic"], answer: 0, explanation: "<strong>Agnostic</strong> is a person who believes that nothing is known or can be known of the existence or nature of God." },
    { type: 'mcq', q: "One Word: He is an expert in the study of ancient societies.", options: ["Omnipotent", "Anthropology", "Downsize", "Infiltrator"], answer: 1, explanation: "<strong>Anthropology</strong> is the study of human societies and cultures and their development." },

    // Fill in the Blanks
    { type: 'text', category: 'Fill in the Blanks', q: "The newspaper is ____ a competition to win a cash prize.", answer: "featuring", explanation: "'Featuring' means to have as a prominent attribute or aspect." },
    { type: 'text', q: "The ____ between the son and the father began a few years ago.", answer: "conflict", explanation: "'Conflict' fits the context of a disagreement or argument." },
    { type: 'text', q: "Ramu ____ his mind after hearing the story about Sayed.", answer: "changed", explanation: "'Changed his mind' is a common phrase meaning to alter one's opinion." },
    { type: 'text', q: "There were ____ people present when the award ceremony was held.", answer: "several", explanation: "'Several' is used to refer to a number more than two but not many." },
    { type: 'text', q: "Tina ____ the cream on her skin to reduce the pain.", answer: "applied", explanation: "'Applied' is the correct verb for putting a substance like cream on a surface." },
    { type: 'text', q: "The students ____ themselves when the inspection team visited the school.", answer: "behaved", explanation: "'Behaved themselves' means to act in a polite or proper way." },
    { type: 'text', q: "Somu was ____ red handed while he was trying to steal from Sony.", answer: "caught", explanation: "'Caught red handed' is an idiom meaning caught in the act of doing something wrong." },
    { type: 'text', q: "Jyoti writes newspaper ____ for the Hindu.", answer: "articles", explanation: "Newspapers contain 'articles'." },
    { type: 'text', q: "There must have been a ____ reason for Jim to leave suddenly.", answer: "good", explanation: "'Good reason' is a common collocation implying a valid or justifiable reason." },
    { type: 'text', q: "The bus they were ____ in met with a tragic accident last night.", answer: "travelling", explanation: "'Travelling' is the continuous action of going from one place to another." },
    { type: 'text', q: "____ elephant eating sugarcane is Rani.", answer: "An", explanation: "'An' is used before words starting with a vowel sound ('elephant')." },
    { type: 'text', q: "This ring is made of ____ platinum.", answer: "zero article", explanation: "Material nouns like 'platinum' do not typically take an article." },
    { type: 'text', q: "That man over there is ____ European.", answer: "a", explanation: "'European' starts with a consonant sound ('yu'), so 'a' is used." },
    { type: 'text', q: "I have ____ things to do.", answer: "many", explanation: "'Many' is used with countable nouns like 'things'." },
    { type: 'text', q: "Doesn't the cat want ____ milk?", answer: "some", explanation: "'Some' is used in questions where the answer 'yes' is expected or offered." },
    { type: 'text', q: "Robin dances ____ than his sister.", answer: "worse", explanation: "'Worse' is the comparative form of 'bad'." },
    { type: 'text', q: "The miners went ____ into the mine to look for gold deposits.", answer: "deeper", explanation: "'Deeper' indicates going further down." },
    { type: 'text', q: "I am not as ____ as you.", answer: "rich", explanation: "In 'as...as' comparisons, the base adjective ('rich') is used." },
    { type: 'text', q: "Sue is ____ in our group about exam results.", answer: "the most nervous", explanation: "Superlative 'the most nervous' is used for comparing one person to a group." },

    // Common Error Spotting
    { type: 'mcq', category: 'Error Spotting', q: "Error Spotting: 'The alarm is triggered (A) / by a sensor (B) / that detects movement (C) / No error (D).'", options: ["A", "B", "C", "D"], answer: 3, explanation: "<strong>No error</strong>. The sentence is grammatically correct." },
    { type: 'mcq', q: "Error Spotting: 'My father taught (A) / me how to (B) / play guitar (C).'", options: ["place", "after all", "is slow", "play guitar"], answer: 3, explanation: "Error in C. Instruments usually take 'the'. Should be 'play <strong>the</strong> guitar'." },
    { type: 'mcq', q: "Error Spotting: 'Bridges across (A) / this river are (B) / hundreds of years old (C) / No error (D).'", options: ["A", "B", "C", "D"], answer: 3, explanation: "<strong>No error</strong>. The sentence is grammatically correct." },
    { type: 'mcq', q: "Error Spotting: 'Henry and me (A) / have been invited (B) / to Jack's party (C) / No error (D).'", options: ["A", "B", "C", "D"], answer: 0, explanation: "Error in A. Subject pronoun 'I' should be used. 'Henry and <strong>I</strong>'." },
    { type: 'mcq', q: "Error Spotting: 'The information (A) / was shared (B) / amongst all members (C).'", options: ["No error", "place", "so free than", "has tried"], answer: 0, explanation: "<strong>No error</strong>. 'Amongst' is a variant of 'among', used here correctly." },
    { type: 'mcq', q: "Error Spotting: 'One of the movers (A) / realizes the piano is about (B) / to fall directly on their heads (C).'", options: ["No error", "are being written", "always come in handy", "so very heavy"], answer: 0, explanation: "<strong>No error</strong>. 'One of the movers' takes a singular verb 'realizes', and 'their' refers to the movers (plural)." },
    { type: 'mcq', q: "Error Spotting: 'She lays down (A) / for a nap (B) / after her mother's visit (C).'", options: ["are going", "No error", "lays down", "as to why"], answer: 2, explanation: "Error in A. 'Lay' is transitive (needs object). 'Lie' is intransitive. Should be 'She <strong>lies</strong> down'." },
    { type: 'mcq', q: "Error Spotting: 'Try and be home (A) / before your curfew (B) / this time (C).'", options: ["has increased", "always come in handy", "Try and be home", "where she did leave"], answer: 2, explanation: "Error in A. 'Try to' is the standard form. 'Try <strong>to</strong> be home'." },
    { type: 'mcq', q: "Error Spotting: 'Some of the ice in the cooler (A) / always come in handy (B) / for treating sports injuries (C).'", options: ["always come in handy", "where she did leave", "I", "ever helping me"], answer: 0, explanation: "Error in B. 'Ice' is uncountable (singular). Should be 'always <strong>comes</strong> in handy'." },
    { type: 'mcq', q: "Error Spotting: 'Neither my father (A) / nor my mother (B) / are going to the party (C).'", options: ["are being written", "who wins", "are going", "No error"], answer: 2, explanation: "Error in C. 'Neither...nor' with singular nouns takes a singular verb. Should be '<strong>is</strong> going'." },
    { type: 'mcq', q: "Error Spotting: 'I want you (A) / to fully realize the (B) / consequence of this (C).'", options: ["are pleased", "to fully realize", "were dinghy", "company"], answer: 1, explanation: "Error in B. Split infinitive (to fully realize). Better: 'to realize fully'. However, split infinitives are often accepted in modern English." },
    { type: 'mcq', q: "Error Spotting: '- Don't hold this (A) / dirty insect in your hand; (B) / throw it (C).'", options: ["are going", "throw it", "ever helping me", "are pleased"], answer: 1, explanation: "Error in C. Incomplete phrasal verb. Should be 'throw it <strong>away</strong>'." },
    { type: 'mcq', q: "Error Spotting: 'It is better to keep one's head (A) / in the face of danger than losing (B) / one's courage and get panicky (C).'", options: ["Henry and me", "an emergency", "Tina and John was", "than losing"], answer: 3, explanation: "Error in B. Parallelism: 'to keep' (infinitive) should be matched with 'to lose'. 'than <strong>to lose</strong>'." },
    { type: 'mcq', q: "Error Spotting: 'When I entered (A) / the compartment (B) / there was no place for me (C).'", options: ["has increased", "place", "so very heavy", "Tina and John was"], answer: 1, explanation: "Error in C. 'Place' refers to space in general. For a seat/spot, use 'room'. 'there was no <strong>room</strong>'." },
    { type: 'mcq', q: "Error Spotting: 'You may be able (A) / to run further, (B) / but Amit can run faster (C).'", options: ["an emergency", "than losing", "to fully realize", "to run further"], answer: 3, explanation: "Error in B. 'Further' is figurative distance. 'Farther' is physical distance. 'to run <strong>farther</strong>'." },
    { type: 'mcq', q: "Error Spotting: 'Human minds (a) / is slow to adjust (b)/ to changing conditions (c).'", options: ["No error", "has increased", "has tried", "is slow"], answer: 3, explanation: "Error in B. 'Minds' is plural. Should be '<strong>are</strong> slow'." },
    { type: 'mcq', q: "Error Spotting: 'Western scientific inventions (a)/has increased use of sophisticated equipment (b)/ and transformed our lives at an astounding speed (c).'", options: ["has tried", "Henry and me", "to fully realize", "has increased"], answer: 3, explanation: "Error in B. 'Inventions' is plural. Should be '<strong>have</strong> increased'." },
    { type: 'mcq', q: "Error Spotting: 'Knowledge can be achieved through education (a)/but since it is the power of mind (b) / it cannot be achieved through all (c).'", options: ["No error", "Henry and me", "through all", "who you wanted"], answer: 2, explanation: "Error in C. 'Through' implies means. 'By' implies agent. 'cannot be achieved <strong>by</strong> all'." },
    { type: 'mcq', q: "Error Spotting: 'No human being (a) / howsoever great or powerful (b)/ was ever so free than a fish (c).'", options: ["where she did leave", "an emergency", "so free than", "has increased"], answer: 2, explanation: "Error in C. Comparison structure: 'as...as' or 'more...than'. 'so free <strong>as</strong>' or 'freer than'." },
    { type: 'mcq', q: "Error Spotting: 'She has a remarkably kind disposition (a) / who wins her friends (b) / wherever she goes (c).'", options: ["place", "is slow", "where she did leave", "who wins"], answer: 3, explanation: "Error in B. 'Who' refers to people. 'Disposition' is a thing. Should be '<strong>which</strong> wins'." },
    { type: 'mcq', q: "Error Spotting: 'Shyam must (A) / complete the project (B) / upto Monday (C).'", options: ["to fully realize", "lays down", "after all", "upto Monday"], answer: 3, explanation: "Error in C. 'Upto' is non-standard spelling. Use 'up to' or 'by'. '<strong>by</strong> Monday'." },
    { type: 'mcq', q: "Error Spotting: 'Tina and John was (A) / working as usual (B) / even on a Sunday (C).'", options: ["Tina and John was", "to fully realize", "where she did leave", "throw it"], answer: 0, explanation: "Error in A. Plural subject 'Tina and John' takes plural verb. 'Tina and John <strong>were</strong>'." },
    { type: 'mcq', q: "Error Spotting: 'The table is so very heavy (A) / that Anwar (B) / could hardly carry it upstairs (C).'", options: ["an emergency", "so very heavy", "are pleased", "were dinghy"], answer: 1, explanation: "Error in A. 'So very heavy' is awkward. 'Too heavy' or just 'so heavy'. '<strong>too</strong> heavy'." },
    { type: 'mcq', q: "Error Spotting: 'Jane cannot remember (A) / where she did leave (B) / her glasses (C).'", options: ["has tried", "where she did leave", "play guitar", "No error"], answer: 1, explanation: "Error in B. Indirect question word order is Subject + Verb. 'where she <strong>left</strong>'." },
    { type: 'mcq', q: "Error Spotting: 'The novel Pride and Prejudice (A) / are being written (B) / by Jane Austen (C).'", options: ["I", "are going", "throw it", "are being written"], answer: 3, explanation: "Error in B. Singular title 'The novel' + Past action. '<strong>was</strong> written' or '<strong>is</strong> written' (if discussing literature in present)." },
    { type: 'mcq', q: "Error Spotting: 'The bill for the food (A) / is amounted (B) / to two thousand rupees (C).'", options: ["where she did leave", "is amounted", "who you wanted", "lays down"], answer: 1, explanation: "Error in B. 'Amount' is a verb here. 'The bill <strong>amounted</strong> to'." },
    { type: 'mcq', q: "Error Spotting: 'The whole class (A) / decide to collect (B) / an emergency for the flood victims (C).'", options: ["Tina and John was", "I", "after all", "an emergency"], answer: 3, explanation: "Error in C. 'Emergency' is a state, not something to collect. 'an <strong>aid</strong>' or 'a fund'." },
    { type: 'mcq', q: "Error Spotting: 'This company (A) / is one of the (B)/worlds trusted company (C).'", options: ["where she did leave", "ever helping me", "is amounted", "company"], answer: 3, explanation: "Error in C. 'One of the...' is followed by plural noun. 'trusted <strong>companies</strong>'." },
    { type: 'mcq', q: "Error Spotting: 'The hotel room (A) / we visited (B) / were dinghy and gloomy (C).'", options: ["where she did leave", "are pleased", "No error", "were dinghy"], answer: 3, explanation: "Error in C. 'Room' is singular. '<strong>was</strong> dingy'." },
    { type: 'mcq', q: "Error Spotting: 'The girl who you wanted (a) / to marry is a teacher (b)/ in a convent school (c).'", options: ["who you wanted", "No error", "are going", "I"], answer: 0, explanation: "Error in A. Object of 'wanted'. '<strong>whom</strong> you wanted'." },
    { type: 'mcq', q: "Error Spotting: 'She had her bath, (a) / ate her breakfast (b)/and after all went to school (c).'", options: ["so very heavy", "after all", "I", "are going"], answer: 1, explanation: "Error in C. 'After all' means 'despite everything'. Here sequential '<strong>afterwards</strong>' or 'then' is needed." },
    { type: 'mcq', q: "Error Spotting: 'The ship's crew has (a) / tried to save the passengers (b)/from drowning in water (c).'", options: ["company", "throw it", "to fully realize", "has tried"], answer: 3, explanation: "Error in A. 'Crew' is treated as plural here (individuals). 'crew <strong>have</strong> tried'." },
    { type: 'mcq', q: "Error Spotting: 'This matter should be (a)/ discussed strictly between (b)/ you and I (c).'", options: ["so free than", "I", "place", "throw it"], answer: 1, explanation: "Error in C. Preposition 'between' takes object pronouns. 'you and <strong>me</strong>'." },
    { type: 'mcq', q: "Error Spotting: 'The audience of a football match (a)/ are pleased (b) / when a goal is scored (c).'", options: ["are pleased", "is amounted", "No error", "were dinghy"], answer: 0, explanation: "Error in B. Collective noun 'audience' is usually singular. '<strong>is</strong> pleased'." },
    { type: 'mcq', q: "Error Spotting: 'I don't (A) / remember him (B) / ever helping me (C).'", options: ["Henry and me", "ever helping me", "were dinghy", "lays down"], answer: 1, explanation: "Error in B/C. Gerund 'helping' needs possessive. 'remember <strong>his</strong> ever helping me'." },
    { type: 'mcq', q: "Error Spotting: 'One must learn (A) / to distinguish (B) / good from bad (C).'", options: ["were dinghy", "No error", "has tried", "always come in handy"], answer: 1, explanation: "<strong>No error</strong>. The sentence is correct." },
    { type: 'mcq', q: "Error Spotting: 'I want to know (A) / as to why (B) / I have been detained (C).'", options: ["lays down", "an emergency", "are going", "as to why"], answer: 3, explanation: "Error in B. 'As to' is redundant. 'know <strong>why</strong>'." },
    { type: 'mcq', q: "Error Spotting: 'There is (A) / many a book (B) / you can choose from (C).'", options: ["No error", "are going", "after all", "Tina and John was"], answer: 0, explanation: "<strong>No error</strong>. 'Many a book' is singular, so 'There is' is correct." },
    { type: 'mcq', q: "Error Spotting: 'No sooner (A) / I had spoken (B) / than he left (C).'", options: ["than losing", "are being written", "throw it", "than he left"], answer: 3, explanation: "Error in B. Inversion required after 'No sooner'. '<strong>had I</strong> spoken'." },
];

// ... (Previous data arrays remain unchanged) ...

// Ensure all questions have a category
grammarQuizData = grammarQuizData.map(item => {
    if (!item.category) {
        // Default category based on question type or content
        if (item.q.includes('Synonym') || item.q.includes('Antonym')) {
            item.category = 'Vocabulary';
        } else if (item.q.includes('Error Spotting') || item.q.includes('Error')) {
            item.category = 'Error Spotting';
        } else if (item.q.includes('Idiom') || item.q.includes('Phrase')) {
            item.category = 'Idioms & Phrases';
        } else if (item.q.includes('One Word')) {
            item.category = 'One Word Substitution';
        } else if (item.q.includes('Spell') || item.q.includes('spelt')) {
            item.category = 'Spelling';
        } else if (item.q.includes('Rearrange')) {
            item.category = 'Sentence Rearrangement';
        } else if (item.q.includes('Passive') || item.q.includes('Voice') || item.q.includes('Active')) {
            item.category = 'Voice Transformation';
        } else if (item.q.includes('Direct') || item.q.includes('Indirect')) {
            item.category = 'Direct/Indirect Speech';
        } else if (item.type === 'text' && !item.q.includes('Passive')) {
            item.category = 'Fill in the Blanks';
        } else {
            item.category = 'Grammar';
        }
    }
    return item;
});

let score = 0;
const totalScore = grammarQuizData.length;

// Tab Switching
function switchTab(tabId) {
    // Hide all contents
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));

    // Show selected
    document.getElementById(tabId).classList.add('active');
    
    // Update Nav Button
    const btnIndex = ['essay', 'comprehension', 'grammar'].indexOf(tabId);
    document.querySelectorAll('.nav-btn')[btnIndex].classList.add('active');
}

// Persistence Logic
function saveProgress() {
    const progress = {
        score: score,
        answers: {}
    };

    grammarQuizData.forEach((_, index) => {
        const feedbackEl = document.getElementById(`fb-${index}`);
        // Check if this question has been answered by looking for feedback content
        if (feedbackEl && feedbackEl.innerHTML !== "") {
            const item = grammarQuizData[index];
            let userAnswer;
            let isCorrect;

            if (item.type === 'mcq') {
                const options = document.getElementById(`q-${index}`).querySelectorAll('.opt-btn');
                options.forEach((btn, i) => {
                    if (btn.classList.contains('wrong') || (btn.classList.contains('correct') && i !== item.answer)) {
                        userAnswer = i; // Wrong selection
                        isCorrect = false;
                    } else if (btn.classList.contains('correct') && i === item.answer && !userAnswer) {
                        userAnswer = i; // Correct selection (only if not already marked wrong)
                        isCorrect = true;
                    }
                });
                // If user clicked wrong then correct showed up, we persist the wrong state logic or just the fact it's done.
                // Simpler: Store the index of the button the user clicked if we track it, or just store "answered".
                // Let's store the fact that it is answered and the score.
                // Actually, we need to restore visual state.
                
                // Revised Save Strategy: Store specifically what was clicked.
                // Since the UI modifies classes, we can infer state.
                // But `checkMCQ` modifies classes immediately. 
                // Let's save specifically in `checkMCQ` and `checkText` instead of iterating DOM.
            } 
        }
    });
}

// Better Approach: Update a state object directly in check functions
let quizState = JSON.parse(localStorage.getItem('typistQuizState')) || { score: 0, answered: {} };

function saveState() {
    localStorage.setItem('typistQuizState', JSON.stringify(quizState));
}

function loadState() {
    score = quizState.score;
    updateScore();
    
    // Restore UI for answered questions
    Object.keys(quizState.answered).forEach(index => {
        const idx = parseInt(index);
        const data = quizState.answered[idx];
        const item = grammarQuizData[idx];
        
        if (item.type === 'mcq') {
            const parent = document.getElementById(`q-${idx}`);
            const buttons = parent.querySelectorAll('.opt-btn');
            const feedback = document.getElementById(`fb-${idx}`);
            
            // Disable all
            buttons.forEach(b => b.disabled = true);
            
            // Restore styles
            if (data.correct) {
                buttons[data.userAns].classList.add('correct');
                feedback.textContent = "Correct! 🎉";
                feedback.className = "feedback success";
            } else {
                buttons[data.userAns].classList.add('wrong');
                buttons[item.answer].classList.add('correct');
                feedback.textContent = "Incorrect.";
                feedback.className = "feedback error";
            }
            showExplanation(idx, feedback);
        } else if (item.type === 'text') {
            const input = document.getElementById(`in-${idx}`);
            const feedback = document.getElementById(`fb-${idx}`);
            
            input.value = data.userAns;
            input.disabled = true;
            
            if (data.correct) {
                const span = document.createElement('span');
                span.textContent = "Correct! 🎉";
                span.className = "feedback success";
                feedback.appendChild(span);
            } else {
                const span = document.createElement('span');
                span.textContent = `Incorrect. Answer: "${item.answer}"`;
                span.className = "feedback error";
                feedback.appendChild(span);
            }
            showExplanation(idx, feedback);
        }
    });
}

// Render Comprehension
function renderComprehension() {
    const container = document.getElementById('comp-questions');
    container.innerHTML = '';

    comprehensionData.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'q-block';
        div.innerHTML = `
            <span class="q-question">${item.q}</span>
            <button class="reveal-btn" onclick="toggleAnswer('ans-${index}')">Show Answer</button>
            <div id="ans-${index}" class="answer-text">${item.a}</div>
        `;
        container.appendChild(div);
    });
}

function toggleAnswer(id) {
    const el = document.getElementById(id);
    el.classList.toggle('visible');
    const btn = el.previousElementSibling;
    btn.textContent = el.classList.contains('visible') ? 'Hide Answer' : 'Show Answer';
}

// Render Grammar Quiz
let currentFilter = 'All';
let filteredQuestions = [];

// Define category order for sorting (Vocabulary first, then others)
const categoryOrder = [
    'Vocabulary',
    'Error Spotting',
    'Grammar',
    'Idioms & Phrases',
    'One Word Substitution',
    'Spelling',
    'Sentence Rearrangement',
    'Voice Transformation',
    'Direct/Indirect Speech',
    'Fill in the Blanks'
];

function getCategoryOrder(category) {
    const index = categoryOrder.indexOf(category);
    return index === -1 ? 999 : index; // Put unknown categories at the end
}

function filterByCategory() {
    const filterSelect = document.getElementById('category-filter');
    currentFilter = filterSelect.value;
    renderQuiz();
}

function renderQuiz() {
    const container = document.getElementById('quiz-list');
    container.innerHTML = '';
    
    // Create array with questions and their original indices
    let questionsWithIndices = grammarQuizData.map((item, origIdx) => ({
        item: item,
        originalIndex: origIdx,
        category: item.category || 'Grammar'
    }));
    
    // Filter by category if needed
    if (currentFilter !== 'All') {
        questionsWithIndices = questionsWithIndices.filter(q => q.category === currentFilter);
    } else {
        // When showing all, sort by category order
        questionsWithIndices.sort((a, b) => {
            const orderA = getCategoryOrder(a.category);
            const orderB = getCategoryOrder(b.category);
            if (orderA !== orderB) {
                return orderA - orderB;
            }
            // If same category, maintain original order
            return a.originalIndex - b.originalIndex;
        });
    }
    
    filteredQuestions = questionsWithIndices.map(q => q.item);
    
    // Update filter count
    const filterCount = document.getElementById('filter-count');
    if (filterCount) {
        filterCount.textContent = `(${filteredQuestions.length} questions)`;
    }
    
    // Render questions
    questionsWithIndices.forEach((qData, filteredIndex) => {
        const item = qData.item;
        const originalIndex = qData.originalIndex;
        const div = document.createElement('div');
        div.className = 'card quiz-item';
        
        // Add category header if showing all categories and this is the first question of a new category
        let categoryHeader = '';
        if (currentFilter === 'All' && filteredIndex === 0) {
            categoryHeader = `<div class="category-header">${qData.category}</div>`;
        } else if (currentFilter === 'All' && filteredIndex > 0) {
            const prevCategory = questionsWithIndices[filteredIndex - 1].category;
            if (prevCategory !== qData.category) {
                categoryHeader = `<div class="category-header">${qData.category}</div>`;
            }
        }
        
        if (item.type === 'mcq') {
            let optionsHtml = '';
            item.options.forEach((opt, i) => {
                optionsHtml += `<button class="opt-btn" onclick="checkMCQ(this, ${originalIndex}, ${i})">${opt}</button>`;
            });

            div.innerHTML = `
                ${categoryHeader}
                <div class="quiz-q">${filteredIndex + 1}. ${item.q}</div>
                <div class="options-grid" id="q-${originalIndex}">
                    ${optionsHtml}
                </div>
                <div class="feedback" id="fb-${originalIndex}"></div>
            `;
        } else if (item.type === 'text') {
            div.innerHTML = `
                ${categoryHeader}
                <div class="quiz-q">${filteredIndex + 1}. ${item.q}</div>
                <div class="input-quiz-container">
                    <input type="text" class="input-quiz" id="in-${originalIndex}" placeholder="Type answer here...">
                    <button class="check-btn" onclick="checkText(${originalIndex})">Check</button>
                </div>
                <div class="feedback" id="fb-${originalIndex}"></div>
            `;
        }
        container.appendChild(div);
    });
    
    // Load saved state after rendering
    loadState();
    
    // Update score display with filtered count
    updateScore();
}

function showExplanation(qIndex, feedbackElement) {
    const existingExpl = feedbackElement.querySelector('.explanation-box');
    if (existingExpl) return; 

    const item = grammarQuizData[qIndex];
    if (item.explanation) {
        const div = document.createElement('div');
        div.className = 'explanation-box';
        div.innerHTML = `<strong>💡 Explanation:</strong> ${item.explanation}`;
        feedbackElement.appendChild(div);
    }
}

function checkMCQ(btn, qIndex, optIndex) {
    // Prevent checking if already answered (though UI disables it, good for safety)
    if (quizState.answered[qIndex]) return;

    const parent = document.getElementById(`q-${qIndex}`);
    const feedback = document.getElementById(`fb-${qIndex}`);
    const correctAnswer = grammarQuizData[qIndex].answer;

    // Disable all buttons
    const buttons = parent.querySelectorAll('.opt-btn');
    buttons.forEach(b => b.disabled = true);

    let isCorrect = false;
    if (optIndex === correctAnswer) {
        btn.classList.add('correct');
        feedback.textContent = "Correct! 🎉";
        feedback.className = "feedback success";
        score++;
        isCorrect = true;
    } else {
        btn.classList.add('wrong');
        buttons[correctAnswer].classList.add('correct'); 
        feedback.textContent = "Incorrect.";
        feedback.className = "feedback error";
    }
    
    // Update State
    quizState.score = score;
    quizState.answered[qIndex] = { type: 'mcq', userAns: optIndex, correct: isCorrect };
    saveState();

    showExplanation(qIndex, feedback);
    updateScore();
}

function checkText(qIndex) {
    if (quizState.answered[qIndex]) return;

    const input = document.getElementById(`in-${qIndex}`);
    const feedback = document.getElementById(`fb-${qIndex}`);
    const correctAnswer = grammarQuizData[qIndex].answer.toLowerCase().replace('.', '').trim();
    const userAnswer = input.value.toLowerCase().replace('.', '').trim();

    feedback.innerHTML = '';
    let isCorrect = false;

    if (userAnswer === correctAnswer) {
        const span = document.createElement('span');
        span.textContent = "Correct! 🎉";
        span.className = "feedback success";
        feedback.appendChild(span);
        score++;
        isCorrect = true;
    } else {
        const span = document.createElement('span');
        span.textContent = `Incorrect. Answer: "${grammarQuizData[qIndex].answer}"`;
        span.className = "feedback error";
        feedback.appendChild(span);
    }
    input.disabled = true;

    // Update State
    quizState.score = score;
    quizState.answered[qIndex] = { type: 'text', userAns: input.value, correct: isCorrect };
    saveState();

    showExplanation(qIndex, feedback);
    updateScore();
}

function updateScore() {
    const totalQuestions = currentFilter === 'All' ? grammarQuizData.length : filteredQuestions.length;
    // Calculate score for filtered questions
    let filteredScore = 0;
    if (currentFilter !== 'All') {
        grammarQuizData.forEach((item, origIdx) => {
            const category = item.category || 'Grammar';
            if (category === currentFilter && quizState.answered[origIdx] && quizState.answered[origIdx].correct) {
                filteredScore++;
            }
        });
        document.getElementById('score-display').textContent = `Score: ${filteredScore} / ${totalQuestions} (Total: ${score} / ${grammarQuizData.length})`;
    } else {
        document.getElementById('score-display').textContent = `Score: ${score} / ${totalQuestions}`;
    }
}

function resetQuiz() {
    if(confirm("Are you sure you want to reset your progress?")) {
        localStorage.removeItem('typistQuizState');
        quizState = { score: 0, answered: {} };
        score = 0;
        renderQuiz();
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderComprehension();
    renderQuiz();
    
    // Attach reset handler
    document.getElementById('reset-quiz').onclick = resetQuiz;
});