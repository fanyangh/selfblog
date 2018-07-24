// 数据交互
const about = () =>
    import('@/components/about/aboutIndex');
// const sjjhMain = () =>
//     import('@/components/data-interactive/childs/index')

let aboutArr = [
    { //数据交互
        path: '/about',
        component: about,
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
export default aboutArr