function compute() {
    // p = document.getElementById("principal").value;
    var amount_input = parseInt(document.getElementById("amount").value);
  
    var rate_input = parseInt(document.getElementById("rate").value);
  
    var time_input = parseInt(document.getElementById("time").value);
  
    var interest = (amount_input * rate_input * time_input) / 100;
    var total = interest + amount_input;
  
    if (amount_input < 1) {
      alert("Enter a positive number!");
      document.getElementById("amount").focus();
    }if(document.getElementById("amount").value.length == 0){
      alert("Enter a positive number!");
      document.getElementById("amount").focus();
    } else {
      document.getElementById("output_1").innerHTML = amount_input;
    }
    document.getElementById("output_4").innerHTML = rate_input;
    document.getElementById("output_2").innerHTML = interest;
    document.getElementById("output_3").innerHTML = total;
  
    let year = new Date().getFullYear();
    var current_year = year + time_input;
  
    document.getElementById("output_5").innerHTML = current_year;
  }