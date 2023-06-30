<template>
    <div>
        <p>The Caterpillar and Alice looked at each other for some time in silence:
            at last the Caterpillar took the hookah out of its mouth, and addressed
            her in a languid, sleepy voice.</p>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
p {
    animation-duration: 3s;
    animation-name: slidein;
}

@keyframes slidein {
    from {
        // margin-left: 100%;
        margin-top: 100px;
        // width: 300%;
    }

    to {
        margin-top: 0px;
        // margin-left: 0%;
        // width: 100%;
    }
}
</style>