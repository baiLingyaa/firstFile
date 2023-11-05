<template>
  <div class="home">
    <section class="hes">
      <div>
        <h1 id="span1" style="opacity: 1;" text-white>hellow</h1>
        <h2 id="span2" style="opacity: 0;" class="text-white">欢迎来到，白凌源博客</h2>
        <h3 id="writer" ref="writer" class="text-white" >1233333</h3>
      </div>
      <!-- <div class="text-25px text-#ff6700 bg-#ccc">你好Unocss</div> -->
      <!-- <img alt="Vue logo" :src="require('@/assets/logo.png')" style="width:200px;height:200px;"> -->
    </section>
    
  </div>
</template>

<script setup name='HomeView'>
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ref , onMounted} from 'vue';
import { Linear, gsap } from 'gsap';
const typewriter = () =>{
  const timeList = gsap.timeline();
  timeList.to('#writer',{
    // strings: TYPED_STRINGS,
    x: 100,// 移动
    // y:100,// 移动
    duration: 1, //持续时间
    // repeat: -1,
    // delay:1,
    // loop: true,
    // yoyo:true,
  },).to('#span2',{
    opacity: 0,
    x: 0,// 移动
    // y:100,// 移动
    duration: 1, //持续时间
    // repeat: -1,
    // delay:1,
  }).to('#span2',{
    opacity: 1,
    x: 100,// 移动
    // y:100,// 移动
    duration: 1, //持续时间
    // repeat: -1,
    // delay:1,
  }).from('#span1',{
    x: 100,// 移动
    // y:100,// 移动
    duration: 1, //持续时间
    // repeat: -1,
    // delay:1,
  })
}
onMounted(()=>{
  typewriter();
})
</script>
<style lang='scss' scoped>
.home{
  height: 100vh;
  // background: url('@/assets/bg/mbg.png') no-repeat center/cover ;
  .hes {
      display:flex;
      justify-content: space-around;
    }
    @media  screen and (max-width: 600px){
      .hes{
        align-items: center;
        flex-direction: column;
      }
        
    }
}
</style>
