var academicPerfomance = {
  anna: 29 ,
  misha: 35,
  stepant: 1,
  elena: 99
};

var max = -Infinity;
var maxName = '';
for(var name in academicPerfomance) {
  if(max < academicPerfomance[name]) {
    max = academicPerfomance[name];
    maxName = name;
  }
}
console.log(maxName + ' : ' + max);