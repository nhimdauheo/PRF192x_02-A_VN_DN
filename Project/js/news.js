$(document).ready(function () {
  $('#load').show()
  fetch('https://gnews.io/api/v4/top-headlines?&token=aaa478f869a1e218ad9879689240ccf2&lang=en')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (let i = 0; i < data.articles.length; i++) {
        let title = data.articles[i].title
        let description = data.articles[i].description
        let content = data.articles[i].content
        let url = data.articles[i].url
        let image = data.articles[i].image
        let publishedAt = data.articles[i].publishedAt
        var obj = '<div class="row m-auto"><div class="col-lg-4 "><img src="'+image+'" style="width: 100%;"></div><div class="col-8"><h2><a href='+url+' target="_blank">'+title+'</a></h2><p>'+publishedAt+'</p><p>'+content+'</p><p>'+description+'</p></div></div><br><br>';
        $('#list').append(obj)
        
      }
      $('#load').hide()
    });

  $("#search").click(function(){
    var searchNews = $('#searchNews').val(); 
    var key = "https://gnews.io/api/v4/search?q="+searchNews+"&token=aaa478f869a1e218ad9879689240ccf2&lang=en"
    $('#load').show()
      fetch(key)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          console.log(data);
          $('#list').html('')
          for (let i = 0; i < data.articles.length; i++) {
            let title = data.articles[i].title
            let description = data.articles[i].description
            let content = data.articles[i].content
            let url = data.articles[i].url
            let image = data.articles[i].image
            let publishedAt = data.articles[i].publishedAt
            var obj = '<div class="row m-auto"><div class="col-lg-4 "><img src="'+image+'" style="width: 100%;"></div><div class="col-lg-8"><h2><a href='+url+' target="_blank">'+title+'</a></h2><p>'+publishedAt+'</p><p>'+content+'</p><p>'+description+'</p></div></div><br><br>';
            $('#list').append(obj)
          } 
          $('#load').hide()
      });
  })    
})