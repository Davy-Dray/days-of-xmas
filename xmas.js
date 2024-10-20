function getLyrics() {
    const gifts = [
        "a Partridge in a Pear Tree",
        "Two Turtle Doves",
        "Three French Hens",
        "Four Calling Birds",
        "Five Gold Rings",
        "Six Geese-a-Laying",
        "Seven Swans-a-Swimming",
        "Eight Maids-a-Milking",
        "Nine Ladies Dancing",
        "Ten Lords-a-Leaping",
        "Eleven Pipers Piping",
        "Twelve Drummers Drumming"
    ];

    for (let day = 1; day <= 12; day++) {

        const suffix = day === 1 ? "st" : day === 2 ? "nd" : day === 3 ? "rd" : "th";
        console.log(`On the ${day}${suffix} day of Christmas, my true love gave to me:`);


        for (let i = day - 1; i >= 0; i--) {
            if (i === 0 && day > 1) {
                console.log("and " + gifts[i]);
            } else {
                console.log(gifts[i]);
            }
        }

        console.log("");
    }
}

getLyrics();



