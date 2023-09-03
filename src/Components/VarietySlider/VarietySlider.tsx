import { slides } from '../../assets/slides/slides'
import { useCallback, useEffect, useRef, useState } from 'react'
import './varietySlider.styles.scss'

type TimerRef = ReturnType<typeof setTimeout >| null

const Slider = () => {
    let timerRef = useRef<TimerRef>(null)
    const [currentIndex, setIndex] = useState(0)

    
    const prevSlide = () => {
        currentIndex === 0 ?
        setIndex(slides.length - 1) :
        setIndex(currentIndex - 1)
    }
    const nextSlide = useCallback(() => {
        currentIndex === slides.length - 1 ?
        setIndex(0) : setIndex(currentIndex + 1)
    },[currentIndex,setIndex])

    const gotToSlide = (index: number) => {
        console.log('onclick', index)
        setIndex(index)
    }

    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current)
        }
        timerRef.current = setTimeout(() => {
            nextSlide()
        }, 13000)

        return () => {
            if (timerRef.current)
                clearTimeout(timerRef.current)
        }
    },[nextSlide])

    return (
        <div className='varietySlider'>

            <div className="slider">
                <div className="slide">

                    <div className='slide-img' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {
                            slides.map(img =>
                                <img key={img.title} alt='slide' className='slide-img-1' src={img.url} />
                            )
                        }
                    </div>
                </div>
                <div className='dot-btn-container'>
                    {slides.map((slide, index) => (
                        <div className="dot-btn" style={currentIndex === index ? { backgroundColor: 'black' } : {}} key={slide.url} onClick={
                            () => gotToSlide(index)
                        }>
                        </div>
                    ))

                    }
                </div>
                <div className='prev-next'>
                    <button
                        onClick={() => prevSlide()}
                    >
                        &#8249;
                    </button>
                    <button
                        onClick={() => nextSlide()}
                    >
                        &#8250;
                    </button>

                </div>

            </div>
        </div>

    )
}
export default Slider