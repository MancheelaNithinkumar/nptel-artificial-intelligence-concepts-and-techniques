import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'HCI Practice Studio · NPTEL', description: 'Practice all 120 NPTEL HCI questions. Choose a week, mix your own quiz, and learn at your pace.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
