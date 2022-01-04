<template>
	<view class="book-show">
		<view class="book-content">
			<image :src="bookInfo.src" mode="" @click="goToBook(bookInfo.id)"></image>
			<view class="name" @click="goToBook(bookInfo.id)">
				{{bookInfo.name}}
			</view>
			<view class="autor" @click="goToBook(bookInfo.id)">
				{{bookInfo.autor}}
			</view>
			<view class="c-mark" @click="goToBook(bookInfo.id)">
				<text>1人在读 reading</text>
				<u-icon name="arrow-right" color="#CBAE8C" size="12"></u-icon>
			</view>
			<view class="goBack" @click="close">
				<u-icon name="close" color="#CBAE8C" size="18"></u-icon>
			</view>
		</view>
		<view class="mark">
			{{bookInfo.name}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props: {
			bookInfo: {
				type: Object,
				default: {}
			}
		},
		methods: {
			close() {
				this.$emit("close",true)
			},
			// 查看书
			goToBook(id) {
				uni.navigateTo({
					url: `book?id=${id}`
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.book-show{
		display: flex;
		flex-direction: column;
		align-items: center;
		font-family: Source Han Sans CN-Regular, Source Han Sans CN;
	}
	.book-content {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 20rpx;
		width: 556rpx;
		height: 920rpx;
		background: #FFFFFF;
		box-shadow: 0px 8rpx 20rpx 2rpx rgba(0, 0, 0, 0.3);
		border-radius: 20rpx;

		.goBack {
			position: absolute;
			top: 20rpx;
			left: 20rpx;
		}

		image {
			width: 376rpx;
			height: 534rpx;
			border-radius: 20rpx;
			margin: 76rpx 0 60rpx;
		}

		.name {
			width: 440rpx;
			text-align: center;
			font-size: 48rpx;
			font-weight: 500;
			color: #333333;
			line-height: 67rpx;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		.autor {
			font-size: 36rpx;
			color: #666;
			line-height: 50rpx;
			margin: 10rpx 0 20rpx;
		}

		.c-mark {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 334rpx;
			height: 48rpx;
			border-radius: 20rpx;
			border: 2rpx solid #CBAE8C;
			font-size: 24rpx;
			font-weight: 500;
			color: #CBAE8C;

			text {
				margin-right: 10rpx;
			}
		}
	}

	.mark {
		font-size: 24rpx;
		color: #CBAE8C;
		font-weight: 400;
		line-height: 34rpx;
		margin-top: 50rpx;
	}
</style>
