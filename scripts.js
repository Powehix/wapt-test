//переменная для сброса поля после вычисления результата
var flag = false;

//отображение значения на экране
function dis(val)
{
    if (flag)
    {
        clr();
        flag = false;
    }
    document.getElementById("result").value+=val
}
  
//вычисление и отображение результата
function solve()
{
    let x = document.getElementById("result").value
    let y = eval(x)
    document.getElementById("result").value = y
    flag = true;
}
  
//очистка поля
function clr()
{
    document.getElementById("result").value = ""
}