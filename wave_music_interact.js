var wave_music = function(){
  BASE_URI = "http://wave_music.colimacolectivo.com";

  var logIn = function(email, password, callback){
    $.ajax({
      url:  BASE_URI + "/api/sessions",
      type: 'POST',
      data: {user_login: { email: email, password: password }},
      success: function(data){
        return callback(data);
      },
      error: function(data){
        return callback(data);
      }
    });
  };

  var logOut = function(id, callback){
    $.ajax({
      url: BASE_URI + "/api/sessions/" + id,
      type: 'DELETE',
      success: function(data){
        return callback(data);
      },
      error: function(data){
        return callback(data);
      }
    });
  }

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

  var createPlaylist = function(name, callback){
    $.ajax({
      type: "POST",
      url: BASE_URI + "/api/playlists",
      data: { name: name },
      success: function( data ){
        callback(data);
      },
      error: function ( data ){
        callback(data);
      }
    });
  };

  var addSongs = function(playlist_id, songs_id, callback){
    $.ajax({
      type: "POST",
      url: BASE_URI + "/api/playlists/" + playlist_id + "/add_songs",
      data: { id: playlist_id, songs: songs_id },
      success: function( data ){
        callback(data);
      },
      error: function ( data ){
        callback(data);
      }
    });
  };

  return {
   getSongs:       getSongs,
   getSong:        getSong,
   getPlaylists:   getPlaylists,
   getPlaylist:    getPlaylist,
   createPlaylist: createPlaylist, 
   addSongs:       addSongs,
   logIn:          logIn
  };

};



var wm = new wave_music();
