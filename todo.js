// todolist VueJs Code
  new Vue ({
    el:'#app',
    data:{
        todo:'',
        todos:[]
    },
    methods: {
        stock(){
            this.todos.push(this.todo)
            this.todo='';
        },
        deletecode(index){
            this.todos.splice(index,1)
        }

    },
}); /* create By Samith lakshitha Bandara */