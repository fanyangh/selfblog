// 数据交互
const demo = () =>
    import('@/components/demo/demoindex');
const demo1 = () =>
    import('@/components/demo/list/demo');
const demo2 = () =>
    import('@/components/demo/list/demo1');
const demo3 = () =>
    import('@/components/demo/list/demo2');
        

let demoArr = [
    { //数据交互
        path: '/demo',
        component: demo,
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: 'demo1',
                name: 'demo1',
                component: demo1,
                meta: {
                    requiresAuth: true
                }
            
            },
            {
                path: 'demo2',
                name: 'demo2',
                component: demo2,
                meta: {
                    requiresAuth: true
                }
            
            },
            {
                path: 'demo3',
                name: 'demo3',
                component: demo3,
                meta: {
                    requiresAuth: true
                }
            
            },

        ]
    },
]
export default demoArr