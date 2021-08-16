// Write a function that divides a phrase into word buckets, with each bucket containing n or fewer characters. Only include full words inside each bucket.

// Examples
// bucketize("she sells sea shells by the sea", 10)
// ➞ ["she sells", "sea shells", "by the sea"]

// bucketize("the mouse jumped over the cheese", 7)
// ➞ ["the", "mouse", "jumped", "over", "the", "cheese"]

// bucketize("fairy dust coated the air", 20)
// ➞ ["fairy dust coated", "the air"]

// bucketize("a b c d e", 2)
// ➞ ["a", "b", "c", "d", "e"]

// Notes
// Spaces count as one character.
// Trim beginning and end spaces for each word bucket (see final example).
// If buckets are too small to hold a single word, return an empty array: []
// The final goal isn't to return just the words with a length equal (or lower) to the given n, but to return the entire given phrase bucketized (if possible). So, for the specific case of "by" the only word with a proper length, the phrase can't be bucketized, and the returned array has to be empty.

let bucketize = function (s1, n) {
    let n1 = s1.length / n;
    let s2 = [];
    let temp = [];
    let count = 0;
    let lastSpace = 0
    // for (let i = 0; i <= n1; i++) {
    //     for (let j = 0; j <= n; j++) {
    //         temp.push(s1)
    //     }

    // }
    // s2 = s1.split(' ');
    console.log(s1);
    for (let i = 0; i <= s1.length - 1; i++) {
        if (s1[i] == ' ') {
            lastSpace = i;
            console.log('test')
        }
        console.log(lastSpace)
        console.log(i);
        temp.push(s1[i]);
        count++;
        if (count == n) {
            if ((s1[i] == ' ')) {
                s2.push(temp.join('').trim());
                console.log(s2);
                temp = [];
                i = lastSpace;
                count = 0;
            } else if ((s1[i + 1] == ' ')) {
                s2.push(temp.join(''));
                console.log(s2);
                temp = [];
                count = 0;
                i++;
            } else if ((i == s1.length - 1)) {
                s2.push(temp.join(''));
                console.log(s2);
                return s2;
            }
            else {
                console.log(temp);
                console.log(temp.slice(0, temp.indexOf(' ')));
                s2.push(temp.slice(0, temp.indexOf(' ')).join('').trim());
                console.log(temp);
                console.log(lastSpace);
                // console.log(i);
                temp = [];
                i = lastSpace;
                count = 0;
            }
        }
        if (i == s1.length - 1) {
            s2.push(temp.join('').trim());
        }
    }
    console.log(temp);
    console.log(s2);
    console.log(s2.toString());
    return s2;
}
bucketize("she sells sea shells by the sea", 10)

// bucketize("the mouse jumped over the cheese", 7)
// ➞ ["the", "mouse", "jumped", "over", "the", "cheese"]

// bucketize("fairy dust coated the air", 20)
// ➞ ["fairy dust coated", "the air"]

// bucketize("a b c d e", 2)
// ➞ ["a", "b", "c", "d", "e"]
// ➞ ["she sells", "sea shells", "by the sea"]
