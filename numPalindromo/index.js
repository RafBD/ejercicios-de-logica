function isPalindrome (x) {

    if (x < 0) return false;

    let invertido = 0;
    let original = x;

    while (x > 0) {
        invertido = (invertido * 10) + (x % 10);
        x = Math.floor(x / 10);
    }

    return original === invertido;
}