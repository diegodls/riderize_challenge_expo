import {
  Accuracy,
  getCurrentPositionAsync,
  LocationObject,
  requestForegroundPermissionsAsync,
} from "expo-location";
import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import MapView, { EventUserLocation, Region } from "react-native-maps";
import { LayersIcon } from "../../../assets/svg/icons/LayersIcon";
import { LocationIcon } from "../../../assets/svg/icons/LocationIcon";
import { styles } from "./styles";

function CustomMap() {
  const [currentRegion, setCurrentRegion] = useState<Region | null>(null);

  const [followUser, setFollowUser] = useState<boolean>(true);

  const [errorPermission, setErrorPermission] = useState<Boolean>(false);

  const LATITUDE_DELTA = 0.01;
  const LONGITUDE_DELTA = 0.007;

  const getInitialLocation = async () => {
    let { status } = await requestForegroundPermissionsAsync();

    if (status !== "granted") {
      setErrorPermission(true);
      return;
    }

    let location: LocationObject = await getCurrentPositionAsync({
      accuracy: Accuracy.High,
    });

    setCurrentRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
  };

  const updateCurrentLocation = (location: EventUserLocation) => {
    if (!location.nativeEvent.coordinate) return;

    const { latitude, longitude } = location.nativeEvent.coordinate;

    if (followUser) {
      const newRegion: Region = {
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      };
      setCurrentRegion(newRegion);
    }
  };

  const updateCurrentRegion = (region: Region) => {
    const newRegion: Region = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    };
    setCurrentRegion(newRegion);
  };

  const handleSetMyLocation = () => {
    setFollowUser(!followUser);
  };

  useEffect(() => {
    getInitialLocation();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {errorPermission ? (
        <>
          <View style={styles.errorContainer}>
            <TouchableOpacity
              style={styles.errorBox}
              onPress={getInitialLocation}
            >
              <Text style={styles.errorText}>Acesso a localização negado!</Text>
              <Text style={styles.errorSubText}>
                Clique aqui e conceda as permissões!
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <LayersIcon />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, followUser ? styles.buttonActive : {}]}
              onPress={handleSetMyLocation}
            >
              <LocationIcon fill={followUser ? "#FFF" : ""} />
            </TouchableOpacity>
          </View>
          <MapView
            style={styles.mapView}
            showsUserLocation={true}
            showsMyLocationButton={false}
            loadingEnabled={true}
            onUserLocationChange={(location: EventUserLocation) => {
              updateCurrentLocation(location);
            }}
            onRegionChangeComplete={(location: Region) => {
              updateCurrentRegion(location);
            }}
            region={{
              latitude: currentRegion?.latitude || 0,
              longitude: currentRegion?.longitude || 0,
              latitudeDelta: currentRegion?.latitudeDelta || 0,
              longitudeDelta: currentRegion?.latitudeDelta || 0,
            }}
          />
        </>
      )}
    </SafeAreaView>
  );
}
export { CustomMap };
