<template>
    <div id="left-nav">
        <ul>
            <li>
                <router-link to='/'>
                    <i class="iconfont icon-tubiao"></i>
                    <div>统计</div>
                </router-link>
            </li>
            <li>
                <router-link to='/vip'>
                    <i class="iconfont icon-huiyuan"></i>
                    <div>会员</div>
                </router-link>
            </li>
            <li>
                <router-link to='/activity'>
                    <i class="iconfont icon-tixing1"></i>
                    <div>活动</div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
     export default {
         name:'leftNav'
     }
</script>

<style>
    #left-nav{
        color: #fff;
        font-size: 12px;
        height: 92%;
        background-color: #1e56be;
        width:8%;
        float: left;
    }

    #left-nav::after{
        clear: both;
    }

    #left-nav .iconfont{
        font-size: 24px;
    }

    #left-nav ul{
        height: 100%;
        padding: 0px;
        margin: 0px;
    }

    #left-nav a{
        color:#fff;
        text-decoration: none;
    }

    #left-nav li{
        list-style:none;
        text-align: center;
        border-bottom: 1px solid #f1f2f3;
        padding: 10px;
    }

</style>
