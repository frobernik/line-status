## Getting Started

First, cd into the project and install the node dependencies:

```bash
npm i
```

Next run the project in dev mode:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your preferred browser to see the output.

## Assumptions made

I've assumed that `statusSeverityDescription` is the key I can use to filter good services from disrupted services.

## Keys

These are in the code and imported as Node environment variables `process.env.APP_ID` and `process.env.APP_KEY` respectively from the `.env` file.
