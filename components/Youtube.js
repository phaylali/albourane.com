import React from 'react'
import ReactPlayer from 'react-player/lazy'

export default function Youtube({ link }) {
  return <ReactPlayer url={`${link}`} controls="true" />
}
