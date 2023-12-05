import { Button, Text, View } from "react-native";
import { useState } from "react";

function getElementAtRandomIndex(array) {
  const elementIndex = Math.floor(Math.random() * array.length);
  return array[elementIndex];
}

const OPTIONS = ["Rock", "Paper", "Scissors"];

export default function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [score, setScore] = useState([0, 0]); // [playerScore, computerScore]
  const [game, setGame] = useState(null);

  const makeMoves = (choice) => {
    const computerMove = getElementAtRandomIndex(OPTIONS);
    setComputerChoice(computerMove);
    setPlayerChoice(choice);
    declareWinner(choice, computerMove);
  };

  const declareWinner = (player1, player2) => {
    let res = "";
    let [playerScore, computerScore] = score;

    if (player1 === player2) {
      res = "Game is a tie!!";
    } else if (
      (player1 === "Rock" && player2 === "Scissors") ||
      (player1 === "Paper" && player2 === "Rock") ||
      (player1 === "Scissors" && player2 === "Paper")
    ) {
      playerScore++;
      res = `You won with ${player1}!!`;
    } else {
      computerScore++;
      res = `Computer won with ${player2} :(`;
    }
    setScore([playerScore, computerScore]);
    setGame(res);
  };

  return (
    <>
      <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
        <Text
          style={{
            fontSize: 24,
            color: "blue",
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Rock / Paper / Scissors
        </Text>
        <Text
          style={{
            fontSize: 18,
            color: "black",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          Score: {score[0]} : {score[1]}
        </Text>

        {playerChoice == null ? (
          <>
            <Button
              title="Rock"
              onPress={() => makeMoves("Rock")}
              color="skyblue"
            />
            <Button
              title="Paper"
              onPress={() => makeMoves("Paper")}
              color="pink"
            />
            <Button
              title="Scissors"
              onPress={() => makeMoves("Scissors")}
              color="lightgreen"
            />
          </>
        ) : (
          <>
            <Text style={{ fontSize: 20, color: "green", textAlign: "center" }}>
              You picked {playerChoice}.
            </Text>
            <Text style={{ fontSize: 20, color: "green", textAlign: "center" }}>
              Computer picked {computerChoice}.
            </Text>
            <Text style={{ fontSize: 20, color: "red", textAlign: "center" }}>
              {game}
            </Text>
            <Button
              title="Reset"
              onPress={() => setPlayerChoice(null)}
              color="orange"
            />
          </>
        )}
      </View>
    </>
  );
}
