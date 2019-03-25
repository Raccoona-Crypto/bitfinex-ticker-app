import React from 'react';
import { Path } from 'react-native-svg';
import { SvgIconProps } from 'react-native-svg-icon';
import { KunaAsset, KunaAssetUnit } from 'kuna-sdk';


export const svgIcons: Record<string, SvgIconProps> = {
    BTC: {
        svg: <Path d="M52.9059133,32.1571112 C53.6549821,27.149992 49.84261,24.4582832 44.6297026,22.6626348 L46.3206931,15.8798579 L42.1919952,14.8509173 L40.5456901,21.4549524 C39.4603047,21.184488 38.345521,20.9293107 37.2377929,20.6764853 L38.8958573,14.0289407 L34.7695112,13 L33.0773448,19.780425 C32.1789326,19.5758128 31.2969835,19.3735524 30.4409049,19.1607087 L30.4456086,19.1395419 L24.751745,17.7178399 L23.6534243,22.1275856 C23.6534243,22.1275856 26.7167276,22.8296171 26.6520514,22.8731266 C28.3242269,23.2905825 28.6264415,24.3971347 28.5758764,25.2743801 L26.6496995,33.0014305 C26.7649409,33.0308288 26.9142842,33.0731624 27.0789147,33.1390146 C26.9413307,33.1049126 26.7943392,33.0672827 26.6426439,33.0308288 L23.9427036,43.8552846 C23.7380914,44.3632873 23.2195053,45.1252913 22.0506287,44.836012 C22.0917864,44.8959846 19.0496498,44.0869432 19.0496498,44.0869432 L17,48.8130147 L22.3728341,50.1524014 C23.3723765,50.402875 24.351928,50.6651079 25.3161924,50.9120536 L23.6075629,57.772442 L27.7315571,58.8013826 L29.4237235,52.0139021 C30.5502666,52.3196444 31.6438835,52.6018682 32.7139818,52.8676288 L31.027695,59.6233592 L35.1563929,60.6522999 L36.8650224,53.8048468 C43.9053284,55.137178 49.1993751,54.5997769 51.4277666,48.2321042 C53.223415,43.1050398 51.3383957,40.1475704 47.6342093,38.2190416 C50.3317978,37.5969735 52.3638086,35.8224918 52.9059133,32.1571112 L52.9059133,32.1571112 Z M43.4725853,45.3851724 C42.1966989,50.5122367 33.5641807,47.7405645 30.7654621,47.0455886 L33.0326594,37.9568087 C35.831378,38.6553125 44.8060924,40.0382087 43.4725853,45.3851724 Z M44.7496477,32.0830275 C43.5854748,36.7467745 36.4005292,34.3772712 34.0698316,33.7963607 L36.125361,25.5530761 C38.4560586,26.1339866 45.9620338,27.218196 44.7496477,32.0830275 L44.7496477,32.0830275 Z"/>,
        viewBox: '0 0 72 72'
    },
    ETH: {
        svg: <Path d="M23,36.870219 L36.4958542,14.0001533 L49.9919843,36.870219 L36.4960396,45.0176267 L27.4161847,39.5362741 L23.0000949,36.8703051 Z M36.4960396,47.6274482 L50,39.4841336 L36.4959447,58.9075834 L23,39.4839828 L36.4960396,47.6273546 Z"/>,
        viewBox: '0 0 72 72'
    },
    LTC: {
        svg: <Path d="M33.9469724 46.8516975 36.2287544 38.0688207 41.6309416 36.0513156 42.97466 30.8896525 42.928781 30.7616087 37.6110964 32.7474848 41.4425181 18 30.5764737 18 25.5658575 37.2458078 21.3823418 38.808071 20 44.1294071 24.1803148 42.5684528 21.2272073 53.9108931 50.1460657 53.9108931 52 46.8516975 33.9469724 46.8516975 Z" />,
        viewBox: '0 0 72 72'
    },
    WAVES: {
        svg: <Path d="M17 36 36 17 55 36 36 55 Z" />,
        viewBox: '0 0 72 72'
    },
    EOS: {
        svg: <Path d="M36.1,12 L24.8,27.5 L20,50.3 L36.1,60 L52.2,50.3 L47.4,27.4 L36.1,12 Z M27.4,27.9 L36.1,16 L44.8,27.9 L36.1,54 L27.4,27.9 Z M46,31.8 L49.6,49.2 L37.8,56.3 L46,31.8 Z M22.6,49.2 L26.2,31.8 L34.4,56.3 L22.6,49.2 Z" />,
        viewBox: '0 0 72 72'
    },
    DASH: {
        svg: <Path d="M42.63,20 L27.826,20 L26.6,26.857 L39.958,26.873 C46.538,26.871 48.482,29.261 48.427,33.223 C48.398,35.255 47.517,38.689 47.137,39.803 C46.123,42.769 44.042,46.155 36.232,46.143 L23.247,46.137 L22.017,53 L36.788,53 C41.998,53 44.213,52.394 46.56,51.31 C51.762,48.907 54.857,43.773 56.097,37.073 C57.944,27.097 55.644,20 42.63,20 Z M21.439,33.057 C17.561,33.057 17.005,35.584 16.639,37.111 C16.158,39.111 16,39.921 16,39.921 L31.157,39.921 C35.035,39.921 35.591,37.393 35.957,35.866 C36.438,33.866 36.597,33.056 36.597,33.056 L21.438,33.056 L21.439,33.057 Z"/>,
        viewBox: '0 0 72 72'
    },
    XRP: {
        svg: <Path d="M50.14 19.34h5.78L43.9 31.32a11.19 11.19 0 0 1-15.78 0L16.07 19.34h5.79l9.14 9.1a7.09 7.09 0 0 0 10 0l9.14-9.1zM21.79 52.67H16L28.11 40.6a11.19 11.19 0 0 1 15.78 0L56 52.67h-5.79L41 43.49a7.09 7.09 0 0 0-10 0l-9.21 9.18z"/>,
        viewBox: '0 0 72 72'
    },
    XEM: {
        svg: <Path d="M29.7216835,34.5257911 C28.3117008,35.3069569 26.7078642,35.72 25.0843613,35.72 C21.2713395,35.72 17.730837,33.3638279 16.2607315,29.852589 C16.1122039,29.2518499 15.9878377,28.7068418 15.8808903,28.1892332 C15.3727496,25.7223446 15.076818,23.1965564 15.0007749,20.6828837 C14.9962797,20.5268742 15.0107017,20.4950013 15.0608977,20.4087021 C15.0839354,20.3682552 15.1045382,20.3334 15.4051522,20.1742219 C21.7927784,16.7893563 28.994591,15 36.2329267,15 C37.7918116,15 39.3707375,15.08574 40.9466667,15.2553561 C37.0574144,17.4970839 34.634709,21.6159584 34.634709,26.2321248 L34.6350836,26.257474 C34.6206617,29.6104667 32.8842178,32.6430528 29.9794062,34.3781692 C29.8973695,34.4286812 29.8145835,34.4754654 29.7216835,34.5257911 Z M40.98026,37.4466629 C43.8378569,39.1625283 45.6129601,42.3030693 45.6133333,45.6424807 C45.6133333,47.7143277 44.9205373,49.7670742 43.6616717,51.4286341 C43.2079575,51.8655122 42.7947435,52.2493956 42.3988868,52.6018193 C40.659058,54.1517721 38.7717861,55.5781332 36.7906358,56.8415779 C36.6021326,56.9610499 36.5086276,57 36.1243423,57 C35.6999301,57 35.5795493,56.9514996 35.4054171,56.8398925 C28.1336719,52.2095092 22.2701018,45.3606541 18.7333333,37.4131433 C20.6413219,38.4979417 22.8040698,39.0816318 24.985668,39.0816318 C27.1441233,39.0816318 29.2760761,38.5288397 31.1454308,37.4858003 C31.2719706,37.4170758 31.3985104,37.3429207 31.4942551,37.2831847 C32.8880592,36.5043695 34.4800716,36.0933333 36.0983997,36.0933333 C37.7083293,36.0933333 39.2995951,36.5043695 40.6687631,37.2640842 L40.7562958,37.3148317 C40.8285242,37.3554672 40.9009393,37.397788 40.98026,37.4466629 Z M57.3134401,20.5575507 C57.365042,20.6465325 57.3768207,20.6737111 57.3725205,20.8285916 C57.1062846,29.616198 54.1124396,38.2772193 48.9012085,45.4266667 C48.8565242,41.0423573 46.4953633,36.9329981 42.7198242,34.682391 C42.6162465,34.6196569 42.5055642,34.5567367 42.4175044,34.5092674 L42.3756246,34.4837642 C39.4947054,32.7476879 37.774829,29.7118813 37.7733333,26.3622184 L37.7733333,26.2406595 C37.836527,21.0610985 42.0880749,16.8666667 47.304541,16.8666667 C47.7861587,16.8666667 48.2760028,16.9042699 48.7624816,16.9783593 C49.3044885,17.1380798 49.8371473,17.3056188 50.3458747,17.4765086 C52.6169193,18.2391833 54.8451492,19.1971341 56.9698013,20.3237407 C57.2702515,20.4830889 57.2908175,20.5188306 57.3134401,20.5575507 Z" />,
        viewBox: '0 0 72 72'
    },
    XLM: {
        svg: (
            <Path d="M15.6820034,58.1402085 C16.02275,58.3823354 16.1020851,58.8538067 15.8593986,59.1935218 L8.37356827,69.682654 C8.22573895,69.8896295 7.99290777,70 7.75638086,70 C7.60460943,70 7.45111332,69.9545244 7.31782055,69.859886 C6.97732035,69.6182507 6.89798528,69.1465335 7.14042537,68.8068185 L14.6262557,58.3171946 C14.8686958,57.9774796 15.3415032,57.8980816 15.6820034,58.1402085 Z M16.7218298,62.1356742 C17.021035,62.3689944 17.0895983,62.8212584 16.8750124,63.1464925 L13.2083928,68.6980979 C13.0782092,68.8948881 12.8736041,69 12.6661783,69 C12.5316553,69 12.3958305,68.9561641 12.2782313,68.8640144 C11.9788092,68.6311656 11.9104628,68.178666 12.1250487,67.8536675 L15.7916683,62.3018265 C16.0062542,61.9770637 16.4228416,61.9028255 16.7218298,62.1356742 Z M51,24.6856403 C51,29.5987931 48.9078731,33.3656315 46.5225446,36.1910002 C44.1374611,39.016129 41.8148914,41.7997612 41.8148914,41.7997612 C41.8148914,41.7997612 43.8567621,44.9784508 43.024226,49.4692015 C42.19169,53.9599522 39.5555709,57 39.5555709,57 C39.5555709,57 39.3359148,54.3593273 38.73946,52.8853575 C38.1434956,51.4111478 35.7893013,48.4939108 35.7893013,48.4939108 C35.7893013,48.4939108 34.7224,49.763036 33.4878147,49.8246813 C33.0217808,49.8477084 32.271861,49.4912691 31.3966684,48.9518129 C31.292724,49.1041272 31.1858378,49.2566812 31.0762548,49.4082759 C27.6399598,54.1580806 22.8531225,56.6229324 20.3844423,54.9136551 C17.9160072,53.2038981 18.7009838,47.9678871 22.137524,43.2171229 C22.2828991,43.0163559 22.4314612,42.820866 22.5814942,42.6284944 C21.6175567,41.8343017 20.9174026,41.1046327 20.8713141,40.5918015 C20.7666342,39.4250986 21.3106264,38.6268282 21.3106264,38.6268282 C21.3106264,38.6268282 19.0091398,37.6858382 16.7076531,37.6241929 C14.4061665,37.5625477 12,38.2380072 12,38.2380072 C12,38.2380072 14.2178898,34.5529627 17.8373134,32.5879895 C21.4572273,30.6227763 26.0391175,30.7043304 26.0391175,30.7043304 C26.0391175,30.7043304 28.1312443,27.1627251 29.1356319,25.504539 C30.1400195,23.846353 32.1693874,20.2428625 37.5259578,17.4182135 C42.8820379,14.5935644 49.2844266,15.0234023 49.2844266,15.0234023 C49.2844266,15.0234023 51,19.7727273 51,24.6856403 Z M30.2648018,48.3058568 C30.2814722,48.2837892 30.2954458,48.2617216 30.311871,48.239654 C29.1209228,47.4202755 27.8299525,46.4349105 26.7505484,45.6690219 C25.9310054,45.0878292 24.9550555,44.4193258 24.0357356,43.7469844 C24.0264198,43.7592175 24.0168589,43.7707311 24.0077883,43.7829642 C21.7317975,46.798066 21.2870918,50.2542794 23.015168,51.5032559 C24.7434893,52.7519926 27.988811,51.3207187 30.2648018,48.3058568 Z M38.9696577,32.8537598 C41.8006726,32.8537598 44.0955401,30.6081446 44.0955401,27.8381847 C44.0955401,25.0679849 41.8006726,22.8226096 38.9696577,22.8226096 C36.1383977,22.8226096 33.843285,25.0679849 33.843285,27.8381847 C33.843285,30.6081446 36.1383977,32.8537598 38.9696577,32.8537598 Z"/>
        ),
        viewBox: '0 0 72 72'
    },


    RMB: {
        svg: <Path d="M25.3790615,56.5308012 L26.7318484,51.5275675 L32.1656274,52.9967663 L30.8128405,58 L25.3790615,56.5308012 Z M50.2755186,46.9798092 L44.9234511,48.4562416 L45.7385648,51.4398655 L40.7402259,52.7932619 L35.5111944,33.4458453 C39.0293448,32.4655235 41.2829599,29.0376242 40.7882391,25.4191073 C40.2935184,21.8005904 37.2024868,19.103407 33.5503075,19.103407 C29.8981283,19.103407 26.8070967,21.8005904 26.312376,25.4191073 C25.8176552,29.0376242 28.0712703,32.4655235 31.5894207,33.4458453 L29.190218,42.2583013 L34.5884241,43.7962518 L33.2350277,48.7945907 L27.8368217,47.2566403 L26.6987383,51.4706245 L21.7003994,50.1172281 L25.468378,36.060361 C21.4429888,32.6875453 19.9578333,27.1566992 21.7522384,22.221139 C23.5466435,17.2855788 28.237157,14 33.4887895,14 C38.740422,14 43.4309356,17.2855788 45.2253407,22.221139 C47.0197458,27.1566992 45.5345903,32.6875453 41.5092011,36.060361 L43.5239162,43.5194207 L48.9221222,41.9814702 L50.2755186,46.9798092 Z" />,
        viewBox: '0 0 72 72'
    },
    ERC20: {
        svg: <Path d="M19.148,38.532 L19.148,41.024 L11,41.024 L11,31.224 L18.966,31.224 L18.966,33.716 L14.248,33.716 L14.248,34.864 L18.392,34.864 L18.392,37.244 L14.248,37.244 L14.248,38.532 L19.148,38.532 Z M24.622,38.56 L23.726,38.56 L23.726,41.024 L20.422,41.024 L20.422,31.224 L25.14,31.224 C26.0453379,31.224 26.8339966,31.3733318 27.506,31.672 C28.1780034,31.9706682 28.6959982,32.3999972 29.06,32.96 C29.4240018,33.5200028 29.606,34.1733296 29.606,34.92 C29.606,35.6200035 29.4473349,36.2313307 29.13,36.754 C28.8126651,37.2766693 28.3553363,37.6919985 27.758,38 L29.816,41.024 L26.288,41.024 L24.622,38.56 Z M26.274,34.92 C26.274,34.5559982 26.1620011,34.2736677 25.938,34.073 C25.7139989,33.8723323 25.3780022,33.772 24.93,33.772 L23.726,33.772 L23.726,36.068 L24.93,36.068 C25.3780022,36.068 25.7139989,35.9676677 25.938,35.767 C26.1620011,35.5663323 26.274,35.2840018 26.274,34.92 Z M35.92,41.248 C34.8839948,41.248 33.9506708,41.0310022 33.12,40.597 C32.2893292,40.1629978 31.6383357,39.5563372 31.167,38.777 C30.6956643,37.9976628 30.46,37.1133383 30.46,36.124 C30.46,35.1346617 30.6956643,34.2503372 31.167,33.471 C31.6383357,32.6916628 32.2893292,32.0850022 33.12,31.651 C33.9506708,31.2169978 34.8839948,31 35.92,31 C36.8720048,31 37.7213296,31.1679983 38.468,31.504 C39.2146704,31.8400017 39.8306642,32.3253302 40.316,32.96 L38.23,34.822 C37.6233303,34.0566628 36.9093374,33.674 36.088,33.674 C35.3973299,33.674 34.8420021,33.8956644 34.422,34.339 C34.0019979,34.7823355 33.792,35.3773296 33.792,36.124 C33.792,36.8706704 34.0019979,37.4656644 34.422,37.909 C34.8420021,38.3523355 35.3973299,38.574 36.088,38.574 C36.9093374,38.574 37.6233303,38.1913372 38.23,37.426 L40.316,39.288 C39.8306642,39.9226698 39.2146704,40.4079983 38.468,40.744 C37.7213296,41.0800017 36.8720048,41.248 35.92,41.248 Z M50.716,38.462 L50.716,41.024 L42.862,41.024 L42.862,38.994 L46.404,35.718 C46.7120015,35.4286652 46.9173328,35.1813344 47.02,34.976 C47.1226672,34.7706656 47.174,34.570001 47.174,34.374 C47.174,34.1313321 47.0923342,33.942334 46.929,33.807 C46.7656659,33.671666 46.5300015,33.604 46.222,33.604 C45.9233318,33.604 45.6433346,33.6833325 45.382,33.842 C45.1206654,34.0006675 44.9200007,34.2246652 44.78,34.514 L42.288,33.268 C42.6613352,32.5679965 43.2073297,32.015002 43.926,31.609 C44.6446703,31.202998 45.5126616,31 46.53,31 C47.3046705,31 47.9906637,31.1259987 48.588,31.378 C49.1853363,31.6300013 49.6519983,31.989331 49.988,32.456 C50.3240017,32.922669 50.492,33.4593303 50.492,34.066 C50.492,34.607336 50.3776678,35.1136643 50.149,35.585 C49.9203322,36.0563357 49.47467,36.5906637 48.812,37.188 L47.412,38.462 L50.716,38.462 Z M55.826,41.248 C54.9579957,41.248 54.1903367,41.045002 53.523,40.639 C52.8556633,40.232998 52.3330019,39.6450039 51.955,38.875 C51.5769981,38.1049962 51.388,37.1880053 51.388,36.124 C51.388,35.0599947 51.5769981,34.1430038 51.955,33.373 C52.3330019,32.6029962 52.8556633,32.015002 53.523,31.609 C54.1903367,31.202998 54.9579957,31 55.826,31 C56.6940043,31 57.4616633,31.202998 58.129,31.609 C58.7963367,32.015002 59.3189981,32.6029962 59.697,33.373 C60.0750019,34.1430038 60.264,35.0599947 60.264,36.124 C60.264,37.1880053 60.0750019,38.1049962 59.697,38.875 C59.3189981,39.6450039 58.7963367,40.232998 58.129,40.639 C57.4616633,41.045002 56.6940043,41.248 55.826,41.248 Z M55.826,38.602 C55.0793296,38.602 54.706,37.7760083 54.706,36.124 C54.706,34.4719917 55.0793296,33.646 55.826,33.646 C56.5726704,33.646 56.946,34.4719917 56.946,36.124 C56.946,37.7760083 56.5726704,38.602 55.826,38.602 Z M36.4423694,12 L49.8847387,27.0144312 L23,27.0144312 L36.4423694,12 Z M36.4423694,60.0144312 L23,45 L49.8847387,45 L36.4423694,60.0144312 Z" />,
        viewBox: '0 0 72 72'
    },

    BCH: {
        svg: <Path d="M54.8833752,37.7359742 L54.8618617,37.6961685 L54.8582953,37.6894959 C54.8452952,37.6494602 54.8352863,37.6074686 54.8207906,37.5642116 L54.8189498,37.5607602 L54.8171091,37.5574239 L54.8152684,37.5540876 L54.8134277,37.5507513 L54.8115869,37.547415 L54.8097462,37.5440787 L54.8060648,37.5374061 C54.353775,36.0245244 53.4570201,34.6825988 52.2322718,33.6859202 L52.2305461,33.6825839 C52.1943068,33.654973 52.1562268,33.6239108 52.1198725,33.596645 L52.0698278,33.5593704 L52.0335886,33.5318746 L52.0180575,33.5187594 L51.9835439,33.4944848 L51.9680128,33.4814847 L51.9334992,33.4572102 L51.9179681,33.44421 L51.8817288,33.4167142 L51.8627463,33.4052097 L51.8265071,33.3777139 L51.8075246,33.3662093 L51.7684092,33.3404392 L51.7494267,33.3289347 L51.7264177,33.2944211 L51.7057095,33.2798103 L51.6665941,33.2540402 L51.646001,33.2394295 L51.6067706,33.2135443 L51.5861775,33.1990486 L51.5470621,33.1731634 L51.5263539,33.1585526 L51.4849376,33.1292161 L51.4643445,33.1146053 L51.419707,33.0872245 L51.3989988,33.0727288 L51.3544763,33.045233 L51.3337681,33.0307373 L51.2891306,33.0032415 L51.2685375,32.9887458 L51.2238999,32.96125 L51.1998554,32.948595 L51.1552179,32.9212142 L51.1312885,32.9084442 L51.0831995,32.8829041 L51.0592701,32.8702491 L51.0094555,32.8413728 L50.9855261,32.8287178 L50.9357115,32.7999565 L50.911667,32.7871865 L50.8618524,32.7584251 L50.8360823,32.7424338 L50.7862677,32.7135575 L50.7603825,32.6975662 L50.7073466,32.6704155 L50.6815765,32.6544242 L50.6284255,32.6272735 L50.5925314,32.6077158 L50.5906907,32.6043795 C50.5649205,32.5883882 50.5376548,32.5772288 50.5117696,32.5611225 C49.409846,31.9947367 48.2200659,31.6187976 46.9927646,31.4492099 C47.3369607,31.0792757 47.6521579,30.6833849 47.9355607,30.2650488 L47.9807735,30.1978623 L47.9841098,30.1960216 L48.005048,30.1633488 L48.0324288,30.1187112 L48.0470395,30.098003 L48.0744203,30.0534805 L48.088916,30.0327724 L48.1164119,29.9881348 L48.1309076,29.9675417 L48.1584034,29.9229041 L48.1728991,29.902196 L48.2002799,29.8575584 L48.2147756,29.8369653 L48.23882,29.7939384 L48.2534308,29.7733453 L48.2773602,29.7303183 L48.2888647,29.7113359 L48.3127941,29.668424 L48.3242987,29.6494415 L48.3482281,29.6065296 L48.3597326,29.5875471 L48.3804408,29.5463609 L48.3919453,29.5273785 L48.4125384,29.4863073 L48.4240429,29.4673248 L48.444636,29.4262537 L48.4561406,29.4072712 L48.4785744,29.3694213 L48.4900789,29.3504388 L48.513088,29.312704 L48.5245925,29.2937215 L48.5442652,29.2578274 L48.5557698,29.2388449 L48.5753275,29.2028357 L48.5832656,29.185809 L48.6029383,29.1497998 L48.6107614,29.1326581 L48.6304342,29.096764 L48.6382572,29.0796222 L48.65793,29.0437281 L48.6658681,29.0265864 L48.6816293,28.9920728 L48.6895674,28.974931 L48.7054437,28.9404174 L48.7133818,28.9232757 L48.7292581,28.8887621 L48.7371962,28.8717354 L48.754568,28.832505 L48.7783824,28.7813098 C48.7957542,28.7420794 48.8097898,28.7044596 48.8272766,28.6651141 L48.8306129,28.6632734 C49.3586659,27.3615884 49.4824614,25.9310449 49.1858728,24.5579976 L49.184032,24.5546613 L49.1803506,24.5479887 L49.1785099,24.5446523 L49.1767842,24.541316 L49.1749435,24.5379797 L49.1731027,24.5346434 L49.171147,24.5313071 L49.1694213,24.5280858 C49.1614832,24.4894306 49.153545,24.4508904 49.1423857,24.4139609 L49.1423857,24.4055626 L49.1405449,24.4022263 L49.1387042,24.39889 L49.1368635,24.3956687 L49.1387042,24.39889 L49.1225979,24.3690932 C49.1110933,24.3154821 49.0995888,24.2614109 49.082332,24.2067644 C49.0708275,24.1531533 49.0538008,24.0979315 49.0387299,24.045701 L49.0190571,24.0092316 L49.0154907,24.002559 C49.0039862,23.9658595 48.9930569,23.92893 48.9817824,23.8922306 L48.9798267,23.8888943 L48.9779859,23.8855579 L48.9761452,23.8822216 L48.9744195,23.8788853 L48.9725788,23.875664 L48.9706231,23.8723277 L48.9688974,23.8689914 C48.5671673,22.5228361 47.7694037,21.3288366 46.6794963,20.4424828 L46.6775405,20.4390314 C46.6464783,20.4129162 46.6119647,20.3886416 46.5807875,20.3627564 L46.5377605,20.3301986 L46.5032469,20.3048887 L46.4877158,20.2918885 L46.4582642,20.2688795 L46.4427331,20.2557643 L46.4133966,20.2327553 L46.3978655,20.2197551 L46.3651926,20.1988169 L46.3495464,20.1858168 L46.3150329,20.1615422 L46.2995017,20.1485421 L46.2649882,20.1242676 L46.249342,20.1112674 L46.2148284,20.0869929 L46.195846,20.0754884 L46.1613324,20.0512138 L46.1423499,20.0397093 L46.1078363,20.0154347 L46.0888538,20.0039302 L46.051119,19.9814964 L46.0321365,19.9699918 L45.9944017,19.947558 L45.9754192,19.9360535 L45.9375693,19.9136197 L45.9185868,19.9021151 L45.880852,19.8791061 L45.8618695,19.8676015 L45.8227541,19.8417164 L45.8037716,19.8302118 L45.764081,19.8044417 L45.7450985,19.7929372 L45.7021867,19.7688927 L45.6832042,19.7573882 L45.6402923,19.7333437 L45.6195841,19.718733 L45.5766723,19.6948035 L45.5560791,19.6801928 L45.5131673,19.6562634 L45.4924591,19.6416526 L45.4479366,19.6142718 L45.4238921,19.6015018 L45.3792546,19.574121 L45.3553251,19.5614661 L45.3072362,19.535811 L45.2833068,19.523156 L45.2352179,19.4976159 L45.2007043,19.4817397 L45.1988636,19.4784034 L45.1268452,19.4402083 C43.0222069,18.3463578 40.3483245,18.0169832 37.6581057,18.7071398 L36.9582852,18.8868405 L35.1848622,12 L31.0832679,13.0515139 L32.8434607,19.9175312 L29.5622543,20.7592025 L27.7965393,13.915619 L23.694945,14.9669027 L25.4591644,21.8323448 L17,24.0094617 L18.125488,28.3840585 L21.5339345,27.5086789 C22.075674,27.3690114 22.6507083,27.4502768 23.1325288,27.7345966 C23.6143493,28.0189165 23.9634851,28.4829991 24.1031257,29.0247456 L24.104046,29.0286572 L28.8356283,47.4370524 C29.0285497,48.1898514 28.5756248,48.9567356 27.8232298,49.151227 L24.8366544,49.9194994 L25.0120984,55.1221921 L33.4604485,52.9508275 L35.247907,59.8038447 L39.3476606,58.7489945 L37.5817156,51.8801011 L40.862922,51.0384298 L42.6288671,57.906633 L46.7286206,56.8517828 L44.9569233,49.9561989 C45.6517968,49.7748875 46.249227,49.6201516 46.6626997,49.5132745 C49.694488,48.7333826 52.1461029,46.9555879 53.6296117,44.7395857 L53.6797715,44.6656116 L53.6831078,44.6637709 L53.7073824,44.6292573 L53.739595,44.577717 L53.7555863,44.5518318 L53.787799,44.5002915 L53.8039053,44.4744063 L53.8326667,44.4245917 L53.848658,44.3988216 L53.8774193,44.349007 L53.8901893,44.3249625 L53.9189506,44.2751479 L53.9317206,44.2512185 L53.960482,44.2014039 L53.9731369,44.1773594 L53.998677,44.1293855 L54.011447,44.1053411 L54.0369871,44.0573672 L54.0496421,44.0333227 L54.0771379,43.9886852 L54.0897929,43.9647557 L54.1171736,43.9201182 L54.1299437,43.8961888 L54.1538731,43.8531618 L54.1666431,43.8292324 L54.1905725,43.7863205 L54.2033426,43.7623911 L54.227272,43.7194792 L54.2370508,43.6972755 L54.2610953,43.6543636 L54.2708741,43.6321598 L54.2914672,43.5910887 L54.3029718,43.5721062 L54.3236799,43.531035 L54.3351844,43.5120526 L54.3557776,43.4708664 L54.3672821,43.4518839 L54.3878752,43.4108127 L54.3993797,43.3918302 L54.4200879,43.3507591 L54.4315924,43.3317766 L54.4523005,43.2905904 L54.4638051,43.2716079 L54.4811769,43.2324925 L54.4926814,43.2135101 L54.5100533,43.1743947 L54.5179914,43.1572529 L54.5369739,43.1128454 L54.5623989,43.0563582 C54.5813813,43.0119507 54.6019744,42.9707645 54.6175056,42.9281978 L54.6191162,42.9230207 C55.2125147,41.4587483 55.3520819,39.8499175 55.0197039,38.3053333 L55.0178631,38.301997 L55.0160224,38.2986607 L55.0141817,38.2953244 L55.012341,38.291988 L55.0105002,38.2886517 L55.0086595,38.2853154 L55.0068188,38.2819791 L55.0049781,38.2786428 L54.9756415,38.1530133 L54.9756415,38.144615 L54.9739158,38.1412787 L54.9720751,38.1379424 L54.9701193,38.1346061 L54.9682786,38.1312698 L54.9665529,38.1279335 L54.9647122,38.1245972 L54.9628715,38.1212609 L54.9610308,38.1179245 L54.95919,38.1147033 L54.9573493,38.111367 L54.9555086,38.1080306 L54.9537829,38.1046943 L54.9519422,38.101358 L54.9446943,38.0881278 C54.9295084,38.0279591 54.9174286,37.9659497 54.8986762,37.9072766 C54.8958001,37.8706922 54.8870567,37.8067271 54.8833752,37.7359742 Z M30.7833449,25.4217576 C31.4831653,25.2421719 34.3765541,24.5154308 35.3306246,24.2670481 C36.8474966,23.8787703 38.3415897,24.0294796 39.5094143,24.5914758 L39.5486447,24.6088476 L39.5656714,24.6167857 L39.5897159,24.6294407 L39.6012204,24.6358833 L39.6251498,24.6485382 L39.6366544,24.6549808 L39.6605838,24.6676357 L39.6720883,24.6740783 L39.6961328,24.6867333 L39.7076373,24.6930608 L39.7316818,24.7058308 L39.7431863,24.7121583 L39.7672308,24.7249283 L39.7787353,24.7312558 L39.8026647,24.7440258 L39.8141692,24.7503533 L39.8380987,24.7631233 L39.8496032,24.7694508 L39.8735326,24.7822208 L39.8850371,24.7885483 L39.9057453,24.8031591 L39.9172498,24.8094866 L39.9378429,24.8240973 L39.9493474,24.8304248 L39.9699405,24.8450356 L39.9814451,24.8513631 L40.0004275,24.8628676 L40.0119321,24.8691951 L40.0309145,24.8806996 L40.0424191,24.8870271 L40.0614015,24.8985316 L40.0729061,24.9048591 L40.0918885,24.9163636 L40.1033931,24.9226911 L40.1223755,24.9341957 L40.131119,24.9424789 L40.1501015,24.9539835 L40.1570042,24.9587003 L40.1759866,24.9702048 L40.1827743,24.9750367 L40.2017568,24.9865413 L40.2086595,24.9912581 L40.227642,25.0027626 L40.2344296,25.0075946 L40.2500758,25.0205947 L40.2568635,25.0254266 L40.2758459,25.0369311 L40.3017311,25.0530374 C40.3207136,25.064542 40.3379704,25.0807633 40.3569529,25.0921528 C40.9544554,25.5430914 41.39351,26.1719463 41.6109464,26.8882397 L41.6162385,26.8980186 C41.6217607,26.9164258 41.6292386,26.9380543 41.6347608,26.9566917 L41.6366015,26.960143 L41.6474158,26.9797007 C41.6550088,27.0098426 41.6642124,27.0349225 41.6720355,27.0649493 C41.6804038,27.0957011 41.6858732,27.1271693 41.6883719,27.1589413 L41.6990711,27.178499 L41.7009118,27.1818353 C41.7038756,27.2023751 41.7090045,27.2225436 41.7162128,27.242004 L41.7215049,27.2517828 C41.8752109,27.9842131 41.7935116,28.7464848 41.4880781,29.429705 L41.4611575,29.4912542 L41.4468918,29.5205908 L41.4353873,29.5395733 L41.4322811,29.5498123 L41.424343,29.566954 L41.4212368,29.5771931 L41.4097322,29.5961755 L41.406626,29.6060694 L41.3951215,29.6250519 L41.3920153,29.6352909 L41.3805107,29.6542734 L41.3774045,29.6640522 L41.3659,29.6830347 L41.3627937,29.6932737 L41.3512892,29.7122562 L41.348068,29.7226103 L41.3365634,29.7415928 L41.3301209,29.7530973 L41.3186164,29.7720798 L41.3121738,29.7835843 L41.3006693,29.8025668 L41.2943418,29.8140713 L41.2828373,29.8330538 L41.2765098,29.8445583 L41.261899,29.8651514 L41.2555715,29.8766559 L41.2409608,29.8973641 L41.2346333,29.9088686 L41.2200226,29.9294617 L41.2136951,29.9409662 L41.1990843,29.9615593 L41.1927568,29.9730639 L41.1781461,29.993772 L41.1718186,30.0052765 L41.1572078,30.0259847 L41.1508803,30.0374892 L41.1362696,30.0580823 L41.1299421,30.0695869 L41.1153314,30.09018 L41.1090039,30.1016845 L41.0910568,30.1241183 L41.0847293,30.1356228 L41.0667822,30.1580567 L41.0604548,30.1695612 L41.0425077,30.191995 L41.0361802,30.2034996 L41.0182331,30.2259334 L41.005233,30.2414645 L40.9809585,30.2759781 C40.2266066,31.3330141 38.9906751,32.1867651 37.4738031,32.5749279 C36.5178919,32.8196292 33.6320961,33.5765121 32.9328509,33.7562128 L30.7833449,25.4217576 Z M46.81594,39.5348222 L46.8267543,39.5543799 L46.828595,39.5577162 C46.8326216,39.5807253 46.8383738,39.5995927 46.8424004,39.6230619 L46.8442411,39.6265133 L46.8460819,39.6298496 L46.8480376,39.6331859 L46.8498784,39.6365222 C47.0116525,40.4438749 46.8954,41.2822145 46.5200435,42.0150834 L46.4833441,42.0819247 L46.4657422,42.1128719 L46.4529722,42.1368013 L46.4466447,42.1483058 L46.4351401,42.1672883 L46.4288126,42.1787928 L46.4173081,42.1977753 L46.4109806,42.2092798 L46.3963699,42.2298729 L46.3900424,42.2413775 L46.3754316,42.2619706 L46.3691041,42.2734751 L46.3544934,42.2941832 L46.3481659,42.3056878 L46.3335552,42.3262809 L46.3272277,42.3377854 L46.3126169,42.3583785 L46.3062894,42.369883 L46.2916787,42.3905912 L46.2853512,42.4020957 L46.2707404,42.4228039 L46.2644129,42.4343084 L46.2498022,42.4549015 L46.2434747,42.466406 L46.2288639,42.4869991 L46.2225365,42.4985037 L46.2045894,42.5209375 L46.1982619,42.532442 L46.1803148,42.5548758 L46.1739873,42.5663804 L46.157881,42.5922656 L46.1515535,42.6037701 L46.1353321,42.6295402 L46.1290046,42.6410448 L46.1130133,42.6669299 L46.1031195,42.6807354 L46.0871282,42.7065055 L46.0773493,42.720311 L46.0577916,42.7478068 L46.0480128,42.7616122 L46.0284551,42.789108 L46.0185612,42.8029135 L45.9990035,42.8304093 L45.9892246,42.8442147 L45.9696669,42.8717105 L45.9598881,42.885516 L45.9403304,42.9130118 L45.923994,42.9304987 L45.8930468,42.9684636 C44.9768262,44.1383591 43.4992996,45.1005978 41.7043632,45.5612391 C40.5727778,45.8534541 37.1529418,46.7478161 36.3209344,46.9601897 L33.992763,37.9016394 C34.8230448,37.6862746 38.2523145,36.8251607 39.3838999,36.5326006 C41.1786063,36.0724195 42.9404097,36.2025357 44.3025458,36.7840896 L44.3469533,36.803072 L44.369157,36.8128509 L44.4017148,36.8252758 L44.4169008,36.8297625 L44.4463524,36.8440282 L44.4615384,36.8485149 L44.49099,36.8628956 L44.5061759,36.8673823 L44.5355125,36.881648 L44.547017,36.8879755 L44.5763535,36.9022411 L44.5878581,36.9086836 L44.6171946,36.9229492 L44.6286992,36.9292767 L44.6580357,36.9435423 L44.6695402,36.9499849 L44.6935847,36.9626398 L44.7050892,36.9690824 L44.7291337,36.9817374 L44.7406382,36.9881799 L44.7645676,37.0008349 L44.7760722,37.0071624 L44.8000016,37.0199324 L44.8115061,37.0262599 L44.8354355,37.0390299 L44.84694,37.0453574 L44.8709845,37.0581274 L44.882489,37.0644549 L44.9065335,37.0772249 L44.918038,37.0835524 L44.9419674,37.0963225 L44.953472,37.1026499 L44.9774014,37.1153049 L44.9889059,37.1217475 L45.009499,37.1362432 L45.0210036,37.1426857 L45.0417117,37.1572965 L45.0532162,37.1636239 L45.0739244,37.1782347 L45.0854289,37.1845622 L45.106022,37.1991729 L45.1175265,37.2055004 L45.1382347,37.2201112 L45.1497392,37.2264387 L45.1687217,37.2379432 L45.1802262,37.2442707 L45.2009344,37.2588814 L45.2284302,37.2784391 C45.2490233,37.2930499 45.2730678,37.3058199 45.293891,37.3203156 C45.9797723,37.7827437 46.4886235,38.4640373 46.7373641,39.2529613 L46.7444969,39.2661915 C46.7518598,39.28782 46.757497,39.3063423 46.7648599,39.3279708 L46.7667006,39.3311921 L46.7773998,39.3508648 C46.7851079,39.3810067 46.7927009,39.4110335 46.8022496,39.4446267 C46.8191613,39.4518746 46.8218073,39.4889191 46.8166303,39.5345921 L46.81594,39.5348222 Z" />,
        viewBox: '0 0 72 72'
    },
    [KunaAssetUnit.Hacken]: {
        svg: <Path d="M45.42 16.14l-1.22.1.1 4.33.08 4.3H42v-8.65h-2.52l.07 4.32.08 4.36-3.76-.08-3.74-.08-.08-4.28-.07-4.24H30v10.81l11.83.06 11.8.08v2.7l-12.93.09-12.95.05v-13.8h-2.5V32.45l14.25-.05 14.25-.08V34.74H23V16.22h-2.25v18.52h-2.5V16.22H16l.07 19.8.05 19.82 1.08.08 1.05.08v-8.68h2.25v8.65H23v-8.65h2.25v8.65h2.52l-.07-4.32-.07-4.33H30v8.65h1.98l.07-4.27.08-4.25 3.74-.08 3.76-.08-.08 4.36-.07 4.32H42V45.15H18.25v-2.7h26.12l-.07 6.76-.07 6.76h2.27V39.75l-14.1.05H18.13v-2.35h31.09v18.39l1.03.08 1 .08V37.45h2.5v18.52H56v-39.7l-1.17-.1-1.2-.09.07 4.38.07 4.41h-2.52v-8.65h-2l-.02 3.92c-.03 2.16-.05 4.08-.08 4.24-.02.22-.52.38-1.35.44l-1.32.08.07-4.46.08-4.44c0 .03-.55.08-1.2.14z" />,
        viewBox: '0 0 72 72'
    },
    [KunaAssetUnit.ZCash]: {
        svg: <Path d="M49 19.23h-9.68V13h-7.27v6.23H23v7.82h15.35L23 44.84v7.93h9.05V59h7.27v-6.23H49v-7.93H34.1L49 27.28v-8.05z" />,
        viewBox: '0 0 72 72'
    },
    [KunaAssetUnit.CSNP]: {
        svg: <Path d="M41.381 97.74l24.963-31.066 9.973 21.55 28.044-39.74A39.817 39.817 0 0 1 112 72c0 22.091-17.909 40-40 40-12.288 0-23.281-5.54-30.619-14.26zm-4.594-6.749A39.822 39.822 0 0 1 32 72c0-22.091 17.909-40 40-40 10.442 0 19.948 4 27.072 10.553l-21.48 30.696-9.633-21.986-31.172 39.728z" />,
        viewBox: '0 0 144 144'
    },
    [KunaAssetUnit.UkrainianHryvnia]: {
        svg: <Path d="M35.52 23.8c-4.56 0-6.72 2.88-6.72 2.88l-3.36-3.36S28.8 19 35.52 19c6.96 0 11.04 4.08 11.04 8.64 0 1.68-.72 2.64-.72 2.64h3.12v4.08H24v-4.08h16.56s.72-.72.72-2.16c0-2.16-2.16-4.32-5.76-4.32zm1.92 24.96c4.56 0 6.72-2.88 6.72-2.88l3.36 3.36s-3.36 4.32-10.08 4.32c-6.96 0-11.04-4.08-11.04-8.64 0-1.68.72-2.64.72-2.64H24V38.2h24.96v4.08H32.4s-.72.72-.72 2.16c0 2.16 2.16 4.32 5.76 4.32z" />,
        viewBox: '0 0 72 72'
    },
    [KunaAssetUnit.AdvancedUSD]: {
        svg: <Path d="M39.6 17.73a13.56 13.56 0 0 1 7.5 4.47l-4.25 4.83s-1.2-1.54-3.25-2.44v-6.86zm-6.26 7.45a3.58 3.58 0 0 0-1.12 2.62 3.2 3.2 0 0 0 1.12 2.48v7.75c-4.24-1.46-8.68-3.6-8.68-10.23 0-4.77 3.28-9.03 8.68-10.12v7.5zM39.6 33c4.32 1.47 8.92 3.56 8.92 10.32 0 5.33-3.19 9.6-8.92 10.83v-7.6a4.28 4.28 0 0 0 1.36-3.23c0-1.18-.51-2.02-1.36-2.69V33zm-6.26 21.3c-6.53-1.03-9.86-5.64-9.86-5.64l4.25-4.58s2.01 2.71 5.61 3.57v6.65zm.89-41.62h4.5v46.64h-4.5V12.68z" />,
        viewBox: '0 0 72 72'
    },
    [KunaAssetUnit.Aeron]: {
        svg: <Path d="M36 17.5a2.9 2.9 0 0 0-2.8 2.8v10.2L18 39.7l1.6 3.5 13.6-4.4V49l-3.8 2.7v2.8l6.6-1.8 6.6 1.8v-2.8L38.8 49V38.8l13.3 4.6 1.9-3.7-15.2-9.2V20.3c0-1.5-1.3-2.8-2.8-2.8z" />,
        viewBox: '0 0 72 72'
    },
    [KunaAssetUnit.Tether]: {
        svg: <Path d="M38.86 38.59c-.2 0-1.16.06-3.32.06-1.73 0-2.94-.04-3.37-.06-6.64-.28-11.6-1.38-11.6-2.7 0-1.32 4.96-2.42 11.6-2.7v4.3a52.9 52.9 0 0 0 6.69 0v-4.3c6.62.28 11.57 1.38 11.57 2.7 0 1.32-4.95 2.42-11.57 2.7m0-5.85v-3.86h9.24V23H22.92v5.88h9.25v3.86C24.65 33.07 19 34.49 19 36.19c0 1.7 5.65 3.12 13.17 3.45V52h6.69V39.64C46.36 39.3 52 37.89 52 36.19c0-1.7-5.64-3.12-13.14-3.45" />,
        viewBox: '0 0 72 72'
    },
    [KunaAssetUnit.AdvancedRUB]: {
        svg: <Path d="M25 34.56h3.38V19h8.72c1.5-.01 2.98.17 4.42.56 1.34.38 2.48.95 3.43 1.7a7.9 7.9 0 0 1 2.24 2.91c.54 1.17.81 2.57.81 4.2a9.8 9.8 0 0 1-.86 4.24 8.43 8.43 0 0 1-2.33 3 9.83 9.83 0 0 1-3.48 1.78c-1.4.4-2.86.6-4.33.59h-4.8v4.92h7.66v3.22h-7.67V53h-3.8v-6.88H25V42.9h3.38v-4.92H25v-3.42zm12.1 0c2.18 0 3.9-.51 5.16-1.53 1.26-1.03 1.88-2.58 1.88-4.66s-.62-3.6-1.88-4.54c-1.25-.94-2.98-1.41-5.16-1.41h-4.9v12.14h4.9z" />,
        viewBox: '0 0 72 72'
    }
};

svgIcons[KunaAssetUnit.GolosGold as string] = svgIcons[KunaAssetUnit.Golos];

export function findIcon(asset: string): SvgIconProps | undefined {
    return svgIcons[asset] || undefined;
}
