export default function setTitleNow() {
  const date = new Date()
  const day = `${date.getFullYear()} ${date.getMonth()} ${date.getDate()} ${date.toString().slice(0, 3)}`
  Array.from(document.querySelectorAll('.gradient-cover p')).map((el, i) => {
    if (i === 0) el.setAttribute('data-before', 'React To Do List')
    else if (i === 1) el.setAttribute('data-before', day)
  })
  return day
}
