import React from 'react';
import { Animated } from 'react-native';

import {
    NavigationDescriptor,
    NavigationScene,
    NavigationStackViewConfig,
    NavigationTransitionProps,
} from 'react-navigation';

import SceneLayout from './scene-layout';

const NavigationProvider = require('react-navigation').NavigationProvider;
import { SceneTransitionProvider } from './scene-transition-context';


export type ShadeViewLayoutProps = NavigationStackViewConfig & {
    descriptors: { [key: string]: NavigationDescriptor };
    screenProps: any;
    transitionProps: NavigationTransitionProps;
    lastTransitionProps?: NavigationTransitionProps;
};


export class ShadeViewLayout extends React.PureComponent<ShadeViewLayoutProps> {
    public render(): JSX.Element {
        const { scenes } = this.props.transitionProps;

        return (
            <Animated.View style={{ flex: 1 }}>
                {scenes.map(this._renderScene)}
            </Animated.View>
        );
    }

    protected _renderScene = (scene: NavigationScene) => {
        const { getComponent, navigation } = scene.descriptor;
        const Component = getComponent() as React.ComponentType<any>;

        return (
            <NavigationProvider value={navigation} key={`card_${scene.key}`}>
                <SceneLayout index={scene.index} position={this.props.transitionProps.position}>
                    <SceneTransitionProvider value={{ ...this.props.transitionProps, scene }}>
                        <Component navigation={navigation} />
                    </SceneTransitionProvider>
                </SceneLayout>
            </NavigationProvider>
        );
    };
}
