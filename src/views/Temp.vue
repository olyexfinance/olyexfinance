<template>
    <div>
        <footer>
            <ul class="footer-img">
                <li v-for="item in footerData" :key="item.title">{{ item.title }}
                    <ul>
                        <li v-for="param in item.children">
                            <template v-if="param.link == '/terms' || '/privacy'">
                                <router-link :to="param.link"></router-link>
                            </template>
                            <template v-if="param.link == '#' ">
                                <span>{{ param.title }}</span>
                            </template>
                            <a v-else-if="param.title !== 'Email'&&param.title!=='#'" :href="param.link" target="_blank">{{ param.title }}</a>
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
                { title: "Community", children: [{ title: "Twitter", link: "https://twitter.com/Olyexfinance" }, { title: "Discord", link: "#" }, { title: "Telegram", link: "https://t.me/olyexfinance" }, { title: "Email", link: "#" }] },

            ]
        }
    },
}
</script>

<style lang="scss" scoped>
footer {
    box-sizing: border-box;
    height: 12.8125rem;
    opacity: 1;
    width: 100%;
    background: #242640;
    padding-top: 1.25rem;

    .footer-img {
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
}
</style>