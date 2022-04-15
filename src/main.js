// 这个就相当于我们安装的一个包
// 默认引入的就是runtime版本的

// 这个版本是默认带解析器的版本
// import Vue from 'vue/dist/vue.esm.js'
import Vue from 'vue'
import App from '@/App.vue'

Vue.config.productionTip = false

//  You are using the runtime-only build of Vue where the template compiler is not available.
//  Either pre-compile the templates into render functions, or use the compiler-included build.
// 大概意思就是你使用的vue版本没有解析器

// new Vue({
//     el: '#app',

//     components: {
//         App
//     },
//     template: '<App />'
// })


new Vue({
    el: "#app",
    render: h => h(App)
        // 这个函数个上面我们直接写的 功能差不多
        // 定义并中注册了组件
        // 使用App组件 比上面写法多干了一件事就是寻找解析器
        // 以后我们用的都是下面这个  render写法是固定的
        //下面这个打包出来的文件体积小

})

// eslint  检查语法会很严格  所以在开发阶段的时候 要禁用
// 局部禁用 当前文件的错误---只禁用当前文件
//eslint - disable no - unused - vars


// 第二种方法 在package.json当中找到eslintConfig项 全局配置 禁止某些错误提示
// // "rules": {
// 		"no-unused-vars":"off"
//   }
//默认情况下  都是会显示on 
// 但是任何错误都要一个一个进行配置



// 第三种可以取消eslint里面所有的错误  需要在vue.config.js 里面去配置   如果没有则需要自己手动去建立