// 数据交互
const technology = () =>
    import('@/components/technology/technologyIndex');
// const sjjhMain = () =>
//     import('@/components/data-interactive/childs/index')

let technologyArr = [
    { //数据交互
        path: '/technology',
        component: technology,
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
export default technologyArr