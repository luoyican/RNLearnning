/**
 * Created by luoyican on 2016/11/17.
 */
import Storage from 'react-native-storage';
import {AsyncStorage} from 'react-native';

var storage = new Storage({
    // 最大容量，默认值1000条数据循环存储
    size: 1000,

    // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
    // 如果不指定则数据只会保存在内存中，重启后即丢失
    storageBackend: AsyncStorage,

    // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
    defaultExpires: 1000 * 3600 * 24,

    // 读写时在内存中缓存数据。默认启用。
    enableCache: true,

    // 如果storage中没有相应数据，或数据已过期，
    // 则会调用相应的sync方法，无缝返回最新数据。
    // sync方法的具体说明会在后文提到
    // 你可以在构造函数这里就写好sync的方法
    // 或是写到另一个文件里，这里require引入
    // 或是在任何时候，直接对storage.sync进行赋值修改
    sync: {}

});

global.storage = storage;

// 使用key来保存数据。这些数据一般是全局独有的，常常需要调用的。
// 除非你手动移除，这些数据会被永久保存，而且默认不会过期。
storage.save({
    key: 'loginState',  // 注意:请不要在key中使用_下划线符号!
    rawData: {
        from: 'some other site',
        userid: 'some userid',
        token: 'some token'
    },

    // 如果不指定过期时间，则会使用defaultExpires参数
    // 如果设为null，则永不过期
    expires: 1000 * 3600
});
// 读取
storage.load({
    key: 'loginState',

    // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
    autoSync: true,

    // syncInBackground(默认为true)意味着如果数据过期，
    // 在调用sync方法的同时先返回已经过期的数据。
    // 设置为false的话，则始终强制返回sync方法提供的最新数据(当然会需要更多等待时间)。
    syncInBackground: true
}).then(ret => {
    // 如果找到数据，则在then方法中返回
    // 注意：这是异步返回的结果（不了解异步请自行搜索学习）
    // 你只能在then这个方法内继续处理ret数据
    // 而不能在then以外处理
    // 也没有办法“变成”同步返回
    // 你也可以使用“看似”同步的async/await语法

    this.setState({ user: ret });
});