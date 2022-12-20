import React from "react";
import './Rule.scss';

function Rule() {
  return <div className="Rule">
    <h1>당구 규칙(위치, 배치, 파울 규정)</h1>
    <div className="iframe">
      <iframe src="https://www.youtube.com/embed/Yyfrxv4HaxY"
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
      clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
      <span className="gray">당구 규칙</span>
    </div>
    <div>
      <h2>당구 경기에서 공격권을 정하는 뱅킹(Cushion draw, Banking) 관련 규칙</h2>
      <div>
        <img src="http://www.danggubaksa.com/wp-content/uploads/2021/01/billiard_table_spot_name_800.png" alt="설명" />
        <span>공의 위치, 스팟, 레일</span><br /><br />
      </div>
      <span>선수들은 풋 레일(foot rail)을 향해 뱅킹을 시작하며,
        큐볼을 헤드레일에 가장 가깝게 멈추게 한 선수가 <b>초구 선택권</b>을 가진다.
        만약 어느 공이 헤드 레일에 가까운지를 육안으로 판별할 수 없으면, 다시 뱅킹을 한다.</span><br /><br />
      <span>공이 굴러가는 도중에 서로 맞닿는 경우 세로 경계선인 롱 스트링(long string)을 넘긴 선수는 공격권(초구 선택권)을 잃는다.
        만약 어느 공이 롱 스트링을 넘었는지 육안으로 판별 할 수 없다면 재 뱅킹한다.
        큐볼이 빨간 공을 건드리는 실수를 한 선수 또한 공격권(초구 선택권)을 잃는다.</span><br /><br />
    </div>
    <h2>초구(Serve) 배치 및 공략 관련 규정</h2>
    <div>
      <div>
        <img src="http://www.danggubaksa.com/wp-content/uploads/2021/01/4ball_starting_position_800.png" alt='사구 설명' />
        <span>4구 초구 배치</span><br /><br />
      </div>
      <h2>초구 배치시 공의 위치</h2>
      <span>① 빨간공 – 풋스팟 지점. the red ball on the top spot<br />
        ② 노란공 – 헤드스팟. the white ball of the partner on the bottom spot<br />
        ③ 흰공 – 두개의 사이드 스팟 중에서 선수가 원하는 지점.the second white ball – that of the player – any way the player wants on one of the two starting spots.
      </span><br /><br />
      <span>
        초구 공격자는 흰공으로 경기를 해야하며, 첫 득점은 빨간공에 대한 직접공격으로 이루어져야 한다.
        The player who starts the first inning of a match plays with the white ball. The starting cannon must be played by direct attack on the red ball
      </span>
    </div>
    <div>
      <h2>득점 (Cannon) 으로 인정되는 경우</h2>
    </div>
  </div>;
}

export default Rule;