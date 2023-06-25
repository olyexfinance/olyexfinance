<template>
    <div>
        <header>
            <div class="header-left" @click="goToIndex">
                <img src="../assets/LOGO2.png" class="logo" alt="">
                <img src="../assets/LOGO.png" class="andLogo" alt="logo">
            </div>
            <div class="header-right">
                <ul class="nav pcNav">
                    <li>APP</li>
                    <li>PROTOCOL</li>
                    <li>GOVERNANCE</li>
                    <li>VOTTNG</li>
                    <li><a href="https://docs.olyex.finance/" target="_blank">DOCS</a></li>
                </ul>
                <button><a href="https://app.olyex.finance/" target="_blank">LAUNCH APP</a></button>
            </div>
            <div class="header-right-and">
                <button class="header-right-and-button"><a href="https://app.olyex.finance/" target="_blank">LAUNCH
                        APP</a></button>
                <div @click="drawer = true" class="closeNavAnd"><img src="../assets/nav.png" alt=""></div>

                <el-drawer :show-close="false" :visible.sync="drawer" :withHeader="false" :before-close="handleClose"
                    size="60%" :close-on-press-escape="true">
                    <!-- <img src="@/assets/LOGO-1.png" class="nav-logo-and" alt=""> -->
                    <ul class="nav-link-and">
                        <li><a href="https://app.olyex.finance/#/" target="_blank">APP</a></li>
                        <li>PROTOCOL</li>
                        <li>GOVERNANCE</li>
                        <li>VOTTNG</li>
                        <li><a href="https://docs.olyex.finance/" target="_blank">DOCS</a></li>
                    </ul>
                   <img src="../assets/关闭.svg" alt="closeModal" class="closeModal" @click="drawer=false">
                </el-drawer>
                
            </div>
        </header>
    </div>
</template>
<script>
export default {
    data() {
        return {
            drawer: false,
            direction: 'rtl',
            opacityValue: 0
        }
    },
    methods: {
        goToIndex() {
            if (this.$route.path !== "/") {
                this.$router.push("/")
            }
        },
        handleClose(done) {
            done();
        }
    }
}
</script>
<style lang="scss" scoped>
header {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    // margin-top: 1.1875rem;
    width: 100%;
    padding-left: 3.6875rem;
    padding-right: 4.375rem;
    // padding-bottom: 1.25rem;
    border-bottom: .0625rem solid rgba(255, 255, 255, 0.1);
    justify-content: space-between;

    .header-left {
        height: 5.75rem;
        // width: 64.625rem;
        display: flex;
        align-items: center;

        .logo {
            height: 1.8125rem;
            display: block;
        }
    }

    .header-right {
        // flex: 1;
        display: flex;
        justify-content: space-between;

        .nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            // flex: 1;

            li {
                cursor: pointer;
                color: #73729B;
                font-size: 1rem;
                margin-left: 1.875rem;

                &:hover {
                    color: #fff;
                }

                a {
                    color: #73729B;

                    &:hover {
                        color: #fff;
                    }
                }
            }
        }

        button {
            margin-left: 2.5rem;
            width: 160px;
            height: 50px;
            border-radius: 8rem;
            color: #fff;
            font-size: 1rem;
            opacity: 1;
            cursor: pointer;
            background: linear-gradient(90deg, rgba(11, 11, 50, 0.60) 0%, rgba(38, 37, 83, 0.60) 100%);
            box-sizing: border-box;
            border: .0625rem solid #73729B;
        }
    }
}

.andLogo {
    display: none;
}

.header-right-and {
    display: none;
}

@media (max-width: 768px) {
    .my-component {
        /* 媒体查询条件下的样式 */
        background-color: red;
    }

    .header-right {
        display: none !important;
    }

    .andLogo {
        display: block !important;
        width: 10rem;
    }

    .logo {
        display: none !important;
    }

    header {
        padding-top:5rem ;
        border-bottom: none !important;
    }

    .header-right-and {
        display: flex;
        align-items: center;
        // position: relative;
        // justify-content: space-between;
    }

    .header-right-and-button {
        width: 30rem;
        height: 10rem;
        font-size: 3rem;
        border-radius: 8rem;
        background: linear-gradient(90deg, rgba(11, 11, 50, 0.60) 0%, rgba(38, 37, 83, 0.60) 100%);
        font-weight: 500;
        color: #FFFFFF;
        border: 1px solid #73729B;
        padding: 2rem;
        margin-right: 8rem;

    }

    .closeNavAnd {
        img{
            width: 5rem;
        }
        position: relative;
        margin-right: 5rem;
        cursor: pointer;
    }

    .andNav {
        position: absolute;
        top: 16rem;
        left: 88rem;
        border: 1px solid #73729B;
        border-radius: 3rem;
        width: 32rem;
        height: 45rem;
        text-align: center;
        padding-top: 3rem;
        box-sizing: border-box;

        li {
            font-size: 3rem;
            margin-bottom: 3rem;
        }
    }

    ::v-deep .el-drawer {
        background: rgba(28, 29, 64, 0.4);
        backdrop-filter: blur(13rem);
        box-shadow: -3rem 0px 2rem 0px rgba(13, 14, 30, 0.3);
    }

    // ::v-deep .el-icon-close {
    //     position: absolute;
    //     left: 5rem;
    //     top: 20rem;
    // }

    .nav-logo-and {
        width: 30rem !important;
        margin-left: 31rem;
    }
    .nav-link-and{
        margin-left: 35rem;
        font-size: 5rem;
        li{
            margin-top: 10rem;
        }
    }
    .closeModal{
        position: absolute;
        left: 32rem;
        bottom: 35rem;
    }
}
</style>