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
      <span>공을 치는 과정에 파울이 없어야 하며, 큐볼과 오브젝트볼의 접촉이나 레일터치를 가시적으로 확인할 수 있어야 한다는 전제가 따른다.
        큐볼이 세 번째 레일과 오브젝트볼2를 동시에 맞히거나, 오브젝트볼2와 큐볼의 최종 진로를 가지고도 판정이 애매한 경우는 득점으로 인정하지 않는다.
        레일터치의 접점은 하나의 레일에 편중되어 있어도 유효하나, 큐볼이 레일을 타고 흘러서 진행하는 경우는 한 번의 레일터치로 판정한다.
        의도했건 의도하지 않았건 오브젝트볼에 의해 큐볼의 진로가 달라지는 키스kiss는 그대로 인정한다.</span>
    </div>
    <h1>재배치해야하는 경우와 재배치방법</h1>
    <div>
      <h2>1. 붙은 공 (Frozen)의 처리</h2>
      <span>① 큐볼이 두 공 중 하나 또는 다른 두 공과 붙게 되면 모든 종류의 경기에서 선수의 권리는 다음과 같다.</span><br />
      <ul>
        <li>심판에게 공을 스팟 위에 재배치할 것을 요구하거나</li>
        <li>붙지 않은 공을 향하여 뒤쪽의 쿠션을 향하여 진행시키거나</li>
        <li>최초 진행 방향이 붙어있는 공쪽으로 진행하지 않는다는 조건하에 찍어치기를 구사할 수 있다. 붙은 공이 저절로 움직인 경우는 파울이 아니다.</li>
      </ul>
      <h2>2. 당구대 밖으로 나간 공 (balls outside,점프볼)은 재배치한다.</h2>
      <span>② 공이 프레임에서 떨어지거나 프레임의 재질에 닿으면, 공이 당구대에서 튀어나온 것으로 간주된다.</span><br /><br />
      <span>③ 만약 공이 프레임에 닿은 후 레일 안쪽 경기구역으로 다시 돌아올 경우 심판은 경기구역 안쪽의 공 배치에 영향을 미치지 못하도록 막아야 한다.
        이 경우 경기구역 안쪽의 공 배치에 영향을 미친다면 최대한 기존 배치에 근접하게 되돌린 후에 시합을 재개해야 한다.</span>
      <h2>3. 재배치 방법</h2>
      <img src="http://www.danggubaksa.com/wp-content/uploads/2021/01/billiards_ball_reset_800.png" alt="재배치" /><br /><br />
      <span>➣ 1쿠션에 관해서는 세 개의 공이 최초 초구(serve)공격 위치에 놓여진다.<br />
        ➣ 3쿠션의 경우는 붙은 공들만 스팟에 재배치한다.</span>
      <ul>
        <li>빨간공은 풋스팟</li>
        <li>자기차례의 선수의 큐볼은 헤드 스팟</li>
        <li>상대방의 큐볼은 당구대의 센터 스팟</li>
        <li>내정된 스팟이 점유되어 있거나 가려져 있는 경우는 점유하고 있는 공이 가야 할 위치로 놓여진다.</li>
      </ul>
    </div>
    <h1>당구경기의 파울(Fouls) 관련 규정</h1>
    <span>파울을 범한 선수는 공격권을 잃는다 (상대 선수에게 넘어간다). There is a foul and one has to quit.</span>
    <ol>
      <li>스트로크 중에 하나나 여러 개의 공이 당구대에서 튀어나오는 경우(balls outside:점프볼)
        If during the execution of the stroke one or several balls bound out of the billiard. (indicated by “balls outside”)</li>
      <li>세 개의 공이 정지되어 있기 전에 선수가 샷을 한 경우(balls in motion:움직이는 공)
        If the player plays before the three balls are at rest (indicated by “balls in motion”)</li>
      <li>선수가 경기를 하기 위해서 큐의 가죽팁이 아닌 다른 부분을 사용한 경우(leather tip)
        If the player uses another part of the cue than the leather tip in order to play (indicated by “leather tip”)</li>
      <li>선수가 큐, 손 또는 다른 물건으로 공을 건드린 경우(touched)
        If the player, except the attack of his ball in order to execute the stroke, touches any of the balls with part of the cue, with the hand or with any other object (indicated by “touched”)</li>
      <li>접촉된 공은 원래 있던 자리에 배치한다.
        In such a case the touched ball remains at the place which he occupies.</li>
      <li>심판의 동의 혹은 허락없이, 선수가 공을 건드리거나 옮긴 경우(touched)
        If the player touches or shifts a ball in order to remove a strange object which is attached to it instead of demanding that the arbiter does it (indicated by “touched”)</li>
      <li>스트로크로 인해서 공이 직접적으로 옮겨진 것이 아닌, 선수가 직·간접적인 방법으로 공을 옮긴 경우(touched)
        If the player shifts a ball by means of a direct or indirect contact without the shifting being the direct consequence of the execution of the stroke (indicated by “touched”)</li>
      <li>선수가 계속 공을 미는 경우 (pushed through:밀어내기)
        If the player pushes through (indicated by “pushed through”). There is a pushing through:</li>
      <li>① 가죽팁이 굴러가고 있는 공을 여러번 건드린 경우
        as soon as the leather tip comes several times into contact with the ball set in motion
        ② 큐볼이 두 번째 공을 건드린 순간까지도 가죽팁이 큐볼에 닿아있는 경우
        as soon as the leather tip is still in contact with the cue-ball at the moment where it touches the second ball
        ③ 큐볼이 쿠션에 맞는 순간까지도 가죽팁이 큐볼에 닿아있는 경우
        as soon as the leather tip is still in contact with the cue-ball at the moment where it touches the cushion</li>
      <li>선수가 큐볼을 타구하는 순간에 한발이 바닥에 닿아있지 않은 경우(foot not on the floor) – 특수한 신발은 허용되지 않는다. If at the moment where the player touches his ball he does not touch the floor with at least one foot (indicated by “foot not on the floor”). The use of special shoes is not admitted.</li>
      <li>선수가 경기장소 표면 위, 쿠션 위 혹은 틀 위에 보일만한 마크를 한 경우(marked, 표식)
        If the player draws visible marking points on the playing surface, on the cushion or on the frame (indicated by “marked”)</li>
      <li>이닝 중 선수가 자신의 공을 가지고 경기를 하는 것이 아니라고 확인된 경우(wrong ball, 오구)
        If during the inning or in the course of a series the referee states that the player does not play with his ball (indicated by “wrong ball”)</li>
      <li>심판의 요구에도 불구하고, 선수가 약속된 시간 안에 경기를 하지 않는 경우(not played, 시간초과)
        If in spite of the demand of the referee the player does not play within the appointed period of time (indicated by “not played”)</li>
      <li>큐볼이 쿠션이나 다른 볼에 붙은 경우에 쿠션이나 붙은 볼을 향해서 진행시킨 경우</li>
    </ol>
    <span>타임파울(정해진 시간 안에 치지 않은 파울)은 초구배치에서 시작한다.</span><br /><br />
    <span>고의적 파울 위에서 정의된 파울이 고의적으로 행해진 것이라면,
      자기 차례가 된 무고한 상대방은 만약 이 위치가 자신에게 더 유리하다고 생각되면
      고의적 반칙이 발생하기 전에 공이 있었던 그 자리에 공을 재배치해 줄 것을 심판에게 요구할 수 있다.</span>
  </div >;
}

export default Rule;