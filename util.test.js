const { generateText  , validateInput  } = require('./util');

test('should output name and age', ()=>{
    const text = generateText('Mesba', 24);
    expect(text).toBe('Mesba (24 years old)');
    const text2 = generateText('bla', undefined);
    expect(text2).toBe('bla (undefined years old)')
})

test('testing generateText', ()=>{
    const text3 =generateText(undefined, 21);
    expect(text3).toBe('undefined (21 years old)')
})

test('validate input', ()=>{
    const valid = validateInput('ok', true, true);
    expect(valid).toBe(true);
})