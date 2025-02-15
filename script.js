const tg = window.Telegram.WebApp;
tg.expand();
document.addEventListener("DOMContentLoaded", () => {
    const user = tg.initDataUnsafe?.user;
    document.getElementById("nickname").innerText = user ? user.first_name : "Игрок";
});
let balance = 0;
let energy = 2000;
document.getElementById("coin").addEventListener("click", () => {
    if (energy > 0) {
        balance += 2;
        energy -= 1;
        document.getElementById("balance").innerText = `${balance} VI`;
        document.getElementById("energy").innerText = `Энергия: ${energy}`;
        tg.HapticFeedback.impactOccurred("light");
    }
});
document.getElementById("marketBtn").addEventListener("click", () => {
    document.getElementById("game").classList.add("hidden");
    document.getElementById("market").classList.remove("hidden");
});
document.getElementById("referralBtn").addEventListener("click", () => {
    document.getElementById("game").classList.add("hidden");
    document.getElementById("referral").classList.remove("hidden");
});
document.getElementById("backToGame").addEventListener("click", () => {
    document.getElementById("market").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");
});
document.getElementById("backToGameRef").addEventListener("click", () => {
    document.getElementById("referral").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");
});