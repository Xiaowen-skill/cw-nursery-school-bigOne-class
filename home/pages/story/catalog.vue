<template>
	<view class="catalog">
		<u-navbar :title="bookDetail.name" @leftClick="leftClick" :safeAreaInsetTop="true" :fixed="true"
			:placeholder="true">
		</u-navbar>
		<!-- 目录头 -->
		<view class="head">
			<image :src="bookDetail.src" mode=""></image>
			<view class="love-right">
				<view class="love-name">
					{{bookDetail.name}}
				</view>
				<view class="love-autor">
					[中] {{bookDetail.autor}}
				</view>
				<u-rate :count="5" v-model="bookDetail.rate" size="14" :allowHalf="true"></u-rate>
			</view>
		</view>
		<view class="tabs">
			<u-tabs :list="tabsList" ref="uTabs" :activeStyle="{color: '#3c9cff'}" :current="current"
				@change="tabsChange" sticky></u-tabs>
		</view>
		<view class="swiper-box">
			<swiper :current="swiperCurrent" @animationfinish="animationfinish" class="swiper" style="height: 100%;">
				<swiper-item class="swiper-item" v-for="(item, index) in tabsList" :key="item.id">
					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<!-- 目录 -->
						<view class="catalog-list" v-if="swiperCurrent === 0">
							<u-collapse accordion>
								<u-collapse-item :title="item1.name" v-for="(item1,index1) in bookDetail.catalogList"
									:key="item1.id">
									<template v-if="item1.contentList && item1.contentList.length > 0">
										<text v-for="(itm,idx) in item1.contentList" :key="itm.id"
											class="u-collapse-content" @click="goToBook(bookDetail.id)">{{itm.title}}</text>
									</template>
								</u-collapse-item>
							</u-collapse>
						</view>
						<!-- 详情 -->
						<view class="books" v-if="swiperCurrent === 1">
							{{bookDetail.intor}}
						</view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import bookList from "../../util/bookList.js"
	export default {
		data() {
			return {
				id: null,
				bookList: bookList,
				bookDetail: {},
				tabsList: [{
					id: 0,
					name: "目录"
				}, {
					id: 1,
					name: "详情"
				}],
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0,
			}
		},
		onLoad(option) {
			this.id = option.id ? Number(option.id) : null
		},
		onShow() {
			let idx = this.bookList.findIndex(item => {
				return item.id === this.id
			})
			this.bookDetail = this.bookList[idx]
		},
		methods: {
			leftClick() {
				uni.navigateBack({
					delta: 1
				})
			},
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
			goToBook(id){
				uni.navigateTo({
					url:`book?id=${id}`
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.catalog {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		background-color: #f7f7f7;
	}
	.tabs{
		background-color: #fff;
	}

	.head {
		display: flex;
		background-color: #fff;
		padding: 50rpx;

		image {
			width: 200rpx;
			height: 300rpx;
			border-radius: 20rpx;
		}

		.love-right {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			margin-left: 24rpx;

			.love-name {
				width: 400rpx;
				font-size: 44rpx;
				font-family: STZhongsong-Regular, STZhongsong;
				line-height: 50rpx;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				margin-top: 80rpx;
				margin-bottom: 20rpx;
			}

			.love-autor {
				font-size: 36rpx;
				font-family: YouYuan-Regular, YouYuan;
				color: #666666;
				line-height: 50rpx;
				margin-bottom: auto;
			}
		}
	}

	.swiper-box {
		flex: 1;
		background-color: #fff;
		.catalog-item {
			display: flex;
			align-items: center;
			height: 80rpx;
			padding-left: 40rpx;
		}
		::v-deep .u-collapse{
			.u-collapse-item{
				.u-collapse-item__content{
					.u-collapse-item__content__text{
						padding: 0;
						padding-left: 50rpx;
						color: #333;
					}
				}
			}
		}

		.u-collapse-content {
			display: flex;
			align-items: center;
			height: 80rpx;
			border-bottom: 1px solid #eee;

			&:last-child {
				border-bottom: 0
			}
		}
		.books{
			padding: 50rpx;
			text-indent: 2em;
			line-height: 40rpx;
		}
	}
	
</style>
