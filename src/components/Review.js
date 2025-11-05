import React, {useState} from "react";
import "../styles/App.css"

function Review({reviewsArr}){
    const [currIndex, setCurrIndex] = useState(0);
    
    const prevHandler = () => {
        if(currIndex === 0) return;
        setCurrIndex(currIndex => currIndex - 1);
    }
    const nextHandler = () => {
        if(currIndex === reviewsArr.length - 1) return;
        setCurrIndex(currIndex => currIndex + 1);
    }
    const surpriseHandler = () => {
        // way 1 - generating random index
        // let randomIndex;
        // do {
        //     randomIndex = Math.floor(Math.random() * reviewsArr.length);
        // } while (randomIndex === currIndex);
        
        // way 2 - generate random Index
        // first generate a random number which lies between 0 to n-2
        let randomNumber = Math.floor(Math.random() * (reviewsArr.length - 1));
        // now select the randomIndex, change the randomNumber if it is >= currIndex and store in randomIndex
        let randomIndex = randomNumber >= currIndex ? randomNumber + 1 : randomNumber;
        setCurrIndex(randomIndex);
    }

    let authorId = `author-${reviewsArr[currIndex].id}`;
    return (
        <div className="review" style={{border: "1px solid blue", display: "flex", flexDirection: "column", justifyContent: "center", padding: 10, height: 240, width: 480, gap: 10}}>
            <div style={{display: 'flex', gap: 5}}>
                <div style={{border: "1px solid black",  display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img style={{width: '120px', height: '100%', objectFit: 'cover', borderRadius: '5%',display: 'flex', alignItems: 'center', justifyContent: 'center'}} src={reviewsArr[currIndex].image} alt="" />
                </div>
                <div style={{border: "1px solid black", padding: 5}}>
                    <p id={authorId}>{reviewsArr[currIndex].name}</p>
                    <p>{reviewsArr[currIndex].job}</p>
                    <p>{reviewsArr[currIndex].text}</p>
                </div>
            </div>
            <div style={{ display: 'flex',flexDirection: 'row', justifyContent: 'space-between'}}>
                <button onClick={prevHandler} className="prev-btn">Prev</button>
                <button onClick={surpriseHandler} className="random-btn">Surprise Me</button>
                <button onClick={nextHandler} className="next-btn">Next</button>
            </div>
        </div>
    )

}

export default Review;