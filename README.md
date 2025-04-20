This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Portfolio Chatbot

This portfolio includes an AI-powered chatbot that uses Retrieval Augmented Generation (RAG) to answer questions about Zaheer Ahmed's skills, experience, and professional background. The chatbot is built with:

- Next.js API Routes
- LangChain.js v0.3
- OpenAI API
- Streaming responses

### Setup

1. Make sure you have a valid OpenAI API key. You can get one from [OpenAI's platform](https://platform.openai.com/).

2. Update the `.env.local` file in the root directory with your API key:

```
OPENAI_API_KEY=your_api_key_here
```

3. Install the required dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open the site in your browser, and the chatbot will be available in the bottom right corner.

### How It Works

The chatbot uses a RAG (Retrieval Augmented Generation) system to provide accurate answers about Zaheer's background:

1. Zaheer's CV is processed and split into chunks
2. These chunks are embedded using OpenAI's embedding models
3. When a user asks a question, the system:
   - Retrieves the most relevant chunks from the CV
   - Passes those chunks as context to the LLM
   - Streams the generated response back to the UI

This approach ensures that the chatbot only provides information that's actually in Zaheer's CV rather than making up details.
