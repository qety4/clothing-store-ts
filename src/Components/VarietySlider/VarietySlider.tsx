import { slides } from '../../assets/slides/slides'
import { useCallback, useEffect, useRef, useState } from 'react'
import './varietySlider.styles.scss'
import { motion } from 'framer-motion'


type TimerRef = ReturnType<typeof setTimeout> | null

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
    }, [currentIndex, setIndex])

    const gotToSlide = (index: number) => {
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
    }, [nextSlide])

    return (
            <motion.section className='slider-home'
            variants={{
                hidden: { opacity: 0, y:1 },
                visible: { opacity: 1, y:0 }
            }}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 0.3 }}
            >
                <div className='variety-title'>
                    <p >
                        styles
                    </p>
                </div>
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
            </motion.section>
    )
}
export default Slider