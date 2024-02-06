const Carousel = ()=>{
    return(
<div id="default-carousel" className="relative w-full" data-carousel="slide">
   
    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://media.discordapp.net/attachments/1164497786964803585/1164830608623673344/image.png?ex=6544a40a&is=65322f0a&hm=915edc514ea3a914e3f9d135041e26e29bac40d558ba2d3cf3fd28e65ce7242c&=&width=1400&height=670" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain overflow-hidden" alt="..."/>
        </div>
       
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://media.discordapp.net/attachments/1164497786964803585/1164830608623673344/image.png?ex=6544a40a&is=65322f0a&hm=915edc514ea3a914e3f9d135041e26e29bac40d558ba2d3cf3fd28e65ce7242c&=&width=1233&height=589" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
      
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://media.discordapp.net/attachments/1164497786964803585/1164830767361310770/image.png?ex=6544a430&is=65322f30&hm=7e43dfa44c36748500ca5883a5124f0955fe55b9257bef34c990c3b94587bcf4&=&width=1239&height=589" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
       
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://media.discordapp.net/attachments/1164497786964803585/1164831005354512415/image.png?ex=6544a469&is=65322f69&hm=c5d110b3f59d5633bac82de153479a0f491beedb8f0a8f6a86d4989d866a9e75&=&width=1233&height=589" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://media.discordapp.net/attachments/1164497786964803585/1164831859071533128/survey1.jpeg?ex=6544a534&is=65323034&hm=8fe40e44b70163aec0e9dac2a1fb7f57560bc7618f84b356add27afd1ef27507&=&width=916&height=458" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
   
    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
   
    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>
    )
}
export default Carousel;

