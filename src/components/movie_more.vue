<template>
	<div class="movieMore">
		<p class="bigtitle"><router-link to="/movie"><img class="back" src="../assets/back.png" alt="" /></router-link>{{moviesTitle}}</p>
		<div class="bg" v-show="loading">
			<img class="loading" src="../assets/loading.png" alt="" />
		</div>
		<ul>
			<li v-for="item in movieList" class="movies">
				<img :src="item.images.large" alt="" class="moviesimg" />
				<div>
					<p class="title">片名：{{item.title}}</p>
					<p>导演：{{item.directors[0].name}}</p>
					<div class="casts">
						<p>主演：</p>
						<div>
							<p v-for="item2 in item.casts">{{item2.name}}</p>
						</div>
					</div>
					<p>类型：<span v-for="item2 in item.genres">{{item2}},</span></p>
					<p>上映时间：{{item.year}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	name: 'abc',
	data(){
		return{
			type: this.$route.params,
			movieUrl : '',
			movieList : [],
			moviesTitle :'',
			loading: true
		}
	},
	created(){
		switch (this.type.type){
			case 'hot':
				this.movieUrl = 'https://api.douban.com/v2/movie/in_theaters';
				this.moviesTitle = "正在热映";
				break;
			case 'will':
				this.movieUrl = 'https://api.douban.com/v2/movie/coming_soon';
				this.moviesTitle = "即将上映";
				break;
			case 'top':
				this.movieUrl = 'https://api.douban.com/v2/movie/top250';
				this.moviesTitle = "Top250";
				break;
			case 'koubei':
				this.movieUrl = 'https://api.douban.com/v2/movie/weekly';
				this.moviesTitle = "口碑榜";
				break;
			case 'beimei':
				this.movieUrl = 'https://api.douban.com/v2/movie/us_box';
				this.moviesTitle = "北美票房榜";
				break;
			case 'new':
				this.movieUrl = 'https://api.douban.com/v2/movie/new_movies';
				this.moviesTitle = "新片榜";
				break;
		}
		this.$http.jsonp(this.movieUrl).then(function(res){
			this.movieList = res.data.subjects
			this.loading = false;
		})
	}
}
</script>
<style>
	.movieMore{
		float: left;
		width: 100vw;
		background-color: black;
		color: white;
		font-size: 12px;
	}
	.movieMore .loading{
		width: 20px;
		position: absolute;
		left: 50%;
		top: 20%;
		transform: translate3d(-50%,-50%,0);
		animation: loadingrun .8s forwards infinite linear;
	}
	
	@keyframes loadingrun{
		0%{
			transform: translate3d(-50%,-50%,0) rotateZ(0deg);
		}
		100%{
			transform: translate3d(-50%,-50%,0) rotateZ(360deg);
		}
	}
	
	.movieMore .back{
		width: 20px;
		position: absolute;
		left: 20px;
		top: 19px;
	}
	.movieMore .bg{
		width: 100%;
		height: 100%;
		background-color: black;
		position: fixed;
		z-index: -1;
	}
	.movieMore .bigtitle{
		font-size: 32px;
		text-align: center;
		padding: 10px 0px;
		border-bottom: 1px solid rgba(255,255,255,0.3);
		position: fixed;
		background-color: black;
		width: 100vw;
	}
	.movieMore > ul{
		margin-top: 58px;
	}
	.movies{
		float: left;
		width: 94vw;
		padding: 3%;
	}
	.movies .title{
		font-size: 16px;
	}
	.movies .moviesimg{
		width: 135px;
		height: 200px;
		float: left;
	}
	.movieMore .movies div{
		float: left;
	}
	.casts > p{
		float: left;
	}
	.casts{
		overflow: hidden;
		width: 100%;
	}
	.movies > div{
		margin: 5px 0 0 20px;
	}
	.movies > div > *{
		margin-bottom: 10px;
	}
</style>