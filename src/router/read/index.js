// 数据交互
const read = () =>
    import('@/components/read/readIndex');
// const sjjhMain = () =>
//     import('@/components/data-interactive/childs/index')

let readArr = [
    { //数据交互
        path: '/read',
        component: read,
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
export default readArr