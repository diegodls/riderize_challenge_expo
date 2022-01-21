import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CustomMap } from "../../components/CustomMap";
import { styles } from "./styles";

function Recording() {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomMap />

      <View style={styles.bottomContainer}>
        <View style={styles.modalIndicatorContainer}>
          <View style={styles.modalIndicator} />
        </View>

        <View style={styles.timerContainer}>
          <Text style={styles.timerTitle}>tempo</Text>
          <Text style={styles.timerCounter}>00:00:02</Text>
        </View>
        <View style={styles.metricsContainer}>
          <View style={[styles.metricsInnerContainer, styles.rightBorder]}>
            <Text style={styles.metricsInnerTitle}>distância</Text>
            <Text style={styles.metricsInnerCounter}>00:00:02</Text>
          </View>
          <View style={styles.metricsInnerContainer}>
            <Text style={styles.metricsInnerTitle}>velocidade (km/h)</Text>
            <Text style={styles.metricsInnerCounter}>31.1</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleNavigation}>
            <Text style={styles.buttonText}>Parar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export { Recording };
