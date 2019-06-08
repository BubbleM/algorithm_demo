# 前端版本经典算法解析
![目录.png](https://img.58cdn.com.cn/escstatic/fecar/pmuse/publish/shareList.png)

算法解析地址：

- [01冒泡排序](https://www.jianshu.com/p/92da865b3a5c)
- [02选择排序](https://www.jianshu.com/p/35975e92ad54)
- [03插入排序](https://www.jianshu.com/p/686b28bef918)
- [04希尔排序](https://www.jianshu.com/p/561026ad5b9c)
- [05归并排序](https://www.jianshu.com/p/9b47d6d3d867)
- [06快速排序](https://www.jianshu.com/p/0b1e64e7bc24)
- [07堆排序](https://www.jianshu.com/p/4bf503ef7771)
- [08计数排序](https://www.jianshu.com/p/97a2c4a3eea4)
- [09桶排序](https://www.jianshu.com/p/e7c20e8b685b)
- [10基数排序](https://www.jianshu.com/p/7a2cd8bddf72)

一个程序所需要的资源越多，其复杂度越高。而计算机资源是时间和空间资源。因此算法的复杂性有时间复杂性和空间复杂性之分。

通常有两种衡量算法效率的方法：事后统计法和事前分析估算法。一般采用后者。

## 与算法执行相关的因素：
1. 算法所采用的“策略”
2. 算法所解决问题的“规模”
3. 编程所采用的“语言”
4. 编译程序产生的机器代码的质量
5. 执行算法的计算机的速度

后三条受到计算机硬件和软件的制约，仅需考虑前两条。**问题规模n**对不同的问题含义不同，对矩阵是阶数，对多项式运算是多项式项数，对图是顶点个数，对集合运算是集合中元素个数。

```javascript
// n^2
for(i = 0; i < n; i++){   // n
  for(j = 0; j < n; i++){  }   // n^2
}

for (i=0;i<=n;++i)  // n
for (i=1;i<=n;++i)  // n+1

x = x+1;  // 1
for(j = 0; j < n; i++){ x = x+1;  }  // n

for(i = 0; i < n; i++){   // n
  for(j = 1; j < n; j*=2){  }   // log2n
}
```
复杂度与时间效率的关系：
c < log2n < n < n*log2n < n2 < n3 < 2n < 3n < n! （c是一个常量）
|--------------------------|--------------------------|-------------|
          较好                     一般              较差
其中c是一个常量，如果一个算法的复杂度为c 、 log2n 、n 、 n*log2n,那么这个算法时间效率比较高 ，如果是 2n , 3n ,n!,那么稍微大一些的n就会令这个算法不能动了，居于中间的几个则差强人意。


![常见算法时间复杂度](https://github.com/BubbleM/algorithm_demo/tree/master/img/complexity.png)