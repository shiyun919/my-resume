//1.loading效果
    
           //延迟1s移除active
           setTimeout(function(){
            siteWelcome.classList.remove('active')
        },2000)
        

        //2.topNavBar导航效果

        //监听鼠标滚动效果
        window.onscroll = function(xxx){
            if(window.scrollY > 0){  //scrollY表示页面滚动的垂直高度
                topNav.classList.add('sticky')
            }else{
                topNav.classList.remove('sticky')
            }
        }

        //3.触发下拉菜单

        //获取class名字为menuTrigger的a标签
        let aTags = document.getElementsByClassName('menuTrigger')
        //遍历数组
        for(let i=0; i<aTags.length; i++){
            //监听鼠标移入的a标签
            aTags[i].onmouseenter = function(x){  
                let a = x.currentTarget  
                let brother = a.nextSibling
                while(brother.nodetype ===3){
                    brother = brother.nextSibling
                }
                console.log(brother)
            }
            //监听鼠标移除的a标签
            aTags][i].onmouseleave = function(x){

            }
        }