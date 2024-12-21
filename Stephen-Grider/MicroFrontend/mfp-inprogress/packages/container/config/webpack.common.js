module.exports ={
    module:{
        rules:[
            {
                test:/\.js$/,
                excludes:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env','@babel/preset-react'],
                        plugins:["@babel/plugin-transform-runtime"]
                    }
                }
            }
        ]
    }
}