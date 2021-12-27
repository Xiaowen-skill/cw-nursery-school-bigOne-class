# -

基础配置

​ /_ 配置好 github SSh _/

1. 克隆项目

   ```js
   git clone git@github.com:Xiaowen-skill/cw-nursery-school-bigOne-class.git
   ```

2. 拉取远程 alpha 分支

   ```js
   git fetch git@github.com:Xiaowen-skill/cw-nursery-school-bigOne-class.git alpha:alpha
   ```

3. 切换 alpha 分支

   ```js
   git checkout alpha
   ```

4. 基于 alpha 分支下创建自己分支开发

   ```js
   git checkout -b fea/name
   ```

5. 提交代码，合并分支操作

   ```js
   git add .
   git commit -m"描述"
   git checkout alpha
   git pull origin alpha
   git merge fea/name
   /* 如果有冲突，处理冲突
    * git add .
    * git commit -m"解决冲突"
    * 小蓝窗输入 :wq */
   git push origin alpha
   ```

打开配置

下载 uni-app
