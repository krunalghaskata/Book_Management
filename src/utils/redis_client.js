const Redis = require('ioredis')
const CONFIG = require('../config/config')

const redisOption = {
    port: CONFIG.REDIS.REDIS_PORTS,
    HOST: CONFIG.REDIS.REDIS_HOSTS
}

const redisClient = new Redis(redisOption)

const setCacheData = async (key, value) => {
    const Data = await redisClient.set(key, JSON.stringify(value))
    console.log(` cache data write ${key}`)
    return Data;
}

const getCacheData = async (key) => {
    const parserData = await redisClient.get(key);
    console.log(`get hit data ${key}`);
    return JSON.parse(parserData)
}


const purgeCacheByKey = async (key) => {
    const data = await redisClient.del(key);
    if (data) {
        console.log(`Purge All key for ${key}`); ``
        return data;
    }
    return null;
};

module.exports = {
    redisClient,
    setCacheData,
    getCacheData,
    purgeCacheByKey

}