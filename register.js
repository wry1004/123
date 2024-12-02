function handleSubmit(event){
    event.preventDefault();
    // 取得輸入資料
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // 將資料存入 local Storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
   
    // 將資料存入 session Storage
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);
    // 將資料存入 cookie
    document.cookie = "username=" + username;
    document.cookie = 'password=' + password;

    window.location.href = 'index.html';
}
const form = document.getElementById('login');
form.addEventListener('submit',handleSubmit);  
