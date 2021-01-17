module.exports={
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'common': '@/common',
                'store': '@/store',
                'views': '@/views',
                'network': '@/network'
            }
        }
    }
}