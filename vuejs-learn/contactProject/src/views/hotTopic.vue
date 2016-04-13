<template>
<div class="box" id="TopicsHot">
    <div class="cell">
    <span class="fade">今日热议话题</span>
    </div>

    <div class="cell from_{{topic.id}} hot_t_{{topic.id}}"  v-for="topic in topics">
      <table cellpadding="0" cellspacing="0" border="0" width="100%">
          <tbody>
          <tr>
              <td width="24" valign="middle" align="center">
                  <a :href='"https://cnodejs.org/user/"+ topic.author.loginname' target="_blank"><img :src="topic.author.avatar_url" class="avatar" border="0" align="default" style="max-width: 24px; max-height: 24px;"></a>

              </td>
              <td width="10"></td>
              <td width="auto" valign="middle">
                  <span class="item_hot_topic_title">
                  <a :href='"https://cnodejs.org/topic/"+  topic.id' target="_blank">{{topic.title}}</a>
                  </span>
              </td>
          </tr>
        </tbody>
      </table>
   </div>
</div>
</template>


<script>

var Vue = require('vue');

Vue.use(require('vue-resource'));

	export default {
    name:"hotTopic",
    data () {
    	return {
    		topics:[]
    	}
    },
    compiled (){
      var self = this;
              Vue.http.get('https://cnodejs.org/api/v1/topics',{},{})
        .then(function(res){

          this.topics = res.data.data;
        }.bind(this))
    },
    route:{
      data ( {to}){
        if (to.name == "hot"){
          document.title = "热门主题"
        }
      }
    },
		methods:{

		  gettopics() {
				Vue.http.get('https://www.v2ex.com/api/topics/hot.json')
				.then(function(data){

					this.topics = res.data.data;
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

/*.cell[id^=r_]>table,.inner[id^=r_]>table{table-layout:fixed}*/
</style>