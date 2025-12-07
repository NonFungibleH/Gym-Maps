import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

export default function AddGymScreen({ navigation }) {
  const [gymName, setGymName] = useState('');
  const [address, setAddress] = useState('');
  const [dayPassPrice, setDayPassPrice] = useState('');
  const [hours, setHours] = useState('');
  const [website, setWebsite] = useState('');

  const handleSubmit = () => {
    if (!gymName || !address) {
      Alert.alert('Missing Info', 'Please fill in gym name and address');
      return;
    }

    Alert.alert(
      'Success!',
      'Thanks for adding a gym! In the full version, this will be submitted to our database for verification.',
      [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.instructions}>
          Help travelers by adding gyms that aren't listed yet. All submissions
          will be verified before appearing on the map.
        </Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            Gym Name <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={styles.input}
            value={gymName}
            onChangeText={setGymName}
            placeholder="e.g., Gold's Gym Central"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            Address <Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={address}
            onChangeText={setAddress}
            placeholder="Full street address"
            placeholderTextColor="#999"
            multiline
            numberOfLines={3}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Day Pass Price</Text>
          <TextInput
            style={styles.input}
            value={dayPassPrice}
            onChangeText={setDayPassPrice}
            placeholder="e.g., £15 or $20"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Opening Hours</Text>
          <TextInput
            style={styles.input}
            value={hours}
            onChangeText={setHours}
            placeholder="e.g., 6am - 10pm or 24/7"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Website (Optional)</Text>
          <TextInput
            style={styles.input}
            value={website}
            onChangeText={setWebsite}
            placeholder="https://..."
            placeholderTextColor="#999"
            keyboardType="url"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>
            💡 After submission, you'll be able to add equipment details and
            photos. Your gym will appear with an "Unverified" badge until 3
            users confirm it exists.
          </Text>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit Gym</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  form: {
    padding: 20,
  },
  instructions: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 24,
    backgroundColor: '#e0e7ff',
    padding: 16,
    borderRadius: 8,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  required: {
    color: '#ef4444',
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  infoBox: {
    backgroundColor: '#fef3c7',
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
  },
  infoText: {
    fontSize: 14,
    color: '#92400e',
    lineHeight: 20,
  },
  submitButton: {
    backgroundColor: '#6366f1',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  cancelButton: {
    padding: 16,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#666',
    fontSize: 16,
  },
});
