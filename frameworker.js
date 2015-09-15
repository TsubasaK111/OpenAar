(function(){
  var app = angular.module("frameworker",[]);

  app.directive('frameworkTab', function(){
    return{
      restrict:'E',
      templateUrl: 'framework-tab.html',
      controller: function(){
        this.newFramework = {};
        this.library = defaultLibrary;

        this.addFramework = function(){
          this.newFramework.dateCreated = Date.now();
          this.newFramework.fields = this.newFramework.fields.split(", ");
          this.library.push(this.newFramework);
          console.log(this.newFramework);
          console.log(this.library);
          this.newFramework = {};
        };

        this.newFrameworkIsEmpty = function(){
          if(this.newFramework.name === undefined && this.newFramework.purpose === undefined && this.newFramework.fields === undefined && this.newFramework.author === undefined){
            return true;
          } else {
            return false;
          };
        };
      },
      controllerAs: "fwCtrl"
    };
  });

  var defaultLibrary = [{
    name:'SMEAC',
    context:'military',
    purpose:'Mission planning framework for the US military, including the US Army and US Marine Corps.',
    fields:['Situation', 'Mission', 'Execution', 'Administration', 'Communication/Command'],
    chosen: false,
    author: 'Tsubasa@OpenAar'
  }, {
    name: 'MIST',
    context:'medical',
    purpose:"Reporting framework of casualties' vital information to the next chain of care.",
    fields:['Mechanism of Injury', 'Injury', 'Signs', 'Treatments'],
    chosen: false,
    author: 'Tsubasa@OpenAar'
  }, {
    name: 'METT-TCR',
    context:'military',
    purpose:"Intelligence Collection planning framework for the US military, used in conjunction with SMEAC.",
    fields:['Mission','Execution','Time','Terrain','T...','Communications/Command','Retreat Conditions'],
    chosen: false,
    author: 'Tsubasa@OpenAar'
  }];

})();
