/* eslint-disable */
/* 의도적인 딜레이를 줘야하기 떄문에 eslint-disable하였습니다 */

const dealy = async (ms) => await new Promise((res) => setTimeout(res, ms))

/**
 * @param {string} querySelector e.g) ".list p" => querySelectorAll(".list p")
 * @param {string} toggle selector e.g) ".toggle", "#toggle"
 * @param {number} ms
 */
export default async function changeTextBgColor(querySelector, toggle, ms) {
  // console.log('querySelector, toggle, ms :', querySelector, toggle, ms)
  while (true) {
    await dealy(ms)
    console.log('START ONE')
    Array.from(document.querySelectorAll(querySelector)).map((e, idx) =>
      setTimeout(() => e.classList.toggle(toggle), 500 * idx),
    )
  }
}
