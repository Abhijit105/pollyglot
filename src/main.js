import OpenAI from "openai";

console.log(import.meta.env.VITE_OPENAI_API_KEY);
const openai = new OpenAI({
  dangerouslyAllowBrowser: true,
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

const translateContainerEl = document.querySelector(".translate-container");
const translatedContainerEl = document.querySelector(".translated-container");
const translateBtn = document.getElementById("translate-btn");
const textareaEl = document.querySelector(".textarea");
const frenchRadioBtn = document.getElementById("french");
const spanishRadioBtn = document.getElementById("spanish");
const japaneseRadioBtn = document.getElementById("japanese");
const originalTextEl = document.getElementById("original-text");
const translatedTextEl = document.getElementById("translated-text");
const resetBtn = document.getElementById("reset-btn");
const errorMessageEl = document.querySelector(".error-message");

translateBtn?.addEventListener("click", async () => {
  const textToTranslate = textareaEl.value;
  if (!textToTranslate) {
    errorMessageEl.textContent = "Please enter some text.";
    errorMessageEl.classList.remove("hide");
    return;
  }
  let selectedLanguage = "";
  if (frenchRadioBtn.checked) {
    selectedLanguage = frenchRadioBtn.value;
  } else if (spanishRadioBtn.checked) {
    selectedLanguage = spanishRadioBtn.value;
  } else if (japaneseRadioBtn.checked) {
    selectedLanguage = japaneseRadioBtn.value;
  } else {
    errorMessageEl.textContent =
      "Please enter a language the text has to be translated into.";
    errorMessageEl.classList.remove("hide");
    return;
  }

  errorMessageEl.classList.add("hide");
  await translate(textToTranslate, selectedLanguage);
});

async function translate(text, targetLanguage) {
  const messages = [
    {
      role: "system",
      content:
        "You are a language expert having a grasp of many languages and can translate one language to another.",
    },
    {
      role: "user",
      content: `Translate ${text} from English to ${targetLanguage} language. Provided only the translated text in the answer, don't provide any additional content. Make any corrections in the text if the text has any errors common human errors like spelling mistakes or small grammatical errors.`,
    },
  ];

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: messages,
      temperature: 0.4,
    });
    const translatedText = response.choices[0].message.content;

    renderTranslatedText(text, translatedText);
  } catch (error) {
    errorMessageEl.textContent = error.message;
    errorMessageEl.classList.remove("hide");
    console.error("Error retrieving translated text", error);
  }
}

function renderTranslatedText(originalText, translatedText) {
  translateContainerEl.classList.add("hide");
  translatedContainerEl.classList.remove("hide");
  originalTextEl.innerText = originalText;
  translatedTextEl.innerText = translatedText;
}

resetBtn?.addEventListener("click", () => {
  originalTextEl.innerText = "";
  translatedTextEl.innerText = "";
  textareaEl.value = "";
  frenchRadioBtn.checked = true;
  translateContainerEl.classList.remove("hide");
  translatedContainerEl.classList.add("hide");
});
