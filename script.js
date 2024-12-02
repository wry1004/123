function handleSubmit(event) {
    // 避免瀏覽器重新整理
    event.preventDefault();
    // 擷取 localStorage 的資料
    const ul = localStorage.getItem('username');
    const pl = localStorage.getItem('password');
    // 擷取 sessionStorage 的資料
    const us = sessionStorage.getItem('username');
    const ps = sessionStorage.getItem('password');
    // 擷取 cookie 的資料
    // const uc = document.cookie.split(";")[0].slice(9);
    // const pc = document.cookie.split(";")[1].slice(10);
    // 獲得輸入的值
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === us && password === ps){
        window.location.href = 'welcome.html';
    }
    else if(username === us && password !== ps){
        alert("密碼錯誤");
    }
    else{
        alert("帳號不存在，請先註冊");
    }
}
const form = document.getElementById('login');
form.addEventListener('submit',handleSubmit);
