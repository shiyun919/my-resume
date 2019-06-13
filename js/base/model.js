	
window.Model = function(options){
	let resourceName = options.resourceName
	return {
		//初始化AV
		initAV: function() {
			var APP_ID = 'LtdRsyCtmu6u6EtgLOHSAr5A-gzGzoHsz'
			var APP_KEY = 'QjUt2eCsBOjbhiBAWrIMBm9v'
			AV.init({appId: APP_ID,appKey: APP_KEY})
		},
		//获取数据
		fetch: function(){
			//批量获取留言内容
			var query = new AV.Query(resourceName);
			return query.find() //Promise对象
		},
		//新建并保存数据
		save: function(object){
			var Instance = AV.Object.extend(resourceName);
			var instance = new Instance();
			return instance.save(object)
		}
	}
}