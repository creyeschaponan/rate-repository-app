import { Text,View, StyleSheet,ScrollView } from 'react-native'
import StyledText from './StyledText'
import Constants from 'expo-constants';
import theme from '../theme'
import { Link, useLocation } from 'react-router-native';


const styles = StyleSheet.create({
    container:{
        backgroundColor: 'red',
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight + 10,
    },
    scroll:{
        paddingBottom: 15
    },
    text:{
        color: theme.appBar.textSecundary,
        paddingHorizontal: 10,
    },
    active:{
        color: theme.appBar.textPrimary
    }
})

const AppBarTap = ({children, to}) => {
    const { pathname } = useLocation();
    const active = pathname === to

    const  textStyles = [
        styles.text,
        active && styles.active
    ]

    return (
        <Link to={to}  >
            <StyledText fontWeight='bold' style={textStyles}>
                {children}
            </StyledText>
        </Link>
    )
}


export default function AppBar() { 
    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scroll}>
                <Text>Esta es la versión de iOS</Text>
                <AppBarTap  to='/'>Repositories</AppBarTap>
                <AppBarTap  to='/signin'>Sign In</AppBarTap>
            </ScrollView>
        </View>
    )
}
