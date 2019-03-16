import React from 'react';
import { compose } from 'recompose';
import { TouchableHighlight, RegisteredStyle } from 'react-native';
import { withNavigation, NavigationInjectedProps } from 'react-navigation';
import { SpanText } from 'components/span-text';

import styles from './link-button-styles';

const LinkButtonComponent = (props: LinkButtonProps) => {
    const {routeName, children, navigation} = props;

    const isActive = navigation.state.routes[navigation.state.index].routeName === routeName;

    const style: RegisteredStyle<any>[] = [styles.link];
    if (isActive) {
        style.push(styles.activeLink);
    }

    return (
        <TouchableHighlight onPress={() => props.navigation.navigate(routeName)}>
            <SpanText style={style}>{children}</SpanText>
        </TouchableHighlight>
    );
};

export type LinkButtonOuterProps = {
    children: string;
    routeName: string;
};

export type LinkButtonProps = NavigationInjectedProps & LinkButtonOuterProps;

export const LinkButton = compose<LinkButtonProps, LinkButtonOuterProps>(withNavigation)(LinkButtonComponent);
