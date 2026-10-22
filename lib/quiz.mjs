export function shuffle(items, random = Math.random) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
export function buildQuiz(bank, counts, randomize = true) {
  const picked = Object.entries(counts).flatMap(([week, count]) => {
    const pool = bank.filter(q => q.week === Number(week));
    const n = Math.min(pool.length, Math.max(0, Math.floor(Number(count) || 0)));
    return (randomize ? shuffle(pool) : pool).slice(0, n);
  });
  return randomize ? shuffle(picked) : picked;
}
export function isCorrect(selected, answers) {
  return selected.length === answers.length && answers.every(a => selected.includes(a));
}
