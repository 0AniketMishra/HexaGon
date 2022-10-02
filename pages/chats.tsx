import Chat from '../components/Chat/Chat'
import ChatSidebar from '../components/Chat/ChatSidebar'
import Header from '../components/Common/Header'
import MiniProfile from '../components/Common/MiniProfile'
import Suggestions from '../components/Common/Suggestions'
import ChatModal from '../components/Modal/ChatModal'
import { RecoilRoot } from "recoil"

function chats() {

  return (
    <div className='bg-gray-100 h-screen'>
      <RecoilRoot>
        <ChatModal />
        <Header />
        <main className='grid grid-cols-1 md:grid-cols-10 lg:grid-cols-9 lg:max-w-7xl mx-auto'>
  
          <section className="lg:col-span-2 md:col-span-10 ">
            <ChatSidebar/>
          </section>
      
          <section className="lg:col-span-5 md:col-span-10 ">
           
              <Chat />
            
          </section>

          <section className="hidden lg:inline-grid lg:cols-span-1">
            <div className="fixed top-20">
              <MiniProfile />
              <Suggestions />
            </div>
          </section>
          
        </main>
      </RecoilRoot>
    </div>

  )
}

export default chats