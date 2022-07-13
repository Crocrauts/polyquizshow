function aggiungi(p,c) {
	var spazi = ''
	counter[c] += p;
	if (p==0) {
		document.getElementById("number"+c).innerHTML = '0000'
		counter[c]=0
	}
  else {
	if (counter[c] < 0) spazi += '-'
	if (Math.abs(counter[c]) < 10) spazi += '000'
	else if (Math.abs(counter[c]) < 100) spazi += '00'
	else if (Math.abs(counter[c]) < 1000) spazi += '0'
	else spazi += ''
	document.getElementById("number"+c).innerHTML = spazi + Math.abs(counter[c])
	}
}

