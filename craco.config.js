/*
 * @Author: aycc
 * @Date: 2022-03-13 20:13:14
 * @LastEditors: aycc
 * @LastEditTime: 2022-03-13 20:13:15
 * @Description: file content
 * @FilePath: \my-app\craco.config.js
 */

const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};