# PollyGlot

A simple web application for translating English text to French, Spanish, or Japanese using OpenAI's GPT-4o model.

## Features

- Translate English text to multiple languages: French, Spanish, Japanese
- Powered by OpenAI's advanced language model for accurate translations
- User-friendly interface with radio buttons for language selection
- Error handling for missing input or API issues
- Reset functionality to start a new translation

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/pollyglot.git
   cd pollyglot
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your OpenAI API key:
   ```
   VITE_OPENAI_API_KEY=your_openai_api_key_here
   ```

## Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

3. Enter the text you want to translate in the textarea.

4. Select the target language (French, Spanish, or Japanese).

5. Click the "Translate" button.

6. View the translated text and original text side by side.

7. Use the "Reset" button to start a new translation.

## Build

To build the project for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript (ES6 Modules)
- **Build Tool**: Vite
- **AI Service**: OpenAI API (GPT-4o model)
- **Styling**: Custom CSS

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License
