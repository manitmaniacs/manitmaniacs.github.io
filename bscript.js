function birthdayCtrl($scope){

$scope.friends=[
  {name:'Hridyansh','birthday':"08/06"},
  {name:'Rishabh','birthday':"09/21"},
  {name:'Tarun','birthday':"09/25"},
  {name:'Sarthak','birthday':"10/16"},
  
  ]
  
  $scope.friends.forEach(function(data){
      var day = data.birthday.split("/")
      var currentYear = new Date().getFullYear();
      var birthdayDate = new Date(currentYear, day[0] - 1, day[1])
      var now = new Date().valueOf();
      if (birthdayDate.valueOf() < now){ 
          birthdayDate.setFullYear(currentYear+1)
      }
      data.fromNow = birthdayDate.valueOf() - now;
  })
}
