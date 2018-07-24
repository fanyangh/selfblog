// 数据交互
const  life= () =>
    import('@/components/life/lifeIndex');
// const sjjhMain = () =>
//     import('@/components/data-interactive/childs/index')

let lifeArr = [
    { //数据交互
        path: '/life',
        component: life,
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
export default lifeArr