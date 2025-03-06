const gifs = [
    "/lol-generator/img/lol0.gif",
    "/lol-generator/img/lol1.gif",
    "/lol-generator/img/lol2.gif",
    "/lol-generator/img/lol3.gif",
    "/lol-generator/img/lol4.gif",
    "/lol-generator/img/lol5.gif",
    "/lol-generator/img/lol6.gif",
];

type RandomGifProps = {
    show: boolean;
};

function RandomGif({ show }: RandomGifProps) {
    if (!show) return null;
    const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
    return <img src={randomGif} alt="LOL GIF" className="gif" />;
}

export default RandomGif;