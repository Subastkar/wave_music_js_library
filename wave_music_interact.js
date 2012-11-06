var wave_music = function(){
  BASE_URI = "http://rubyfloyd.r12.railsrumble.com"

  var getSongs = function(callback){
    $.getJSON(BASE_URI + "/api/songs",function(data){
      return callback(data);
    });
  };

  var getSong = function(id, callback){
    $.getJSON(BASE_URI + "/api/songs/" + id, function(data){
      return callback(data);
    });
  };

  var getPlaylists = function(callback){
    $.getJSON(BASE_URI + "/api/playlists", function(data){
      return callback(data);
    });
  };

  var getPlaylist = function(id, callback){
    $.getJSON(BASE_URI + "/api/playlists/" + id, function(data){
      return callback(data);
    });
  };

  var createPlaylist = function(data){
    $.ajax({
      type: "POST",
      url: BASE_URI + "/api/playlists",
      data: data
    }).done(function( msg ) {
      alert( "Data Saved: " + msg );
    });
  };

  var addSongs = function(id, data){
    $.ajax({
      type: "POST",
      url: BASE_URI + "/api/playlists/" + id + "/add_songs",
      data: data
    }).done(function( msg ) {
      alert( "Data Saved: " + msg );
    });
  };

  return {
   getSongs:       getSongs,
   getSong:        getSong,
   getPlaylists:   getPlaylists,
   getPlaylist:    getPlaylist,
   createPLaylist: createPlaylist, 
   addSongs:       addSongs
  };

};



var wm = new wave_music();
