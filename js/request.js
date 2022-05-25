var baseUrl = "http://dev.icpdata.com/home/default/";
var RequestApi = function ({url,type, callback }) {
    $.ajax({
        url: `${baseUrl}${url}`,
        type: type,
        data: {},
        success: function(result) {  //这里就是我出错的地方
            callback(result);
        },
        error: function(error) {
            callback(error);
        }
    });
}
var getArrayValue = function (array) {
    var value = 0;
    for (var j = 0; j < array.length; j ++) {
        value += parseInt(array[j].value);
    }
    return value;
}

var getArrayColor = function () {
    var a = [
        "#aa1718",
        "#cc540c",
        "#ba8308",
        "#0bb56f",
        "#a30ea9",
        "#109a91",
        "#ba8308",
        "#109a91",
        "#4fae11",
        "#006ea6"
    ];
    var num = Math.random()*10;
    return a[Math.floor(num)];
}