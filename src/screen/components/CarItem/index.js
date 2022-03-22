import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faGear,
  faToolbox,
  faFan,
  faKey,
  faLock,
  faUnlockAlt,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Menu from '../MenuItem/Menu';

export default function CarItem() {
  const [locked, setLocked] = React.useState(true);
  const clickLock = () => {
    if (locked) {
      setLocked(false);
    } else {
      setLocked(true);
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../assets/images/background.png')}
        style={styles.backgroundImage}
      />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faGear} size={20} style={styles.icon} />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesomeIcon icon={faToolbox} size={20} style={styles.icon} />
        </TouchableOpacity>
      </View>
      {/* Mileage */}
      <View style={styles.batterySection}>
        <Image
          source={require('../../../assets/images/battery.png')}
          style={styles.batteryImage}
        />
        <Text style={styles.batteryText}>150 mi</Text>
      </View>
      {/* Status */}
      <View style={styles.status}>
        <Text style={styles.statusText}>Parked</Text>
      </View>
      <ScrollView>
        {/* Control Icons */}
        <View style={styles.controls}>
          <TouchableOpacity>
            <View style={styles.controlsButton}>
              <FontAwesomeIcon style={styles.icon} icon={faFan} size={24} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.controlsButton}>
              <FontAwesomeIcon style={styles.icon} icon={faKey} size={24} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={clickLock}>
            <View style={styles.controlsButton}>
              <FontAwesomeIcon
                style={styles.icon}
                icon={locked ? faLock : faUnlockAlt}
                size={24}
              />
            </View>
          </TouchableOpacity>
        </View>
        <Menu />
      </ScrollView>
    </View>
  );
}

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
   
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },

  icon: {
    color: 'white',
  },
  batterySection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  batteryImage: {
    height: 26,
    width: 70,
    marginRight: 12,
  },
  batteryText: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
  },
  status: {
    alignItems: 'center',
  },
  statusText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 175,
  },
  controlsButton: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    padding: 18,
    marginLeft: 25,
  },
});
