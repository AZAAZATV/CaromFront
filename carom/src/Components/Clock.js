import moment from 'moment';
import 'moment/locale/ko';

function Clock(){
setInterval(() => {
    const nowTime = moment().format('YYYY-MM-DD HH:mm:ss');
    console.log(nowTime);
}, 1);
}

export default Clock;