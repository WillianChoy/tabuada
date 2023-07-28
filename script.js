function gerar() {
  var num = document.getElementById('txtnum');
  var res = document.getElementById('res');
  if (num.value.length == 0) {
    alert('[ERRO] Impossivel calcular. Digite um valor válido!');
  } else {
    var n = Number(num.value);
    res.innerHTML = '';

    for (c = 1; c <= 10; c++) {
      var item = document.createElement('option');
      item.text = `${c} x ${n} = ${c * n}`;
      res.value = `tab${c}`;
      res.appendChild(item);
    }
  }
}
