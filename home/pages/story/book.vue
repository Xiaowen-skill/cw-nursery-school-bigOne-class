<template>
	<view class="book">
		<u-navbar :title="bookDetail.name" @leftClick="leftClick" :safeAreaInsetTop="true" :fixed="true" :placeholder="true">
		</u-navbar>
		<view class="content">
			<u-parse :content="bookDetail.txt" :selectable="true"></u-parse>
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
				bookDetail: {}
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
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		margin: 40rpx;
		text-indent: 2em;
		padding-bottom: 40rpx;
		color: #333;
		font-size: 28rpx;
		line-height: 1.6;
		/deep/ p{
			font-family: PingFang SC;
		}
	}
	
</style>
