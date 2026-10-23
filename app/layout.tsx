import type { Metadata, Viewport } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'AI Practice Studio · NPTEL', description: 'Practice all 120 NPTEL Artificial Intelligence: Concepts and Techniques questions. Choose a week, mix your own quiz, and learn at your pace.' };
export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#f8f9f5' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
