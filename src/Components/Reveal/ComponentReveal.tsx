import React, { useRef } from 'react'
import { motion } from 'framer-motion'

function ComponentReveal({ children }: { children: JSX.Element }) {
    const ref = useRef(null)

    return (
        <div ref={ref} style={{ position: 'relative' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0.3, y: 8 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default ComponentReveal