import AgentSearchWindow from '@/components/agentsearchwindow'

export function Registrypreview() {
  return (
    <div className="min-h-screen bg-primary">
     
      
      <main className="container mx-auto">
        <div className="flex flex-col items-center">
          <div>
            <h1 className="text-4xl font-medium tracking-tight text-purple-900 sm:text-5xl md:text-6xl py-7" style={{
        fontFamily: 'BogueItalic, sans-serif',
        fontStyle: 'italic',
        
      }}>
              Wanna meet our agents?
            </h1>
           
          </div>
          
          <div className='w-full'>
            <AgentSearchWindow />
          </div>
        </div>
      </main>
    </div>
  )
}