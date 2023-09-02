function hundellError(err: Error) {
    if (err) { throw err; }
    console.log(err);
    if (Math.random() > 0.5) {
        return false;
    }
}
function cb(err: Error) {
    hundellError(err);
}
