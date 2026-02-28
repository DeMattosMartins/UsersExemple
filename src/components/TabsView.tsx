import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs'
import { AllUsers } from '../pages/home'
import { MyProfile } from '../pages/myProfile'
import { Footer } from './Footer'

export const TabsView = () => {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <Tabs defaultValue="all-users" className="w-full min-h-0 flex-1 flex flex-col">
        <TabsList className="flex fixed top-4 left-1/2 -translate-x-1/2 z-10 bg-[#6a6a6a] rounded-full px-1 py-1 gap-1">
          <TabsTrigger
            value="all-users"
            className="px-5 py-1.5 text-sm font-medium text-[#d0d0d0] rounded-full transition-colors data-[state=active]:bg-[#808080] data-[state=active]:text-white hover:text-white"
          >
            All Users
          </TabsTrigger>
          <TabsTrigger
            value="my-profile"
            className="px-5 py-1.5 text-sm font-medium text-[#d0d0d0] rounded-full transition-colors data-[state=active]:bg-[#808080] data-[state=active]:text-white hover:text-white"
          >
            My Profile
          </TabsTrigger>
        </TabsList>

        <div className="pt-20 min-h-0 flex-1 flex flex-col">
          <TabsContent value="all-users" className="flex-1 overflow-auto min-h-0">
            <AllUsers />
          </TabsContent>
          <TabsContent value="my-profile" className="flex-1 overflow-auto min-h-0">
            <MyProfile />
          </TabsContent>
        </div>
      </Tabs>
      <Footer />
    </div>
  )
}
