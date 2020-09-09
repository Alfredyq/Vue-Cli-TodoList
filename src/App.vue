<template>
    <div id="app">
        <div id="cover"></div>
        <div id="content">
            <div id="content-head">添加待办项</div>
            <label for="title"></label><input type="text" value="标题" id="title" onfocus="if(value ==='标题'){value =''}" onblur="if(value ===''){value='标题'}" >
            <label for="con"></label><input type="text" value="内容" id="con"  onfocus="if(value ==='内容'){value =''}" onblur="if(value ===''){value='内容'}" >
            <input id="submit" value="添加" type="submit" @click="submit()">
            <input id="cancel" value="取消" type="submit" @click="canclee()">
        </div>
        <div id="nav">
            <router-link to="/all">All</router-link>
            <router-link to="/undone">Undone</router-link>
            <router-link to="/done">Done</router-link>
        </div>
        <router-view :alltodolists="alltodolists" :markCheck="markTodoCheck"/>
        <div class="delete">
            <input type="button" value="删除" @click="deleteTodo"/>
        </div>
        <div id="d0" @click="addTodo">     <!--不能直接添加onclik方法-->
            <div id="d1"></div>
            <div id="d2"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
    data: function () {
        return {
            name: '秦叶岭',
            alltodolists: [
                {title: '做饭', cont: '做饭饭饭饭饭饭饭饭饭', completed: true, check: false},
                {title: '刷碗', cont: '刷碗碗碗碗碗碗碗碗碗', completed: false, check: false},
                {title: '睡觉', cont: '睡觉觉觉觉觉觉觉觉觉', completed: false, check: false}
            ]
        }
    },
    methods:{
        deleteTodo:function() {
            let a =[];
            for (let i=0;i<this.alltodolists.length;i++){
                if (!this.alltodolists[i].check){        // 未被选中
                    // this.alltodolists.splice(i,1);
                    a.push(this.alltodolists[i]);
                }
            }
            this.alltodolists = a;
        },
        addTodo:function() {
            console.log("添加Todo");
            document.getElementById('cover').style.display='block';
            document.getElementById('content').style.display='block';
        },
        markTodoCheck: function(todo) {
            console.log("markTodoCheck");
            if (!todo.check) {
                todo.check = true;
            }
            console.log(this.alltodolists);
        },
        submit: function() {
            let obj = {};
            document.getElementById('cover').style.display='none';
            document.getElementById('content').style.display='none';
            obj.title = document.getElementById('title').value;
            obj.cont   = document.getElementById('con').value;
            obj.completed = false;
            obj.check = false;
            console.log(obj.title);
            console.log(obj.cont);
            this.alltodolists.push(obj);
            document.getElementById('title').value = '标题';
            document.getElementById('con').value = '内容';
        },
        canclee: function() {
            document.getElementById('cover').style.display='none';
            document.getElementById('content').style.display='none';
        }
    },
    computed:{
        // getUerID: function () {
        //     // 返回的就是当前选中的route的参数
        //     return this.$route.params.userID
        // }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    /*position: relative;*/
}

#nav {
    height: 40px;
    width: 100%;
    /*padding: 30px;*/
    margin: auto;
    /*background-color: #ebebeb;*/
    /*background-color: red;*/
}

#nav a {
    text-align: center;
    line-height: 40px;      /* 文字上下水平居中 设置为height的大小 */
    float: left;
    font-weight: bold;
    height: 100%;
    width: 32%;
    color: #2c3e50;
    background-color: #ebebeb;
    border-radius: 8px 8px 0 0;
    border: 1px solid #cacaca;
}

#nav a.router-link-exact-active {
    /*color: #42b983;*/
    background-color: #ffffff;
    border-bottom:none;
}

.delete{
    position: fixed;
    /*left: 10%;*/
    /*bottom: 10%;*/
    top:50px;
    left:20px;
}

#d0{
    position: absolute;
    bottom: 10%;
    right:15%;
    /*position: fixed;*/
    /*top:500px;*/
    /*left:250px;*/
    height: 50px;
    width: 50px;
    border-radius: 100px;
    border: 3px solid #62e7c2;
}
#d1{
    height: 3px;
    width: 35px;
    background: #62e7c2;
    display: block;
    position: absolute;
    left:14%;
    top:46%;
    border-radius: 10px;
    border: 1px solid #64dbb5;
}
#d2{
    height: 35px;
    width: 3px;
    background: #62e7c2;
    display: block;
    position: absolute;
    top:14%;
    left:46%;
    border-radius: 10px;
    border: 1px solid #64dbb5;
}
#cover{
    width: 100%;
    height: 100%;
    z-index: 9;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,0.8);
    opacity: 50%;
    display: none;
}
#content{
    z-index: 10;
    width: 60%;
    height: 30%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform:translate(-50%,-50%);
    background: white;
    padding: 30px;
    display: none;
}
#content-head{
    position: absolute;
    width: 100%;
    height: 10%;
    top: 0;
    left: 0;
    border: 1px none #333333;
    border-bottom-style: solid;:none;
    background: #ebebeb;
}
#title{
    position: absolute;
    outline-style: none ;
    width: 80%;
    height: 10%;
    top: 20%;
    left: 5%;
    border: 1px solid #ccc;
    border-radius: 3px;
}
#con{
    position: absolute;
    outline-style: none ;
    width: 80%;
    height: 30%;
    top: 40%;
    left: 5%;
    border: 1px solid #ccc;
    border-radius: 3px;
    /*padding: 14px 14px;*/
    /*font-size: 1px;*/
}
#submit{
    position: absolute;
    top: 80%;
    left: 5%;
    width: 40%;
    height: 10%;
}
#cancel{
    position: absolute;
    top: 80%;
    left: 55%;
    width: 40%;
    height: 10%;
}
</style>
