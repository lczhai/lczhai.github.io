<template>
<div class="warp">
<div class="zx-loading" style="display:none"></div>
    
  
    

    <div class="userRcon g-w1100">
        <div class="userRmainDiv">
            <div class="userRmain resetEditStyle">
                <div class="no_edit_background"></div>
                <div class="wbdzx-container resetEditStyle">
                    <div class="no_edit_background"></div>
                    <!--编辑区域-->
                    <div class="wbd-baseStyle clearfix jm0262_j3" id="resume_body" version="v4">
                        <!--自定图片-->
                        <!--自定文本-->
                        <!--简历封面内容区-->
                        <!--简历自荐信内容区-->
                        <div class="wbd-divTop"></div>

                        <div class="wbd-divLeft sortable" id="bar">
                            <div class="nameDiv baseItem" id="resume_name">
                                <dl>
                                    <dt></dt>
                                    <dd>
                                        <div>
                                            <h1>
                                                <div class="resume_msg" contenteditable="true" notice-key="msg" for-key="name" for-value="html">翟留闯</div>
                                            </h1>
                                            <h2 style="font-weight: normal;">
                                                求职目标：iOS软件开发工程师
                                            </h2>
                                        </div>
                                    </dd>
                                </dl>
                            </div>

                            <div class="msgDiv baseItem " id="resume_msg">
                                <dl>
                                    <dt class="clearfix">
						<a class="wbdfont setIconBtn resume_icon_diy" for-id="resume_msg"  style="font-size:none"></a>
						<span><div contenteditable="true" class="resume_tilte_name" for-key="singe_title" for-value="html">个人信息</div></span>
					</dt>
                                    <dd class="clearfix resume_add_area">
                                        <div calss="resume_append_area">
                                            <div class="baseAge baseMsg baseDel resume_delete_area" id="resume_age">
                                                <div class="delete wbdfont resume_delete" for-id="resume_age">&#xe75b;</div>
                                                <a class="wbdfont setIconBtn resume_icon_diy" for-id="age" style="font-size:none"></a>
                                                <span class="age"><div class="resume_msg" notice-key="age" for-key="age" for-value="html" contenteditable="true">26岁</div></span>
                                            </div>
                                            <div class="baseAddress baseMsg baseDel resume_delete_area" id="resume_address">
                                                <div class="delete wbdfont resume_delete" for-id="resume_address">&#xe75b;</div>
                                                <a class="wbdfont setIconBtn resume_icon_diy" for-id="address" style="font-size:none"></a>
                                                <span class="address"><div class="resume_msg" notice-key="address" for-key="address" for-value="html" contenteditable="true">浙江省杭州市</div></span>
                                            </div>
                                            <div class="baseMobile baseMsg baseDel resume_delete_area" id="resume_mobile">
                                                <div class="delete wbdfont resume_delete" for-id="resume_mobile">&#xe75b;</div>
                                                <a class=" wbdfont setIconBtn resume_icon_diy" for-id="mobile" style="font-size:none"></a>
                                                <span class="phone"><div  class="resume_msg" notice-key="mobile" for-key="mobile" for-value="html" contenteditable="true">13604083099</div></span>
                                            </div>
                                            <div class="baseEmail baseMsg baseDel resume_delete_area" id="resume_email">
                                                <div class="delete wbdfont resume_delete" for-id="resume_email">&#xe75b;</div>
                                                <a class="wbdfont setIconBtn resume_icon_diy" for-id="email" style="font-size:none"></a>
                                                <span class="email"><div  class="resume_msg" notice-key="email" for-key="email" for-value="html" contenteditable="true">zhailuo@163.com</div></span>
                                            </div>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                            <div id="bar_sort"></div>
                        </div>
                        <div class="wbd-divCenter"></div>
                        <div class="wbd-divRight sortable resume_main" id="foo">
                            <div id="foo_sort"></div>
                            <!--教育背景-->
                            <div class="experDiv baseItem baseSort resume_add_area resume_sort resume_item " notice-key="edu" id="resume_edu" for-key="edu">
                                <dl>
                                    <dt class="clearfix">
						<a class="wbdfont setIconBtn resume_icon_diy" for-id="edu"  style="font-size:none"></a>
						<span><div contenteditable="true"  class="resume_tilte_name" for-key="eduall_title" for-value="html">教育背景</div></span>
					</dt>
                                    <dd class="clearfix resume_append_area">

                                        <div class="baseContent resume_item_items baseDel resume_delete_area">
                                            <div class="delete wbdfont resume_delete">&#xe75b;</div>
                                            <div class="conTitle clearfix">
                                                <span class="time">
									<div  contenteditable="true" class="resume_time" >&nbsp;2012.09-2016.06</div>
								</span>
                                                <span class="company">
									<div  contenteditable="true" class="resume_unit">东北大学 （本科）</div>
								</span>
                                                <span class="post">
									<div  contenteditable="true" class="resume_job">软件工程专业 &nbsp;</div>
								</span>
                                            </div>
                                            <div class="conText clearfix baseDel resume_delete_area">
                                                <div class="delete wbdfont resume_delete">&#xe75b;</div>
                                                <div class="resume_value" contenteditable="true">
                                                    <p><span style="background-color: initial;">2011.9 - 2015.6</span><br></p>
                                                </div>
                                            </div>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                            <!--工作经历-->
                            <div class="eduDiv baseItem baseSort resume_item resume_add_area resume_sort resume_notice " notice-key="work" id="resume_work" for-key="work">
                                <dl>
                                    <dt class="clearfix">
						<a class="wbdfont setIconBtn resume_icon_diy" for-id="work"  style="font-size:none"></a>
						<span><div contenteditable="true" class="resume_tilte_name" for-key="expercall_title" for-value="html">工作经历</div></span>
					</dt>
                                    <dd class="clearfix resume_append_area">
                                        <div class="baseContent resume_item_items baseDel resume_delete_area">
                                            <div class="delete wbdfont resume_delete">&#xe75b;</div>
                                            <div class="conTitle clearfix">
                                                <span class="time">
									<div class="resume_time" contenteditable="true" >2014.10 — 2016.01</div>
								</span>
                                                <span class="company"><div  class="resume_unit" contenteditable="true" >大连创科科技发展有限公司</div></span>
                                                <span class="post"><div  class="resume_job" contenteditable="true" >iOS软件件开发工程师</div></span>
                                            </div>
                                            <div class="conText clearfix baseDel resume_delete_area">
                                                <div class="delete wbdfont resume_delete">&#xe75b;</div>
                                                <div class="resume_value" contenteditable="true">
                                                    <p>工作描述：</p>
                                                    <p>1. 工作期间主要iOS客户端的开发；</p>
                                                    <p>2. 分析客户需要，建立项目框架；</p>
                                                    <p>3. 按照项目计划高质量的完成所负责的模块开发以及bug的修复；</p>
                                                    <p>4. 测试程序，维护项目。&nbsp;</p>
                                                    <p><br></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="baseContent resume_item_items baseDel resume_delete_area">
                                            <div class="delete wbdfont resume_delete">&#xe75b;</div>
                                            <div class="conTitle clearfix">
                                                <span class="time">
									<div class="resume_time" contenteditable="true" >2016.01 — 至今</div>
								</span>
                                                <span class="company"><div  class="resume_unit" contenteditable="true" >杭州先临三维科技股份有限公司</div></span>
                                                <span class="post"><div  class="resume_job" contenteditable="true" >iOS开发工程师及前端开发工程师</div></span>
                                            </div>
                                            <div class="conText clearfix baseDel resume_delete_area">
                                                <div class="delete wbdfont resume_delete">&#xe75b;</div>
                                                <div class="resume_value" contenteditable="true">
                                                    工作描述：
                                                    <div>1，工作期间主要负责iOS App的开发及公司网站前端页面的开发</div>
                                                    <div>2，参加项目需求评审会，提出合理意见，评估需求制定开发计划</div>
                                                    <div>3，建立项目框架，按照计划高质量的完成开发</div>
                                                    <div>4，提交测试，修复测试中发现的问题</div>
                                                    <div>5，提交上线</div>
                                                </div>
                                            </div>
                                        </div>
                                    </dd>
                                </dl>
                            </div>


                            <!--项目经验-->
                            <div class="outexperDiv baseItem baseSort  resume_item resume_add_area resume_sort resume_notice" notice-key="project" id="resume_project" for-key="project">
                                <dl>
                                    <dt class="clearfix">
					<a class="wbdfont setIconBtn resume_icon_diy"   for-id="project" style="font-size:none"></a>
					<span><div contenteditable="true" class="resume_tilte_name" for-key="experdall_title" for-value="html">项目经验</div></span>
					</dt>
                                    <dd class="clearfix resume_append_area">
                                        <div class="baseContent baseDel resume_item_items baseDel resume_delete_area">
                                            <div class="delete wbdfont resume_delete">&#xe75b;</div>
                                            <div class="conTitle clearfix">
                                                <span class="time">
									<div class="resume_time" contenteditable="true" >2016年1月-8月</div>
								</span>
                                                <span class="company"><div  class="resume_unit" contenteditable="true" >3d造（App）</div></span>
                                                <span class="post"><div  class="resume_job" contenteditable="true" ></div></span>
                                            </div>
                                            <div class="conText clearfix baseDel resume_delete_area">
                                                <div class="delete wbdfont resume_delete">&#xe75b;</div>
                                                <div class="resume_value" contenteditable="true">
                                                    <p><b>项目描述：</b><span style="line-height: 1.5; background-color: initial;">关于3d模型预览，3d商品售卖及3d打印交流社区于一身的传统行业转战线上的App，利用hybrid开发。（暂未上线）</span></p>
                                                    <p><b>项目功能点介绍：</b></p>
                                                    <p>1. 3D模型预览：利用OpenGL支持3d模型预览（放大缩小旋转）及简单操作</p>
                                                    <p>2. 商城：商品预览、售卖及购物车功能（连接支付宝级微信支付）</p>
                                                    <p>3. 社区：图文社交</p>
                                                    <p>4. 即时通讯：即时通讯采用环信SDK实现</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="baseContent baseDel resume_item_items baseDel resume_delete_area">
                                            <div class="delete wbdfont resume_delete">&#xe75b;</div>
                                            <div class="conTitle clearfix">
                                                <span class="time">
									<div class="resume_time" contenteditable="true" >2016年9月-今</div>
								</span>
                                                <span class="company"><div  class="resume_unit" contenteditable="true" >3d客（Web）</div></span>
                                                <span class="post"><div  class="resume_job" contenteditable="true" ></div></span>
                                            </div>
                                            <div class="conText clearfix baseDel resume_delete_area">
                                                <div class="delete wbdfont resume_delete">&#xe75b;</div>
                                                <div class="resume_value" contenteditable="true">
                                                    <p>项目描述：3d造（https://www.3dzao.cn）及移动端3d造（https://m.3dzao.cn/）,前端项目，使用VUE开发。</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="baseContent baseDel resume_item_items baseDel resume_delete_area">
                                            <div class="delete wbdfont resume_delete">&#xe75b;</div>
                                            <div class="conTitle clearfix">
                                                <span class="time">
									<div class="resume_time" contenteditable="true" >2015年</div>
								</span>
                                                <span class="company"><div  class="resume_unit" contenteditable="true" >挺美烯理疗</div></span>
                                                <span class="post"><div  class="resume_job" contenteditable="true" ></div></span>
                                            </div>
                                            <div class="conText clearfix baseDel resume_delete_area">
                                                <div class="delete wbdfont resume_delete">&#xe75b;</div>
                                                <div class="resume_value" contenteditable="true">
                                                    <p>项目描述：挺美烯理疗是一款基于手机蓝牙控制设备工作的智能APP。主要用于控制理疗文胸的相关工作。</p>
                                                    <p>AppStore地址：https://itunes.apple.com/us/app/ting-mei-xi-li-liao/id1186136648?mt=8</p>
                                                    <p>项目功能点介绍：<br></p>
                                                    <p>1，蓝牙连接设备：手机蓝牙扫描设备、连接设备</p>
                                                    <p>2，对设备进行操作：通过蓝牙根据设备uuid对设备进行读写操作，从而控制设备工作</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="baseContent baseDel resume_item_items baseDel resume_delete_area">
                                            <div class="delete wbdfont resume_delete">&#xe75b;</div>
                                            <div class="conTitle clearfix">
                                                <span class="time">
									<div class="resume_time" contenteditable="true" >2015年</div>
								</span>
                                                <span class="company"><div  class="resume_unit" contenteditable="true" >U贷-域名借款投资平台</div></span>
                                                <span class="post"><div  class="resume_job" contenteditable="true" ></div></span>
                                            </div>
                                            <div class="conText clearfix baseDel resume_delete_area">
                                                <div class="delete wbdfont resume_delete">&#xe75b;</div>
                                                <div class="resume_value" contenteditable="true">
                                                    <p>项目描述：通过域名进行抵押贷款及投资的平台</p>
                                                    <p>AppStore地址：https://itunes.apple.com/us/app/u%E8%B4%B7-%E5%9F%9F%E5%90%8D%E5%80%9F%E6%AC%BE%E6%8A%95%E8%B5%84%E5%B9%B3%E5%8F%B0/id1103560448?mt=8<br></p>
                                                    <p>项目功能点：</p>
                                                    <p>1，投资理财：对理财项目进行投资</p>
                                                    <p>2，域名贷款：抵押自己所拥有的高质量域名进行借款</p>
                                                    <p>3，米圈资讯：展示及推送域名圈的新闻资讯</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="baseContent baseDel resume_item_items baseDel resume_delete_area">
                                            <div class="delete wbdfont resume_delete">&#xe75b;</div>
                                            <div class="conTitle clearfix">
                                                <span class="time">
									<div class="resume_time" contenteditable="true" >业余项目</div>
								</span>
                                                <span class="company"><div  class="resume_unit" contenteditable="true" >表趣</div></span>
                                                <span class="post"><div  class="resume_job" contenteditable="true" ></div></span>
                                            </div>
                                            <div class="conText clearfix baseDel resume_delete_area">
                                                <div class="delete wbdfont resume_delete">&#xe75b;</div>
                                                <div class="resume_value" contenteditable="true">
                                                    <p>项目描述：一个给表情加文字分享的表情包App</p>
                                                    <p>AppStore地址：https://itunes.apple.com/us/app/%E8%A1%A8%E8%B6%A3/id1220687564?mt=8<br></p>
                                                    <p>项目功能点：</p>
                                                    <p>1，表情包：拉取各大平台流行表情包</p>
                                                    <p>2，制作表情包：对拉取的表情包进行再编辑，进行添加问题、贴图操作</p>
                                                    <p>3，一键分享：将制作的表情包一键分享到各大平台与好友斗图</p>
                                                    <p>4，本地存储：将用户制作或喜欢的表情包保存在本地</p>
                                                </div>
                                            </div>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                            <div class=" baseItem baseSort baseItem  resume_custom resume_custom_delete_area resume_add_area resume_sort" id="3ba40c001ec020d74d09368a0d220aff" for-key="3ba40c001ec020d74d09368a0d220aff">
                                <dl>
                                    <dt class="clearfix">
					<a class="wbdfont setIconBtn resume_icon_diy" for-id="3ba40c001ec020d74d09368a0d220aff" style="font-size:none"></a>
					<span><div class="resume_name" contenteditable="true">掌握语言</div></span>
					</dt>
                                    <dd class="clearfix">
                                        <div class="baseContent resume_item_items baseDel resume_delete_area">
                                            <div class="conText clearfix baseDel resume_delete_area">
                                                <div class="delete wbdfont resume_delete">&#xe75b;</div>
                                                <div class="resume_value" contenteditable="true">
                                                    <p>熟练掌握Objective-C</p>
                                                    <p>熟练掌握JavaScript + HTML +CSS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                            <div class="resume_hidden_module  baseItem baseSort baseItem  resume_custom resume_custom_delete_area resume_add_area resume_sort" id="09da2a6f662d8419fbf372b0e71d5cfb" for-key="09da2a6f662d8419fbf372b0e71d5cfb">
                                <dl>
                                    <dt class="clearfix">
					<a class="wbdfont setIconBtn resume_icon_diy" for-id="09da2a6f662d8419fbf372b0e71d5cfb" style="font-size:none"></a>
					<span><div class="resume_name" contenteditable="true">专业技能</div></span>
					</dt>
                                    <dd class="clearfix">
                                        <div class="baseContent resume_item_items baseDel resume_delete_area">
                                            <div class="conText clearfix baseDel resume_delete_area">
                                                <div class="delete wbdfont resume_delete">&#xe75b;</div>
                                                <div class="resume_value" contenteditable="true">
                                                    <p><br></p>
                                                </div>
                                            </div>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                            <div class="resume_hidden_module  baseItem baseSort baseItem  resume_custom resume_custom_delete_area resume_add_area resume_sort" id="9f5d2f7a8c6f26f941f27d4914eef1e8" for-key="9f5d2f7a8c6f26f941f27d4914eef1e8">
                                <dl>
                                    <dt class="clearfix">
					<a class="wbdfont setIconBtn resume_icon_diy" for-id="9f5d2f7a8c6f26f941f27d4914eef1e8" style="font-size:none"></a>
					<span><div class="resume_name" contenteditable="true">掌握语言</div></span>
					</dt>
                                    <dd class="clearfix">
                                        <div class="baseContent resume_item_items baseDel resume_delete_area">
                                            <div class="conText clearfix baseDel resume_delete_area">
                                                <div class="delete wbdfont resume_delete">&#xe75b;</div>
                                                <div class="resume_value" contenteditable="true">
                                                    <p></p>
                                                </div>
                                            </div>
                                        </div>
                                    </dd>
                                </dl>
                            </div>

                            <!--奖项荣誉-->
                            <div class=" honorDiv baseItem baseSort  resume_item resume_sort resume_notice" notice-key="honor" id="resume_honor" for-key="honor">
                                <dl>
                                    <dt class="clearfix">
					<a class="wbdfont setIconBtn resume_icon_diy" for-id="honor"  style="font-size:none"></a>
					<span><div contenteditable="true"  class="resume_tilte_name" for-key="honor_title" for-value="html">专业技能</div></span>
					</dt>
                                    <dd class="clearfix">
                                        <div class="baseContent">
                                            <div class="conText clearfix baseDel resume_delete_area">
                                                <div class="delete wbdfont resume_delete">&#xe75b;</div>
                                                <div class="resume_lang_honor_value resume_value" contenteditable="true">
                                                    <p></p>
                                                    <p>1. 熟练掌握Objective-C编程基础, 熟练使用Cocoa Touch开发框架。</p>
                                                    <p>2. 熟悉Interface Builder及iPhone SDK开发环境,掌握OC的内存管理；</p>
                                                    <p>3. 熟练掌握MVC设计模式，委托，单例,通知，深入理解面向对象设计思想,熟悉常用的设计</p>
                                                    <p>
                                                        <font color="#ffffff">3. </font>模式,能独立开发iOS应用。&nbsp;</p>
                                                    <p>4. 熟练使用各种UI控件，熟悉多视图应用开发，地图的使用，UIView动画使用； &nbsp;</p>
                                                    <p>5. 熟悉json，CoreData在iOS平台中的应用，NSUserDefaults,plist本地数据存储； &nbsp;<span style="line-height: 1.5; background-color: initial;">&nbsp;</span></p>
                                                    <p><span style="line-height: 1.5; background-color: initial;">6.&nbsp;熟悉GCD，根据不同的业务需求进行线程操作</span></p>
                                                    <p><span style="line-height: 1.5; background-color: initial;">7.&nbsp;熟悉Objective-C的Runtime的运行机制以及RunLoop的使用。</span></p>
                                                    <p><span style="line-height: 1.5; background-color: initial;">8. 熟悉各大平台的SDK，能根据文档进行封装级整合</span></p>
                                                    <p>9. 熟练掌握Git版本管理工具以及CocoaPods三方库管理工具。</p>
                                                    <p>10. 熟悉Hybrid开发，可独立开发hybrid页面，并完成iOS与JS的交互</p>
                                                </div>
                                            </div>
                                        </div>
                                    </dd>
                                </dl>
                            </div>

                            <!--自我评价-->
                            <div class="selfDiv baseItem baseSort resume_item resume_sort resume_notice " notice-key="self" id="resume_self" for-key="self">
                                <dl>
                                    <dt class="clearfix">
						<a class="wbdfont setIconBtn resume_icon_diy" for-id="self"  style="font-size:none"></a>
						<span><div contenteditable="true"  class="resume_tilte_name" for-key="self_title" for-value="html">自我评价</div></span>
					</dt>
                                    <dd class="clearfix">
                                        <div class="baseContent">
                                            <div class="conText clearfix baseDel resume_delete_area">
                                                <div class="delete wbdfont resume_delete">&#xe75b;</div>
                                                <div class="resume_value" contenteditable="true">
                                                    <p>github地址: https://github.com/lczhai</p>
                                                    <p><br></p>
                                                    <p>喜欢钻研，愿意去解决问题，主动接触新技术，把利用技术手段释放人力及娱乐人类当做最大成就。喜欢有趣的东西，自己也总会去用写一些有趣的好玩的东西。</p>
                                                    <p><br></p>
                                                    <p>&nbsp; &nbsp; &nbsp;</p>
                                                </div>
                                            </div>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>


                        <div class="wbd-divBottom"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      demos:[]
    }
  },
  created(){
    
  },
  methods:{
    jumpUrl(url){
      window.open(url);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->



<style scoped>
.warp{
    text-align:left;
}
    span.resume_drag_delete {
        display: none !important;
    }
    /*自定义文本添加*/
    
    .text-draggable {
        position: absolute;
        top: 0px;
        right: 0px;
        z-index: 10;
    }
</style>