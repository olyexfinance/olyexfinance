<template>
    <div>

        <Head></Head>
        <main class="main-pc">
            <div class="main-left">
                <h3>Decentralized multi-chain liquidity spot & perpetual trading platform</h3>
                <h6>A Decentralized Perpetual Exchange with Functional Risk Management and Innovative Liquidity Solutions.
                </h6>
                <div class="main-left-button">
                    <button><a href="https://app.olyex.finance/" target="_blank" class="pc-button">USE APP</a></button>
                </div>

            </div>
            <div class="main-right">
                <img src="@/assets/图形.png" alt="">
            </div>
        </main>
        <main class="main-and">
            <h3>Decentralized multi-chain liquidity spot & perpetual trading platform</h3>
            <h6>A Decentralized Perpetual Exchange with Functional Risk Management and Innovative Liquidity Solutions.</h6>
            <div class=" and-button">
                <button><a href="https://app.olyex.finance/" target="_blank">USE APP</a></button>
            </div>
        </main>
        <div class="wrapper">
            <div class="wrapper-card">
                <div class="wrapper-card-left">
                    <img src="@/assets/Asset Under Management.png" alt="">
                </div>
                <div class="wrapper-card-right">
                    <h2>$ 50,974,578</h2>
                    <img src="@/assets/下降.png" alt="">
                    <span>$ 258,676</span>
                    <label>(24H)</label>
                    <h3>Asset Under Management</h3>
                </div>
            </div>
            <div class="wrapper-card">
                <div class="wrapper-card-left">
                    <img src="@/assets/Total Trading Volume.png" alt="">
                </div>
                <div class="wrapper-card-right">
                    <h2>$ 30,264,798</h2>
                    <img src="@/assets/上升.png" alt="">
                    <span style="color:#10A777">$ 548,675</span>
                    <label>(24H)</label>
                    <h3>Total Trading Volume</h3>
                </div>
            </div>
            <div class="wrapper-card">
                <div class="wrapper-card-left">
                    <img src="@/assets/Accrued Fees.png" alt="">
                </div>
                <div class="wrapper-card-right">
                    <h2>$ 40,264,538</h2>
                    <img src="@/assets/上升.png" alt="">
                    <span style="color:#10A777">$ 728,375</span>
                    <label>(24H)</label>
                    <h3>Accrued Fees</h3>
                </div>
            </div>
        </div>
        <div class="wrapper-and">
            <div class="wrapper-card">
                <div class="wrapper-card-left">
                    <img src="@/assets/资产管理.svg" alt="">
                </div>
                <div class="wrapper-card-right">
                    <h2>$ 50,974,578</h2>
                    <img src="@/assets/下降.png" alt="">
                    <span>$ 258,676</span>
                    <label>(24H)</label>
                    <h3>Asset Under Management</h3>
                </div>
            </div>
            <div class="wrapper-card">
                <div class="wrapper-card-left">
                    <img src="@/assets/总交易量.svg" alt="">
                </div>
                <div class="wrapper-card-right">
                    <h2>$ 30,264,798</h2>
                    <img src="@/assets/上升.png" alt="">
                    <span style="color:#10A777">$ 548,675</span>
                    <label>(24H)</label>
                    <h3>Total Trading Volume</h3>
                </div>
            </div>
            <div class="wrapper-card">
                <div class="wrapper-card-left">
                    <img src="@/assets/应计费用.svg" alt="">
                </div>
                <div class="wrapper-card-right">
                    <h2>$ 40,264,538</h2>
                    <img src="@/assets/上升.png" alt="">
                    <span style="color:#10A777">$ 728,375</span>
                    <label>(24H)</label>
                    <h3>Accrued Fees</h3>
                </div>
            </div>
        </div>

        <div class="start">
            <h1>Start Trading</h1>
            <h3>We are constantly introducing new perpetual contract markets.</h3>
            <div class="start-card-wrapper">
                <div class="start-card">
                    <div class="card-line1">
                        <img src="@/assets/BTC.svg" alt="">
                        <span>BTC</span>
                    </div>
                    <div class="card-line2">
                        <h1>{{ price[0].price }} USD</h1>
                        <div>
                            <div>
                                <i>Change：</i> <span :style="{ 'color': pricePercent[0].color, }">{{
                                    pricePercent[0].priceChangePercent }}%</span>
                            </div>
                            <!-- <div>
                                <i>Volume：</i> <span class="up">＄1165 m</span>
                            </div> -->
                        </div>
                    </div>
                </div>
                <div class="start-card">
                    <div class="card-line1">
                        <img src="@/assets/ethereum-eth-logo.svg" alt="">
                        <span>ETH</span>
                    </div>
                    <div class="card-line2">
                        <h1>{{ price[1].price }} USD</h1>
                        <div>
                            <div>
                                <i>Change：</i> <span :style="{ 'color': pricePercent[1].color, }">{{
                                    pricePercent[1].priceChangePercent }}%</span>
                            </div>
                            <!-- <div>
                                <i>Volume：</i> <span class="up">＄1165 m</span>
                            </div> -->
                        </div>
                    </div>
                </div>
                <div class="start-card">
                    <div class="card-line1">
                        <img src="@/assets/logo_chain_BNB Chain.svg" alt="">
                        <span>BNB</span>
                    </div>
                    <div class="card-line2">
                        <h1>{{ price[2].price }} USD</h1>
                        <div>
                            <div>
                                <i>Change：</i> <span :style="{ 'color': pricePercent[2].color, }">{{
                                    pricePercent[2].priceChangePercent }}%</span>
                            </div>
                            <!-- <div>
                                <i>Volume：</i> <span class="up">＄1165 m</span>
                            </div> -->
                        </div>
                    </div>
                </div>
                <div class="start-card">
                    <div class="card-line1">
                        <img src="@/assets/arbitrum.svg" alt="">
                        <span>Arbitrum</span>
                    </div>
                    <div class="card-line2">
                        <h1>{{ price[5].price }} USD</h1>
                        <div>
                            <div>
                                <i>Change：</i> <span :style="{ 'color': pricePercent[5].color, }">{{
                                    pricePercent[5].priceChangePercent }}%</span>
                            </div>
                            <!-- <div>
                                <i>Volume：</i> <span class="up">＄1165 m</span>
                            </div> -->
                        </div>
                    </div>
                </div>
                <div class="start-card">
                    <div class="card-line1">
                        <img src="@/assets/Optimism.svg" alt="">
                        <span>Optimism</span>
                    </div>
                    <div class="card-line2">
                        <h1>{{ price[4].price }} USD</h1>
                        <div>
                            <div>
                                <i>Change：</i> <span :style="{ 'color': pricePercent[4].color, }">{{
                                    pricePercent[4].priceChangePercent }}%</span>
                            </div>
                            <!-- <div>
                                <i>Volume：</i> <span class="up">＄1165 m</span>
                            </div> -->
                        </div>
                    </div>
                </div>
                <div class="start-card">
                    <div class="card-line1">
                        <img src="@/assets/matic-logo.svg" alt="">
                        <span>Polygon</span>
                    </div>
                    <div class="card-line2">
                        <h1>{{ price[3].price }} USD</h1>
                        <div>
                            <div>
                                <i>Change：</i> <span :style="{ 'color': pricePercent[3].color, }">{{
                                    pricePercent[3].priceChangePercent }}%</span>
                            </div>
                            <!-- <div>
                                <i>Volume：</i> <span class="up">＄1165 m</span>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="start-and">
            <h1>Start Trading</h1>
            <h3>We are constantly introducing new perpetual contract markets.</h3>
            <div class="start-card-wrapper">
                <div class="start-card">
                    <div class="card-line1">
                        <img src="@/assets/BTC.svg" alt="">
                        <span>BTC</span>
                    </div>
                    <div class="card-line2">
                        <h1>{{ price[0].price }} USD</h1>
                        <div>

                            <i>Change：</i> <span :style="{ 'color': pricePercent[0].color, }">{{
                                pricePercent[0].priceChangePercent }}%</span>
                        </div>
                    </div>
                </div>
                <div class="start-card">
                    <div class="card-line1">
                        <img src="@/assets/ethereum-eth-logo.svg" alt="">
                        <span>ETH</span>
                    </div>
                    <div class="card-line2">
                        <h1>{{ price[1].price }} USD</h1>
                        <div>

                            <i>Change：</i> <span :style="{ 'color': pricePercent[1].color, }">{{
                                pricePercent[1].priceChangePercent }}%</span>
                        </div>

                    </div>
                </div>
                <div class="start-card">
                    <div class="card-line1">
                        <img src="@/assets/logo_chain_BNB Chain.svg" alt="">
                        <span>BNB</span>
                    </div>
                    <div class="card-line2">
                        <h1>{{ price[2].price }} USD</h1>
                        <div>

                            <i>Change：</i> <span :style="{ 'color': pricePercent[2].color, }">{{
                                pricePercent[2].priceChangePercent }}%</span>

                        </div>
                    </div>
                </div>
                <div class="start-card">
                    <div class="card-line1">
                        <img src="@/assets/arbitrum.svg" alt="">
                        <span>Arbitrum</span>
                    </div>
                    <div class="card-line2">
                        <h1>{{ price[5].price }} USD</h1>

                        <div>
                            <i>Change：</i> <span :style="{ 'color': pricePercent[5].color, }">{{
                                pricePercent[5].priceChangePercent }}%</span>
                        </div>

                    </div>
                </div>
                <div class="start-card">
                    <div class="card-line1">
                        <img src="@/assets/Optimism.svg" alt="">
                        <span>Optimism</span>
                    </div>
                    <div class="card-line2">
                        <h1>{{ price[4].price }} USD</h1>
                        <div>
                            <i>Change：</i> <span :style="{ 'color': pricePercent[4].color, }">{{
                                pricePercent[4].priceChangePercent }}%</span>
                        </div>
                    </div>
                </div>
                <div class="start-card">
                    <div class="card-line1">
                        <img src="@/assets/matic-logo.svg" alt="">
                        <span>Polygon</span>
                    </div>
                    <div class="card-line2">
                        <h1>{{ price[3].price }} USD</h1>

                        <div>
                            <i>Change：</i> <span :style="{ 'color': pricePercent[3].color, }">{{
                                pricePercent[3].priceChangePercent }}%</span>
                        </div>


                    </div>
                </div>
            </div>
        </div>




        <div class="start">
            <h1>Breaking Boundaries in Olyex</h1>
            <h3>Welcome to the new era of perpetual trading.</h3>
            <div class="olyex-card-wrapper">
                <div class="olyex-card">
                    <div class="olyex-line1">
                        <img src="@/assets/LeveragedTrading.png" alt="">
                    </div>
                    <h1>Multi-chain shared liquidity</h1>
                    <h3>In Olyex, you can choose any chain to open a position, and the capital utilization rate is high.
                    </h3>

                </div>
                <div class="olyex-card">
                    <div class="olyex-line1">
                        <img src="@/assets/Real Yield.png" alt="">
                    </div>
                    <h1>Real Yield</h1>
                    <h3>Stake and mine real income in ETH. </h3>

                </div>
                <div class="olyex-card">
                    <div class="olyex-line1">
                        <img src="@/assets/Self-Custody.png" alt="">
                    </div>
                    <h1>Self-Custody</h1>
                    <h3>Total control of your funds.</h3>

                </div>
                <div class="olyex-card">
                    <div class="olyex-line1">
                        <img src="@/assets/Accrued Fees.png" alt="">
                    </div>
                    <h1>Lowest Fees</h1>
                    <h3>Enter and exit positions with minimal spread and zero price impact.</h3>

                </div>
                <div class="olyex-card">
                    <div class="olyex-line1">
                        <img src="@/assets/Asset Under Management.png" alt="">
                    </div>
                    <h1>Transparency</h1>
                    <h3>Fully transparent open-source smart contracts. </h3>
                </div>
                <div class="olyex-card">
                    <div class="olyex-line1">
                        <img src="@/assets/User-Friendly.png" alt="">
                    </div>
                    <h1>Leveraged Trading</h1>
                    <h3>Innovative trading solution for BTC, ETH, OP and BNB,with up to 100x leverage.</h3>

                </div>
            </div>
        </div>

        <div class="start-olyex-and">
            <h1>Breaking Boundaries in Olyex</h1>
            <h3>Welcome to the new era of perpetual trading.</h3>
            <div class="olyex-card-wrapper">

                <div class="olyex-card">
                    <div class="olyex-line1">
                        <img src="@/assets/LeveragedTrading.svg" alt="">
                        <h1>Multi-chain shared liquidity</h1>
                    </div>

                    <h3>In Olyex, you can choose any chain to open a position, and the capital utilization rate is high.
                    </h3>
                </div>

                <div class="olyex-card">
                    <div class="olyex-line1">
                        <img src="@/assets/Real Yield.svg" alt="">
                        <h1>Real Yield</h1>
                    </div>

                    <h3>Stake and mine real income in ETH. </h3>

                </div>
                <div class="olyex-card">
                    <div class="olyex-line1">
                        <img src="@/assets/Self-Custody.svg" alt="">
                        <h1>Self-Custody</h1>
                    </div>

                    <h3>Total control of your funds.</h3>

                </div>
                <div class="olyex-card">
                    <div class="olyex-line1">
                        <img src="@/assets/Lowest Fees.svg" alt="">
                        <h1>Lowest Fees</h1>
                    </div>

                    <h3>Enter and exit positions with minimal spread and zero price impact.</h3>

                </div>
                <div class="olyex-card">
                    <div class="olyex-line1">
                        <img src="@/assets/Transparency.svg" alt="">
                        <h1>Transparency</h1>
                    </div>

                    <h3>Fully transparent open-source smart contracts. </h3>
                </div>
                <div class="olyex-card">
                    <div class="olyex-line1">
                        <img src="@/assets/User-Friendly.svg" alt="">
                        <h1>Leveraged Trading</h1>
                    </div>

                    <h3>Innovative trading solution for BTC, ETH, OP and BNB,with up to 100x leverage.</h3>

                </div>
            </div>
        </div>



        <div class="partners">
            <h1>Partners</h1>
            <ul class="partners-img">
                <li><img src="@/assets/zksync 1.svg" alt=""></li>
                <li><img src="@/assets/arbitrum 1.svg" alt=""></li>
                <li><img src="@/assets/optimism 1.svg" alt=""></li>
                <li><img src="@/assets/bnbchain 1.svg" alt=""></li>
                <li><img src="@/assets/fantom 1.svg" alt=""></li>
            </ul>
        </div>

        <div class="partners-and">
            <h1>Partners</h1>
            <ul class="partners-img">
                <li><img src="@/assets/zksync 1.svg" alt=""></li>
                <li><img src="@/assets/arbitrum 1.svg" alt=""></li>
                <li><img src="@/assets/optimism 1.svg" alt=""></li>
                <li><img src="@/assets/bnbchain 1.svg" alt=""></li>
                <li><img src="@/assets/fantom 1.svg" alt=""></li>
            </ul>
        </div>

        <Footer></Footer>
        <div class="background-img">
            <img src="@/assets/整体背景装饰.png" alt="">
        </div>
        <div class="background-img-and">
            <img src="@/assets/整体背景装饰.png" alt="">
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Head from '@/components/Head.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'index',
    metaInfo: {
        title: 'OLYEX',  // 这将设置 <title> 标签
        meta: [
            {
                name: 'description',
                content: "Olyex.finance is a decentralized exchange (DEX) that allows users to trade cryptocurrencies with high liquidity and low fees. Built on the ZKSync era.Arbitrum, Optimism, Polygon, BNBchain blockchain, Olyex.finance provides a secure and transparent platform for trading, staking, and farming.Join us today and experience the power of decentralized finance(DeFi)."
            },
            {
                name: 'keywords',
                content: 'Decentralized trading,Perpetual contracts,Blockchain trading,Digital assets,Leveraged trading,Automated trading,Trading pairs,Asset management,Digital currencies,Crypto trading,Asset exchanges,Perpetual contract trading,Decentralized governance,Decentralized finance,Token trading,Cryptocurrencies,Virtual currencies,Trading platforms,Smart contracts,Trade settlement,Trade matching,Trade services,Digital identities,Digital certificates,Smart contract technology,Blockchain applications,Blockchain ecosystem,Blockchain community,Blockchain nodes,Blockchain explorer,Blockchain wallets,Trade information,Trade fees,Trade confirmation time,Trade speed,Trade records,Trade history,Trade analysis,Trade monitoring,Trade risks,Trade strategies,Trade opportunities,Trade trends,Trade guides,Trade tools,Trading platform rankings,Exchange rankings,Exchange reviews,Decentralized exchange rankings,Decentralized exchange reviews,'
            }
        ]
    },
    components: {
        Head, Footer
    },
    data() {
        return {
            price: [{ price: "" }, { price: "" }, { price: "" }, { price: "" }, { price: "" }, { price: "" }],
            pricePercent: [{ priceChangePercent: "", color: "#BB3838" }, { priceChangePercent: "", color: "#BB3838" }, { priceChangePercent: "", color: "#BB3838" }, { priceChangePercent: "", color: "#BB3838" }, { priceChangePercent: "", color: "#BB3838" }, { priceChangePercent: "", color: "#BB3838" }],
            footerData: [
                { title: "About", children: [{ title: "App", link: "#" }, { title: "Terms", link: "/terms", path: "/terms" }, { title: "Privacy", link: "/privacy", path: "/privacy" }] },
                { title: "Learn", children: [{ title: "Medium", link: "https://medium.com/@olyexfinance" }, { title: "Gitbook", link: "https://docs.olyex.finance/" }, { title: "Github", link: "#" }] },
                { title: "Community", children: [{ title: "Twitter", link: "https://twitter.com/Olyexfinance" }, { title: "Discord", link: "#" }, { title: "Telegram", link: "https://t.me/olyexfinance" }, { title: "Email", link: "#" }] },

            ]
        }
    },
    mounted() {
        this.getPrice()
        setInterval(() => {
            this.getPrice()
        }, 3000);
        this.getPricePercent()
        setInterval(() => {
            this.getPricePercent()
        }, 3000);
    },
    methods: {
        async getPrice() {
            const res = await axios({
                method: "GET",
                url: "https://api.binance.com/api/v3/ticker/price?symbols=[%22BTCUSDT%22,%22BNBUSDT%22,%22ETHUSDT%22,%22OPUSDT%22,%22ARBUSDT%22,%22MATICUSDT%22]",
                params: "",
            })
            res.data.forEach(item => {
                item.price = Number(item.price).toFixed(3)

                // console.log(item);
            })
            this.price = res.data
            // console.log(this.price);
        },
        async getPricePercent() {
            const res = await axios({
                method: "GET",
                url: "https://api.binance.com/api/v3/ticker/24hr?symbols=[%22BTCUSDT%22,%22BNBUSDT%22,%22ETHUSDT%22,%22OPUSDT%22,%22ARBUSDT%22,%22MATICUSDT%22]",
                params: "",
            })


            res.data.forEach(item => {
                if (item.priceChangePercent > 0) {
                    item.color = "#10A777"
                } else {
                    item.color = "#BB3838"
                }
            })
            this.pricePercent = res.data
            // console.log("currentPrice", res.data);
        }
    }
}
</script>
<style lang="scss" scoped>
main {
    display: flex;
    align-items: center;
    margin-top: 3.125rem;

    .main-left {
        margin-left: 16.25rem;

        h3 {
            font-size: 3.25rem;
            letter-spacing: 0em;
            background: #fff;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 1.25rem;
            font-weight: bold;
        }

        h6 {
            font-size: .875rem;
            font-weight: normal;
            color: #CCCCCC;
        }

        .main-left-button {
            margin-top: 4.1875rem;

            button {
                width: 150px;
                height: 50px;
                border-radius: 8rem;
                opacity: 1;
                background: linear-gradient(90deg, rgba(11, 11, 50, 0.60) 0%, rgba(38, 37, 83, 0.60) 100%);
                box-sizing: border-box;
                border: .0625rem solid #73729B;
                backdrop-filter: blur(.625rem);
                font-size: 14pxTRADE NOW;
                font-weight: normal;
                color: #FFFFFF;
                margin-right: 3.125rem;
                cursor: pointer;

                &:hover {
                    transform: scale(1.05);
                    border-color: rgb(54, 145, 219);
                }
            }
        }
    }

    .main-right {
        margin-left: 3.125rem;
        height: 43.75rem;

        img {
            height: 100%;
            display: block;
        }
    }
}

.wrapper {
    margin-top: 8.875rem;
    box-sizing: border-box;
    padding: 0 22.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .wrapper-card {
        width: 23.75rem;
        height: 8.125rem;
        border-radius: .625rem;
        // background: linear-gradient(90deg, rgba(11, 11, 50, 0.20) 0%, rgba(38, 37, 83, 0.20) 100%);
        box-sizing: border-box;
        backdrop-filter: blur(.625rem);
        display: flex;
        align-items: center;
        background-image: url("@/assets/边框装饰.png");
        position: relative;
        cursor: pointer;

        &::after {
            display: block;
            content: "";
            left: 0;
            top: 0;
            position: absolute;
            width: 23.75rem;
            height: 8.125rem;
            border-radius: .625rem;
            opacity: 1;
            background: rgba(18, 19, 41, 0.2);
            box-sizing: border-box;
            border: .0625rem solid rgba(115, 114, 155, 0.6);
            backdrop-filter: blur(.625rem);
            box-shadow: inset 0rem 0rem 1.25rem 0rem rgba(115, 114, 155, 0.4);
            z-index: -10;
        }


        &:hover {
            transform: scale(1.05);
            // border-color: rgb(54, 145, 219);
            background: linear-gradient(90deg, rgba(11, 11, 50, 0.60) 0%, rgba(38, 37, 83, 0.60) 100%);
            border: .0625rem solid rgba(115, 114, 155, 0.6);
            box-shadow: inset 0rem 0rem 1.25rem 0rem rgba(115, 114, 155, 0.4);
            transition: all 0.5s;
        }

        .wrapper-card-left {
            img {
                display: block;
                width: 2.5rem;
            }

            margin-left: 2.5rem;
        }

        .wrapper-card-right {
            margin-left: 1.875rem;

            h2 {
                -webkit-text-security: disc;
                /* 兼容 WebKit 浏览器（如 Safari） */
                -moz-text-security: disc;
                /* 兼容 Firefox 浏览器 */
                text-security: disc;
                /* 标准语法 */
                font-size: 1.5rem;
                font-weight: normal;
                letter-spacing: 0em;
                color: #FFFFFF;
                margin-bottom: .6875rem;
                margin-left: .1875rem;
            }

            img {
                vertical-align: middle;
            }

            span {
                -webkit-text-security: disc;
                /* 兼容 WebKit 浏览器（如 Safari） */
                -moz-text-security: disc;
                /* 兼容 Firefox 浏览器 */
                text-security: disc;
                /* 标准语法 */
                font-size: .875rem;
                font-weight: normal;
                letter-spacing: 0em;
                color: #BB3838;
            }

            label {

                font-size: .75rem;
                font-weight: normal;
                letter-spacing: 0em;
                color: #CCCCCC;
            }

            h3 {
                margin-top: 1.0625rem;
                margin-left: .1875rem;
                font-size: .75rem;
                font-weight: normal;
                letter-spacing: 0em;
                color: #BCBBE7;
            }
        }
    }
}

.start {
    box-sizing: border-box;
    padding: 0 22.5rem;
    margin-top: 9.375rem;

    >h1 {
        margin: 0 auto;
        text-align: center;

        font-size: 3.125rem;
        font-weight: normal;
        letter-spacing: 0em;
        color: #FFFFFF;
    }

    h3 {
        margin: 0 auto;
        text-align: center;

        font-size: .875rem;
        font-weight: normal;
        line-height: 1.5rem;
        letter-spacing: 0em;
        color: #CCCCCC;
        margin-top: 1.25rem;
    }

    .start-card-wrapper {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 4.375rem;

        .start-card {
            cursor: pointer;
            margin-bottom: 1.875rem;
            box-sizing: border-box;
            padding: 1.25rem;
            width: 23.75rem;
            height: 10.625rem;
            border-radius: .625rem;
            opacity: 1;
            backdrop-filter: blur(.625rem);
            border: .0625rem solid transparent;
            background-image: url("@/assets/边框装饰1.png");
            position: relative;
            z-index: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;


            &::after {
                content: "";
                display: block;
                top: 0;
                left: 0;
                position: absolute;
                width: 23.75rem;
                height: 10.625rem;
                border-radius: .625rem;
                opacity: 0.5;
                background: rgba(18, 19, 41, 0.2);
                box-sizing: border-box;
                // backdrop-filter: blur(.625rem);
                border: .0625rem solid rgba(115, 114, 155, 0.6);
            }

            &:hover {
                transform: scale(1.05);
                transition: all 0.5s;
                // border: .125rem solid rgb(54, 145, 219);
            }

            &:first-child {
                &:hover {

                    border: .0625rem solid rgba(247, 147, 26, 0.6);
                    box-shadow: inset 0rem 0rem 1.25rem 0rem rgba(247, 147, 26, 0.4);

                }

            }

            &:nth-child(2) {


                &:hover {

                    border: .0625rem solid rgba(96, 122, 227, 0.6);
                    box-shadow: inset 0rem 0rem 1.25rem 0rem rgba(96, 122, 227, 0.4);
                }
            }

            &:nth-child(3) {


                &:hover {

                    border: .0625rem solid rgba(240, 185, 11, 0.6);
                    box-shadow: inset 0rem 0rem 1.25rem 0rem rgba(240, 185, 11, 0.4);
                }
            }

            &:nth-child(4) {


                &:hover {

                    border: .0625rem solid rgba(157, 204, 237, 0.6);
                    box-shadow: inset 0rem 0rem 1.25rem 0rem rgba(157, 204, 237, 0.4);
                }
            }



            &:nth-child(5) {


                &:hover {


                    border: .0625rem solid rgba(255, 4, 32, 0.6);
                    box-shadow: inset 0rem 0rem 1.25rem 0rem rgba(255, 4, 32, 0.4);
                }
            }

            &:nth-child(6) {


                &:hover {


                    border: .0625rem solid rgba(122, 64, 229, 0.6);
                    box-shadow: inset 0rem 0rem 1.25rem 0rem rgba(122, 64, 229, 0.4);
                }
            }



            .card-line1 {
                img {
                    width: 2.5rem;
                    vertical-align: middle;
                }

                span {

                    font-size: 1.25rem;
                    font-weight: normal;
                    letter-spacing: 0em;
                    color: #BCBBE7;
                    vertical-align: middle;
                    margin-left: .9375rem;
                }
            }

            .card-line2 {
                display: flex;
                // margin-top: 3.5rem;
                justify-content: space-between;
                align-items: center;


                >h1 {

                    font-size: 1.625rem;
                    font-weight: normal;
                    letter-spacing: 0em;
                    color: #FFFFFF;
                }

                i {

                    font-size: .75rem;
                    color: #706F8F;
                }

                span {

                    font-size: .75rem;
                    font-weight: normal;
                    text-align: right;
                    letter-spacing: 0em;
                    // color: #BB3838;
                }

                .up {
                    color: #10A777;
                }
            }
        }
    }
}

.olyex-card-wrapper {
    display: flex;
    align-items: center;
    margin-top: 5rem;
    justify-content: space-between;
    flex-wrap: wrap;

    .olyex-card {
        box-sizing: border-box;
        padding: 1.875rem;
        margin-bottom: 1.875rem;
        width: 23.75rem;
        height: 11.875rem;
        border-radius: .625rem;
        opacity: 1;
        border: .0625rem solid transparent;
        position: relative;
        background-image: url("@/assets/边框装饰2.png");
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 100;
        cursor: pointer;

        &::after {
            display: block;
            content: "";
            left: 0;
            top: 0;
            position: absolute;
            width: 23.75rem;
            height: 11.875rem;
            border-radius: .625rem;
            opacity: 1;
            background: rgba(18, 19, 41, 0.2);
            box-sizing: border-box;
            border: .0625rem solid rgba(115, 114, 155, 0.6);
            box-shadow: inset 0rem 0rem 1.25rem 0rem rgba(115, 114, 155, 0.4);
            z-index: -10;
        }

        &:hover {
            transform: scale(1.05);
            background: linear-gradient(90deg, rgba(11, 11, 50, 0.60) 0%, rgba(38, 37, 83, 0.60) 100%);
            box-sizing: border-box;
            border: .0625rem solid rgba(115, 114, 155, 0.6);
            box-shadow: inset 0rem 0rem 1.25rem 0rem rgba(115, 114, 155, 0.4);
            transition: all 0.5s;
        }

        .olyex-line1 {
            img {
                display: block;
                width: 2.5rem;
            }
        }

        >h1 {
            text-align: left;

            font-size: 1.25rem;
            font-weight: normal;
            letter-spacing: 0em;
            color: #FFFFFF;

        }

        >h3 {
            // margin-top: 0;

            font-size: .75rem;
            font-weight: normal;
            line-height: 1.3125rem;

            /* 浏览器可能不支持 */
            letter-spacing: 0em;
            color: #BCBBE7;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            text-align: left;
            margin-left: 0;
        }
    }
}

.partners {
    >h1 {
        margin: 0 auto;
        text-align: center;

        font-size: 3.125rem;
        font-weight: normal;
        letter-spacing: 0em;
        color: #FFFFFF;
    }

    text-align: center;
    margin-top: 7.5rem;
    font-size: 3.125rem;
    padding-bottom: 8.8125rem;

    .partners-img {
        margin-top: 3.75rem;
        padding: 0 21.875rem;
        display: flex;
        // align-items: center;
        justify-content: space-around;
        align-items: center;

        >li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;

            img {
                width: 8.375rem;
            }
        }
    }
}


.background-img {
    position: absolute;
    top: -1.25rem;
    left: 0;
    z-index: -1;
    height: 100%;
    width: 100%;

    img {
        display: block;
        height: 100%;
        width: 100%;
    }
}

.and-button {
    display: none;
}

.main-and {
    display: none;
}

.wrapper-and {
    display: none;
}

.start-and {
    display: none;
}

.start-olyex-and {
    display: none;
}

.partners-and {
    display: none;
}

.background-img-and {
    display: none;
}





// is android pages
@media (max-width: 768px) {

    .main-left-button {
        display: none;
    }

    .main-pc {
        display: none;
    }

    .main-and {
        margin-top: 10rem;
        box-sizing: border-box;
        display: block;
        padding: 0 22.5rem;

        h3 {
            font-size: 9rem;
            font-weight: bold;
            text-align: center;
            color: #FFFFFF;
        }

        h6 {
            margin-top: 7rem;
            font-size: 5rem;
            text-align: center;
            color: #CCCCCC;
        }

        .and-button {
            display: block;
            margin-top: 15rem;
            box-sizing: border-box;
            padding-left: 20rem;

            >button {
                width: 30rem;
                height: 10rem;
                font-size: 3rem;
                border-radius: 8rem;
                background: linear-gradient(90deg, rgba(11, 11, 50, 0.60) 0%, rgba(38, 37, 83, 0.60) 100%);
                font-weight: 500;
                color: #FFFFFF;
                border: 1px solid #73729B;
                padding: 2rem;


            }
        }
    }

    .partners {
        display: none;
    }

    .wrapper {
        display: none;
    }

    .wrapper-and {
        display: block;
        margin-top: 8.875rem;
        box-sizing: border-box;
        padding: 0 0rem;
        display: flex;
        flex-direction: column;
        padding-left: 11.5rem;
        box-sizing: border-box;

        .wrapper-card {
            width: 95rem;
            height: 30rem;
            border-radius: 3rem;
            // border: .0625rem solid transparent;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            background-image: url("@/assets/边框装饰.png");
            position: relative;
            cursor: pointer;
            margin-top: 6rem;
            padding-left: 10rem;

            &::after {
                display: block;
                content: "";
                left: 0;
                top: 0;
                position: absolute;
                width: 95rem;
                height: 30rem;
                border-radius: 3rem;
                opacity: 1;
                background: rgba(18, 19, 41, 0.2);
                box-sizing: border-box;
                border: .0625rem solid rgba(115, 114, 155, 0.6);
                backdrop-filter: blur(.625rem);
                box-shadow: inset 0rem 0rem 1.25rem 0rem rgba(115, 114, 155, 0.4);
                z-index: -10;
            }

            .wrapper-card-left {
                img {
                    display: block;
                    width: 13rem;
                }

                margin-left: 2.5rem;
            }

            .wrapper-card-right {
                margin-left: 4rem;

                h2 {

                    font-size: 4rem;
                    font-weight: normal;
                    letter-spacing: 0em;
                    color: #FFFFFF;
                    margin-bottom: .6875rem;
                    margin-left: 1rem;
                    -webkit-text-security: disc;
                    /* 兼容 WebKit 浏览器（如 Safari） */
                    -moz-text-security: disc;
                    /* 兼容 Firefox 浏览器 */
                    text-security: disc;
                    /* 标准语法 */
                }

                img {
                    vertical-align: middle;
                }

                span {
                    font-size: 3rem;
                    font-weight: normal;
                    letter-spacing: 0em;
                    color: #BB3838;
                    vertical-align: middle;
                    -webkit-text-security: disc;
                    /* 兼容 WebKit 浏览器（如 Safari） */
                    -moz-text-security: disc;
                    /* 兼容 Firefox 浏览器 */
                    text-security: disc;
                    /* 标准语法 */
                }

                label {
                    font-size: 3rem;
                    font-weight: normal;
                    letter-spacing: 0em;
                    color: #CCCCCC;
                    vertical-align: middle;
                }

                h3 {
                    margin-left: 1rem;
                    margin-top: 1.0625rem;

                    font-size: 3rem;
                    font-weight: normal;
                    letter-spacing: 0em;
                    color: #BCBBE7;
                }
            }
        }
    }

    .start {
        display: none;
    }

    .start-and {
        display: block;
        box-sizing: border-box;
        padding: 0 22.5rem;
        margin-top: 20rem;
        text-align: center;

        >h1 {
            font-size: 9rem;
            font-weight: bold;
            color: #FFFFFF;
        }

        h3 {
            font-size: 4rem;
            text-align: center;
            color: #CCCCCC;
            line-height: 8rem;
        }

        .start-card-wrapper {
            display: flex;
            align-items: center;
            flex-direction: column;
            margin-top: 4.375rem;

            .start-card {
                cursor: pointer;
                margin-bottom: 10rem;
                box-sizing: border-box;
                padding: 5rem;
                width: 97rem;
                height: 44rem;
                border-radius: .625rem;
                opacity: 1;
                backdrop-filter: blur(.625rem);
                border: 1px solid transparent;
                background-image: url("@/assets/边框装饰1.png");
                position: relative;
                z-index: 1;
                display: flex;
                flex-direction: column;


                &:first-child {
                    border: 1px solid rgba(247, 147, 26, 0.6);
                    box-shadow: inset 0rem 0rem 7rem 0rem rgba(247, 147, 26, 0.4);
                }

                &:nth-child(2) {

                    border: 1px solid rgba(96, 122, 227, 0.6);
                    box-shadow: inset 0rem 0rem 7rem 0rem rgba(96, 122, 227, 0.4);
                }

                &:nth-child(3) {
                    border: 1px solid rgba(240, 185, 11, 0.6);
                    box-shadow: inset 0rem 0rem 7rem 0rem rgba(240, 185, 11, 0.4);
                }

                &:nth-child(4) {
                    border: 1px solid rgba(157, 204, 237, 0.6);
                    box-shadow: inset 0rem 0rem 7rem 0rem rgba(157, 204, 237, 0.4);
                }

                &:nth-child(5) {
                    border: 1px solid rgba(255, 4, 32, 0.6);
                    box-shadow: inset 0rem 0rem 7rem 0rem rgba(255, 4, 32, 0.4);
                }

                &:nth-child(6) {
                    border: 1px solid rgba(122, 64, 229, 0.6);
                    box-shadow: inset 0rem 0rem 7rem 0rem rgba(122, 64, 229, 0.4);
                }



                .card-line1 {
                    display: flex;
                    align-items: center;

                    img {
                        width: 13rem;
                    }

                    span {
                        margin-left: 3rem;
                        font-size: 5rem;
                        color: #BCBBE7;
                    }
                }

                .card-line2 {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 7rem;

                    >h1 {
                        font-size: 6rem;
                        color: #FFFFFF;
                    }

                    i {

                        font-size: 4rem;
                        letter-spacing: 0em;
                        color: #706F8F;
                        font-style: normal;
                    }

                    span {
                        font-size: 4rem;
                        font-weight: normal;
                        text-align: right;
                        letter-spacing: 0em;
                        // color: #BB3838;
                    }

                    .up {
                        color: #10A777;
                    }
                }
            }
        }
    }

    .start-olyex-and {
        display: block;
        box-sizing: border-box;
        padding: 0 10rem;
        text-align: center;
        >h1 {
            font-size: 9rem;
            font-weight: bold;
            text-align: center;
            color: #FFFFFF;
        }

        >h3 {
            font-size: 3rem;
            line-height: 8rem;
            color: #CCCCCC;
        }

        .olyex-card-wrapper {
            display: flex;
            flex-direction: column;

            .olyex-card {
                width: 98rem;
                height: 42rem;
                border: 1px solid transparent;
                display: block;
                margin-bottom: 5rem;
                position: relative;
                box-sizing: border-box;
                padding: 0 5rem;

                // border: 1px solid red;
                &::after {
                    // display: none;
                    content: "";
                    display: block;
                    top: 0rem;
                    left: 0rem;
                    position: absolute;
                    width: 98rem;
                    height: 42rem;
                    border-radius: .625rem;
                    opacity: 0.5;
                    background: rgba(18, 19, 41, 0.2);
                    box-sizing: border-box;
                    backdrop-filter: blur(.625rem);
                    border: 1px solid rgba(115, 114, 155, 0.6);
                    z-index: -10;
                }

                .olyex-line1 {
                    display: flex;
                    align-items: center;
                    margin-top: 3rem;

                    >img {
                        width: 13rem;
                    }

                    >h1 {
                        margin-left: 4rem;
                        font-size: 5rem;
                        font-weight: bold;
                        color: #FFFFFF;
                    }
                }

                >h3 {
                    font-size: 14px;
                    line-height: 21px;
                    color: #BCBBE7;
                    padding-left: 16rem;
                    margin-top: 5rem;
                }
            }
        }
    }

    .partners-and {
        display: block;

        >h1 {
            font-size: 9rem;
            font-weight: bold;
            color: #FFFFFF;
        }

        text-align: center;
        margin-top: 7.5rem;
        font-size: 3.125rem;
        padding-bottom: 8.8125rem;

        .partners-img {
            margin-top: 3.75rem;
            padding: 0 15rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;

            >li {
                cursor: pointer;
                margin-bottom: 7rem;

                img {
                    width: 41rem;
                }
            }
        }
    }

    .background-img {
        display: none;
    }

    .background-img-and {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        height: 100%;
        width: 100%;

        img {
            display: block;
            width: 100%;
        }
    }
}
</style>