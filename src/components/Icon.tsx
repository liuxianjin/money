import React from "react";
import cs from "classnames"
// import x from 'icons/money.svg';// 不打印一下会被删
// import y from 'icons/tags.svg';

// require('icons/money.svg')
// require('icons/tags.svg')
// require('icons/charts.svg')

// require 引入所有svg
// yarn add --dev @types/webpack-env 解决 typescript 报错
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext)
try {
  requireAll(require.context('icons', true, /\.svg$/))
} catch (err) {
  console.log(err)
}


type Props = {
  name?: string
} & React.SVGAttributes<SVGElement>

function Icon(props: Props) {
  const {name, children, className, ...rest} = props;
  return (
    <svg className={cs('icon', className)} {...rest}>
      <use xlinkHref={'#' + props.name}></use>
    </svg>
  )
}

export default Icon;
