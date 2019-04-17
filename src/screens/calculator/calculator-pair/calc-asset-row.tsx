import React from 'react';
import { TextInput, View } from 'react-native';
import { SpanText } from 'components/span-text';
import styles from './calculator-pair.style';

type CalcAssetRowProps = {
    asset: string;
    value: string;
    onChangeText: (text: string) => void;
};

export default class CalcAssetRow extends React.PureComponent<CalcAssetRowProps> {
    public render(): JSX.Element {
        const asset = this.props.asset;

        return (
            <View style={styles.calcAssetRow}>
                <TextInput style={styles.valueInput}
                           value={this.props.value}
                           placeholder="0.00"
                           onChangeText={this.props.onChangeText}
                           keyboardType="numeric"
                           returnKeyType="done"

                />

                <View style={styles.assetIcon} pointerEvents="box-none">
                    <SpanText style={styles.assetIconText}>{asset}</SpanText>
                </View>
            </View>
        );
    }
}