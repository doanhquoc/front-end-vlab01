import axios from "axios";

function check_axios () {

    var check = axios.get('http://127.0.0.1:8000/WorkInfo/')
        .then(function (check){
            console.log(check.data)
        })
        .catch(function (){
            console.log('lỗi')
        })
}
export default check_axios