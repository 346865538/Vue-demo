<template>
	<div class="moviePage">
		<div class="movietitle">
			<h1>豆瓣电影</h1>
		</div>
		<ul>
			<input type="text" placeholder="请输入电影名" />
			<li><router-link to="/movie_hoting" title="zzry">正在热映</router-link></li>
			<li>即将上映</li>
			<li>Top250</li>
			<li>口碑榜</li>
			<li>北美票房榜</li>
			<li>新片榜</li>
		</ul>
	</div>
</template>
<script>
</script>
<style>
	.moviePage{
		height: 100%;
		text-align: center;
		background-image: url(../assets/movie_bg.png);
		background-size: cover;
		color: white;
	}
	.moviePage .movietitle{
		padding: 60px 0 0px 0;
	}
	.moviePage ul{
		margin-top: 90px;
	}
	.moviePage ul input{
		padding: 3px 5px;
		margin-bottom: 20px;
	}
	.moviePage ul li{
		margin-top: 20px;
		font-size: 14px;
	}
	.moviePage ul li *{
		color: white;
		text-decoration: none;
	}
</style>