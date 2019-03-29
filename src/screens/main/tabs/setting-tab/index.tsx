import React from 'react';
import { View, ScrollView } from 'react-native';
import { inject } from 'mobx-react/native';
import Rate, { AndroidMarket } from 'react-native-rate';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import AnalTracker from 'utils/ga-tracker';
import { __ } from 'utils/i18n';
import { SpanText } from 'components/span-text';
import RouteKeys from 'router/route-keys';
import { Color } from 'styles/variables';
import MenuLink from './components/menu-link';


import { styles } from './setting-tab.style';
import Icon from 'components/icon';
import Constants from 'utils/constants';

type SettingsProps
    = mobx.user.WithUserProps
    & NavigationInjectedProps;


// @ts-ignore
@withNavigation
@inject('User')
export default class SettingTab extends React.Component<SettingsProps> {
    public state: any = {
        rated: false,
        rateLoading: false,
    };

    public render(): JSX.Element {
        const { User } = this.props;
        const { rateLoading = false } = this.state;

        return (
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <View style={styles.preContent}>
                    <SpanText style={{ fontWeight: 'bold', fontSize: 32 }}>{__('Settings')}</SpanText>
                    <SpanText style={styles.userId}>User ID: {User.userId}</SpanText>
                </View>
                <View style={styles.menuBox}>
                    <MenuLink title={__('About application')}
                              route={RouteKeys.Setting_About}
                    />

                    <MenuLink title={__('Rate Bitfinex Ticker')}
                              isLoading={rateLoading}
                              onPress={this.__rateApplication}
                    />

                    <View style={styles.separator} />

                    <View style={styles.settingFooter}>

                        <Icon name="raccoona" height={20} fill={Color.GrayBlues} />
                    </View>
                </View>

                <View style={{ height: Constants.IS_IPHONE_X ? 90 : 60 }} />
            </ScrollView>
        );
    }

    protected __rateApplication = () => {
        const options = {
            AppleAppID: '1441322325',
            GooglePackageName: 'com.bitfinexticker',
            AmazonPackageName: 'com.bitfinexticker',
            preferredAndroidMarket: AndroidMarket.Google,
            preferInApp: true,
            openAppStoreIfInAppFails: true,
        };

        AnalTracker.logEvent('Rate_Click');
        this.setState({ rateLoading: true });

        Rate.rate(options, success => {
            if (success) {
                AnalTracker.logEvent('Rate_Success');

                // this technically only tells us if the user successfully
                // went to the Review Page. Whether they actually did anything, we do not know.
                this.setState({ rated: true });
            }

            this.setState({ rateLoading: false });
        });
    };
}
