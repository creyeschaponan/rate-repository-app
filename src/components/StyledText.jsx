import { Text, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorPrimary:{
    color: theme.colors.primary,
  },
  colorSecundary:{
    color: theme.colors.secondary,
  },
  bold:{
    fontWeight: theme.fontWeights.bold,
  },
  subHeading:{
    fontSize: theme.fontSizes.subheading,
  },
  textAlingCenter:{
    textAlign: 'center',
  },
})

export default function StyledText({ aling,children,color,fontSize,fontWeight, style, ...restOfProps }) {
    const textStyles = [
        styles.text,
        aling === 'center' && styles.textAlingCenter,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecundary,
        fontSize === 'subheading' && styles.subHeading,
        fontWeight === 'bold' && styles.bold,
        style
    ]

    return (
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}