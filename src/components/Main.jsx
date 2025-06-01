import { useState } from "react";

export default function Main() {
    const [memeObject, setMemeObject] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageURL: "http://i.imgflip.com/1bij.jpg"
    });

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
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={memeObject.imageURL} />
                <span className="top">{memeObject.topText}</span>
                <span className="bottom">{memeObject.bottomText}</span>
            </div>
        </main>
    );
}