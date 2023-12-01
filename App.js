// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

import { Button, Text, View } from "react-native";

import { useState } from "react";

export default function App() {
  const [data, setData] = useState(null);

  return (
    <View>
      {data == null ? (
        <View>
          <Text>Rock / Paper / Scissors</Text>
          <Button title="Rock" onPress={() => setData("Rock")} />
          <Button title="Paper" onPress={() => setData("Paper")} />
          <Button title="Scissors" onPress={() => setData("Scissors")} />
        </View>
      ) : (
        <View>
          <Text>You picked {data}.</Text>
          <Button title="Reset" onPress={() => setData(null)} />
        </View>
      )}
    </View>
  );
}
