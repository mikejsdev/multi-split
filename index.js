const multiSplit = (s, separators) => {
    const charactersToBeEscaped = ['.', '^', '$', '*', '+', '-', '?', '(', ')', '[', ']', '{', '}', '\\', '|'];

    const escapedSeperators = separators.map(s => {
        if (charactersToBeEscaped.includes(s)) {
            return `\\${s}`
        }
        return s;
    });

    const joined = escapedSeperators.join('|');
    const reg = new RegExp(joined, 'g');
    const tokens = s.split(reg);
    return tokens;
};

module.exports = multiSplit;