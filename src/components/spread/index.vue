<script setup>
import { onMounted, ref } from 'vue'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
// import iconSkill from "@/assets/icon/skill.svg";
onMounted(()=>{
  // const box = this.$refs['div2'];
  gsap.registerPlugin(ScrollTrigger);
  let tl = gsap.timeline();

  ScrollTrigger.create({
    animation: tl,
    trigger: '.headTop',
    start: "top top",
    // endTrigger: "",
    end: "+=1500",
    pin: true,
    scrub: true,
    // markers:true
  })

  tl
  .to(".top-line",{opacity: 1,height: '160', ease: "back.in"})
  .to('#skill-title',{opacity: 1,y: 0, ease: "back.in"},'<')
  .to('#skill-info',{opacity: 1,y: 0, ease: "back.in"},'=')
  .to(".bottom-line",{opacity: 1,height: '160', ease: "back.in"})
  .to("#div3" ,{ x: 400 ,css:{
    width: '15em',
    height: '15em',
    marginTop: '-1.5em',
  }})
  .to("#div1" ,{ x: 430 }, '<')
  .to("#div2" ,{ x: 230 }, '<')
  .to("#div4" ,{ x: -230 }, '<')
  .to("#div5" ,{ x: -430 }, '<')

})
</script>

<template>
    <div class="headTop">
      <div flex grid-items-center>
        <div class="w-8.33333%" grid flex-justify-center>
          <div class="top-line"/>
          <!-- <div class="positon-relative border-box mediumText">
            <img :src="iconSkill" style="float: left;
      box-sizing: border-box;height: 50px;width: 50px;">
            <h3 style="float: left;
      box-sizing: border-box;" class="text-medium color-white ml-2">skill</h3>
          </div> -->
          <div class= "h-12 w-12 my-4 flex-center" >
            <svg-icon icon-name="skill" class-name="font-size-8 text-center color-white"/>
          </div>
          <div class="bottom-line"/>
        </div>
        <div h20>
          <div id="skill-title" class="color-white section-heading" 
          mb-4 text-size-5xl opacity-0>前端开发</div>
          <div id="skill-info" class="color-white" 
          text-2xl md:max-w-3xl w-full seq max-w-sm mt-2 opacity-0>sass,vue,gsap,html,javascript</div>
        </div>
      </div>
      
      <div class="imgBox sp" id="div1"/>
      <div class="imgBox sp1" id="div2"/>
      <div class="imgBox sp4" style="z-index: 999;" id="div3"/>
      <div class="imgBox sp2" id="div4" style="z-index: 100;"/>
      <div class="imgBox sp3" id="div5"/>
    </div>
</template>

<style lang="scss" scoped>
.headTop{
  height: 100vh;
  position: relative;
  .section-heading{
    // line-height: 2;
    margin-top: 3px;
    background: linear-gradient(90deg,#ffa28b, #ea6045);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
  }
  .imgBox{
    height: 12rem;
    width: 12rem;
    // background: #fff;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    bottom: 10;
    margin:auto;
    
  }
  .sp{
    background: url('@/assets/icon/skills/javascript.svg') no-repeat center/cover ;
  }
  .sp1{
    background: url('@/assets/icon/skills/html.svg') no-repeat center/cover ;
  }
  .sp2 {
    background: url('@/assets/icon/skills/vue.svg') no-repeat center/cover ;
  }
  .sp3 {
    background: url('@/assets/icon/skills/sass.svg') no-repeat center/cover ;
  }
  .sp4{
    background: url('@/assets/icon/skills/gsap.svg') no-repeat center/cover ;
  }
  .top-line{
    background: linear-gradient(transparent, #ea6045, #ffa28b);
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
  .bottom-line{
    background: linear-gradient(#ffa28b, #ea6045, transparent );
    // height: 160px;
    width: 3px;
    margin: auto;
    opacity: 0;
  }
  .skillLine{
    // display: grid;
    // justify-content: center;
    width: 8.33333%;
  }
}
</style>
