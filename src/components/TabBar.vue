<template>
	<ul class="tabbar">
		<li><router-link to="/">天气</router-link></li>
		<li><router-link to="/movie">电影</router-link></li>
		<li><span>xx</span></li>
		<li><span>xx</span></li>
	</ul>
</template>
<script>
	
</script>
<style>
	.tabbar{
		width: 100%;
		height: 60px;
	}
	.tabbar li{
		float: left;
		width: 25%;
		text-align: center;
		list-style: none;
		line-height: 60px;
		border-top: 1px solid rgba(255,255,255,0.3);
		background-color: black;
	}
	.tabbar > li > *{
		text-decoration: none;
		color: white;
	}
	
</style>