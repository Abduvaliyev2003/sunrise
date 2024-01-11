import './App.css';

// Icons
import instagram from './assets/instagram.svg'
import telegram from './assets/telegram.svg'
import facebook from './assets/facebook.svg'
import youtube from './assets/youtube.svg'
import web from './assets/web.svg'
import location from './assets/location.svg'
// logo
import logo from './assets/sunriselogo.png'



function App() {
  return (
    <>
      <div id="linksPage" class="min-h-screen pt-40 bg-gradient-to-br to-white from-white-opacity-760"
        style={{
          background: 'url("/bg.webp") 50% 50% / cover no-repeat'
        }}
      >
         <div class="w-[300px] h-24 flex items-center  justify-center mx-auto  overflow-hidden transform -translate-y-12 ">
            <img src={logo} class="px-2.3" alt="Logo" />
          </div>
        <section class="container mx-auto card-links lg:px-12 rounded-none sm:rounded-2xl border-2 border-blue-900">
          {/* <div class="w-24 h-24 flex items-center bg-white justify-center mx-auto rounded-full overflow-hidden transform -translate-y-12 border-2 border-blue-900">
            <img src="https://sunriseinfo.uz/image/catalog/imag/Sunrise-logo_2.png" class="px-1.5" alt="Logo" />
          </div> */}
          <div class="transform -translate-y-4 pb-4">
            <h4 class="text-2xl text-center font-semibold mt-10">Kontaktlar:</h4>
            
            <div class="space-y-4 mt-8">
              <a target="_blank" rel="noreferrer" href="https://sunriseinfo.uz/" class="w-full shadow-lg bg-white py-3.5 px-4 rounded-lg flex items-center justify-start space-x-2.5">
                <img src={ web } width="50" class="unselect" alt="Icon" />
                <div>
                  <h6 class="text-xl">Web-site</h6>
                  <p class="text-xs">www.sunriseinfo.uz</p>
                </div>
              </a>
              
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/sunriseinfo_uz?igsh=MW16dHRza3ZmdHV0aw==" class="w-full shadow-lg bg-white py-3.5 px-4 rounded-lg flex items-center justify-start space-x-2.5">
                <img src={ instagram } class="unselect" alt="Icon" />
                <div>
                  <h6 class="text-xl">Instagram</h6>
                  <p class="text-xs">@sunriseinfo.uz</p>
                </div>
              </a>

              <a target="_blank" rel="noreferrer" href="https://t.me/sunriseinfouz" class="w-full shadow-lg bg-white py-3.5 px-4 rounded-lg flex items-center justify-start space-x-2.5">
                <img src={ telegram } class="unselect" alt="Icon" />
                <div>
                  <h6 class="text-xl">Telegram</h6>
                  <p class="text-xs">@sunriseinfouz</p>
                </div>
              </a>

              <a target="_blank" rel="noreferrer" href="#" class="w-full shadow-lg bg-white py-3.5 px-4 rounded-lg flex items-center justify-start space-x-2.5">
                <img src={ facebook } class="unselect" alt="Icon" />
                <div>
                  <h6 class="text-xl">Facebook</h6>
                  {/* <p class="text-xs">@jobo.uz</p> */}
                </div>
              </a>

              {/* <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCX7JE0WqpuK3MhbTG_xMbDA" class="w-full shadow-lg bg-white py-3.5 px-4 rounded-lg flex items-center justify-start space-x-2.5">
                <img src={ youtube } class="unselect" alt="Icon" />
                <div>
                  <h6 class="text-xl">Youtube</h6>
                  <p class="text-xs">Jobo.uz</p>
                </div>
              </a> */}

              <a target="_blank" rel="noreferrer" href="https://yandex.com/map-widget/v1/?um=constructor%3A2c0756bb46ae61826723ce3c1b17d9f895adc1852a67efac7b514d436d2acda3&amp;source=constructor" class="w-full shadow-lg bg-white py-3.5 px-4 rounded-lg flex items-center justify-start space-x-2.5">
                <img src={ location } class="unselect" alt="Icon" width={ 50 } />
                <div>
                  <h6 class="text-xl">Manzil</h6>
                  <p class="text-xs">Узбекистан, город Ташкент, улица Ифтихор, 1-дом.</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
