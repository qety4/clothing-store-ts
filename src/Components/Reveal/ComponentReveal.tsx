import React, { useEffect, useRef } from 'react'
import { motion,useAnimation,useInView } from 'framer-motion'

function ComponentReveal({ children }: { children: JSX.Element }) {
    const ref = useRef(null)
    const isInView = useInView(ref,{ once: true })

    const mainControls=useAnimation();

    useEffect(()=>{
        if(isInView)
            mainControls.start('visible')
    },[isInView])

    return (
        <div ref={ref} style={{ position: 'relative' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0.3, y: 13 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial='hidden'
                animate={mainControls}
                transition={{duration:0.8,delay:0}}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default ComponentReveal