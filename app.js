const getPrimeNumbers = (maxNum, minNum = 0) => {
  const PrimeNumbers = minNum == 0 ? [0] : [];

  minNum = minNum < 2 ? 2 : minNum;

  for (let newMax = minNum; newMax <= maxNum; newMax++) {
    let isPrime = true;
    for (let num = 2; num < Math.floor(newMax / 2) + 1; num++) {
      const result = newMax / num;
      if (Math.round(result) === result) {
        isPrime = false;
      }
    }
    if (isPrime) {
      PrimeNumbers.push(newMax);
    }
  }
  return PrimeNumbers;
};

const $ = el => document.querySelector(el);

const showNums = nums => {
  const numsDiv = $(".nums .child");
  let html = ``;
  nums.forEach(num => {
    html += `<p class="num">${num}</p>`;
  });
  numsDiv.innerHTML = html;
};

$("form").addEventListener("submit", e => {
  const form = e.target;
  e.preventDefault();
  $(".nums .child").innerHTML = "";
  let { maxNum } = form;
  maxNum = Number(maxNum.value);
  let minNum = Number($("form").minNum.value);

  if (maxNum >= 0 && minNum < maxNum && minNum >= 0) {
    $(
      ".error"
    ).textContent = `veuillez entrer un entier naturel, par exemple: `;
    $(".error").classList.add("hide");
    showNums(getPrimeNumbers(maxNum, minNum));
  } else if (maxNum < 0 || minNum < 0) {
    $(
      ".error"
    ).textContent = `veuillez entrer un entier naturel, par exemple: `;
    const randomNum = Math.round(Math.random() * 20000);
    $(".error").textContent += `${randomNum}`;
    $(".error").classList.remove("hide");
    setTimeout(() => {
      $(".error").classList.add("hide");
      setTimeout(
        () =>
          ($(
            ".error"
          ).textContent = `veuillez entrer un entier naturel, par exemple: `),
        1000
      );
    }, 5000);
  }
});
$("form input").addEventListener("keyup", e => {
  const num = Number(e.target.value);
  if (e.keyCode === 13 && num !== Math.round(num)) {
    console.log(maxNum >= minNum);
    $(
      ".error"
    ).textContent = `veuillez entrer un entier naturel, par exemple: `;

    const randomNum = Math.round(Math.random() * 100000);
    $(".error").textContent += `${randomNum}`;
    $(".error").classList.remove("hide");
    setTimeout(() => {
      $(".error").classList.add("hide");
      setTimeout(
        () =>
          ($(
            ".error"
          ).textContent = `veuillez entrer un entier naturel, par exemple: `),
        1000
      );
    }, 5000);
  } else {
    $(".error-2").classList.remove("hide");
  }
});
