<template>
<div class="box" id="TopicsHot">
    <div class="cell">
    <span class="fade">今日热议主题</span>
    </div>
   <div class="cell from_15318 hot_t_{{topic.id}}" v-for="topic in topics">
	    <table cellpadding="0" cellspacing="0" border="0" width="100%">
	        <tbody>
	        <tr>
	            <td width="24" valign="middle" align="center">
	                <a href="https://v2ex.com/member/{{topic.member.username}}"><img src={{topic.member.avatar_mini}} class="avatar" border="0" align="default" style="max-width: 24px; max-height: 24px;"></a>
	            </td>
	            <td width="10"></td>
	            <td width="auto" valign="middle">
	                <span class="item_hot_topic_title">
	                <a :href="topic.url">{{topic.title}}</a>
	                </span>
	            </td>
	        </tr>
	    	</tbody>
	    </table>
   </div>

</div>
</template>


<script>
	
	//import API from "../assets/js/api.js"
	export default {
		data (){
			return{
				topics:// 20160318140131
// https://www.v2ex.com/api/topics/hot.json

[
  {
    "id": 264295,
    "title": "要不出个帮拍服务，俄版韩元付款 PD 优惠套装",
    "url": "http://www.v2ex.com/t/264295",
    "content": "要不出个帮拍服务，俄版韩元付款 PD 优惠套装\r\n手续费就收 20 好了\r\n账单和账号都直接进你自己邮箱，自己付账单哈哈哈~\r\n不知道有没这需求",
    "content_rendered": "要不出个帮拍服务，俄版韩元付款 PD 优惠套装\r<br />手续费就收 20 好了\r<br />账单和账号都直接进你自己邮箱，自己付账单哈哈哈~\r<br />不知道有没这需求",
    "replies": 88,
    "member": {
      "id": 15318,
      "username": "danbao",
      "tagline": "",
      "avatar_mini": "//cdn.v2ex.co/avatar/3be1/e43c/15318_mini.png?m=1396934303",
      "avatar_normal": "//cdn.v2ex.co/avatar/3be1/e43c/15318_normal.png?m=1396934303",
      "avatar_large": "//cdn.v2ex.co/avatar/3be1/e43c/15318_large.png?m=1396934303"
    },
    "node": {
      "id": 22,
      "name": "macosx",
      "title": "Mac OS X",
      "title_alternative": "Mac OS X",
      "url": "http://www.v2ex.com/go/macosx",
      "topics": 7884,
      "avatar_mini": "//cdn.v2ex.co/navatar/b6d7/67d2/22_mini.png?m=1458183762",
      "avatar_normal": "//cdn.v2ex.co/navatar/b6d7/67d2/22_normal.png?m=1458183762",
      "avatar_large": "//cdn.v2ex.co/navatar/b6d7/67d2/22_large.png?m=1458183762"
    },
    "created": 1458219593,
    "last_modified": 1458219744,
    "last_touched": 1458280741
  },
  {
    "id": 264370,
    "title": "大家的 ss 的服务器都在哪里？日？新加坡？美？港？",
    "url": "http://www.v2ex.com/t/264370",
    "content": "",
    "content_rendered": "",
    "replies": 85,
    "member": {
      "id": 78007,
      "username": "czipeng",
      "tagline": "",
      "avatar_mini": "//cdn.v2ex.co/avatar/4de1/d7c7/78007_mini.png?m=1437010529",
      "avatar_normal": "//cdn.v2ex.co/avatar/4de1/d7c7/78007_normal.png?m=1437010529",
      "avatar_large": "//cdn.v2ex.co/avatar/4de1/d7c7/78007_large.png?m=1437010529"
    },
    "node": {
      "id": 108,
      "name": "bb",
      "title": "宽带症候群",
      "title_alternative": "Broadband Symptom Complex",
      "url": "http://www.v2ex.com/go/bb",
      "topics": 1424,
      "avatar_mini": "//cdn.v2ex.co/navatar/a3c6/5c29/108_mini.png?m=1441773183",
      "avatar_normal": "//cdn.v2ex.co/navatar/a3c6/5c29/108_normal.png?m=1441773183",
      "avatar_large": "//cdn.v2ex.co/navatar/a3c6/5c29/108_large.png?m=1441773183"
    },
    "created": 1458262329,
    "last_modified": 1458266963,
    "last_touched": 1458280801
  },
  {
    "id": 264325,
    "title": "想嘚瑟一下... 突破了 100k",
    "url": "http://www.v2ex.com/t/264325",
    "content": "嘚瑟一下.... \r\n\r\n77777,88888 都有过了...\r\n\r\n本来昨天看了一眼, 有望 99999, 结果今天答了一个问题被 accepted 了, 一下多了 5 分.... 不管怎么说, 过了 100k 了﻿\r\n\r\nhttp://i.imgur.com/a8GddJk.png\r\n\r\nhttp://i.imgur.com/6lbxjBd.png\r\n\r\nand\r\n\r\nhttp://i.imgur.com/1o046m6.png",
    "content_rendered": "嘚瑟一下.... \r<br />\r<br />77777,88888 都有过了...\r<br />\r<br />本来昨天看了一眼, 有望 99999, 结果今天答了一个问题被 accepted 了, 一下多了 5 分.... 不管怎么说, 过了 100k 了﻿\r<br />\r<br /><a target=\"_blank\" href=\"http://i.imgur.com/a8GddJk.png\" target=\"_blank\"><img src=\"http://i.imgur.com/a8GddJk.png\" border=\"0\" style=\"max-width: 660px;\" class=\"imgly\" /></a><br />\r<br /><a target=\"_blank\" href=\"http://i.imgur.com/6lbxjBd.png\" target=\"_blank\"><img src=\"http://i.imgur.com/6lbxjBd.png\" border=\"0\" style=\"max-width: 660px;\" class=\"imgly\" /></a><br />\r<br />and\r<br />\r<br /><a target=\"_blank\" href=\"http://i.imgur.com/1o046m6.png\" target=\"_blank\"><img src=\"http://i.imgur.com/1o046m6.png\" border=\"0\" style=\"max-width: 660px;\" class=\"imgly\" /></a>",
    "replies": 75,
    "member": {
      "id": 62449,
      "username": "KentY",
      "tagline": "",
      "avatar_mini": "//cdn.v2ex.co/avatar/03cd/da6a/62449_mini.png?m=1450993929",
      "avatar_normal": "//cdn.v2ex.co/avatar/03cd/da6a/62449_normal.png?m=1450993929",
      "avatar_large": "//cdn.v2ex.co/avatar/03cd/da6a/62449_large.png?m=1450993929"
    },
    "node": {
      "id": 300,
      "name": "programmer",
      "title": "程序员",
      "title_alternative": "Programmer",
      "url": "http://www.v2ex.com/go/programmer",
      "topics": 11238,
      "avatar_mini": "//cdn.v2ex.co/navatar/94f6/d7e0/300_mini.png?m=1458224027",
      "avatar_normal": "//cdn.v2ex.co/navatar/94f6/d7e0/300_normal.png?m=1458224027",
      "avatar_large": "//cdn.v2ex.co/navatar/94f6/d7e0/300_large.png?m=1458224027"
    },
    "created": 1458224249,
    "last_modified": 1458224366,
    "last_touched": 1458280026
  },
  {
    "id": 264320,
    "title": "跟风发一个 SS Panel 的轮子",
    "url": "http://www.v2ex.com/t/264320",
    "content": "最近闲的不行，刚好迁移了下 SS 管理端（ Python -> Java ），顺便装修了下后台，跟 /t/264218 风也发一个。\r\n\r\n管理员端首页：\r\nhttp://i.imgur.com/TbluZI8.jpg\r\n\r\n用户端首页：\r\nhttp://i.imgur.com/YGejtwq.jpg\r\n\r\n节点列表页：\r\nhttp://i.imgur.com/D7XqYRk.jpg\r\n\r\n节点实时响应数据页：\r\nhttp://i.imgur.com/QaUDq74.jpg\r\n\r\n服务运行一年多了，从一开始便通过邀请码限制了人员数量，目前仍然处于纯免费状态，并且还将继续免费下去\r\n\r\n楼主后端狗，很少机会写前端，各位轻喷～\r\n\r\n代码在近期整理完会放到 GitHub 上，到时候欢迎各位 PR ～",
    "content_rendered": "最近闲的不行，刚好迁移了下 SS 管理端（ Python -&gt; Java ），顺便装修了下后台，跟 <a target=\"_blank\" href=\"/t/264218\">/t/264218</a> 风也发一个。\r<br />\r<br />管理员端首页：\r<br /><a target=\"_blank\" href=\"http://i.imgur.com/TbluZI8.jpg\" target=\"_blank\"><img src=\"http://i.imgur.com/TbluZI8.jpg\" border=\"0\" style=\"max-width: 660px;\" class=\"imgly\" /></a><br />\r<br />用户端首页：\r<br /><a target=\"_blank\" href=\"http://i.imgur.com/YGejtwq.jpg\" target=\"_blank\"><img src=\"http://i.imgur.com/YGejtwq.jpg\" border=\"0\" style=\"max-width: 660px;\" class=\"imgly\" /></a><br />\r<br />节点列表页：\r<br /><a target=\"_blank\" href=\"http://i.imgur.com/D7XqYRk.jpg\" target=\"_blank\"><img src=\"http://i.imgur.com/D7XqYRk.jpg\" border=\"0\" style=\"max-width: 660px;\" class=\"imgly\" /></a><br />\r<br />节点实时响应数据页：\r<br /><a target=\"_blank\" href=\"http://i.imgur.com/QaUDq74.jpg\" target=\"_blank\"><img src=\"http://i.imgur.com/QaUDq74.jpg\" border=\"0\" style=\"max-width: 660px;\" class=\"imgly\" /></a><br />\r<br />服务运行一年多了，从一开始便通过邀请码限制了人员数量，目前仍然处于纯免费状态，并且还将继续免费下去\r<br />\r<br />楼主后端狗，很少机会写前端，各位轻喷～\r<br />\r<br />代码在近期整理完会放到 GitHub 上，到时候欢迎各位 PR ～",
    "replies": 62,
    "member": {
      "id": 14930,
      "username": "welsmann",
      "tagline": "",
      "avatar_mini": "//cdn.v2ex.co/avatar/2109/366d/14930_mini.png?m=1367767806",
      "avatar_normal": "//cdn.v2ex.co/avatar/2109/366d/14930_normal.png?m=1367767806",
      "avatar_large": "//cdn.v2ex.co/avatar/2109/366d/14930_large.png?m=1367767806"
    },
    "node": {
      "id": 17,
      "name": "create",
      "title": "分享创造",
      "title_alternative": "Create",
      "url": "http://www.v2ex.com/go/create",
      "topics": 5209,
      "avatar_mini": "//cdn.v2ex.co/navatar/70ef/df2e/17_mini.png?m=1454545306",
      "avatar_normal": "//cdn.v2ex.co/navatar/70ef/df2e/17_normal.png?m=1454545306",
      "avatar_large": "//cdn.v2ex.co/navatar/70ef/df2e/17_large.png?m=1454545306"
    },
    "created": 1458224076,
    "last_modified": 1458224076,
    "last_touched": 1458280494
  },
  {
    "id": 264285,
    "title": "弱弱地来问一个关于美帝域名的问题",
    "url": "http://www.v2ex.com/t/264285",
    "content": "我是一个在美国读大学的学生，中国人，不具备房产，无公司。\r\n我向别人收购了一个.us 域名，我是否可以愉快的使用（不被 ClientHold ）\r\nWhois 填的是目前就读大学，名字是假的，邮箱 QQ 邮箱，手机号中国的。",
    "content_rendered": "我是一个在美国读大学的学生，中国人，不具备房产，无公司。\r<br />我向别人收购了一个.us 域名，我是否可以愉快的使用（不被 ClientHold ）\r<br />Whois 填的是目前就读大学，名字是假的，邮箱 QQ 邮箱，手机号中国的。",
    "replies": 49,
    "member": {
      "id": 99470,
      "username": "Andy1999",
      "tagline": "",
      "avatar_mini": "//cdn.v2ex.co/avatar/0e28/94f9/99470_mini.png?m=1444030292",
      "avatar_normal": "//cdn.v2ex.co/avatar/0e28/94f9/99470_normal.png?m=1444030292",
      "avatar_large": "//cdn.v2ex.co/avatar/0e28/94f9/99470_large.png?m=1444030292"
    },
    "node": {
      "id": 12,
      "name": "qna",
      "title": "问与答",
      "title_alternative": "Questions and Answers",
      "url": "http://www.v2ex.com/go/qna",
      "topics": 66123,
      "avatar_mini": "//cdn.v2ex.co/navatar/c20a/d4d7/12_mini.png?m=1458225206",
      "avatar_normal": "//cdn.v2ex.co/navatar/c20a/d4d7/12_normal.png?m=1458225206",
      "avatar_large": "//cdn.v2ex.co/navatar/c20a/d4d7/12_large.png?m=1458225206"
    },
    "created": 1458216232,
    "last_modified": 1458216546,
    "last_touched": 1458273845
  },
  {
    "id": 264187,
    "title": "杭州创业公司 offer 求比较",
    "url": "http://www.v2ex.com/t/264187",
    "content": "毕业后在上海某面向政府的传统软件公司工作（ JAVA ， 1.5 年），这次考虑下家的主要因素可以排序为: \r\n个人技术的成长>>薪资>期权或者上市的希望。\r\n\r\n现有三个着重考虑的 offer ：\r\n1. 丁香园： http://www.dxy.cn/\r\n2. 买好车: https://www.maihaoche.com/\r\n3. 知彼科技: http://zhibi365.com/index.htm\r\n\r\n纸面月薪是 知彼科技>丁香园>买好车\r\n\r\n纠结挺久了，还有点拿不定主意，希望大家给个意见，谢谢。",
    "content_rendered": "<p>毕业后在上海某面向政府的传统软件公司工作（ JAVA ， 1.5 年），这次考虑下家的主要因素可以排序为:\n个人技术的成长&gt;&gt;薪资&gt;期权或者上市的希望。</p>\n<p>现有三个着重考虑的 offer ：</p>\n<ol>\n<li>丁香园： http://www.dxy.cn/</li>\n<li>买好车: https://www.maihaoche.com/</li>\n<li>知彼科技: http://zhibi365.com/index.htm</li>\n</ol>\n<p>纸面月薪是 知彼科技&gt;丁香园&gt;买好车</p>\n<p>纠结挺久了，还有点拿不定主意，希望大家给个意见，谢谢。</p>\n",
    "replies": 47,
    "member": {
      "id": 71444,
      "username": "Suclogger",
      "tagline": "",
      "avatar_mini": "//cdn.v2ex.co/avatar/53a7/2694/71444_mini.png?m=1415927093",
      "avatar_normal": "//cdn.v2ex.co/avatar/53a7/2694/71444_normal.png?m=1415927093",
      "avatar_large": "//cdn.v2ex.co/avatar/53a7/2694/71444_large.png?m=1415927093"
    },
    "node": {
      "id": 770,
      "name": "career",
      "title": "职场话题",
      "title_alternative": "Career",
      "url": "http://www.v2ex.com/go/career",
      "topics": 1348,
      "avatar_mini": "//cdn.v2ex.co/navatar/4ea0/6fbc/770_mini.png?m=1457959463",
      "avatar_normal": "//cdn.v2ex.co/navatar/4ea0/6fbc/770_normal.png?m=1457959463",
      "avatar_large": "//cdn.v2ex.co/navatar/4ea0/6fbc/770_large.png?m=1457959463"
    },
    "created": 1458195178,
    "last_modified": 1458195178,
    "last_touched": 1458279619
  },
  {
    "id": 264283,
    "title": "Hexo 部署 Github， Coding 进行国内外分流最全教程",
    "url": "http://www.v2ex.com/t/264283",
    "content": "[Hexo 系列教程: (一)Hexo 介绍]( http://iread.io/2015/09/hexo-guide-1)\r\n\r\n[Hexo 系列教程: (二)Hexo 的 Windows 环境搭建]( http://iread.io/2015/09/hexo-guide-2)\r\n\r\n[Hexo 系列教程: (三)基于 GitHub Page 的 Hexo 搭建]( http://iread.io/2015/09/hexo-guide-3)\r\n\r\n[Hexo 系列教程: (四)将独立域名与 GitHub Pages 的空间绑定]( http://iread.io/2015/09/hexo-guide-4)\r\n\r\n[Hexo 系列教程: (五)部署时保证 README.md 不被渲染]( http://iread.io/2015/09/hexo-guide-5)\r\n\r\n[Hexo 系列教程: (六)更换更新主题]( http://iread.io/2015/09/hexo-guide-6)\r\n\r\n[Hexo 系列教程: (七)分别部署在 Github 和 Coding 的平台进行分流]( http://iread.io/2016/03/hexo-guide-7)\r\n\r\n放下“最全”大话，\r\n\r\n扔下链接，\r\n\r\n逃...",
    "content_rendered": "<p><a href=\"http://iread.io/2015/09/hexo-guide-1\">Hexo 系列教程: (一)Hexo 介绍</a></p>\n<p><a href=\"http://iread.io/2015/09/hexo-guide-2\">Hexo 系列教程: (二)Hexo 的 Windows 环境搭建</a></p>\n<p><a href=\"http://iread.io/2015/09/hexo-guide-3\">Hexo 系列教程: (三)基于 GitHub Page 的 Hexo 搭建</a></p>\n<p><a href=\"http://iread.io/2015/09/hexo-guide-4\">Hexo 系列教程: (四)将独立域名与 GitHub Pages 的空间绑定</a></p>\n<p><a href=\"http://iread.io/2015/09/hexo-guide-5\">Hexo 系列教程: (五)部署时保证 README.md 不被渲染</a></p>\n<p><a href=\"http://iread.io/2015/09/hexo-guide-6\">Hexo 系列教程: (六)更换更新主题</a></p>\n<p><a href=\"http://iread.io/2016/03/hexo-guide-7\">Hexo 系列教程: (七)分别部署在 Github 和 Coding 的平台进行分流</a></p>\n<p>放下“最全”大话，</p>\n<p>扔下链接，</p>\n<p>逃...</p>\n",
    "replies": 46,
    "member": {
      "id": 160583,
      "username": "iyannik0215",
      "tagline": "我是...",
      "avatar_mini": "//cdn.v2ex.co/avatar/f175/1ac4/160583_mini.png?m=1456411457",
      "avatar_normal": "//cdn.v2ex.co/avatar/f175/1ac4/160583_normal.png?m=1456411457",
      "avatar_large": "//cdn.v2ex.co/avatar/f175/1ac4/160583_large.png?m=1456411457"
    },
    "node": {
      "id": 17,
      "name": "create",
      "title": "分享创造",
      "title_alternative": "Create",
      "url": "http://www.v2ex.com/go/create",
      "topics": 5209,
      "avatar_mini": "//cdn.v2ex.co/navatar/70ef/df2e/17_mini.png?m=1454545306",
      "avatar_normal": "//cdn.v2ex.co/navatar/70ef/df2e/17_normal.png?m=1454545306",
      "avatar_large": "//cdn.v2ex.co/navatar/70ef/df2e/17_large.png?m=1454545306"
    },
    "created": 1458215316,
    "last_modified": 1458215316,
    "last_touched": 1458277185
  },
  {
    "id": 264210,
    "title": "注意： chrome 连不上 SOCKS5 代理服务器，可尝试卸载迅雷。",
    "url": "http://www.v2ex.com/t/264210",
    "content": "自己本地用 ShadowSocks 开了个 socks5 代理，用 FireFox 正常。\r\n\r\n但用 chrome 不行，症状是 chrome 根本没去连代理， ShadowSocks 窗口里没任何连接信息。\r\n\r\n禁用 chrome 插件，用命令行指定 proxy ，换 ShadowSocks 端口都不行。\r\n\r\n重装 chrome ，好了一天就又不行了。\r\n\r\n网上搜了很久，有人提到迅雷会影响代理上网，卸载之，果然 chrome 就可以用代理了。\r\n\r\n很气愤，不知道迅雷搞了什么鬼。",
    "content_rendered": "自己本地用 ShadowSocks 开了个 socks5 代理，用 FireFox 正常。\r<br />\r<br />但用 chrome 不行，症状是 chrome 根本没去连代理， ShadowSocks 窗口里没任何连接信息。\r<br />\r<br />禁用 chrome 插件，用命令行指定 proxy ，换 ShadowSocks 端口都不行。\r<br />\r<br />重装 chrome ，好了一天就又不行了。\r<br />\r<br />网上搜了很久，有人提到迅雷会影响代理上网，卸载之，果然 chrome 就可以用代理了。\r<br />\r<br />很气愤，不知道迅雷搞了什么鬼。",
    "replies": 39,
    "member": {
      "id": 37274,
      "username": "twilight",
      "tagline": "",
      "avatar_mini": "//cdn.v2ex.co/avatar/c6e0/7eaa/37274_mini.png?m=1399427080",
      "avatar_normal": "//cdn.v2ex.co/avatar/c6e0/7eaa/37274_normal.png?m=1399427080",
      "avatar_large": "//cdn.v2ex.co/avatar/c6e0/7eaa/37274_large.png?m=1399427080"
    },
    "node": {
      "id": 92,
      "name": "chrome",
      "title": "Chrome",
      "title_alternative": "Chrome",
      "url": "http://www.v2ex.com/go/chrome",
      "topics": 514,
      "avatar_mini": "//cdn.v2ex.co/navatar/92cc/2275/92_mini.png?m=1455117369",
      "avatar_normal": "//cdn.v2ex.co/navatar/92cc/2275/92_normal.png?m=1455117369",
      "avatar_large": "//cdn.v2ex.co/navatar/92cc/2275/92_large.png?m=1455117369"
    },
    "created": 1458199827,
    "last_modified": 1458199827,
    "last_touched": 1458257782
  },
  {
    "id": 264382,
    "title": "新浪 SAE 云已不适合个人用户使用（ V2 有人的项目在 SAE 吗？）",
    "url": "http://www.v2ex.com/t/264382",
    "content": "一般的项目里面， php 没 mysql 显然是不可能的，现在共享型 mysql 每小时收费 0.02 元（每天 0.48,16 年 3 月 21 日起收起），每个账号再每天收取 0.1 元的租金（ 16 年 3 月 14 日开始收取），假设一年是 365 天，那么收费 211.7 元一年。如果是 366 天就是 212.2 元。哦不不，你做个网站，起码也得绑定自己的域名吧，不然做个网站自己的域名都没有那能叫自己的网站吗？那一年是 270.1 元！（只绑定一个域名，每绑定一个域名 58.4 元一年）\r\n\r\n\r\n\r\n再去看看免费配额（也就是一年交了 270 元后可以使用多少资源）\r\n\r\n日志下载 20M/天\r\nKVDB 10 万次 /天（ 50M ） /天\r\nFetchURL 流入 20M 流出 5M /天\r\nHTTP 流出 30M 流入 5M /天\r\n共享型 MySQL （主库） 100000 次 （ 20M ） /天\r\n共享型 MySQL （从库） 100000 次（目前还未显示新的配额 猜的）\r\nMemcache 10000 次 /天\r\nStorage 5MB 外网流出（磁盘 150MB ） /天\r\n代码空间 100MB /天\r\n绑定域名  每个 0.16 天 /天\r\n\r\n一年 270 元花下来，就买了这么一点鬼玩意，国内随便哪里买个付费空间也比这强多了吧，而且配额还多，这个收费表，你 270 一年的空间随时可能因为某些配额不均衡导致额外收费， 270 只是一个很保守的估计，你要是真正使用，最保守也得考虑额外收费 100 块一年，你还得小心翼翼的使用，要不然可能还不够……（这不是玩笑，真正做网站了，不是什么都能掌控的）\r\n\r\n另外常常能见到有用户说 SAE 不稳定，这一点不是很好核实，但是想必无风不起浪……\r\n\r\n最后结论，还不如直接买个 VPS ，自己做主，想怎么用就怎么用，或者买个虚拟主机，起码不会有额外收费了，也不用担心突然哪天访问量大了一大堆额外收费。而且这还仅仅是目前的情况（今天是 2016 年 3 月 18 日）。按使用量收费，而且起价高，个人用户如果没有超大的访问量，我觉得找个大厂家买个虚拟主机会实惠很多，线路和稳定性也不会太差。\r\n\r\n\r\n如果你的项目很大，能赚钱，不在乎这点小钱，那我真的想问问，在 V2EX ，有多少用户使用它，每年又在上面花多少钱……稳定性是不是传说中的那么差……我个人认为，收费高一点，打着云的招牌，那么故障率应该极低才对。否则意义何在？\r\n\r\n其实最最希望的是看看有没有个人在付费试用的，好奇你们能不能接受这个（最低）价格。\r\n\r\nPS ：版权不留，请随意转载和讨论。",
    "content_rendered": "一般的项目里面， php 没 mysql 显然是不可能的，现在共享型 mysql 每小时收费 0.02 元（每天 0.48,16 年 3 月 21 日起收起），每个账号再每天收取 0.1 元的租金（ 16 年 3 月 14 日开始收取），假设一年是 365 天，那么收费 211.7 元一年。如果是 366 天就是 212.2 元。哦不不，你做个网站，起码也得绑定自己的域名吧，不然做个网站自己的域名都没有那能叫自己的网站吗？那一年是 270.1 元！（只绑定一个域名，每绑定一个域名 58.4 元一年）\r<br />\r<br />\r<br />\r<br />再去看看免费配额（也就是一年交了 270 元后可以使用多少资源）\r<br />\r<br />日志下载 20M/天\r<br />KVDB 10 万次 /天（ 50M ） /天\r<br />FetchURL 流入 20M 流出 5M /天\r<br />HTTP 流出 30M 流入 5M /天\r<br />共享型 MySQL （主库） 100000 次 （ 20M ） /天\r<br />共享型 MySQL （从库） 100000 次（目前还未显示新的配额 猜的）\r<br />Memcache 10000 次 /天\r<br />Storage 5MB 外网流出（磁盘 150MB ） /天\r<br />代码空间 100MB /天\r<br />绑定域名  每个 0.16 天 /天\r<br />\r<br />一年 270 元花下来，就买了这么一点鬼玩意，国内随便哪里买个付费空间也比这强多了吧，而且配额还多，这个收费表，你 270 一年的空间随时可能因为某些配额不均衡导致额外收费， 270 只是一个很保守的估计，你要是真正使用，最保守也得考虑额外收费 100 块一年，你还得小心翼翼的使用，要不然可能还不够……（这不是玩笑，真正做网站了，不是什么都能掌控的）\r<br />\r<br />另外常常能见到有用户说 SAE 不稳定，这一点不是很好核实，但是想必无风不起浪……\r<br />\r<br />最后结论，还不如直接买个 VPS ，自己做主，想怎么用就怎么用，或者买个虚拟主机，起码不会有额外收费了，也不用担心突然哪天访问量大了一大堆额外收费。而且这还仅仅是目前的情况（今天是 2016 年 3 月 18 日）。按使用量收费，而且起价高，个人用户如果没有超大的访问量，我觉得找个大厂家买个虚拟主机会实惠很多，线路和稳定性也不会太差。\r<br />\r<br />\r<br />如果你的项目很大，能赚钱，不在乎这点小钱，那我真的想问问，在 V2EX ，有多少用户使用它，每年又在上面花多少钱……稳定性是不是传说中的那么差……我个人认为，收费高一点，打着云的招牌，那么故障率应该极低才对。否则意义何在？\r<br />\r<br />其实最最希望的是看看有没有个人在付费试用的，好奇你们能不能接受这个（最低）价格。\r<br />\r<br />PS ：版权不留，请随意转载和讨论。",
    "replies": 39,
    "member": {
      "id": 114799,
      "username": "yeyeye",
      "tagline": "",
      "avatar_mini": "//cdn.v2ex.co/avatar/b87f/0209/114799_mini.png?m=1431583508",
      "avatar_normal": "//cdn.v2ex.co/avatar/b87f/0209/114799_normal.png?m=1431583508",
      "avatar_large": "//cdn.v2ex.co/avatar/b87f/0209/114799_large.png?m=1431583508"
    },
    "node": {
      "id": 104,
      "name": "cloud",
      "title": "云计算",
      "title_alternative": "Cloud Computing",
      "url": "http://www.v2ex.com/go/cloud",
      "topics": 1381,
      "avatar_mini": "//cdn.v2ex.co/navatar/c9e1/074f/104_mini.png?m=1458224175",
      "avatar_normal": "//cdn.v2ex.co/navatar/c9e1/074f/104_normal.png?m=1458224175",
      "avatar_large": "//cdn.v2ex.co/navatar/c9e1/074f/104_large.png?m=1458224175"
    },
    "created": 1458266161,
    "last_modified": 1458266245,
    "last_touched": 1458279259
  },
  {
    "id": 264367,
    "title": "为什么用过 php 再去自学 python 有点难以入手的感觉",
    "url": "http://www.v2ex.com/t/264367",
    "content": "如题 How to learn",
    "content_rendered": "如题 How to learn",
    "replies": 37,
    "member": {
      "id": 147389,
      "username": "xiaoshangmin",
      "tagline": "",
      "avatar_mini": "//cdn.v2ex.co/gravatar/34db9802c937285bb6ea0bf30e8cac83?s=24&d=retro",
      "avatar_normal": "//cdn.v2ex.co/gravatar/34db9802c937285bb6ea0bf30e8cac83?s=48&d=retro",
      "avatar_large": "//cdn.v2ex.co/gravatar/34db9802c937285bb6ea0bf30e8cac83?s=73&d=retro"
    },
    "node": {
      "id": 90,
      "name": "python",
      "title": "Python",
      "title_alternative": "Python",
      "url": "http://www.v2ex.com/go/python",
      "topics": 4546,
      "avatar_mini": "//cdn.v2ex.co/navatar/8613/985e/90_mini.png?m=1458224254",
      "avatar_normal": "//cdn.v2ex.co/navatar/8613/985e/90_normal.png?m=1458224254",
      "avatar_large": "//cdn.v2ex.co/navatar/8613/985e/90_large.png?m=1458224254"
    },
    "created": 1458259926,
    "last_modified": 1458259926,
    "last_touched": 1458280219
  }
]
			}
		},
        created (){
            console.log( this.getHotTopics);
           // this.getHotTopics();

        },
		methods:{
			getHotTopics (){
				var p = API.getHotTopics();
				p.then(function(data){
                    console.log(data);
					this.topics = data;
				}.bind(this))
			}
		}
	}

</script>

<style>

a:link, a:visited, a:active {
    color: #778087;
    text-decoration: none;
    word-break: break-all;
}

a:hover {
    color: #4d5256;
    text-decoration: underline;
}
.cell {
    padding: 10px;
    font-size: 12px;
    line-height: 120%;
    text-align: left;
    border-bottom: 1px solid #e2e2e2;
}

.cell_tabs {
    padding: 10px 10px 0px 10px;
    border-bottom: 1px solid #e2e2e2;
    text-align: center;
}

.cell_tab:link, .cell_tab:visited {
    font-size: 14px;
    border-bottom: 3px solid transparent;
    display: inline-block;
    text-decoration: none;
    margin-right: 15px;
    padding: 0px 5px 5px 5px;
    color: #99a;
}

.cell_tab:hover {
    color: #778087;
    border-bottom: 3px solid #f0f0f0;
}

.cell_tab_current:link, .cell_tab_current:visited  {
    font-size: 14px;
    border-bottom: 3px solid #778087;
    display: inline-block;
    text-decoration: none;
    margin-right: 15px;
    padding: 0px 5px 5px 5px;
}

.cell_ops {
    padding: 10px;
    font-size: 12px;
    line-height: 120%;
    text-align: left;
    border-bottom: 1px solid #e2e2e2;
    background-color: #F9F9F9;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05) inset;
}

.collapsed {
    display: none;
}

.well {
    padding: 10px; background-color: #f9f9f9; border-radius: 5px; box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1) inset;
}

.cell[id^=r_]>table,.inner[id^=r_]>table{table-layout:fixed}
</style>