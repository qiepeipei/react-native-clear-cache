/**
 * Created by qiepeipei on 17/6/22.
 */
'use strict';
import React, { PropTypes, Component } from 'react';
import {
    DeviceEventEmitter,
    NativeModules,
    Platform,
    NativeAppEventEmitter,
    AppState
} from 'react-native'

var ClearCacheModuleObj = NativeModules.ClearCacheModule;

class clear{

constructor () {
}

getCacheSize(callBack){

    ClearCacheModuleObj.getCacheSize(callBack);

}

runClearCache(callBack){

    ClearCacheModuleObj.runClearCache(callBack);

}


}
export default new clear();

