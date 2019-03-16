import React from 'react';
import { View, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import SvgIcon from 'react-native-svg-icon';
import { KunaAsset } from 'kuna-sdk';

import { svgIcons, findIcon } from './svg-icons';
import { coinShadow } from 'styles/shadows';
import Icon from 'components/icon';
import { SpanText } from 'components/span-text';
import { DefaultStyles } from 'styles/variables';

type CoinIconProps = {
    asset: KunaAsset;

    withShadow?: boolean;
    naked?: boolean;
    size?: number;
    style?: StyleProp<ViewStyle>;
};

export const CoinIcon = (props: CoinIconProps) => {
    const { size = 32, asset, style = {} } = props;

    const coinIconStyle = {
        height: size,
        width: size,
    };

    const svgShapeStyle = {
        position: 'absolute',
        left: 0,
        top: 0,
    };

    const existsIcon = findIcon(asset);

    if (!existsIcon) {
        const symbolContainerStyle: any = {
            width: size,
            height: size,
            fontSize: size * 0.625,
            lineHeight: size,
            textAlign: 'center',
        };

        const iconStyle = [
            styles.onlySymbolText,
            { color: naked ? asset.color : '#FFFFFF' },
            symbolContainerStyle,
        ];

        return (
            <View style={[coinIconStyle, style]}>
                <SpanText style={iconStyle}>{asset.name.charAt(0).toUpperCase()}</SpanText>
            </View>
        );
    }

    const svgShapeIconStyle = {
        position: 'absolute',
        left: 0,
        top: 0,
    };

    return (
        <View style={[coinIconStyle, style]}>
            {backgroundLayout}
            <SvgIcon svgs={svgIcons}
                     name={asset.key as string}
                     width={size}
                     height={size}
                     fill={naked ? asset.color : '#FFFFFF'}
                     style={svgShapeIconStyle}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    onlySymbolView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    onlySymbolText: {
        ...DefaultStyles.boldFont,
        position: 'absolute',
        top: 0,
        left: 0,
    },
});
