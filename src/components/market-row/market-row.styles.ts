import { StyleSheet } from 'react-native';
import { Color } from 'styles/variables';

const styles = StyleSheet.create({
    listItemLink: {
        marginLeft: 20,
        marginRight: 20,
        paddingRight: 15,
        borderRadius: 10,

        backgroundColor: Color.White,
        shadowColor: "#1a1725",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 10,
        marginTop: 10,
    },

    favoriteLabel: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 36,
        height: 36,
        zIndex: 0,
        overflow: 'hidden',
        borderTopLeftRadius: 10,
    },

    favoriteIcon: {
        height: 22,
        width: 60,
        transform: [{ rotate: '-45deg' }, { translateX: -14 }, { translateY: -14 }],
        textAlign: 'center',
        lineHeight: 22,
        color: Color.White,

        backgroundColor: Color.Main,
    },

    listItemLinkInvisible: {
        height: 0,
        overflow: 'hidden',
    },

    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 74,
    },

    tickerCell: {
        alignItems: 'flex-end',
    },

    priceBox: {
        flexDirection: 'row',
    },
    priceValue: {
        fontSize: 18,
    },

    secondaryInfo: {
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },

    marketVolume: {
        fontSize: 14,
        color: Color.GrayBlues,
    },
});

export default styles;
