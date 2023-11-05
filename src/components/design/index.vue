<script setup>
import { onMounted, ref, reactive } from 'vue'

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

const position = ref(1000);
const arrItem = reactive([{
  title:'PR',
  content:'',
  svg:''
},{
  title:'PS',
  content:'',
  svg:''
},{
  title:'AI',
  content:'',
  svg:''
},])

 onMounted(()=>{
  let box = document.querySelector(".box");
  box.addEventListener("wheel", (event) => {
    event.preventDefault();
    box.scrollLeft += event.deltaY;
  });
//   // const box = this.$refs['div2'];
  position.value = ( position.value * arrItem.length ) + 500;
   gsap.registerPlugin(ScrollTrigger);
   let tl = gsap.timeline();
  ScrollTrigger.create({
    animation: tl,
    trigger: '.section2',
    start: "top top",
    // endTrigger: "",
    end: "+=" + position.value / arrItem.length,
    pin: true,
    scrub: 0,
    markers:true
  })

  tl
  .to(".designTop-line",{opacity: 1,height: '160', ease: "back.in"})
  .to('#designSkill-title',{opacity: 1,y: 0, ease: "back.in"},'<')
  .to(".designBottom-line",{opacity: 1,height: '160', ease: "back.in"}, )
  // .to('#sc0', { xPercent: '-110' , ease: "none",scale: 0.5,filter: "blur(10px)"} )
  // .to('#sc1', { xPercent: '-110' , ease: "none",scale: 1,filter: "blur(0px)"} , '<')
  // .to('#sc1', { xPercent: '-210' , ease: "none",scale: 0.5,filter: "blur(0px)"} , '<')
  // .to('#sc2', { xPercent: '-310' , ease: "none",scale: 1,filter: "blur(0px)"} , '<')
 })

//  return { position }
</script>

<template>
    <div class="design_headTop section2">
      <div flex justify-end grid-items-center >
        <div h20>
          <div id="designSkill-title" class="color-white section-heading" 
          mb-4 text-size-5xl opacity-0>设计界面</div>
          <!-- <div id="skill-info" class="color-white" 
          text-2xl md:max-w-3xl w-full seq max-w-sm mt-2 opacity-0>sass,vue,gsap,html,javascript</div> -->
        </div>
        <div class="w-8.33333%" grid flex-justify-center>
          <div class="designTop-line"/>
          <div class= "h-12 w-12 my-4 flex-center" >
            <svg-icon icon-name="design" class-name="font-size-8 text-center color-white"/>
          </div>
          <div class="designBottom-line"/>
        </div>
      </div>
      <div class="designItem -mt-6xl" >
          <h2 font-size-4xl xl-font-700 ml-70 color-white>常用工具</h2>
          <section class="section-connect-4 section-card-view">
            <div class="box">
              <div class="item">
                <div class="boxItem"></div>
              </div>
              <div class="item">
                <div class="boxItem"></div>
              </div>
            </div>
                <!-- <div class="section-wrapper">
                  <div class="section-card" v-for="(item , idx) in arrItem" :key="idx">
                    <div :id="'sc'+  idx" class="section-card-content">
                      <div class="flex-center section-copy">
                        <div class="section-group">
                          <h3 font-size-4xl xl-font-700 text-center>{{  item.title  }}</h3>
                          <p>{{  item.content  }}</p>
                        </div>
                      </div>
                      <div flex-center w-full>
                        <svg-icon icon-name="sass" class-name="section-card-img"  />
                      </div>
                    </div>
                  </div>
                </div> -->
          </section>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.design_headTop{
  height: 100vh;
  position: relative;
  .section-heading{
    // line-height: 2;
    margin-top: 3px;
    background: linear-gradient(90deg,#abb4ff,#797ef9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
  }
  .designTop-line{
    background: linear-gradient(transparent, #797ef9, #abb4ff);
    // height: 160px;
    width: 3px;
    margin: auto;
    opacity: 0;
  }
  .mediumText{
    // display: flex;
    height: 70px;
    position: relative;
    box-sizing: border-box;

  }
  .designBottom-line{
    background: linear-gradient(#abb4ff , #797ef9, transparent );
    // height: 160px;
    width: 3px;
    margin: auto;
    opacity: 0;
  }
  .skillLine{
    width: 8.33333%;
  }
  .designItem {
    width: 108.33333vw;
    .section-card-view {
      .sticky-wrapper {
        height: 108.333333vw;
      }
      .sticky-content {
        position: sticky;
        width: 100%;
        height: auto;
        top: 65px;
        overflow: hidden;
      }
      .section-wrapper {
        position: relative;
        display: flex;
        width: 70.833333vw;
        margin: 0 auto;
      }
      .section-card {
        position: relative;
        flex-shrink: 0;
        width: 100%;
        .section-card-content{
          display: flex;
          align-items: center;
          flex-shrink: 0;
          width: 100%;
          height: 24.583333vw;
          border-radius: 40px;
          background-color: #fafafa;
           .section-copy{
          //   display: flex;
          //   align-items: center;
          //   flex-shrink: 0;
          //   justify-content: center;
            width: 27.083333vw;
            padding: 0 3.125vw;
          //   background-color: #fafafa;
          //   .section-group{

          //   }
           }
           .section-card-img{
            height: 9rem;
            width: 9rem;
            box-shadow:  10px 10px 20px #989393,
                        -10px -10px 20px #ffffff;
          }
          .section-card-img:hover{
            height: 10rem;
            width: 10rem;
            box-shadow:  10px 10px 16px #5c5959,
                        -10px -10px 16px #ffffff;
          }
        }
      }
      .section-card + .section-card {
        margin-left: 3.125vw;
      }
      .section-card + .section-card .section-card-content {
        transform: scale(0.8);
        transform-origin: left;
        filter: blur(10px);
      }
    }
  }
}

.box {
    display: flex;
    overflow: hidden;
    position: relative;
    width: 70.833333vw;
    margin: 0 auto;
  }

.item {
    position: relative;
    flex-shrink: 0;
    width: 100%;
    background-color: #fafafa;
  }
  .item:nth-child(1) {
    background: gray;
  }
  .item:nth-child(2) {
    background: blue;
  }
  .boxItem{
    display: flex;
    align-items: center;
    flex-shrink: 0;
    width: 100%;
    height: 24.583333vw;
    border-radius: 40px;
    background-color: #fafafa;
  }
  .item + .item {
    margin-left: 3.125vw;
  }
  .item + .item .boxItem {
    transform: scale(0.8);
    transform-origin: left;
    filter: blur(10px);
  }
</style>
<!----

<style>
  body {
    margin: 0px;
    padding: 0px;
  }
  .box {
    display: flex;
    overflow: hidden;
  }
  
</style>
<div class="box">
  <div class="item">1</div>
  <div class="item">2</div>
</div>
<script>
  
</script>



-->