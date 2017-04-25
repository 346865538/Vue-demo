<template>
  <div id="app">
    <router-view></router-view>
    <TabBar class="tabBarBox"></TabBar>
  </div>
</template>
<script>
import TabBar from './components/TabBar'
	
export default {
  name: 'app',
  components:{
  	TabBar,
  }
}

</script>
<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
*{
	margin: 0px;
	padding: 0px;
}
html,body,#app{
	width:100vw;
	height:100vh;
}


.tabBarBox{
	position: fixed;
	bottom: 0px;
}

li{
	list-style: none;
}

</style>
