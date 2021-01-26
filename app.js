function designate(a)
{
    forms.display.value=forms.display.value+a;
}

function del()
{
    var  clear=forms.display.value;
    forms.display.value=clear.substring(0,clear.length-1);
}
function ac()
{
    forms.display.value="";
}
function equal()
{
    forms.display.value=eval(forms.display.value);
}

function sqrt()
{
    var res=forms.display.value;
    var store=Math.sqrt(res);
    forms.display.value=store;
}

function per()
{
    var percentage=forms.display.value;
    var temp=eval(percentage);
    var res2= temp*100 +"%";
    forms.display.value=res2;
}

function fact()
{
    var x=forms.display.value;
    let ans=1;
    if (x == 0 ||x == 1) 
    {
        ans= 1;
    }
  
    else {
        for(var i=x;i>=1;i--)
        {
            ans=ans*i;
        }
    }
    forms.display.value=ans;
}

function rad()
{
    var rad=forms.display.value;
    var  res4=(rad*180)/3.14;
    forms.display.value=res4;
}
function square()
{
    var sq=forms.display.value;
    var res5=sq*sq;;
//    return res5;
    forms.display.value=res5;
}

function logarithm()
{
    var pp=forms.display.value;
    var res=Math.log10(pp);
    forms.display.value=res;
}
function lan()
{
    var pp=forms.display.value;
    var res=Math.log(pp);
    forms.display.value=res;

}
function pi()
{
    var pp=forms.display.value;
     var res=Math.PI*pp;
     forms.display.value=res;
  
}
function sine()
{
    var pp=forms.display.value;
     var res=Math.sin(pp);
     forms.display.value=res;
}
function cos()
{

    var pp=forms.display.value;
     var res=Math.cos(pp);
     forms.display.value=res;
}
function tan()
{

    var pp=forms.display.value;
     var res=Math.tan(pp);
     forms.display.value=res;
}