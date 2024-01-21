import React from 'react'

function Card({username='user', post = "not assigned yet"}) {
  return (
    <>
        <figure className="md:fbg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-44 h-44 rounded-full mx-auto" src="https://cdn.pixabay.com/photo/2017/09/07/11/57/sea-2724870_1280.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {username}
        {/* {username || 'nabin'} */}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        {post}
      </div>
    </figcaption>
  </div>
</figure>

    </>
  )
}

export default Card