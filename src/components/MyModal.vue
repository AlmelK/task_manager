<template >
    <div class="mymodal" v-if="show" @click="hideModal">
        <div @click.stop class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "MyModal",
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        hideModal() {
            this.$emit('update:show', false)
        }
    }
}
</script>
<style scoped>
    .mymodal {
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .3);
        position: fixed;
        display: flex;
    }

    .content {
        margin: auto;
        min-width: 500px;
        background-color: white;
        border-radius: 10px;
    }
</style>