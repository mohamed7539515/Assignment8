

function quot(){
    var quote =["“Be yourself; everyone else is already taken.” ","“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ","“So many books, so little time.”",
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.” ",
    "“You only live once, but if you do it right, once is enough.” ","“If you tell the truth, you don't have to remember anything.” ","“It is better to be hated for what you are than to be loved for what you are not.” "];
    var userName =["― Oscar Wilde ","― Albert Einstein ","― Frank Zappa","― Bernard M. Baruch ","― Mae West","― Mark Twain ","― Andre Gide, Autumn Leaves "]
    var num =Math.floor(Math.random()*quote.length)
    document.getElementById("quote").innerHTML=(quote[num]);
    document.getElementById("user").innerHTML=(userName[num]);
    
}
