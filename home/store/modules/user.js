const user = {
	state: {
		userInfo: null, // 课程信息 课程主页 => 课程简介或者章节列表
	},
	getters:{
		getCourseInfo(state){
			return state.userInfo
		},
	},
	mutations: {
		changeCourseInfo(state, data) {
			state.userInfo = data;
		},
	}
};

export default user;