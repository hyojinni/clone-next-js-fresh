// import Image from 'next/image'
// import styles from './page.module.css'

export default function Home() {
  // let name = "lee"
  // let link = "http://www.google.com"
  return (
    <div>
      <h1 style={{ color: "#4376a6", fontSize: "30px" }}>Next.js 초급과정 학습</h1>
      <div class="code-box" contenteditable="true">
        <p>링크: <span className="text-aquamarine">&#123; link &#125;</span></p>
        <p>CSS class경우: <span className="text-aquamarine">className="box"</span></p>
        <p>style 정의할 경우: <span className="text-aquamarine">style=&#123;&#123; color: "#4376a6", fontSize: "30px" &#125;&#125;</span></p>
        <p>'use client' : 클라이언트에서 실행되는 소스 파일을 표시</p>
        <p>경로작성 상위 : <span className="text-aquamarine">'./../data.js</span></p>
        <p>경로작성 하위 : <span className="text-aquamarine">'./폴더명/data.js</span></p>
        <div className="code-box__comment">
          <h3>server component</h3>
          <p>로딩속도가 빠름</p>
          <p>검색엔진노출유리</p>
          <p>큰페이지는 서버 컴포넌트로 만드는 것을 추천</p>
        </div>
        <div className="code-box__comment">
          <h3>client component</h3>
          <p>로딩속도 느림(자바스크립트 많이 필요)</p>
          <p>로딩속도 느림(hydration필요 :자바스크립트로 html 다시 읽고 분석하는일)</p>
        </div>
      </div>
    </div>
  )
}

