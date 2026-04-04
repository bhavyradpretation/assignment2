function loadData() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      for (var i = 0; i < data.length; i++) {
        setTimeout(function() {
          document.getElementById("data").innerHTML += "<p>" + data[i].name + "</p>";
        }, 1000);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
}
