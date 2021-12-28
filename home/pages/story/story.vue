<template>
	<view class="story">
		<!-- 书架 or 书单 -->
		<view class="tabs">
			<u-tabs :list="tabsList" ref="uTabs" :activeStyle="{color: '#3c9cff'}" :current="current"
				@change="tabsChange" sticky></u-tabs>
		</view>
		<view class="swiper-box">
			<swiper :current="swiperCurrent" @animationfinish="animationfinish" class="swiper" style="height: 100%;">
				<swiper-item class="swiper-item" v-for="(item, index) in tabsList" :key="item.id">
					<!-- 书架 -->
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<view class="book-list" v-if="swiperCurrent === 0">
							<view class="book-item" v-for="(item,index) in bookList" :key="item.id" @click="goToBook(item.id)">
								<view class="book-pic">
									<image :src="item.src" mode=""></image>
								</view>
								<view class="book-txt">
									{{item.name}}
								</view>
							</view>
						</view>
						<view class="books" v-if="swiperCurrent === 1">
							书单
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
		
	</view>
</template>

<script>
	// 引入图片
	import one from 'static/story/one.jpeg'
	import two from 'static/story/two.jpeg'
	import three from 'static/story/three.jpeg'
	import four from 'static/story/four.jpeg'
	export default {
		data() {
			return {
				tabsList: [{
					id: 0,
					name: "书架"
				}, {
					id: 1,
					name: "书单"
				}],
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				bookList:[{
					id:0,
					name:"酒不醉猴猴自醉",
					src:one
				},{
					id:1,
					name:"花果山-这么多年，最爱的还是那只松鼠",
					src:two
				},{
					id:2,
					name:"落日余晖",
					src:three
				},{
					id:3,
					name:"记忆之花",
					src:four
				}],
			}
		},
		methods: {
			// tabs通知swiper切换
			tabsChange(e) {
				this.swiperCurrent = e.index;
			},

			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.swiperCurrent = current;
				this.current = current;
			},
			// 查看书
			goToBook(id){
				uni.navigateTo({
					url:`book?id=${id}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.story {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		.tabs {
			margin: 0 40rpx;

			// tabs栏居中
			/deep/ .u-tabs {
				border-bottom: 1px solid #eee;

				.uni-scroll-view {
					width: auto;
				}

				.u-tabs__wrapper__nav__item {
					padding: 0;
					margin-right: 40rpx;
					font-weight: 700;
				}

				.u-tabs__wrapper__nav__line {
					display: none;
				}
			}
		}
		.swiper-box{
			flex: 1;
			margin: 20rpx 40rpx 0;
		}
	}
	.book-list {
		display: flex;
		flex-wrap: wrap;
		.book-item{
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			width: 30%;
			margin-right: 32rpx;
			margin-bottom: 26rpx;
			&:nth-child(3n){
				margin-right: 0;
			}
			.book-pic{
				width: 200rpx;
				height: 266rpx;
				margin-bottom: 10rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.book-txt{
				width: 200rpx;
				height: 76rpx;
				display:-webkit-box;
				-webkit-box-orient:vertical;
				-webkit-line-clamp:2;//控制行数
				overflow:hidden;
			}
		}
	}
</style>
