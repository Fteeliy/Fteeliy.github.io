function plusAndReset(whoScore, pannel, reset) {
	let score = 0;

	pannel.forEach((btn, i) => {
		['touchend', 'click'].forEach(function(k) {
			btn.addEventListener(k, function () {
				if (score < 99) {
					switch (i) {
						case 0: {
							score += 1;
							break;
						}
						case 1: {
							score += 2;
							break;
						}
						case 2: {
							score += 3;
							break;
						}
					}
					whoScore.textContent = score;
				}
			})

			reset.addEventListener(k, function () {
				whoScore.textContent = 0;
				score = 0;
			});
		})
	});
}

plusAndReset(homeScore, homeBtns, resetHome);
plusAndReset(guestScore, guestBtns, resetGuest);
