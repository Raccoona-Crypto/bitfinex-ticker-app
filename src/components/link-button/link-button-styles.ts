import { StyleSheet } from 'react-native';
import { Color } from 'styles/variables';

export default StyleSheet.create({
    link: {
        textAlign: 'center',
        padding: 10,
        width: 100,
        color: Color.SecondaryText,
    },
    activeLink: {
        color: Color.Main,
    },
});
