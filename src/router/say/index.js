// 数据交互
const say = () =>
    import('@/components/say/sayIndex');
// const sjjhMain = () =>
//     import('@/components/data-interactive/childs/index')

let sayArr = [
    { //数据交互
        path: '/say',
        component: say,
        meta: {
            requiresAuth: true
        },
        // children: [
        //     {
        //         path: '',
        //         name: 'sjcx',
        //         component: sjcx,
        //         meta: {
        //             requiresAuth: true
        //         }
            
        //     }
        // ]
    },
]
export default sayArr