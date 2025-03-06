const gifs = [
    "/img/lol0.gif",
    "/img/lol1.gif",
    "/img/lol2.gif",
    "/img/lol3.gif",
    "/img/lol4.gif",
    "/img/lol5.gif",
    "/img/lol6.gif",
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