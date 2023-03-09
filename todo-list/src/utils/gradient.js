/* eslint-disable */
/* 의도적인 딜레이를 줘야하기 떄문에 eslint-disable하였습니다 */

const dealy = async (ms) => await new Promise((res) => setTimeout(res, ms))
export default async function changeTextBgColor() {
  for (let i = 0; i < 100; i++) {
    await dealy(2000)
    Array.from(document.querySelectorAll('.gradient p')).map((e, idx) => {
      console.log(idx)
      setTimeout(() => e.classList.toggle('transitionOn'), 500 * idx)
    })
  }
}
changeTextBgColor()
