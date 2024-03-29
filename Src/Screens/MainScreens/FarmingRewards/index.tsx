import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  ImageBackground,
  ScrollView
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Ionic from 'react-native-vector-icons/Ionicons';
import Styles from './Styles';

export type Props = {
  navigation: any;
};

const FarmingRewards = (props: any) => {
  const { navigation } = props;

  const [tab, setTab] = useState(1)

  const REWARD_DATA = [
    {
      icon: Images.inrLogo,
      title: `INR`,
      apy: `70.00%`,
      amount: `754M+ INR`,
      total: `Rewards`,
      gift: false,
      giftPercentage: "+10.02%"
    },
    {
      icon: Images.usdtLogo,
      title: `USDT`,
      apy: `60.00%`,
      amount: `901M+ USDT`,
      total: `Staked`,
      gift: true,
      giftPercentage: "+10.02%"
    },
    {
      icon: Images.usdcLogo,
      title: `USDC`,
      apy: `55.00%`,
      amount: `901M+ USDC`,
      total: `Staked`,
      gift: true,
      giftPercentage: "+15.82%"
    }
  ]

  return (
    <ImageBackground source={Images.background} style={Styles.backgroundContainer}>
      <SafeAreaView style={Styles.safeAreaContainer}>
        <StatusBar barStyle={'dark-content'} />
        <View style={Styles.mainContainer}>

          {/* Header */}
          <View style={Styles.headerContainer}>
            <View style={Styles.headerWrapper}>
              <TouchableOpacity onPress={() => { navigation.navigate("Profile") }}
                style={Styles.leftWrapper}>
                <Image source={Images.user} style={Styles.userIcon} />
                <Text style={Styles.userTitle}>{`David`}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <Image source={Images.back} style={Styles.userIcon} />
              </TouchableOpacity>
            </View>
          </View>
          {/* Main Content */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.scrollContainer}>

              <View style={Styles.inputContainer}>
                <Text style={Styles.primary}>{'Launchpool'}</Text>
              </View>
              <View style={Styles.dataContainer}>
                <View style={Styles.leftWrap}>
                  <View style={Styles.iconWrap}>
                    <Image source={Images.convertInrx} style={Styles.inrxIcon} />
                  </View>
                  <Text style={Styles.currencyTitle}>{"INRx"}</Text>
                </View>
                <View style={Styles.tabContainer}>
                  <Text style={Styles.inrTitle}>{`Farming`}</Text>
                </View>
              </View>
              {/* Rewards Data */}
              <View style={Styles.profileListContainer}>
                <Text style={Styles.profileListTitle}>{"Total Rewards"}</Text>
                <Text style={Styles.profileDescription}>{`110,000,000.00`}</Text>
              </View>
              <View style={Styles.profileListContainer}>
                <Text style={Styles.profileListTitle}>{"Farming Period"}</Text>
                <Text style={Styles.profileDescription}>{`7 days/s`}</Text>
              </View>
              <View style={Styles.profileListContainer}>
                <Text style={Styles.profileListTitle}>{"Time until farming ends"}</Text>
                <Text style={Styles.profileDescription}>{`04D : 16H : 41M`}</Text>
              </View>

              {/* Reward List */}
              {
                REWARD_DATA?.map((item, keyID) => {
                  return (
                    <View key={keyID} style={Styles.getContainer}>
                      <View style={Styles.listInner}>
                        <View>
                          <View style={Styles.leftWrap}>
                            <Image source={item?.icon} style={Styles.rewardIcon} />
                            <Text style={Styles.currencyTitle}>{item?.title}</Text>
                          </View>
                          <View style={Styles.stakeLeftWrap}>
                            <Text style={Styles.listDescription}>{"APY: "}</Text>
                            <Text style={Styles.listTitle}>{item?.apy}</Text>
                          </View>
                          <View style={Styles.stakeLeftWrap}>
                            <Text style={Styles.listDescription}>{`Total ${item?.total}: `}</Text>
                            <Text style={Styles.listTitle}>{item?.amount}</Text>
                          </View>
                        </View>
                        <View>
                          {
                            item?.gift == true ?
                              <View style={Styles.giftWrap}>
                                <Image source={Images.gift} style={Styles.giftIcon} />
                                <Text style={Styles.giftText}>{item?.giftPercentage}</Text>
                              </View>
                              : null
                          }
                          <TouchableOpacity style={Styles.listIconWrap}>
                            <Text style={Styles.stakeTitle}>{"Stake"}</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  )
                })
              }

              <View style={Styles.claimContainer}>
                <Ionic
                  name={"add"}
                  size={15}
                  style={Styles.dotIcon} />
                <Text style={Styles.claimAmount}>{"421"}</Text>
                <Text style={Styles.claimText}>{"Claim"}</Text>
              </View>

            </View>
          </ScrollView>

        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default FarmingRewards;
