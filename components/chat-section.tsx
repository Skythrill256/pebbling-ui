"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

interface FaqItem {
  question: string
  answer: string
}

interface FaqChatProps {
  faqItems: FaqItem[]
}

export default function FaqChat({ faqItems }: FaqChatProps) {
  return (
    <div className="space-y-24 pb-24">
      {faqItems.map((item, index) => (
        <FaqChatItem key={index} item={item} index={index} />
      ))}
    </div>
  )
}

function FaqChatItem({ item, index }: { item: FaqItem; index: number }) {
  const questionRef = useRef(null)
  const answerRef = useRef(null)
  const isQuestionInView = useInView(questionRef, { once: true, amount: 0.5 })
  const isAnswerInView = useInView(answerRef, { once: true, amount: 0.5 })

  return (
    <div className="flex flex-col gap-6">
      <motion.div
        ref={questionRef}
        className="self-start max-w-[80%] md:max-w-[60%]"
        initial={{ opacity: 0, x: -50 }}
        animate={isQuestionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-[#f0e6ff] rounded-2xl rounded-bl-none p-6 shadow-sm">
          <p className="text-[#0a0080] font-medium text-lg">{item.question}</p>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <div className="relative">
            <Image
              src="/avatar.png?height=40&width=40"
              alt="User"
              width={40}
              height={40}
              className="rounded-full bg-purple-100"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">User</p>
            <p className="text-xs text-green-600">Online</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={answerRef}
        className="self-end max-w-[80%] md:max-w-[60%]"
        initial={{ opacity: 0, x: 50 }}
        animate={isAnswerInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <div className="bg-[#8a2be2] text-white rounded-2xl rounded-br-none p-6 shadow-sm">
          <p className="font-medium text-lg">{item.answer}</p>
        </div>
        <div className="flex items-center gap-3 mt-2 justify-end">
          <div>
            <p className="text-sm font-medium text-gray-700 text-right">Pebbling AI</p>
            <p className="text-xs text-green-600 text-right">Online</p>
          </div>
          <div className="relative">
            <Image
              src="/avatar2.png?height=40&width=40"
              alt="Pebbling AI"
              width={40}
              height={40}
              className="rounded-full bg-[#8a2be2]"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
