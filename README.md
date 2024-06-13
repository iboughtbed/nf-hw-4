# [OLX](https://iboughtbed-nf-hw-4.vercel.app/)

This is an open source todo app build with everything new in Next.js 14. It is bootstrapped with `create-t3-app`.

[![OLX](./public/og.png)](https://iboughtbed-nf-hw-4.vercel.app/)

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com)

## Features to be implemented

NOTE: I'm just using a different name for my query files

- [x] Fetch all products using React Query
- [x] Create axios instance and service for handling requests related to '/products' (queries.ts and actions.ts)
- [x] Implement product creation page

- [x] Add file uploading to product creationg page
- [x] Add invlidateQuery on product creation

- [x] Add multiple files uploading

## Running Locally

1. Clone the repository

   ```bash
   git clone https://github.com/iboughtbed/nf-hw-4.git
   ```

2. Install dependencies using pnpm

   ```bash
   pnpm install
   ```

3. Copy the `.env.example` to `.env` and update the variables.

   ```bash
   cp .env.example .env
   ```

4. Start the development server

   ```bash
   pnpm run dev
   ```

## Introduction

This is nFactorial Incubator homework for day 4

## License

Licensed under the MIT License. Check the [LICENSE](./LICENSE.md) file for details.
