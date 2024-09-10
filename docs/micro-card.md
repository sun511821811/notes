# 微米名片

## 名片夹

-   最近浏览 `visit_type` 都是空

    <http://127.0.0.1:8080/api/radar/me_see_who?page=1&pageSize=10&type=3&host_card_id=29>

    | ![alt text](image-13.png) | ![alt text](image-14.png) |
    | ------------------------- | ------------------------- |

## 登录

-   返回默认名片信息

    <https://api.aicard.xuancollege.com/auth/miniwx_login> 微信登录

    {{host}}/auth/pwd_login h5 登录

## 名片

-   访问他人名片

    缺少`公司名称` `名片类型`

    <http://127.0.0.1:8080/api/card/visit_card?host_card_id=29&card_id=1>

-   编辑名片缺少名片样式 `style_id`

    <http://127.0.0.1:8080/api/card/card_detail?host_card_id=48>

    ![alt text](image-18.png)

-   缺少添加名片标签
    ![alt text](image-15.png)

## 我的

-   消息通知 清除

    1. 缺少 清空评论的接口
       ![alt text](image-21.png)
