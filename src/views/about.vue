<template>
  <b-container>
    <b-row class="mb-4">
      <b-col>
        <h1 class="font-main font-xxl">About</h1>
        <p class="lead">A quick summary...</p>
      </b-col>
    </b-row>

    <b-row class="justify-content-center mb-5">
      <b-col cols="11" md="10" lg="8" class="text-left">
        <p class="font-md">This simple shopping app was created in an afternoon / evening to show off my ability to create interactive front-ends using Vue.js as well as other modules</p>
        <p class="font-md">I came up with idea of building a shop as it can demonstrate a lot of unique abilites: 
          <ul class="fa-ul mt-3">
            <li><span class="fa-li color-vue-green"><i class="fab fa-fw fa-vuejs"></i></span> <strong>Vue.js</strong> - This is the framework used to power all of this, it uses components to speed up creation and create a clean, unified front-end.</li>
            <li><span class="fa-li color-vue-green"><i class="far fa-fw fa-store-alt"></i></span> <strong>Vuex</strong> - A powerful back bone to any Vue.js app, this is used to store and share information around components.</li>
            <li><span class="fa-li color-vue-green"><i class="far fa-fw fa-grip-horizontal"></i></span> <strong>Bootstrap+Vue</strong> - Bootstrap, but written in Vue.js, all the benefits of Bootstrap but Vue.js compliant.</li>
            <li><span class="fa-li color-vue-green"><i class="fab fa-fw fa-less"></i></span> <strong>LESS</strong> - The styling is scoped to each view and component, and variables / common classes / mixins are imported to keep a unified environment.</li>
            <li><span class="fa-li color-vue-green"><i class="far fa-fw fa-desktop-alt"></i></span> <strong>UX</strong> - The UX of this app, although short and sweet, shows off my ability to create a clean and functional front-end</li>
          </ul>
        </p>            
        <p class="font-md">Thank you for viewing,</p>
        <p class="font-md"><strong>Jamie Paul Moffatt</strong></p>     
      </b-col>
    </b-row>

  </b-container>
</template>


<style scoped lang="less">
@styles: "../styles";
@import "@{styles}/variables.less";
@import "@{styles}/common.less";
</style>