// 数据交互
const index = () =>
    import('@/components/index/index');
// const sjjhMain = () =>
//     import('@/components/data-interactive/childs/index')

let indexArr = [
    { //数据交互
        path: '/',
        component: index,
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
export default indexArr