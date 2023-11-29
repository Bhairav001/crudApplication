import React from 'react'
import { useNavigate } from 'react-router-dom';
import Page1 from './otherHomepage/Page1';

const HomePage = () => {
    const navigate = useNavigate()
    const style1={
        backgroundImage:"linear-gradient(180deg,transparent,rgba(0,0,0,.7));"
    }
    const style2={
        backgroundImage:"url('https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')",
    };
    
  return (
    <div>
        <Page1/>
      
    <div class="max-w-screen-xl mx-auto">
        <header class="flex items-center justify-between py-2 border-b">
          <a href="#" class="px-2 lg:px-0 uppercase font-bold text-purple-800">
            LOGO
          </a>
          <ul class="inline-flex items-center">
            <li class="px-2 md:px-4">
              <a href="#" class="text-purple-600 font-semibold hover:text-purple-500"> Home </a>
            </li>
            <li class="px-2 md:px-4">
              <a href="#" class="text-gray-500 font-semibold hover:text-purple-500"> About </a>
            </li>
            <li class="px-2 md:px-4">
              <a href="#" class="text-gray-500 font-semibold hover:text-purple-500"> Press </a>
            </li>
            <li class="px-2 md:px-4">
              <a href="/contact" class="text-gray-500 font-semibold hover:text-purple-500"> Contact </a>
            </li>
            <li class="px-2 md:px-4 hidden md:block">
              <a href="/login" class="text-gray-500 font-semibold hover:text-purple-500"> Login </a>
            </li>
            <li class="px-2 md:px-4 hidden md:block">
              <a href="/signup" class="text-gray-500 font-semibold hover:text-purple-500" onClick={()=>navigate("/signup")}> Register </a>
            </li>
          </ul>
    
        </header>
    
        <main class="mt-10">
        
         
    
          <div class="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
            <div class="w-full lg:w-2/3">
              <a class="block rounded w-full lg:flex mb-10"
                href="#"
              >
                <div 
                  class="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
                  style={style2} 
                  title="deit is very important"
                >
                </div>
                <div class="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                  <div>
                    <div class="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                      Aliquam venenatis nisl id purus rhoncus, in efficitur sem hendrerit.
                    </div>
                    <p class="text-gray-700 text-base">
                      Duis euismod est quis lacus elementum, eu laoreet dolor consectetur. 
                      Pellentesque sed neque vel tellus lacinia elementum. Proin consequat ullamcorper eleifend.
                    </p>
                  </div>
                  <div class="flex mt-3">
                    <img src="https://randomuser.me/api/portraits/men/86.jpg"
                      class="h-10 w-10 rounded-full mr-2 object-cover" />
                    <div>
                      <p class="font-semibold text-gray-700 text-sm capitalize"> eduard franz </p>
                      <p class="text-gray-600 text-xs"> 14 Aug </p>
                    </div>
                  </div>
                </div>
              </a>
    
              <div class="rounded w-full lg:flex mb-10">
                <div class="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
                  style={style2} title="deit is very important">
                </div>
                <div class="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                  <div>
                    <div class="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                      Integer commodo, sapien ut vulputate viverra
                    </div>
                    <p class="text-gray-700 text-base">
                      Nam malesuada aliquet metus, ac commodo augue mollis sit amet. 
                      Nam bibendum risus sit amet metus semper consectetur.
                      Proin consequat ullamcorper eleifend.
                      Nam bibendum risus sit amet metus semper consectetur.
                    </p>
                  </div>
                  <div class="flex mt-3">
                    <img src="https://randomuser.me/api/portraits/women/54.jpg"
                      class="h-10 w-10 rounded-full mr-2 object-cover" />
                    <div>
                      <p class="font-semibold text-gray-700 text-sm capitalize"> Serenity Hughes </p>
                      <p class="text-gray-600 text-xs"> 14 Aug </p>
                    </div>
                  </div>
                </div>
              </div>
    
              <div class="rounded w-full lg:flex mb-10">
                <div class="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
                  style={style2} title="deit is very important">
                </div>
                <div class="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                  <div>
                    <div class="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                      Suspendisse varius justo eu risus laoreet fermentum non aliquam dolor
                    </div>
                    <p class="text-gray-700 text-base">
                      Mauris porttitor, velit at tempus vulputate, odio turpis facilisis dui, 
                      vitae eleifend odio ipsum at odio. Phasellus luctus scelerisque felis eget suscipit. 
                    </p>
                  </div>
                  <div class="flex mt-3">
                    <img src="https://randomuser.me/api/portraits/men/86.jpg"
                      class="h-10 w-10 rounded-full mr-2 object-cover" />
                    <div>
                      <p class="font-semibold text-gray-700 text-sm capitalize"> eduard franz </p>
                      <p class="text-gray-600 text-xs"> 14 Aug </p>
                    </div>
                  </div>
                </div>
              </div>
    
            </div>
    
            <div class="w-full lg:w-1/3 px-3">
              <div class="mb-4">
                <h5 class="font-bold text-lg uppercase text-gray-700 px-1 mb-2"> Popular Topics </h5>
                <ul>
                  <li class="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                    <a href="#" class="flex items-center text-gray-600 cursor-pointer">
                      <span class="inline-block h-4 w-4 bg-green-300 mr-3"></span>
                      Nutrition
                      <span class="text-gray-500 ml-auto">23 articles</span>
                      <i class='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                    </a>
                  </li>
                  <li class="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                    <a href="#" class="flex items-center text-gray-600 cursor-pointer">
                      <span class="inline-block h-4 w-4 bg-indigo-300 mr-3"></span>
                      Food & Diet
                      <span class="text-gray-500 ml-auto">18 articles</span>
                      <i class='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                    </a>
                  </li>
                  <li class="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                    <a href="#" class="flex items-center text-gray-600 cursor-pointer">
                      <span class="inline-block h-4 w-4 bg-yellow-300 mr-3"></span>
                      Workouts
                      <span class="text-gray-500 ml-auto">34 articles</span>
                      <i class='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                    </a>
                  </li>
                  <li class="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                    <a href="#" class="flex items-center text-gray-600 cursor-pointer">
                      <span class="inline-block h-4 w-4 bg-blue-300 mr-3"></span>
                      Immunity
                      <span class="text-gray-500 ml-auto">9 articles</span>
                      <i class='text-gray-500 bx bx-right-arrow-alt ml-1'></i>
                    </a>
                  </li>
                </ul>
              </div>
    
              <div class="border border-dotted"></div>
    
              <div class="p-1 mt-4 mb-4">
                <h5 class="font-bold text-lg uppercase text-gray-700 mb-2"> Subscribe </h5>
                <p class="text-gray-600">
                  Subscribe to our newsletter. We deliver the best health related articles to your inbox
                </p>
                <input placeholder="your email address"
                  class="text-gray-700 bg-gray-100 rounded-t hover:outline-none p-2 w-full mt-4 border" />
                <button class="px-4 py-2 bg-indigo-600 text-gray-200 rounded-b w-full capitalize tracking-wide">
                  Subscribe
                </button>
              </div>
    
              <div class="border border-dotted"></div>
    
            </div>
    
          </div> 
        </main>
     
        {/* <footer class="border-t mt-32 pt-12 pb-32 px-4 lg:px-0">
          <div class="flex">
    
            <div class="w-full md:w-1/3 lg:w-1/4">
              <h6 class="font-semibold text-gray-700 mb-4">Company</h6>
              <ul>
                <li> <a href="#" class="block text-gray-600 py-2">Team</a> </li>
                <li> <a href="#" class="block text-gray-600 py-2">About us</a> </li>
                <li> <a href="#" class="block text-gray-600 py-2">Press</a> </li>
              </ul>
            </div>
    
            <div class="w-full md:w-1/3 lg:w-1/4">
              <h6 class="font-semibold text-gray-700 mb-4">Content</h6>
              <ul>
                <li> <a href="#" class="block text-gray-600 py-2">Blog</a> </li>
                <li> <a href="#" class="block text-gray-600 py-2">Privacy Policy</a> </li>
                <li> <a href="#" class="block text-gray-600 py-2">Terms & Conditions</a> </li>
                <li> <a href="#" class="block text-gray-600 py-2">Documentation</a> </li>
              </ul>
            </div>
    
          </div>
        </footer> */}
      </div>
    </div>
  )
}

export default HomePage