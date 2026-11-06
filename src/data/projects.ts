/**
 * ─────────────────────────────────────────────────────────────
 *  PROJECTS
 * ─────────────────────────────────────────────────────────────
 *  To add a new project:
 *   1. Put a screenshot in `public/img/projects/` (JPG ~1400px wide is ideal).
 *   2. Copy one of the objects below, paste it into the array and edit it.
 *  Projects are shown in the same order as this array.
 *  `featured: true` makes the card take the full width (good for your best work).
 */

export interface Project {
  /** Unique identifier (lowercase, no spaces) */
  id: string;
  title: string;
  description: string;
  /** Short list of highlights shown as bullet points */
  highlights: string[];
  /** Technologies shown as tags */
  tags: string[];
  /** Path inside /public (e.g. 'img/projects/my-app.jpg') */
  image: string;
  /** Live site URL */
  demoUrl?: string;
  /** Repository URL */
  repoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'my-expenses',
    title: 'My Expenses',
    description:
      'Personal finance web app to track expenses by wallet, card and cash, in Costa Rican colones. Every visitor gets their own private data stored in the browser, with no sign-up required.',
    highlights: [
      'Create, edit and delete wallets, cards and a cash account',
      'Log expenses and deposits with a color-coded history and filters',
      'Validation that prevents negative balances',
      'Data persisted privately with localStorage',
      'Automatic deployment to GitHub Pages with GitHub Actions',
    ],
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'localStorage'],
    image: 'img/projects/my-expenses.jpg',
    demoUrl: 'https://jose0305rm.github.io/My_Expenses/',
    repoUrl: 'https://github.com/jose0305rm/My_Expenses',
    featured: true,
  },
  {
    id: 'ontask',
    title: 'OnTask',
    description:
      'Project and task manager to create projects, organize their tasks and track the progress of each one on a board grouped by status. Works entirely in the browser, with no backend required.',
    highlights: [
      'Create, edit and delete projects and their tasks',
      'Task board with five statuses: pending, on hold, in progress, under review and completed',
      'Form validation with React Hook Form and Zod',
      'Server-state handling with TanStack Query over localStorage',
      'Hash-based routing for static hosting, deployed with GitHub Actions',
    ],
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'TanStack Query', 'React Router', 'Zod'],
    image: 'img/projects/ontask.jpg',
    demoUrl: 'https://jose0305rm.github.io/On_Task/',
    repoUrl: 'https://github.com/jose0305rm/On_Task',
    featured: true,
  },
  {
    id: 'cotizador-prestamos',
    title: 'Loan Quoter',
    description:
      'Loan calculator that instantly shows the total to pay, the interest and the monthly payment for a chosen amount and term. Supports an automatic rate or a custom interest rate defined by the user.',
    highlights: [
      'Pick the amount with a slider or +/- buttons and choose the payment term',
      'Automatic mode: the rate adjusts to the amount requested and the term',
      'Custom mode: annual, monthly or total rate with simple or fixed-payment (French) amortization',
      'Totals derived from state, recalculated instantly on every change',
      'Automatic deployment to GitHub Pages with GitHub Actions',
    ],
    tags: ['React', 'JavaScript', 'Vite', 'Tailwind CSS'],
    image: 'img/projects/cotizador-prestamos.png',
    demoUrl: 'https://jose0305rm.github.io/-loan_calculator/',
    repoUrl: 'https://github.com/jose0305rm/-loan_calculator',
    featured: true,
  },

  // {
  //   id: 'next-project',
  //   title: 'Next Project',
  //   description: 'What it does and why it is interesting.',
  //   highlights: ['Feature one', 'Feature two'],
  //   tags: ['React', 'TypeScript'],
  //   image: 'img/projects/next-project.jpg',
  //   demoUrl: 'https://jose0305rm.github.io/next-project/',
  //   repoUrl: 'https://github.com/jose0305rm/next-project',
  // },
];
