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
                            <div>
                                <b-tabs content-class="mt-3">
                                    <b-tab title="對話" active>
                                        <div style="height: 300px; overflow:scroll;">
                                            <Bubble :message="dialog" :key="index" v-for="(dialog, index) in presents"></Bubble>
                                        </div>
                                    </b-tab>
                                    <b-tab title="小結"><p>I'm the second tab content</p></b-tab>
                                    <b-tab title="其他"><p>Disabled tab!</p></b-tab>
                                </b-tabs>
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
import BootstrapVue from 'bootstrap-vue'
import DialogCollection from './dialog-collection.js'
import Bubble from './components/Bubble.vue'

export default {
    name: 'app',
    components: {
        Bubble,
    },
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
