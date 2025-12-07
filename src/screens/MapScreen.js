import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { MOCK_GYMS } from '../data/mockGyms';

export default function MapScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [selectedGym, setSelectedGym] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Permission Denied',
          'Location permission is required to show gyms near you'
        );
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
    })();
  }, []);

  const handleMarkerPress = (gym) => {
    setSelectedGym(gym);
  };

  const handleCalloutPress = () => {
    if (selectedGym) {
      navigation.navigate('GymDetail', { gym: selectedGym });
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 51.5074,
          longitude: -0.1278,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        region={location}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        {MOCK_GYMS.map((gym) => (
          <Marker
            key={gym.id}
            coordinate={{
              latitude: gym.latitude,
              longitude: gym.longitude,
            }}
            title={gym.name}
            description={`⭐ ${gym.rating} • ${gym.dayPassPrice}`}
            onPress={() => handleMarkerPress(gym)}
            onCalloutPress={handleCalloutPress}
          />
        ))}
      </MapView>

      {/* Quick info card when gym is selected */}
      {selectedGym && (
        <View style={styles.quickInfoCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.gymName}>{selectedGym.name}</Text>
            <TouchableOpacity
              onPress={() => setSelectedGym(null)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.rating}>
            ⭐ {selectedGym.rating} ({selectedGym.reviewCount} reviews)
          </Text>
          <Text style={styles.price}>Day Pass: {selectedGym.dayPassPrice}</Text>
          <TouchableOpacity
            style={styles.viewDetailsButton}
            onPress={handleCalloutPress}
          >
            <Text style={styles.viewDetailsText}>View Details →</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Add Gym Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddGym')}
      >
        <Text style={styles.addButtonText}>+ Add Gym</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  quickInfoCard: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  gymName: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  closeButton: {
    padding: 4,
  },
  closeButtonText: {
    fontSize: 20,
    color: '#666',
  },
  rating: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6366f1',
    marginBottom: 12,
  },
  viewDetailsButton: {
    backgroundColor: '#6366f1',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  viewDetailsText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  addButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#6366f1',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});
