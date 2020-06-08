import React from "react";
import ReactDOM from "react-dom";

export default class Image extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image
                source={{URL:'https://www.google.com/search?q=octopus%20high%20heels&tbm=isch&hl=en&hl=en&safe=active&safe=active&tbs=rimg%3ACVVdztTSmacCImB3aefWjyuE9W0ZxCRsDkBPTD5wBMAgbxvj7VWTuGOsstCSrB17wR8J0K5MN03lQvsnvgk971YpLNtkGyaWGCCLn6SW842lbOQyFxi9dm_1g6ZWkC04C1yrU6OvyTBDWd04qEgl3aefWjyuE9RFc7cLcn6nGdioSCW0ZxCRsDkBPEdrcQEGE7ucFKhIJTD5wBMAgbxsRpmM58q45D8QqEgnj7VWTuGOsshHB_1zHlVgRXhyoSCdCSrB17wR8JEWVbmvtS_1g3sKhIJ0K5MN03lQvsRjo5imuXl4-gqEgknvgk971YpLBGYrx7-Zny-HyoSCdtkGyaWGCCLEcpufx9pWrm2KhIJn6SW842lbOQRyOmE3uHeja4qEgkyFxi9dm_1g6RHNnJd2C-t9NyoSCZWkC04C1yrUEclk3h-VlYU6KhIJ6OvyTBDWd04RNOBTyo4Xy2RhccO0NBQ0ohY&rlz=1C1SQJL_enUS859US859&ved=0CBwQuIIBahcKEwiAr6af8-HpAhUAAAAAHQAAAAAQCA&biw=1349&bih=625'}}
                />
            </View>
 
        );
    }
}

export default Image;
