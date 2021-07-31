import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './navigation/Tabs'
import LoginScreen from './Screens/Login/Login';
import OtpScreens from './Screens/Login/OtpScreen';
import EnterNameScreen from './Screens/Login/EnterName';
import AllowYourLocationScreen from './Screens/Login/AllowYourLocation';
import HomeScreen from './Screens/Home/Home';
import ServiceOptionsScreen from './Screens/ServiceOptions/ServiceOptions'
import WashMethodDetailsScreen from './Screens/ServiceOptions/WashMethodDetails/WashMethodDetails'
import SelectTimeSlotScreen from './Screens/ServiceOptions/SelectTimeSlot/SelectTimeSlot'
import SelectCarScreen from './Screens/ServiceOptions/SelectCar/SelectCar'
import AddCarScreen from './Screens/ServiceOptions/SelectCar/AddCar'
import AressScreen from './Screens/ServiceOptions/AddAddress/Address'
import AddAddressScreen from './Screens/ServiceOptions/AddAddress/AddAddress'
import SelectStreetScreen from './Screens/ServiceOptions/AddAddress/SelectStreet'
import BookingSummaryScreen from './Screens/BookingSummary/BookingSummary'
import CouponsScreen from './Screens/Coupons/Coupons'
import OrderCompleteScreen from './Screens/BookingSummary/OredrComplete'
import BookingDetailsScreen from './Screens/MyBookings/BookingDetails'
import HistoryScreen from './Screens/Profiles/ServiceHistory/ServiceHistory'
import HistoryDetailsScreen from './Screens/Profiles/ServiceHistory/HistoryDetails'
import CouponsListScreen from './Screens/Profiles/CouponesList/CouponsList'
import AboutUsScreen from './Screens/Profiles/About Us/AboutUs'
import PrivacyPolicyScreen from './Screens/Profiles/PrivacyPolicy/PrivacyPolicy'
import TermsAndConditionsScreen from './Screens/Profiles/TermsandCondtions/TermsandCondtions'
import FaqScreen from './Screens/Profiles/Faq/Faq'
import NotificationScreen from './Screens/Notification/Notification'
const Stack = createStackNavigator();

const App = () => {
  return (

    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: 'LoginScreen', headerShown: false }}
        />
        <Stack.Screen options={{ headerShown: false }} name="OtpScreen" component={OtpScreens} />
        <Stack.Screen options={{ headerShown: false }} name="EnterName" component={EnterNameScreen} />
        <Stack.Screen options={{ headerShown: false }} name="AllowLocation" component={AllowYourLocationScreen} />
        <Stack.Screen options={{ headerShown: false }} name="ServiceOptions" component={ServiceOptionsScreen} />
        <Stack.Screen options={{ headerShown: false }} name="WashMethodDetails" component={WashMethodDetailsScreen} />
        <Stack.Screen options={{ headerShown: false }} name="selectTimeSlot" component={SelectTimeSlotScreen} />
        <Stack.Screen options={{ headerShown: false }} name="selectCar" component={SelectCarScreen} />
        <Stack.Screen options={{ headerShown: false }} name="addCar" component={AddCarScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Address" component={AressScreen} />
        <Stack.Screen options={{ headerShown: false }} name="addAddress" component={AddAddressScreen} />
        <Stack.Screen options={{ headerShown: false }} name="selectStreet" component={SelectStreetScreen} />
        <Stack.Screen options={{ headerShown: false }} name="bookSummary" component={BookingSummaryScreen} />
        <Stack.Screen options={{ headerShown: false }} name="coupons" component={CouponsScreen} />
        <Stack.Screen options={{ headerShown: false }} name="orderComplete" component={OrderCompleteScreen} />
        <Stack.Screen options={{ headerShown: false }} name="bookingDetails" component={BookingDetailsScreen} />
        <Stack.Screen options={{ headerShown: false }} name="history" component={HistoryScreen} />
        <Stack.Screen options={{ headerShown: false }} name="historyDetails" component={HistoryDetailsScreen} />
        <Stack.Screen options={{ headerShown: false }} name="couponsList" component={CouponsListScreen} />
        <Stack.Screen options={{ headerShown: false }} name="aboutUs" component={AboutUsScreen} />
        <Stack.Screen options={{ headerShown: false }} name="privacyPolicy" component={PrivacyPolicyScreen} />
        <Stack.Screen options={{ headerShown: false }} name="termsAndCondition" component={TermsAndConditionsScreen} />
        <Stack.Screen options={{ headerShown: false }} name="faq" component={FaqScreen} />
        <Stack.Screen options={{ headerShown: false }} name="notification" component={NotificationScreen} />
        {/* <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen}  /> */}
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Tabs} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;