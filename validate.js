function call()
{
  var total=5;
  var score=0;
  var q1=document.forms["quiz-form"]["q1"].value;
  var q2=document.forms["quiz-form"]["q2"].value;
  var q3=document.forms["quiz-form"]["q3"].value;
  var q4=document.forms["quiz-form"]["q4"].value;
  var q5=document.forms["quiz-form"]["q5"].value;
  var results=['a','a','c','b','b'];
  for(var i=1;i<=total;i++)
  {
      if(eval('q'+i)==null || eval('q'+i)=='')
      {
          alert("You have not answered question "+i);
          return false;
          
      }
  }
  for(var i=1;i<=total;i++)
  {
      if(eval('q'+i)==results[i-1])
      {
          score+=1;
      }
  }
 // alert(score);
  document.getElementById('score').innerHTML=score+'\\'+total;
  //alert(score);
 return false;

    

}