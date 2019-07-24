function foo(){
    function bar(a){
        i = 3; //修改for循环所属作用域中的i
        console.log(a+'+'+i+'='+(a+i));
    }
    for(var i = 0; i < 10; i++){
        bar(i * 2); //糟糕，无限循环了
    }
}
foo();