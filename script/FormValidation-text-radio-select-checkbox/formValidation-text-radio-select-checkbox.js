angular.module('formValidationModule', [])
.controller('formValidationController',['$scope', function ($scope){
  $scope.enable = false;

  $scope.countries = [{
      code:"IND",
      name:"India"
  },
      {
          code:"Chain",
          name:"Chain"
      },
      {
          code:"Nepal",
          name:"Nepal"
      },
      {
          code:"Bangaladesh",
          name:"Bangaladesh"
      }
      ];

   /* $scope.model={
        country : {
            code:"Chain",
            name:"Chain"
        }
    }
*/

    $scope.model = {
        language:[]
    };

    $scope.language = [
        {
            name:"kannada",
            code:"1"
        },
        {
            name:"English",
            code:"2"
        },
        {
            name:"Hindi",
            code:"3"
        },
        {
            name:"Telugu",
            code:"4"
        }
    ];

    $scope.checkenable = true;
    $scope.requried = true;
    $scope.checkboxClick = function(val,index, code){
        console.log("langa", code);
        console.log("val", val);

      if(!val){
          console.log("vdghhhhhhhhhh",$scope.language.indexOf(code))
          //remove(code, $scope.model.language)
          $scope.model.language.splice(index ,1);
          $scope.requried = true;
          console.log("$scope.model.language>>val",$scope.model.language)
          if($scope.model.language.length<1){
              $scope.checkenable = true;
          }
          else{
              $scope.checkenable = false;
          }
      }
      else{
          $scope.requried = false;
          $scope.model.language.push(code);
          console.log("$scope.model.language>>",$scope.model.language)
          $scope.checkenable = false;
      }

     };


  $scope.submitCheck = function(formName){
      if(formName.$invalid){
          $scope.enable = true;
          console.log("final Model Value", $scope.model)
      }
      else{
          console.log("final Model Value", $scope.model)
      }

   }
}
]);
