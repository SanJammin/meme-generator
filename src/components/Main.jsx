import { useState, useEffect } from "react";

export default function Main() {
    const [memeObject, setMemeObject] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageURL: "http://i.imgflip.com/1bij.jpg"
    });

    const [memesArray, setMemesArray] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMemesArray(data.data.memes))
    }, []);

    function handleClick() {
        const randomMeme = Math.floor(Math.random()* memesArray.length);
        setMemeObject(prevMeme => (
            {...prevMeme,
                imageURL: memesArray[randomMeme].url
            }
        ));
    }

    function handleChange(e) {
        const {value, name} = e.currentTarget;

        setMemeObject(prevMeme => (
            {...prevMeme,
                [name]: value
            }
        ));
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={memeObject.topText}
                    />
                </label>
                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={memeObject.bottomText}
                    />
                </label>
                <button onClick={handleClick}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={memeObject.imageURL} />
                <span className="top">{memeObject.topText}</span>
                <span className="bottom">{memeObject.bottomText}</span>
            </div>
        </main>
    );
}