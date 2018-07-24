// 数据交互
const time = () =>
    import('@/components/time/timeIndex');
// const sjjhMain = () =>
//     import('@/components/data-interactive/childs/index')

let timeArr = [
    { //数据交互
        path: '/time',
        component: time,
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
export default timeArr