<template>
  <div id="app">
    <div class="love">
      <div class="demo-them light">
        <timeline timeline-theme="lightblue">
          <timeline-title>2018</timeline-title>
          <timeline-item>
            <img src="https://user-images.githubusercontent.com/12069729/36057805-80cfc3d2-0e4e-11e8-8851-6fda091ff389.png" class="icon-heart" slot="others">
            <p><a href="" style="color:#a6ade4;">2018.02.14</a></p>
            <p class="append">Happy Valentine's Day! <span style="color:#ec7666;">🎉</span>The first time we met.</p>
          </timeline-item>
          <timeline-item bg-color="#9dd8e0" :hollow="true">
            <p><a href="" style="color:#9dd8e0;">2018.02.19</a></p>
            <p class="append">The First time we have a meal And see a movie.</p>
          </timeline-item>
          <timeline-item>
            <img src="https://user-images.githubusercontent.com/12069729/36057805-80cfc3d2-0e4e-11e8-8851-6fda091ff389.png" class="icon-heart" slot="others">
            <p><a href="" style="color:#f075ae;">2018.07.04</a></p>
            <p class="append">We falling in love.<span style="color:#e166ab;">❤</span></p>
          </timeline-item>
          <timeline-item bg-color="#e6b6b0" font-color="#e166ab">
            <p><a href="" style="color:#e6b6b0;">2018.08.17</a></p>
            <p class="append">Happy Chinese Valentine's Day!<span style="color:#e166ab;">🎉</span>And Happy Birthday to ME.It is a Happy Day! </p>
          </timeline-item>
          <timeline-item :hollow="true">I <span style="color:#e166ab;">❤</span> You</timeline-item>
          <timeline-item bg-color="#b0e6d1">Keep Fightting</timeline-item>
          <timeline-item line-color="#a6ade4">
            <p><a href="">2017.10.18</a></p>
            <p class="append">We've known each other For a year.</p>
          </timeline-item>

          <timeline-title bg-color="#f2d7e1">2017</timeline-title>
          <timeline-item>
            <img src="https://user-images.githubusercontent.com/12069729/36057805-80cfc3d2-0e4e-11e8-8851-6fda091ff389.png" class="icon-heart" slot="others">
            <p><a href="" style="color:#b0e6d1">2017.10.18</a></p>
            <p class="append">I knew A lovely boy.His name is Lee.</p>
          </timeline-item>
        </timeline>
      </div>
      <!-- <div class="demo-theme dark">
        <timeline timeline-theme="white" timeline-bg="#3a3939">
          <timeline-title>2018</timeline-title>
          <timeline-item bg-color="#9dd8e0" font-color="#e166ab">Welcome to the new year!</timeline-item>
          <timeline-item :hollow="true" font-color="#fff">My first 100 stars on Github 🎉</timeline-item>
          <timeline-item bg-color="#b0e6d1" font-color="#fff">keep going</timeline-item>
          <timeline-title bg-color="#f2d7e1" font-color="#fff">2017</timeline-title>
          <timeline-item>
            <img src="https://user-images.githubusercontent.com/12069729/36057805-80cfc3d2-0e4e-11e8-8851-6fda091ff389.png" class="icon-heart" slot="others">
            <p style="color: #fff;">I wrote <a href="">Aoba</a></p>
            <p style="color: #fff;" class="append">A tool to create a lovely resume just with a config file.</p>
          </timeline-item>
          <timeline-item line-color="#a6ade4">
            <p style="color: #fff;">And <a href="">Maltose</a></p>
            <p style="color: #fff;" class="append">A cute emoticon and emoji keyboard which can generate random emoticon or emoji and no xss.</p>
          </timeline-item>
        </timeline>
      </div> -->
    </div>
  </div>
</template>

<script>
// import Sortable from 'Sortable'
import { Timeline, TimelineItem, TimelineTitle } from '../lib/TimeLine'

export default {
  name: 'LoveYou',
  components: {
    Timeline,
    TimelineItem,
    TimelineTitle
  },
  data () {
    return {
      timeItems: [
        [{
          id:1,
          title:"2018",
          items:[{des:"🎉",color:"#e166ab",bgcolor:"#9dd8e0",img:""}]
        }]
      ]
    }
  },
  mounted() {
    let that = this;

  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.love{
  margin:20px auto;
}
.append {
  font-size: .8em;
  margin-top: 3px;
  color: #646C7C;
}

a {
  color: #bf6dcf;
  font-weight: bold;
  text-decoration: none;
}

.icon-heart {
  width: 20px;
}

.demo {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-gap: 1rem;
}

.demo-theme.dark {
  background: #3a3939;
}

</style>
