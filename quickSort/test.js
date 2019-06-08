/**
 * 内存泄露demo
 * @question 闭包和匿名函数的区别
 * @question 为什么使用匿名函数就不再存在内存泄露了
 * 闭包 http://www.ruanyifeng.com/blog/2009/08/learning_javascript_closures.html?20120612141317#comments
 https://www.cnblogs.com/yanduanduan/p/6876700.html
 优化过程 https://www.lisa33xiaoq.net/797.html
 */
function isEven (num) {     
    if(num === 0){ return true; }
    if(num === 1){ return false; }

    // return isEven(Math.abs(num) - 2);
    return function(){
        return isEven(Math.abs(num) - 2);
    }
}
function trampoline(func, arg){
    var value = func(arg);
    while(typeof value === 'function'){
        value = value();
    }
    return value;
}
// let result = isEven(4)()();
console.log(trampoline(isEven, 100000));

/**
 * 
function isEven (num) {     
                ^
RangeError: Maximum call stack size exceeded
    at isEven (/Users/liumin/github_learning/algorithm/quickSort/test.js:5:17)
    at isEven (/Users/liumin/github_learning/algorithm/quickSort/test.js:9:12)
    at isEven (/Users/liumin/github_learning/algorithm/quickSort/test.js:9:12)
    at isEven (/Users/liumin/github_learning/algorithm/quickSort/test.js:9:12)
    at isEven (/Users/liumin/github_learning/algorithm/quickSort/test.js:9:12)
    at isEven (/Users/liumin/github_learning/algorithm/quickSort/test.js:9:12)
    at isEven (/Users/liumin/github_learning/algorithm/quickSort/test.js:9:12)
    at isEven (/Users/liumin/github_learning/algorithm/quickSort/test.js:9:12)
    at isEven (/Users/liumin/github_learning/algorithm/quickSort/test.js:9:12)
    at isEven (/Users/liumin/github_learning/algorithm/quickSort/test.js:9:12)
 */