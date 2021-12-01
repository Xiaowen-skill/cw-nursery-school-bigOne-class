<template>
	<view class="content">
		<!-- 背景图片 -->
		<view class="content-bg">
			<image src="~@/static/index/index_bg.png" mode=""></image>
		</view>
		<!-- 文字 -->
		<view class="content-txt">
			<image src="~@/static/index/index_txt.png" mode=""></image>
		</view>
		<!-- 登录注册 => 功能待补充 -->
		<view class="login">
			<u-button type="error" text="登录" size="large" shape="circle" @click="login"></u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		
		methods: {
			login(){
				uni.navigateTo({
					url:"../user/user",
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		position: relative;
		.content-bg{
			position: absolute;
			left: 0;
			top: 0;
			image{
				width: 742rpx;
				height: 710rpx;
			}
		}
		.content-txt{
			display: flex;
			justify-content: center;
			margin-top: 800rpx;
			image{
				width: 580rpx;
				height: 36rpx;
			}
		}
		.login{
			display: flex;
			justify-content: center;
			margin-top: 300rpx;
			padding: 0 65rpx;
		}
	}
</style>
