const calc = require('./index');

test( 'if tariff !== 1 || !== 2 return -1 v1', () => {
    const expectation = -1;

    const result = calc(3, 1,1,1,1,1, 1);

    expect(result).toBe(expectation);
})

test( 'if tariff !== 1 || !== 2 return -1 v2', () => {
    const expectation = -1;

    const result = calc(-1, 1,1,1,1,1, 1);

    expect(result).toBe(expectation);
})

test('if tariff === 1 variables t, k, a, b should not be less then 0', ()=> {
    const expectation = -1;

    const result = calc(1, 0,0,0,0,0, 0);

    expect(result).toBe(expectation);
})

test('if tariff === 2 variables t, k, c, d should not be less then 0', ()=> {
    const expectation = -1;

    const result = calc(2, 0,0,0,0,0, 0);

    expect(result).toBe(expectation);
})

test('if tariff === 1 and t <= K should return A', ()=> {
    const expectation = 234;

    const result = calc(1, 1,100,234, 1,0, 0);

    expect(result).toBe(expectation);
})

test('if tariff === 1 and t > K should return (A + (t-k) * B)', ()=> {
    const expectation = 235;

    const result = calc(1, 101,100,234, 1,0, 0);

    expect(result).toBe(expectation);
})

test('if tariff === 2 and t <= K should return C * t', ()=> {
    const expectation = 100;

    const result = calc(2, 100,100,0, 0,1, 1);

    expect(result).toBe(expectation);
})

test('if tariff === 2 and t >= K should return D * t', ()=> {
    const expectation = 202;

    const result = calc(2, 101,100,0, 0,1, 2);

    expect(result).toBe(expectation);
})