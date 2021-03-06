import React from "react"
import { Link } from "gatsby"
import * as style from "./postNav.module.css"

const PostNav = ({ prevPost, nextPost }) => {
  return (
      <nav className={style.postnav}>
        {prevPost && (
          <Link to={`${prevPost.uri}`}>
            <div className={style.postnav__head}>Previous Post:</div>
            <div className={style.postnav__title}>{prevPost.title}</div>
          </Link>
        )}

        {nextPost && (
          <Link to={`${nextPost.uri}`}>
            <div className={style.postnav__head}>Next Post:</div>
            <div className={style.postnav__title}>{nextPost.title}</div>
          </Link>
        )}
      </nav>
  )
}

export default PostNav
