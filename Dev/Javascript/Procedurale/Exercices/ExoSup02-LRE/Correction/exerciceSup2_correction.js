function LRE(s) {
    var result = "";
    var current_char = s.charAt(0);
    var count = 1;

    // count = 11
    // current_char = W
    //result = 12W1B14W3B23W1B11W

    for (var i = 1; i < s.length; i++) {
        if (current_char != s.charAt(i)) {
            result += count;
            result += current_char;
            current_char = s.charAt(i);
            count = 0;
        }

        count++;
    }

    result += count;

    result += current_char;

    return result;

}


var s = "WWWWWWWWWWWWBWWWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWW";
var compressed_string = LRE(s); //12W1B14W3B23W1B11W

document.write("<p>string d'origine : " + s + "</p>");
document.write("<p>string compressee : " + compressed_string + "</p>");
