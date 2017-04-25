<template>
	<div class="weatherPage">
		<div class="today">
			<p class="nowcity">{{weatherData.city}}市</p>
			<p class="nowtype">{{weatherTodayInfo.type}}</p>
			<p class="nowwendu">{{weatherData.wendu}}°C</p>
			<p class="aqi">空气质量指数: <span>{{weatherData.aqi}}</span></p>
			<p class="tips">{{weatherData.ganmao}}</p>
		</div>
		<ul class="future">
			<li v-for="item in weatherInfo">
				<div class="img">
					<img :src="item.img" alt="" />
				</div>
				<div class="daytype">
					<p>{{item.date}}</p>
					<p>{{item.type}}</p>
				</div>
				<div>
					<p>{{item.low}}~{{item.high}}</p>
				</div>
				<div>
					<p>{{item.fengxiang}}</p>
					<p>{{item.fengli}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<style>
	.weatherPage{
		height: 100%;
		background-image: url(../assets/weather_bg.jpg);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		color: white;
	}
	.weatherPage .today{
		padding: 10px 0px;
		margin-bottom: 20px;
		border-bottom: 1px solid rgba(255,255,255,0.3);
	}
	.weatherPage p{
		text-align: center;
	}
	.weatherPage .nowcity{
		font-size: 30px;
		text-align: center;
	}
	.weatherPage .nowtype{
		font-size: 22px;
	}
	.weatherPage .nowwendu{
		font-size: 45px;
		margin-top: 10px;
		font-weight: 100;
	}
	.weatherPage .aqi{
		margin-top: 20px;
	}
	.weatherPage .aqi span{
		font-size: 22px;
	}
	.weatherPage .tips{
		width: 80%;
		margin-left: 10%;
		font-size: 13px;
	}
	.weatherPage .future{
		float: left;
		position: relative;
		left: 50%;
		transform: translate3d(-50%,0,0);
	}
	.weatherPage .future li{
		width: 100%;
		height: 50px;
		padding: 10px 0px;
		overflow: hidden;
		font-size: 12px;
	}
	.weatherPage .future li > div{
		float: left;
		margin-left: 20px;
		height: 50px;
		line-height: 200%;
	}
	.weatherPage .future li .img{
		width: 50px;
		height: 50px;
		margin-left: 0;
	}
	.weatherPage .future li .img img{
		width: 100%;
		height: 100%;
	}
</style>
<script>
export default {
	name: 'abc',
	data(){
		return{
			weatherUrl: 'http://wthrcdn.etouch.cn/weather_mini?city=%E4%B8%8A%E6%B5%B7',    // 请求url
			weatherData: [],   // 返回的总天气
			weatherInfo: [],   // 返回的天气天气
			weatherTodayInfo: []   // 返回的今天天气
		}
	},
  	created(){
		this.$http.jsonp(this.weatherUrl).then(function(res){
			this.weatherData = res.data.data;
			this.weatherInfo = res.data.data.forecast;
			this.weatherTodayInfo = this.weatherInfo[0];
//	   		for(var i = 0; i < this.weatherInfo; i++){
//				switch (this.weatherInfo[i].type){
//					case "多云":
//						this.$set(this.weatherInfo,i,{img:"../assets/weather_duoyun.png"});
//						break;
//				}
//			}
		})
	}
}
</script>