import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'react-native-firebase';
import { isIphoneX } from 'utils/helper';
import config from 'utils/remote-config';
import Constants from 'utils/constants';

type AdvBannerProps = {
    showBanner?: boolean;
};

export default class AdvBanner extends React.PureComponent<AdvBannerProps> {
    public state: any = {
        enableAdv: false,
    };

    public async componentDidMount(): Promise<void> {
        const enabledAdv = await config.getValue('Bitfinex_DashboardAdv_Enable_01');

        this.setState({
            enabledAdv: Boolean(enabledAdv.val()),
        });
    }

    public render(): JSX.Element {
        if (!this.state.enableAdv) {
            return <View />;
        }

        const { Banner, AdRequest } = (firebase as any).admob;
        const request = new AdRequest();

        const { showBanner = false } = this.props;

        return (
            <View style={styles.adBanner}>
                {showBanner ? (
                    <Banner
                        unitId={Constants.ADMOB_BANNERS.dashboard}
                        size="SMART_BANNER"
                        request={request.build()}
                    />
                ) : undefined}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    adBanner: {
        width: '100%',
        paddingBottom: isIphoneX() ? 30 : 0,
    },
});
