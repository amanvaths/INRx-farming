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
import BottomBar from "../../../Navigation/BottomBar";


export type Props = {
  navigation: any;
};

const Profile = (props: any) => {
  const { navigation } = props;


  return (
    <ImageBackground source={Images.profileBackground} style={Styles.backgroundContainer}>
      <SafeAreaView style={Styles.safeAreaContainer}>
        <StatusBar barStyle={'dark-content'} />
        <View style={Styles.mainContainer}>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={Styles.scrollContainer}>

              {/* Header */}
              <View style={Styles.headerContainer}>
                <View style={Styles.headerWrapper}>
                  <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Image source={Images.back} style={Styles.backIcon} />
                  </TouchableOpacity>
                  <View style={Styles.centerData}>
                    <Image source={Images.profileUser} style={Styles.userIcon} />
                    <Text style={Styles.userTitle}>{`David`}</Text>
                    <Text style={Styles.userId}>{`ID: 57458125`}</Text>
                    <View style={Styles.verifiedWrapper}>
                      <Ionic
                        name={"checkmark"}
                        size={20}
                        style={Styles.tickIcon} />
                      <Text style={Styles.verifyText}>{`Verified`}</Text>
                    </View>
                  </View>
                  <View style={Styles.empty} />
                </View>
              </View>
              {/* Main Content */}



              {/* Upgrade Limits */}
              <View style={Styles.listContainer}>
                <View style={Styles.listInner}>

                  <View style={Styles.seperateWrap}>
                    <Text style={Styles.listTitle}>{`Upgrade to increase your limits to 2M INR Daily`}</Text>
                  </View>
                  <Text style={Styles.requiredText}>{`Required`}</Text>
                  <View style={Styles.pointsWrapper}>
                    <Ionic
                      name={"ellipse"}
                      size={6}
                      style={Styles.dotIcon} />
                    <Text style={Styles.completeText}>{`Business Verification`}</Text>
                  </View>

                  <TouchableOpacity style={Styles.sendButton}>
                    <Text style={Styles.sendTitle}>{`Trust Id Business Verification`}</Text>
                  </TouchableOpacity>

                </View>
              </View>
              {/* Line */}
              <View style={Styles.line} />

              {/* Account Limits */}
              <View style={Styles.profileListContainer}>
                <Text style={Styles.accountTitle}>{"Account Limits"}</Text>
              </View>

              <View style={Styles.profileListContainer}>
                <Text style={Styles.profileListTitle}>{"INR Deposit & Withdrawal Limits"}</Text>
                <Text style={Styles.profileDescription}>{`50k INR Daily`}</Text>
              </View>

              <View style={Styles.profileListContainer}>
                <Text style={Styles.profileListTitle}>{"INRx Deposit Limit"}</Text>
                <Text style={Styles.profileDescription}>{`50k INR Daily`}</Text>
              </View>

              <View style={Styles.profileListContainer}>
                <Text style={Styles.profileListTitle}>{"INRx Withdrawal Limits"}</Text>
                <Text style={Styles.profileDescription}>{`50k INR Daily`}</Text>
              </View>

              <View style={Styles.profileListContainer}>
                <Text style={Styles.profileListTitle}>{"USDT & USDC Unlimited"}</Text>
                <Text style={Styles.profileDescription}>{`Unlimited`}</Text>
              </View>
              {/* Account Limits Ends */}

              <View style={Styles.line} />
              {/* Personal Information */}
              <View style={Styles.profileListContainer}>
                <Text style={Styles.accountTitle}>{"Personal Information"}</Text>
              </View>

              <View style={Styles.profileListContainer}>
                <Text style={Styles.profileListTitle}>{"Legal Name"}</Text>
                <Text style={Styles.profileDescription}>{`David`}</Text>
              </View>

              <View style={Styles.profileListContainer}>
                <Text style={Styles.profileListTitle}>{"Date of Birth"}</Text>
                <Text style={Styles.profileDescription}>{`1993-03-07`}</Text>
              </View>

              <View style={Styles.profileListContainer}>
                <Text style={Styles.profileListTitle}>{"Indentification Documents"}</Text>
                <Text style={Styles.profileDescription}>{``}</Text>
              </View>

              <View style={Styles.profileListContainer}>
                <Text style={Styles.profileListTitle}>{"Email Address"}</Text>
                <Text style={Styles.profileDescription}>{`am***@gmail.com`}</Text>
              </View>

              <View style={Styles.supportContainer}>
                <View style={Styles.supportInner}>
                  <TouchableOpacity>
                    <Text style={Styles.supportTitle}>
                      <Text style={Styles.supportTitle}>{`If you have questions for Customer Support, please click `}</Text>
                      <Text style={Styles.contactSupport}>{`Customer Support`}</Text>
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          </ScrollView>

        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default Profile;
