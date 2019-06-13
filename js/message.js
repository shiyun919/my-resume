/*
!function(){
	var APP_ID = 'LtdRsyCtmu6u6EtgLOHSAr5A-gzGzoHsz'
			var APP_KEY = 'QjUt2eCsBOjbhiBAWrIMBm9v'
			
			AV.init({
			  appId: APP_ID,
			  appKey: APP_KEY
			})
			console.log('运行到这里没有报错')
		
	
	
	//批量获取留言内容
	var query = new AV.Query('Message');
	  query.find().then(function (messages) {
		  console.log(messages)
		  console.log(messages[0].attributes)  //console.log(messages[0].attributes.content)
		  console.log(messages[1].attributes)  //console.log(messages[1].attributes.name)
		  console.log(messages[1].attributes)  //console.log(messages[1].attributes.content)
		  let array = messages.map((item)=> item.attributes)
		  console.log(array)
		  array.forEach((item)=> {
			  let li = document.createElement('li')
			  li.innerText = `${item.name}: ${item.content}`
			  let messagesList = document.querySelector('#messagesList')
			  console.log('here')
			  messagesList.appendChild(li)
		  })
	  }
	  )
	
	//用户留言
	let myForm = document.querySelector('#messagesForm')
	myForm.addEventListener('submit', function(e){
		e.preventDefault() //阻止默认事件（提交一次自动刷新页面）
		let name = myForm.querySelector('input[name=name]').value
		let content = myForm.querySelector('input[name=content]').value
		var Message = AV.Object.extend('Message');
		var message = new Message();
		message.save({
		  'name': name,
		  'content': content
		}).then(function(object) {
			let li = document.createElement('li')
			li.innerText = `${object.attributes.name}: ${object.attributes.content}`
			let messagesList = document.querySelector('#messagesList')
			console.log('here')
			messagesList.appendChild(li)
			myForm.querySelector('input[name=name]').value = ''
			myForm.querySelector('input[name=content]').value = ''
		  //alert('留言成功'); 提示用户留言成功
		  //window.location.reload()  //帮用户刷新页面
		})
	})
}.call()
			
	*/
	



/*
//测试验证代码
var TestObject = AV.Object.extend('TestObject');//创建TestObject表
var testObject = new TestObject();//在TestObject表中创建你一行数据
	
//数据内容是：words: 'Hello World!'
//如果保存成功，则运行alert('');
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})
*/







/*
//改造成MVC的V 和 C
! function() {
	var view = document.querySelector('section.myMessages')
  var model = {
		fetch: function(){},
		save: function(){}
	}
	var controller = {
		view: null,
		messagesList: null,
		init: function(view) {
			this.view = view
			this.messagesList = view.querySelector('#messagesList')
			this.myForm = view.querySelector('#messagesForm')
			this.initAV() //初始化AV
			this.loadMessage() //加载message
			this.bindEvents() //绑定事件
		},
		initAV: function() {
			var APP_ID = 'LtdRsyCtmu6u6EtgLOHSAr5A-gzGzoHsz'
			var APP_KEY = 'QjUt2eCsBOjbhiBAWrIMBm9v'

			AV.init({
				appId: APP_ID,
				appKey: APP_KEY
			})
			console.log('运行到这里没有报错')
		},
		loadMessage: function() {
			//批量获取留言内容
			var query = new AV.Query('Message');
			query.find().then((messages) => {
				console.log(messages)
				console.log(messages[0].attributes) //console.log(messages[0].attributes.content)
				console.log(messages[1].attributes) //console.log(messages[1].attributes.name)
				console.log(messages[1].attributes) //console.log(messages[1].attributes.content)
				let array = messages.map((item) => item.attributes)
				console.log(array)
				array.forEach((item) => {
					let li = document.createElement('li')
					li.innerText = `${item.name}: ${item.content}`
					this.messagesList.appendChild(li)
				})
			})
		},
		bindEvents: function(){
			this.myForm.addEventListener('submit', (e) => {
				e.preventDefault() //阻止默认事件（提交一次自动刷新页面）
				this.saveMessage()
			})
    },
    saveMessage: function(){
			let myForm = this.myForm
      let name = myForm.querySelector('input[name=name]').value
      let content = myForm.querySelector('input[name=content]').value
      var Message = AV.Object.extend('Message');
      var message = new Message();
      message.save({
        'name': name,
        'content': content
      }).then(function(object) {
      	let li = document.createElement('li')
      	li.innerText = `${object.attributes.name}: ${object.attributes.content}`
      	let messagesList = document.querySelector('#messagesList')
      	console.log('here')
      	messagesList.appendChild(li)
      	myForm.querySelector('input[name=name]').value = ''
      	myForm.querySelector('input[name=content]').value = ''
        //alert('留言成功'); 提示用户留言成功
        //window.location.reload()  //帮用户刷新页面
      })
    }

  }

  controller.init(view)


}.call()
*/




//改造成MVC	
! function() {
	
  var model = {
		//初始化AV
		initAV: function() {
			var APP_ID = 'LtdRsyCtmu6u6EtgLOHSAr5A-gzGzoHsz'
			var APP_KEY = 'QjUt2eCsBOjbhiBAWrIMBm9v'
		
			AV.init({
				appId: APP_ID,
				appKey: APP_KEY
			})
			console.log('运行到这里没有报错')
		},
		//获取数据
		fetch: function(){
			//批量获取留言内容
			var query = new AV.Query('Message');
			return query.find() //Promise对象
		},
		//新建并保存数据
		save: function(name, content){
			var Message = AV.Object.extend('Message');
			var message = new Message();
			return message.save({
			  'name': name,
			  'content': content
			})
		}
	}
	
	var view = document.querySelector('section.myMessages')
	
	var controller = {
		view: null,
		model: null,
		messagesList: null,
		init: function(view, model) {
			this.view = view
			this.model = model
			this.messagesList = view.querySelector('#messagesList')
			this.myForm = view.querySelector('#messagesForm')
			this.model.initAV() //调用
			this.loadMessage() //加载message
			this.bindEvents() //绑定事件
		},
		loadMessage: function() {
			this.model.fetch().then((messages) => {
				console.log(messages)
				console.log(messages[0].attributes) //console.log(messages[0].attributes.content)
				console.log(messages[1].attributes) //console.log(messages[1].attributes.name)
				console.log(messages[1].attributes) //console.log(messages[1].attributes.content)
				let array = messages.map((item) => item.attributes)
				console.log(array)
				array.forEach((item) => {
					let li = document.createElement('li')
					li.innerText = `${item.name}: ${item.content}`
					this.messagesList.appendChild(li)
				})
			})
		},
		bindEvents: function(){
			this.myForm.addEventListener('submit', (e) => {
				e.preventDefault() //阻止默认事件（提交一次自动刷新页面）
				this.saveMessage()
			})
    },
    saveMessage: function(){
			let myForm = this.myForm
      let name = myForm.querySelector('input[name=name]').value
      let content = myForm.querySelector('input[name=content]').value
			this.model.save(name, content).then(function(object) {
      	let li = document.createElement('li')
      	li.innerText = `${object.attributes.name}: ${object.attributes.content}`
      	let messagesList = document.querySelector('#messagesList')
      	console.log('here')
      	messagesList.appendChild(li)
      	myForm.querySelector('input[name=name]').value = ''
      	myForm.querySelector('input[name=content]').value = ''
        //alert('留言成功'); 提示用户留言成功
        //window.location.reload()  //帮用户刷新页面
      })
    }

  }

  controller.init(view, model)


}.call()




/*
//给MVC各新建一个类(模板),只要用到MVC结构的就都可引用这个模板
! function() {
	
  var model = Model({resourceName:'Message'})
	
	var view = View('section.myMessages')
	
	var controller = Controller({
    messageList: null,
    myForm: null,
    init: function(view, controller){
      this.messageList = view.querySelector('#messageList')
      this.myForm = view.querySelector('#messagesForm')
      this.loadMessages()
      // object 上有这三个属性吗
    },
    loadMessages: function(){
      this.model.fetch().then(
        (messages) => {
          let array = messages.map((item)=> item.attributes )
          array.forEach((item)=>{
            let li = document.createElement('li')
            li.innerText = `${item.name}: ${item.content}`
            this.messageList.appendChild(li)
          })
        } 
      )
    },
    bindEvents: function(){
      console.log(this.myForm)
      this.myForm.addEventListener('submit', (e)=>{
        e.preventDefault()
        this.saveMessage()
      })
    },
    saveMessage: function(){
      let myForm = this.myForm
      let content = myForm.querySelector('input[name=content]').value
      let name = myForm.querySelector('input[name=name]').value
      this.model.save({
        'name': name, 'content': content
      }).then(function(object) {
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}: ${object.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.appendChild(li)
        myForm.querySelector('input[name=content]').value = ''
        console.log(object)
      })
    }
  })

  controller.init(view, model)
	

}.call()
*/