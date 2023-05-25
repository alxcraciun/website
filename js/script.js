window.onload = () => {
    var timeNow = new Date();
    var datetime = "Session Started at: "
        + timeNow.getDate()
        + "/" + (timeNow.getMonth() + 1) + "/"
        + timeNow.getFullYear() + " @ "
        + timeNow.getHours() + ":"
        + timeNow.getMinutes() + ":"
        + timeNow.getSeconds();
    localStorage.setItem('last_session', timeNow);
};

document.addEventListener('keydown', (event) => {
    console.log(`Key Pressed: ${event.key}`);
});
