<template>
    <div class="contain">
        <!--<h2>我是 Done TODOList</h2>-->
        <div v-for= 'todo in alltodolists' :key='todo.title' v-if="todo.completed">
            <div class="todo">
                <h3>{{todo.title}}</h3>
                <p>{{todo.cont}}</p>
                <div class="btn">
                    <label>
                        <input type="Checkbox" value="Done" @click="markTodoCheck(todo)"/>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Done",
    props: ['toson','alltodolists','markCheck'],
    // inject: ['toson','alltodolists'],
    methods: {
        markTodoCheck: function(todo){
            this.markCheck(todo);
        }
    }
};
</script>

<style scoped>
.contain{
    margin-top: 5% ;
}
.todo{
    height: 20%;
    width: 92.2%;
    margin-top: 0.5% ;
    padding-left: 5%;
    background-color: #ebebeb;
    border: 2px solid #cacaca;

}
.btn{
    position:relative;
    left:70%;
    bottom: 50px;
}
</style>