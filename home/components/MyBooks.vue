<template>
	<view class="my-books" v-if="isShow">
		<view class="books" v-for="(item,index) in bookList" :key="item.id" @click="changeBook(item)">
			<view class="content">
				<view class="name">
					{{item.name}}
				</view>
				<view class="autor">
					作者: {{item.autor}}
				</view>
				<view class="line">
				</view>
				<view class="intor">
					{{item.intor}}
				</view>
			</view>
			<view class="pic">
				<image :src="item.src" mode=""></image>
			</view>
		</view>
	</view>

	<view class="book-show" v-else>
		<u-transition :show="!isShow" mode="fade-down" duration="400">
			<book-show :bookInfo="bookInfo" @close="close"></book-show>
		</u-transition>
	</view>
</template>

<script>
	import BookShow from './BookShow.vue'
	export default {
		components:{
			BookShow
		},
		props: {
			bookList: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				isShow: true,
				bookInfo: {}
			}
		},
		methods: {
			// 
			changeBook(item) {
				this.isShow = false
				this.bookInfo = item
			},
			close(isShow){
				this.isShow = isShow
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
	.my-books {
		display: flex;
		flex-direction: column;
		align-items: center;

		.books {
			position: relative;
			display: flex;
			width: 640rpx;
			height: 300rpx;
			margin-bottom: 62rpx;
		}

		.content {
			display: flex;
			flex-direction: column;
			margin-top: auto;
			background: #FFFFFF;
			box-shadow: 0px 0px 0px 2rpx #eee;
			border-radius: 20rpx;
			width: 640rpx;
			height: 240rpx;
			border-radius: 20rpx;
			padding-left: 276rpx;
			padding-right: 46rpx;
			padding: 10rpx 46rpx 36rpx 276rpx;

			.name {
				width: 300rpx;
				line-height: 50rpx;
				font-size: 32rpx;
				font-weight: 600;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			.autor {
				line-height: 42rpx;
				font-size: 28rpx;
				color: #666666;
			}

			.line {
				width: 296rpx;
				height: 2rpx;
				opacity: 1;
				background-color: #D8D8D8;
				margin: 14rpx 0 10rpx;
			}

			.intor {
				width: 318rpx;
				height: 64rpx;
				font-size: 24rpx;
				color: #333333;
				line-height: 34rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				display: box;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
			}
		}

		.pic {
			position: absolute;
			left: 40rpx;
			bottom: 36rpx;
			background: #FFFFFF;
			border-radius: 20rpx;
			overflow: hidden;

			image {
				width: 200rpx;
				height: 264rpx;
			}
		}
	}

	.book-show {
	}
	
</style>
