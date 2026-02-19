export const decode = (arr) => {
    return arr.map((c) => String.fromCharCode(c)).join('');
}