$(document).ready(function(){
   var balance = 0;
   var savbalance = 0;
   var deposit = 0;
   var withdraw = 0;
   var savdeposit = 0;
   var savWithdraw = 0;
    // deposits #amount1 to #balance1 & is stored in var deposit
    $('#deposit1').click(function(){
      deposit = $('#amount1').val();
      balance = balance + parseInt(deposit);
      deposit = 0;
      $('#balance1').html(balance);
//      console.log("balance = "+balance);
      })
      //withdraws amount and updates balance
      $('#withdraw1').click(function(){
         withdraw = $('#amount1').val();
         if (balance - withdraw < 0) {
//-------------------------------------
            var totfunds = balance + savbalance;
            if (totfunds - withdraw < 0) {
              alert("you dont have enough funds!!");
            } else {
              balance = 0;
              savbalance = totfunds - withdraw;
            }
            $('#balance1').html(balance);
            $('#balance2').html(savbalance);
//-------------------------------------
//            alert("you dont have enough funds!!");
         } else {
            balance = balance - parseInt(withdraw);
         }
         withdraw = 0;
         $('#balance1').html(balance);
 //        console.log("balance = "+balance);
        }) 
      //deposits into savings
      $('#deposit2').click(function(){
        savdeposit = $('#amount2').val();
        savbalance = savbalance + parseInt(savdeposit);
        savdeposit = 0;
        $('#balance2').html(savbalance);
        })
      //withdraws amount and updates savings
      $('#withdraw2').click(function(){
         savwithdraw = $('#amount2').val();
          if (savbalance - savwithdraw < 0) {
            alert("you dont have enough funds!!")
         } else {
            savbalance = savbalance - parseInt(savwithdraw);
         }
         savwithdraw = 0;
         $('#balance2').html(savbalance);
 //        console.log("balance = "+savbalance);
        }) 
    })