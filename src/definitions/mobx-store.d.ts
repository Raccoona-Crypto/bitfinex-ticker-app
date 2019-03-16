import { KunaV3Ticker } from 'kuna-sdk';
import { UsdCalculator } from 'utils/currency-rate';

declare global {
    export namespace mobx {
        type Store
            = usdrate.WithUsdRateProps
            & ticker.WithTickerProps
            & user.WithUserProps;

        /**
         * Mobx model for control USD to UAH rate.
         */
        namespace usdrate {
            interface StoreModel {
                rate: number;
                lastUpdate?: string;

                updateUsdRate(): Promise<number>;
            }

            type WithUsdRateProps = {
                UsdRate: StoreModel,
            };
        }


        /**
         * This model helps us to track Ticker list
         */
        namespace ticker {
            interface TickerModel {
                tickers: Record<string, KunaV3Ticker>;
                favorite: FavoriteModel;
                lastUpdate?: string;

                usdCalculator: UsdCalculator;

                fetchTickers(): Promise<void>;

                getFavorite(): KunaV3Ticker[];

                getTicker(marketSymbol: string): KunaV3Ticker | undefined;

                getMarketVolume(): Numeral;
            }

            interface FavoriteModel {
                exists(marketSymbol: string): boolean;

                add(marketSymbol: string): void;

                remove(marketSymbol: string): void;

                getList(): string[];

                setList(marketSymbols: string[]): void;
            }

            type WithTickerProps = {
                Ticker: TickerModel,
            };
        }

        /**
         * Mobx User
         */
        namespace user {
            interface UserModel {
                userId?: string;
                telegram?: string;
                displayName?: string;

                setDisplayName(name: string): void;

                setTelegram(telegram: string): void;
            }

            type WithUserProps = {
                User: UserModel,
            };
        }
    }
}

export {};
