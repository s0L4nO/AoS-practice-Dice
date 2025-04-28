const name1 = document.getElementById('playerName1');
const name2 = document.getElementById('playerName2');
const name3 = document.getElementById('playerName3');
const name4 = document.getElementById('playerName4');
const name5 = document.getElementById('playerName5');
const name6 = document.getElementById('playerName6');

//clear
document.getElementById('clearButton').addEventListener('click', (e)=>{
    name1.value = '';
    name2.value = '';
    name3.value = '';
    name4.value = '';
    name5.value = '';
    name6.value = '';
    document.querySelectorAll('.isCopied').forEach((x) => x.textContent = '');
    document.getElementById('teamRed').textContent = '';
    document.getElementById('teamBlack').textContent = '';
})

//copy
document.getElementById('copyButton1').addEventListener('click', (e) => {
    document.querySelectorAll('.isCopied').forEach((x) => x.textContent = '');
    const copyText = document.getElementById('playerName1').value;
    navigator.clipboard.writeText(copyText).then(() => {
        document.getElementById('1').textContent = 'Copied';
    });
});
document.getElementById('copyButton2').addEventListener('click', (e) => {
    document.querySelectorAll('.isCopied').forEach((x) => x.textContent = '');
    const copyText = document.getElementById('playerName2').value;
    navigator.clipboard.writeText(copyText).then(() => {
        document.getElementById('2').textContent = 'Copied';
    });
});
document.getElementById('copyButton3').addEventListener('click', (e) => {
    document.querySelectorAll('.isCopied').forEach((x) => x.textContent = '');
    const copyText = document.getElementById('playerName3').value;
    navigator.clipboard.writeText(copyText).then(() => {
        document.getElementById('3').textContent = 'Copied';
    });
});
document.getElementById('copyButton4').addEventListener('click', (e) => {
    document.querySelectorAll('.isCopied').forEach((x) => x.textContent = '');
    const copyText = document.getElementById('playerName4').value;
    navigator.clipboard.writeText(copyText).then(() => {
        document.getElementById('4').textContent = 'Copied';
    });
});
document.getElementById('copyButton5').addEventListener('click', (e) => {
    document.querySelectorAll('.isCopied').forEach((x) => x.textContent = '');
    const copyText = document.getElementById('playerName5').value;
    navigator.clipboard.writeText(copyText).then(() => {
        document.getElementById('5').textContent = 'Copied';
    });
});
document.getElementById('copyButton6').addEventListener('click', (e) => {
    document.querySelectorAll('.isCopied').forEach((x) => x.textContent = '');
    const copyText = document.getElementById('playerName6').value;
    navigator.clipboard.writeText(copyText).then(() => {
        document.getElementById('6').textContent = 'Copied';
    });
});

//Roll
document.getElementById('roll').addEventListener('click', (e) => {
    document.getElementById('teamRed').textContent = '';
    document.getElementById('teamRed').textContent = '';
    const players = document.querySelectorAll('.name');
    console.log(players);
    const red = [];
    const black = [];
    for(i = 0; i < 6; i++){
        if(red.length == 3){
            black.push(players[i].value);
        }else if(black.length == 3){
            red.push(players[i].value);
        }else{
            let dice = Math.random();
            if(dice < (1 /2)){
                red.push(players[i].value);
            }else{
                black.push(players[i].value);
            }
        }
    }
    console.log(red, black);
    document.getElementById('teamRed').textContent = red.join('\n');
    document.getElementById('teamBlack').textContent = black.join('\n');
})
