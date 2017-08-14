---
layout: post
title:  "iOS版本更新提示"
date:   2016-10-11
excerpt: "用于检测是否有新版本发布,进而进行提示"
tag:
- vue 
- 笔记
comments: false
---


# 检测线上是否有新版本发布
```
- (void)versionUpdate{
 
 //获得当前发布的版本
 dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT,0), ^{
  //耗时的操作---获取某个应用在AppStore上的信息，更改id就行
  NSString *string = [NSString stringWithContentsOfURL:[NSURL URLWithString:@"http://itunes.apple.com/lookup?id=你的APP的id"] encoding:NSUTF8StringEncoding error:nil];
  NSData *data = [string dataUsingEncoding:NSUTF8StringEncoding];
  NSDictionary *dic = [NSJSONSerialization JSONObjectWithData:data options:NSJSONReadingMutableLeaves error:nil];
  //获得上线版本号
  NSString *version = [[[dic objectForKey:@"results"]firstObject]objectForKey:@"version"];
  
  NSString *updateInfo = [[[dic objectForKey:@"results"]firstObject]objectForKey:@"releaseNotes"];
  
  //获得当前版本
  NSString *currentVersion = [[[NSBundle mainBundle]infoDictionary]objectForKey:@"CFBundleShortVersionString"];
  
  dispatch_async(dispatch_get_main_queue(), ^{
   //更新界面
   
   if ( version &&![version isEqualToString:currentVersion]) {
    //有新版本
    NSString *message = [NSString stringWithFormat:@"有新版本发布啦!\n%@",updateInfo];
    UIAlertView *alertView = [[UIAlertView alloc]initWithTitle:@"温馨提示" message:message delegate:self cancelButtonTitle:@"忽略"otherButtonTitles:@"前往更新",nil];
    //此种写法文字会居中显示，这样视觉效果很不好，下列demo中已经解决将alertview上的文字具有显示 先关文章链接http://blog.csdn.net/bddzzw/article/details/52169261
    [alertView show];
   }else{
    //已是最高版本
    NSLog(@"已经是最高版本");
   }
  });
 });
}
/*根据被点击按钮的索引处理点击事件--当被按钮被点击了这里做出一个反馈*/
-(void)alertView:(UIAlertView *)alertView clickedButtonAtIndex:(NSInteger)buttonIndex
{
 if (buttonIndex ==1) {
  NSString *url =@"你的APP在APPstore的网址";//
 https://itunes.apple.com/cn/app/qq/id444934666?mt=8 QQ在APPstore的网址
  [[UIApplication sharedApplication]openURL:[NSURL URLWithString:url]];
 }
}
```