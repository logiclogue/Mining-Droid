var seedRand = function(n)
{
    return parseInt(CryptoJS.MD5(n + ""), 16) / parseInt("ffffffffffffffffffffffffffffffff", 16);
};