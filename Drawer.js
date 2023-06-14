import React from 'react'
import { StyleSheet} from 'react-native'
import { Image, Dimensions } from 'react-native';
import { Block,Text} from 'expo-ui-kit';
import { DrawerItem,createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {AntDesign, Entypo, EvilIcons, Feather } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar } from 'react-native-elements';

import theme from './screens/theme';

import Home from './screens/Home';
import Blog from './screens/Blog';
import FAQ from './screens/FAQ';
import Contact from './screens/Contact';
import Login from './screens/Login';
import Signup from './screens/Singup';
import MainGame from './screens/MainGame';
import SelectCoin from './screens/SelectCoin';



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createStackNavigator();
const { width, height } = Dimensions.get('screen');
const GradientWrapper = ({ children }) => {
  return (
   <LinearGradient 
     colors={['#001145', '#121fd3', '#001145']} 
     start={{ x: 0, y: 0 }} 
     end={{ x: 1, y: 1 }}
     style={styles.gradient}
   >
     {children}
   </LinearGradient>
  );
};
const HeaderRight = () => { 
  return (
    <Block style={{ flexDirection: 'row', paddingRight: 10, paddingTop:15 }}>
      <Feather name="bell" size={25} color="#f8e975" style={{ paddingRight: 10 }}/>
      <AntDesign name="creditcard" size={25} color="#f8e975" />
    </Block>
  );
}
const Screens = ({navigation}) =>{
    return (
        
        <Stack.Navigator
            screenOptions={ {headerTransparent : true,
                headerTitle: null,
                headerShown: false
            }}
        >
            <Stack.Screen name="Login" component={Login} options={{ title: null , headerLeft: () => null,}}/>
            <Stack.Screen name="Blog" component={Blog} options={{ title: null , headerLeft: () => null}}/>
            <Stack.Screen name="FAQ" component={FAQ} options={{ title: null , headerLeft: () => null}}/>
            <Stack.Screen name="Contact" component={Contact} options={{ title: null , headerLeft: () => null}}/>
            
            <Stack.Screen name="Signup" component={Signup} options={{ title: null , headerLeft: () => null}}/>
            <Stack.Screen name="maingamenav" component={MainGameNav} />
            
        </Stack.Navigator>
        
    );
};
const MainGameNav = ({navigation}) => {
  const headerStyle = {
    backgroundColor: '#0033a6',
    
  };
  const headerTitleStyle = {
    color: 'white',
  };
  const avatarURI = require('./assets/ivan.png'); 
    return (
      <Stack.Navigator 
        screenOptions={{ headerShown: true, 
        
        headerStyle,
        headerTitleStyle,
        headerTintColor: '#0033a6',
        headerTitleAlign: 'center',
        headerTitle: () => <HeaderTitle />,
        headerLeft: () => (
          <Avatar
            rounded
            source={ avatarURI } // Replace with actual avatar URL
            onPress={() => navigation.navigate('Profile')}
            containerStyle={styles.avatarContainer}
            size="small"
          />
        ),
        }} >
        <Stack.Screen name="MainGame"  component={MainGame} />
        <Stack.Screen name="SelectCoin" component={SelectCoin} initialParams={{ coincount: 10 }} screenOptions={ {headerShown: true}} />
      </Stack.Navigator>
    );
  }

  
  const HeaderTitle = () => {
    // const logoURI = require('./assets/logo.png'); 
    // return (
    //   <Image marginLeft={-40}
    //     source={logoURI} 
    //     style={styles.logo}
    //   />
    // );
    return (
      <Text h2 white>
        <Entypo name="trophy" size={28} color="white"/>
          &nbsp;CoinQuest
      </Text>
    )
  };
const DrawerContent = (props) =>{
    
    return(
      <GradientWrapper>
    <DrawerContentScrollView  marginTop={-5} > 
      {/* <DrawerItemList {...props} /> */}
      <Block height={height} top >
        
        <DrawerItem
            label="Home"
            labelStyle={{marginLeft:-16, marginTop:30, color:theme.COLORS.WHITE, fontSize:20}}
            onPress={() => props.navigation.navigate("Home")}
            icon={()=><AntDesign name="home" size={22} style={{marginTop:30,color:theme.COLORS.WHITE}} />}
        />
        <DrawerItem
            label="Blog"
            labelStyle={{marginLeft:-16, color:theme.COLORS.WHITE, fontSize:20}}
            onPress={() => props.navigation.navigate("Blog")}
            icon={()=><AntDesign name="message1"  size={22} style={{color:theme.COLORS.WHITE}}/>}
        />
        <DrawerItem
            label="FAQ"
            labelStyle={{marginLeft:-16, color:theme.COLORS.WHITE, fontSize:20}}
            onPress={() => props.navigation.navigate("FAQ")}
            icon={()=><AntDesign name="question" size={22} style={{color:theme.COLORS.WHITE}}/>}
        />
        <DrawerItem
            label="Contact Us"
            labelStyle={{marginLeft:-16, color:theme.COLORS.WHITE, fontSize:20}}
            onPress={() => props.navigation.navigate("Contact")}
            icon={()=><AntDesign name="phone"  size={22} style={{color:theme.COLORS.WHITE}}/>}
        />
        <DrawerItem
            label="Log In"
            labelStyle={{marginLeft:-16, color:theme.COLORS.WHITE, fontSize:20}}
            onPress={() => props.navigation.navigate("Login")}
            icon={()=><AntDesign name="login"  size={22} style={{color:theme.COLORS.WHITE}}/>}
        />
        <DrawerItem
            label="Sign Up"
            labelStyle={{marginLeft:-16, color:theme.COLORS.WHITE, fontSize:20}}
            onPress={() => props.navigation.navigate("Signup")}
            icon={()=><AntDesign name="user"  size={22} style={{color:theme.COLORS.WHITE}}/>}
        />
      </Block>
    </DrawerContentScrollView>
    </GradientWrapper>
    );
}
export default function DrawerNav() {
    const headerStyle = {
        backgroundColor: '#0033a6',
        
      };
      const headerTitleStyle = {
        color: 'white',
      };
      const logoURI = require('./assets/CF_Logo_White_Font.png'); 
    // const [progress, setProgress] = useState(new Animated.Value(0));
  return (
    
    <Drawer.Navigator 
        drawerType = "slide"
        overlayColor = "transparent"
        initialRouteName="Login" 
        screenOptions={{
            headerShown: false,
            
            
            headerRight: () => <HeaderRight />

        }}
        drawerContent={(props) => {
            // setProgress(props.progress);
            return <DrawerContent {...props}/>;
        }}>
      <Drawer.Screen name="COINFANTASY" 
        options={{ headerShown: false, 
        headerStyle,
        headerTintColor: '#FFFFFF',
        headerTitleAlign: 'center',
        headerTitle: () => <HeaderTitle />,
        }} 
        >
        {props => <Screens {...props} />}
      </Drawer.Screen>
    </Drawer.Navigator>
    
  )
    }

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  logo: {
    resizeMode:'center',
    height: 40,
    width: 120,
  },
  avatarContainer: {
    marginLeft: 10
  }
})