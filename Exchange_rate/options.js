var basecoin = localStorage.basecoin;
basecoin = basecoin ? basecoin : 'CNY';
document.getElementById('basecoin').value = basecoin;
document.getElementById('save').onclick = function () {
    localStorage.basecoin = document.getElementById('basecoin').value;
    alert('保存成功,当前为基础币种为：' + localStorage.basecoin);
}