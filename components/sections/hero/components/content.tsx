'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, ArrowDownRight } from "lucide-react"

export const Content = () => {
  return(
    <div>
      <h1 className="text-7xl font-black text-text-primary mb-4">
        Rafael Pinheiro
      </h1>
      <h2 className="text-6xl font-black text-text-primary mb-4">
        Desenvolvedor
      </h2>
      <h2 className="text-6xl font-black text-text-primary mb-6">
        Fullstack
      </h2>
      <p className="text-xl text-text-secondary max-w-2xl mb-8">
        Especializado em React, Node.js e TypeScript. Não só criando código, mas gerando valor para a sua empresa!
      </p>
      <div className="flex">
        <Button
          variant="default"
          size="lg"
          className="inline-flex items-center gap-2"
        >
          Projetos
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <ArrowDown />
          </motion.div>
        </Button>
      </div>
    </div>
  )
}