import {MenuList } from "../data/data"

const navbar = () => {
  return `
  ${MenuList.map((nav)=>{
    return `
    <div><ul>
    <li class="">
      <a href="${nav.link}">${nav.name}</a>
    </li>
  </ul>
  </div>
    `
  }).join("")}
  `
}

export default navbar