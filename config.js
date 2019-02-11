var config = {};

/** config.mqtt = {
    host: 'localhost',
    port: 1883,
    qos: 0,
    retain: false
}; **/

/** config.amqp = {
    host: 'localhost',
    port: 5672,
    // username: 'guest',
    // password: 'guest',
    exchange: 'iota-exchange',
    queue: 'iotaqueue',
    options: {durable: true}
}; **/

/** config.http = {
    port: 7896
}; /**

config.iota = {
    //logLevel: 'DEBUG',
    //timestamp: true,
    /** contextBroker: {
        host: 'orion-cb',
        port: 1026
    }, **/
    /** server: {
        port: 4041
    }, **/
    //defaultResource: '/iot/d',
    /** deviceRegistry: {
        type: 'mongodb'
    }, **/    
    mongodb: {
        //host: 'root:mongodb@mongodb-rs-kubecity',
        //host: 'mongodb-rs-kubecity',
        username: 'root',
        password: 'mongodb'
        //port: 27017,
        //db: 'iotaul',
        //replicaSet: 'kubecity-rs'
    }, 
    types: {},
    //service: 'howtoService',
    //subservice: '/howto',
    //providerUrl: 'http://localhost:4041',
    deviceRegistrationDuration: 'P1Y',
    defaultType: 'Thing'
};


config.defaultTransport = 'MQTT';

module.exports = config;
