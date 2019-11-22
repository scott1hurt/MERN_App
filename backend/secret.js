const secrets = { 
    //The URL that we use to connect to the MongoDB Atlas Cluster
    dbUrl: 'mongodb+srv://Scott1hurt:usahungary50@cluster0-ja6jg.mongodb.net/test?retryWrites=true&w=majority'
};

const getSecret = key => secrets[key];

module.exports = getSecret;
