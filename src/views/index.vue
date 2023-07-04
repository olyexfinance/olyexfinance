<template>
    <div>

        <Head></Head>
        <main class="main-pc">
            <div class="main-left">
                <h1>Olyex.finance<h2>Olyex.finance</h2>
                </h1>

                <h3>AI-Driven Multi-Chain Decentralized Perpetual Contract Exchange for Infinite Capital Optimization</h3>

                <div class="main-left-button">
                    <button><a href="https://app.olyex.finance/" target="_blank" class="pc-button">USE APP</a></button>
                    <button><a href="https://docs.olyex.finance/" target="_blank" class="pc-button">DOCS</a></button>
                </div>

            </div>
            <!-- <div class="main-right">
                <img src="../assets/new/组 160.png" alt="">
            </div> -->
        </main>
        <main class="main-and">
            <h1>Olyex.finance<h2>Olyex.finance</h2>
            </h1>
            <h3>AI-Driven Multi-Chain Decentralized Perpetual Contract Exchange for Infinite Capital Optimization</h3>
            <!-- <h6>A Decentralized Perpetual Exchange with Functional Risk Management and Innovative Liquidity Solutions.</h6> -->
            <div class=" and-button">
                <button><a href="https://app.olyex.finance/" target="_blank">USE APP</a></button>
                <button><a href="https://docs.olyex.finance/" target="_blank">DOCS</a></button>
            </div>
        </main>
        <div class="wrapper">
            <div class="wrapper-card">
                <div class="wrapper-card-left">
                    <img src="../assets//new/资产管理.png" alt="">
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
                    <img src="@/assets/new/总交易量.png" alt="">
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
                    <img src="@/assets/new/路径.png" alt="">
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
            <h2 ref="StartTitle">Start Trading</h2>
            <h3 ref="startText">We are constantly introducing new perpetual contract markets.</h3>
            <div class="start-card-wrapper">
                <div class="start-card" ref="startCard1">
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
                <div class="start-card" ref="startCard2">
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
                <div class="start-card" ref="startCard3">
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
                <div class="start-card" ref="startCard4">
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
                <div class="start-card" ref="startCard5">
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
                <div class="start-card" ref="startCard6">
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
            <h2>Breaking Boundaries in Olyex</h2>
            <h3>Welcome to the new era of perpetual trading.</h3>
            <div class="olyex-card-wrapper">
                <div class="olyex-card">
                    <div class="olyex-line1">
                        <img src="../assets//new/LeveragedTrading.png" alt="">
                    </div>
                    <h1>Multi-chain shared liquidity</h1>
                    <h3>In Olyex, you can choose any chain to open a position, and the capital utilization rate is high.
                    </h3>

                </div>
                <div class="olyex-card">
                    <div class="olyex-line1">
                        <img src="../assets//new/User-Friendly.png" alt="">
                    </div>
                    <h1>Maximize capital efficiency</h1>
                    <h3>The platform assets will achieve maximum output profitability. </h3>

                </div>
                <div class="olyex-card">
                    <div class="olyex-line1">
                        <img src="../assets//new/Real Yield.png" alt="">
                    </div>
                    <h1>Real Yield</h1>
                    <h3>Stake and mine real income in ETH.</h3>

                </div>
                <div class="olyex-card">
                    <div class="olyex-line1">
                        <img src="../assets//new/Lowest Fees.png" alt="">
                    </div>
                    <h1>Lowest Fees</h1>
                    <h3>Enter and exit positions with minimal spread and zero price impact.</h3>

                </div>
                <div class="olyex-card">
                    <div class="olyex-line1">
                        <img src="../assets//new/Transparency.png" alt="">
                    </div>
                    <h1>Transparency</h1>
                    <h3>Fully transparent open-source smart contracts.</h3>
                </div>
                <div class="olyex-card">
                    <div class="olyex-line1">
                        <img src="../assets//new/Leveraged Trading.png" alt="">
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
                        <img src="@/assets/User-Friendly.svg" alt="">
                        <h1>Maximize capital efficiency</h1>
                    </div>

                    <h3>The platform assets will achieve maximum output profitability.</h3>

                </div>
                <div class="olyex-card">
                    <div class="olyex-line1">
                        <img src="@/assets/Real Yield.svg" alt="">
                        <h1>Real Yield</h1>
                    </div>

                    <h3>Stake and mine real income in ETH.</h3>

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
                        <img src="@/assets/Leveraged Trading.svg" alt="">
                        <h1>Leveraged Trading</h1>
                    </div>

                    <h3>Innovative trading solution for BTC, ETH, OP and BNB,with up to 100x leverage.</h3>

                </div>
            </div>
        </div>

        <div class="journey">
            <h2>Your Journey With Olyex Begins Here</h2>
            <img src="../assets/new/组 155.png" ref="imgSrc">
            <div class="journey-content" @scroll="scrollChange">
                <div class="journey-content-right">
                    <div class="emptyBox"></div>
                    <h1>{{ journeyData[0].title }}</h1>
                    <span>{{ journeyData[0].text }}</span>
                </div>
                <div class="journey-content-right " :class="{ 'toggles': isSelect2 }">
                    <div class="emptyBox"></div>
                    <h1>{{ journeyData[1].title }}</h1>
                    <span>{{ journeyData[1].text }}</span>
                </div>
            </div>

            <div class="details">
                <div class="details-line">
                    <div class="details-text">
                        <h2>
                            Smart routing enables the sharing of liquidity
                        </h2>
                        <h2>
                            across multiple chains.
                        </h2>
                        <div class="box">
                            <img class="decorate1" src="../assets/decorate.png" alt="">
                            <p class="details-description">
                                Smart routing bots monitor the overall liquidity and reserved liquidity for margin trading.
                                When
                                a trader places an order, the smart routing bot calculates the available liquidity across
                                the
                                deployed networks and fills the order if it meets the position size requirements.
                            </p>
                            <div class="details-img">
                                <img src="../assets/flow1.png" alt="">
                            </div>
                        </div>
                    </div>

                </div>

                <div class="details-line">
                    <div class="details-text">
                        <h2>
                            Maximum Capital Efficiency
                        </h2>
                        <h2>
                            Liquidity flows to where its needed the most.
                        </h2>
                        <div class="box">
                            <img class="decorate2" src="../assets/decorate.png" alt="">
                            <p class="details-description">
                                Olyex's self-learning and predictive AI model dynamically adapts to provide liquidity across
                                multiple chains, assets, and protocols. This includes margin trading within the platform,
                                third-party DEX mining, lending, and more, with the aim of significantly maximizing the
                                utilization of liquidity and enhancing overall liquidity efficiency across different
                                networks, assets, and protocols.
                            </p>
                            <div class="details-img">
                                <img src="../assets/flow2.png" alt="">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="journey-and">
            <h2>Your Journey With Olyex Begins Here</h2>

            <div class="journey-content">
                <div class="journey-content-card">
                    <div class="card-title">
                        <div class="emptyBox"></div>
                        <h2>Earn high rewards by pro-viding liquidity</h2>
                    </div>
                    <span>Olyex liquidity providers earn a share of 65% to 70% of the income and Defi liquidity rewards when
                        staking. Harvest your earnings with OLP.</span>
                    <img src="../assets/new/组 155.png">
                </div>

                <div class="journey-content-card">
                    <div class="card-title">
                        <div class="emptyBox"></div>
                        <h2>Incentivized Trade with le-verage</h2>
                    </div>
                    <span>Leverage our synthetic, permissionless trading for extensive crypto and asset pairs. Go long or
                        short with high leverage and enjoy rewarding daily incentives.</span>
                    <img src="../assets/new/组 157.png">
                </div>

            </div>
            <h2 style="padding-top: 13rem;">
                Smart routing enables the sharing of liquidity across multiple chains.
            </h2>
            <div class="journey-card">
                <p>Smart routing bots monitor the overall liquidity and reserved liquidity for margin trading. When a trader
                    places an order, the smart routing bot calculates the available liquidity across the deployed networks
                    and fills the order if it meets the position size requirements.
                </p>
                <div class="img-box">
                    <img src="../assets/flow1-and.png" alt="">
                </div>

                <img src="../assets/decorate-and.png" class="decorate" alt="">
            </div>

            <h2 style="padding-top: 13rem;">
                Maximum Capital Efficiency Liquidity flows to where its needed the most.
            </h2>

            <div class="journey-card">
                <p>Smart routing bots monitor the overall liquidity and reserved liquidity for margin trading. When a trader
                    places an order, the smart routing bot calculates the available liquidity across the deployed networks
                    and fills the order if it meets the position size requirements.
                </p>
                <div class="img-box">
                    <img src="../assets/flow2-and.png" alt="">
                </div>
                <img src="../assets/decorate-and.png" class="decorate2" alt="">
            </div>
        </div>

        <!-- <div class="return">
            <h2>Olyex's LP staking APR</h2>
            <div class="data">
                <div class="data-left">
                    <h3 class="data-left-title">
                        Return on Investment
                    </h3>
                    <div class="img" id="echarts1">
                    </div>
                    <div class="echarts-explain">
                        <div>
                            <div class="empty-box1"></div>
                            <h4 class="olyexText">Olyex</h4>
                        </div>
                        <div>
                            <div class="empty-box2"></div>
                            <h4>GMX</h4>
                        </div>
                        <div>
                            <div class="empty-box3"></div>
                            <h4>DYDX</h4>
                        </div>
                    </div>
                </div>
                <div class="data-left">
                    <h3 class="data-left-title">
                        Processing fee
                    </h3>
                    <div class="img" id="echarts2">
                    </div>
                    <div class="echarts-explain">
                        <div>
                            <div class="empty-box1"></div>
                            <h4 class="olyexText">Olyex</h4>
                        </div>
                        <div>
                            <div class="empty-box2"></div>
                            <h4>GMX</h4>
                        </div>
                        <div>
                            <div class="empty-box3"></div>
                            <h4>DYDX</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->

        <!-- <div class="return-and">
            <h2>
                Olyex's data is all here
            </h2>

            <div class="return-and-card">
                <h2>Return on Investment</h2>
                <div class="echartsAnd1" id="echartsAnd1"></div>
                <div class="echarts-adn-explain">
                    <div>
                        <div class="empty-box1"></div>
                        <h4 class="olyexText">Olyex</h4>
                    </div>
                    <div>
                        <div class="empty-box2"></div>
                        <h4>GMX</h4>
                    </div>
                    <div>
                        <div class="empty-box3"></div>
                        <h4>DYDX</h4>
                    </div>
                </div>
            </div>

            <div class="return-and-card">
                <h2>Processing fee</h2>
                <div class="echartsAnd1" id="echartsAnd2"></div>
                <div class="echarts-adn-explain">
                    <div>
                        <div class="empty-box1"></div>
                        <h4 class="olyexText">Olyex</h4>
                    </div>
                    <div>
                        <div class="empty-box2"></div>
                        <h4>GMX</h4>
                    </div>
                    <div>
                        <div class="empty-box3"></div>
                        <h4>DYDX</h4>
                    </div>
                </div>
            </div>
        </div> -->

        <div class="partners">
            <h2>Partners</h2>
            <ul class="partners-img">
                <li class="animate__animated" ref="partners1"><img src="@/assets/zksync 1.svg" alt=""></li>
                <li class="animate__animated" ref="partners2"><img src="@/assets/arbitrum 1.svg" alt=""></li>
                <li class="animate__animated" ref="partners3"><img src="@/assets/optimism 1.svg" alt=""></li>
            </ul>
            <ul class="partners-img-line2">
                <li class="animate__animated" ref="partners4"><img src="@/assets/bnbchain 1.svg" alt=""></li>
                <li class="animate__animated" ref="partners5"><img src="@/assets/fantom 1.svg" alt=""></li>
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
        <!-- <div class="background-img">
            <img src="@/assets/webBackground.png" alt="">
        </div> -->
        <div class="background-img-and">
            <!-- <img src="../assets/移动端-背景图.png" alt=""> -->
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Head from '@/components/Head.vue'
import Footer from '@/components/Footer.vue'
import img1 from '../assets/new/组 155.png'
import img2 from '../assets/new/组 157.png'
import img3 from '../assets/new/组 158.png'
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

            ],
            journeyData: [
                { src: img1, title: "Earn high rewards by providing liquidity", text: "Olyex liquidity providers earn a share of 65% to 70% of the income and Defi liquidity rewards when staking. Harvest your earnings with OLP." },
                { src: img2, title: "Incentivized Trade with leverage", text: " Leverage our synthetic, permissionless trading for extensive crypto and asset pairs. Go long or short with high leverage and enjoy rewarding daily incentives." },
            ],
            currentJourney: { src: img1, title: "Earn high rewards by providing liquidity", text: "Olyex liquidity providers earn a share of 65% to 70% of the income and Defi liquidity rewards when staking. Harvest your earnings with OLP." },
            imgSrc: img1,
            isSelect2: true,
            isSelect3: false,
            img1src: img1, img2src: img2
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
        window.addEventListener("scroll", (e) => {
            // console.log(window.scrollY);
        })
        // this.changetype();
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
        },
        scrollChange(e) {

            if (e.target.scrollTop < 190) {
                this.isSelect2 = true
            } else if (e.target.scrollTop > 190) {
                this.isSelect2 = false
                this.isSelect3 = true

            } else {
                this.isSelect2 = true
                this.isSelect3 = false
                this.imgSrc = img3
            }
        },
        // changetype() {
        //     // 获取组件实例
        //     const machart = this.$echarts.init(document.getElementById("echarts1"));
        //     // const machart2 = this.$echarts.init(document.getElementById("echarts2"));
        //     const echartsAnd1 = this.$echarts.init(document.getElementById("echartsAnd1"));
        //     // const echartsAnd2 = this.$echarts.init(document.getElementById("echartsAnd2"));
        //     var option;
        //     //get current time
        //     let currentTime=new Date()
        //     // console.log(currentTime.getFullYear());
        //     // console.log(currentTime.getMonth()+1);
        //     let currentYear=currentTime.getFullYear()
        //     let currentMonth=currentTime.getMonth()+1
        //     option = {
        //         xAxis: {
        //             type: 'category',
        //             data: [`${currentYear}-${currentMonth-3}`, `${currentYear}-${currentMonth-2}`, `${currentYear}-${currentMonth-1}`, `${currentYear}-${currentMonth}`],
        //         },
        //         yAxis: {
        //             type: 'value',
        //             axisLine: { // Hidden Y-axis
        //                 show: false
        //             },
        //             axisTick: { // Hidden mark
        //                 show: false
        //             },
        //             axisLabel: { // Hide tag
        //                 show: false
        //             },
        //             splitLine: { // Custom gridline styles
        //                 lineStyle: {
        //                     color: 'rgba(233, 233, 233, 0.05)'
        //                 }
        //             },
        //         },
        //         series: [
        //             {
        //                 data: [220, 332, 201, 34],
        //                 type: 'line',
        //                 smooth: true,
        //                 itemStyle: {
        //                     color: "green"
        //                 },
        //                 symbol: "none",
        //                 lineStyle: {
        //                     width: 5
        //                 },
        //             },
        //             {
        //                 data: [20, 32, 21, 134],
        //                 type: 'line',
        //                 smooth: true,
        //                 itemStyle: {
        //                     color: "blue"
        //                 },
        //                 symbol: "none",
        //             },
        //             // {
        //             //     data: [120, 32, 21, 124],
        //             //     type: 'line',
        //             //     smooth: true,
        //             //     itemStyle: {
        //             //         color: "purple"
        //             //     }
        //             // },
        //         ]
        //     };
        //     const option2 = {
        //         xAxis: {
        //             type: 'category',
        //             data: ["2023-4", "2023-5", "2023-6", "2023-7"],
        //         },
        //         yAxis: {
        //             type: 'value',
        //             axisLine: { // Hidden Y-axis
        //                 show: false
        //             },
        //             axisTick: { // Hidden mark
        //                 show: false
        //             },
        //             axisLabel: { // Hide tag
        //                 show: false
        //             },
        //             splitLine: { // Custom gridline styles
        //                 lineStyle: {
        //                     color: 'rgba(233, 233, 233, 0.05)'
        //                 }
        //             },
        //         },
        //         series: [
        //             {
        //                 data: [220, 332, 201, 34],
        //                 type: 'line',
        //                 smooth: true,
        //                 itemStyle: {
        //                     color: "green"
        //                 }
        //             },
        //             {
        //                 data: [20, 321, 21, 134],
        //                 type: 'line',
        //                 smooth: true,
        //                 itemStyle: {
        //                     color: "blue"
        //                 }
        //             },
        //             {
        //                 data: [120, 32, 21, 124],
        //                 type: 'line',
        //                 smooth: true,
        //                 itemStyle: {
        //                     color: "purple"
        //                 }
        //             },
        //         ]
        //     };
        //     machart.setOption(option);
        //     // machart2.setOption(option2);
        //     echartsAnd1.setOption(option);
        //     // echartsAnd2.setOption(option2);
        //     // 根据页面大小自动响应图表大小
        //     window.addEventListener("resize", function () {
        //         machart.resize();
        //         // machart2.resize();
        //         echartsAnd1.resize();
        //         // echartsAnd2.resize();
        //     });
        // },
    }
}
</script>
<style lang="scss" scoped>
main {
    display: flex;
    align-items: center;
    margin-top: 14.25rem;
    box-sizing: border-box;
    padding-left: 22.5rem;
    padding-right: 22.5rem;
    position: relative;

    .main-left {
        text-align: center;

        h1 {
            opacity: 1;
            font-size: 4.375rem;
            background: linear-gradient(180deg, #2A34FF 26%, #3EBDFF 79%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            overflow: hidden;
            position: relative;

            h2 {
                font-size: 4.375rem;
                position: absolute;
                left: 23.0875rem;
                top: .1875rem;
                z-index: -10;
                -webkit-text-stroke: .0625rem gray;
                /* 设置文字描边样式，可以调整描边的粗细和颜色 */
                -webkit-text-fill-color: transparent;
                /* 将文字颜色设置为透明 */
            }

        }



        >h3 {
            margin-top: .875rem;
            font-size: 2.75rem;
            background: #fff;
            -webkit-background-clip: text;
            background-clip: text;
            margin-bottom: 1.25rem;
            font-weight: bold;
            line-height: 4.375rem;
            text-indent: 2em;
            padding: 0 89px;
            box-sizing: border-box;

            // border: 1px solid red;
            >span {
                // opacity: 1;
                // background: linear-gradient(180deg, #2A34FF 26%, #3EBDFF 79%);
                // -webkit-background-clip: text;
                // -webkit-text-fill-color: transparent;
                // background-clip: text;
                // color: #2A34FF;
                font-size: 3.4375rem;
            }
        }

        h6 {
            font-size: 1.125rem;
            font-weight: normal;
            line-height: 1.875rem;
            letter-spacing: 0em;
            color: #BCBBE7;
        }

        .main-left-button {
            margin-top: 4.1875rem;

            button {
                margin-right: 1.875rem;

                cursor: pointer;
                font-size: .875rem;
                color: #F6F6FF;
                width: 10.875rem;
                height: 3.125rem;
                border-radius: .625rem;
                opacity: 1;
                background: linear-gradient(71deg, #2A39FF 7%, #3DB9FF 90%);
                backdrop-filter: blur(3rem);
                border: none;

                &:hover {
                    transform: scale(1.05);
                    border-color: rgb(54, 145, 219);
                }

                &:last-child {
                    background: linear-gradient(71deg, rgba(42, 57, 255, 0.10) 7%, rgba(61, 185, 255, 0.10) 90%);
                    box-sizing: border-box;
                    border-radius: .625rem;
                    border: .0625rem solid rgb(54, 145, 219);
                    color: #3EB7FF;
                    // border: none;
                }
            }
        }
    }

    .main-right {
        height: 54.375rem;

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
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
            }
        }
    }
}

.start {
    box-sizing: border-box;
    padding: 0 22.5rem;
    margin-top: 9.375rem;

    // border: 1px solid red;
    >h2 {
        margin: 0 auto;
        text-align: center;
        font-size: 3.125rem;
        font-weight: bold;
        letter-spacing: 0em;
        color: #FFFFFF;
        // display: none;
        animation: 5s ease-out slidein;
    }

    h3 {
        margin: 0 auto;
        text-align: center;
        font-size: 1.25rem;
        font-weight: normal;
        line-height: 1.5rem;
        letter-spacing: 0em;
        color: #CCCCCC;
        margin-top: 1.25rem;
        // display: none;
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
    // border: 1px solid orangered;

    .olyex-card {
        box-sizing: border-box;
        padding: 1.875rem;
        margin-bottom: 1.875rem;
        width: 32.8125rem;
        opacity: 1;
        // background-image: url("@/assets/边框装饰2.png");
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;

        // &::after {
        //     display: block;
        //     content: "";
        //     left: 0;
        //     top: 0;
        //     position: absolute;
        //     width: 23.75rem;
        //     height: 11.875rem;
        //     border-radius: .625rem;
        //     opacity: 1;
        //     background: rgba(18, 19, 41, 0.2);
        //     box-sizing: border-box;
        //     border: .0625rem solid rgba(115, 114, 155, 0.6);
        //     box-shadow: inset 0rem 0rem 1.25rem 0rem rgba(115, 114, 155, 0.4);
        //     z-index: -10;
        // }

        // &:hover {
        //     transform: scale(1.05);
        //     background: linear-gradient(90deg, rgba(11, 11, 50, 0.60) 0%, rgba(38, 37, 83, 0.60) 100%);
        //     box-sizing: border-box;
        //     border: .0625rem solid rgba(115, 114, 155, 0.6);
        //     box-shadow: inset 0rem 0rem 1.25rem 0rem rgba(115, 114, 155, 0.4);
        //     transition: all 0.5s;
        // }

        .olyex-line1 {
            margin-bottom: 1.25rem;

            img {
                display: block;
                width: 3.75rem;
            }
        }

        >h1 {
            text-align: left;
            font-size: 1.875rem;
            font-weight: normal;
            letter-spacing: 0em;
            color: #FFFFFF;

        }

        >h3 {
            font-size: 1.25rem;
            font-weight: normal;
            line-height: 2.5rem;
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
    >h2 {
        margin: 0 auto;
        text-align: center;
        font-size: 3.125rem;
        letter-spacing: 0em;
        color: #FFFFFF;
        font-weight: bold;
    }

    text-align: center;
    margin-top: 7.5rem;
    font-size: 3.125rem;
    padding-bottom: 8.8125rem;

    .partners-img {
        margin-top: 6.25rem;
        padding: 0 21.875rem;
        display: flex;
        justify-content: space-around;
        align-items: center;

        >li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;

            img {
                height: 4rem;
            }
        }
    }

    .partners-img-line2 {
        padding: 0 24.1875rem;
        box-sizing: border-box;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 6.25rem;

        >li {
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;

            img {
                height: 4rem;
            }
        }
    }
}


.background-img {
    position: absolute;
    top: 0px;
    left: 0;
    z-index: -1;
    height: 100%;
    width: 100%;

    img {
        display: block;
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

.journey-and {
    display: none;
}

.background-img-and {
    display: none;
}

@keyframes slidein {
    from {
        opacity: 0;
        margin-top: 100px;
    }

    to {
        opacity: 1;
        margin-top: 0px;
    }
}



.journey {
    margin-bottom: 2rem;
    // height: 40.625rem;
    padding: 0 22.5rem;
    margin-top: 6.25rem;
    position: relative;

    >h2 {
        font-size: 3.125rem;
        color: #FFFFFF;
        font-weight: bold;
        text-align: center;
    }

    >img {
        width: 39.75rem;
        // display: none;
        margin-top: 4.4375rem;
    }

    .journey-content {
        margin-top: 6.4375rem;
        position: absolute;
        left: 60.625rem;
        top: 0rem;
        width: 37.5rem;
        height: 25.625rem;
        overflow: auto;
        padding-top: 4.25rem;
        padding-right: 20rem;

        &::-webkit-scrollbar {
            width: 0.8em;
            background-color: transparent;
        }

        .journey-content-right {
            margin: 0 6.9375rem;
            margin-bottom: 3.75rem;

            .emptyBox {
                width: 3.75rem;
                height: .75rem;
                opacity: 1;
                background: linear-gradient(79deg, #2E50FF 0%, #3BB2FF 100%);
            }

            >h1 {
                font-size: 1.875rem;
                font-weight: normal;
                color: #FFFFFF;
                margin: 1.25rem 0;
                font-weight: bold;
            }

            >span {
                font-size: 1.25rem;
                font-weight: normal;
                line-height: 2.5rem;
                color: #BCBBE7;

            }
        }
    }

    .toggles {
        opacity: 0.5;
    }

    .details {
        margin-top: 17.8125rem;

        .details-line {
            margin-bottom: 8.75rem;

            .details-text {
                text-align: center;

                >h2 {
                    font-size: 3.125rem;
                    font-weight: bold;
                    letter-spacing: 0em;
                    color: #FFFFFF;
                }

                .box {
                    border-radius: .625rem;
                    background: linear-gradient(290deg, rgba(16, 17, 36, 0.60) 11%, rgba(24, 26, 56, 0.60) 90%);
                    box-sizing: border-box;
                    border: .0625rem solid rgba(115, 114, 155, 0.4);
                    box-shadow: inset 0rem 0rem 1.25rem 0rem rgba(115, 114, 155, 0.4);
                    padding: 1.875rem 2.5rem;
                    margin-top: 4.375rem;
                    position: relative;

                    .decorate1 {
                        position: absolute;
                        left: -1.5rem;
                        top: -1.5rem;
                        width: 3.5rem;
                    }

                    .decorate2 {
                        position: absolute;
                        right: -1.5rem;
                        top: -1.5rem;
                        width: 3.5rem;
                    }

                    >p {
                        font-size: 1.25rem;
                        font-weight: bold;
                        line-height: 2.5rem;
                        letter-spacing: 0em;
                        color: #BCBBE7;
                        text-align: left;
                    }

                    .details-img {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-top: 3.125rem;

                        img {
                            width: 63.75rem;
                            display: block;
                        }
                    }
                }


            }


        }
    }
}

.return {
    padding: 0 22.5rem;
    text-align: center;

    >h2 {
        font-size: 3.125rem;
        font-weight: bold;
        text-align: center;
        letter-spacing: 0em;
        color: #FFFFFF;
        text-indent: 2em;
    }

    .data {
        margin-top: 5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h3 {
            font-size: 1.875rem;
            font-weight: bold;
            letter-spacing: 0em;
            color: #FFFFFF;
        }

        .img {
            margin-top: 1.875rem;
            height: 30rem;
            width: 70rem;
            background-color: transparent;

            img {
                display: block;
            }
        }

        .echarts-explain {
            box-sizing: border-box;
            padding: 0 5rem;
            display: flex;
            align-items: center;
            justify-content: space-around;

            .empty-box1 {
                width: 5rem;
                height: .375rem;
                background-color: green;
                border-radius: .625rem;
            }

            .empty-box2 {
                width: 5rem;
                height: .1875rem;
                background-color: blue;
                border-radius: .625rem;
            }

            .empty-box3 {
                width: 5rem;
                height: .1875rem;
                background-color: purple;
                border-radius: .625rem;
            }

            h4 {
                margin-top: .625rem;
                font-size: 1rem;
                font-weight: 100;
            }

            .olyexText {
                font-weight: bold;
                font-size: 1.5rem;
            }
        }
    }
}

.return-and {
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
        margin-top: 40.5rem;
        box-sizing: border-box;
        display: block;
        padding: 0 8.2rem;

        h1 {
            text-align: center;
            opacity: 1;
            font-size: 12.4rem;
            background: linear-gradient(180deg, #2A34FF 26%, #3EBDFF 79%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
            position: relative;

            h2 {
                font-size: 12.4rem;
                position: absolute;
                left: 10.5875rem;
                top: 0.5875rem;
                z-index: -10;
                -webkit-text-stroke: .3625rem gray;
                -webkit-text-fill-color: transparent;
            }

        }

        h3 {
            margin-top: 7rem;
            font-size: 7rem;
            font-weight: bold;
            text-align: center;
            color: #FFFFFF;
            line-height: 12rem;

            span {
                font-size: 9rem;
            }
        }

        h6 {
            margin-top: 7rem;
            font-size: 5rem;
            text-align: center;
            color: #BCBBE7;
            line-height: 8rem;
        }

        .and-button {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 15rem;
            box-sizing: border-box;
            flex-direction: column;

            >button {
                width: 50rem;
                height: 17rem;
                font-size: 5rem;
                border-radius: 3rem;
                background: linear-gradient(68deg, #2A39FF 7%, #3DB9FF 91%);
                font-weight: 500;
                color: #FFFFFF;
                border: none;
                padding: 2rem;
                margin-bottom: 5rem;

                &:last-child {
                    // border-image: linear-gradient(76deg, #2A39FF 1%, #3DB9FF 100%) 1;
                    // box-sizing: border-box;
                    color: #fff;
                    // border: 1px solid;
                    // // border: none;
                    // background: linear-gradient(68deg, rgba(42, 57, 255, 0.10) 7%, rgba(61, 185, 255, 0.10) 91%);


                    background: rgba(18, 19, 41, 0.2);

                    box-sizing: border-box;
                    border: 1px solid rgba(115, 114, 155, 0.6);

                    backdrop-filter: blur(3rem);
                    box-shadow: inset 0px 0px 5.8rem 0px rgba(115, 114, 155, 0.4);
                }

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
        padding: 0 7rem;
        text-align: center;
        margin-top: 9rem;

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
                // height: 42rem;
                border: 1px solid transparent;
                display: block;
                margin-bottom: 5rem;
                position: relative;
                box-sizing: border-box;


                .olyex-line1 {
                    margin-top: 3rem;
                    text-align: left;

                    >img {
                        width: 13rem;
                    }

                    >h1 {
                        font-size: 5rem;
                        font-weight: bold;
                        color: #FFFFFF;
                        margin-top: 8rem;
                    }
                }

                >h3 {
                    font-size: 4rem;
                    line-height: 8.3125rem;
                    color: #BCBBE7;
                    margin-top: 3rem;
                }
            }
        }
    }

    .partners-and {
        display: block;
        text-align: center;
        margin-top: 18rem;
        font-size: 3.125rem;
        padding-bottom: 8.8125rem;

        >h1 {
            font-size: 9rem;
            font-weight: bold;
            color: #FFFFFF;
        }



        .partners-img {
            margin-top: 9.75rem;
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


    .journey {
        display: none;
    }

    .journey-and {
        display: block;
        box-sizing: border-box;
        padding: 0 5.8rem;
        margin-top: 10.1rem;

        >h2 {
            font-size: 8.11rem;
            font-weight: bold;
            text-align: center;
            letter-spacing: 0em;
            color: #FFFFFF;
        }

        .journey-content {
            margin-top: 8.7rem;

            .journey-content-card {
                padding: 5.8rem;
                box-sizing: border-box;
                border-radius: 3px;
                opacity: 1;
                background: rgba(18, 19, 41, 0.2);
                box-sizing: border-box;
                border: 1px solid rgba(115, 114, 155, 0.6);
                backdrop-filter: blur(3rem);
                box-shadow: inset 0px 0px 5.8rem 0px rgba(115, 114, 155, 0.4);
                margin-bottom: 5.8rem;

                .card-title {
                    display: flex;
                    align-items: center;
                    margin-bottom: 5.8rem;

                    .emptyBox {
                        width: 8.1rem;
                        height: 2.2rem;
                        transform: rotate(-90deg);
                        opacity: 1;
                        background: linear-gradient(75deg, #2E50FF 0%, #3BB2FF 100%);
                    }

                    h2 {
                        font-size: 5.8rem;
                        font-weight: bold;
                        color: #FFFFFF;
                        margin-left: 5.8rem;

                    }
                }

                span {
                    font-size: 4.5rem;
                    font-weight: normal;
                    line-height: 8rem;
                    text-align: justify;
                    color: #BCBBE7;
                }

                img {
                    display: block;
                    width: 100%;
                    margin-top: 5.8rem;
                    opacity: 1;
                }
            }
        }

        .journey-card {
            border-radius: 3rem;
            opacity: 1;
            background: linear-gradient(337deg, rgba(16, 17, 36, 0.60) 11%, rgba(24, 26, 56, 0.60) 90%);
            box-sizing: border-box;
            border: 1px solid rgba(115, 114, 155, 0.4);
            // border-image: linear-gradient(157deg, #4B4E8A -4%, rgba(16, 17, 36, 0.00) 99%) 1;
            backdrop-filter: blur(3rem);
            box-shadow: inset 0px 0px 6rem 0px rgba(115, 114, 155, 0.4);
            box-sizing: border-box;
            padding: 13rem 6rem;
            position: relative;
            margin-top: 16rem;

            >p {
                font-size: 4.05rem;
                font-weight: normal;
                line-height: 8rem;
                text-align: justify;
                /* 浏览器可能不支持 */
                letter-spacing: 0em;
                color: #BCBBE7;
            }

            .img-box {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 13rem;

                img {
                    width: 75rem;
                    display: block;
                }
            }

            .decorate {
                position: absolute;
                left: 0px;
                top: -4.3rem;
                width: 11rem;
            }

            .decorate2 {
                position: absolute;
                right: 0px;
                top: -4.3rem;
                width: 11rem;
            }
        }

    }

    .return {
        display: none;
    }

    .return-and {
        display: block;
        box-sizing: border-box;
        padding: 0 5.8rem;
        text-align: center;
        margin-top: 17.3rem;

        >h2 {
            font-size: 8.1rem;
            font-weight: bold;
            text-align: center;
            letter-spacing: 0em;
            color: #FFFFFF;
        }

        .return-and-card {
            margin-top: 8.7rem;
            border-radius: 2.9rem;
            opacity: 1;
            background: rgba(18, 19, 41, 0.2);
            box-sizing: border-box;
            border: 1px solid #73729B;
            backdrop-filter: blur(10px);
            box-shadow: inset 0px 0px 5.8rem 0px rgba(115, 114, 155, 0.4);
            padding: 5.8rem;

            >h2 {
                font-size: 5.8rem;
                font-weight: bold;
                letter-spacing: 0em;
                color: #FFFFFF;
            }

            .echartsAnd1 {
                width: 103.7rem;
                height: 87rem;
                background-color: transparent;
            }

            .echarts-adn-explain {
                box-sizing: border-box;
                padding: 0 17rem;
                display: flex;
                align-items: center;
                justify-content: space-between;

                .empty-box1 {
                    width: 16rem;
                    height: 1.3rem;
                    background-color: green;
                    border-radius: .625rem;
                }

                .empty-box2 {
                    width: 13rem;
                    height: 1.3rem;
                    background-color: blue;
                    border-radius: .625rem;
                }

                .empty-box3 {
                    width: 13rem;
                    height: 1.3rem;
                    background-color: purple;
                    border-radius: .625rem;
                }

                h4 {
                    margin-top: 3rem;
                    font-size: 4rem;
                    font-weight: 100;
                    letter-spacing: 0em;
                    color: #FFFFFF;
                }

                .olyexText {
                    font-weight: bold;
                    font-size: 5.2rem;
                }
            }
        }
    }
}
</style>