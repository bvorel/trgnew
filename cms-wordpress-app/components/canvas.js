import React, { useRef, useEffect, useState, useLayoutEffect } from 'react'

const Canvas = props => {

  const canvasRef = useRef(null)
  const direction1 = Math.random() > 0.5 ? -1 : 1
  const direction2 = Math.random() > 0.5 ? -1 : 1
  const direction3 = Math.random() > 0.5 ? -1 : 1
  const direction4 = Math.random() > 0.5 ? -1 : 1
  const direction5 = Math.random() > 0.5 ? -1 : 1
  const direction6 = Math.random() > 0.5 ? -1 : 1
  const direction7 = Math.random() > 0.5 ? -1 : 1
  const direction8 = Math.random() > 0.5 ? -1 : 1
  const direction9 = Math.random() > 0.5 ? -1 : 1

  const gradientsArray = () => [
    {
      id: 1,
      x: 0,
      y: 0,
      hue: Math.floor( Math.random() * 360 ),
      velocity: ( Math.random() * 30 + 20 ) * 0.01 * direction1
    },
    {
      id: 2,
      x: 1,
      y: 0,
      hue: Math.floor( Math.random() * 360 ),
      velocity: ( Math.random() * 30 + 20 ) * 0.01 * direction2
    },
    {
      id: 3,
      x: 2,
      y: 0,
      hue: Math.floor( Math.random() * 360 ),
      velocity: ( Math.random() * 30 + 20 ) * 0.01 * direction2
    },
    {
      id: 4,
      x: 0,
      y: 1,
      hue: Math.floor( Math.random() * 360 ),
      velocity: ( Math.random() * 30 + 20 ) * 0.01 * direction3
    },
    {
      id: 5,
      x: 1,
      y: 1,
      hue: Math.floor( Math.random() * 360 ),
      velocity: ( Math.random() * 30 + 20 ) * 0.01 * direction5
    },
    {
      id: 6,
      x: 2,
      y: 1,
      hue: Math.floor( Math.random() * 360 ),
      velocity: ( Math.random() * 30 + 20 ) * 0.01 * direction6
    },
    {
      id: 7,
      x: 0,
      y: 2,
      hue: Math.floor( Math.random() * 360 ),
      velocity: ( Math.random() * 30 + 20 ) * 0.01 * direction7
    },
    {
      id: 8,
      x: 1,
      y: 2,
      hue: Math.floor( Math.random() * 360 ),
      velocity: ( Math.random() * 30 + 20 ) * 0.01 * direction8
    },
    {
      id: 9,
      x: 2,
      y: 2,
      hue: Math.floor( Math.random() * 360 ),
      velocity: ( Math.random() * 30 + 20 ) * 0.01 * direction9
    }
  ]
  let gradientOne = {
    x: 0,
    y: 0,
    hue: Math.floor( Math.random() * 360 ),
    velocity: ( Math.random() * 30 + 20 ) * 0.01 * Math.random() > 0.5 ? -1 : 1
  }

  const [gradients, setGradients] = useState(gradientsArray);
  // const [hueOne, setHueOne] = useState(gradients[0].velocity);
  // const [hueTwo, setHueTwo] = useState(gradients[1].velocity);
  // const [hueThree, setHueThree] = useState(gradients[2].velocity);
  // const [hueFour, setHueFour] = useState(gradients[3].velocity);


  // useEffect(() => {
  //   // const c = canvasRef.current;
  //   // const ctx = c.getContext('2d');
  //   const canvas = canvasRef.current
  //   const ctx = canvas.getContext('2d')
  //
  //   const gradient = ctx.createLinearGradient(0,0,0, canvas.height);
  //
  //   gradient.addColorStop(0, '#fff');
  //   gradient.addColorStop(1, '#000');
  //   ctx.fillStyle = gradient;
  //   ctx.fillRect(0, 0, canvas.width, canvas.width);
  // }, [])

  // useEffect(() => {
  //   console.log('useEffect')
  //   return () => {
  //     console.log('useEffect cleanup')
  //   }
  // })
  //
  // window.requestAnimationFrame(() => console.log('requestAnimationFrame'))
  //
  // useLayoutEffect(() => {
  //   console.log('useLayoutEffect')
  //   return () => {
  //     console.log('useLayoutEffect cleanup')
  //   }
  // })

  // const [counter, setCounter] = useState(0)
  const [hueOne, setHueOne] = useState(gradients[0].velocity)
  const [hueTwo, setHueTwo] = useState(gradients[1].velocity)
  const [hueThree, setHueThree] = useState(gradients[2].velocity)
  const [hueFour, setHueFour] = useState(gradients[3].velocity)
  const [hueFive, setHueFive] = useState(gradients[4].velocity)
  const [hueSix, setHueSix] = useState(gradients[5].velocity)
  const [hueSeven, setHueSeven] = useState(gradients[6].velocity)
  const [hueEight, setHueEight] = useState(gradients[7].velocity)
  const [hueNine, setHueNine] = useState(gradients[8].velocity)
  const [shouldStop, setShouldStop] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
     // console.log(counter);
     gradients.map((gradient, index) => (
       gradient.id === 1
         ? ctx.fillStyle = 'hsl(' + hueOne + ', 100%, 50% )'
         : null,
       gradient.id === 2
         ? ctx.fillStyle = 'hsl(' + hueTwo + ', 100%, 50% )'
         : null,
       gradient.id === 3
         ? ctx.fillStyle = 'hsl(' + hueThree + ', 100%, 50% )'
         : null,
       gradient.id === 4
         ? ctx.fillStyle = 'hsl(' + hueFour + ', 100%, 50% )'
         : null,
       gradient.id === 5
         ? ctx.fillStyle = 'hsl(' + hueFive + ', 100%, 50% )'
         : null,
       gradient.id === 6
         ? ctx.fillStyle = 'hsl(' + hueSix + ', 100%, 50% )'
         : null,
       gradient.id === 7
         ? ctx.fillStyle = 'hsl(' + hueSeven + ', 100%, 50% )'
         : null,
       gradient.id === 8
         ? ctx.fillStyle = 'hsl(' + hueEight + ', 100%, 50% )'
         : null,
       gradient.id === 9
         ? ctx.fillStyle = 'hsl(' + hueNine + ', 100%, 50% )'
         : null,
       ctx.fillRect( gradient.x, gradient.y, ctx.canvas.width, ctx.canvas.height )
     ));
  }, [hueOne])

  useLayoutEffect(() => {
    let timerId

    const animate = () => {

        setHueOne(a => a + gradients[0].velocity)
        setHueTwo(b => b + gradients[1].velocity)
        setHueThree(c => c + gradients[2].velocity)
        setHueFour(d => d + gradients[3].velocity)
        setHueFive(e => e + gradients[4].velocity)
        setHueSix(f => f + gradients[5].velocity)
        setHueSeven(g => g + gradients[6].velocity)
        setHueEight(h => h + gradients[7].velocity)
        setHueNine(i => i + gradients[8].velocity)
        // console.log(counter);
        timerId = requestAnimationFrame(animate)
    }
    timerId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(timerId)
  }, [shouldStop])

  return <canvas width="3" height="3" ref={canvasRef} {...props}/>
}

export default Canvas
