import React from 'react'
import { RouteObject } from 'react-router-dom'
import Home from '../pages/Home'

export interface extraBizObject {
  title?: string;
  isShow: boolean
}

export type ZHRouter = Array<RouteObject & extraBizObject> 

export const router: ZHRouter = [
  {
    path: '/', element: <Home />, title: '首页', isShow: true,
    children: []
  }
]