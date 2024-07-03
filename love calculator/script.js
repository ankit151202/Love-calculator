document.getElementById('calculateBtn').addEventListener('click', function() {
    const yourName = document.getElementById('yourName').value.trim();
    const partnerName = document.getElementById('partnerName').value.trim();

    if (yourName === '' || partnerName === '') {
    alert('Please enter both names.');
    return;
    }

    const lovePercentage = calculateLove(yourName, partnerName);
    const resultText = `${yourName} and ${partnerName} love each other ${lovePercentage}%!`;

    document.getElementById('result').textContent = resultText;
});

function calculateLove(name1, name2) {
    const loveSeed = name1.toLowerCase() + name2.toLowerCase();
    let loveScore = 0;

    for (let i = 0; i < loveSeed.length; i++) {
    loveScore += loveSeed.charCodeAt(i);
    }

    return loveScore % 101;
}