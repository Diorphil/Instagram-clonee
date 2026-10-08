import React from 'react';
import {
  Alert,
  Button,
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const GAP = 2;
const CELL = (Dimensions.get('window').width - GAP * 2) / 3;
const PHOTOS = Array.from(
  { length: 9 },
  (_, i) => `https://picsum.photos/seed/outfit${i + 1}/400/400`
);

export default function App() {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={28} color="#000" />
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Group Profile</Text>
          <Text style={styles.headerSub}>style_squad</Text>
        </View>
        <Ionicons name="add-circle-outline" size={28} color="#000" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Avatar + stats */}
        <View style={styles.profileRow}>
          <View style={styles.avatarRing}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>SS{'\n'}FIT</Text>
            </View>
          </View>
          <View style={styles.stats}>
            <View style={styles.stat}>
              <Text style={styles.statNum}>48</Text>
              <Text style={styles.statLabel}>Posts</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNum}>15</Text>
              <Text style={styles.statLabel}>Members</Text>
            </View>
            <View style={styles.stat}>
              <Text style={styles.statNum}>2</Text>
              <Text style={styles.statLabel}>Admins</Text>
            </View>
          </View>
        </View>

        {/* Bio */}
        <View style={styles.bio}>
          <Text style={styles.bioName}>Style Squad Daily</Text>
          <Text style={styles.bioText}>Outfit of the day, every day 👟</Text>
          <Text style={styles.bioText}>Show us what you are wearing.</Text>
        </View>

        {/* Member button */}
        <TouchableOpacity style={styles.memberBtn} activeOpacity={0.7}>
          <Text style={styles.memberText}>Member</Text>
          <Ionicons name="chevron-down" size={16} color="#000" />
        </TouchableOpacity>

        {/* Photo grid */}
        <View style={styles.grid}>
          {PHOTOS.map((uri, i) => (
            <Image key={i} source={{ uri }} style={styles.photo} />
          ))}
        </View>
      </ScrollView>

      {/* Alert button */}
      <View style={styles.alertWrap}>
        <Button
          title="Alert"
          onPress={() => Alert.alert('Alert Button pressed')}
        />
      </View>

      {/* Bottom tab bar */}
      <View style={styles.tabBar}>
        <Ionicons name="home" size={26} color="#000" />
        <Ionicons name="search-outline" size={26} color="#000" />
        <Ionicons name="play-circle-outline" size={26} color="#000" />
        <Ionicons name="bag-handle-outline" size={26} color="#000" />
        <Ionicons name="person-circle" size={28} color="#000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? 54 : StatusBar.currentHeight ?? 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingBottom: 8,
  },
  headerCenter: { alignItems: 'center' },
  headerTitle: { fontSize: 16, fontWeight: '700', color: '#000' },
  headerSub: { fontSize: 13, color: '#8e8e8e' },

  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  avatarRing: {
    width: 92,
    height: 92,
    borderRadius: 46,
    borderWidth: 3,
    borderColor: '#dd2a7b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#1b82d1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 28,
  },
  stats: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 8,
  },
  stat: { alignItems: 'center' },
  statNum: { fontSize: 17, fontWeight: '700', color: '#000' },
  statLabel: { fontSize: 14, color: '#262626', marginTop: 2 },

  bio: { paddingHorizontal: 16, paddingTop: 10 },
  bioName: { fontSize: 14, fontWeight: '700', color: '#000' },
  bioText: { fontSize: 14, color: '#000', marginTop: 2 },

  memberBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    marginTop: 14,
    marginBottom: 14,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 6,
    backgroundColor: '#fff',
  },
  memberText: { fontSize: 14, fontWeight: '600', color: '#000', marginRight: 4 },

  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: GAP },
  photo: { width: CELL, height: CELL, backgroundColor: '#efefef' },

  alertWrap: {
    paddingVertical: 6,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#dbdbdb',
    backgroundColor: '#fff',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: Platform.OS === 'ios' ? 28 : 12,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#dbdbdb',
    backgroundColor: '#fff',
  },
});  