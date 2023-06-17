const https = require('https');
const sites = [
    "https://www.google.com/search?q=$0$&oq=$0$&aqs=chrome..69i57.3152j0j4&sourceid=chrome&ie=UTF-8",
    "https://www.bing.com/search?q=$0$&form=QBLH&sp=-1&ghc=1&lq=0&pq=$0$&sc=8-12&qs=n&sk=&cvid=01BD77D66ADE4F3BB4C856B5DF4DFFDF&ghsh=0&ghacc=0&ghpl=",
    "https://stackoverflow.com/search?q=$0$",
    "https://stackexchange.com/search?q=$0$",
    "https://github.com/search?q=$0$&type=repositories"
];

const wordlist = [
    "RegEx",
    "HTML",
    "Bootstrap 5",
    "Not working",
    "CSS",
    "JavaScript",
    "Invalid token",
    "Unexepected token",
    "Syntax error",
    "Is not a valid function",
    "Cisco",
    "Index out of range",
    "Ipv4",
    "Subnet",
    "Table",
    "SSH",
    "Python",
    "Py3",
    "W3Schools",
    "Carousel",
    "Colors",
    "TypeError",
    "ReferenceError",
];

const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

function spam() {
    const site = sites[random(0, sites.length - 1)];
    const word = wordlist[random(0, wordlist.length - 1)] + "+" + wordlist[random(0, wordlist.length - 1)] + "+" + wordlist[random(0, wordlist.length - 1)];
    const url = new URL(site.replace("$0$", word));

    https.get({
        hostname: url.hostname,
        path: url.pathname + url.search,
        agent: new https.Agent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"),
    }, (res) => {
        console.log("Spamming " + url);
    }).on('error', (e) => {
        console.error(e);
    });

    setTimeout(() => {
        spam();
    }, random(1000, 2500));
}

spam();