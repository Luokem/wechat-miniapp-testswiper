const DEFAULT_PAGE = 0;

Page({
  startPageX: 0,
  currentView: DEFAULT_PAGE,
  data: {
    toView: `card_${DEFAULT_PAGE}`,
    list: ['Javascript']
  },

  touchStart(e) {
    this.startPageX = e.changedTouches[0].pageX;
  },

  touchEnd(e) {
    const moveX = e.changedTouches[0].pageX - this.startPageX;
    const maxPage = this.data.list.length - 1;
    if (Math.abs(moveX) >= 100) {
      if (moveX > 0) {
        this.currentView = this.currentView !== 0 ? this.currentView - 1 : 0;
      } else {

        if (this.currentView !== maxPage) {
          this.currentView = this.currentView + 1;
        }else {
          console.log("left")
          this.loadData();
          this.currentView =  maxPage +1;
        }
      }
    }
    this.setData({
      toView: `card_${this.currentView}`
    });
  },
  loadData() {
    var text = 'abcdef1234';
    var num = parseInt(Math.random(0, 1)*10+0);
    var list = this.data.list;
    list.push(text[num]);
    console.log("请求一次",list)
    this.setData({
      list: list
    })
  },
})