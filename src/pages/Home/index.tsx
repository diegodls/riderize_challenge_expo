import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { CustomMap } from "../../components/CustomMap";

import { PathIcon } from "../../../assets/svg/icons/PathIcon";
import { BikeIcon } from "../../../assets/svg/icons/BikeIcon";
import { MountainsIcon } from "../../../assets/svg/icons/MountainsIcon";
import { DotsIcon } from "../../../assets/svg/icons/DotsIcon";
import { ArrowRightIcon } from "../../../assets/svg/icons/ArrowRightIcon";

import { styles } from "./styles";

function Home() {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate("Recording");
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomMap />
      <View style={styles.bottomContainer}>
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            <PathIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <BikeIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <MountainsIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <DotsIcon />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleNavigation}>
            <Text style={styles.buttonText}>Iniciar Atividade</Text>
            <ArrowRightIcon />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
export { Home };
