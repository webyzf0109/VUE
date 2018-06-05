<template>
<div style="height:100%;overflow:auto" class="lists-box">
    <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
        <div class="listss" v-for="item in orderList" style="width: 100%;height: auto;background: #fff;margin-top: 20px;">
            <div style="display:flex;">
              <span v-if="!item.secondCommission">一级分销</span>
              <span v-if="item.secondCommission">二级分销</span>
              <span v-if="item.orderState==3 || item.orderState==4 ||item.orderState==5">待到账</span>
              <span v-if="item.orderState==9">已到账</span>
              <span v-if="item.orderState==6 ||item.orderState==7">已失效</span>
            </div>
            <div class="orderNum" style="font-size: 14px;">
                <p>
                    <span>订单号:</span> <span>{{item.orderNum}}</span>
                </p>
                <p style="color:#666;">
                    <span>下单时间:</span><span>{{item.createTime}} </span>
                </p>
            </div>
            <div class="orderMoney">
                <p><span>订单金额:</span><span>￥{{item.totalPrice}}</span></p>
                <p style="color:#ff3542;">
                  <span>佣金:</span>
                  <span v-if="!item.secondCommission">￥{{item.firstCommission}}</span>
                  <span v-if="item.secondCommission">￥{{item.secondCommission}}</span>
                </p>
            </div>
        </div>
    </mt-loadmore>
</div>
</template>
<script>
export default {
  data() {
    return {
      orderList: [],
      allLoaded: false,
      page: 1,
      rows: 10,
      state: null,
    };
  },
  props: ["orderState"],
  created: function() {
      this.getInfo(this.orderState);
  },
  methods: {
    getInfo: function(oldvalue) {
      if (oldvalue !== undefined || oldvalue !== 0) {
        this.state = oldvalue;
      } else {
        this.state == 0;
      }
      this.page=1;
      this.$fetch.api_getData
        .distributionDetailedfindPage(
          { page: this.page, rows: this.rows },
          this.state
        )
        .then(({ data }) => {
          this.orderList = data.data.records;
          this.isHaveMore(this.page, this.rows, data.data.total);
        });
    },
    //下拉加载
    loadBottom: function() {
      this.more();
    },
    more() {
      this.page++;
      this.$fetch.api_getData
        .distributionDetailedfindPage(
          {
            page: this.page,
            rows: this.rows
          },
          this.state
        )
        .then(({ data }) => {
          this.orderList.push(data.data.records);
          this.isHaveMore(this.page, this.rows, data.data.total);
          setTimeout(() => {
            this.$refs.loadmore.onBottomLoaded();
          }, 1000);
        });
    },
    isHaveMore: function(page, rows, totalNum) {
      if (page * rows < totalNum) {
        this.allLoaded = false;
      } else {
        this.allLoaded = true;
      }
    }
  }
};
</script>
<style scoped>
.listss > div:first-child {
  width: 100%;
  height: 80px;
  line-height: 80px;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgb(245, 245, 245);
  box-sizing: border-box;
}
.listss div:first-child span:nth-child(1) {
  margin-left: 50px;
}
.listss div:first-child span:nth-child(2) {
  margin-right: 50px;
}
.orderNum {
  width: 100%;
  height: 140px;
  text-align: left;
  text-indent: 50px;
  border: 1px solid rgb(245, 245, 245);
  box-sizing: border-box;
}
.orderNum p {
  margin-top: 20px;
}
.orderMoney {
  width: 100%;
  height: 105px;
  border: 1px solid rgb(245, 245, 245);
  box-sizing: border-box;
}
.orderMoney p {
  margin: 10px 30px auto auto;
  text-align: right;
}
</style>


