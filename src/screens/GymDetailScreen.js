import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function GymDetailScreen({ route }) {
  const { gym } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddReview = () => {
    Alert.alert('Coming Soon', 'Review submission will be available in the full version!');
  };

  const handleVerifyEquipment = () => {
    Alert.alert('Coming Soon', 'Equipment verification will be available in the full version!');
  };

  const handleGetDirections = () => {
    Alert.alert('Directions', `Opening directions to ${gym.name}`);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Text style={styles.gymName}>{gym.name}</Text>
            {gym.verified && (
              <Text style={styles.verifiedBadge}>✓ Verified</Text>
            )}
          </View>
          <TouchableOpacity
            onPress={() => setIsFavorite(!isFavorite)}
            style={styles.favoriteButton}
          >
            <Text style={styles.favoriteIcon}>
              {isFavorite ? '❤️' : '🤍'}
            </Text>
          </TouchableOpacity>
        </View>
        
        <Text style={styles.address}>{gym.address}</Text>
        <Text style={styles.hours}>⏰ {gym.hours}</Text>
        
        <View style={styles.ratingSection}>
          <Text style={styles.rating}>⭐ {gym.rating}</Text>
          <Text style={styles.reviewCount}>
            ({gym.reviewCount} reviews)
          </Text>
        </View>
        
        <Text style={styles.price}>Day Pass: {gym.dayPassPrice}</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleGetDirections}
        >
          <Text style={styles.actionButtonText}>🗺️ Directions</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={handleAddReview}
        >
          <Text style={styles.actionButtonText}>✍️ Write Review</Text>
        </TouchableOpacity>
      </View>

      {/* Equipment Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Equipment</Text>
          <TouchableOpacity onPress={handleVerifyEquipment}>
            <Text style={styles.verifyLink}>Verify Equipment</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.equipmentGrid}>
          <View style={styles.equipmentItem}>
            <Text style={styles.equipmentLabel}>Squat Racks</Text>
            <Text style={styles.equipmentValue}>
              {gym.equipment.squatRacks}
            </Text>
          </View>
          <View style={styles.equipmentItem}>
            <Text style={styles.equipmentLabel}>Benches</Text>
            <Text style={styles.equipmentValue}>
              {gym.equipment.benches}
            </Text>
          </View>
          <View style={styles.equipmentItem}>
            <Text style={styles.equipmentLabel}>Dumbbells</Text>
            <Text style={styles.equipmentValue}>
              {gym.equipment.dumbbells}
            </Text>
          </View>
          <View style={styles.equipmentItem}>
            <Text style={styles.equipmentLabel}>Cardio</Text>
            <Text style={styles.equipmentValue}>
              {gym.equipment.cardio}
            </Text>
          </View>
        </View>
      </View>

      {/* Amenities Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Amenities</Text>
        <View style={styles.amenitiesContainer}>
          {gym.amenities.map((amenity, index) => (
            <View key={index} style={styles.amenityChip}>
              <Text style={styles.amenityText}>{amenity}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Reviews Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Reviews</Text>
        {gym.reviews.map((review) => (
          <View key={review.id} style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
              <Text style={styles.reviewUser}>{review.user}</Text>
              <Text style={styles.reviewRating}>
                {'⭐'.repeat(review.rating)}
              </Text>
            </View>
            <Text style={styles.reviewText}>{review.text}</Text>
            <Text style={styles.reviewDate}>{review.date}</Text>
          </View>
        ))}
      </View>

      {/* Premium Upsell (Coming Soon) */}
      <View style={styles.premiumCard}>
        <Text style={styles.premiumTitle}>🌟 Unlock Premium Features</Text>
        <Text style={styles.premiumText}>
          • Save unlimited favorite gyms{'\n'}
          • Advanced equipment filters{'\n'}
          • Offline maps for travel{'\n'}
          • Ad-free experience
        </Text>
        <TouchableOpacity style={styles.premiumButton}>
          <Text style={styles.premiumButtonText}>
            Try Free for 7 Days
          </Text>
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
  header: {
    backgroundColor: 'white',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  gymName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  verifiedBadge: {
    color: '#22c55e',
    fontSize: 14,
    fontWeight: '600',
  },
  favoriteButton: {
    padding: 8,
  },
  favoriteIcon: {
    fontSize: 28,
  },
  address: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  hours: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  ratingSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  rating: {
    fontSize: 18,
    fontWeight: '600',
    marginRight: 8,
  },
  reviewCount: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6366f1',
  },
  actionButtons: {
    flexDirection: 'row',
    padding: 16,
    gap: 12,
  },
  actionButton: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  section: {
    backgroundColor: 'white',
    padding: 20,
    marginBottom: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  verifyLink: {
    color: '#6366f1',
    fontSize: 14,
    fontWeight: '600',
  },
  equipmentGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  equipmentItem: {
    width: '47%',
    backgroundColor: '#f9fafb',
    padding: 12,
    borderRadius: 8,
  },
  equipmentLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  equipmentValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  amenitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  amenityChip: {
    backgroundColor: '#e0e7ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  amenityText: {
    color: '#6366f1',
    fontSize: 14,
    fontWeight: '500',
  },
  reviewCard: {
    backgroundColor: '#f9fafb',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  reviewUser: {
    fontSize: 16,
    fontWeight: '600',
  },
  reviewRating: {
    fontSize: 14,
  },
  reviewText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
    lineHeight: 20,
  },
  reviewDate: {
    fontSize: 12,
    color: '#666',
  },
  premiumCard: {
    backgroundColor: '#1e1b4b',
    padding: 24,
    margin: 16,
    borderRadius: 12,
    marginBottom: 32,
  },
  premiumTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 12,
  },
  premiumText: {
    fontSize: 14,
    color: '#e0e7ff',
    lineHeight: 24,
    marginBottom: 16,
  },
  premiumButton: {
    backgroundColor: '#6366f1',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  premiumButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
