<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">情緒</h5>
                        <p class="card-text" v-html="emotion"></p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="card-body" >
                        <h5 class="card-title">對話</h5>
                        <p class="card-text">
                            <div style="height: 300px; overflow:scroll;">
                                <p :key="index" v-for="(dialog, index) in presents">
                                    {{ dialog.text }}
                                </p>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">流程</h5>
                        <p class="card-text" v-html="flow"></p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">知識點</h5>
                        <p class="card-text" v-html="kb"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import _ from 'lodash'
import DialogCollection from './dialog-collection.js'

export default {
    name: 'app',
    data() {
        return {
            title: 'Hello world',
            source: DialogCollection,
            presents: [],
            emotion: null,
            kb: null,
            flow: null,
        }
    },

    computed: {

    },

    methods: {
        process(index = 0) {
            if (_.gte(index, this.source.length)) {
                return
            }

            let mixData = this.source[index]

            this.presents.push(mixData.dialog)

            if (! _.isEmpty(mixData.kb)) {
                this.kb = mixData.kb
            }

            if (! _.isEmpty(mixData.flow)) {
                this.flow = mixData.flow
            }

            if (! _.isEmpty(mixData.emotion)) {
                this.emotion = mixData.emotion
            }

            return setTimeout(() => {
                return this.process((index + 1))
            }, _.isEmpty(mixData.dialog.delay) ? 1500 : mixData.dialog.delay)
        }
    },

    mounted() {
        this.process(0)
    },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
