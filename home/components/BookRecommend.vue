<template>
	<view class="book-recommend">
		<!-- 轮播图 -->
		<u-swiper class="u-swiper" :list="swiperList" previousMargin="30" nextMargin="30" circular radius="10">
		</u-swiper>
		<!-- 热门推荐 -->
		<view class="hot">
			<view class="head">
				<view class="title">
					热门推荐
				</view>
				<view class="more">
					<text>更多</text>
					<u-icon name="arrow-right" color="#666" size="12"></u-icon>
				</view>
			</view>
			<u-scroll-list :indicator="false">
				<view class="list" v-for="(item, index) in bookList" :key="index" @click="goToCatalog(item.id)">
					<view class="list-item">
						<image :src="item.src" mode=""></image>
						<view class="name">
							{{item.name}}
						</view>
						<view class="intor">
							{{item.intor}}
						</view>
						<view class="bottom">
							<view class="autor">
								{{item.autor}}/著
							</view>
							<view class="fen">
								4.8
							</view>
						</view>
					</view>
				</view>
			</u-scroll-list>
		</view>
		<!-- 第一个watch -->
		<view class="watch" @click="goToCatalog(bookList[0].id)">
			<image :src="swiperList[0]" mode=""></image>
			<view class="foot">
				<view class="name">
					{{bookList[0].name}}
				</view>
				<view class="foot-bottom">
					<text>2 浏览</text>
					<text class="autor">{{bookList[0].autor}}</text>
					<view class="num">
						<text>10</text>
						<u-icon name="thumb-up" color="red" size="12"></u-icon>
					</view>
				</view>
			</view>
		</view>
		<!-- 收藏书单 -->
		<view class="love">
			<view class="head">
				<view class="title">
					喜爱的书 love
				</view>
				<view class="more">
					<text>更多</text>
					<u-icon name="arrow-right" color="#666" size="12"></u-icon>
				</view>
			</view>
			<view class="love-list">
				<view class="love-item" v-for="(item,index) in bookList" :key="index" @click="goToCatalog(item.id)">
					<image :src="item.src" mode=""></image>
					<view class="love-right">
						<view class="love-name">
							{{item.name}}
						</view>
						<view class="love-autor">
							[中] {{item.autor}}
						</view>
						<u-rate :count="5" v-model="item.rate" size="14" :allowHalf="true"></u-rate>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import one from 'static/recommend/one.jpg'
	import two from 'static/recommend/two.jpg'
	import three from 'static/recommend/three.jpeg'
	export default {
		props: {
			bookList: {
				type: Array,
				default: []
			},
		},
		data() {
			return {
				swiperList: [
					one,
					two,
					three
				],
			}
		},
		methods:{
			goToCatalog(id){
				uni.navigateTo({
					url:`catalog?id=${id}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.book-recommend {
		height: 100vh;
		font-family: Source Han Sans CN-Bold, Source Han Sans CN;
	}
	.u-swiper{
		margin-top: 30rpx;
	}

	.hot {
		margin-top: 20rpx;
		width: 640rpx;
		height: 406rpx;
		background-color: #fff;
		border-radius: 20rpx;
		margin-bottom: 20rpx;
		padding: 0 30rpx;

		

		.list {
			padding-top: 66rpx;

			.list-item {
				position: relative;
				display: flex;
				flex-direction: column;
				padding-left: 188rpx;
				width: 440rpx;
				height: 198rpx;
				background-color: #fff;
				margin-right: 30rpx;
				border-radius: 20rpx;

				image {
					position: absolute;
					left: 22rpx;
					bottom: 32rpx;
					width: 140rpx;
					height: 200rpx;
					border-radius: 20rpx;
				}

				.name {
					width: 220rpx;
					font-size: 32rpx;
					font-weight: bold;
					color: #333333;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					margin: 10rpx 0;
				}

				.intor {
					width: 218rpx;
					height: 64rpx;
					font-size: 24rpx;
					color: #9E9E9E;
					line-height: 34rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					display: box;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}
				.bottom{
					display: flex;
					justify-content: space-between;
					font-size: 20rpx;
					color: #333333;
					padding-right: 40rpx;
					margin-top: 10rpx;
					.autor{
						color: #3C9CFF;
					}
				}
			}
		}
	}
	.love{
		width: 640rpx;
		border-radius: 20rpx;
		background-color: #fff;
		margin-top: 20rpx;
		padding: 0 30rpx 30rpx;
		.love-list{
			display: flex;
			flex-direction: column;
		}
		.love-item{
			display: flex;
			align-items: center;
			height: 200rpx;
			image{
				width: 116rpx;
				height: 152rpx;
			}
			.love-right{
				display: flex;
				flex-direction: column;
				margin-left: 24rpx;
				margin-top: 30rpx;
				.love-name{
					width: 374rpx;
					font-size: 32rpx;
					font-family: STZhongsong-Regular, STZhongsong;
					line-height: 50rpx;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				.love-autor{
					width: 212rpx;
					font-size: 28rpx;
					font-family: YouYuan-Regular, YouYuan;
					color: #666666;
					line-height: 39rpx;
					margin-bottom: 10rpx;
				}
			}
		}
	}
	.head {
		display: flex;
		justify-content: space-between;
		height: 100rpx;
		align-items: center;
		border-bottom: 1px solid #f7f7f7;
	
		.title {
			position: relative;
			font-size: 32rpx;
			font-weight: bold;
			color: #333333;
			padding-left: 10rpx;
			&::after{
				content: "";
				position: absolute;
				left: 0;
				top: 50%;
				width: 4rpx;
				height: 80%;
				transform: translate(0,-50%);
				background-color: #3C9CFF;
			}
		}
		
		.more {
			display: flex;
			align-items: center;
			font-size: 24rpx;
			font-weight: 400;
			color: #666666;
		
			text {
				margin-right: 10rpx;
			}
		}
	}
	
	.watch{
		width: 640rpx;
		height: 400rpx;
		border-radius: 20rpx;
		background-color: #fff;
		overflow: hidden;
		image{
			width: 640rpx;
			height: 260rpx;
		}
		.foot{
			padding: 0 38rpx;
			.name{
				font-size: 36rpx;
				color: #333333;
				line-height: 50rpx;
				margin-top: 24rpx;
			}
			.foot-bottom{
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 24rpx;
				color: #333333;
				line-height: 34rpx;
				margin-top: 10rpx;
				.autor{
					margin-right: auto;
					margin-left: 20rpx;
				}
				.num{
					display: flex;
					align-items: center;
					text{
						margin-right: 6rpx;
					}
				}
			}
		}
	}
	
</style>
