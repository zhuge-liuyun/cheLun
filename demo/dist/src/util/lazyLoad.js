export default (el)=>{
    let offset=20;
    //获取所有需要懒加载的元素
    let nodes=Array.from(document.querySelectorAll('[data-src]'));
    //判断是否出现在视口中
    let inView=(ele)=>{
        let rect=ele.getBoundingClientRect();
        if(rect.top>0&&rect.top<window.innerHeight+offset&&rect.left>0&&rect.right>0){
             return true
        }else{
            return false
        }
    }
    //判断元素是否加载过
    let isDeal=(ele)=>{
        return ele.src==ele.dataset.src;
    }
    let load=()=>{
        nodes.forEach((item)=>{
            if(inView(item) && isDeal(item)){
                item.src=item.dataset.src;
            }
        })
    }
    load();
    document.querySelector(el).addEventListener('scroll',load)
}