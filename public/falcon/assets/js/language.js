(function () {
  const languages = [
    "English", "Hindi", "Bengali", "Tamil", "Telugu", "Marathi", "Gujarati", "Kannada", "Malayalam", "Punjabi",
    "Urdu", "Assamese", "Odia", "Sanskrit", "Nepali", "French", "Spanish", "German", "Italian", "Portuguese",
    "Dutch", "Swedish", "Norwegian", "Danish", "Finnish", "Polish", "Czech", "Slovak", "Hungarian", "Romanian",
    "Bulgarian", "Greek", "Turkish", "Russian", "Ukrainian", "Arabic", "Hebrew", "Persian", "Pashto", "Kurdish",
    "Chinese Simplified", "Chinese Traditional", "Japanese", "Korean", "Thai", "Vietnamese", "Indonesian", "Malay", "Filipino", "Khmer",
    "Lao", "Burmese", "Sinhala", "Mongolian", "Kazakh", "Uzbek", "Azerbaijani", "Georgian", "Armenian", "Albanian",
    "Serbian", "Croatian", "Bosnian", "Slovenian", "Macedonian", "Lithuanian", "Latvian", "Estonian", "Icelandic", "Irish",
    "Welsh", "Basque", "Catalan", "Galician", "Afrikaans", "Swahili", "Zulu", "Xhosa", "Yoruba", "Igbo",
    "Hausa", "Amharic", "Somali", "Tigrinya", "Kinyarwanda", "Shona", "Sesotho", "Malagasy", "Maori", "Samoan",
    "Tongan", "Fijian", "Hawaiian", "Haitian Creole", "Jamaican Patois", "Quechua", "Aymara", "Guarani", "Nahuatl", "Mayan",
    "Esperanto", "Latin", "Luxembourgish", "Maltese", "Belarusian", "Moldovan", "Tajik", "Turkmen", "Kyrgyz", "Uyghur",
    "Tibetan", "Dzongkha", "Bodo", "Dogri", "Kashmiri", "Konkani", "Maithili", "Manipuri", "Santali", "Sindhi",
    "Bhojpuri", "Rajasthani", "Haryanvi", "Awadhi", "Chhattisgarhi", "Magahi", "Tulu", "Kodava", "Mizo", "Khasi",
    "Garo", "Naga", "Lepcha", "Limbu", "Balinese", "Javanese", "Sundanese", "Acehnese", "Minangkabau", "Madurese"
  ];
  const list = document.getElementById("language-list");
  if (list) list.innerHTML = languages.map((language) => `<option value="${language}"></option>`).join("");
  window.FalconLanguages = { languages };
})();
