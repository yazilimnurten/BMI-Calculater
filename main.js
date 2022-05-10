function CalculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var result = weight / (Math.pow(height, 2) / 10000); /*math.pow karesini alır */
    document.getElementById('result').innerText = result.toFixed(2);
    if (result < 18.5) {
        document.getElementById('result-statu').innerText = "Biraz Kilo Almalısın";
        document.getElementById('result-statu').style.color = "#2196f3";
    }
    else if (result >= 18.5 && result < 25) {
        document.getElementById('result-statu').innerText = "normal";
        document.getElementById('result-statu').style.color = "yellow";
    }
    else if (result >= 25 && result < 30) {
        document.getElementById('result-statu').innerText = "Tam ideal";
        document.getElementById("result-statu").style.color = "#f56326";
    }
    else if (result > 30) {
        document.getElementById("result-statu").innerText = "Fazla Kilolu Kilo VER!!";
        document.getElementById("result-statu").style.color = "red";

    }
}
function Reset() {
    document.getElementById("weight").value = 0;
    document.getElementById("height").value = 0;
    document.getElementById("result").innerText = " ";
    document.getElementById("result-statu").innerText = " ";
}