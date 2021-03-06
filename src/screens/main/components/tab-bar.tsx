import React from 'react';
import { Animated, Dimensions, StyleProp, TouchableOpacity, View } from 'react-native';
import { KunaAssetUnit } from 'kuna-sdk';
import * as SlideView from 'components/slide-view';
import { tabBarStyles } from '../styles';
import { __ } from 'utils/i18n';
import Tabs from '../tabs';
import SpanText from 'components/span-text';

const { width } = Dimensions.get('window');

export type TabnavRoute = {
    key: string;
    /**
     * Need implement functional at based library
     *
     * @deprecated
     */
    index: number;
    title: string;
    isBeta?: boolean;
    sceneComponent: React.ComponentClass | React.SFC | (() => JSX.Element) | any;
    assets?: KunaAssetUnit[];
};


export const tabNavigationRoutes: TabnavRoute[] = [
    {
        key: 'Dashboard',
        title: __('Dashboard'),
        index: 0,
        sceneComponent: Tabs.DashboardTab,
    }, {
        key: 'Markets',
        title: __('Markets'),
        index: 1,
        sceneComponent: Tabs.MarketTab,
    }, {
        key: 'Setting',
        title: __('Setting'),
        index: 2,
        sceneComponent: Tabs.SettingTab,
    },
];


type TabBarProps = {
    navigationState: SlideView.NavigationState<TabnavRoute>;
    position: Animated.Value;
    onPressTab?: (index: number) => void;
};

export class TabBarComponent extends React.PureComponent<TabBarProps> {
    public render(): JSX.Element {
        const { navigationState } = this.props;

        return (
            <View style={tabBarStyles.container}>
                <View style={tabBarStyles.tabBar}>
                    {navigationState.routes.map(this.__renderTabItem)}
                </View>
            </View>
        );
    }

    private __renderTabItem = (route: TabnavRoute, index: number) => (
        <QuoteTabItem key={route.key}
                      route={route}
                      position={this.props.position}
                      index={index}
                      onPress={this.__generatePressTabHandler(index)}
        />
    );

    protected __generatePressTabHandler = (index: number) => {
        const { onPressTab } = this.props;

        return () => onPressTab ? onPressTab(index) : undefined;
    };
}


type TabItemProps = {
    route: TabnavRoute;
    onPress?: () => void;
    index: number;
    position: Animated.Value;
};

class QuoteTabItem extends React.PureComponent<TabItemProps> {
    protected boxAnimatedStyle: StyleProp<any>;

    public constructor(props: TabItemProps) {
        super(props);

        const { position, index } = this.props;
        const inputRange = [index - 1, index, index + 1];

        this.boxAnimatedStyle = {
            opacity: position.interpolate({
                inputRange: inputRange,
                outputRange: [0.35, 1, 0.35],
                extrapolate: 'clamp',
            }),
        };
    }
    
    public render(): JSX.Element {
        const { route } = this.props;

        return (
            <Animated.View style={[tabBarStyles.tab, this.boxAnimatedStyle]}>
                <TouchableOpacity style={tabBarStyles.tabBtn} onPress={this.props.onPress}>
                    <SpanText style={tabBarStyles.text}>{route.title}</SpanText>
                    {route.isBeta ? (
                        <SpanText style={tabBarStyles.betaLabel}>beta</SpanText>
                    ) : undefined}
                </TouchableOpacity>
            </Animated.View>
        );
    }
}
