<template>
    <div :class="bubbleClass">
        <!-- text -->
        <template>
            <div class="chat-content" v-html="urlifyMessage"></div>
        </template>
    </div>
</template>

<script>
/* components */

export default {
    props: {
        message: {
            type: Object,
            default() {
                return {}
            }
        }
    },

    computed: {
        messageType() {
            return _.get(this.message, 'type', 'unknown')
        },

        bubbleClass() {
            if(this.message.is_system) {
                return 'chat-system'
            }

            return this.message.is_contact ? 'chat-sender' : 'chat-reply'
        },

        /**
         * 將訊息中的網址轉換成超連結
         *
         * @return {String} 格式化後的網址
         */
        urlifyMessage() {
            // 將 html 標籤轉為文字，防止 xss 攻擊 .replace(/\//g,'&#x2F;')
            let message =  _.escape(this.message.text)

            //取得 https 連結
            const urlRegex = /(https?:\/\/[^\s]+)/g

            return message.replace(urlRegex, url => {
                return `<a href="${url}" target="_blank" rel="noopener">${url}</a>`
            })
        }
    },
}
</script>