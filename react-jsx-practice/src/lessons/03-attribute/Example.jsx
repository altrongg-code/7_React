// HTML 속성 (class, style, href, ...) 을 거의 사용하지만
// 일부 이름이 달라지는 항목들이 있음.

function Example () {
    
    const boxStyle = {
        backgroundColor: 'lightyellow',
        padding: 12,
        borderRadius: 8
    }
    
    return (
        <>
            <p className="highlight">클래스를 지정할 땐 className을 사용!</p>
            {/* 바깥쪽 중괄호 : JavaScript 작성을 위해 표현,
                안쪽 중괄호 : 스타일 정보를 담은 객체를 표현 */}
            <p style={{color: 'indianred', fontSize: 20}}>
                style은 객체 형태로 입력! 스타일 속성명은 className 사용.
            </p>

            <p style={boxStyle}>스타일 객체를 변수로 지정하여 사용 가능!</p>

            {/* for 속성 대신 htmlFor 를 사용해야 함! */}
            <label htmlFor="nickname">닉네임</label>
            <input type="text" id="nickname" placeholder="여기에 닉네임을 입력하세요..."></input>

            <br/>
            {/* true/false 값을 가지는 속성은 이름만 작성해도  */}
            <button disabled>
                비활성화 버튼
            </button>
        </>
    )
}

export default Example