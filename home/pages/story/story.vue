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
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<!-- 推荐 -->
						<view class="book-recommend" v-if="swiperCurrent === 0">
							<book-recommend :bookList="bookList"></book-recommend>
						</view>
						<!-- 书架 -->
						<view class="book-list" v-if="swiperCurrent === 1 && isShow">
							<view class="book-item" v-for="(item,index) in bookList" :key="item.id" @click="changeBook(item)">
								<view class="book-pic">
									<image :src="item.src" mode=""></image>
								</view>
								<view class="book-txt">
									{{item.name}}
								</view>
							</view>
						</view>
						<view class="book-show" v-else-if="swiperCurrent === 1 && !isShow">
							<u-transition :show="!isShow" mode="fade-down" duration="400">
								<book-show :bookInfo="bookInfo" @close="close"></book-show>
							</u-transition>
						</view>
						<!-- 书单 -->	
						<view class="books" v-if="swiperCurrent === 2">
							<my-books :bookList="bookList"></my-books>
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
	import MyBooks from '@/components/MyBooks.vue'
	import BookShow from '@/components/BookShow.vue'
	import BookRecommend from '@/components/BookRecommend.vue'
	export default {
		components:{
			MyBooks,
			BookShow,
			BookRecommend
		},
		data() {
			return {
				isShow:true,
				tabsList: [{
					id: 0,
					name: "推荐"
				}, {
					id: 1,
					name: "书架"
				}, {
					id: 2,
					name: "书单"
				}],
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				bookList:[{
					id:0,
					name:"酒不醉猴猴自醉",
					src:two,
					rate:5,
					autor:"今何在",
					intor:"这天紫霞在天边站的久了，当她往回走的时候她想冷寂已经附在她的身上了，于是她加快了往回赶，想回到落霞宫那炉火边的梦里去。"
				},{
					id:1,
					name:"花果山-这么多年，最爱的还是那只松鼠",
					src:one,
					rate:5,
					autor:"今何在",
					intor:"很久很久以前，没有山，没有树，什么都没有，只有一片大海，无边的大海。"
				},{
					id:2,
					name:"落日余晖",
					src:three,
					rate:4.5,
					autor:"小文杀",
					intor:"他一直坐在球场的旁边，脸上没有一丝情绪。远处的足球突然飞到了他的脚下，跑来三个男孩。"
				},{
					id:3,
					name:"记忆之花",
					src:four,
					rate:4.5,
					autor:"小文杀",
					intor:"你们知道吗，昨晚在十教那里，死了一个人。”“听说了，早上五点多就听到几辆警车的声音，现在很多警察在那里呢。"
				}],
				bookInfo:{},
			}
		},
		methods: {
			// tabs通知swiper切换
			tabsChange(e) {
				this.isShow = true
				this.swiperCurrent = e.index;
			},

			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.swiperCurrent = current;
				this.current = current;
			},
			close(isShow){
				this.isShow = isShow
			},
			changeBook(item) {
				this.isShow = false
				this.bookInfo = item
			},
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
		}
		.swiper-box{
			flex: 1;
			background-color: #f7f7f7;
			.swiper{
				margin: 20rpx 40rpx 0;
			}
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
				display: box;
				display:-webkit-box;
				-webkit-box-orient:vertical;
				-webkit-line-clamp:2;//控制行数
				overflow:hidden;
			}
		}
	}
</style>
