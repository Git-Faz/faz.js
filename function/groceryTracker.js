function addGrocery(item1, item2, item3) {
    item1= parseFloat(document.getElementById('grocery1').value);
    item2= parseFloat(document.getElementById('grocery2').value);
    item3= parseFloat(document.getElementById('grocery3').value);

    let result = item1 + item2 + item3;
    document.getElementById('result').innerText = `Total Grocery Amount: ${result}`;

}
