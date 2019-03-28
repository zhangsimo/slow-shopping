// 动态获取屏幕宽度，设置1rem = 屏幕宽度/10
function setRem() {
    //获取屏幕的宽度
    var w = window.innerWidth;
    //适配 750-320屏幕
    if (w > 750) {
        w = 750;
    }

    if (w < 320) {
        w = 320;
    }

    //设置1rem的大小 
    // 设置html的fontSize属性 
    document.documentElement.style.fontSize = w / 10 + 'px';
}

setRem();
//当前屏幕宽度变化时，动态设置rem的大小
window.onresize = function () {
    setRem(); 
}