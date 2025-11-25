// data/curriculum.js
// هذا الملف يحتوي على بيانات المنهج، وهو مصدر البيانات المحلي للتطبيق.

export const curriculum = [
  // المادة 1: اللغة العربية
  {
    subjectId: "arabic",
    name_ar: "اللغة العربية",
    icon: "📖",
    levels: [
      {
        levelId: "basics_ar",
        name_ar: "المستوى 1: أساسيات الحروف",
        lessons: [
          {
            lessonId: "ar_l1",
            title_ar: "نطق وكتابة الحروف الأبجدية",
            content_ar: "نتعلم نطق وكتابة الحروف من الألف إلى الياء.",
            order: 1,
            quiz: [{ type: "MCQ", question_ar: "ما هو الحرف الأول؟", options_ar: ["ب", "أ", "ت"], correct_ar: "أ" }],
          },
        ],
      },
      {
        levelId: "sentences_ar",
        name_ar: "المستوى 2: بناء الجملة",
        lessons: [{ title_ar: "المبتدأ والخبر", content_ar: "الجملة الاسمية تبدأ باسم.", order: 1, quiz: [] }],
      },
    ],
  },

  // المادة 2: الرياضيات
  {
    subjectId: "math",
    name_ar: "الرياضيات",
    icon: "➕",
    levels: [
      {
        levelId: "numbers_math",
        name_ar: "المستوى 1: العد والأرقام",
        lessons: [
          {
            lessonId: "math_l1",
            title_ar: "الأرقام من 1 إلى 10",
            content_ar: "نتعلم كيفية كتابة وقراءة الأرقام.",
            order: 1,
            quiz: [{ type: "True/False", question_ar: "ناتج جمع 1 + 1 هو 2.", correct_ar: "صحيح" }],
          },
        ],
      },
    ],
  },
  
  // المادة 3: الإنجليزية
  {
    subjectId: "english",
    name_ar: "اللغة الإنجليزية",
    icon: "🅰️",
    levels: [
      {
        levelId: "alphabet_en",
        name_ar: "المستوى 1: الحروف والأصوات",
        lessons: [{ lessonId: "en_l1", title_ar: "تعلم نطق الحروف", content_ar: "The letter 'A' sounds like 'a' in 'apple'.", order: 1, quiz: [] }],
      },
    ],
  },
];
