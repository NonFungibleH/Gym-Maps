# 🏋️ GymMap - Find Gyms Anywhere

A React Native app that helps travelers find and review gyms worldwide.

![Platform](https://img.shields.io/badge/platform-iOS%20%7C%20Android-blue)
![React Native](https://img.shields.io/badge/React%20Native-0.76-61dafb)
![Expo](https://img.shields.io/badge/Expo-52-000020)

## ✨ Features

- 📍 Interactive map showing gym locations
- 🏢 Detailed gym information (equipment, amenities, hours, pricing)
- ⭐ User reviews and ratings
- 💪 Equipment verification system
- ➕ Add new gyms to the database
- 📱 Cross-platform (iOS & Android)

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [Expo Go](https://expo.dev/client) app on your phone

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/gym-map.git

# Navigate to project directory
cd gym-map

# Install dependencies
npm install

# Start the development server
npm start
```

### Run on Your Phone

1. Download the **Expo Go** app:
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. Scan the QR code that appears in your terminal with:
   - **iOS**: Camera app
   - **Android**: Expo Go app

3. The app will load on your phone!

## 📱 Screens

- **Map View** - Browse gyms on an interactive map
- **Gym Details** - View equipment, amenities, reviews, and pricing
- **Add Gym** - Submit new gyms to the community

## 🛠️ Tech Stack

- **React Native** - Mobile framework
- **Expo** - Development platform
- **React Navigation** - Navigation
- **React Native Maps** - Map interface
- **Expo Location** - Geolocation

## 📂 Project Structure

```
gym-map/
├── App.js                      # Main navigation setup
├── src/
│   ├── screens/
│   │   ├── MapScreen.js        # Map with gym markers
│   │   ├── GymDetailScreen.js  # Gym details & reviews
│   │   └── AddGymScreen.js     # Add new gym form
│   └── data/
│       └── mockGyms.js         # Mock data for testing
├── app.json                    # Expo configuration
└── package.json                # Dependencies
```

## 🎯 Current Status

**MVP (v0.1)** - Testing with mock data

**Working:**
- ✅ Interactive map interface
- ✅ Location detection
- ✅ Gym details display
- ✅ Reviews display
- ✅ Equipment lists
- ✅ Add gym form UI

**In Development:**
- ⏳ Backend integration (Supabase)
- ⏳ User authentication
- ⏳ Review submission
- ⏳ Equipment verification
- ⏳ Image uploads
- ⏳ Search & filters
- ⏳ Premium features

## 🔮 Roadmap

### Phase 1: Backend (Weeks 1-2)
- Set up Supabase
- Database schema
- User authentication

### Phase 2: Core Features (Weeks 3-6)
- Review submission
- Equipment verification
- Image uploads
- Search & filters

### Phase 3: Monetization (Weeks 7-9)
- Premium subscription (RevenueCat)
- Gym partnership features
- Analytics

### Phase 4: Launch (Weeks 10-12)
- Beta testing
- App store submission
- Marketing

## 💰 Monetization Strategy

- **Free Tier**: Browse gyms, read reviews, basic search
- **Premium** ($4.99/month): Unlimited favorites, advanced filters, offline maps, ad-free
- **Gym Partnerships**: B2B revenue from gym owners ($29-79/month)

## 🤝 Contributing

This is currently in MVP development. Contributions welcome!

## 📝 License

MIT

## 📧 Contact

For questions or feedback, please open an issue.

---

**Built for travelers and gym enthusiasts** 🚀
