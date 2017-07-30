function birthdayCtrl($scope){

$scope.friends=[
  {name:'Hridyansh','birthday':"08/06"},
  {name:'Rishabh','birthday':"09/21"},
  {name:'Tarun','birthday':"09/25"},
  {name:'Sarthak','birthday':"10/12"},
  {name:'Prerit','birthday':"06/09"},
  {name:'Prakhar','birthday':"11/25"},
  {name:'Pranjal','birthday':"11/21"},
  {name:'Ashwini','birthday':"02/19"},
  {name:'Tanmay','birthday':"07/02"},
  {name:'Ishaan','birthday':"05/18"},
  {name:'Prateek','birthday':"01/10"},
  {name:'Prashant','birthday':"02/29"},
  {name:'Himanshu','birthday':"12/27"},
  {name:'Anant MK','birthday':"05/30"},
  {name:'Aviral','birthday':"05/01"},
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
