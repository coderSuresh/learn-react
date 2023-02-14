import React, { useState } from 'react'
import './styles/style.css'

function App() {

  const [color, setColor] = useState('#ffffff')
  const [shadowColor, setShadowColor] = useState('#64646f')
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(7)
  const [blurRadius, setBlurRadius] = useState(29)
  const [spreadRadius, setSpreadRadius] = useState(0)
  const [opacity, setOpacity] = useState(0.2)
  const [hexaShadowColor, setHexaShadowColor] = useState('64646f33')

  const createHEXA = () => {
    const hexRGB = shadowColor.slice(1)
    setHexaShadowColor(() => hexRGB + parseInt(opacity * 255).toString(16))
  }

  const updateOffsetX = (e) => {
    setOffsetX(e.target.value)
  }

  const updateOffsetY = (e) => {
    setOffsetY(e.target.value)
  }

  const updateBlurRadius = (e) => {
    setBlurRadius(e.target.value)
  }

  const updateSpreadRadius = (e) => {
    setSpreadRadius(e.target.value)
  }

  const updateShadowColor = (e) => {
    setShadowColor(e.target.value)
    createHEXA()
  }

  const updateColor = (e) => {
    setColor(e.target.value)
  }

  const updateOpacity = (e) => {
    setOpacity(e.target.value)
    createHEXA()
  }

  return (
    <div className="App max-w-screen-2xl mx-auto">
      <h1 className='text-center w-full text-3xl font-bold mt-4'>Box Shadow Generator</h1>
      <p className='max-w-3xl w-4/5 text-center mx-auto text-sm mt-4'>Are you getting bored trying to create a box shadow? A box shadow generator can help you create a box shadow with a live preview just by sliding a few sliders.</p>
      <div className='flex items-start flex-col-reverse md:flex-row justify-center'>
        <div className='bg-white shadow-lg p-6 md:w-5/12 w-4/5 m-8'>
          <div role="form">
            <div className="flex">
              <div className="mt-4 flex flex-col max-w-md">
                <label htmlFor="color">Card Color</label>
                <input type="color" value={color} onInput={updateColor} name="color" id="color" />
              </div>
              <div className="mt-4 ml-5 flex flex-col max-w-md">
                <label htmlFor="shadow-color">Shadow Color</label>
                <input type="color" value={shadowColor} onInput={updateShadowColor} name="shadow-color" id="shadow-color" />
              </div>
            </div>

            <div className="mt-4 flex flex-col max-w-md">
              <label htmlFor="offset-x">Offset X</label>
              <input type="range" value={offsetX} min={0} max={50} onInput={updateOffsetX} name="offset-x" id="offset-x" />
            </div>
            <div className="mt-4 flex flex-col max-w-md">
              <label htmlFor="offset-y">Offset Y</label>
              <input type="range" value={offsetY} min={0} max={50} onInput={updateOffsetY} name="offset-y" id="offset-y" />
            </div>
            <div className="mt-4 flex flex-col max-w-md">
              <label htmlFor="blur-radius">Blur Radius</label>
              <input type="range" value={blurRadius} min={0} max={50} onInput={updateBlurRadius} name="blur-radius" id="blur-radius" />
            </div>
            <div className="mt-4 flex flex-col max-w-md">
              <label htmlFor="spread-radius">Spread Radius</label>
              <input type="range" value={spreadRadius} min={0} max={50} onInput={updateSpreadRadius} name="spread-radius" id="spread-radius" />
            </div>
            <div className="mt-4 flex flex-col max-w-md">
              <label htmlFor="shadow-opacity">Shadow Opacity</label>
              <input type="range" value={opacity} min={0} max={1.01} step={0.01} onInput={updateOpacity} name="shadow-opacity" id="shadow-opacity" />
            </div>
          </div>
        </div>

        <div className='bg-white shadow-lg p-6 md:w-5/12 w-4/5 m-8'>
          <h2 className='text-2xl font-bold mt-4'>Preview</h2>
          <div className='mt-4 h-52 w-52 rounded' style={{ backgroundColor: `${color}`, boxShadow: `${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px #${hexaShadowColor}` }}>
          </div>
          <p className='mt-8'>box-shadow: {`${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px #${hexaShadowColor}`}</p>
        </div>
      </div>
      <p className='text-center mt-8 mb-4'>Developed by: <a href="https://github.com/coderSuresh" className='text-red-800' target={'_blank'}>Suresh Dahal</a></p>
    </div>
  )
}

export default App
