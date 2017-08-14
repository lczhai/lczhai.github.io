---
layout: post
title:  "GCD简单使用"
date:   2016-10-11
excerpt: "gcd"
tag:
- vue 
- 笔记
comments: false
---

####基础使用
```
//使用方法,先创建队列,在创建任务

// 串行队列的创建方法
dispatch_queue_t queue= dispatch_queue_create("test.queue", DISPATCH_QUEUE_SERIAL);
// 并发队列的创建方法
dispatch_queue_t queue= dispatch_queue_create("test.queue", DISPATCH_QUEUE_CONCURRENT);

// 同步执行任务创建方法
dispatch_sync(queue, ^{
    NSLog(@"%@",[NSThread currentThread]);    // 这里放任务代码
});
// 异步执行任务创建方法
dispatch_async(queue, ^{
    NSLog(@"%@",[NSThread currentThread]);    // 这里放任务代码
});
```

####GCD的延时执行方法 dispatch_after
```
//当我们需要延迟执行一段代码时，就需要用到GCD的dispatch_after方法
dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(2.0 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
    // 2秒后异步执行这里的代码...
   NSLog(@"run-----");
});
```

####GCD的一次性代码(只执行一次) dispatch_once
```
//我们在创建单例、或者有整个程序运行过程中只执行一次的代码时，我们就用到了GCD的dispatch_once方法。使用dispatch_once函数能保证某段代码在程序运行过程中只被执行1次。

static dispatch_once_t onceToken;
dispatch_once(&onceToken, ^{
    // 只执行1次的代码(这里面默认是线程安全的)
});
```

####GCD的一次性代码(只执行一次) dispatch_once
```
//我们在创建单例、或者有整个程序运行过程中只执行一次的代码时，我们就用到了GCD的dispatch_once方法。使用dispatch_once函数能保证某段代码在程序运行过程中只被执行1次

static dispatch_once_t onceToken;
dispatch_once(&onceToken, ^{
    // 只执行1次的代码(这里面默认是线程安全的)
});
```


####栅栏操作
 ```
- (void)barrier
{
    dispatch_queue_t queue = dispatch_queue_create("12312312", DISPATCH_QUEUE_CONCURRENT);

    dispatch_async(queue, ^{
        NSLog(@"----1-----%@", [NSThread currentThread]);
    });
    dispatch_async(queue, ^{
        NSLog(@"----2-----%@", [NSThread currentThread]);
    });

    dispatch_barrier_async(queue, ^{
        NSLog(@"----barrier-----%@", [NSThread currentThread]);
    });

    dispatch_async(queue, ^{
        NSLog(@"----3-----%@", [NSThread currentThread]);
    });
    dispatch_async(queue, ^{
        NSLog(@"----4-----%@", [NSThread currentThread]);
    });
}
//输出结果(先执行barrier前的再执行barrier,之后再执行barrier后的)
// --1--  
//--2--  
//barrier
//--3--
//--4--


```

#### GCD线程之间的通讯
```
//在线程中进行耗时操作拿到数据后返回主线程进行reload
dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
    for (int i = 0; i < 2; ++i) {
        NSLog(@"1------%@",[NSThread currentThread]);
    }

    // 回到主线程
    dispatch_async(dispatch_get_main_queue(), ^{
        NSLog(@"2-------%@",[NSThread currentThread]);
    });
});
```

#### ios 监视下载全部完成-GCD队列
```
dispatch_group_t group = dispatch_group_create();
    for (int i=0; i<10; i++) {
        dispatch_group_enter(group);
       //dispatch_sync(dispatch_get_global_queue(0, 0), ^{
        dispatch_async(dispatch_get_global_queue(0, 0), ^{
            sleep(2);
            NSLog(@"任务 %d 完成",i);
            dispatch_group_leave(group);
        });
    }
    
    dispatch_group_notify(group, dispatch_get_global_queue(0, 0), ^{
        NSLog(@"任务完成");
    });

//--------------------------------------------------------------------------

dispatch_group_t group = dispatch_group_create();
    dispatch_group_enter(group);
    dispatch_async(dispatch_get_global_queue(0, 0), ^{
        sleep(5);
        NSLog(@"任务一完成");
        dispatch_group_leave(group);
    });
    dispatch_group_enter(group);
    dispatch_async(dispatch_get_global_queue(0, 0), ^{
        sleep(8);
        NSLog(@"任务二完成");
        dispatch_group_leave(group);
    });
    dispatch_group_notify(group, dispatch_get_global_queue(0, 0), ^{
        NSLog(@"任务完成");
    });




```