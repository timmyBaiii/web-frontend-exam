const add = (a, b) => {
    return a + b;
};

test("test add function", () => {
    expect(add(5, 2)).toBe(7);
});
