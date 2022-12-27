import React from "react";
import './TermsOfUse.scss';

function TermsOfUse() {
  return <div className="TermsOfUse">
    <h2>개요</h2>
    <ol>
      <li>동일한 명의으로 계정을 생성하는 행위가 발각될 경우 해당 명의으로 된 모든 계정을 삭제 조치하고, 해당 명의로 가입이 불가합니다.</li>
      <li>비정상적인 방법으로 서버에 무리를 가할 경우, 해당 ip를 차단합니다.</li>
    </ol>
  </div>;
}

export default TermsOfUse;