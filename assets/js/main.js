var  n=prompt ("Eded daxil edin")
if (n>99 && n<1000) {
var t=n%10
var o=((n-t)%100)/10
var a=(o*10)+t
var y=(n-a)/100
if (t==o && t==y && y==o)
{
    alert ("Beraberdir")
}
else if (t==y) {
    alert ("Onluq ferqlidir")
}
else if (t==o) {
    alert ("Yuzluk ferqlidir")
}
else if (o==y) {
    alert ("Teklik ferqlidir")
}
else {
    alert ("Beraber deyil")
}
}
else {

    alert ("3 reqemli eded daxil edin")
}