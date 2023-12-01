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
  const [winner, setWinner] = useState(null);

  const makeMoves = (choice) => {
    setComputerChoice(getElementAtRandomIndex(OPTIONS));
    setPlayerChoice(choice);
  };

  /*
  Rock crushes scissors.
  Scissors cut paper.
  Paper covers rock.
*/

  const declareWinner = (player1, player2) => {
    if (player1 === player2) {
      return "Game is a tie!!";
    }

    if (player1 === "Rock" && player2 === "Scissors") {
      return "You won with rock!!";
    }
    if (player1 === "Rock" && player2 === "Paper") {
      return "Computer won with paper :(";
    }

    if (player1 === "Paper" && player2 === "Rock") {
      return "You won with paper!!";
    }
    if (player1 === "Paper" && player2 === "Scissors") {
      return "Computer won with scissors :(";
    }

    if (player1 === "Scissors" && player2 === "Paper") {
      return "You won with scissors!!";
    }
    if (player1 === "Scissors" && player2 === "Rock") {
      return "Computer won with rock :(";
    }
  };

  return (
    <>
      <View style={{ height: "100%", marginTop: 300 }}>
        <View>
          {playerChoice == null ? (
            <View>
              <Text style={{ fontSize: 24, color: "red", textAlign: "center" }}>
                Rock / Paper / Scissors
              </Text>
              <Button title="Rock" onPress={() => makeMoves("Rock")} />
              <Button title="Paper" onPress={() => makeMoves("Paper")} />
              <Button title="Scissors" onPress={() => makeMoves("Scissors")} />
            </View>
          ) : (
            <View>
              <Text
                style={{ fontSize: 20, color: "green", textAlign: "center" }}
              >
                You picked {playerChoice}.
              </Text>
              <Text
                style={{ fontSize: 20, color: "green", textAlign: "center" }}
              >
                Computer picked {computerChoice}.
              </Text>

              <Text style={{ fontSize: 20, color: "red", textAlign: "center" }}>
                {declareWinner(playerChoice, computerChoice)}
              </Text>
              <Button title="Reset" onPress={() => setPlayerChoice(null)} />
            </View>
          )}
        </View>
      </View>
    </>
  );
}
