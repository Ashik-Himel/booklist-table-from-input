const form = document.getElementById('form');
const tbody = document.getElementById('tbody');

form.addEventListener('submit', function() {
  let inputValue = document.getElementById('input').value;

  const row = document.createElement('tr');

  const xmark = document.createElement('i');
  xmark.classList.add('fa-solid');
  xmark.classList.add('fa-xmark');
  xmark.style.cursor = 'pointer';

  const td1 = document.createElement('td');
  if (tbody.childNodes.length === 0) {
    td1.innerText = 1;
  }
  else {
    td1.innerText = Number(tbody.lastChild.firstChild.innerText) + 1
  }
  row.appendChild(td1);

  const td2 = document.createElement('td');
  td2.innerText = inputValue;
  row.appendChild(td2);

  const td3 = document.createElement('td');
  td3.appendChild(xmark);
  row.appendChild(td3);

  document.getElementById('input').value = '';
  tbody.appendChild(row);

  row.lastChild.firstChild.addEventListener('click', function() {
    row.remove();

    let snValue = 1;
    tbody.childNodes.forEach(n => {
      n.firstChild.innerText = snValue;
      snValue++;
    })
  })
})