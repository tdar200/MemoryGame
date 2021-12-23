import React, { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";

function App() {
  // let data = [];
  const [imageUrl, setImageUrl] = useState([]);
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  const [score, setScore] = useState(0);

  let tempData = [
    "Apple",
    "Banana",
    "Orange",
    "Berry",
    "Watermelon",
    "Pomegranate",
    "Dragon Fruit",
    "Rambutan",
  ];

  let color = [
    "gold",
    "indianred",
    "darkorange",
    "pink",
    "mediumslateblue",
    "yellowgreen",
    "tomato",
    "orange",
  ]

  let tempImage = [
    "https://images.pngnice.com/download/2007/Red-Apple-PNG-Photos.png",
    "https://www.seekpng.com/png/full/9-95205_banana-png-picture-transparent-png-3-bananas.png",
    "https://purepng.com/public/uploads/large/purepng.com-orange-orangeorangefruitbitter-orangeorangesclip-art-17015273373713wgvk.png",
    "https://purepng.com/public/uploads/large/purepng.com-blackberryhybridsblackberryrubus-subgenusfoodfruit-1701527190060tjwzl.png",
    "https://www.nicepng.com/png/full/168-1685591_watermelon-png-source-truth-vegan-bcaa-watermelon-truth.png",
    "https://freepngimg.com/thumb/pomegranate/5-2-pomegranate-png-picture.png",
    "https://purepng.com/public/uploads/large/purepng.com-dragon-fruitfruitsdragon-fruitpitayapitahaya-981524762841msxvf.png",
    "https://www.nicepng.com/png/full/419-4193342_thumb-image-exotic-fruit-rambutan.png",
  ];

  const randomizePositions = () => {
    let randomValues = [];

    while (randomValues.length < 8) {
      var r = Math.floor(Math.random() * 8);
      if (randomValues.indexOf(r) === -1) randomValues.push(r);
    }

    setData([]);
    setImageUrl([]);

    for (let i = 0; i < tempData.length; i++) {
      setData((prevState) => [...prevState, tempData[randomValues[i]]]);
      setImageUrl((prevState) => [...prevState, tempImage[randomValues[i]]]);
    }
  };

  useEffect(() => {
    randomizePositions();
  }, []);

  const gameOver = () => {
    setScore(0);
    setSelected([]);
  };

  const checkDuplicates = (input) => {
    const duplicate = selected.indexOf(input);
    console.log(input);

    if (duplicate !== -1) {
      gameOver();
    } else {
      setSelected((prevState) => [...prevState, input]);
      setScore(score + 1);
      randomizePositions();
    }
  };

  return (
    <div>
      <Container>
        <div className="title">
        <h1>Memory Game</h1>

        <h2 style={{ color: "white" }}>SCORE: {score} </h2>
        </div>
        <div className='Card-Container'>
          {data.map((name, i) => (
            <Card
              key={i}
              style={{
                width: "200px",
                height: "250px",
                margin: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "5px",
                cursor: "pointer",
                backgroundColor: `${color[i]}`,
              }}
              onClick={() => checkDuplicates(name)}
            >
              <Card.Img
                style={{
                  width: "90%",
                  height: "auto",
                  margin: "10px",
                }}
                src={imageUrl[i]}
              ></Card.Img>
              <Card.Title
                style={{
                  color: "white",
                  fontSize: "15px",
                  fontWeight: "600",
                  bottom: 0,
                  position: "absolute",
                }}
              >
                {name}
              </Card.Title>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default App;
