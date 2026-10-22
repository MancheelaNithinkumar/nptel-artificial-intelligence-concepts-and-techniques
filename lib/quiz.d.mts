export function shuffle<T>(items: T[], random?: () => number): T[];
export function buildQuiz<T extends { week: number }>(bank: T[], counts: Record<number, number>, randomize?: boolean): T[];
export function isCorrect(selected: string[], answers: string[]): boolean;
