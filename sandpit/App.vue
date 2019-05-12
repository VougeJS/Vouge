<template>
    <div>
        <base-button @click="handleClick" as="button">
            Blah
        </base-button>
    </div>
</template>

<script>
    import BaseButton from '@/components/Button/BaseButton.vue'

    export default {
        components: {
            BaseButton
        },

        methods: {
            handleClick() {
                console.log('test')
            }
        }
    }
</script>
