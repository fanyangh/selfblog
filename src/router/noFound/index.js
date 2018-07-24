// 数据交互
const noFound = () =>
    import('@/components/noFound/noFoundIndex');
// const sjjhMain = () =>
//     import('@/components/data-interactive/childs/index')

let noFoundArr = [
    { //数据交互
        path: '/noFound',
        component: noFound,
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
export default noFoundArr