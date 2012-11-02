// var X = function(){

//   var getSongs = function(callback){
//     $.getJSON("/api/v1/asset/", function(data){
//       return callback(data);
//     });
//   };

//   return {
//     getSongs: function(){

//       getSongs(function(s){ 
//         this.songs = s;
//       });

//     }
//   };
// };

//var songs = new X().getSongs();

var X = function(){

  var getSongs = function(callback){
    $.getJSON("/api/v1/asset/", function(data){
      return callback(data);
    });
  };

  return {
   getSongs: getSongs
  };

};



var songs = new X();
