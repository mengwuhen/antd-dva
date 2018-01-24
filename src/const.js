export  const SliderArray = [
    {
        key: '1',
        title: '工作台',
        icon: 'coffee',
        subs: [{
            key: '11',
            title: '订单',
            url: '/media/order/account/list'
        },
        {
            key: '12',
            title: '自媒体账号',
            url: '/media/media/account/list'
        },
        {
            key: '13',
            title: '未回复咨询单',
            url: '/media/consult/noreply/list'
        },{
            key: '14',
            title: '我的报价',
            url: '/media/offer/list'
        }, {
            key: '15',
            title: '我的账号',
            url: '/media/my/account'
        }]
    }, {
        key: '2',
        title: '交易历史',
        icon: 'file-text',
        subs: [{
            key: '21',
            title: '全部订单',
            url: '/media/order/all/list'
        },{
            key: '22',
            title: '全部咨询单',
            url: '/media/consult/all/list'
        }]
    }, {
        key: '3',
        title: '财务明细',
        icon: 'pay-circle-o',
        subs: [{
            key: '31',
            title: '待收款明细',
            url: '/media/order/account/preReceivables/list'
        }, {
            key: '32',
            title: '已收款明细',
            url: '/media/finance/yetreceive/list'
        }, {
            key: '33',
            title: '待退款明细',
            url: '/media/order/wait/refund/detail'
        }, {
            key: '34',
            title: '已退款明细',
            url: '/media/finance/allback/list'
        }]
    }
]