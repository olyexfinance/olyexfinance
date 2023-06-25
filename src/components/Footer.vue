<template>
    <div>
        <footer class="footer-pc">
            <ul class="footer-img">
                <li v-for="item in footerData" :key="item.title">{{ item.title }}
                    <ul>
                        <li v-for="param in item.children">
                            <template v-if="param.link == '/terms' || '/privacy'">
                                <router-link :to="param.link"></router-link>
                            </template>
                            <template v-if="param.link == '#'">
                                <span>{{ param.title }}</span>
                            </template>
                            <a v-else-if="param.title !== 'Email' && param.title !== '#'" :href="param.link"
                                target="_blank">{{
                                    param.title }}</a>
                            <template v-else>
                                <el-popover placement="right-end" title="Email" width="200" trigger="hover"
                                    content="support@olyex.finance" class="email-popover">
                                    <a slot="reference">{{ param.title }}</a>
                                </el-popover>
                            </template>

                        </li>
                    </ul>
                </li>
            </ul>
            <!-- <h3><span>(support@olyex.finance)</span></h3> -->
        </footer>

        <footer class="footer-and">
            <ul class="footer-img">
                <li v-for="item in footerData" :key="item.title">{{ item.title }}
                    <ul>
                        <li v-for="param in item.children">
                            <template v-if="param.link == '/terms' || '/privacy'">
                                <router-link :to="param.link"></router-link>
                            </template>
                            <template v-if="param.link == '#'">
                                <span>{{ param.title }}</span>
                            </template>
                            <a v-else-if="param.title !== 'Email' && param.title !== '#'" :href="param.link"
                                target="_blank">{{
                                    param.title }}</a>
                            <template v-else>
                                <el-popover placement="right-end" title="Email" width="200" trigger="hover"
                                    content="support@olyex.finance" class="email-popover">
                                    <a slot="reference">{{ param.title }}</a>
                                </el-popover>
                            </template>

                        </li>
                    </ul>
                </li>
            </ul>
            <!-- <h3><span>(support@olyex.finance)</span></h3> -->
            <!-- <a href="https://twitter.com/account/access" target="_blank"><img src="../assets/twitter.png"
                    class="twitter-logo" alt=""></a>
            <a href=""><img src="../assets/discord.png" target="_blank" class="discord-logo" alt=""></a>
            <a href="https://t.me/olyexfinance" target="_blank"><img src="../assets/telegram.png" class="telegram-logo"
                    alt=""></a> -->
        </footer>

    </div>
</template>

<script>
export default {
    data() {
        return {
            footerData: [
                { title: "About", children: [{ title: "App", link: "#" }, { title: "Terms", link: "#", path: "/terms" }, { title: "Privacy", link: "/privacy", path: "/privacy" }] },
                { title: "Learn", children: [{ title: "Medium", link: "https://medium.com/@olyexfinance" }, { title: "Gitbook", link: "https://docs.olyex.finance/" }, { title: "Github", link: "#" }] },
                { title: "Community", children: [{ title: "Twitter", link: "https://twitter.com/Olyexfinance" }, { title: "Discord", link: "#" }, { title: "Telegram", link: "https://t.me/olyexfinance" },{ title: "Email", link: "" },] },
            ],
            footerDataAnd: [
                { title: "About", children: [{ title: "App", link: "#" }, { title: "Terms", link: "#", path: "/terms" }, { title: "Privacy", link: "/privacy", path: "/privacy" }] },
                { title: "Learn", children: [{ title: "Medium", link: "https://medium.com/@olyexfinance" }, { title: "Gitbook", link: "https://docs.olyex.finance/" }, { title: "Github", link: "#" }] },
                { title: "Community", children: [{ title: "", link: "https://twitter.com/Olyexfinance" }, { title: "", link: "#" }, { title: "", link: "https://t.me/olyexfinance" },] },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
.footer-pc {
    box-sizing: border-box;
    height: 12.8125rem;
    opacity: 1;
    width: 100%;
    background: #242640;
    padding-top: 1.25rem;
    position: relative;

    .footer-img {
        position: relative;
        padding: 0 43.75rem;
        display: flex;
        justify-content: space-between;

        >li {
            
            color: #999;

            ul {
                li {
                    margin-top: .9375rem;
                    cursor: pointer;

                    &:hover {
                        color: #fff;
                    }
                }
            }
        }
    }

    h3 {
        text-align: center;
        color: #999;
        margin-top: 2rem;
        position: absolute;
        bottom: 1.9rem;
        right: 34.8rem;
        font-size: .7927rem;
    }
}

.footer-and {
    display: none;
}

@media (max-width: 768px) {
    .footer-pc {
        display: none;
    }

    .footer-and {
        display: block;
        box-sizing: border-box;
        // height: 12.8125rem;
        opacity: 1;
        width: 100%;
        background: #242640;
        padding-top: 6rem;
        font-size: 3rem;
        .footer-img {
            padding: 0 30rem;
            display: flex;
            justify-content: space-between;
            padding-bottom: 5rem;
            position: relative;

            >li {
                color: #fff;

                ul {
                    >li {
                        margin-top: 6rem;
                        cursor: pointer;
                        color: #BCBBE7;
                    }
                }
            }
        }

        >h3 {
            position: absolute;
            right: 4rem;
            bottom: 0.3rem;
            text-align: center;
            font-size: 3rem;
            font-weight: normal;
            color: #BCBBE7;
            padding-bottom: 5rem;

            span {
                font-size: 3rem;
                font-weight: normal;
                color: #BCBBE7;
            }
        }
    }

    .twitter-logo {
        position: absolute;
        right: 22rem;
        bottom: 33rem;
    }

    .discord-logo {
        position: absolute;
        right: 22rem;
        bottom: 24rem;
    }

    .telegram-logo {
        position: absolute;
        right: 22rem;
        bottom: 15rem;
    }
}</style>