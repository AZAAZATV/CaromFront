import React from "react";
import './TermsOfUse.scss';

function TermsOfUse() {
  return <div className="TermsOfUse">
    <h2>개요</h2>
    <ol>
      <li>동일한 명의으로 계정을 생성하는 행위가 발각될 경우 해당 명의으로 된 모든 계정을 삭제 조치하고, 해당 명의로 가입이 불가합니다.</li>
      <li>비정상적인 방법으로 서버에 무리를 가할 경우, 해당 ip를 차단합니다.</li>
      <li>당구장 이용 후, 기구를 정리하고 퇴실하십시오.</li>
      <li>당구장 이용 중 기구를 파손할 경우 본 위원회는 책임을 지지 않습니다.</li>
      <li>당구장 이용 신청은 한 곳만 가능합니다.</li>
    </ol>
  </div>;
}

export default TermsOfUse;