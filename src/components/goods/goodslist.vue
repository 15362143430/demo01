<template>
    <div class="goods-box">
        <div class="goods-phone">
            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2726254192,2496219389&fm=26&gp=0.jpg" alt="">
            <h4 class="goods-name">商品名称</h4>
            <div class="goods-p">
                 <p class="goods-msg">
                <span class="now">899</span>
                <span class="old">999</span>
            </p>
            <p class="goods-shengyu">
                <span>热卖中</span>
                <span>剩余</span>
            </p>
            </div>
        </div>
        <div class="goods-phone">
            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2726254192,2496219389&fm=26&gp=0.jpg" alt="">
            <h4 class="goods-name">商品名称所所所所所所所所所事实上事实上</h4>
            <div class="goods-p">
                 <p class="goods-msg">
                <span class="now">899</span>
                <span class="old">999</span>
            </p>
            <p class="goods-shengyu">
                <span>热卖中</span>
                <span>剩余</span>
            </p>
            </div>
        </div>
        <div class="goods-phone">
            <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2726254192,2496219389&fm=26&gp=0.jpg" alt="">
            <h4 class="goods-name">商品名称</h4>
            <div class="goods-p">
                 <p class="goods-msg">
                <span class="now">899</span>
                <span class="old">999</span>
            </p>
            <p class="goods-shengyu">
                <span>热卖中</span>
                <span>剩余</span>
            </p>
            </div>
           
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style scoped>
*{
    margin: 0;
    padding: 0;
}
.goods-box{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 1%;
}
.goods-box .goods-phone{
    margin: 5px 0;
    width: 49%;
    border: 0.5px solid black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.goods-box .goods-phone p{
    background: #ddd;
    padding: 10px 0;
}
.goods-box .goods-phone .goods-msg .now{
    color: red;
    font-size: 16px;
    font-weight: bolder;
}
.goods-box .goods-phone .goods-msg .old{
    text-decoration: line-through;
    font-size: 12px;
    margin-left: 10px;
}

.goods-box .goods-phone .goods-shengyu{
    display: flex;
    justify-content: space-between;
}
.goods-box .goods-phone img{
    width: 100%;
}
</style>


