import { Platform } from 'react-native';

const theme = {
    appBar:{
        primary: '#24292e',
        textSecundary: '#999',
        textPrimary: '#fff',
    },
    colors:{
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#0366d6',
        secondary: '#000',
        background: '#fff',
        white: '#fff',
    },
    fontSizes:{
        body: 14,
        subheading: 16,
        medium: 18,
        large: 20,
        title: 24,
    },
    fonts: {
        main: Platform.select({
            ios: 'Arial',
            android: 'Roboto', 
            default: 'System',
        }),
    },
    fontWeights: {
        normal: 400,
        bold: 700,
    }
}

export default theme                