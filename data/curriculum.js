// data/curriculum.js

/**
 * مصدر البيانات المحلي لمنهاج المنصة التعليمية
 * يحتوي على 4 مواد، كل مادة بها مستوى واحد، وكل مستوى به 10 دروس، وكل درس به 5 أسئلة.
 */
export const curriculum = [
  // 1. 📖 اللغة العربية
  {
    subjectId: "arabic",
    name_ar: "اللغة العربية",
    icon: "📖",
    levels: [
      {
        levelId: "ar_level_1",
        name_ar: "المستوى الأول: القراءة والكتابة",
        lessons: generateLessons("ar", 10),
      },
    ],
  },
  
  // 2. 🅰️ اللغة الإنجليزية
  {
    subjectId: "english",
    name_ar: "اللغة الإنجليزية",
    icon: "🅰️",
    levels: [
      {
        levelId: "en_level_1",
        name_ar: "المستوى الأول: المفردات والجمل البسيطة",
        lessons: generateLessons("en", 10),
      },
    ],
  },
  
  // 3. ➕ الرياضيات
  {
    subjectId: "math",
    name_ar: "الرياضيات",
    icon: "➕",
    levels: [
      {
        levelId: "math_level_1",
        name_ar: "المستوى الأول: الأرقام والعمليات الأساسية",
        lessons: generateLessons("math", 10),
      },
    ],
  },
  
  // 4. 💻 المنطق والبرمجة
  {
    subjectId: "logic_code",
    name_ar: "المنطق والبرمجة",
    icon: "💻",
    levels: [
      {
        levelId: "logic_level_1",
        name_ar: "المستوى الأول: الخوارزميات والتحكم",
        lessons: generateLessons("logic", 10),
      },
    ],
  },
];

// ----------------------------------------------------------------------
// دالة مساعدة لإنشاء البيانات (يجب إبقاؤها في نفس الملف)
// ----------------------------------------------------------------------

function generateQuiz(subjectPrefix, lessonNumber) {
    const quizzes = [];
    const baseQuestion = `سؤال ${lessonNumber} ${subjectPrefix}`;
    
    // السؤال 1: اختيار من متعدد (MCQ)
    quizzes.push({
        type: "MCQ",
        question_ar: `${baseQuestion} (1): ما هو المفهوم الرئيسي لهذا الدرس؟`,
        options_ar: ["خيار صحيح", "خيار خاطئ أ", "خيار خاطئ ب"],
        correct_ar: "خيار صحيح"
    });

    // السؤال 2: صح/خطأ (True/False)
    quizzes.push({
        type: "True/False",
        question_ar: `${baseQuestion} (2): هل هذه العبارة صحيحة دائمًا؟`,
        correct_ar: "صحيح"
    });

    // السؤال 3: ملء الفراغ (FillInTheBlank)
    quizzes.push({
        type: "FillInTheBlank",
        question_ar: `أكمل الجملة: مفتاح الحل هو ____ في البرمجة.`,
        correct_ar: "المنطق"
    });
    
    // السؤال 4: اختيار من متعدد (MCQ)
    quizzes.push({
        type: "MCQ",
        question_ar: `${baseQuestion} (4): أي من التالي هو الأفضل؟`,
        options_ar: ["أ", "ب", "ج"],
        correct_ar: "أ"
    });

    // السؤال 5: صح/خطأ (True/False)
    quizzes.push({
        type: "True/False",
        question_ar: `${baseQuestion} (5): هل العملية معقدة؟`,
        correct_ar: "خطأ"
    });

    return quizzes;
}

function generateLessons(subjectPrefix, count) {
    const lessons = [];
    for (let i = 1; i <= count; i++) {
        lessons.push({
            lessonId: `${subjectPrefix}_l${i}`,
            title_ar: `الدرس ${i}: مفهوم ${subjectPrefix.toUpperCase()} الأساسي`,
            content_ar: `هذا هو المحتوى المفصل للدرس رقم ${i} في مادة ${subjectPrefix.toUpperCase()}. يغطي هذا الدرس جميع الجوانب النظرية والعملية للموضوع.`,
            order: i,
            quiz: generateQuiz(subjectPrefix, i) // إضافة 5 أسئلة
        });
    }
    return lessons;
}
 
