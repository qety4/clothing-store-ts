import { useRef } from 'react'
import { motion } from 'framer-motion'

function ProductReveal({ children, homePage }: { children: JSX.Element, homePage: boolean }) {
    const ref = useRef(null)

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
                        hidden: { opacity: 0.3, y: 1 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    {children}
                </motion.div>
            </div>
        )
}

export default ProductReveal