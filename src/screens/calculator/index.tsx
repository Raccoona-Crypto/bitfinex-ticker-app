import React from 'react';
import { Keyboard, ActivityIndicator, View } from 'react-native';
import { Router, Switch, Route } from 'react-router-native';
import * as History from 'history';
import { NavigationInjectedProps } from 'react-navigation';
import { KunaMarket, kunaMarketMap } from 'kuna-sdk';
import kunaClient from 'utils/kuna-api';
import AnalTracker from 'utils/ga-tracker';
import OrderBookProcessor from 'utils/order-book-processor';
import { ShadeScrollCard } from 'components/shade-navigator';
import { CalculatorMode, OperationMode } from './common';
import OrderBookCalc from './order-book';
import { inject, observer } from 'mobx-react/native';
import Topic from 'components/topic';
import { wait } from 'utils/helper';


type State = {
    orderBook?: OrderBookProcessor;
    mode: CalculatorMode
};

type CalculatorScreenOuterProps = NavigationInjectedProps<{ marketSymbol: string; }>;
type CalculatorScreenProps = CalculatorScreenOuterProps & mobx.ticker.WithTickerProps;


@inject('Ticker')
@observer
export default class CalculatorScreen extends React.Component<CalculatorScreenProps, State> {
    public state: State = {
        orderBook: undefined,
        mode: CalculatorMode.LastPrice,
    };

    protected _history: History.MemoryHistory;

    public constructor(props: CalculatorScreenProps) {
        super(props);

        this._history = History.createMemoryHistory({
            initialIndex: 0,
            initialEntries: [`/${OperationMode.Buy}`],
        });
    }

    public async componentDidMount(): Promise<void> {
        const marketSymbol = this._marketSymbol;
        const currentMarket = kunaMarketMap[marketSymbol];

        this.props.navigation.addListener('willBlur', () => {
            Keyboard.dismiss();
        });

        AnalTracker.logEvent('open_calculator', {
            market: currentMarket.key,
        });

        await wait(300);

        try {
            const orderBook = await kunaClient.getOrderBook(marketSymbol);

            this.setState({
                orderBook: new OrderBookProcessor(orderBook, 35),
            });
        } catch (error) {
            console.warn(error);
        }
    }


    public render(): JSX.Element {
        const { Ticker } = this.props;

        const currentMarket = this._currentMarket;
        const tick = Ticker.getTicker(currentMarket.key);

        if (!tick) {
            return <ShadeScrollCard />;
        }

        return (
            <ShadeScrollCard>
                <Topic title={`Calculate ${currentMarket.baseAsset}/${currentMarket.quoteAsset}`} />
                <View style={{ paddingLeft: 20, paddingRight: 20 }}>
                    <Router history={this._history}>{this.__renderRouterPart()}</Router>
                </View>
            </ShadeScrollCard>
        );
    }


    protected get _marketSymbol(): string {
        return this.props.navigation.getParam('marketSymbol');
    }

    protected get _currentMarket(): KunaMarket {
        const symbol = this._marketSymbol;
        return kunaMarketMap[symbol];
    }


    protected __renderRouterPart = () => {
        return (
            <Switch>
                <Route path="/:operation"
                       render={this.__renderOrderBookCalculator}
                />
            </Switch>
        );
    };

    protected __renderOrderBookCalculator = () => {
        const { Ticker } = this.props;
        const { orderBook } = this.state;

        const currentMarket = this._currentMarket;
        const tick = Ticker.getTicker(currentMarket.key);

        if (!orderBook || !tick) {
            return <ActivityIndicator />;
        }


        const usdCalculator = Ticker.usdCalculator;
        const usdPrice = usdCalculator.getUsdPrice(currentMarket.key);


        return (
            // @ts-ignore
            <OrderBookCalc ticker={tick}
                           orderBook={orderBook}
                           market={currentMarket}
                           usdPrice={usdPrice.value()}
            />
        );
    };
}
