function temp() {
  let input = document.querySelector('#input');
  let temperature = input.value;
  if (temperature === '') {
    alert("Input is required.");
		return;
  }
  alert("It is currently " + temperature + " degrees °C outside right now!");
}
