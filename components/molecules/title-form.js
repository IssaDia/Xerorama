import React from 'react'
import SubtitleText from '../atoms/login-form/subtitle-text'
import TitleText from '../atoms/login-form/title-text'

export default function TitleForm(titleText, subtitleText) {
  return (
    <div className="m-4 ">
      <TitleText text={titleText} className="text-2xl font-bold" />
      <SubtitleText text={subtitleText} className="text-greyDarkXero" />
    </div>
  )
}
