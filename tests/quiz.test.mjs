import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { buildQuiz, isCorrect, shuffle } from '../lib/quiz.mjs';
const bank = JSON.parse(readFileSync(new URL('../lib/questions.json',import.meta.url),'utf8'));
test('all 12 weeks retain 10 valid questions and original answer options',()=>{
  assert.equal(bank.length,120);assert.equal(new Set(bank.map(q=>q.id)).size,120);
  for(let week=1;week<=12;week++) assert.equal(bank.filter(q=>q.week===week).length,10);
  for(const q of bank){assert.ok(q.text);assert.ok(q.options.length>=2);assert.ok(q.answers.length>=1);for(const a of q.answers)assert.ok(q.options.some(o=>o.id===a));assert.ok(!JSON.stringify(q).includes('CORRECT'));}
  assert.equal(bank.filter(q=>q.answers.length>1).length,0);
});
test('custom mix includes exactly one Week 1 and four Week 4 questions',()=>{
  const result=buildQuiz(bank,{1:1,4:4});assert.equal(result.length,5);assert.equal(result.filter(q=>q.week===1).length,1);assert.equal(result.filter(q=>q.week===4).length,4);assert.equal(new Set(result.map(q=>q.id)).size,5);
});
test('all-week merge includes every question once; invalid counts are bounded',()=>{
  assert.equal(buildQuiz(bank,Object.fromEntries(Array.from({length:12},(_,i)=>[i+1,10]))).length,120);
  assert.equal(buildQuiz(bank,{1:50,2:-1,3:0}).length,10);
  assert.equal(buildQuiz(bank,{}).length,0);
});
test('multiple answers require the entire correct set without extras',()=>{
  assert.equal(isCorrect(['C','A'],['A','C']),true);assert.equal(isCorrect(['A'],['A','C']),false);assert.equal(isCorrect(['A','B','C'],['A','C']),false);assert.equal(isCorrect([],['A']),false);
});
test('source order is preserved with shuffle off; shuffle never mutates source',()=>{
  assert.deepEqual(buildQuiz(bank,{1:3},false).map(q=>q.number),[1,2,3]);const a=[1,2,3];assert.deepEqual(shuffle(a,()=>0),[2,3,1]);assert.deepEqual(a,[1,2,3]);
});
