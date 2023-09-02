function test(err: string) {
    if (err) { throw err; }
    if (Math.random() > 0.5) {
        return false;
    }
}
test("text");
