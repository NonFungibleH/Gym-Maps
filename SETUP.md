# 🚀 Setup Instructions

## Running on Your Phone in 5 Minutes

### Step 1: Install Expo Go
Download the Expo Go app on your phone:
- **iPhone**: https://apps.apple.com/app/expo-go/id982107779
- **Android**: https://play.google.com/store/apps/details?id=host.exp.exponent

### Step 2: Open Terminal
Navigate to the gym-map folder:
```bash
cd gym-map
```

### Step 3: Start Development Server
```bash
npm start
```

You'll see a QR code appear in your terminal.

### Step 4: Scan QR Code
- **iPhone**: Open Camera app → Point at QR code → Tap notification
- **Android**: Open Expo Go app → Tap "Scan QR code" → Point at QR code

### Step 5: Wait for App to Load
The app will download and launch on your phone (takes 10-30 seconds first time)

### Step 6: Grant Location Permission
When prompted, tap "Allow" to let the app access your location.

## 🎉 You're Done!

The app should now be running on your phone showing a map with gym markers.

## 🧪 Testing the App

### Try These Actions:
1. **Tap a gym marker** - See quick info card
2. **Tap "View Details"** - See full gym page
3. **Tap "+ Add Gym"** - Try the add gym form
4. **Tap heart icon** - Favorite a gym (visual only for now)
5. **Zoom/pan the map** - Explore different areas

### Expected Behavior:
- Map shows 4 gyms in London
- Your blue dot shows your location
- Tapping markers shows gym info
- Everything is interactive but doesn't save (no backend yet)

## 🐛 Troubleshooting

### QR Code Won't Scan
- Make sure phone and computer are on same WiFi
- Try typing the URL manually (shown below QR code)
- Use tunnel mode: `npm start --tunnel`

### Location Not Working
**iOS:**
1. Open Settings → Privacy & Security → Location Services
2. Find Expo Go
3. Set to "While Using the App"

**Android:**
1. Open Settings → Apps → Expo Go → Permissions
2. Enable Location permission

### App Won't Load
```bash
# Clear cache and restart
npm start --clear
```

### "Module not found" Error
```bash
# Reinstall dependencies
rm -rf node_modules
npm install
npm start
```

### Changes Not Appearing
- Shake your phone
- Tap "Reload" in the dev menu
- Or just save your code file again

## 📱 Development Tips

### Hot Reload
- Edit any file in `src/` folder
- Save the file
- App automatically updates on your phone
- No need to restart!

### Dev Menu
- **iOS**: Shake device
- **Android**: Shake device or press hardware menu button

### Console Logs
Watch your terminal - `console.log()` output appears there

## 🎯 Next Steps After Testing

1. **Try modifying the code**
   - Change colors in `styles` objects
   - Edit gym data in `src/data/mockGyms.js`
   - Add new UI elements

2. **Set up Supabase** (for real backend)
   - Create account at supabase.com
   - Create new project
   - Get API keys
   - Add to app

3. **Add authentication**
   ```bash
   npm install @supabase/supabase-js
   ```

4. **Deploy to TestFlight** (when ready for beta)

## 💻 Alternative: Run in Simulator

### iOS (Mac only)
```bash
npm run ios
```

### Android
```bash
npm run android
```

Note: You need Xcode (iOS) or Android Studio installed for this.

## 🔧 Useful Commands

```bash
# Start development server
npm start

# Start with cache cleared
npm start --clear

# Start with tunnel (for different networks)
npm start --tunnel

# Run on iOS simulator (Mac only)
npm run ios

# Run on Android emulator
npm run android

# Check for issues
npm run lint

# Install new package
npm install package-name
```

## 📞 Need Help?

Common resources:
- Expo Docs: https://docs.expo.dev/
- React Native Docs: https://reactnative.dev/
- Stack Overflow: Search "expo [your issue]"

## ✅ Checklist

- [ ] Expo Go installed on phone
- [ ] Terminal open in gym-map folder
- [ ] `npm start` running
- [ ] QR code scanned
- [ ] App loaded on phone
- [ ] Location permission granted
- [ ] Can see map with gym markers
- [ ] Can tap markers and see details

If all checked, you're good to go! 🎉

---

**Pro Tip**: Keep the terminal open while developing. It shows useful logs and errors.
