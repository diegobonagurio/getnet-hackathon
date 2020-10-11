import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Auth = createStackNavigator();

import Home from '../Pages/Home';
import Sales from '../Pages/Sales';
import Payment from '../Pages/Payment';
import InputSales from '../Pages/InputSales';
import InputPayment from '../Pages/InputPayment';
import CreatedSales from '../Pages/CreatedSales';
import CreatedPayment from '../Pages/CreatedPayment';
import ReportSales from '../Pages/ReportSales';
import ReportPayment from '../Pages/ReportPayment';

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {backgroundColor: '#fff'},
    }}>
    <Auth.Screen name="Home" component={Home} />
    <Auth.Screen name="Sales" component={Sales} />
    <Auth.Screen name="Payment" component={Payment} />
    <Auth.Screen name="InputSales" component={InputSales} />
    <Auth.Screen name="InputPayment" component={InputPayment} />
    <Auth.Screen name="CreatedSales" component={CreatedSales} />
    <Auth.Screen name="CreatedPayment" component={CreatedPayment} />
    <Auth.Screen name="ReportSales" component={ReportSales} />
    <Auth.Screen name="ReportPayment" component={ReportPayment} />
  </Auth.Navigator>
);

export default AuthRoutes;
