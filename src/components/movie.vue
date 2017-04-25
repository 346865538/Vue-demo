<template>
	<div class="moviePage">
		<div class="movietitle">
			<h1>豆瓣电影</h1>
		</div>
		<ul>
			<input type="text" placeholder="请输入电影名" />
			<li><router-link to="/movie_more/hot" title="zzry">正在热映</router-link></li>
			<li><router-link to="/movie_more/will" title="zzry">即将上映</router-link></li>
			<li><router-link to="/movie_more/top" title="zzry">Top250</router-link></li>
			<li><router-link to="/movie_more/koubei" title="zzry">口碑榜</router-link></li>
			<li><router-link to="/movie_more/beimei" title="zzry">北美票房榜</router-link></li>
			<li><router-link to="/movie_more/new" title="zzry">新片榜</router-link></li>
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