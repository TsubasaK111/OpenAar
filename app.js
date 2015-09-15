(function(){

  var app = angular.module('newAar', ["frameworker"]);

// lessons learned:
// 1. dependencies are module names, NOT filenames. (do not append .js at the end!)
// 2. objects need to be placed in the module that uses the object.
// 3. use Angular.js (not minified) for human readable error reports.

  app.controller("MissionController", function() {
    this.mission = defaultMission;
  });

  app.controller("TabController", function() {
    this.tab = 1;
    this.isSet = function(checkTab) {
      return this.tab === checkTab;
    };
    this.setTab = function(setTab) {
      this.tab = setTab;
    };
  });

  app.controller('TestController', function(){
      this.whatTimeIsIt = Date.now().toString();
      this.boolean = true;

      alert('Great Tomfooleries! testCtrl is working!');
      alert('time now is: ' & this.whatTimeIsIt);
      console.log('time now is:' & this.whatTimeIsIt);
  });

  app.directive("assessTab",function(){
    return{
      restrict: "E",
      templateUrl: "assess-tab.html"
    };
  });

  var defaultMission = {
    Plan:{
      BAR: {content:'',dynamic:''},
      Situation: {
        Enemy:'',
        Friendly:'',
        Environment:''
      },
      Mission: {
        Summary:'',
        Tasks:'',
        Purpose:'',
        Intent:'',
        EndState:''
      },
      Execution: {
        Concept:'',
        Movement:'',
        Attack:'',
        Tasking:'',
        Support:'',
        Communications:''
      },
      Administration: {
        content:''
      },
      Communications: {
        content:''
      }},
    Execute: {
      EventLogger:[{event:'',time:''}]
    },
    Assess: {
      ActualResults:['',''],
      Success:[true,true],
      Why:['',''],
      Verdict:[false,false],
      VerdictText:['','']
    }
  };


})();
