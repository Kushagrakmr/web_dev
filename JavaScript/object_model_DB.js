var movies = [
  {
    title : "The Titanic",
    rating : 4.5,
    has_watched : true
  },

  {
    title : "Akira",
    rating : 3,
    has_watched : true
  },

  {
    title : "Boku Na Hero Academia",
    rating : 4.5,
    has_watched : false
  },

    {
    title : "Dragon Ball Super",
    rating : 4,
    has_watched : false
  }
]
movies.forEach(function(movie){
  var result = "You have ";
  if(movie.has_watched){
    result += "watched ";
  }
  else
  {
    result += "not watched ";
  }

  result += "\"" + movie.title + "\"";
  result += " - ";
  result += movie.rating;
  result += " stars."

  console.log(result)
})
