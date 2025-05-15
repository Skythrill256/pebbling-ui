import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronDown } from "lucide-react"

export default function FAQSection() {
  return (
    <section className=" w-full flex flex-col items-center justify-center  py-16 md:py-24 " >
      <div className="w-full flex flex-col px-4 md:px-52 ">
        <div className="w-full flex flex-col space-y-4 text-center mb-12" >
          <div className="space-y-3 text-purple-900">
            <span className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl text-purple-900 "style={{
        fontFamily: 'BogueItalic, sans-serif',
        fontStyle: 'italic',
        
      }}>
              Frequently Asked Questions
              {/* <div className="w-full h-1 mx-auto bg-white rounded-full my-2"></div> */}
            </span>
            
            <p className="mx-auto max-w-[700px] text-purple-900 mt-3 md:text-xl"  style={{
        fontFamily: 'inter, sans-serif',
        
        
      }}>
              Find answers to common questions about Pebbling AI and how it can simplify your development workflow.
            </p>
          </div>
        </div>
        <div className="w-full" style={{
        fontFamily: 'inter, sans-serif',
        
        
      }}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="item-1"
              className="rounded-lg bg-white/75 bg-gradient-to-r from-pink-200/40 via-violet-200/40 to-indigo-200/40 border border-white/30 overflow-hidden"
            >
              <AccordionTrigger className="text-lg font-normal px-6 py-4 text-purple-900  hover:no-underline flex items-center justify-between">
                What is Pebbling AI?
                
              </AccordionTrigger>
              <AccordionContent className="text-purple-900  px-6 pb-6 pt-2">
                Pebbling AI is a platform that helps you build, deploy, and scale your applications with ease. Our tools
                streamline your development workflow so you can focus on what matters most - your code.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="rounded-lg bg-white/75 bg-gradient-to-r from-pink-200/40 via-violet-200/40 to-indigo-200/40 border border-white/30 overflow-hidden"
            >
              <AccordionTrigger className="text-lg font-medium px-6 py-4 text-purple-900  hover:no-underline transition-colors flex items-center justify-between">
                How do I get started with Pebbling?
                
              </AccordionTrigger>
              <AccordionContent className="text-purple-900  px-6 pb-6 pt-2">
                Getting started is simple. You can install Pebbling using pip with the command{" "}
                <code className="bg-gray-100 px-2 py-1 rounded text-[#7c3aed]">pip install pebbling</code>, then follow
                our quick start guide in the documentation. You can be up and running in just 5 minutes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="rounded-lg bg-white/75 bg-gradient-to-r from-pink-200/40 via-violet-200/40 to-indigo-200/40 border border-white/30 overflow-hidden"
            >
              <AccordionTrigger className="text-lg font-medium px-6 py-4 text-purple-900  hover:no-underline transition-colors flex items-center justify-between">
                What kind of applications can I build with Pebbling?
                
              </AccordionTrigger>
              <AccordionContent className="text-purple-900  px-6 pb-6 pt-2">
                Pebbling supports a wide range of application types, from simple web apps to complex, distributed
                systems. Our platform is language-agnostic and integrates with your existing tools and workflows.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="rounded-lg bg-white/75 bg-gradient-to-r from-pink-200/40 via-violet-200/40 to-indigo-200/40 border border-white/30 overflow-hidden"
            >
              <AccordionTrigger className="text-lg font-medium px-6 py-4 text-purple-900  hover:no-underline transition-colors flex items-center justify-between">
                Is Pebbling secure?
                
              </AccordionTrigger>
              <AccordionContent className="text-purple-900  px-6 pb-6 pt-2">
                Yes, security is a top priority for us. Pebbling implements industry-standard security practices,
                including encryption at rest and in transit, regular security audits, and compliance with major security
                frameworks. Visit our Security page to learn more.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="rounded-lg bg-white/75 bg-gradient-to-r from-pink-200/40 via-violet-200/40 to-indigo-200/40 border border-white/30 overflow-hidden"
            >
              <AccordionTrigger className="text-lg font-medium px-6 py-4 text-purple-900  hover:no-underline transition-colors flex items-center justify-between">
                What pricing plans are available?
                
              </AccordionTrigger>
              <AccordionContent className="text-purple-900  px-6 pb-6 pt-2">
                We offer flexible pricing plans to suit teams of all sizes, from individual developers to enterprise
                organizations. Our pricing page provides detailed information about features and costs. We also offer a
                free tier so you can try Pebbling before committing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-6"
              className="rounded-lg bg-white/75 bg-gradient-to-r from-pink-200/40 via-violet-200/40 to-indigo-200/40 border border-white/30 overflow-hidden"
            >
              <AccordionTrigger className="text-lg font-medium px-6 py-4 text-purple-900  hover:no-underline transition-colors flex items-center justify-between">
                How can I get support?
                
              </AccordionTrigger>
              <AccordionContent className="text-purple-900  px-6 pb-6 pt-2">
                We provide multiple support channels including comprehensive documentation, community forums, and direct
                support via email. Enterprise customers also have access to dedicated support representatives and
                priority response times.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
