import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

function ProductReveal({ children, homePage }: { children: JSX.Element, homePage: boolean }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView)
            mainControls.start('visible')
    }, [isInView])

    return homePage ?
        (
            <>
                {children}
            </>
        )
        :
        (
            <div ref={ref} style={{ position: 'relative' }}>

                <motion.div
                    variants={{
                        hidden: { opacity: 0.3, y: 3 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial='hidden'
                    animate={mainControls}
                    transition={{ duration: 1, delay: 0 }}
                >
                    {children}
                </motion.div>
            </div>
        )
}

export default ProductReveal